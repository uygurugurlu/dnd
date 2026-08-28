---
type: meta
title: Ager Kampanya Evreni
canon: mixed
status: usable
updated: 2026-08-10
---

# Ager Kampanya Evreni

**Ana gezegen:** Ager / *Aeltharys* · **İkiz dünya:** Charaxis / *Shae'Khar* ·
**Sistem:** The Syzygy of Vael · **Kozmoloji:** Great Wheel ·
**Lore tabanı:** Forgotten Realms (2024/2025)

Bu repo, kendi D&D evrenimin tek gerçek kaynağı (single source of truth).
Forgotten Realms'in lore'unu, tanrılarını, kozmolojisini ve tarihini kullanıyoruz —
ama **coğrafya bize ait**. Faerûn haritası yok.

---

## Evren Bir Bakışta

```
        THE SYZYGY OF VAEL — birbirine kilitli iki dünya
   ┌──────────────────────────────────────────────────────┐
   │   ★ AGER (Aeltharys)          ☾ CHARAXIS (Shae'Khar) │
   │   ─ gümüş-altın halkalar      ─ Aeltharys'in etrafında│
   │   ─ %90+ okyanus:               döner, güneşe 90° kilitli
   │     Thalassar Yayılımı        ─ Scorchvault ☀ / Black Still ❄
   │   ─ yaşanabilir toprak:       ─ yaşanabilir kuşak:    │
   │     Elandor Vael                Vael'Toruun           │
   │     (Sıkışık Kıyılar)           (Kül ve Don Kuşağı)   │
   │       └─ Karsovia               └─ Meridyen Yolu      │
   │           └─ Ravonia                4 şehir + moondust│
   └──────────────────────────────────────────────────────┘
```

## Hızlı Başlangıç

| Ne arıyorsun? | Nereye bak |
|---|---|
| Evrenin kuralları, canon politikası | [00-meta/canon-policy.md](00-meta/canon-policy.md) |
| Yeni dosya açacağım, format ne? | **00-meta/templates/** |
| Düzlemler, Nine Hells, Feywild | **01-cosmology/** |
| Tanrılar, Weave, tarih, faksiyonlar | **02-lore/** |
| **Kıtalar, ülkeler, şehirler** | **03-ager/** |
| **İkiz dünya** | **04-charaxis/** |
| NPC'ler, statblock'lar | **05-characters/** |
| **Aktif kampanya** | **06-campaigns/** |
| Haritalar | **07-maps/** |
| House rules, homebrew | **08-rules/** |
| "Şu isim neydi ya?" | **09-index/** |
| Cevaplanmamış sorular | [00-meta/open-questions.md](00-meta/open-questions.md) |

---

## Aktif Kampanya

### **Chains of the Burning Compact**

> Kimse yalan söylemiyor. Ama kimse gerçeği de bilmiyor.
> Büyük oyun **sözleşmede**; suçlananlar sadece piyon.

**Parti:** max (Maximus Legroom) · han · ea basr · ~~aysif~~ *(öldü → Cyric aldı)*
**Bölüm:** Chapter 1 — Ravonia

Wheatrest'teki possession vakalarından başlayan iz, [Bel](05-characters/npcs/major/bel/README.md)'in
ruh tedarik zincirine, oradan Ravonia'nın politik entrikasına ve sonunda tek bir imzaya
çıkıyor: **[Zariel](05-characters/npcs/major/zariel/README.md)**.

**Diğer kampanyalar:** [Oneshot — Clathropos](06-campaigns/oneshot-clathropos/README.md) ·
[New Campaign](06-campaigns/new-campaign/00-overview.md) *(planlama)*

---

## Dizin Yapısı

```
dnd/
├── 00-meta/              Konvansiyonlar + 18 şablon
├── 01-cosmology/         GREAT WHEEL — 16 Outer Plane, Inner/Transitive/Echo, Sigil
├── 02-lore/              Pantheon · Weave · tarih · halklar · faksiyonlar · diller
├── 03-ager/              ★ AGER (Aeltharys)
│   └── continents/elandor-vael/nations/karsovia/
│       ├── cities/ravonia/   4 kanat + mekânlar
│       ├── villages/         Wheatrest · Nethryn
│       └── sites/            Thornhold Kalesi
├── 04-charaxis/          ★ CHARAXIS (Shae'Khar) — Vael'Toruun, 4 şehir, moondust
├── 05-characters/        Zariel · Bel · Marcus Hale + minor NPC'ler + PC'ler
├── 06-campaigns/         3 kampanya
├── 07-maps/              Dünya + Ravonia haritaları, sahne görselleri
├── 08-rules/             House rules + homebrew
└── 09-index/             Gazetteer · kim-kimdir · sözlük · etiketler
```

---

## Ölçek Hiyerarşisi

```
Gezegen → Kıta → Ülke → Şehir → Semt/Mekân
                       → Kasaba
                       → Köy
                → Bölge (ülkeye bağlı olmayan)
```

**Kural:** Bir yer detaylanınca dosyadan klasöre terfi eder
(`x.md` → `x/README.md` + alt dosyalar).

## Lore Katmanları

| Katman | Nerede | Kaynak |
|---|---|---|
| **Canon FR** | `01-cosmology/`, `02-lore/` | Forgotten Realms 2024/2025 |
| **Uyarlanan** | Faksiyonlar, tanrı kültleri | FR kaynaklı, Ager'e göre değişmiş |
| [Homebrew](08-rules/homebrew/README.md) | `03-ager/`, `04-charaxis/`, kampanyalar | Tamamen bize ait |

Frontmatter'daki `canon:` alanı bunu işaretler → [canon-policy.md](00-meta/canon-policy.md)

---

## Siteyi Aç (okuma arayüzü)

Notları tarayıcıda forum gibi gezmek için:

```bash
./serve.sh          # → http://localhost:8787
```

Arama `⌘K`, koyu tema 🌙, DM içeriğini gizlemek için 🎲.
Yeni dosya eklediğinde ekstra iş yok — detaylar: [site/README.md](site/README.md)

---

## Claude Code ile Çalışma

Oturum kuralları ve iş akışı: [CLAUDE.md](CLAUDE.md)

**Tipik komutlar:**
- *"Silvaerun'a dosya aç, elf şehri, şu özelliklerde"* → doğru ölçekte dosya + dizin kaydı
- *"Bu session'ı yaz"* → session notu + timeline + değişen dünya dosyaları
- *"Lowward kanadını detaylandır"* → eksik kanat dosyası
- *"Mürai savaşını kur"* → tarih dosyası + açık soru kapanır

---

## Durum

| Bölüm | Durum |
|---|---|
| Kozmoloji (Great Wheel) | ✅ 39 dosya |
| Pantheon · magic · tarih · faksiyonlar | ✅ 58 dosya |
| **Ager** — Karsovia/Ravonia/Wheatrest/Nethryn/Thornhold | ✅ aktarıldı |
| **Charaxis** — kuşaklar, 4 şehir, madenler, moondust | ✅ aktarıldı |
| Zariel · Bel · Marcus Hale | ✅ |
| Chains of the Burning Compact | 🟢 aktif |
| Lowward kanadı · Silvaerun · batı toprakları | ⬜ bekliyor |

Son güncelleme: 2026-08-10
