---
type: meta
title: Tekne Kuralları — Roller, Bakım, Tekne Savaşı
canon: adapted
status: usable
tags: [house-rules, homebrew, ships, boats, naval, vehicles, travel, combat, sea]
sources:
  - "PHB 2024 — Mounts and Vehicles: Airborne and Waterborne Vehicles (speed, crew, passengers, cargo, AC, HP, Damage Threshold); Vehicles (Water) tool; Carpenter's Tools, Navigator's Tools; Travel Pace"
  - "DMG 2024 — Siege Equipment (Ballista, Mangonel); Objects (AC, HP, Damage Threshold, Immunities); Chases"
  - "SRD 5.2 (CC-BY-4.0) — Objects, Damage Threshold, Help action, Swimming, Suffocation: https://media.dndbeyond.com/compendium-images/srd/5.2/SRD_CC_v5.2.pdf"
  - "DM isteği, 2026-11-08: basit tekne yönetimi (hangi görev hangi zarı atar), bakım, tekne savaşı (hasar ve can nasıl hesaplanır)"
updated: 2026-11-08
---

# Tekne Kuralları

**Yukarı:** [House Rules](README.md) · **İlk kullanım:** [Demir Halka — deniz encounter'ı](../../06-campaigns/chains-of-the-burning-compact/encounters/demir-halka.md)

> Üç parça, birbirine bağlı:
> **[1. Roller](#1-roller--kim-hangi-zarı-atar)** — teknede kim ne yapar, hangi zarı atar ·
> **[2. Denizde bir gün ve bakım](#2-denizde-bir-gün)** — yolculuk, kumanya, aşınma, tamir ·
> **[3. Tekne savaşı](#3-tekne-savaşı)** — tekneler nasıl vurulur, canları nasıl azalır.
>
> **Temel** PHB/DMG 2024'tür (gemi statları, Damage Threshold, kuşatma silahları).
> Roller, aşınma, manevralar ve bindirme **bizim** — `canon: adapted`.

---

## 0. Tekne kartı

Her teknenin bir kartı var. PHB 2024 statları + bu dosyanın eklediği üç satır (**savaş hızı**, **en az tayfa**, **aşınma**).

| Tekne | Fiyat | Hız (yolculuk) | **Savaş hızı** | Tayfa (en az) | Yolcu | Yük | AC | HP | **DT** |
|---|---:|---|---|:---:|:---:|---|:---:|---:|:---:|
| Rowboat | 50 gp | 1.5 mph | 20 ft | 1 | 3 | — | 11 | 50 | — |
| **Keelboat** | 3,000 gp | 1 mph | 25 ft *(kürekle 30)* | 1 *(rahat: 4)* | 6 | ½ ton | 15 | 100 | **10** |
| **Longship** | 10,000 gp | 3 mph | 40 ft | 40 *(kürek)* | 150 | 10 ton | 15 | 300 | **15** |
| Sailing Ship | 10,000 gp | 2 mph | 30 ft | 20 | 20 | 100 ton | 15 | 300 | 15 |
| Galley | 30,000 gp | 4 mph | 45 ft | 80 | — | 150 ton | 15 | 500 | 20 |
| Warship | 25,000 gp | 2.5 mph | 30 ft | 60 | 60 | 200 ton | 15 | 500 | 20 |

- **Fiyatlar PHB listesi.** Bölgeye göre çarpılır → [Bölgesel Ekonomi](economy.md) (Calithra 1493: ulaşım **×2**).
- **DT = Damage Threshold.** Tek seferde DT'den **az** hasar gövdeye **hiç** işlemez. DT veya üstü **tamamı** işler. *(PHB/DMG nesne kuralı.)*
- **Bağışıklık:** Tekneler nesnedir — **Poison** ve **Psychic** hasar almaz; Charmed, Frightened, Paralyzed vb. condition'lar onlara işlemez.
- **Tayfa eksikse:** en az tayfanın **yarısı** varsa hız yarıya iner; yarısından azsa tekne sadece sürüklenir.
- **Savaş hızı** (6 saniyelik tur) yolculuk hızından türetilmiş masa sayısıdır — PHB'nin mph'si turda birkaç fit eder ve masada oynanmaz.

---

## 1. Roller — kim hangi zarı atar

Teknede herkesin bir **istasyonu** var. Bir istasyon bir kişiyle çalışır; aynı istasyona ikinci kişi gelirse **Help** verir (Advantage).
Bir tur/gün içinde istasyon değiştirmek serbest — ama bir kişi aynı anda **tek** istasyonda.

| Rol | Zar | Ne yapar | Kim iyi olur |
|---|---|---|---|
| ⚓ **Kaptan** | **Cha** (Persuasion / Intimidation) | Tayfaya komuta. Günde bir kez ya da savaşta **turda bir kez**: başka bir istasyonun kontrolüne **Advantage** verir (DC 12). Moral kontrolleri | max · paladin, bard |
| 🛞 **Dümenci** | **Dex (Vehicles [Water])** | Tekneyi yürütür. Manevralar, kovalamaca, fırtınada tekneyi tutmak | han · Dex'li biri |
| 🧭 **Navigatör** | **Wis (Survival)** · ya da **Int + Navigator's Tools** | Rota. Günlük yön kontrolü, sığlıklar, akıntılar, kaybolmamak | ranger, druid, wizard |
| 👁 **Gözcü** | **Wis (Perception)** | Ufku izler: tekneleri, kayaları, fırtınayı, canavarları **önceden** görür. Savaşta ilk atışa Advantage | Perception'ı yüksek |
| 🔨 **Marangoz** | **Int / Dex + Carpenter's Tools** | Bakım, tamir, delik kapatma, yangın söndürmeyi yönetme | Aletli biri; yoksa usta tayfa kiralanır |
| 💪 **Tayfa / Kürekçi** | **Str (Athletics)** | Kürek, halat, yelken, su boşaltma. Hızı artırır | Herkes |
| 🏹 **Topçu** | Saldırı zarı (silahın kendi bonusu) | Ballista / mangonel kullanır | — |
| 🍲 **Aşçı / Hekim** | **Wis (Medicine)** · **Cook's Utensils** | Kumanyayı uzatır, hastalığı ve **deniz tutmasını** önler, morali tutar | cleric |
| ✨ **Büyücü** *(gayriresmî)* | Kendi büyüsü | Rüzgâr, sis, ışık, hava. DM: uygun büyü bir kontrole **Advantage** ya da otomatik başarı verir | wizard, warlock |

> **4 kişilik parti + keelboat:** Dümenci, Navigatör, Gözcü, bir **serbest** (marangoz/kürek).
> Kaptan rolü bir başka role **eklenebilir** (kaptan aynı zamanda gözcü olabilir) ama
> o zaman kaptanın Advantage'ı **kendi** kontrolüne gidemez.

### Kiralık tayfa

Kiralık tayfa istasyon doldurur ve **sabit +3** ile atar (zar yok, DM kolaylığı: sonuç = 10 + 3 = 13 → DC 13'e kadar otomatik başarı).

| Kim | Ücret (PHB) | Calithra 1493 | Ne verir |
|---|---|---|---|
| **Usta denizci** | 2 gp/gün | 2.4 gp | Herhangi bir istasyon, sabit 13 |
| **Acemi** (mülteci) | 2 sp/gün | 2 sp | Sadece **Tayfa/Kürek**, sabit 10 |
| **Kaptan + tayfa** (charter) | — | [Torc](../../06-campaigns/chains-of-the-burning-compact/arcs/calithra-1493/01-boat-sellers.md#3--torc-halbrand--tartı-evi) | Bütün tekne; parti yolcu |

---

## 2. Denizde bir gün

Her deniz günü **dört adım.** Bir adım bir zar.

| # | Adım | Kim atar | DC |
|---|---|---|---|
| 1 | **Hava** | DM — d20, aşağıdaki tablo | — |
| 2 | **Rota** | 🧭 Navigatör | Havaya göre |
| 3 | **Ufuk** | 👁 Gözcü | Havaya göre — karşılaşma varsa ne kadar erken görüldü |
| 4 | **Akşam** | 🔨 Marangoz · 🍲 Aşçı | Bakım / kumanya |

### 1 · Hava (d20)

| d20 | Hava | Rota DC | Gözcü | Etki |
|---|---|:---:|---|---|
| 1–9 | **Açık** | 10 | Normal | — |
| 10–14 | **Rüzgârlı** | 13 | Normal | Yelkenli tekneler **+25%** mesafe |
| 15–17 | **Sis** | 15 | **Disadvantage** | Karşılaşmalar yakın mesafede başlar |
| 18–19 | **Fırtına** | 18 | Disadvantage | 🛞 Dümenci **DC 15** atar; başarısızsa gövde **2d10** hasar (DT'yi yok sayar) ve **+1 aşınma** |
| 20 | **Ölü sakin** | 10 | Normal | Yelken çalışmaz; sadece kürek — mesafe **yarı** |

### 2 · Rota (🧭 Navigatör)

| Sonuç | Ne olur |
|---|---|
| **Başarı** | Tam mesafe: **hız × 24 saat** (gece-gündüz nöbetle yürüyen tekne; PHB) — keelboat ~**24 mil/gün** · nöbet yoksa × 8 |
| **5 ya da daha az farkla başarısız** | Yarım mesafe. Akıntı ya da rüzgâr oyalandı |
| **5+ farkla başarısız** | **Rotadan çıktınız.** O gün mesafe yok; ertesi günün Rota DC'si **+2.** DM: sığlık, yabancı koy, bir devriye |
| **Nat 20** | +25% mesafe ya da **kestirme** (kısa bir koy, bir akıntı) |

**Bilinmeyen sular:** +2 DC. **Haritası olan sular** (Torc'un deniz haritası, 50 gp): −2 DC.

### 3 · Ufuk (👁 Gözcü)

Günün karşılaşma zarı (DM'in tablosu) bir şey çıkarırsa, Gözcü **Perception** atar:

| Sonuç | Mesafe | Etki |
|---|---|---|
| DC + 5 | **Uzak** — ufukta | Parti seçer: kaç (kovalamaca 1 başarıyla başlar), bekle, yaklaş |
| DC | **Orta** | Normal kovalamaca / karşılaşma |
| Başarısız | **Yakın** — çok geç | Karşı taraf **sürpriz** ya da kovalamaca 1 başarısızlıkla başlar |

### 4 · Akşam — kumanya ve bakım

**Kumanya:** Kişi başı günde **1 kumanya** (PHB: 1 lb yiyecek + 1 galon su). Keelboat ½ ton → 4 kişi + yük için ~**30 günlük** kumanya taşır.

| Kim | Zar | Etki |
|---|---|---|
| 🍲 Aşçı | **Wis (Survival)** DC 13 ya da Cook's Utensils DC 12 | Başarı: o gün **yarım** kumanya harcanır (balık, yağmur suyu) |
| 🍲 Hekim | **Wis (Medicine)** DC 12 | Başarısızsa (ya da hekim yoksa) **ilk 3 gün** her gece d6: 1 → biri **deniz tutar** — ertesi gün Poisoned (uyuyunca geçer) |
| — | Kumanya biterse | Her gün **1 Exhaustion** (susuzluk/açlık, PHB) |

### Aşınma — teknenin yorgunluğu

Her teknenin bir **Aşınma** çizgisi var: **0'dan 4'e.** HP'den **ayrıdır** — HP savaş yarası, aşınma yaşlılık ve ihmal.

| Aşınma | Hâl | Etki |
|:---:|---|---|
| **0** | Yeni / bakımlı | — |
| **1** | Yıpranmış | — *(uyarı: halatlar gıcırdıyor)* |
| **2** | Bakım istiyor | 🛞 Dümen ve 🧭 Rota kontrollerine **−2** |
| **3** | **Sızdırıyor** | Yukarıdaki + her gün **1d6 HP** kaybı (DT yok sayılır) — bir kişi 2 saat su boşaltırsa (Athletics DC 10) önlenir |
| **4** | **Çürük** | Yukarıdakiler + **max HP −25%**, **DT −5.** Fırtına bir felaket |

**Aşınma artar (+1):**
- Denizde geçen her **10 gün**
- Her **fırtına** (başarısız dümen kontrolüyle)
- Savaşta gövde HP'si **yarının altına** düşerse
- Sığlığa / kayaya oturmak

**Aşınma azalır:**

| Nerede | Ne | Süre / bedel | Etki |
|---|---|---|---|
| **Denizde, demirli** | 🔨 Marangoz, Carpenter's Tools **DC 13** | 1 gün (yolculuk durur) + **2 tamir malzemesi** | −1 aşınma |
| **Limanda, tersanede** | Usta (Ketil gibi) | 1 gün + **25 gp × tekne boyu** (Rowboat 1, Keelboat 2, Longship/Sailing 4, Galley/Warship 6) | −1 aşınma / gün |

> **Tamir malzemesi:** Kereste, katran, halat, çivi. **10 gp, 10 lb** birimi. Keelboat **5** birim taşımalı.

### HP tamiri (savaş hasarı)

| Nerede | Kim / zar | Ne kadar | Sınır |
|---|---|---|---|
| **Savaşta** | 🔨 Marangoz, **Action**, Carpenter's Tools **DC 13** | **1d10** HP *ya da* bir **delik** / **yangın** durdurur (aşağıda) | Turda bir |
| **Denizde, 1 saat** | 🔨 Marangoz, Carpenter's Tools **DC 12** + 1 malzeme | **2d6 + Int** HP | Günde bir kez/marangoz · denizde max HP'nin **yarısının** üstüne çıkamaz |
| **Limanda** | Tersane | **20 HP / gün**, **5 gp / HP** | Tam iyileşme |
| *Mending* | — | Halat, yelken yırtığı | **HP vermez** — bir **yelken** hasarını kapatır |

---

## 3. Tekne savaşı

### Tur yapısı

- **Uzak mesafe (ufuktan yanaşmaya):** **kovalamaca turları** (≈ 1 dakika). Aşağıda.
- **Yakın mesafe (300 ft içi):** normal **6 saniyelik** turlar. Herkes kendi Initiative'inde.
- **Tekne kendi başına hareket etmez.** Tekne, **🛞 Dümenci'nin turunda** hareket eder. Dümenci düşerse ya da istasyonu terk ederse tekne o tur **sürüklenir** (akıntı yönünde 10 ft, DM).

### Hareket

| Kural | |
|---|---|
| **Hız** | Teknenin **savaş hızı** (tablo). Dümenci kendi turunda tekneyi bu kadar hareket ettirir — kendi hareketini **ayrıca** kullanabilir (güverte üstünde) |
| **Kürek** | 💪 Tayfa, kendi turunda **Athletics DC 12** → teknenin **o turki** hızına +10 ft (en fazla +20) |
| **Dönüş** | Bir turda **90°'ye kadar** serbest. Daha fazlası → *Sert Dönüş* manevrası |
| **Yan yana gelmek** | İki tekne 5 ft'ten yakın → bordalama mümkün |
| **Güverte** | Islak, sallanan güverte **Difficult Terrain değildir** — fırtına hariç. Dalga olayları DM'in |

### 🛞 Dümenci manevraları *(Action — tekneyi hareket ettirdiği turda)*

| Manevra | Zar | Başarı | Başarısızlık |
|---|---|---|---|
| **Sert Dönüş** | Dex (Vehicles) **DC 13** | 180°'ye kadar dön | 90° döner; güvertedekiler Dex save DC 10 ya da Prone |
| **Rüzgârı Çal** | **Karşılaştırmalı** dümen kontrolü | Rakibin bir sonraki turunda hızı **−10 ft** | — |
| **Mesafe Aç** | Karşılaştırmalı | Rakip seni bu tur **yakalayamaz** (bordalama yok) | Rakip kancaları atabilir |
| **Yanaş / Borda** | DC 12 (rakip istiyorsa) · karşılaştırmalı (istemiyorsa) | Yan yana, kancalar atılabilir | 15 ft açık kalır |
| **Bindir** (ram) | **DC 15** | Aşağıda | Sadece sürtünme: iki teknede de **1d10** (DT işler) |
| **Sığlığa Kaç** | **DC 14** | Derin omurgalı tekne **takip edemez** | Sığlıkta **otur**: tekne 1d4 tur hareket edemez, +1 aşınma |

> **Karşılaştırmalı dümen kontrolü:** iki dümenci Dex (Vehicles [Water]) atar; **daha hızlı** tekne **+2** alır.
> Kaptan'ın Advantage'ı ve büyüler burada çok değerlidir.

### Tekneye saldırmak — canı neye göre azalır?

**Üç kural:**

1. **İsabet:** Saldırı zarı vs **teknenin AC**'si (çoğu tekne 15). Kocaman ve hareketsiz bir hedef — DM'in takdirine göre
   *"gövdeye"* atılan saldırılara **Advantage** verilebilir (direk, yelken gibi **parçalara** değil).
2. **Damage Threshold:** Tek bir hasar **DT'den küçükse 0.** DT veya üstüyse **tamamı** HP'den düşer.
   → Bir kılıç darbesi (1d8+4) keelboat'a (DT 10) zor işler, longship'e (DT 15) **hiç** işlemez.
   → Ballista (3d10, ort. 16) keelboat'ı rahat deler, longship'i **ancak** deler.
3. **Hasar tipi:**

| Tip | Tekneye etkisi |
|---|---|
| **Bludgeoning** (mangonel, bindirme, dev) | Normal. **Kuşatma silahları ve bindirme hasarı ×2** (nesnelere karşı kuşatma kuralı) |
| **Piercing** (ballista, ok) | Normal. Ok tek başına DT'yi nadiren geçer |
| **Slashing** | Normal; **halat ve yelkene** iyi |
| **Fire** | Normal + **Yangın** (aşağıda) |
| **Force**, **Acid**, **Lightning**, **Thunder**, **Cold** | Normal |
| **Poison**, **Psychic** | **Bağışık** |
| **Necrotic**, **Radiant** | Ahşaba **yarı** *(masa kuralı)* |

**Büyüler:** Yaratık hedefleyen büyüler (*Hold Person*, *Toll the Dead*) tekneye **işlemez.** Alan büyüleri (*Fireball*, *Lightning Bolt*)
**hem** içindekilere **hem** gövdeye vurur — gövde için **tek seferde** sayılır (DT bir kez kontrol edilir). *Fireball* (8d6, ort. 28)
bir keelboat'a **28** hasar ve **yangın** demektir.

### Gövde hâlleri

| Gövde HP | Hâl | Etki |
|---|---|---|
| **> %50** | Sağlam | — |
| **≤ %50** | **Hasarlı** | Savaş hızı **−10 ft**; 🛞 dümen kontrolleri **−2**. **+1 aşınma** (savaş başına bir kez) |
| **≤ %25** | **Su alıyor** | Yukarıdaki + her turun sonunda **1d6 HP** (DT yok sayılır). Bir kişi **Action** ile su boşaltırsa (Athletics DC 10) o tur durur |
| **0** | **Batıyor** | Rowboat/Keelboat **1d4 + 1 tur**, daha büyükleri **1d4 dakika** sonra batar. Herkes yüzmek zorunda |

### Kritik vuruş — parça hasarı

Tekneye yapılan saldırıda **nat 20** (ya da bir parçayı **nişan alan** saldırı, AC **+2**) → **d6:**

| d6 | Parça | Parça AC / HP | Kırılırsa |
|:---:|---|---|---|
| 1 | **Yelken** | 12 / 20 *(keelboat)* · 40 *(longship)* | Yelkenle hareket yok: hız **yarı** (sadece kürek). *Mending* ya da Marangoz (DC 13) bir turda **yarısını** onarır |
| 2 | **Dümen** | 16 / 25 | Dümenci manevra **yapamaz**; tekne her tur d4 ile rastgele 45° döner |
| 3 | **Kürekler** | 13 / 30 | Kürek bonusu yok; kürekli teknenin (longship) hızı **yarı** |
| 4 | **Delik** (su hattı) | — | Gövde hâli **bir kademe** ileri sayılır (*Su alıyor* etkisi) ta ki Marangoz kapatana kadar (Action, DC 13) |
| 5 | **Silah** | Silahın kendi AC/HP'si | Ballista/mangonel susar |
| 6 | **Tayfa** | — | Güvertede rastgele bir yaratık o hasarın **yarısını** alır ya da denize düşer (Dex save DC 13) |

### 🔥 Yangın

- **Fire** hasarı alan bir teknenin **o noktası** yanar (10 ft kare). Yelken isabet aldıysa **yelken** yanar.
- Her tur sonunda yanan her nokta gövdeye **1d6 Fire** (DT yok sayılır) verir ve **d6: 1–2** → komşu kareye sıçrar.
- **Söndürmek:** Action, su kovası — bir nokta. 🔨 Marangoz **Action + DC 13** → bütün yangınları **bir kademe** küçültür (iki nokta).
- **Yanan yelken** 2 tur içinde söndürülmezse **kırılır** (parça hasarı: Yelken).

### Bindirme (ram)

🛞 *Bindir* manevrası başarılıysa (DC 15) ve tekne bu tur **en az 20 ft** düz gittiyse:

| Bindiren | Hasar (bindirilen teknenin gövdesine) | Bindirenin aldığı |
|---|---|---|
| Rowboat | 2d10 | yarısı |
| Keelboat | 3d10 | yarısı |
| Longship / Sailing Ship | 5d10 | yarısı |
| Galley / Warship *(mahmuzlu)* | 8d10 | **çeyreği** |

Bludgeoning; **kuşatma hasarı → ×2** (yukarıda). Her iki teknedeki herkes **Dex save DC 13** ya da Prone; raylardakiler denize düşer.
Tekneler **kenetlenir** — bordalama otomatik.

### Kuşatma silahları *(DMG 2024)*

| Silah | AC / HP | Saldırı | Hasar | Tayfa |
|---|---|---|---|---|
| **Ballista** | 15 / 50 | +6, 120/480 ft | **16 (3d10) Piercing** | 3 kişi: tur başına 1 atış |
| **Mangonel** | 15 / 100 | +5, 200/800 ft *(60 ft içine atamaz)* | **27 (5d10) Bludgeoning** | 5 kişi: **iki** turda 1 atış |

Kuşatma silahı tekneye/nesneye vurursa hasar **×2** (Mangonel bir keelboat'a 54 — yarısı gitti).

### Bordalama

| Ne | Kural |
|---|---|
| **Kanca atmak** | Action; **Athletics DC 12** ya da kancanın attack'ı (+Str) vs AC 15 → tekneler bağlandı (15 ft içindeyse) |
| **Kancayı kesmek** | Halat **AC 13, HP 10**, Slashing |
| **Atlamak** | Boşluk ≤ 5 ft: normal hareket. 10 ft: Athletics DC 10 (koşarak). 15 ft+: Athletics DC 15 ya da düşersin |
| **İskele** | 2 Action ile kurulur; üstünden normal hareket, ama tek sıra |
| **Halatla sallanmak** | Acrobatics DC 13, 20 ft — inişte **Advantage** ile bir saldırı |
| **Denize düşmek** | Yüzme: Speed yarı. Geri tırmanmak: Athletics DC 12 (halat/kürek). **Ağır zırh:** her tur başı Athletics DC 15 ya da **10 ft batar**; iki başarısızlık → zırhı at (Action, Str DC 12) ya da *Suffocation* (SRD) |

### Kovalamaca *(uzak mesafe)*

Bir **kovalamaca turu ≈ 1 dakika.** Kaçan da kovalayan da **3 başarı** arar.

1. Her tur **🛞 karşılaştırmalı dümen kontrolü.** Kazanan **1 başarı** alır.
   - **Hız farkı:** daha hızlı tekne her **1 mph** fark için **+2.**
   - **Kürek:** 💪 tayfanın her başarılı Athletics'i (DC 12) **+1** (en fazla +3).
   - **Kaptan** Advantage verebilir; **Navigatör** Survival DC 14 ile bir avantaj bulur (akıntı, sığlık, kayalık) → +2.
2. Diğer roller turda bir şey yapar: 🏹 menzilli saldırı (yelken, silah, tayfa), ✨ büyü, 🔨 hasar kontrolü.
3. **Kaçan 3 başarı** → kurtuldu. **Kovalayan 3 başarı** → yanaştı, **bordalama** başlar (6 saniyelik turlara geç).

> Örnek: [Demir Halka](../../06-campaigns/chains-of-the-burning-compact/encounters/demir-halka.md#evre-2--kovalamaca-3-ila-5-tur-her-tur--1-dakika)
> bu kovalamacanın **DC'li sade** sürümünü kullanıyor (sabit DC 14, d6 ork tablosu). İkisi uyumlu: istersen
> karşılaştırmalı sürüme geç — Ruuk'un dümencisi **+5** atar, longship +4 (2 mph fark).

### Moral *(DM için)*

Bir tekne tayfası **yarıdan fazlasını** kaybettiğinde ya da gövde **Su alıyor** hâline düştüğünde kaptan **Cha (Intimidation/Persuasion) DC 13** atar.
Başarısızsa tayfa **kaçar** (kancaları keser, teslim olur, denize atlar). Kaptan düşerse **otomatik** başarısız.

---

## Hızlı kart *(masada açık durur)*

```
GÜN:   Hava d20 → 🧭 Rota (DC 10/13/15/18) → 👁 Ufuk → 🔨 bakım / 🍲 kumanya
AŞINMA 0–4:  2 = −2 dümen/rota · 3 = günde 1d6 HP · 4 = maxHP −25%, DT −5
             +1: 10 gün, fırtına, gövde ≤%50, sığlık · −1: demirli gün DC 13 / tersane

SAVAŞ: Tekne dümencinin turunda hareket eder (savaş hızı)
       Vuruş: saldırı vs AC 15 → hasar ≥ DT mi? değilse 0
       Kuşatma silahı / bindirme ×2 · Poison/Psychic bağışık · Necrotic/Radiant yarı
       ≤%50 Hasarlı (−10 ft, −2 dümen) · ≤%25 Su alıyor (1d6/tur) · 0 Batıyor
       Nat 20 → d6 parça: yelken · dümen · kürek · delik · silah · tayfa
       Yangın: 1d6/tur/nokta, d6 1–2 yayılır · söndür: Action (kova) / Marangoz DC 13
```
