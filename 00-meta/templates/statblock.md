---
type: statblock
name: <Name>
cr: <CR>
size: <Tiny/Small/Medium/Large/Huge/Gargantuan>
creature_type: <type (tag)>
alignment: <AL>
canon: homebrew | adapted | fr-canon
source: 5e-2024 | srd-5.2 | homebrew
status: stub
tags: []
sources: []
updated: YYYY-MM-DD
---

# <Name> — Statblock

> **Format:** D&D 5e 2024 / Monster Manual 2025.
> Kurallar: [08-rules/statblocks/format-2024.md](../../08-rules/statblocks/format-2024.md)
> Denge: [cr-math.md](../../08-rules/statblocks/cr-math.md)
> Statblock **tamamen İngilizce**; Türkçe açıklama bloğun dışında kalır.

**Yukarı:** [<Name>](README.md)

---

### <Name>

*<Size> <Creature Type> (<Tags>), <Alignment>*

**AC** <n> &nbsp;&nbsp; **Initiative** +<n> (<10+n>)
**HP** <avg> (<XdY + Z>)
**Speed** 30 ft.

| | MOD | SAVE | | MOD | SAVE | | MOD | SAVE |
|---|:---:|:---:|---|:---:|:---:|---|:---:|:---:|
| **Str** 10 | +0 | +0 | **Dex** 10 | +0 | +0 | **Con** 10 | +0 | +0 |
| **Int** 10 | +0 | +0 | **Wis** 10 | +0 | +0 | **Cha** 10 | +0 | +0 |

<!-- Aşağıdaki satırlardan BOŞ OLANLAR SİLİNİR. "—" yazılmaz. Sıra değişmez. -->
**Skills** <Skill +n>
**Vulnerabilities** <damage types>
**Resistances** <damage types>
**Immunities** <damage types>; <conditions>
**Gear** <retrievable items>
**Senses** <special senses>; Passive Perception <10 + Perception bonusu>
**Languages** <...>
**CR** <n> (XP <n>; PB +<n>)

#### Traits

***<Trait Name>.*** <text>

#### Actions

***Multiattack.*** The <x> makes <n> <Attack> attacks.

***<Attack>.*** *Melee Attack Roll:* +<n>, reach 5 ft. *Hit:* <n> (<XdY + Z>) <Type> damage.

***<Area Effect> (Recharge 5–6).*** *<Ability> Saving Throw:* DC <n>, each creature in a <n>-foot <Cone/Emanation/Sphere>. *Failure:* <n> (<XdY>) <Type> damage. *Success:* Half damage.

***Spellcasting.*** The <x> casts one of the following spells, requiring no Material components and using <Ability> as the spellcasting ability (spell save DC <n>):

**At Will:** *<spell>*, *<spell>*

**1/Day Each:** *<spell>*, *<spell>*

#### Bonus Actions

***<Name> (<X/Day>).*** <text>

#### Reactions

***<Name>.*** *Trigger:* <ne olunca>. *Response:* <ne olur>.

#### Legendary Actions

<!-- Sadece boss yaratıklarda. Yoksa bu bölümü sil. -->

*Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, the <x> can expend a use to take one of the following actions. The <x> regains all expended uses at the start of each of its turns.*

***<Name>.*** <text>

**Habitat:** <Any/Forest/Grassland/… (Ager bölgesi)> &nbsp;·&nbsp; **Treasure:** <Any/Individual/Armaments/Arcana/Implements/Relics/None>

---

## CR Doğrulaması

<!-- Zorunlu. Hesabı göster ki sonradan denetlenebilsin. cr-math.md §2 -->

```
Hedef: CR <n>   (benchmark: AC <n> · HP <n> · attack +<n> · DC <n> · DPR <n>)

D-CR
  Taban HP <n> × <çarpanlar> = <effective HP>  → tablo CR <x>
  AC <n> vs beklenen <n> → <fark> → <düzeltme>
  D-CR = <n>

O-CR
  Tur 1: <...> = <n>
  Tur 2: <...> = <n>
  Tur 3: <...> = <n>
  3 tur ortalaması = <n> → tablo CR <y>
  Attack +<n> / DC <n> vs beklenen → <düzeltme>
  O-CR = <n>

CR = (<D-CR> + <O-CR>) / 2 = <sonuç>   [hedef: <n>]
```

**Denge notu:** <!-- doldur: hangi eksende yükseltip hangisinde indirdin, neden -->

## Taktik

<!-- doldur: ilk tur ne yapar, kimi hedefler, reaction'ını ne için saklar,
     ne zaman kaçar / teslim olur, Bloodied olunca ne değişir -->

## Ölçekleme

| Parti seviyesi | Düzeltme |
|---|---|
| −2 CR | <!-- HP −%25, bir action'ı kaldır --> |
| +2 CR | <!-- HP +%25, bir saldırı ekle ya da DC +2 --> |
