---
type: meta
title: Söylenti Sistemi
canon: homebrew
status: usable
tags: [house-rules, tables, rumor, downtime, homebrew]
sources:
  - https://www.d20pfsrd.com/gamemastering/other-rules/rumors/
  - https://gametogrow.org/2018/07/17/the-rumor-system/
  - http://deltasdnd.blogspot.com/2021/04/rumors-information-and-legends.html
updated: 2026-08-11
---

# Söylenti Sistemi

**Yukarı:** [House Rules](README.md)

> Bir dedikodu, bir yalan ya da bir doğru — dünyada nasıl yayılır, yolda nasıl
> bozulur, kimi harekete geçirir?

Bu sistemin amacı: **bilgi de bir kaynak olsun.** Parti bir şey yaptığında bunun
haberi kendi hızıyla yürüsün, yolda değişsin ve üç kasaba sonra partiyi karşılasın.

---

## 1. Söylenti Kartı

Her söylenti bir kart. Kampanyanın `handouts/` klasöründe ya da DM defterinde
şu beş alanla takip edilir:

```
ÇEKİRDEK    : İddia tek cümleyle
GERÇEKLİK   : Doğru / Yarı doğru / Yalan
KAYNAK      : Kim başlattı (parti biliyor mu?)
YAYILIM     : 0 Fısıltı · 1 Mahalle · 2 Şehir · 3 Bölge · 4 Krallık
YAYILMA ZARI: d4 / d6 / d8 / d10 / d12
```

**Yayılma Zarı**, söylentinin ne kadar "çekici" olduğudur — Yayılım seviyesinden
bağımsızdır. Sıkıcı bir doğru d4 ile sürünür; sulu bir yalan d10 ile koşar.

## 2. Başlangıç Zarı — Cazibe

| Söylenti ne kadar konuşulur? | Zar |
|---|---|
| Doğru ama sıkıcı. Vergi, hasat, bir tamirat. | **d4** |
| İlginç. Bir yabancı, bir kavga, bir kayıp. | **d6** |
| Skandal. Kan, para, yatak, ihanet. | **d8** |
| Skandal **ve** tanık/kanıt var. | **d10** |
| Tanrılar, krallar ya da kıyamet ölçeği. | **d12** |

### Kademe kaydıran şartlar

Her biri zarı **bir kademe** büyütür ya da küçültür (d4↔d6↔d8↔d10↔d12).

| **Büyütür (+1 kademe)** | **Küçültür (−1 kademe)** |
|---|---|
| Bir soylu, tapınak ya da lonca işin içinde | İddia inanılmaz — kimse yutmuyor |
| Görgü tanığı var ve konuşuyor | Resmî bir otorite açıkça yalanlıyor |
| Bir bard, ozan ya da PC aktif olarak yayıyor | Bastırma parası ödendi (bkz. §6) |
| Bölge zaten gergin — insanlar konuşacak şey arıyor | Bölge izole: kış, kapalı geçit, karantina |
| Söylenti bir korkuyu doğruluyor | Elle tutulur bir kanıt söylentiyi çürütüyor |

## 3. Yayılma Kontrolü

**Ne zaman atılır** — bunlardan biri olduğunda, söylenti başına bir kez:

- Oyun içinde bir hafta downtime geçtiğinde
- Parti bir seyahat ayağını tamamladığında
- Parti bir yerleşime **geri döndüğünde**

**Nasıl atılır** — Yayılma Zarını at:

| Zar sonucu | Ne olur |
|---|---|
| **Zarın en yüksek değeri** | **Yayılım +1.** Ayrıca **Bozulma tablosuna** at (§4). |
| **1** | Söylenti söndü: **zar bir kademe küçülür.** d4'te 1 gelirse söylenti **ölür**. |
| Diğer her şey | Değişmez. Konuşuluyor ama büyümüyor. |

> Bir söylenti Yayılım 4'e ulaştıktan sonra artık kontrol atılmaz. O artık dedikodu
> değil, **tarih**. Yanlış olsa bile.

## 4. Bozulma Tablosu (d8)

**Her Yayılım artışında** at. Söylenti yolda değişir — bu sistemin asıl eğlencesi burada.

