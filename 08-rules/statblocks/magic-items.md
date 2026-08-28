---
type: meta
title: NPC'lere Sihirli Eşya Verme Kuralları
canon: adapted
status: complete
tags: [rules, statblock, magic-items, npc, 2024]
sources:
  - "System Reference Document 5.2 (CC-BY-4.0), 'Magic Items' s. 204–208; 'Monsters' §Gear s. 252–253"
  - "https://media.dndbeyond.com/compendium-images/srd/5.2/SRD_CC_v5.2.pdf"
updated: 2026-08-17
---

# NPC'lere Sihirli Eşya Verme

## 1. Ana kural: resmî eşya kullan

> **Homebrew eşya, sadece açıkça istendiğinde yaratılır.**

Varsayılan kaynak sırası:

1. **PHB 2024** (temel ekipman, silah mastery'leri)
2. **DMG 2024** — Magic Items A–Z
3. **SRD 5.2** (CC-BY, serbest referans)
4. Yayımlanmış maceralar / FR 2025 kitapları

Eşyanın adı, rarity'si, attunement şartı ve metni **uydurulmaz**. Emin değilsen
**bak** ve bulduğun kaynağı dosyanın `sources:` alanına yaz (CLAUDE.md §6).
Repoda zaten var olan homebrew eşyalar (`08-rules/homebrew/items/`) kullanılabilir
ama `canon: homebrew` işaretiyle.

Kullanıcı "homebrew bir eşya yap" derse: `08-rules/homebrew/items/<slug>.md`
dosyası açılır, `00-meta/templates/item.md` şablonuyla, ve NPC oradan link alır.

---

## 2. Rarity ↔ hangi NPC'ye yakışır

| Rarity | Değer | Hangi güç seviyesi | Tipik NPC CR |
|---|---:|---|---|
| Common | 100 gp | Herkes | CR 0+ |
| Uncommon | 400 gp | Deneyimli asker, kasaba büyücüsü | CR 1–4 |
| Rare | 4,000 gp | Bölgesel ünlü, muhafız komutanı, tapınak şövalyesi | CR 5–10 |
| Very Rare | 40,000 gp | Ulusal figür, savaş kahramanı, arşimage | CR 11–16 |
| Legendary | 200,000 gp | Efsane; adı destanlara girmiş | CR 17+ |
| Artifact | Paha biçilemez | Kampanya ekseni | — |

Bu bir **yasak değil, gerekçe eşiğidir.** CR 8 bir NPC'ye iki *very rare* eşya
verilebilir — ama o zaman dosyada **nereden geldiği yazılır** (savaş ganimeti,
tapınak emaneti, bir lordun ödülü) ve CR yeniden hesaplanır.

---

## 3. Attunement — sert kurallar

- Bir yaratık **en fazla 3 eşyaya** attune olabilir.
- Sınıf şartı olan eşya (*"requires attunement by a Paladin"*) için:
  **statblock'un creature type tag'i o sınıf olmalı.**
  SRD s. 253: *"A monster with a class tag after its creature type is considered a
  member of that class for Attunement purposes."*
  → `*Medium Humanoid (Paladin), Lawful Good*` yazan NPC *Holy Avenger* taşıyabilir.
  Tag yoksa eşya **çalışmaz**; ya tag'i koy ya eşyayı değiştir.
- *"requires attunement by a spellcaster"* şartı: yaratık trait/feature'ıyla en az
  bir spell atabiliyorsa sağlanır (magic item ile değil).
- Attunement gerektirmeyen eşyalar (potion, scroll, *+1 Weapon* gibi bazıları)
  bu limitin dışındadır ve NPC'yi şişirmeden renk katar.

---

## 4. Eşya statblock'a nasıl işlenir

Üç yerde birden görünür:

**a) `Gear` satırı** — geri alınabilir eşyalar:
```
**Gear** Shield +2, Shortsword +1, Plate Armor, Potion of Greater Healing (2)
```

**b) Sayılara işlenmiş hâli** — eşyanın bonusu AC / attack / damage / save
satırlarına **zaten dahil** olmalı:
```
**AC** 21 (Plate Armor, Shield +2)
***Shortsword +1.*** *Melee Attack Roll:* +8, reach 5 ft. *Hit:* 8 (1d6 + 5) Piercing damage.
```

**c) Trait ya da action olarak** — pasif olmayan özellikler:
```
***Radiant Rebuke (Ring of Spell Storing).*** ...
```

**d) Statblock'un altında Türkçe not** — eşya nereden geldi, neye benziyor,
NPC onu nasıl taşıyor. Bu **Dünya Bağı** bölümüne yazılır.

