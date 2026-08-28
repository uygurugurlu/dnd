---
type: meta
title: Sınıflı NPC Kitleri
canon: adapted
status: complete
tags: [rules, statblock, npc, classes, 2024]
sources:
  - "System Reference Document 5.2 (CC-BY-4.0): sınıf özellikleri s. 28–82, NPC statblock örnekleri s. 255–340"
updated: 2026-08-17
---

# Sınıflı NPC Kitleri

## 0. Altın kural: NPC bir PC değildir

Bir NPC statblock'u **sınıf seviyeleriyle kurulmaz.** Spell slot tablosu, ASI
listesi, subclass ilerlemesi yazılmaz. 2024 Monster Manual deseni şudur:

> Sınıfın **hissini** veren 3–5 özellik seç, gerisini at, sayıları CR bütçesine
> oturt.

Karşılaştır: SRD **Mage** (CR 6) hiçbir yerde "9. seviye wizard" demez; bir
*Arcane Burst* saldırısı, bir *Spellcasting* listesi, bir bonus action ve bir
reaction taşır. Toplam beş satır.

**İstisna:** Bir NPC oyuncu kadrosuna girecekse ya da masa onu bir PC gibi
oynatacaksa, tam PC build'i ayrı dosyada tutulabilir
(bkz. [Marcus Hale](../../05-characters/npcs/major/marcus-hale/statblock.md)) —
ama **masada kullanılacak MM formatlı statblock yine de yazılır.**

---

## 1. Ortak dönüşüm tablosu

| PC mekaniği | Statblock karşılığı |
|---|---|
| Extra Attack | `***Multiattack.*** The <x> makes two <Attack> attacks.` |
| Spell slots | `At Will:` / `2/Day Each:` / `1/Day Each:` |
| Cantrip spam | İmzalı bir at-will saldırı: *Arcane Burst*, *Eldritch Burst*, *Radiant Sword* |
| Bonus action spell | Ayrı **Bonus Actions** girdisi: `***Misty Step (3/Day).***` |
| Reaction spell (*Shield*, *Counterspell*) | `***Protective Magic (3/Day).***` reaction |
| Concentration'lı buff | Ya trait olarak zaten açık say, ya 1/Day action |
| Short rest kaynağı | `(Recharge after a Short or Long Rest)` |
| Long rest kaynağı | `(X/Day)` |
| Passive class feature | **Traits** |
| Subclass kimliği | Tek bir imza trait + spell seçimi |

**Saldırı matematiği:**
`Attack bonus = ability mod + PB` · `Save DC = 8 + PB + ability mod` ·
`Damage = weapon die + ability mod (+ rider)`.
CR bütçesine ulaşmak için **silah zarını büyütme** — MM deseni, hasar rider'ı
eklemektir (Knight'ın greatsword'ü `2d6 + 3` + `1d8 Radiant`).

---

## 2. Kitler

### ⚔️ Paladin

| Bileşen | İçerik |
|---|---|
| Type tag | `Humanoid (Paladin)` — attunement için **zorunlu** |
| Ability | Str veya Dex birincil, **Cha ikincil** (aura, DC, spell) |
| AC | Ağır zırh + kalkan; sınıfın kimliği yüksek AC |
| Traits | ***Aura of Protection.*** *The paladin and its allies within 10 feet of it have a +X bonus to saving throws.* (X = Cha mod, min +1) |
| Traits (ops.) | ***Divine Sense.***, ***Aura of Courage.*** (Immunity to Frightened, dostlara da) |
| Actions | Multiattack (2 saldırı, CR 5+), silah saldırısı + `Radiant` rider |
| Actions | ***Divine Smite (X/Day).*** Isabet eden bir saldırıya ek `Nd8 Radiant damage` — ya da rider'a gömüp ayrı yazma |
| Actions | ***Channel Divinity (2/Day).*** Oath'a göre: *Sacred Weapon* / *Vow of Enmity* / *Abjure Foes* |
| Bonus Actions | ***Lay On Hands (X HP pool).*** *The paladin restores up to X Hit Points to itself or a creature it touches.* |
| Spellcasting | Cha tabanlı. `1/Day Each:` *Shield of Faith*, *Bless*, *Aid*, *Zone of Truth*, *Dispel Evil and Good*, *Banishment* |
| Oath rengi | Devotion → *Protection from Evil and Good*, *Flame Strike* · Vengeance → *Hunter's Mark*, *Hold Person*, *Banishment* · Ancients → *Speak with Plants*, *Ice Storm* · Glory → *Guiding Bolt*, *Haste* |

> Paladin spell listesi (SRD s. 55–56, seviye 1–5): *Bless, Command, Cure Wounds,
> Detect Evil and Good, Detect Magic, Detect Poison and Disease, Divine Favor,
> Divine Smite, Heroism, Protection from Evil and Good, Purify Food and Drink,
> Searing Smite, Shield of Faith* · *Aid, Find Steed, Gentle Repose, Lesser
> Restoration, Locate Object, Magic Weapon, Prayer of Healing, Protection from
> Poison, Shining Smite, Warding Bond, Zone of Truth* · *Create Food and Water,
> Daylight, Dispel Magic, Magic Circle, Remove Curse, Revivify* · *Aura of Life,
> Banishment, Death Ward, Locate Creature* · *Dispel Evil and Good, Geas, Greater
> Restoration, Raise Dead*.
> **Listede olmayan spell paladin NPC'sine verilmez.**