| d8 | Nasıl bozulur |
|---|---|
| 1 | **Sayı şişer.** Rakamlar 3–10 katına çıkar. Üç haydut otuz haydut olur. |
| 2 | **İsim kayar.** Olaydaki kişi, bölgede daha ünlü biriyle değiştirilir. Kimse tanımadığı adamı anlatmaz. |
| 3 | **Tanrı karışır.** Olay bir tanrıya, bir kehanete ya da bir işarete bağlanır. |
| 4 | **Ahlak eklenir.** Söylenti bir derse dönüşür: "işte bu yüzden ...". Artık insanlar buna göre davranıyor. |
| 5 | **Suçlu değişir.** Kabahat başka bir gruba yıkılır — bir halk, bir lonca, yabancılar. **Bu tehlikelidir**, DM sonuçlarını takip etsin. |
| 6 | **Ayrıntı sertleşir.** Belirsiz bir yer ya da tarih kesinleşir — ve yanlıştır. İnsanlar o yere gitmeye başlar. |
| 7 | **Karşı söylenti doğar.** Rakip bir versiyon çıkar: yeni bir kart aç, Cazibe zarı bir kademe küçük. İkisi birbirini yer. |
| 8 | **Çekirdek korundu.** Söylenti olduğu gibi kaldı. Bu **en tehlikelisidir** — çünkü artık ona kanıt gibi davranılıyor. |

## 5. Yayılım Seviyeleri ve Etkileri

| Yayılım | Kim biliyor | Duymak için | Mekanik etki |
|---|---|---|---|
| **0 — Fısıltı** | 1–2 kişi. Bir hancı, bir hizmetkâr. | Investigation **DC 20** ya da doğru NPC'yle konuşmak | Yok. Henüz. |
| **1 — Mahalle** | Bir mahalle, bir han, bir lonca. | Gather info **DC 15** | Konusu olan kişiye karşı **yerel** Charisma roll'larında **±1** |
| **2 — Şehir** | Şehrin çoğu duymuş. | **DC 10** | **±2**, ve ilgili faksiyon tepki verir (§7) |
| **3 — Bölge** | Komşu kasabalar, tüccarlar, kervancılar. | Otomatik — sormasan da söylerler | **±2**, ve **ekonomiye vurur**: [economy.md](economy.md) — Bölge Durumu 1 kademe kayabilir |
| **4 — Krallık** | Saray, kilise, Zhentarim ve Harper ağları. | Herkes biliyor | Kalıcı. Bir NPC ya da faksiyon **harekete geçer** — artık bir olay örgüsü |

## 6. Oyuncular Ne Yapabilir

### Söylenti ekmek

**Süre:** 1 hafta downtime. Köy/kasaba ölçeğinde **1d4 gün**.
**Roll:** Deception (yalan), Persuasion (ikna), Performance (şarkı/tiyatro) ya da
Investigation (doğru bilgiyi doğru kulağa fısıldamak).

| Durum | DC |
|---|---|
| Temel | **15** |
| İnsanlar zaten buna inanmak istiyor | **10** |
| İnanılmaz iddia | **20** |
| Bilinen bir gerçekle açıkça çelişiyor | **25** |

| Sonuç | Ne olur |
|---|---|
| Başarı | Kart açılır, **Fısıltı** seviyesinde |
| DC'yi 5+ aştı | Yayılma Zarı bir kademe **büyük** başlar |
| Kaldı | Hiçbir şey. Bir hafta gitti. |
| 5+ farkla kaldı | Söylenti **kaynağına geri sayılır** — "bunu yayan şu adamdı" |

### Söylenti bastırmak

Üç yol var, hepsi bir kademe küçültür (**bir yerleşimde bir kez** işe yarar):

| Yol | Bedel |
|---|---|
| **Konuşarak** | Persuasion/Intimidation/Deception, DC = 12 + (Yayılım × 3) |
| **Parayla** | Yayılım seviyesi × **50 gp** — hancılara, ozanlara, tellallara |
| **Kanıtla** | Söylentiyi çürüten somut bir şey getir. Otomatik başarı, ayrıca **Gerçeklik** alanı değişir. |

