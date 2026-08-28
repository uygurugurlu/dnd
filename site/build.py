#!/usr/bin/env python3
"""
Ager sitesi icin index olusturucu.

Repo kokundeki tum .md dosyalarini tarar, frontmatter'lari okur ve
site/data/ altina iki JSON yazar:

  index.json   -> gezinti icin metadata (baslik, tip, etiket, tarih, backlink)
  search.json  -> arama icin duz metin

Kullanim:  python3 site/build.py
Bagimlilik yok (sadece Python 3 standart kutuphanesi).
"""

import json
import os
import re
import sys
from datetime import datetime, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "site", "data")

# Taranmayacak klasorler
SKIP_DIRS = {".git", ".obsidian", "node_modules", ".vscode", ".idea", "data", "vendor"}
# Taranmayacak kok dosyalar
SKIP_FILES = {"CLAUDE.md"}

CATEGORY_META = {
    "00-meta": ("Meta ve Sablonlar", "🧭", "Konvansiyonlar, sablonlar, changelog, acik sorular"),
    "01-cosmology": ("Kozmoloji", "🌌", "Great Wheel, duzlemler, planar seyahat"),
    "02-lore": ("Lore", "📜", "Pantheon, tarih, buyu, halklar, fraksiyonlar"),
    "03-ager": ("Ager", "🌍", "Ana gezegen: kitalar, uluslar, sehirler, mekanlar"),
    "04-charaxis": ("Charaxis", "🌙", "Ikiz dunya: bolgeler, planar mekanlar"),
    "05-characters": ("Karakterler", "🎭", "NPC'ler, oyuncu karakterleri, efsaneler"),
    "06-campaigns": ("Kampanyalar", "⚔️", "Oturumlar, arclar, questler, handout'lar"),
    "07-maps": ("Haritalar", "🗺️", "Dunya, bolge, sehir ve savas haritalari"),
    "08-rules": ("Kurallar", "📖", "House rules, homebrew, tablolar"),
    "09-index": ("Dizinler", "🔎", "Gazetteer, kim kimdir, zaman cizelgesi"),
    "site": ("Site", "🖥", "Bu okuma arayuzu nasil calisir"),
    "_root": ("Kok", "🏠", "Repo koku"),
}

FM_LIST_RE = re.compile(r"^\[(.*)\]$")

