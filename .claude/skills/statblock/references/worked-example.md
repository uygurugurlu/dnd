# Örnek Çıktı — Kalite Çıtası

> Bu dosya **skill'in referansıdır, kanon değildir.** Ager'e ait bir NPC dosyası
> değil; istenen çıktının nasıl görünmesi gerektiğini gösterir.
>
> **Girdi prompt'u:**
> *"create a cr 8 paladin with paladin spells, uses a shortsword and has a shield,
> has 2 very rare items that is appropriate for a paladin, lives in wheatrest and
> is a veteran of mürai war."*
>
> Aşağıdaki içerik `05-characters/npcs/minor/brannoc-kest.md` olarak yazılmış gibi
> düşünülmelidir; linkler o konuma göre relative'dir.

Dikkat edilecek dört şey:
1. **Adım 1'de Wheatrest dosyası okundu** — Kest ailesi, Muhtar Sipsi Illenum,
   üç gözcü kulesi, Elira Fenwill oradan geldi. Uydurulmadı.
2. **CR doğrulaması dosyanın içinde gösterildi** — sonradan denetlenebilir.
3. **İki very rare eşya resmî** (*Dwarven Plate*, *Ring of Regeneration*) ve
   ikisinin de Ager'de bir hikâyesi var.
4. **1494'ten beri tanrılar sessiz** — ilahi bir NPC bu gerçekle yüzleşmiş.

---
---

```yaml
---
type: character
name: Brannoc Kest
titles: [Kule Çavuşu]
species: İnsan
class: Paladin (Oath of Devotion) — CR 8
alignment: lawful good
age: 41
location: Wheatrest, Ravonia kıtası
affiliation: Bağımsız — Wheatrest gözcü nöbeti (gayriresmî)
status: alive
cr: 8
canon: homebrew
doc_status: usable
tags: [wheatrest, ravonia, paladin, murai-war, veteran, npc, statblock]
sources:
  - "SRD 5.2 (CC-BY-4.0) — Paladin spell list s. 55–56, Oath of Devotion s. 56, stat block formatı s. 251–254"
  - "DMG 2024 — Dwarven Plate (very rare), Ring of Regeneration (very rare)"
updated: 2026-08-17
---
```

# Brannoc Kest — Kule Çavuşu

> *Üç yıl savaştı, son yılında hiç kimse cevap vermedi, ve kılıcı hâlâ yanıyor.
> Neden yandığını bilmiyor — ve bunu kimseye sormuyor.*

## Kimlik Kartı

| | |
|---|---|
| **Tam adı / unvanı** | **Brannoc Kest**, Wheatrest'te "Kule Çavuşu" |
| **Tür / rol** | Medium Humanoid (Paladin), CR 8 |
| **Yaş / görünüş** | 41, iri, kırlaşmış sakal, sol elinde cüce yapımı eldiven |
| **Nerede bulunur** | [Wheatrest](../../../03-ager/continents/ravonia/villages/wheatrest.md) — kuzey gözcü kulesi |
| **Kime bağlı** | Kimseye. Ravonia ordusu 1495'te dağıtıldı |
| **Kime katlanır** | Muhtar **Sipsi Illenum** — köyün resmî otoritesi |

## Görünüş

Omuzları bir kapı kadar geniş, ama sağ omzunu kaldırırken hep yarım saniye
duraklıyor — Lover's Cut'ta aldığı bir mızrak yarası. Cüce yapımı zırhı köyün
hiçbir şeyine benzemiyor: koyu, kalın, üzerinde [Hammerfall](../../../03-ager/continents/ravonia/regions/hammerfall/README.md)
holdünün örs damgası. Zırhın altında hâlâ Ravonia ordusunun tabard'ını taşıyor —
**birlik numarası bıçakla kazınmış.**

> **Akılda kalıcı detay:** Boynunda bir kordonda, kendisine ait olmayan bir
> Karsovia subay mührü asılı. Kimse sormuyor, o da anlatmıyor.

## Ses ve tavır

Alçak, yavaş, cümle aralarında bekler. Emir verirken bağırmaz — tekrarlar.
En sık kullandığı kelime: *"Sırayla."* Dua ettiğini kimse duymamıştır;
**1494'ten beri sesli dua etmiyor.**