> SRD s. 252 uyarısı: *"Beware of giving a monster combat-oriented magic items,
> since those might alter the monster's Challenge Rating."*
> **Eşyaları verdikten sonra CR'yi yeniden hesapla** ([cr-math.md](cr-math.md) §2).
> Genelde şu düzeltmeyi yaparsın: eşya AC/hasar yükselttiyse, taban HP'yi ya da
> saldırı sayısını geri çek — hedef CR'de kal.

---

## 5. Arketiplere göre resmî eşya kısa listesi

Başlangıç noktasıdır; **kullanmadan önce rarity ve metni resmî kaynaktan doğrula.**

### Paladin / kutsal savaşçı
| Rarity | Eşya |
|---|---|
| Uncommon | *Sentinel Shield*, *+1 Weapon*, *+1 Shield*, *Adamantine Armor*, *Periapt of Wound Closure*, *Gauntlets of Ogre Power*, *Winged Boots* |
| Rare | *+1 Armor*, *+2 Weapon*, *+2 Shield*, *Ring of Protection*, *Cloak of Displacement*, *Sun Blade*, *Flame Tongue*, *Mace of Disruption*, *Mace of Smiting*, *Mace of Terror*, *Armor of Resistance*, *Amulet of Health*, *Boots of Speed*, *Ring of Free Action*, *Staff of Healing* |
| Very Rare | *+2 Armor*, *+3 Weapon*, *+3 Shield*, *Dwarven Plate*, *Frost Brand*, *Sword of Sharpness*, *Dwarven Thrower*, *Ring of Regeneration*, *Rod of Alertness*, *Belt of Fire Giant Strength*, *Dragon Scale Mail* |
| Legendary | *Holy Avenger*, *Defender*, *Armor of Invulnerability*, *Efreeti Chain* |

### Büyücü / bilgin
*Wand of Magic Missiles* (U) · *Bag of Holding* (U) · *Wand of the War Mage* (U–VR) ·
*Robe of Useful Items* (U) · *Ring of Spell Storing* (R) · *Staff of Fire* (VR) ·
*Staff of Striking* (VR) · *Robe of Stars* (VR) · *Crystal Ball* (VR) ·
*Amulet of the Planes* (VR) · *Robe of the Archmagi* (L) · *Staff of the Magi* (L)

### Rogue / suikastçı
*Boots of Elvenkind* (U) · *Cloak of Elvenkind* (U) · *Gloves of Thievery* (U) ·
*Bracers of Archery* (U) · *Cloak of Displacement* (R) · *Boots of Speed* (R) ·
*Ring of Invisibility* (L) · *Cloak of the Bat* (R) · *Nine Lives Stealer* (VR) ·
*Scimitar of Speed* (VR) · *Ring of Evasion* (R)

### Ranger / druid
*Cloak of Elvenkind* (U) · *Bracers of Archery* (U) · *Staff of the Woodlands* (R) ·
*Oathbow* (VR) · *Cloak of Arachnida* (VR) · *Ring of Animal Influence* (R) ·
*Staff of Swarming Insects* (R)

### Rahip / kült lideri
*Amulet of Health* (R) · *Staff of Healing* (R) · *Mace of Disruption* (R) ·
*Ring of Spell Storing* (R) · *Rod of Alertness* (VR) · *Staff of Withering* (R) ·
*Talisman of Pure Good / Ultimate Evil* (L)

### Sarf malzemesi (attunement gerekmez — NPC'yi şişirmeden zenginleştirir)
*Potion of Healing / Greater / Superior* · *Potion of Heroism* ·
*Potion of Fire Breath* · *Potion of Speed* (VR) · *Spell Scroll* (herhangi seviye) ·
*Oil of Sharpness* · *Dust of Disappearance* · *Elixir of Health*

---

## 6. Kontrol listesi

- [ ] Eşya **resmî** mi? Kaynağı `sources:`e yazıldı mı?
- [ ] Rarity NPC'nin gücüne uygun mu? Değilse gerekçesi yazıldı mı?
- [ ] Attune gereken eşya sayısı **≤ 3** mü?
- [ ] Sınıf şartlı eşya varsa creature type tag'i doğru mu?
- [ ] Bonuslar AC / attack / damage satırlarına **işlendi** mi?
- [ ] `Gear` satırında görünüyor mu?
- [ ] Eşyalardan **sonra** CR yeniden hesaplandı mı?
- [ ] Eşyanın Ager'deki hikâyesi (nereden geldi) yazıldı mı?
- [ ] Parti bunu ganimet olarak alırsa dengeyi bozar mı? — `> **[DM ONLY]**` notu.
