---
type: meta
name: Dört Cevap — Karakter Görsel Prompt'ları
campaign: New Campaign
canon: homebrew
status: usable
tags: [art, midjourney, prompt, four-answers, reference, new-campaign]
sources:
  - https://blakecrosley.com/guides/midjourney
  - https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version
  - https://www.aiarty.com/midjourney-prompts/midjourney-dark-fantasy-prompts.htm
  - https://clipdance.ai/blog/midjourney-v8-character-consistency
updated: 2026-09-07
---

# Dört Cevap — Karakter Görsel Prompt'ları

**Yukarı:** [Dört Cevap](README.md) · [Sahnedeki Güçler](../README.md)

> Midjourney için, **kişi başına bir prompt.** Her prompt ilgili karakterin
> statsheet'indeki *Görünüş*, *Gear* ve *Akılda kalıcı detay* alanlarından
> türetildi.

---

## Neden ilk deneme karikatür çıktı

| Hata | Sonuç |
|---|---|
| `--v 7` yazılması | **V8.2** 24 Temmuz 2026'dan beri varsayılan. Elle eski modele düşülüyordu |
| Stil cümlesinin **sonda** olması | MJ prompt'un **başına** ağırlık verir. "documentary realism" 200 kelime sonra geliyordu, hiç okunmadı |
| `--stylize 200` | 150–300 bandı = *"noticeable artistic style"*. Doğrudan illüstrasyona itiyor |
| Medium belirtilmemesi | Medium yoksa MJ **kendi ev stilini** basar. Ev stili karikatür/stop-motion |
| `--no` listesinde cartoon olmaması | En doğrudan fren kullanılmamıştı |
| Tek karede 5–6 kişi | MJ 3 yüzden fazlasını tutamaz. Beş kişiden dördü çizildi, hiçbiri tarife uymadı |

---

## Formül

Sıra **önemli.** MJ ilk cümleye en çok ağırlığı verir:

```
[MEDIUM + TÜR]  →  [ÇEKİM + ÖZNE]  →  [4-6 ayırt edici işaret]  →
[imza hareketi]  →  [mekân]  →  [ışık]  →  [parametreler]
```

`--v` **yazma.** Hesabın varsayılanı zaten V8.2; elle sürüm yazmak seni geriye düşürür.

> `--raw` V8 ailesinin yazımı. Client kabul etmezse `--style raw` dene.
> `--exp` opsiyonel (10–25 arası detay/tone-mapping); sorun çıkarırsa at.

### Stil A — sinematik grimdark *(varsayılan)*

Prompt **başına**:

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real fabric weight and naturalistic weathered skin,
```

Prompt **sonuna**:

```
--ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, plastic skin, toy
```

### Stil B — yağlıboya concept art

Aynı iki yeri şunlarla **değiştir**:

```
dark fantasy character concept art, oil on canvas with visible brushwork, heavy chiaroscuro, muted desaturated palette, in the tradition of Zdzislaw Beksinski and Frank Frazetta,
```

```
--ar 2:3 --s 350 --exp 10 --no cartoon, anime, caricature, cel shading, cute, big eyes, chibi, 3d render, plastic
```

Aşağıdaki prompt'lar **Stil A** ile yazılı. B istiyorsan baştaki cümleyi ve
sondaki parametre satırını yukarıdakilerle değiştir, ortadaki karakter tarifi
aynı kalır.

### Kadro tutarlılığı

`--cref` V8'de **kaldırıldı**; `--oref` ise render'ı V7'ye düşürüyor. V8.2'de
doğru yol:

1. Bir karakteri üret, beğendiğini seç.
2. O görselin linkini **`--sref <link> --sw 80`** olarak diğerlerine ver.
3. Aynı ekipteki herkese aynı `--seed` ver ki ışık ve doku oturmuş kalsın.
4. Hesabında Personalization açıksa `--profile <kod>` ekle — en güçlü tutkal bu.

---

# 1. The Level Hand

> *"No gift should make a master."* — [faction dosyası](the-level-hand.md)
> **Mekân:** Cold Ward — yanmış trafo mahallesi, kurumlu tuğla, ölü lambalar, tebeşir yazısı.

## Halden Rooke — "the Hand"

📄 [statsheet](../../../../05-characters/npcs/major/halden-rooke/README.md) · Human, erkek, 44, CR 10

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real fabric weight and naturalistic weathered skin, waist-up portrait of a lean Black man in his mid forties with the posture of a lifelong clerk, cropped bone-white hair, an old ink stain set into the skin beneath his left eye, plain gray leather work gloves, dark studded leather under a shabby coat with no insignia, raising one open gloved palm to chest height, standing in a burned-out arcane transformer district at dusk, dead street lamps, chalk handwriting on soot-black brick, cold overcast light, ash and iron palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, plastic skin, toy
```

