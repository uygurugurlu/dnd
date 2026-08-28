---
type: meta
title: Statblock Formatı (2024/2025)
canon: fr-canon
status: complete
tags: [rules, statblock, monster, npc, 2024]
sources:
  - "System Reference Document 5.2 (CC-BY-4.0), 'Monsters' §Stat Block Overview / Parts of a Stat Block, s. 251–254"
  - "https://media.dndbeyond.com/compendium-images/srd/5.2/SRD_CC_v5.2.pdf"
  - "https://www.dndbeyond.com/posts/1890-preview-the-new-stat-block-design-in-the-2024"
updated: 2026-08-17
---

# Statblock Formatı — 2024/2025 (5.5e)

Bu dosya **biçim** kuralıdır: bir statblock'ta hangi satır, hangi sırayla, hangi
kelimelerle yazılır. Denge/CR matematiği ayrı dosyada: [cr-math.md](cr-math.md).

> **Statblock'un tamamı İngilizce.** Türkçe prose statblock'un *dışında*,
> "Dünya Bağı" bölümünde yaşar (CLAUDE.md §2).

---

## 1. Blok iskeleti — ezberlenecek sıra

```
### <Name>

*<Size> <Creature Type> (<Tags>), <Alignment>*

**AC** <n> &nbsp;&nbsp;&nbsp; **Initiative** +<n> (<10+n>)
**HP** <average> (<XdY + Z>)
**Speed** <30 ft.>, <Fly 60 ft.>

| | MOD | SAVE | | MOD | SAVE | | MOD | SAVE |
|---|:---:|:---:|---|:---:|:---:|---|:---:|:---:|
| **Str** 16 | +3 | +3 | **Dex** 11 | +0 | +0 | **Con** 14 | +2 | +4 |
| **Int** 11 | +0 | +0 | **Wis** 11 | +0 | +2 | **Cha** 15 | +2 | +2 |

**Skills** <Skill +n, ...>
**Vulnerabilities** <damage types>
**Resistances** <damage types>
**Immunities** <damage types>; <conditions>
**Gear** <items>
**Senses** <special senses>; Passive Perception <n>
**Languages** <...>
**CR** <n> (XP <n>; PB +<n>)

#### Traits
#### Actions
#### Bonus Actions
#### Reactions
#### Legendary Actions

**Habitat:** <...> &nbsp;·&nbsp; **Treasure:** <...>
```