> Yayılım **3+** olan bir söylenti artık bastırılamaz. Ancak **üstüne** yeni bir
> söylenti koyulabilir — insanlar unutmaz, sadece başka şey konuşur.

### Söylentiyi silah olarak kullanmak

- **Yem:** Kasten yayılan bir söylentiyle bir düşmanı bir yere çekmek.
- **Perde:** Gerçek planı gizlemek için daha sulu bir yalan üretmek (Cazibe zarını
  bilerek büyük seç — insanlar sulu olanı konuşur).
- **Piyasa oyunu:** Yayılım 3'e ulaşan bir panik söylentisi fiyatları kaydırır.
  Kim önce bilirse o kazanır → [economy.md](economy.md)

## 7. Faksiyon Tepkisi (d6)

Söylenti **Yayılım 2**'ye ulaştığında, konusu olan faksiyon/NPC için bir kez at.

| d6 | Tepki |
|---|---|
| 1 | **Görmezden gelir.** Umurunda değil — ya da öyle görünüyor. |
| 2 | **Araştırır.** Bir ajan gönderir; kaynağı arıyor. |
| 3 | **Kullanır.** Söylentiyi kendi lehine büker. Yayılma Zarı bir kademe büyür. |
| 4 | **Bastırır.** Kaynağı susturmaya çalışır. Kaynak partiyse: parti hedefte. |
| 5 | **Karşı söylenti üretir.** Yeni bir kart, aynı Cazibe, zıt çekirdek. |
| 6 | **Harekete geçer.** Tutuklama, baskın, ödül ilanı ya da bir toplantı daveti. |

## 8. Söylenti Tohumu Üreteci

Masada hazır söylenti lazım olduğunda üç d10 at ve birleştir. Çıkan şey saçmaysa
en yakın mantıklıya çevir — saçma olanlar zaten en iyi dedikodulardır.

| d10 | **Kim / Ne** | **Ne oldu** | **Nerede / Nasıl** |
|---|---|---|---|
| 1 | Bir kervancı | öldü ve cesedi bulunamadı | eski ticaret yolunda |
| 2 | Bir tapınak görevlisi | gece yarısı bir şeyle konuşurken görüldü | kapalı bir geçitte |
| 3 | Bir lonca ustası | ödemesi gereken parayı ödemedi | bir handa, tanıklar önünde |
| 4 | Bir asker / muhafız | görevini bırakıp kaçtı | bir mezarlıkta |
| 5 | Bir çiftçi ailesi | bir gecede ortadan kayboldu | sınır köyünde |
| 6 | Bir soylunun çocuğu | yanlış kişiyle görüldü | saray duvarının dibinde |
| 7 | Bir yabancı grup (parti?) | bir şeyi yeraltından çıkardı | bir harabede |
| 8 | Bir tefeci | herkesin borcunu birine sattı | pazar meydanında |
| 9 | Bir çocuk | görmemesi gereken bir şey gördü | değirmende / ambarda |
| 10 | Bir ölü (olması gereken) | geri döndü | kilisede, ayin sırasında |

**Gerçeklik zarı (d6):** 1–2 Doğru · 3–4 Yarı doğru · 5–6 Yalan.
Parti hangisi olduğunu **bilmez** — öğrenmek bir maceradır.

---

## Aktif Söylentiler — Takip

| # | Çekirdek | Gerçeklik | Yayılım | Zar | Kaynak | Not |
|---|---|---|---|---|---|---|
| <!-- doldur --> | | | | | | |

> Kampanya başına ayrı takip tutmak istersen:
> `06-campaigns/<kampanya>/handouts/rumors.md`

---

## Kaynaklar

Yayılma/propaganda check mantığı ve söylenti prevalans kademeleri şu kaynaklardan
uyarlandı (mekanikler bu masaya göre yeniden yazıldı, `canon: homebrew`):

- [d20PFSRD — Rumors (propagation rules)](https://www.d20pfsrd.com/gamemastering/other-rules/rumors/)
- [Game to Grow — The Rumor System](https://gametogrow.org/2018/07/17/the-rumor-system/)
- [Delta's D&D Hotspot — Rumors, Information, and Legends](http://deltasdnd.blogspot.com/2021/04/rumors-information-and-legends.html)