IMAGE_EXT = (".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".avif")


# --------------------------------------------------------------------------
# frontmatter
# --------------------------------------------------------------------------
def parse_frontmatter(text):
    """--- ile cevrili YAML blogunu (basit alt kume) sozluge cevirir."""
    if not text.startswith("---"):
        return {}, text
    end = text.find("\n---", 3)
    if end == -1:
        return {}, text
    block = text[3:end]
    rest = text[end + 4:].lstrip("\n")
    data = {}
    for line in block.splitlines():
        line = line.rstrip()
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        if ":" not in line or line.startswith((" ", "\t", "-")):
            continue
        key, _, value = line.partition(":")
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        m = FM_LIST_RE.match(value)
        if m:
            items = [v.strip().strip('"').strip("'") for v in m.group(1).split(",")]
            data[key] = [v for v in items if v]
        elif value:
            data[key] = value
    return data, rest


def first_heading(body):
    for line in body.splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return None


def prettify(slug):
    return re.sub(r"^\d+[-_]", "", slug).replace("-", " ").replace("_", " ").strip().title()


# --------------------------------------------------------------------------
# metin temizleme (arama icin)
# --------------------------------------------------------------------------
def plain_text(body):
    t = re.sub(r"```.*?```", " ", body, flags=re.S)
    t = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", t)
    t = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", t)
    t = re.sub(r"[#>*_`|~-]+", " ", t)
    t = re.sub(r"\s+", " ", t)
    return t.strip()


def norm_path(p):
    return os.path.normpath(p).replace(os.sep, "/")


# --------------------------------------------------------------------------
# tarama
# --------------------------------------------------------------------------
def collect():
    docs = {}
    assets = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = sorted(d for d in dirnames if d not in SKIP_DIRS and not d.startswith("."))
        for fn in sorted(filenames):
            if fn.lower().endswith(IMAGE_EXT) and not fn.startswith("."):
                rel_img = norm_path(os.path.relpath(os.path.join(dirpath, fn), ROOT))
                assets.append({
                    "path": rel_img,
                    "dir": os.path.dirname(rel_img),
                    "name": fn,
                    "kb": round(os.path.getsize(os.path.join(dirpath, fn)) / 1024),
                })
                continue
            if not fn.endswith(".md"):
                continue
            abs_path = os.path.join(dirpath, fn)
            rel = norm_path(os.path.relpath(abs_path, ROOT))
            if rel in SKIP_FILES:
                continue
            try:
                raw = open(abs_path, encoding="utf-8").read()
            except (OSError, UnicodeDecodeError) as exc:
                print("  ! okunamadi: %s (%s)" % (rel, exc), file=sys.stderr)
                continue
            fm, body = parse_frontmatter(raw)

            folder = os.path.dirname(rel)
            is_readme = fn.lower() == "readme.md"
            title = (
                fm.get("title")
                or fm.get("name")
                or first_heading(body)
                or (prettify(os.path.basename(folder)) if is_readme and folder else prettify(fn[:-3]))
            )
            if isinstance(title, list):
                title = ", ".join(title)

            tags = fm.get("tags") or []
            if isinstance(tags, str):
                tags = [tags]

            # Sayfanin tamami DM-only mi? (dosya adi / frontmatter)
            dm_only = (
                "dm-only" in rel.lower()
                or "secrets" in os.path.basename(rel).lower()
                or fm.get("visibility") == "dm"
                or fm.get("type") in ("secret", "secrets", "dm-notes")
            )
            # Sadece icinde DM blogu var mi? (blok bazinda gizlenir)
            dm_blocks = "[DM ONLY]" in raw

            docs[rel] = {
                "path": rel,
                "dir": folder,
                "title": str(title),
                "type": fm.get("type", ""),
                "canon": fm.get("canon", ""),
                "status": fm.get("status", ""),
                "updated": fm.get("updated", ""),
                "tags": tags[:12],
                "readme": is_readme,
                "dm": dm_only,
                "dmb": dm_blocks,
                "tpl": rel.startswith("00-meta/templates/") or "_template" in rel,
                "words": len(body.split()),
                "_body": body,
                "_raw": raw,
            }
    return docs, assets


LINK_RE = re.compile(r"\]\(([^)\s]+?\.md)(#[^)\s]*)?\)")


def build_backlinks(docs):
    back = {p: [] for p in docs}
    for path, doc in docs.items():
        seen = set()
        for m in LINK_RE.finditer(doc["_raw"]):
            href = m.group(1)
            if href.startswith(("http://", "https://", "//")):
                continue
            target = norm_path(os.path.join(doc["dir"], href)) if doc["dir"] else norm_path(href)
            if target in docs and target != path and target not in seen:
                seen.add(target)
                back[target].append(path)
    return back


def build_dirs(docs):
    dirs = {}
    for path, doc in docs.items():
        parts = doc["dir"].split("/") if doc["dir"] else []
        for i in range(len(parts) + 1):
            d = "/".join(parts[:i])
            entry = dirs.setdefault(d, {"path": d, "title": "", "docs": 0, "total": 0})
            if i == len(parts):
                entry["docs"] += 1
            entry["total"] += 1
    for d, entry in dirs.items():
        readme = (d + "/README.md") if d else "README.md"
        if readme in docs:
            entry["title"] = docs[readme]["title"]
            entry["readme"] = readme
        else:
            entry["title"] = prettify(os.path.basename(d)) if d else "Ager"
        top = d.split("/")[0] if d else "_root"
        if d and d == top and top in CATEGORY_META:
            name, icon, desc = CATEGORY_META[top]
            entry["icon"] = icon
            entry["desc"] = desc
    return dirs


def main():
    print("Ager sitesi indexleniyor...")
    docs, assets = collect()
    if not docs:
        print("Hic .md dosyasi bulunamadi.", file=sys.stderr)
        return 1
    backlinks = build_backlinks(docs)
    dirs = build_dirs(docs)

    # Hangi gorseller bir yazida gomulu/linkli? (galeride isaretlemek icin)
    used = set()
    for doc in docs.values():
        for m in re.finditer(r"\]\(([^)\s]+)\)", doc["_raw"]):
            href = m.group(1)
            if href.startswith(("http", "data:")) or not href.lower().endswith(IMAGE_EXT):
                continue
            used.add(norm_path(os.path.join(doc["dir"], href)) if doc["dir"] else norm_path(href))
    for a in assets:
        a["used"] = a["path"] in used

    index = {
        "generated": datetime.now(timezone.utc).astimezone().strftime("%Y-%m-%d %H:%M"),
        "categories": {k: {"title": v[0], "icon": v[1], "desc": v[2]} for k, v in CATEGORY_META.items()},
        "dirs": [dirs[k] for k in sorted(dirs)],
        "assets": sorted(assets, key=lambda a: a["path"]),
        "docs": [],
    }
    search = []
    for path in sorted(docs):
        d = docs[path]
        entry = {k: v for k, v in d.items() if not k.startswith("_")}
        entry["backlinks"] = sorted(backlinks[path])
        index["docs"].append(entry)
        search.append({
            "p": path,
            "t": d["title"],
            "g": " ".join(d["tags"]),
            "x": plain_text(d["_body"]),
        })

    os.makedirs(OUT_DIR, exist_ok=True)
    for name, payload in (("index.json", index), ("search.json", search)):
        target = os.path.join(OUT_DIR, name)
        with open(target, "w", encoding="utf-8") as fh:
            json.dump(payload, fh, ensure_ascii=False, separators=(",", ":"))
        print("  %-12s %6.1f KB" % (name, os.path.getsize(target) / 1024))

    print("Tamam: %d dosya, %d klasor, %d gorsel, %d backlink."
          % (len(docs), len(dirs), len(assets), sum(len(v) for v in backlinks.values())))
    return 0


if __name__ == "__main__":
    sys.exit(main())