## Geçmiş

| Yıl | Ne |
|---|---|
| **1492 DR** | Mürai savaşı çıkar. Brannoc Ravonia ordusunda çavuş; [Northcurrent](../../../03-ager/continents/ravonia/sites/northcurrent.md) garnizonuna verilir |
| 1492–1494 | Lover's Cut geçişini tutan hatta savaşır. İki kez ölmesi beklenir, iki kez ölmez |
| **1494 DR** | Kuyruklu yıldızlar. Gök kızarır. **Tanrılar cevap vermeyi keser.** Brannoc savaşın son yılını cevapsız savaşır |
| **1495 DR** | Ravonia yenilir, ordular dağıtılır. Brannoc yürüyerek Wheatrest'e döner |
| **şimdi** | Köyün üç gözcü kulesinin nöbetini gayriresmî olarak o düzenliyor |

Wheatrest'te doğdu. Küçük kardeşi **Roran Kest** ve yengesi **Lysa Kest** köyde
çiftçi. Brannoc onların evinde kalmayı reddediyor; kuzey kulesinde yatıyor.

## Amaçları

| Amaç | Görünen | Gerçek |
|---|---|---|
| Köyü korumak | Üç kuleyi de nöbetli tutmak | Aynı — bu gerçek |
| Kuzeye gitmek | "Bir tapınağa uğrayacağım" | > **[DM ONLY]** Hâlâ güç alabilmesinin sebebini öğrenmekten **korkuyor**. Gitmeyi üç kez erteledi |

## İlişkiler

| Kim | İlişki |
|---|---|
| **Roran & Lysa Kest** | Kardeşi ve yengesi. Aynı sofraya oturmuyorlar |
| **Muhtar Sipsi Illenum** | Karşılıklı temkinli saygı. Muhtar onu "köyün ikinci otoritesi" olarak görüyor ve bundan rahatsız |
| **Elira Fenwill** (16, wild magic laneti) | Brannoc onu koruyor; köyün "şeytan işi" diyen kısmına karşı **açıkça** durdu |
| [Wheatrest demircisi](../../../03-ager/continents/ravonia/villages/wheatrest-blacksmith.md) | Zırhını o bakamıyor — cüce işi. Bu Brannoc'ın canını sıkıyor |
| **Old Fenrick** (tahıl tüccarı) | Güvenmiyor. Gece geçen arabaların kayıtlarını tutuyor |

---

## Statblock

### Brannoc Kest

*Medium Humanoid (Paladin), Lawful Good*

**AC** 22 &nbsp;&nbsp; **Initiative** +3 (13)
**HP** 97 (13d8 + 39)
**Speed** 30 ft.

| | MOD | SAVE | | MOD | SAVE | | MOD | SAVE |
|---|:---:|:---:|---|:---:|:---:|---|:---:|:---:|
| **Str** 18 | +4 | +4 | **Dex** 10 | +0 | +0 | **Con** 16 | +3 | +3 |
| **Int** 11 | +0 | +0 | **Wis** 14 | +2 | +5 | **Cha** 16 | +3 | +6 |

**Skills** Athletics +7, Insight +5, Perception +5
**Immunities** Frightened
**Gear** Dwarven Plate, Javelins (4), Ring of Regeneration, Shield, Shortsword
**Senses** Passive Perception 15
**Languages** Common, Celestial
**CR** 8 (XP 3,900; PB +3)

#### Traits

***Aura of Protection.*** Brannoc and his allies within 10 feet of him have a +3 bonus to saving throws.

***Aura of Courage.*** Brannoc and his allies within 10 feet of him have Immunity to the Frightened condition.

#### Actions

***Multiattack.*** Brannoc makes two attacks, using Shortsword or Javelin in any combination.

***Shortsword.*** *Melee Attack Roll:* +7, reach 5 ft. *Hit:* 7 (1d6 + 4) Piercing damage plus 9 (2d8) Radiant damage.

***Javelin.*** *Melee or Ranged Attack Roll:* +7, reach 5 ft. or range 30/120 ft. *Hit:* 7 (1d6 + 4) Piercing damage plus 4 (1d8) Radiant damage.

