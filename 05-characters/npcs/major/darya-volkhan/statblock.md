---
type: statblock
name: Darya Volkhan
cr: 6
size: Medium
creature_type: humanoid (human, cleric)
alignment: lawful neutral
class_build: Cleric 9 (Light Domain)
campaign: Chains of the Burning Compact
canon: homebrew
status: usable
tags: [statblock, npc, cleric, light-domain, helm, unsleeping, cotbc]
sources:
  - "SRD 5.2 (CC-BY-4.0) — Cleric class, Light Domain, Human, spells: https://media.dndbeyond.com/compendium-images/srd/5.2/SRD_CC_v5.2.pdf"
  - "PHB 2024 — Cleric (Divine Order, Channel Divinity, Blessed Strikes), Light Domain, Acolyte background, Alert / Magic Initiate / War Caster feats: https://www.dndbeyond.com/sources/dnd/phb-2024"
  - "DMG 2024 — Amulet of the Devout, Shield +1, Potion of Greater Healing: https://www.dndbeyond.com/sources/dnd/dmg-2024"
updated: 2026-11-08
---

# Darya Volkhan — Statblock

**Yukarı:** [Darya Volkhan](README.md) · **Parti:** [Uykusuzlar](../../../../06-campaigns/chains-of-the-burning-compact/factions-in-play/the-unsleeping/README.md)

İki sürüm var:

