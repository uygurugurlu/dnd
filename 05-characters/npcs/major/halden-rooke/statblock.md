---
type: statblock
name: Halden Rooke
species: İnsan
class: Sorcerer (The Unwoven — Severance)
cr: 10
canon: homebrew
doc_status: usable
tags: [statblock, npc, level-hand, unwoven, sorcerer, cr-10, new-campaign]
sources:
  - "SRD 5.2 (CC-BY-4.0) — stat block formatı s. 251–254, XP/PB by CR s. 253"
  - "08-rules/statblocks/cr-math.md — humanoid NPC deseni (§4)"
updated: 2026-08-29
---

# Halden Rooke — Statblock

**Lore:** [README.md](README.md) ·
**Format:** [format-2024.md](../../../../08-rules/statblocks/format-2024.md) ·
**Denge:** [cr-math.md](../../../../08-rules/statblocks/cr-math.md)

> Bu, Rooke'un **1495 (kampanya başı) hâlidir** — Severance'ın *Aşama II'si*.
> Aşama III (*The Equal Field*) bir statblock değil, bir **final sahnesidir**;
> aşağıda ayrı bölümde.

---

## Statblock

### Halden Rooke

*Medium Humanoid (Sorcerer), Lawful Evil*

**AC** 14 &nbsp;&nbsp; **Initiative** +2 (12)
**HP** 120 (16d8 + 48)
**Speed** 30 ft.

| | MOD | SAVE | | MOD | SAVE | | MOD | SAVE |
|---|:---:|:---:|---|:---:|:---:|---|:---:|:---:|
| **Str** 9 | −1 | −1 | **Dex** 14 | +2 | +2 | **Con** 16 | +3 | +7 |
| **Int** 15 | +2 | +2 | **Wis** 16 | +3 | +7 | **Cha** 20 | +5 | +9 |

**Skills** Deception +9, History +6, Insight +7, Perception +7, Persuasion +9
**Gear** Gray Leather Gloves, Studded Leather Armor
**Senses** Passive Perception 17
**Languages** Common, Dwarvish
**CR** 10 (XP 5,900; PB +4)

#### Traits

***The Weave Does Not Reach Him.*** Rooke has Advantage on saving throws against spells and other magical effects, and spell attack rolls against him have Disadvantage.

***Read the Source.*** Rooke automatically knows whether a creature he can see draws on arcane, divine, primal, or innate magic — or on something outside the Weave — and roughly how strong that connection is. He recognizes another Chosen of the Unwoven on sight.

#### Actions

***Multiattack.*** Rooke makes three Severing Burst attacks. He can replace one attack with a use of Severing Touch.

***Severing Burst.*** *Melee or Ranged Attack Roll:* +9, reach 5 ft. or range 120 ft. *Hit:* 23 (4d8 + 5) Force damage.

***Severing Touch.*** *Charisma Saving Throw:* DC 17, one creature Rooke touches. *Failure:* The target can't cast spells, use spell scrolls, or attune to magic items for 1d4 + 1 minutes. If the target fails by 5 or more, the duration is 1d4 days instead.

***Discharge (Recharge 5–6).*** *Dexterity Saving Throw:* DC 17, each creature in a 30-foot Emanation originating from Rooke. *Failure:* 44 (8d10) Force damage. *Success:* Half damage only.

#### Bonus Actions

***Break.*** *Constitution Saving Throw:* DC 17, one creature Rooke can see within 60 feet that is Concentrating. *Failure:* The target's Concentration ends.

***Silent Room (1/Day).*** Rooke creates a 30-foot Emanation originating from himself for 1 minute (requires Concentration). A creature other than Rooke that attempts to cast a spell inside the area must succeed on a DC 17 Charisma saving throw or the spell fails and any spell slot it used is expended.

#### Reactions