***Oathlight (Recharge 5–6).*** *Constitution Saving Throw:* DC 14, each enemy in a 15-foot Emanation originating from Brannoc. *Failure:* 22 (4d10) Radiant damage, and the target has the Blinded condition until the end of its next turn. *Success:* Half damage only.

***Spellcasting.*** Brannoc casts one of the following spells, using Charisma as the spellcasting ability (spell save DC 14):

**At Will:** *Detect Evil and Good*

**1/Day Each:** *Aid*, *Beacon of Hope*, *Dispel Magic*, *Zone of Truth*

#### Bonus Actions

***Divine Smite (3/Day).*** Immediately after hitting a target with a Shortsword or Javelin attack, Brannoc casts *Divine Smite*, dealing an extra 18 (4d8) Radiant damage to that target.

***Lay On Hands (40 HP Pool).*** Brannoc restores up to 20 Hit Points to himself or one creature he touches, drawing from a pool of 40 Hit Points that replenishes when he finishes a Long Rest. He can instead expend 5 Hit Points from the pool to end one disease or the Poisoned condition on that creature.

#### Reactions

***Protection.*** *Trigger:* An enemy Brannoc can see hits a creature other than him within 5 feet of him with an attack roll. *Response:* Brannoc imposes Disadvantage on that attack roll.

**Habitat:** Grassland, Urban (Wheatrest, Ravonia) &nbsp;·&nbsp; **Treasure:** Armaments

---

## CR Doğrulaması

```
Hedef: CR 8   (benchmark: AC 15 · HP 136 · attack +7 · DC 15 · DPR 53)

D-CR
  Taban HP 97 (humanoid NPC deseni: benchmark'ın %71'i — Assassin CR 8 ile aynı bant)
  × 1.05  Aura of Protection (2+ save bonusu)          → 102
  + 25    Lay On Hands'in savaşta harcanan kısmı        → 127
  → tablo: CR 6 (112) ile CR 7 (130) arası, temkinli okuma CR 6
  AC 22 vs CR 6 beklentisi 15 → +7 fark → 7/2 = +3 CR
  D-CR = 6 + 3 = 9

O-CR
  Tur 1: Oathlight, 22 hasar × 2 hedef                  = 44
  Tur 2: 2 × Shortsword (16+16) + Divine Smite (18)     = 50
  Tur 3: 2 × Shortsword + Divine Smite                  = 50
  3 tur ortalaması = (44 + 50 + 50) / 3                 = 48
  → tablo CR 7 (47)
  Attack +7 vs CR 7 beklentisi +7 → fark 0, düzeltme yok
  O-CR = 7

CR = (9 + 7) / 2 = 8   ✅ hedefe oturdu
```

**Denge notu:** AC 22, CR 8 için çok yüksek (benchmark 15). Bilinçli tercih:
**yüksek AC / düşük HP** profili. Bu Brannoc'ı "vurulması zor ama düştüğünde biten"
bir düşman yapar — bir kule savunucusu için doğru his. Karşılığında HP benchmark'ın
%71'inde tutuldu ve Multiattack 3 değil **2** saldırıya sınırlandı
(cr-math.md §6.1: *"aynı anda her statı yükseltme"*).

---

## Eşyalar

| Eşya | Rarity | Attune | Ager'deki hikâyesi |
|---|---|---|---|
| ***Dwarven Plate*** | Very Rare | Hayır | 1493'te [Hammerfall](../../../03-ager/continents/ravonia/regions/hammerfall/README.md) holdü, Lover's Cut hattını iki hafta tutan bölüğe ödeme olarak verdi. Bölükten dönen üç kişiden biri Brannoc'tı |
| ***Ring of Regeneration*** | Very Rare | **Evet** (1/3) | > **[DM ONLY]** Aşağıya bak |
| Shield, Shortsword, Javelins | — | — | Ravonia ordu standardı. Kılıcı teslim etmesi gerekiyordu; etmedi |

**Attunement:** 1 / 3 kullanılmış.
**Sınıf tag'i:** `Humanoid (Paladin)` — paladin-kilitli eşyalara attune olabilir
(SRD s. 253). Parti ona *Holy Avenger* verirse **çalışır**.

---

## Taktik