| Sürüm | Ne zaman | Güç |
|---|---|---|
| [**A — Masa statblock'u (MM 2024)**](#a--masa-statblocku-mm-2024) | Hızlı oynatmak, dört Uykusuz'u aynı anda yönetmek | CR 6 |
| [**B — Tam build (Cleric 9)**](#b--tam-build-cleric-9) | Her slot'u, her Channel Divinity'yi kullanarak **tam güçle** oynatmak | Seviye 9 PC |

---

## A — Masa statblock'u (MM 2024)

### Darya Volkhan

*Medium Humanoid (Human, Cleric), Lawful Neutral*

**AC** 19 &nbsp;&nbsp;&nbsp; **Initiative** +4 (14)
**HP** 65 (10d8 + 20)
**Speed** 30 ft.

| | MOD | SAVE | | MOD | SAVE | | MOD | SAVE |
|---|:---:|:---:|---|:---:|:---:|---|:---:|:---:|
| **Str** 8 | −1 | −1 | **Dex** 13 | +1 | +1 | **Con** 14 | +2 | +2 |
| **Int** 10 | +0 | +0 | **Wis** 20 | +5 | +8 | **Cha** 13 | +1 | +4 |

**Skills** Insight +8, Medicine +8, Perception +8, Religion +8
**Gear** Amulet of the Devout +1, Half Plate Armor, Potion of Greater Healing (2), Shield +1
**Senses** Passive Perception 18
**Languages** Common, Elvish, Giant
**CR** 6 (XP 2,300; PB +3)

#### Traits

***The Silent Watch.*** Darya's spells function normally, but any spell she casts to receive an answer from her deity (such as *Augury* or *Commune*) yields no answer.

***War Caster.*** Darya has Advantage on Constitution saving throws to maintain Concentration.

#### Actions

***Multiattack.*** Darya makes two Radiant Flame attacks.

***Radiant Flame.*** *Dexterity Saving Throw:* DC 17, one creature Darya can see within 60 feet. The target gains no benefit from Half Cover or Three-Quarters Cover for this save. *Failure:* 14 (2d8 + 5) Radiant damage.

***Radiance of the Dawn (1/Day).*** *Constitution Saving Throw:* DC 17, each creature of Darya's choice in a 30-foot Emanation originating from her. *Failure:* 20 (2d10 + 9) Radiant damage. *Success:* Half damage. *Failure or Success:* Any magical Darkness in the area is dispelled.

***Spellcasting.*** Darya casts one of the following spells, using Wisdom as the spellcasting ability (spell save DC 17):

**At Will:** *Guidance*, *Spare the Dying*, *Thaumaturgy*

**2/Day Each:** *Bless*, *Hold Person* (level 3 version), *Spirit Guardians* (level 3 version)

**1/Day Each:** *Banishment*, *Commune*, *Cure Wounds* (level 3 version), *Death Ward*, *Dispel Magic*, *Faerie Fire*, *Fireball*, *Revivify*, *Silence*

#### Bonus Actions

***Healing Word (3/Day).*** Darya casts *Healing Word*: one creature she can see within 60 feet regains 10 (2d4 + 5) Hit Points.

***Mass Healing Word (1/Day).*** Darya casts *Mass Healing Word*: up to six creatures she can see within 60 feet each regain 10 (2d4 + 5) Hit Points.

#### Reactions

***Warding Flare (5/Day).*** *Trigger:* A creature Darya can see within 30 feet of her makes an attack roll. *Response:* The attack roll has Disadvantage, and the target of the attack gains 12 (2d6 + 5) Temporary Hit Points.

**Habitat:** Coastal, Urban (Calithra, Ravonia; Surfwale, Karsovia) &nbsp;·&nbsp; **Treasure:** Relics

---

## CR Doğrulaması

```
D-CR: HP 65, Warding Flare ×1.1 → 71.5 → tablo CR 3 (65); AC 19 vs beklenen 13 → +6 → +3 CR = D-CR 6
O-CR: 3 tur DPR
      R1 Radiance of the Dawn 20 × 2 hedef (AoE ×2)                         = 40
      R2 Spirit Guardians (level 3, 3d8 = 13) × 2 hedef                      = 26
      R3 Spirit Guardians 26 + Multiattack (2 × Radiant Flame 14 = 28)       = 54
      (40 + 26 + 54) / 3 = 40 → tablo CR 6 (41); DC 17 vs beklenen 15 → +2 → +1 CR = O-CR 7
CR = (6 + 7) / 2 = 6.5 → 6   [hedef: 6 — seviye 9 cleric, cr-math §7; ±1 içinde]   ✅
```

**Notlar:**
- HP benchmark'ın (CR 6: 112) **%58'i** — humanoid NPC deseni (cr-math §4); tam build'in 66 HP'siyle aynı. Fark AC 19 ve *Warding Flare* ile kapanıyor.
- *Amulet of the Devout* +1 DC ve spell attack'a **işlendi** (8 + 3 + 5 + 1 = 17).
- *Spirit Guardians* statblock'ta **level 3** sürümüyle; level 4 sürümü O-CR'yi 8'e iter. Tam build'de level 4 serbest.
- *Healing Word*, *Mass Healing Word*, *Aid* ve *Death Ward* ham DPR'ye girmiyor ama Uykusuzlar'ı **birlikte** zorlaştıran şey bunlar.

---

## B — Tam build (Cleric 9)

> Masada **PC gibi** oynatmak için. Bütün sayılar seviye 9, **PB +4** ile.
> Statblock'tan farklı — bilerek.

### Core

| | |
|---|---|
| **Class** | Cleric 9 — **Light Domain** |
| **Species** | Human |
| **Background** | Acolyte |
| **Alignment** | Lawful Neutral |
| **AC** | **19** (Half Plate 15 + Dex 1 + Shield +1 = 3) |
| **HP** | **66** (Hit Dice 9d8; 8 + 8 × 5 + 9 × 2) |
| **Initiative** | **+5** (Dex +1, Alert +4) |
| **Speed** | 30 ft. |
| **Proficiency Bonus** | +4 |
| **Spell save DC / attack** | **18 / +10** (8 + 4 + 5 + 1 Amulet) |
| **Passive Perception** | 19 |

### Ability Scores

Standard Array + Acolyte (+2 Wis, +1 Cha) + War Caster (+1 Wis, L4) + ASI (+2 Wis, L8).

| Ability | Base | Final | Mod | Save |
|---|:---:|:---:|:---:|:---:|
| Strength | 8 | **8** | −1 | −1 |
| Dexterity | 13 | **13** | +1 | +1 |
| Constitution | 14 | **14** | +2 | +2 *(Adv. on Concentration)* |
| Intelligence | 10 | **10** | +0 | +0 |
| Wisdom | 15 | **20** | +5 | **+9** |
| Charisma | 12 | **13** | +1 | **+5** |

### Proficiencies

- **Skills:** Insight +9, Medicine +9, Perception +9, Persuasion +5, Religion +9 *(Thaumaturge: +Wis)*; Arcana +5 *(Thaumaturge bonus only)*
- **Armor:** Light, Medium, Shields · **Weapons:** Simple · **Tools:** Calligrapher's Supplies
- **Languages:** Common, Elvish, Giant

### Feats & Species

| Source | Feat / Trait | Effect |
|---|---|---|
| Acolyte (origin) | **Magic Initiate (Cleric)** | Cantrips *Spare the Dying*, *Resistance*; level 1 *Command* (always prepared; 1 free cast/Long Rest; Wisdom) |
| Human (Versatile) | **Alert** | +4 Initiative; can swap Initiative with a willing ally after rolling |
| Level 4 | **War Caster** (+1 Wis) | Advantage on Concentration saves; cast a spell instead of an Opportunity Attack (*Reactive Spell*); Somatic components with hands full |
| Level 8 | **Ability Score Improvement** | +2 Wis |
| Human | **Resourceful** | Gains Heroic Inspiration on every Long Rest |
| Human | **Skillful** | Perception proficiency |

### Class Features

| Lvl | Feature | At the table |
|---|---|---|
| 1 | **Spellcasting** | Wisdom. Prepares 15 spells each Long Rest (+ always-prepared) |
| 1 | **Divine Order: Thaumaturge** | +1 cantrip; adds Wis (+5) to Arcana and Religion checks |
| 2 | **Channel Divinity** — **3 uses** *(L6)* | Regain 1 on Short Rest, all on Long Rest. **+1 use/day from Amulet of the Devout** |
| 2 | ↳ **Divine Spark** | Magic action, one creature within 30 ft: **heal 2d8 + 5**, or **Con save DC 18 → 2d8 + 5 Radiant** (half on success) |
| 2 | ↳ **Turn Undead** | Magic action; each Undead within 30 ft, Wis save or Frightened + Incapacitated for 1 min |
| 3 | ↳ **Radiance of the Dawn** | Magic action; dispels magical Darkness in 30-ft Emanation; each chosen creature **Con save DC 18 → 2d10 + 9 Radiant** (half on success) |
| 3 | **Warding Flare** — **5 uses** | Reaction: a creature within 30 ft makes an attack roll → **Disadvantage** |
| 5 | **Sear Undead** | Turn Undead also deals **5d8 Radiant** to each Undead that fails |
| 6 | **Improved Warding Flare** | Warding Flare uses return on **Short or Long Rest**; target of the attack gains **2d6 + 5 Temp HP** |
| 7 | **Blessed Strikes: Potent Spellcasting** | +5 to damage of Cleric cantrips |

### Spell Slots

| Level | 1st | 2nd | 3rd | 4th | 5th |
|---|:---:|:---:|:---:|:---:|:---:|
| **Slots** | ⬜⬜⬜⬜ | ⬜⬜⬜ | ⬜⬜⬜ | ⬜⬜⬜ | ⬜ |

### Cantrips (7)

| Cantrip | Source | Effect (Potent Spellcasting included) |
|---|---|---|
| *Sacred Flame* | Cleric | 60 ft, Dex save DC 18, **2d8 + 5 Radiant**; ignores Half/Three-Quarters Cover |
| *Toll the Dead* | Cleric | 60 ft, Wis save DC 18, **2d8 + 5 Necrotic** (**2d12 + 5** if target is missing HP) |
| *Word of Radiance* | Cleric | Each chosen creature within 5 ft, Con save DC 18, **2d6 + 5 Radiant** |
| *Guidance* | Cleric | Touch, Concentration: +1d4 to ability checks with one chosen skill |
| *Thaumaturgy* | Thaumaturge | — |
| *Spare the Dying* | Magic Initiate | Action, 30 ft (L5+): stabilizes a creature at 0 HP |
| *Resistance* | Magic Initiate | Touch, Concentration: target reduces damage of one chosen type by 1d4 once per turn |

### Always Prepared

**Light Domain:** *Burning Hands*, *Faerie Fire* (1) · *Scorching Ray*, *See Invisibility* (2) · *Daylight*, *Fireball* (3) · *Arcane Eye*, *Wall of Fire* (4) · *Flame Strike*, *Scrying* (5)
**Magic Initiate:** *Command* (1) — 1 free cast per Long Rest

### Prepared Spells (14)

| Lvl | Spell | Cast | Conc. | Table note |
|:---:|---|---|:---:|---|
| 1 | *Bless* | Action | ✅ | Three allies +1d4 to attacks and saves. Opening move if Spirit Guardians isn't needed |
| 1 | *Cure Wounds* | Action | — | Touch, **2d8 + 5** (+2d8 per slot above 1st) — out-of-combat and big single heals |
| 1 | *Healing Word* | **Bonus** | — | 60 ft, 2d4 + 5 (+2d4 per slot above 1st) |
| 2 | *Aid* | Action | — | **Pre-buff:** three creatures +5 max HP (+5 per slot above 2nd) for 8 hours |
| 2 | *Hold Person* | Action | ✅ | Wis save DC 18 or Paralyzed; +1 target per slot above 2nd |
| 2 | *Silence* | Action | ✅ | 20-ft-radius Sphere, no Verbal components → **for ea basr** |
| 3 | *Dispel Magic* | Action | — | Ends spells ≤3 automatically; higher: ability check DC 10 + level (+5) |
| 3 | *Mass Healing Word* | **Bonus** | — | Up to 6 creatures, 2d4 + 5 each |
| 3 | *Revivify* | Action | — | 300 gp diamond (carries 2) |
| 3 | *Spirit Guardians* | Action | ✅ | 15-ft Emanation, Wis save DC 18, **3d8 Radiant** (+1d8 per slot above 3rd), enemies' Speed halved |
| 4 | *Banishment* | Action | ✅ | Cha save DC 18; good vs **anything infernal** |
| 4 | *Death Ward* | Action | — | **Pre-buff on Aurel.** First drop to 0 HP → 1 HP instead |
| 4 | *Guardian of Faith* | Action | — | 10 ft guardian; Dex save DC 18, 20 Radiant, 60 total damage |
| 5 | *Commune* | 1 min / **Ritual** | — | Three questions to Helm. **Returns silence.** She casts it every week anyway |

### Combat Cheat-Sheet

| Round | Action | Bonus Action | Reaction |
|---|---|---|---|
| Pre-fight | *Aid* (L3 → +10 max HP), *Death Ward* on Aurel | — | — |
| 1 | *Spirit Guardians* (L4: 4d8) | — | *Warding Flare* on Aurel/Sylvaine |
| 2 | *Silence* on ea basr / *Hold Person* (L3: 2 targets) | *Healing Word* if needed | *Warding Flare* |
| 3 | **Radiance of the Dawn** (Channel Divinity) | — | *War Caster* Reactive Spell: *Toll the Dead* |
| 4+ | *Sacred Flame* / *Toll the Dead* ×1 (cantrips, +5) or *Scorching Ray* (domain) | *Mass Healing Word* if two allies down | *Warding Flare* |
| Emergency | *Revivify* on whoever fell (after the fight if possible) | *Mass Healing Word* inside Aurel's *Beacon of Hope* → **13 HP × 6** | — |

### Resource Tracker

| Resource | Uses | Recharge |
|---|:---:|---|
| Channel Divinity | ⬜⬜⬜ + ⬜ *(Amulet)* | 1 on Short Rest, all on Long Rest (Amulet: dawn) |
| Warding Flare | ⬜⬜⬜⬜⬜ | Short or Long Rest |
| Command (Magic Initiate, free) | ⬜ | Long Rest |
| Heroic Inspiration (Resourceful) | ⬜ | Long Rest |
| Potion of Greater Healing (4d4 + 4) | ⬜⬜ | — |

### Equipment

| Item | Notes |
|---|---|
| **Amulet of the Devout +1** *(Uncommon, attunement by Cleric or Paladin)* | +1 spell attack and save DC; once per dawn, use Channel Divinity without expending a use |
| **Shield +1** *(Uncommon)* | +3 AC total |
| Half Plate | Stealth Disadvantage |
| Mace, Holy Symbol (Helm's gauntlet-eye, worn) | Holy Symbol = spellcasting focus |
| Diamonds 300 gp ×2 | *Revivify* |
| Silver reliquary (1,000 gp) | *Scrying* focus |
| Manacles ×2, chalk, Helm's prayer book | — |

**Attunement:** 1 / 3 *(Amulet of the Devout)*
