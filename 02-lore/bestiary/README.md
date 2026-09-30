---
type: meta
title: Bestiary
canon: homebrew
status: stub
updated: 2026-08-10
---

# Bestiary

**Ager'e özgü** yaratıklar. Standart D&D yaratıkları (goblin, ogre, dragon) burada
tekrarlanmaz — Monster Manual'de zaten var.

Buraya sadece şunlar girer:
- Ager'de yaratılmış özgün yaratıklar
- Standart yaratıkların Ager'e özgü varyantları
- Bölgesel efsanevi canavarlar

## Kayıtlar

| Yaratık | CR | Habitat | Origin | Dosya |
|---|---|---|---|---|
| **Concord Ironclad** | 4 | Grassland, Urban (Ravonia) | Hammerfall kazı construct'ının askerî varyantı | [concord-ironclad.md](concord-ironclad.md) |
| **Mühürlüler** *(Sealed Vessels — Thrall · Watchman · Legionnaire)* | 1 / 3 / 5 | Grassland, Urban (Wheatrest, Ravonia) | Bel'in 3. Lejyonu — sözleşmeyle possession | [sealed-vessels.md](sealed-vessels.md) |
| **Kök Bekçisi** *(Rootwarden)* | 10 | Forest (Eira'thalas, Silvaerûn) | 1 DR antlaşmasını tutan ormanın cevabı | [rootwarden.md](rootwarden.md) |
| **Gallows Speaker** *(Darağacının Sözcüsü)* | 5 *(5×L3; full-strength = CR 6)* | Planar (Shadowfell), Urban (Kırıkbağ, Ravonia) | Ravenloft uyarlaması — Kırıkbağ Dikişi'nden sızan son-söz toplayıcı | [gallows-speaker.md](gallows-speaker.md) *(statblock: [08-rules/homebrew/monsters/](../../08-rules/homebrew/monsters/gallows-speaker.md))* |
| **the Tallyman** *(Sayman)* | 6 | Underdark (Charaxis — maden ağızları) | Kayıp imparatorluğun izleme matrisinin uzantısı | [the-tallyman.md](the-tallyman.md) |

## Nasıl Eklenir

> **Akış: `Skill(statblock)`.** Kurallar: [08-rules/statblocks/](../../08-rules/statblocks/README.md)

1. Lore + statblock: `02-lore/bestiary/<slug>.md` — `00-meta/templates/creature.md` şablonu
2. Statblock büyüyüp ayrı dosyaya çıkarsa: `08-rules/homebrew/monsters/<slug>.md`
   — `00-meta/templates/statblock.md`
3. Yukarıdaki tabloya satır ekle; bulunduğu bölge dosyasından geri link ver
4. `00-meta/changelog.md`'ye satır at

**Zorunlu:** 2024 (MM 2025) formatı · `## CR Doğrulaması` bloğu ·
Habitat / Origin / Alignment gerekçesi · Lore DC tablosu.