**Sıra pazarlığa açık değil.** Bir satır boşsa **yazılmaz** (SRD: *"If a monster
lacks those details, entries for them don't appear."*) — `—` konmaz, satır silinir.
`Skills`, `Vulnerabilities`, `Resistances`, `Immunities`, `Gear` opsiyoneldir;
`AC / Initiative / HP / Speed / ability table / Senses / Languages / CR` zorunludur.

---

## 2. Satır satır kurallar

### Başlık satırı

`*Medium Humanoid (Paladin), Lawful Good*`

- **Size:** Tiny · Small · Medium · Large · Huge · Gargantuan.
  İki seçenek verilebilir: `Medium or Small Humanoid`.
- **Creature type:** Aberration, Beast, Celestial, Construct, Dragon, Elemental,
  Fey, Fiend, Giant, Humanoid, Monstrosity, Ooze, Plant, Undead.
- **Tags:** parantez içinde, kuralı yok ama efektler referans verebilir —
  `(Devil)`, `(Chromatic)`, `(Wizard)`, `(Orc)`.
  ⚠️ **Sınıf tag'i mekanik taşır:** SRD s. 253 — *"A monster with a class tag after
  its creature type is considered a member of that class for Attunement purposes."*
  Yani `Humanoid (Paladin)` yazan NPC, *Holy Avenger* gibi paladin-kilitli eşyalara
  attune olabilir. Sınıflı NPC yaparken tag'i **koy**.
- **Alignment:** varsayılan öneri, taş değil.

### AC / Initiative

`**AC** 18 &nbsp; **Initiative** +0 (10)`

- Initiative modifier = Dex mod (+ isteğe bağlı PB; kurnaz/eğitimli/boss yaratıklar).
- Parantezdeki sayı **Initiative score = 10 + modifier**. Zar atmak istemeyen DM
  bunu kullanır. Hesabı yanlış yapma — en sık görülen hata bu.

### HP

`**HP** 52 (8d8 + 16)`

Hit die boyuta bağlıdır ve **değiştirilmez**:

| Size | Hit Die | Ortalama / die |
|---|---|---|
| Tiny | d4 | 2½ |
| Small | d6 | 3½ |
| Medium | d8 | 4½ |
| Large | d10 | 5½ |
| Huge | d12 | 6½ |
| Gargantuan | d20 | 10½ |

HP = (die sayısı × ortalama) + (die sayısı × Con mod). Ortalama yukarı yuvarlanmaz,
aşağı yuvarlanır. Örnek: 8d8 + 16 → 8 × 4.5 = 36, + 16 = **52**.

### Ability tablosu

Üç sütun × iki satır, her hücre **Score / MOD / SAVE**. SAVE = MOD, save
proficiency varsa MOD + PB. Proficiency yoksa SAVE = MOD (satır yine de yazılır).

### Skills / Senses

- Skill bonusu = ilgili ability mod + PB (expertise varsa + 2×PB).
- `Passive Perception = 10 + Perception skill bonusu` (skill yoksa 10 + Wis mod).
- Özel duyular önce, passive Perception **en sonda**, noktalı virgülle:
  `**Senses** Darkvision 120 ft.; Passive Perception 19`

### Immunities

Önce hasar tipleri, sonra **noktalı virgül**, sonra condition'lar:

`**Immunities** Fire, Poison, Psychic; Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned`

2014'teki ayrı `Condition Immunities` satırı **yoktur**. `Damage Resistances` da
sadece `Resistances`tır.

### Gear

SRD s. 252: Gear satırı, yaratıktan **alınabilecek/geri kazanılabilecek** eşyaları
listeler. Kıyafet gibi rutin şeyler yazılmaz. Gear'da yazmayan bir ekipman
"doğaüstü ya da yüksek derecede özelleşmiş" sayılır ve yaratık öldüğünde işe yaramaz.

`**Gear** Greatsword, Heavy Crossbow, Plate Armor`

Sihirli eşyalar da buraya yazılır — ama **etkileri AC/attack/damage sayılarına
işlenmiş olmalı**. Bkz. [magic-items.md](magic-items.md).

### CR satırı

`**CR** 8 (XP 3,900; PB +3)`
Lair'i olan yaratık: `**CR** 24 (XP 62,000, or 75,000 in Lair; PB +7)`

**XP by CR** (SRD s. 253):

| CR | XP | CR | XP | CR | XP |
|---|---|---|---|---|---|
| 0 | 0 veya 10 | 11 | 7,200 | 21 | 33,000 |
| 1/8 | 25 | 12 | 8,400 | 22 | 41,000 |
| 1/4 | 50 | 13 | 10,000 | 23 | 50,000 |
| 1/2 | 100 | 14 | 11,500 | 24 | 62,000 |
| 1 | 200 | 15 | 13,000 | 25 | 75,000 |
| 2 | 450 | 16 | 15,000 | 26 | 90,000 |
| 3 | 700 | 17 | 18,000 | 27 | 105,000 |
| 4 | 1,100 | 18 | 20,000 | 28 | 120,000 |
| 5 | 1,800 | 19 | 22,000 | 29 | 135,000 |
| 6 | 2,300 | 20 | 25,000 | 30 | 155,000 |
| 7 | 2,900 | | | | |
| 8 | 3,900 | | | | |
| 9 | 5,000 | | | | |
| 10 | 5,900 | | | | |

**PB by CR** (SRD s. 253):

| CR | PB | CR | PB |
|---|---|---|---|
| 0–4 | +2 | 17–20 | +6 |
| 5–8 | +3 | 21–24 | +7 |
| 9–12 | +4 | 25–28 | +8 |
| 13–16 | +5 | 29–30 | +9 |

---

## 3. Aksiyon yazım kalıpları

Bunlar **sabit ifadelerdir**. 2014 dilini ("Melee Weapon Attack: +7 to hit,
reach 5 ft., one target.") kullanma.

### Saldırı

```
***Greatsword.*** *Melee Attack Roll:* +5, reach 5 ft. *Hit:* 10 (2d6 + 3) Slashing damage plus 4 (1d8) Radiant damage.

***Heavy Crossbow.*** *Ranged Attack Roll:* +2, range 100/400 ft. *Hit:* 11 (2d10) Piercing damage.

***Dagger.*** *Melee or Ranged Attack Roll:* +4, reach 5 ft. or range 20/60 ft. *Hit:* 4 (1d4 + 2) Piercing damage.
```

- `to hit` **yok**. `one target` **yok** (aksi yazmadıkça saldırı tek hedeflidir).
- Hasar tipleri **büyük harfle**: Slashing, Piercing, Bludgeoning, Fire, Radiant,
  Necrotic, Force, Psychic, Poison, Acid, Cold, Lightning, Thunder.
- Isabetten sonra ek etki varsa `*Hit:*` cümlesinin devamına yazılır.
- Iskalayınca etki varsa `*Miss:*`, her hâlde varsa `*Hit or Miss:*`.

### Saving throw

```
***Fire Breath (Recharge 5–6).*** *Dexterity Saving Throw:* DC 24, each creature in a 90-foot Cone. *Failure:* 91 (26d6) Fire damage. *Success:* Half damage.

***Shield Bash.*** *Strength Saving Throw:* DC 15, one creature within 5 feet that the gladiator can see. *Failure:* 9 (2d4 + 4) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Prone condition.
```

Kalıp: `*<Ability> Saving Throw:* DC <n>, <kimler>. *Failure:* <ne olur>. *Success:* <ne olur>.`
`*Failure or Success:*` her iki durumda geçerli etki için.

### Multiattack

```
***Multiattack.*** The knight makes two attacks, using Greatsword or Heavy Crossbow in any combination.

***Multiattack.*** The lamia makes two Claw attacks. It can replace one attack with a use of Corrupting Touch.
```

### Spellcasting

```
***Spellcasting.*** The archmage casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 17):

**At Will:** *Detect Magic*, *Light*, *Mage Armor* (included in AC), *Mage Hand*, *Prestidigitation*

**2/Day Each:** *Fly*, *Lightning Bolt* (level 7 version)

**1/Day Each:** *Cone of Cold* (level 9 version), *Mind Blank* (cast before combat), *Scrying*, *Teleport*
```

- Spell isimleri *italik*.
- Material component gerekmiyorsa: `requiring no Material components and using
  Charisma as the spellcasting ability (spell save DC 13)`.
- Upcast: `*Fireball* (level 4 version)`. Belirtilmezse spell **en düşük seviyeden**
  atılır ve yükseltilemez.
- Tek bir spell'i ayrı bir Bonus Action / Reaction olarak öne çıkarmak 2024 tarzıdır:
  `***Misty Step (3/Day).*** The mage casts *Misty Step*, using the same spellcasting ability as Spellcasting.`
- ⚠️ **NPC'ye PC spell slot tablosu verilmez.** 2024 statblock'unda slot yoktur;
  `At Will` / `X/Day Each` vardır.

### Reactions — Trigger / Response

```
***Parry.*** *Trigger:* The knight is hit by a melee attack roll while holding a weapon. *Response:* The knight adds 2 to its AC against that attack, possibly causing it to miss.
```

Duvar gibi metin yazma; **Trigger** ve **Response** ayrı.

### Legendary Actions

```
#### Legendary Actions

*Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the dragon can expend a use to take one of the following actions. The dragon regains all expended uses at the start of each of its turns.*

***Pounce.*** The dragon moves up to half its Speed, and it makes one Rend attack.
```

- Hiçbir legendary action **birden fazla use harcamaz** (2024 değişikliği).
- Bir seçenek "Recharge next turn" ile sınırlanabilir.
- Legendary action alan yaratıkta genelde en az bir hareket seçeneği bulunur.

### Sınırlı kullanım notasyonu

| Notasyon | Anlamı |
|---|---|
| `(X/Day)` | Günde X kez; Long Rest ile tazelenir |
| `(Recharge 5–6)` | Her turun başında d6; 5–6 gelirse tazelenir. Short/Long Rest de tazeler |
| `(Recharge 4–6)` | Aynısı, daha sık |
| `(Recharge after a Short or Long Rest)` | Bir kez, sonra dinlenme |

---

## 4. Habitat / Treasure

2025 Monster Manual her yaratığa bu iki etiketi ekler. **Bizim repoda zorunlu**
(hem canavar hem NPC için — NPC'de Habitat = nerede bulunur).

```
**Habitat:** Grassland, Urban &nbsp;·&nbsp; **Treasure:** Individual
```

Resmî Habitat değerleri: Any, Arctic, Coastal, Desert, Forest, Grassland, Hill,
Mountain, Planar (<düzlem>), Swamp, Underdark, Underwater, Urban.
Treasure: Any, Arcana, Armaments, Implements, Individual, Relics, None.

Ager'de Habitat'a **bölge adı** da eklenir: `Grassland (Wheatrest, Ravonia)`.

---

## 5. Sık yapılan format hataları

| ❌ Yanlış | ✅ Doğru |
|---|---|
| `Melee Weapon Attack: +7 to hit, reach 5 ft., one target.` | `*Melee Attack Roll:* +7, reach 5 ft.` |
| `Challenge 8 (3,900 XP)` | `**CR** 8 (XP 3,900; PB +3)` |
| `Damage Immunities` + `Condition Immunities` ayrı satır | Tek `**Immunities**`, aradan `;` |
| `Saving Throws Wis +5, Cha +7` satırı | Ability tablosunun SAVE sütunu |
| `fire damage` | `Fire damage` |
| Initiative satırı yok | `**Initiative** +2 (12)` zorunlu |
| `1st level`, `4th-level spell slot` | `(level 4 version)`, slot yok |
| Spell slot tablosu | `At Will:` / `2/Day Each:` / `1/Day Each:` |
| Gear satırı yok ama silahla vuruyor | `**Gear** Shortsword, Shield` |
