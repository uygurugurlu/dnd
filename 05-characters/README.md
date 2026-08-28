---
type: meta
title: Karakterler
canon: homebrew
status: usable
updated: 2026-08-10
---

# 05 — Karakterler

Kişiler kampanyalardan **bağımsız** tutulur. Bir NPC birden fazla kampanyada
görünebilir; kampanya notları onlara referans verir, kopyalamaz.

| Klasör | Ne |
|---|---|
| **npcs/major/** | Önemli NPC'ler — her biri kendi klasörü, çok dosyalı |
| **npcs/minor/** | Tek dosyalık NPC'ler |
| **player-characters/** | Oyuncu karakterleri |
| **creatures-unique/** | Adı olan tekil yaratıklar (bir ejderha, bir lich) |
| **dead-and-legends/** | Ölmüş ve tarihî figürler |

## Major mı Minor mü?

**Major** (klasör yapısı) — şu üçünden en az ikisi doğruysa:
- Kampanyada tekrar tekrar görünecek
- Kendi motivasyonu ve olay örgüsü var
- Statblock'a ihtiyaç duyacak

**Minor** (tek dosya) — geri kalan herkes. Han sahibi, muhafız komutanı,
bilgi veren tüccar.

> Bir minor NPC beklenmedik şekilde önem kazanırsa **terfi ettir**:
> `minor/<isim>.md` → `major/<isim>/README.md` + alt dosyalar.

## Major NPC Dosya Yapısı

Zariel'i şablon olarak kullan:

```
major/<isim>/
├── README.md              Özet + kimlik kartı + dosya indeksi
├── 01-lore.md             Hikâyesi
├── 02-personality.md      Kişilik, ses, masada oynanış
├── 03-statblock.md        Mekanik (İngilizce)
├── 04-relationships.md    Kim kimdir
├── 05-in-ager.md          Ager'e bağlantısı (FR kökenliyse)
├── 06-secrets-dm-only.md  🔒 Gizli bilgi
└── 07-campaign-usage.md   Nasıl kullanılır
```

Tüm dosyalar gerekmez — karakterin ihtiyacına göre.

## Mevcut Kayıtlar

### Major NPC'ler
| Kim | Ne | Durum |
|---|---|---|
| **[Zariel](npcs/major/zariel/README.md)** | Archduchess of Avernus, düşmüş solar | ✅ Hazır |

### Minor NPC'ler
| Kim | Nerede | Rol |
|---|---|---|
| <!-- doldur --> | | |

### Oyuncu Karakterleri
| Oyuncu | Karakter | Kampanya |
|---|---|---|
| <!-- doldur --> | | |

**Kim kimdir dizini:** [09-index/who-is-who.md](../09-index/who-is-who.md)
