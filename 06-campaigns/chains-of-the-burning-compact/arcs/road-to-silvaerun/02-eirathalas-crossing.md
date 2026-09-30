---
type: arc
name: Silvaerûn Yolu — Eira'thalas Geçişi
campaign: Chains of the Burning Compact
canon: homebrew
status: usable
level: 8
tags: [arc, travel, eirathalas, forest, nature, hazards, survival, silvaerun]
sources:
  - "SRD 5.2 (CC-BY-4.0) — Owlbear, Dire Wolf, Brown Bear, Giant Constrictor Snake, Giant Elk, Swarm of Insects, Will-o'-Wisp, Dryad, Treant, Shambling Mound, Awakened Tree statblock'ları; Exhaustion (2024)"
  - "https://media.dndbeyond.com/compendium-images/srd/5.2/SRD_CC_v5.2.pdf"
  - "DMG 2024 — XP Budget per Character: https://roll20.net/compendium/dnd5e/Rules:Plan%20Encounters?expansion=33359"
updated: 2026-09-27
---

# Eira'thalas Geçişi — ormanın gerçek tehlikesi

**Yukarı:** [Silvaerûn Yolu](README.md) · **Yer:** [Eira'thalas](../../../../03-ager/continents/ravonia/regions/eirathalas.md) ·
**Sonraki:** [Varış — Caélora](04-arrival-caelora.md)

> Burada kimse sizi beklemiyor. Asker yok, haydut yok, elf devriyesi bile yok.
> Sadece **dört gün**, dört halka ve sözünü tutan bir orman.

**Kim buraya gelir:** Rota A (doğudan, [Tharn'Kel](../../../../03-ager/continents/ravonia/cities/tharn-kel.md))
ve Rota B (güneyden, Urkhal üstünden). Rota C ormanı **atlar.**

**Tasarım fikri:** Bu bölüm bir dövüş dizisi değil, bir **aşınma** dizisidir.
Hava, yön, açlık ve tehlikeler partiyi yavaş yavaş Exhaustion'a iter;
hayvanlar bunun üstüne biner. Parti ormana **saygı** gösterirse orman onu geçirir.
Göstermezse — orman kapanır.

---

## Orman Dikkati

**0–6 arası sayaç.** Ormanın partiye ne kadar dikkat ettiği. Oyunculara sayıyı
gösterme; **belirtilerini** göster (kuşlar susar, patika kaybolur, rüzgâr döner).

**Başlangıç: 0**, sonra:

| Durum (girişte) | Dikkat |
|---|---|
| aysif'in **Zariel rünü** açıkta (Amulet of Proof takılı değilse) | **+1** — orman infernal bir işaret okuyor |
| Partide **balta** var (savaş baltası dahil) | **+1** — *"Ormanın derinine balta girmez."* Tharn'Kel'de emanete bırakılırsa 0 |
| Parti **Demon Armor** taşıyor (soygundan) | **+1** |

**Yolda:**

| Artırır | | Azaltır | |
|---|---:|---|---:|
| Canlı ağaç kesmek, dal kırmak (yakacak için bile) | +1 | Bir iz taşına **adak** bırakmak (yiyecek, gümüş) | −1 (günde bir) |
| Ateşi kamp ateşinden büyük yakmak; **herhangi** bir ateş Derin/Kök'te | +1 | Antlaşmanın dört maddesini **Elfçe** yüksek sesle söylemek | −1 (bir kez) |
| Ateş hasarı veren büyü, patlama (*Fireball*, **Necklace of Fireballs**) | **+2** | *Druidcraft*, *Speak with Plants* ile **izin istemek** + DC 13 Nature | −1 |
| Saldırmayan bir hayvanı öldürmek; Derin'de avlanmak | +1 | Kaybolmuş/yaralı bir hayvana yardım (DC 13 Animal Handling / Medicine) | −1 |
| Thunder hasarı, gürültülü büyü, boru | +1 | Bir fey'e (dryad) **misafir hakkı** tanımak — yemeğini paylaşmak | −1 |
| İz taşını yerinden oynatmak / tahrip etmek | +2 | | |

### Eşikler

| Dikkat | Durum | Ne olur |
|---:|---|---|
| **0–1** | **Misafir** | Orman nötr. Toplayıcılık normal. Hayvanlar kaçar, saldırmaz |
| **2–3** | **Dikkat** | Yön bulma DC **+2**. Toplayıcılık yok. Karşılaşmalar **bölgesel** (uyarır, sonra saldırır) |
| **4–5** | **Uyarı** | Hava: **iki kez at, kötüsünü al.** Karşılaşma zarına **+2.** Hayvanlar düşmanca |
| **6** | **Kapanış** | [Kök Bekçisi](../../../../02-lore/bestiary/rootwarden.md) gelir → [Kapanış](#dikkat-6--kapanış) |

> **Dikkat Saçak'a düşmez.** Saçak halkasına geri çıkan parti için sayaç günde
> −1 iner. Orman kovalamaz — **kapıyı gösterir.**

---

## Günlük döngü

Her gün **aynı beş adım.** Masada hızlı akar.

```
1. SABAH ──── Hava (d8)
2. YOL ────── Yön bulma (Survival, halka DC'si) → başarısızsa KAYIP
3. HALKA ──── O halkanın sabit tehlikesi (aşağıda)
4. KARŞILAŞMA  d12 (öğlen) · gece de at, eğer ateş yandıysa ya da nöbet tutulmadıysa
5. KAMP ───── Toplayıcılık, ateş kararı, nöbet
```

| Gün | Halka | Yön DC | Sabit tehlike |
|---:|---|---:|---|
| 1 | **Saçak** | 12 | [Kabaran Dere](#kabaran-dere--swollen-ford) |
| 2 | **Sık** | 14 | [Kök Bataklığı](#kök-bataklığı--root-mire) + [Kan Yosunu](#kan-yosunu--bloodmoss) |
| 3 | **Derin** | 16 | [Uyku Oyuğu](#uyku-oyuğu--sleep-pollen-hollow) · **Kör Öğlen** tüm gün |
| 4 | **Kök** | 18 | [Dönen Yol](#dönen-yol--the-turning-path) |

### Hava — d8, her sabah

> **[AÇIK SORU]** Mevsim belirlenmedi. Tablo mevsimden bağımsız yazıldı; kışsa
> 7'yi **kar** oku ve 2'yi **sulu kar**.

| d8 | Hava | Etki |
|---:|---|---|
| 1 | **Açık** | Etki yok |
| 2 | **Çisenti** | Ateş yakmak: Survival DC 12. Perception (koku/iz) Disadvantage |
| 3 | **Sis** | 30 ft ötesi **Heavily Obscured**. Yön DC +2 |
| 4 | **Sağanak** | 60 ft ötesi Lightly Obscured. Ateş yakılamaz (sığınak yoksa). Kabaran Dere DC +2 |
| 5 | **Rüzgâr fırtınası** | Menzilli saldırılar Disadvantage. O gün bir kez [Rüzgâr Devriği](#rüzgâr-devriği--deadfall) |
| 6 | **Gök gürültülü fırtına** | Sağanak + o gün bir kez [Yıldırım Tacı](#yıldırım-tacı--lightning-crown) |
| 7 | **Soğuk dalgası** | Soğuk giysisi olmayan: saatlik değil, **akşam** DC 12 Con save — başarısızsa 1 Exhaustion |
| 8 | **Ağaç nefesi** | Havada polen. Herkes DC 12 Con save → başarısızsa 1 saat Poisoned. Elfler Advantage |

### Yön bulma

Rehber (navigator) **Wisdom (Survival)** atar, halkanın DC'sine karşı.

| Değiştirici | |
|---|---|
| İz taşlarını okuyabilen (Elfçe + DC 12 History, ya da Tharn'Kel'de ders almış) | **Advantage** |
| *Cloak of Elvenkind*'ın astarındaki dikili işaret çözüldüyse | +2 |
| Rehber: **Mavis** (sadece Saçak) · **Ilrien** (her halka) | Advantage / otomatik başarı |
| Dikkat 2+ | DC +2 |
| Sis | DC +2 |

**Başarısız → KAYIP.** O gün **yarım gün** kaybedilir ve [tehlike tablosundan](#tehlikeler)
bir tane daha gelir. Parti kaybı zorla telafi etmek isterse (zorunlu yürüyüş):
herkes DC 15 Con save, başarısızsa 1 Exhaustion.

### Toplayıcılık ve açlık

- **Toplayıcılık** (kamp adımında, bir kişi): Wisdom (Survival) — Saçak DC 12,
  Sık DC 14, Derin/Kök DC 16. Başarı: 1d6 + Wis mod kişilik günlük yiyecek.
  **Dikkat 2+ iken toplanamaz** — orman vermez.
- **Derin'de avlanmak** Dikkat **+1.**
- Erzak bitince: PHB 2024 açlık kuralı (her gün sonunda Exhaustion riski).

> **Tasarım notu:** Tharn'Kel ya da Urkhal'da **4 günlük** erzak alan parti
> rahattır. 3 günlük alan parti son gün toplayıcılığa muhtaçtır —
> ve Dikkat 2+ ise toplayamaz. Bu, **ormanın sessiz baskısıdır.**

### Exhaustion (2024 hatırlatma)

Her seviye: d20 testlerine **−2**, hız **−5 ft**. Seviye 6 = ölüm.
Long Rest bir seviye düşürür (yiyecek ve su varsa). Ormanda
**4 gün boyunca 2–3 Exhaustion** biriktirmek normaldir — Caélora'ya
yorgun varmak, sahnenin kendisidir.

---

## Tehlikeler

Hepsi 2024 hazard mantığıyla: **fark et → kaçın → sonuç.**
Seviye 8 için DC 15 "tehlikeli", hasar ~4d10 "ciddi".

#### Kabaran Dere — *Swollen Ford*

*Saçak/Sık, gün 1.* Dizden yukarı gelmeyen dere, yukarıdaki yağmurla göğüse çıkıyor.
- **Fark et:** DC 13 Wisdom (Survival) — su rengi ve sesi. Başarı: 1 saat bekle,
  su iner (ya da 1 mil yukarıda geçit bulunur).
- **Geçiş:** Her yaratık DC 15 Strength (Athletics). Halatla bağlı gruba Advantage.
  Ağır zırh Disadvantage.
- **Başarısızlık:** 60 ft sürüklenir, 3d6 Bludgeoning, eşyalardan biri (d6: 1–3 erzak,
  4–5 bir silah, 6 **ganimet çantası**) akıntıya kapılır — DC 15 Dex ile yakalanır.
- **Soğuk su** (hava 7 ise): ıslak olan akşam Con save'ine Disadvantage.

#### Kök Bataklığı — *Root-Mire*

*Sık, gün 2.* Kök ağının altında çürümüş yaprak ve kara su. Üstü sağlam görünür.
- **Fark et:** DC 15 Wisdom (Survival) ya da Intelligence (Nature).
- **Etki:** 20 × 20 ft alan. Giren yaratık **5 ft batar** ve Restrained olur; her turunun
  başında 1d4 ft daha batar. Tamamen batan boğulmaya başlar.
- **Kurtulma:** Action ile DC 15 Strength (Athletics) — kendin ya da 5 ft içindeki biri
  için. Batış derinliği başına DC +1.
- **Ağır yük:** 40 lb üstü taşıyan Disadvantage (Adamantine / Demon Armor!).

#### Kan Yosunu — *Bloodmoss*

*Sık, gün 2.* Kırmızı, kadife gibi yosun; bataklığın kenarını kaplar. Dokunan
deriye yapışır.
- **Fark et:** DC 13 Intelligence (Nature). Elf rehber otomatik bilir.
- **Etki:** Çıplak deriyle temas → DC 15 Constitution save. Başarısızlık: **Poisoned**
  24 saat ve o gecenin Long Rest'i Exhaustion düşürmez. Başarı: 1 saat Poisoned.
- **Kullanım:** Healer's Kit + DC 14 Medicine ile toplanırsa 1 doz **basic poison** eder.

#### Uyku Oyuğu — *Sleep-Pollen Hollow*

*Derin, gün 3.* Çukur bir vadi, dibi beyaz çiçek. Havada altın bir toz asılı.
Tek geçit buradan — ya da yarım günlük dolambaç.
- **Fark et:** DC 15 Wisdom (Perception) — vadinin dibinde uyuyan (ölü değil)
  hayvanlar görünür.
- **Etki:** Oyukta her 10 dk: DC 15 Constitution save. Başarısızlık: **Unconscious**
  1 saat (magical sleep; **Fey Ancestry** olanlar bağışık). Hasar ya da bir müttefikin
  Action'ı uyandırır.
- **Kaçın:** Ağzı ıslak bezle kapatmak (save'e Advantage); dolambaç (+½ gün).
- **Birleşim:** d12 karşılaşması bu vadide gelirse (kurtlar, will-o'-wisp),
  uyuyanlar Incapacitated sayılır. **Burası ormanın en öldürücü yeri.**

#### Kör Öğlen — *Canopy Dark*

*Derin, gün 3, bütün gün.* Tavan kapanmış; öğlen bile **Dim Light.**
Darkvision'ı olmayanlar Perception (görme) Disadvantage. Işık yakmak mümkün —
ama ışık **görünür** (gece karşılaşma zarına +1).

#### Dönen Yol — *the Turning Path*

*Kök, gün 4.* Kök halkasında patikalar gerçekten **yer değiştirir.**
- Yön bulma başarısızsa parti bir saat yürüyüp **aynı iz taşına** geri döner.
  Üst üste iki başarısızlık: **Dikkat +1** (orman sabrını kaybeder).
- **Kırmak:** Antlaşmanın maddelerini Elfçe söylemek, bir iz taşına adak bırakmak,
  ya da Ilrien. Ormanın **seni geçirmeyi kabul etmesi** gerekir.

#### Rüzgâr Devriği — *Deadfall*

*Her halka, hava 5.* Yaşlı bir dal ya da çürük bir gövde.
- **Fark et:** DC 14 Wisdom (Perception) — çatırtı. Başarı: Reaction ile 10 ft kaç.
- **Etki:** 15 ft genişlikte hat. DC 15 Dexterity save; başarısızlık 4d10 Bludgeoning
  ve Prone; başarı yarı hasar.

#### Yıldırım Tacı — *Lightning Crown*

*Her halka, hava 6.* Fırtınada yıldırım **metali** arar.
- **Etki:** Günde bir kez, ağır ya da orta **metal** zırhlı rastgele bir yaratık:
  DC 15 Dexterity save; başarısızlık 4d10 Lightning, başarı yarı. (max'ın plate'i
  masada unutulmaz.) Metal zırhı çıkarıp taşıyan hedef olmaz — ama zırhsızdır.

---

## Karşılaşmalar

**d12, öğlen** (ve gece, eğer ateş yandı ya da nöbet yoksa). Dikkat 4+ ise **+2.**
Davranış Dikkat'e bağlı: **0–1** kaçar/uyarır · **2–3** bölgesel · **4+** saldırır.

| d12 | Ne | Halka | XP | Not |
|---:|---|---|---:|---|
| 1–4 | **İz** — taze kemik, kırık dal, bir iz taşı, uzakta bir elf ıslığı | Hepsi | — | Dikkat 4+ ise 1–2 sadece |
| 5 | 2 × **Owlbear** (anne + yavru olmuş erişkin) | Saçak/Sık | 1,400 | Yuvanın yanından geçildi. Dikkat 0–1: bağırır, saldırmaz |
| 6 | 8 × **Dire Wolf** | Hepsi | 1,600 | Sürü partiyi **takip eder**, zayıfı ayırmayı bekler. Uyku Oyuğu'nda gelirse **ölümcül** |
| 7 | 2 × **Giant Constrictor Snake** | Sık | 900 | Dere/bataklık kenarında. Kök Bataklığı'yla birlikte |
| 8 | 4 × **Swarm of Insects** | Sık | 400 | Bataklık sineği. Asıl etkisi: kamp kurulamaz, Short Rest yok |
| 9 | 2 × **Will-o'-Wisp** | Derin/Kök | 900 | Işıkla yanlış yöne çeker: takip eden Kök Bataklığı'na ya da Uyku Oyuğu'na |
| 10 | **Dryad** | Derin | 200 | **Sosyal.** Sorar: *"Ne taşıyorsunuz?"* Rünü görür. Misafir hakkı → Dikkat −1 |
| 11 | 6 × **Giant Elk** sürüsü — **izdiham** | Saçak/Sık | 2,700 | Hazard gibi oyna: DC 15 Dex save, 3d10 Bludgeoning + Prone. Saldırmazlar — **kaçarlar**. Neden kaçtıklarına bak |
| 12 | **Treant** | Derin/Kök | 5,000 | **Sosyal.** Konuşur, sabırlıdır, ormanın sesi. Dikkat 4+ ise öfkeli ve **Low üstü** |
| 13–14 | (Dikkat 4+) **Kök Bekçisi'nin habercisi** — 2 × Awakened Tree + orman susar | Derin/Kök | 900 | Uyarı. Bir sonraki +1 → Kapanış |

> Owlbear, dire wolf, yılan — hepsi SRD. **Hiçbiri kötü değil.** Oyuncular
> "düşman" değil **orman** gördüklerinde bu bölüm çalışıyor demektir.

### Kurgulanmış sahneler

Zar yerine bunları istediğin güne yerleştir.

**S1 — Devrik Yuva** *(Sık)* — Fırtınanın devirdiği dev bir gövdenin altında
owlbear yuvası; iki owlbear yavrusunu çıkarmaya çalışıyor. Gövde her tur
kayıyor (Rüzgâr Devriği, turda bir, 1–2'de düşer).
**Seçim:** Yardım et (DC 16 Athletics, iki kişi; Dikkat **−1**) ya da etrafından dolaş
(+½ gün) ya da dövüş (2 × Owlbear, 1,400 XP + deadfall — Dikkat **+1**).

**S2 — Sisteki Sürü** *(Derin, Uyku Oyuğu)* — Parti oyuğu geçerken 8 dire wolf
iner. Uyuyanlar Incapacitated; uyanıklar hem sürüyü hem polen save'ini yönetir.
**XP:** 1,600 + hazard → **Moderate hissi.** Kurtlar Bloodied olunca çekilir.
Kurt sürüsünü öldürmek (saldıranları) Dikkat'i **artırmaz.**

**S3 — Işığın Peşinde** *(Derin/Kök)* — 2 × will-o'-wisp partiyi Kök Bataklığı'na
çeker; bataklıkta 2 × **Shambling Mound** (CR 5) bekler.
**XP:** 900 + 3,600 = **4,500 → Low**, bataklık + Kan Yosunu ile **Moderate'e yakın.**

**S4 — Ilrien'in Halkası** *(herhangi, bir kez)* — Bir fey halkasının ortasında
genç bir elf, yere tebeşirle ölçüler çiziyor:
[Ilrien](../../../../05-characters/npcs/minor/the-first-communion/ilrien.md)
(CR 5; 1493'te hâlâ Silvaerûn'da, *"hobi"* sanılan perde çalışmaları).
- Rünü **merak eder** — incelemek ister. aysif izin verirse Ilrien rünün
  **sözleşme** olduğunu, büyü olmadığını söyler.
- **Rehberlik eder:** Kalan günler yön bulma otomatik başarı; Dönen Yol'u açar.
- **Davet vermez** — ama Yaprak Kapısı'nda **tanıklık** eder
  ([varış](04-arrival-caelora.md)).
- ⚠️ Ilrien New Campaign'in First Communion kadrosunda (1495). Burada 1493'teki,
  sessizlikten **önceki** hâli: meraklı, yalnız, şehirde ciddiye alınmayan.

---

## Dikkat 6 — Kapanış

Orman susar. Rüzgâr durur. Patika **arkanızda** kapanır.
Önünüzdeki ağaç — dört kişinin kucaklayamayacağı kadar kalın — **nefes alır.**

**Kompozisyon:** [Kök Bekçisi](../../../../02-lore/bestiary/rootwarden.md) (CR 10) + 2 × Awakened Tree (SRD, CR 2)
**XP:** 5,900 + 900 = **6,800 → Moderate** — ve **orman aksiyonları** ile High'a yakın.

**Orman aksiyonları** — Initiative 20'de (berabere kaybeder), bir tane:
- **Kökler:** 20 ft kare içindeki her yaratık DC 15 Strength save — başarısızsa Restrained (kaçış DC 15).
- **Düşen dal:** Bir yaratık DC 15 Dexterity save — 3d10 Bludgeoning, başarı yarı.
- **Polen:** 15 ft yarıçap, DC 15 Constitution save — başarısızsa sıradaki turunun sonuna kadar Poisoned.

**Çıkış yolları — savaş tek yol değil:**

| Yol | Nasıl |
|---|---|
| **Antlaşmayı söylemek** | Dört maddeyi eski Elfçe, yüksek sesle. Bekçi *Treaty-Bound* gereği **durur.** Maddeleri bilmek: Gorestead'de Old Ophie, Tharn'Kel'de Rethiel, [Standing Stone](../../../../03-ager/continents/ravonia/regions/calithra/standing-stone.md) bilgisi (DC 15 History) |
| **Baltayı bırakmak** | Baltayı (ve Demon Armor'ı) yere bırakıp geri çekilmek. Bekçi eşyayı **gömer** ve parti Dikkat 4 ile devam eder |
| **Geri çekilmek** | Saçak'a dönmek. Kovalamaz. Ama ertesi gün Dikkat 5'ten başlanır |
| **Savaşmak** | Mümkün. Ateş işe yarar — ve **her ateş** Dikkat'i zaten tavan yapmış bir ormanı yakar |

> **[DM ONLY]** Bekçi yıkılırsa Caélora bunu **bilir** (Treant ya da dryad haber
> taşır). Yaprak Kapısı'nda parti "Tanığı devirenler" olarak karşılanır — davet
> **imkânsız** hâle gelir. Bkz. [varış](04-arrival-caelora.md).

---

## Aysif'in rünü ormanda

- Girişte **Dikkat +1** (Amulet of Proof takılıysa değil).
- Dryad, Treant, Ilrien ve Kök Bekçisi rünü **görür.** Hiçbiri saldırmak için
  sebep saymaz — hepsi **soru** sayar: *"Seni kim işaretledi?"*
- Yalan söyleyen parti (Deception) karşısında: Treant ve Dryad **Insight +** ile
  anlar; yakalanan yalan **Dikkat +1.**