### 🔮 Wizard / Sorcerer

Type tag `Humanoid (Wizard)`. İmza at-will saldırı ***Arcane Burst***
(`Melee or Ranged Attack Roll`, `Force damage`) — cantrip yazma.
Multiattack ile 3–4 kez. `Magic Resistance` trait'i CR 9+ için tipik.
Bonus Action: *Misty Step (3/Day)*. Reaction: *Protective Magic (3/Day)*
(*Counterspell* veya *Shield*).
Nova: `1/Day Each:` içine *Fireball (level N version)*, *Cone of Cold*, *Teleport*.

### ✨ Cleric / Rahip

Type tag `Humanoid (Cleric)`. Wis tabanlı. İmza saldırı: silah + `Radiant` rider.
Traits: alan buff'ı (aura) ya da `Divine Ward`.
Actions: ***Turn Undead (Recharge after a Short or Long Rest).***
`*Wisdom Saving Throw:* DC n, each Undead in a 30-foot Emanation. *Failure:* The
target has the Frightened condition ...`
Bonus Actions: ***Healing Word (X/Day).***
Spellcasting: *Bless*, *Spirit Guardians*, *Guiding Bolt*, *Mass Cure Wounds*.

### 🗡️ Rogue / Suikastçı

Type tag `Humanoid (Rogue)`. Dex birincil. AC 15–17, HP benchmark'ın altında.
Traits: ***Evasion.*** · isteğe bağlı ***Assassinate.***
Actions: Multiattack + hasar rider'ı olarak **Sneak Attack yerine kalıcı zehir/
psychic rider** (SRD Assassin deseni: `plus 17 (5d6) Poison damage`).
Bonus Actions: ***Cunning Action.*** *The rogue takes the Dash, Disengage, or Hide action.*
Reactions: ***Uncanny Dodge.*** `*Trigger:* ... *Response:* halves the damage.`

### 🛡️ Fighter / Asker

Type tag `Humanoid (Fighter)` ya da tag'siz `Humanoid`.
Multiattack 2–4. Traits: silah mastery rengi (Topple → Prone, Sap → Disadvantage).
Bonus Actions: ***Second Wind (2/Day).*** Actions: ***Action Surge (1/Day).***
Reactions: ***Parry.*** (`adds 2–3 to its AC`).

### 🪓 Barbarian

Traits: ***Rage.*** *While Bloodied, the barbarian has Resistance to Bludgeoning,
Piercing, and Slashing damage and deals an extra Nd8 damage on hit.*
(Effective HP ×1.5 sayılır — CR hesabına gir.)
Reckless Attack'ı `Advantage on attack rolls; attack rolls against it have
Advantage` olarak tek satıra indir.

### 🏹 Ranger

Menzilli Multiattack (2–3 ok). *Hunter's Mark*'ı ayrı spell yazma — hasar rider'ına
göm. Traits: ***Nature's Veil.*** / ***Keen Hearing and Sight.***

### 🌿 Druid

Wild Shape'i spell listesine yazma: `***Wild Shape (2/Day).*** The druid shape-shifts
into a Beast with a CR of X or lower ... reverting on death.` — hangi statblock'a
dönüşeceğini **isimle** ver (örn. *Dire Wolf*, *Giant Eagle*).

### 👁️ Warlock

İmza at-will: ***Eldritch Burst*** (`Force` veya `Necrotic`).
Traits: pact'ın rengi (`Fiendish Resilience`, `Dark One's Blessing`).
`1/Day Each:` *Hunger of Hadar*, *Summon Fiend*.

### 🎵 Bard

Bonus Actions: ***Bardic Inspiration (3/Day).*** *One ally within 60 feet adds
1dN to its next d20 Test.* Spellcasting Cha tabanlı, kontrol ağırlıklı
(*Hypnotic Pattern*, *Dissonant Whispers*).

### 👊 Monk

Multiattack 3× ***Unarmed Strike*** (`Bludgeoning` + Force rider).
Reactions: ***Deflect Attacks.***
Actions: ***Stunning Strike (Recharge 5–6).*** `*Constitution Saving Throw:* DC n ...
*Failure:* The target has the Stunned condition until the end of its next turn.`

---

## 3. Tekrarlanan hatalar

| ❌ | ✅ |
|---|---|
| "Level 8 Paladin, 8d10 Hit Dice" | `**HP** 97 (13d8 + 39)` + `**CR** 8` |
| Spell slot tablosu | `1/Day Each:` |
| 12 spell'lik hazırlık listesi | 3–6 spell, hepsi masada kullanılacak olanlar |
| Divine Smite'ı sınırsız yazmak | `(3/Day)` — 2024'te tur başına bir kez ve slot ister |
| Aura of Protection'ı unutmak | Paladin'in **en tanınır** özelliği; mutlaka koy |
| Sınıf tag'ini yazmamak | `Humanoid (Paladin)` — yoksa sınıf-kilitli eşya çalışmaz |
| Cantrip'i action olarak yazmak | İmzalı at-will saldırıya çevir |
| Her sınıf özelliğini taşımak | 3–5 özellik. Masada okunmayan satır yazılmaz |
