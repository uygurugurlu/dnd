---
type: meta
title: Şablonlar
updated: 2026-08-10
---

# Şablonlar

Yeni bir şey oluştururken **buradan kopyala**, sıfırdan format uydurma.

| Şablon | Ne zaman |
|---|---|
| [continent.md](continent.md) | Yeni kıta |
| [nation.md](nation.md) | Ülke, krallık, imparatorluk, şehir-devleti |
| [city.md](city.md) | Şehir (5.000+ nüfus) |
| [town.md](town.md) | Kasaba (500–5.000) |
| [village.md](village.md) | Köy (<500) |
| [site.md](site.md) | Zindan, harabe, tapınak, kule, geçit — yerleşim olmayan mekân |
| [region.md](region.md) | Ülkeye bağlı olmayan coğrafi bölge (orman, dağ silsilesi, bozkır) |
| [character.md](character.md) | NPC / PC lore dosyası (major NPC klasöründe README olarak) |
| **[npc-statsheet.md](npc-statsheet.md)** | **Tek dosyalık NPC statsheet'i: lore + statblock + CR doğrulaması.** Minor NPC'ler için varsayılan |
| [statblock.md](statblock.md) | Ayrı dosyaya çıkan mekanik statblock (İngilizce, 2024 formatı) |
| [faction.md](faction.md) | Örgüt, lonca, tarikat, düzen |
| [deity.md](deity.md) | Tanrı / arşidüşman / güç |
| [plane.md](plane.md) | Düzlem |
| [campaign.md](campaign.md) | Yeni kampanya overview |
| [session.md](session.md) | Session notu |
| [quest.md](quest.md) | Görev / olay örgüsü hattı |
| [item.md](item.md) | Sihirli eşya / artifakt |
| [creature.md](creature.md) | Evrene özgü yaratık |

## Ortak kural

- **NPC ya da yaratık yaratıyorsan şablonu tek başına kullanma — `Skill(statblock)`
  akışını çalıştır.** Kurallar: [08-rules/statblocks/](../../08-rules/statblocks/README.md)
- Frontmatter zorunlu.
- `<!-- doldur: ... -->` yorumları doldurulunca **silinir**.
- Boş bırakılan bölüm silinmez, `<!-- doldur -->` işaretiyle bırakılır — yapı korunur.