## Nyrra Delsaeth — "the Voice"

📄 [statsheet](../../../../05-characters/npcs/minor/the-level-hand/nyrra-delsaeth.md) · Drow, kadın, 107, CR 5

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real fabric weight and naturalistic weathered skin, waist-up portrait of a tall narrow-shouldered drow woman with cropped white hair and pale violet-grey skin, mouth open mid-speech but both arms hanging straight at her sides with palms turned open and empty, a burn scar above her left ear, a plain iron collar she has clearly put on herself, a rapier at her hip, dark studded leather over working clothes, standing above a crowd in a burned-out transformer district, cold overcast light, ash and iron palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, plastic skin, hand gestures
```

## Perra Voight — ölçüm memuru

📄 [statsheet](../../../../05-characters/npcs/minor/the-level-hand/perra-voight.md) · İnsan, kadın, 53, CR 4

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real fabric weight and naturalistic weathered skin, waist-up portrait of a short stout woman in her fifties with the stooped back of two decades on the same stool, thick round spectacles, grey hair in a severe bun, an old utility uniform mended by hand with the epaulettes cut away, both hands resting on a thick iron rod used as a cane, a battered leather ledger case at her hip, flat unimpressed expression, soot-stained industrial ward, cold overcast light, ash and iron palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, plastic skin, toy
```

## Selvarr Dhune — baskın komutanı

📄 [statsheet](../../../../05-characters/npcs/minor/the-level-hand/selvarr-dhune.md) · Drow, erkek, 149, CR 7

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real fabric weight and naturalistic weathered skin, waist-up portrait of a tall gaunt bony drow man with a completely shaved scalp and a long old scar running from the crown to the neck, pale violet-grey skin, a face with no expression whatsoever, eyes closed while speaking, plain grey leather work gloves with thinner fingerless gloves visible beneath the cuffs, a hand crossbow holstered at the chest, dark studded leather, unlit alley at night, single hard rim light, ash and iron palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, plastic skin, toy
```

## Tem Ossary — sokak örgütleyicisi

📄 [statsheet](../../../../05-characters/npcs/minor/the-level-hand/tem-ossary.md) · Halfling, erkek, 20, CR 1

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real fabric weight and naturalistic weathered skin, three-quarter body of a small barefoot twenty-year-old halfling man caught mid-motion, a thin patchy attempted beard, cheap oversized hand-me-down clothes, a cloth satchel stuffed with paper pamphlets, chalk dust on his fingers, writing on a brick wall with chalk while looking back over his shoulder instead of at the wall, an untouched shortsword hanging awkwardly at his belt, burned-out transformer district at dusk, cold overcast light, ash and iron palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, chibi, stylized proportions, 3d render, readable text
```

---

# 2. The First Communion

> *"The world was whole before we divided it."* — [faction dosyası](the-first-communion.md)
> **Mekân:** ince yer — mezar taşları, soluk fey mantar halkası, iki düzlemin aynı karede sızması.

## Ysolde Marr — "Nine"

