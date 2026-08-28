---
type: meta
title: Statblock Sistemi
canon: adapted
status: complete
tags: [rules, statblock, npc, monster, 2024]
updated: 2026-08-17
---

# 08 — Statblock Sistemi

Ager'de **her NPC ve her yaratık bir statsheet ile doğar.** Bu klasör onun nasıl
yazılacağını tanımlar.

> Otomatik akış: `Skill(statblock)` — `.claude/skills/statblock/SKILL.md`
> NPC ya da yaratık yaratılırken bu skill çalışır; buradaki dosyaları okur.

## Dosyalar

| Dosya | Ne cevaplar |
|---|---|
| **[format-2024.md](format-2024.md)** | Statblock'ta hangi satır, hangi sırayla, hangi kelimeyle? |
| **[cr-math.md](cr-math.md)** | AC / HP / hasar ne olmalı, CR nasıl doğrulanır? |
| **[npc-kits.md](npc-kits.md)** | Sınıflı bir NPC (paladin, wizard, rogue…) nasıl statblock'a çevrilir? |
| **[magic-items.md](magic-items.md)** | NPC'ye hangi eşya verilir, CR'yi nasıl etkiler? |
| **[grounding.md](grounding.md)** | Statsheet dünyaya nasıl bağlanır: kim, nerede, kimin adamı? |

## Sürüm kararı

**D&D 5e 2024 revizyonu (5.5e), 2025 Monster Manual formatı.**

- Format kaynağı: **SRD 5.2** (CC-BY-4.0) — serbestçe alıntılanabilir, `fr-canon`.
- ⚠️ **2024 DMG'de monster yaratma tablosu yok.** 2014'teki tablo yeni baskıya
  alınmadı. Bu yüzden [cr-math.md](cr-math.md)'deki denge tablosu yeniden kurulmuş
  bir rekonstrüksiyondur ve `canon: adapted`'tir. Kaynakları dosyanın
  `sources:` alanında.
- 2014 formatı (`Melee Weapon Attack: +7 to hit`, ayrı `Condition Immunities`
  satırı, spell slot tablosu) **kullanılmaz.**

## En kısa özet

1. Hedef **CR**'yi belirle → [cr-math.md §1](cr-math.md) tablosundan taban statları al.
2. Konsepti seç, sınıflıysa [npc-kits.md](npc-kits.md)'ten 3–5 özellik al.
3. Eşyaları [magic-items.md](magic-items.md) kurallarıyla ver; **resmî eşya**.
4. **CR'yi yeniden hesapla** ([cr-math.md §2](cr-math.md)) — hedeften ±1 içinde olmalı.
5. Bloğu [format-2024.md](format-2024.md) kalıplarıyla yaz.
6. [grounding.md](grounding.md) bölümlerini doldur — linkler, tarihler, sırlar.
7. İndeksleri güncelle: `09-index/who-is-who.md` · `02-lore/bestiary/README.md` ·
   `00-meta/changelog.md`.
