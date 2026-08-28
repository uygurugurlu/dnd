---
type: meta
title: Etiket Dizini
status: usable
updated: 2026-08-10
---

# Etiket Dizini

Frontmatter'daki `tags:` alanında kullanılan etiketler. Tutarlı kullanım için
**yeni etiket uydurmadan önce buraya bak.**

## Kozmoloji
`cosmology` · `planes` · `multiverse` · `outer-plane` · `inner-plane` · `transitive` ·
`echo-plane` · `feywild` · `shadowfell` · `astral` · `ethereal` · `elemental` ·
`nine-hells` · `abyss` · `blood-war` · `sigil` · `outlands` · `far-realm` · `wildspace`

## İlahi
`deity` · `pantheon` · `archdevil` · `demon-lord` · `divinity` · `chosen` · `cleric`

## Büyü
`magic` · `weave` · `shadow-weave` · `arcane` · `divine` · `primal` · `psionic` ·
`dead-magic` · `wild-magic` · `artifact` · `mythal`

## Coğrafya
`ager` · `charaxis` · `continent` · `nation` · `city` · `town` · `village` · `region` ·
`site` · `dungeon` · `ruin` · `sea` · `underdark`

## Kişiler
`major-npc` · `minor-npc` · `pc` · `villain` · `patron` · `ally` · `legend` · `dead`

## Örgütler
`faction` · `guild` · `cult` · `order` · `criminal` · `military` · `religious`

## Kampanya
`campaign` · `session` · `quest` · `arc` · `hook` · `dm-only` · `handout`

## Kurallar
`homebrew` · `house-rule` · `statblock` · `item` · `spell` · `subclass` · `species` · `table`

## Durum
`stub` · `draft` · `usable` · `complete` · `needs-review`

---

## Etiket Arama

```bash
# Bir etiketi taşıyan tüm dosyalar
grep -rln "tags:.*zariel" --include="*.md" .

# Tüm kullanılan etiketleri listele
grep -rh "^tags:" --include="*.md" . | tr -d '[]' | cut -d: -f2- | tr ',' '\n' | tr -d ' ' | sort -u
```