***Absorb (3/Day).*** *Trigger:* A creature Rooke can see within 30 feet casts a spell. *Response:* The caster makes a DC 17 Constitution saving throw. On a failed save, the spell fails, and Rooke gains Temporary Hit Points equal to 5 × the spell's level. Rooke may expend these Temporary Hit Points to recharge Discharge.

**Habitat:** Urban (Cold Ward, [Sparkhold](../../../../06-campaigns/new-campaign/05-world-seeds.md#5-sparkhold--hextech-şehri), Karsovia) &nbsp;·&nbsp; **Treasure:** None

---

## CR Doğrulaması

```
Hedef: CR 10   (benchmark: AC 17 · HP 155 · attack +9 · DC 17 · DPR 65)

D-CR
  Taban HP 120 (humanoid NPC deseni: benchmark'ın %77'si)
  × 1.15  The Weave Does Not Reach Him — magic save Advantage   → 138
  × 1.10  aynı trait — spell attack Disadvantage                → 151
          (Absorb'un temp HP'si sayılmadı: kaynağı düşmana bağlı)
  → tablo: CR 9 (145) ile CR 10 (155) arası, 151 → CR 10
  AC 14 vs CR 10 beklentisi 17 → −3 fark → −1 CR
  D-CR = 10 − 1 = 9

O-CR
  Tur 1: Discharge 44 hasar × 2 hedef (AoE çarpanı)             = 88
  Tur 2: 3 × Severing Burst (23 + 23 + 23)                      = 69
  Tur 3: 3 × Severing Burst                                     = 69
  3 tur ortalaması = (88 + 69 + 69) / 3                         = 75
  → tablo CR 11 (71)
  Attack +9 vs CR 11 beklentisi +9 → fark 0 · DC 17 vs 17 → fark 0
  O-CR = 11

CR = (9 + 11) / 2 = 10   ✅ hedefe oturdu
```

**Denge notu:** AC 14, CR 10 için **çok düşük** (benchmark 17) ve bu bilinçli.
Rooke bir kâtiptir: zırhı yok, kalkanı yok ve **tek bir sihirli eşyası bile yok**
(bkz. Eşyalar). Bütün savunması iki anti-magic trait'te toplanmış durumda —
yani **bir wizard'a karşı kâbus, kılıçlı bir fighter'a karşı cam.** Masadaki
etkisi tam olarak bu olmalı: partinin martial üyeleri onu iki turda düşürebilir,
caster üyeleri hiçbir şey yapamaz. HP karşılığında benchmark'ın %77'sinde tutuldu
(humanoid bandının üst sınırı) çünkü zırh yokluğunu telafi eden tek eksen o.

`cr-math.md §6.1` gereği aynı anda her stat yükseltilmedi: DPR yüksek, AC düşük.

---

## Eşyalar

**Rooke'un hiçbir sihirli eşyası yok. Bir tane bile.**

Bu bir bütçe kararı değil, **karakterin kendisi.** Sihirli eşya, onun teorisinde
"doğuştan gelmeyen ayrıcalığın satın alınabilir hâli"dir. Yirmi yıllık kâtiplik
kariyerinde bunu yüzlerce kez yazdı. Kendi kuralını çiğnemediği tek yer burası —
ve bunu **her fırsatta hatırlatıyor.**

| Eşya | Rarity | Attune | Ager'deki hikâyesi |
|---|---|---|---|
| **Gray Leather Gloves** | — | — | Şebeke kâtiplerinin standart eldiveni. Yirmi yıl önce kendisine verildi, hiç değiştirmedi. Fraying 7 belirtisini *(yakınındaki nesnelerin seğirmesi)* saklamak için giyiyor |
| **Studded Leather Armor** | — | — | [Selvarr Dhune](../../minor/the-level-hand/selvarr-dhune.md) zorla giydirdi. Rooke bundan hoşlanmıyor |
| **Suppressor halkası** *(cebinde, takmıyor)* | — | — | [Iron Concord](../../../../06-campaigns/new-campaign/factions-in-play/the-four-answers/the-iron-concord.md) üretimi, büyüsel değil **mekanik** bir cihaz. Rooke bunu bir hatırlatma olarak taşıyor |

**Attunement:** 0 / 3.

> **[DM ONLY]** Parti ona sihirli bir eşya verirse ya da üzerinde bir eşya
> bulunursa, hareket bunu **öğrenmemeli.** Bu, Nyrra'nın elindeki ikinci kozdur.

---

## Severance Sorcery — üç aşama

*Aşama II yukarıdaki statblock'a işlenmiştir. Diğer ikisi masada anlatı aracıdır.*

### Aşama I — **The Quiet Hand** *(1494, seçilme yılı)*

Kişisel ölçek: bir odada, bir kişiye karşı. Bugünkü statblock'un
*Absorb* / *Break* / *Read the Source* satırları buradan gelir.

### Aşama II — **The Silent Room** *(1495, kampanya başı — yukarıdaki statblock)*

Oda ölçeği. *Silent Room*, *Discharge* (transference'ın savaş hâli) ve
*Severing Touch* burada.

> **The Unmaking (ritual, DM-facing).** With one hour and a crowd, the duration of
> Severing Touch becomes **1d4 + 6 months**. If Rooke accepts **1 Fraying point**,
> the effect is permanent, and only *Wish*, divine intervention, or the Unwoven
> itself can undo it.

### Aşama III — **The Equal Field** *(final — statblock değil, sahne)*

> **The Equal Field.** 1-mile radius, centered on Rooke, lasting as long as he
> remains conscious and stationary. Inside the field:
>
> - Every creature other than Rooke has **Disadvantage** on spell attack rolls,
>   and the save DC of every spell it casts is **reduced by 5**.
> - Spells of level 6 or higher **automatically fail** unless the caster succeeds
>   on a DC 20 Charisma saving throw at the moment of casting.
> - Magic items require a DC 15 Charisma saving throw to activate.
> - Rooke himself is unaffected.
>
> **Tier:** Genuine Creation (Tier 3). The cost is not paid by Rooke — the Unwoven
> pays it, because it wants to see the result.

> **[DM ONLY]** Equal Field devredeyken Rooke'un savaş statistikleri değişmez;
> **partininki değişir.** Finali bu yüzden bir statblock savaşı olarak değil,
> bir **çevre savaşı** olarak kur: alanın kaynağını kesmek, Rooke'u hareket
> ettirmek ya da bilincini kaybettirmek — üçü de öldürmekten kolaydır.
>
> Equal Field, Level Hand için bir **mucize**; Unwoven için bir **deney**:
> *"Bir mortalın magic ile Weave arasındaki bağlantısı kesilebilir mi?"*
> Cevap evet — ve Unwoven bu cevabı
> [The Unweave](../../../../06-campaigns/new-campaign/factions-in-play/the-four-answers/README.md#4-unwovenın-gerçek-planı--the-unweave)
> için istiyor.

---

## Fraying — 7 puan

| # | Belirti | Nasıl saklıyor |
|---|---|---|
| 4 | Scrying havuzlarında yansıması yok; divination static dönüyor | Saklamıyor — **övünç** kaynağı, *"temiz vicdan"* diyor |
| 6 | Kutsanmış zemin ve soğuk demir onu huzursuz ediyor | Tapınaklara hiç girmiyor. Herkes bunu ideolojik sanıyor |
| 7 | Yakınındaki bir nesne günde bir kez seğiriyor | **Eldivenler bunun için** |

Masada: Rooke'a karşı *Scrying*, *Locate Creature* ve benzeri divination'lar
**otomatik başarısız** olur. Bu, partinin onu bulamamasının mekanik sebebidir —
ve aynı zamanda ilk ipucudur.

---

## Yapıldı mı?

- [x] `09-index/who-is-who.md`'ye satır eklendi
- [x] Faksiyon dosyasından geri link verildi
- [x] `00-meta/changelog.md` güncellendi
- [x] Açık sorular `00-meta/open-questions.md`'ye yazıldı