1. **Açılış:** Kapıyı ya da geçidi tutar. Kendisi ilerlemez — düşmanı 15 ft
   *Emanation*'a çeker, sonra **Oathlight**.
2. **Öncelik:** En zayıf görünen müttefikine saldıran düşman. *Protection*
   reaction'ını hep saklar.
3. **Divine Smite'ı erken harcar.** "Uzun savaş" diye bir şeye inanmıyor.
4. **Lay On Hands'i kendine kullanmaz** — önce köylü, sonra asker, en son kendisi.
5. **Kaçmaz.** Ama teslim olabilir: sivillerin arasında dövüşmek zorunda kalırsa
   kılıcı bırakır. Bu bir tuzak değil, gerçek.
6. **Bloodied olduğunda** (48 HP altı) geri çekilmez; kule kapısına yaslanır ve
   *Beacon of Hope* atar.

---

## Sırlar

> **[DM ONLY]** Boynundaki mühür, 1494'te Northcurrent önünde gömdüğü bir Karsovia
> subayına ait. ***Ring of Regeneration*** o subayın parmağındaydı. Brannoc yüzüğün
> ne yaptığını **bilmiyor** — yaralarının kapanmasını "tanrılar hâlâ beni tutuyor"
> diye okuyor. Yüzük parmağından çıkarsa inancı çıkacak.

> **[DM ONLY]** Smite'ları hâlâ çalışıyor, çünkü paladinin gücü yeminden gelir,
> cevaptan değil. Brannoc bunu bilmiyor. Bunu **öğrenmek** onu ya kurtaracak ya
> bitirecek. New Campaign'in "tanrılar sessiz" ekseninde bu NPC bir **turnusol
> kâğıdıdır**.

> **[AÇIK SORU]** Karsovia subayının adı ne, ve ailesi mührü arıyor mu?
> → `00-meta/open-questions.md`

---

## Kampanya Kancaları

> **[HOOK]** Brannoc partiden kuzeye giderken kendisine eşlik etmelerini ister.
> Gitmek istediği yer bir tapınak değil — [R-2 portalı](../../../03-ager/planar-sites/portal-network.md).
> Stabilitesi %62 ve 1494'ten beri düşüyor. "Sesin kesildiği yerden başlayacağım."

> **[HOOK]** Old Fenrick'in gece arabaları hâlâ geçiyor. Brannoc kayıt tutuyor ama
> harekete geçmiyor — çünkü müdahale ederse **muhtarın otoritesini yıkacağını**
> biliyor. Parti bu düğümü onun yerine çözebilir.

> **[HOOK]** Elira Fenwill'in laneti ilerlerse köy bir günah keçisi arayacak.
> Brannoc kızın önüne geçer. **CR 8 bir paladin, köylülere kılıç çekmez** — ama
> parti oradaysa denklem değişir.

---
---

## Bu örneğin öğrettikleri

| Ne | Nerede görülüyor |
|---|---|
| Humanoid NPC HP'si benchmark'ın altında | 97 vs 136 (%71) |
| Bir eksende yükseltip başka eksende indirmek | AC 22 ↑ · HP ↓ · Multiattack 2 (3 değil) |
| Ranged seçenek zorunlu | Javelin |
| Nova'yı 3 tura yayma | Oathlight `(Recharge 5–6)`, Divine Smite `(3/Day)` |
| Sınıf tag'inin mekanik değeri | `Humanoid (Paladin)` → attunement |
| 2024 spell notasyonu | `At Will:` / `1/Day Each:`, slot yok |
| 2024 Divine Smite | **Bonus Action**, sınırlı kullanım |
| Reaction Trigger/Response | *Protection* |
| Resmî eşya + Ager hikâyesi | Dwarven Plate → Hammerfall |
| Eşyanın sırra dönüşmesi | Ring of Regeneration → `[DM ONLY]` |
| Timeline'a çivilenmiş geçmiş | 1492 / 1494 / 1495 tablosu |
| "Tanrılar sessiz" ekseni | Ses ve tavır + Sırlar |
| Var olan köy içeriğine bağlanma | Kest ailesi, Sipsi Illenum, Elira Fenwill, demirci, Old Fenrick |
| Denetlenebilir CR | `## CR Doğrulaması` bloğu |