📄 [faction dosyası](the-first-communion.md#ysolde-marr) · Elf, kadın, 341

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real fabric weight and naturalistic weathered skin, waist-up portrait of a tall serene elf woman in long unadorned grey robes, calm unlined face, hands loose and open at her sides, head tilted slightly as if patiently answering someone standing out of frame, her cast shadow falling at an angle that does not match the light and she is not correcting it, an old burial ground ringed with pale mushrooms where cold autumn light bleeds into deep twilight, heavy ground mist, bone and moon-silver palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, glowing runes
```

## Ilrien — sessiz ikiz

📄 [statsheet](../../../../05-characters/npcs/minor/the-first-communion/ilrien.md) · Elf, kadın, 214, CR 5

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real fabric weight and naturalistic weathered skin, waist-up portrait of a slender elf woman in plain grey robes, shoulder-length hair where one side hangs dark and soaked while the other is completely dry, lips closed and silent, holding up a small folded paper note she clearly wrote before the conversation began, a curved seam knife at her belt and a shortbow across her back, fog-filled fey ring at twilight, her footprints appearing a half-step behind where she stands, bone and moon-silver palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, readable text, glowing runes
```

## Nerath — konuşan ikiz

📄 [statsheet](../../../../05-characters/npcs/minor/the-first-communion/nerath.md) · Elf, erkek, 214, CR 8

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real fabric weight and naturalistic weathered skin, waist-up portrait of an elf man in plain grey robes, identical in face and build to his twin sister but warm and mid-sentence with an easy reassuring expression, his right hand visibly filthy with damp soil packed under the nails while his left is clean, pupils dilated wrongly for the light, a knotted thornstaff in one hand and a small round shield on his back, graveyard half overgrown with impossible flowers, heavy mist, bone and moon-silver palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, glowing runes
```

## Mirel Ashvane — Moon druid

📄 [statsheet](../../../../05-characters/npcs/minor/the-first-communion/mirel-ashvane.md) · Tiefling, kadın, 44, CR 7

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real fabric weight and naturalistic weathered skin, waist-up portrait of a short thick weathered tiefling woman of forty-four with dull reddish skin and wide horns sawn off blunt close to the skull by her own hand, only three fingers on her left hand, mud-stained brown hide armour and a farm coat instead of the grey robes her congregation wears, a knotted thornstaff in her right hand, looking exactly like a rural village midwife, patient and waiting rather than speaking, muddy edge of a flooded coppice at grey dusk, bone and moon-silver palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, glowing runes
```

## Thava Vessek — Akadi druid

📄 [statsheet](../../../../05-characters/npcs/minor/the-first-communion/thava-vessek.md) · Bronze dragonborn, kadın, 58, CR 7

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real scale texture and fabric weight, waist-up portrait of a tall narrow bronze dragonborn woman whose scales turn green in the light, no wings, rows of fine wind-shaped scales along her shoulders and forearms fanning open like reed pipes, grey hide armour with an additional weightless gauze layer that lifts and drifts although there is no wind in the scene, a quarterstaff in one hand, standing in a doorway she has left wide open behind her, hilltop shrine at dawn with the sky pressing low, bone and moon-silver palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, glowing runes
```

## Corvane Sull — Shadowfell gözcüsü

📄 [statsheet](../../../../05-characters/npcs/minor/the-first-communion/corvane-sull.md) · Tiefling, erkek, 31, CR 4

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real fabric weight and naturalistic weathered skin, waist-up portrait of a thin long-necked tiefling man of thirty-one with grey-violet skin and small horns swept back close to the skull, one horn visibly snapped and glued back together with the repair line plainly showing, his tail caught mid-motion, head tilted as if repeating a sentence nobody else heard, holding a small brass handbell carefully by the body so it cannot ring and watching it instead of the camera, lichened headstones in twilight fog, bone and moon-silver palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, glowing runes
```

---

# 3. The Unfettered Wind

> *"No throne beneath an open sky."* — [faction dosyası](the-unfettered-wind.md)
> **Mekân:** Lirion — kayaya oyulmuş dikey şehrin çatıları, uçurum, devasa açık gökyüzü, sert altın saat ışığı.

## Vane — "the Footless"

📄 [faction dosyası](the-unfettered-wind.md#vane) · Tiefling, erkek, 38

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real fabric weight and naturalistic weathered skin, three-quarter body of a slim tall tiefling man of thirty-eight in completely plain unadorned clothing with no badge or ornament of any kind, short horns worn blunt and broken at the tips, barefoot, calm reasonable expression mid-argument rather than mid-threat, his bare feet hovering two finger-widths above the stone without him noticing, the dust beneath him hanging unsettled in the air, windswept terrace of a vertical cliff-carved city, enormous open sky, hard low sunlight, bleached stone and dust palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, glowing effects
```

## Ashka — gedik açıcı

📄 [statsheet](../../../../05-characters/npcs/minor/the-unfettered-wind/ashka.md) · Goliath, kadın, 36, CR 8

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real metal and fabric weight, three-quarter body of a towering goliath woman over seven feet tall with grey stone-toned skin marked by dark natal striations across the neck and shoulders, cropped white hair, still wearing scavenged military chain mail she never stripped or repainted with a seven-toothed gear on the chest crossed out by a single chalk line, a heavy engineer's breaching maul on one shoulder, turned away and studying the hinges of a door instead of the camera, city rooftop, hard low sunlight, bleached stone and dust palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, readable insignia
```

## Corr — nişancı

📄 [statsheet](../../../../05-characters/npcs/minor/the-unfettered-wind/corr.md) · İnsan, erkek, 39, CR 7

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real fabric weight and naturalistic weathered skin, waist-up portrait of a deliberately unremarkable man of thirty-nine, average height, average build, brown hair, a face with no memorable feature at all, plain brown travelling clothes over dark studded leather, carrying no firearm or bow of any kind and only a small belt knife, a thick callus in the web between his right thumb and forefinger while his left hand is unmarked, sitting alone on a roof ridge doing nothing and watching the wind, hard low sunlight, bleached stone and dust palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, visible rifle, heroic pose
```

## Emrys Tal — sahteci

📄 [statsheet](../../../../05-characters/npcs/minor/the-unfettered-wind/emrys-tal.md) · Gnome, erkek, 121, CR 4

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real fabric weight and naturalistic weathered skin, waist-up portrait of a small tidy gnome man of a hundred and twenty-one, deeply wrinkled and thoroughly cheerful, short neatly trimmed white beard, spectacles on the very tip of his nose with two visibly different lens thicknesses, dark plain guild-clerk clothing with a pressed collar and a bare pin-hole where a badge sat for forty years, holding a document turned over so he is studying the blank back of the page, a forgery kit and a case of wax seals open before him, warm low workshop light --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, chibi, stylized proportions, 3d render, readable text
```

## Kesh Duva — hücre lideri

📄 [statsheet](../../../../05-characters/npcs/minor/the-unfettered-wind/kesh-duva.md) · Half-orc, kadın, 24, CR 6

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real leather and rope texture, three-quarter body of a twenty-four-year-old half-orc woman, medium height and built fast rather than bulky, green-tinged skin, small protruding lower tusks, short tight black braids, hands and knees covered in fresh and half-healed scrapes, wearing a climbing harness of leather straps, carabiners and coiled rope instead of armour, two shortswords crossed at the small of her back, one hand raised and gripping a wooden roof beam above her head while she talks, hard low sunlight, bleached stone and dust palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render
```

## Serane Ardo — ilancı

📄 [statsheet](../../../../05-characters/npcs/minor/the-unfettered-wind/serane-ardo.md) · Aasimar, kadın, 34, CR 5

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real fabric weight and naturalistic weathered skin, three-quarter body of a tall upright calm aasimar woman of thirty-four whose skin holds slightly more light than the scene provides and whose eyes have unnaturally clean whites, making no attempt to hide either, plain travelling clothes over dark studded leather, a thick door-width wooden notice board strapped across her back dense with old nail holes and torn paper corners, a hammer in her hand mid-swing, town square at golden hour, hard low sunlight, bleached stone and dust palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, halo, wings, readable text
```

---

# 4. The Iron Concord

> *"Order is mercy."* — [faction dosyası](the-iron-concord.md)
> **Mekân:** onarılmış yol, tahıl arabaları, yarım construct, katlanır kayıt masası, gri şafak.

## Marshal Vharra Stane

📄 [faction dosyası](the-iron-concord.md#marshal-vharra-stane) · Dwarf, kadın, 137

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real wool and metal weight, waist-up portrait of a short broad dwarf woman of a hundred and thirty-seven standing ramrod straight behind a desk, a flawlessly maintained but visibly old and patched military uniform from a war that ended years ago, two fingers missing from her right hand with no prosthetic, deeply and genuinely tired eyes with no cruelty in them, her hands occupied squaring the objects on the desk into alignment, a small wound brass clockwork automaton beside her, austere field headquarters at grey dawn, flat even light, iron and oxidised brass palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, readable insignia
```

## Vashka Durn — paladin

📄 [statsheet](../../../../05-characters/npcs/minor/the-iron-concord/vashka-durn.md) · Ork, kadın, 41, CR 9

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real steel weight and scratched enamel, three-quarter body of a large broad orc woman of forty-one with greenish-grey skin and a broken lower right tusk, movements slow and measured rather than fierce, full plate armour with a seven-toothed gear engraved on the breastplate, a warhammer at her side and a heavy shield held so its inner face is turned away and hidden, standing squarely in a stone doorway and filling it, patient and immovable, the stance of someone who sleeps upright against a wall, grey dawn behind her, iron and oxidised brass palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, holy symbols, readable insignia
```

## Rhoswen Marek — taktik subayı

📄 [statsheet](../../../../05-characters/npcs/minor/the-iron-concord/rhoswen-marek.md) · İnsan, kadın, 38, CR 7

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real chain mail weight and naturalistic weathered skin, waist-up portrait of a tall lean woman of thirty-eight with cropped sand-coloured hair and a scar running from above her right eyebrow down to her jaw, army-issue chain mail with the epaulettes torn away and a new patch stitched over the ghost outline of older embroidery still showing through, a longsword at her hip, crouched slightly with one hand open having just released a fistful of dust to read which way it drifts, watching the dust instead of the camera, ruined roadside at grey dawn, iron and cold mud palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, readable insignia
```

## Torvi Sedd — ordu mühendisi

📄 [statsheet](../../../../05-characters/npcs/minor/the-iron-concord/torvi-sedd.md) · Cüce, kadın, 118, CR 8

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real soot, oil and hammered metal texture, three-quarter body of a broad short dwarf woman of a hundred and eighteen whose forearms are thicker than her shoulders, beard worked into two braids capped with brass rings, wearing a plated working exoframe rather than armour with two short levers rising over the shoulders, soot-stained everywhere, no gloves, permanent burn scars on every fingertip, a long arc lance in one hand, looking past the camera and up at the ceiling beams behind it, half-built construct in the shadows, iron and oxidised brass palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, modern machinery, steampunk goggles
```

## Gruvv Ashani — kalkan duvarı çavuşu

📄 [statsheet](../../../../05-characters/npcs/minor/the-iron-concord/gruvv-ashani.md) · Ork, erkek, 34, CR 6

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real steel weight and scraped paint, three-quarter body of a thick orc man of thirty-four with no neck and enormous shoulders, his left ear missing entirely and the little finger of his right hand gone, an uncut beard braided and tied with eleven separate knots, issued chain mail but an older army shield with its original paint scraped off and a new seven-toothed gear drawn onto it by hand, crookedly and badly, never corrected, a warhammer at his belt, muddy road at grey dawn, flat even light, iron and cold mud palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, readable insignia
```

## Aleth Brann — kayıt müfettişi

📄 [statsheet](../../../../05-characters/npcs/minor/the-iron-concord/aleth-brann.md) · İnsan, erkek, 46, CR 4

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, shallow depth of field, real pressed wool and paper texture, waist-up portrait of a clean thin man of forty-six in a spotless perfectly pressed uniform that has obviously never seen a battlefield, standing out awkwardly among veterans, a single permanent ink stain on his right thumb, seated behind a folding camp desk set up on a village road with a leather ledger open in front of him and a heavy wax seal at his elbow, pen in hand, looking up with polite attention, a queue of villagers waiting blurred behind him, grey dawn, flat even light, iron and cold mud palette --ar 2:3 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, readable text
```

---

# Grup sahneleri

> ⚠️ **Kare başına en fazla üç kişi.** MJ dördüncü yüzü uydurmaya başlıyor —
> ilk denemede beş kişiden dördü çizildi ve hiçbiri tarife uymadı.

Her ekip **iki panel**: solda karar verenler, sağda işi yapanlar.
Sıra bireysel prompt'ları çalıştırdıktan **sonra**: beğendiğin bir portreyi
`--sref <link> --sw 80` olarak panele ver, aynı `--seed`'i iki panelde de kullan.

## Level Hand — çekirdek

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, three figures on a makeshift platform at dusk, at the centre a lean Black man in his forties with cropped bone-white hair and plain grey work gloves raising one open palm, to his left a tall drow woman with cropped white hair and pale violet-grey skin standing with both arms straight down and palms open and empty, an iron collar at her throat, to his right a tall gaunt bald drow man with a long scalp scar and matching grey gloves, eyes closed, burned-out arcane transformer district, chalk handwriting on soot-black brick, dead street lamps, a silent crowd blurred behind, cold overcast light, ash and iron palette, no banners and no emblems anywhere --ar 16:9 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, plastic skin, banners, logos
```

## Level Hand — saha

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, two figures in a soot-stained industrial ward at dusk, a short stout woman in her fifties with thick round spectacles and a severe grey bun leaning on a thick iron rod used as a cane, a battered leather ledger case at her hip, her uniform hand-mended with the epaulettes cut away, beside her a small barefoot young halfling man with a satchel of pamphlets writing on the brick wall with chalk without looking at it, dead street lamps, cold overcast light, ash and iron palette --ar 16:9 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, chibi, stylized proportions, 3d render, readable text
```

## First Communion — çekirdek

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, three grey-robed figures standing apart in an old burial ground ringed with pale mushrooms, at the centre a tall serene elf woman with her hands loose at her sides and her head tilted as if answering someone out of frame, her cast shadow falling at the wrong angle, to one side a slender elf woman with one half of her hair soaked and the other dry, silent, holding up a small folded note, to the other side an elf man identical to her in face and build but warm and mid-sentence with his right hand caked in damp soil, cold autumn light bleeding into deep twilight in the same frame, heavy ground mist, bone and moon-silver palette --ar 16:9 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, glowing runes, readable text
```

## First Communion — saha

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, three figures at the muddy edge of a flooded coppice at grey dusk, a short thick tiefling woman with reddish skin and horns sawn off blunt and only three fingers on her left hand, in brown mud-stained farm clothes with a knotted thornstaff, a tall narrow bronze dragonborn woman with rows of fine wind-shaped scales along her shoulders and a weightless gauze layer drifting although there is no wind, a thin long-necked tiefling man with grey-violet skin and one horn visibly glued back together holding a small brass bell by the body so it cannot ring, heavy mist, bone and moon-silver palette --ar 16:9 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, glowing runes
```

## Unfettered Wind — çekirdek

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, three figures on a windswept terrace of a vertical cliff-carved city at golden hour, nobody framed as the leader and no two facing the same direction, a slim tall tiefling man in completely plain clothing with short broken horns, barefoot, his feet hovering two finger-widths above the stone and the dust beneath him hanging unsettled, a deliberately unremarkable middle-aged man in plain brown sitting on the roof ridge carrying no visible weapon, an elderly gnome man with a short white beard and spectacles with two different lens thicknesses, an enormous open sky, a single horizontal chalk line on the stone wall, hard low sunlight, bleached stone and dust palette --ar 16:9 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, chibi, stylized proportions, 3d render, banners, insignia
```

## Unfettered Wind — saha

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, three figures on the layered rooftops of a vertical cliff-carved city at golden hour, a towering goliath woman over seven feet tall with grey stone-toned skin and dark natal striations in scavenged chain mail with a seven-toothed gear on the chest crossed out by a chalk line, a breaching maul on her shoulder, a young half-orc woman in a climbing harness of straps and coiled rope gripping a roof beam above her head, a tall aasimar woman whose skin holds too much light carrying a door-sized wooden notice board riddled with nail holes across her back, enormous open sky, hard low sunlight, bleached stone and dust palette --ar 16:9 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, halo, wings, readable text
```

## Iron Concord — çekirdek

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, three figures on a freshly repaired road at grey dawn, at the centre a short broad dwarf woman standing ramrod straight in a flawless but old and patched military uniform, two fingers missing from her right hand, deeply tired eyes, beside her a large broad orc woman in full plate with a seven-toothed gear engraved on the breastplate holding her shield so its inner face is turned away and hidden, and a clean thin man in a spotless never-campaigned uniform seated at a folding camp desk with a ledger open, a patient queue of villagers waiting blurred behind, grain wagons, flat even light, iron and oxidised brass palette, everyone grateful and nothing visibly wrong --ar 16:9 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, readable insignia
```

## Iron Concord — saha

```
cinematic film still from a grimdark fantasy epic, shot on 35mm anamorphic, three figures on a muddy road at grey dawn beside a half-built stone-limbed construct, a tall lean woman with cropped sand-coloured hair and a scar from her right eyebrow to her jaw in chain mail with the epaulettes torn away, releasing a fistful of dust to read the wind, a broad dwarf woman in a plated working exoframe with two short levers over the shoulders and beard braids capped in brass, holding a long arc lance, a thick orc man with no neck and a missing left ear carrying an old shield with a crooked hand-drawn seven-toothed gear on it, flat even light, iron and cold mud palette --ar 16:9 --raw --s 60 --exp 15 --no cartoon, anime, illustration, caricature, cel shading, cute, big eyes, stylized proportions, 3d render, readable insignia, modern machinery
```
