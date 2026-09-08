---
type: meta
title: Halk — Sivil NPC'ler ve Anında NPC Üreteci
canon: homebrew
status: usable
tags: [npc, townsfolk, civilians, generator, roleplay, dm-tools]
updated: 2026-08-30
---

# Halk

> *Parti yoldan birini çevirdi. Elinde bir isim, bir iş ve bir istek olsun —
> beş saniyede.*

Bu dosya iki iş yapar:
1. **[Anında NPC üreteci](#anında-npc--dört-zar)** — dört zar, hazır bir insan.
2. **[Kim nerede](#kim-nerede--yerleşim-indeksi)** — adı konmuş bütün sivil
   NPC'lerin yerleşim indeksi.

**Savaşacak NPC'ler burada değil.** Onlar
[who-is-who.md](who-is-who.md)'de ve kendi statsheet dosyalarında.

---

## Statblock kuralı — sivil NPC'ler

> ⚠️ **[CLAUDE.md §5.5](../CLAUDE.md) gereği statblock'suz NPC bırakılmaz.**
> Ama bir hancıya özel statblock yazmak da israftır.
>
> **Kural: sivil NPC'ye resmî SRD statblock'u atanır.** Yeni statblock yazılmaz,
> CR doğrulaması yapılmaz — çünkü ortada yeni bir mekanik yok. Aşağıdaki
> tablodaki dosyalarda her NPC'nin yanında bu referans yazılıdır.

| Kim | Statblock (SRD 5.2) | Ne zaman |
|---|---|---|
| Köylü, esnaf, hancı, çiftçi, kâtip, denizci | **Commoner** | Varsayılan |
| Usta zanaatkâr, tecrübeli avcı, eski asker *(emekli)* | **Guard** | Kendini savunabiliyorsa |
| Muhafız, nöbetçi, bekçi | **Guard** | |
| Muhafız komutanı, kasaba çavuşu | **Guard Captain** | |
| Muhtar, soylu, tüccar patronu, lonca başı | **Noble** | |
| Rahip / rahibe | **Priest** *(kıdemli)* · **Acolyte** *(genç)* | |
| İzci, avcı, kılavuz, kaçakçı | **Scout** | |
| Ajan, casus, bilgi satan | **Spy** | |
| Gazi, paralı asker, kervan koruması | **Veteran** | |
| Kabadayı, tahsildar | **Thug** | |

> **Bunlardan biri kavgaya girerse** statblock zaten hazır. Biri **önem
> kazanırsa** → `Skill(statblock)` çağır, kendi statsheet'ine terfi ettir
> (CLAUDE.md §4).

---

## Anında NPC — dört zar

**d20 ad · d20 iş · d12 istek · d12 detay.** Dördünü at, konuş.
Beğenmediğini yeniden at; sıra sana değil, masaya hizmet ediyor.

### 1️⃣ Ad — d20 *(bölgeye göre sütun seç)*

| d20 | Karsovia *(insan)* | Ravonia *(insan)* | Ork | Cüce | Halfling | Elf / Tiefling |
|---:|---|---|---|---|---|---|
| 1 | Alper | Wenna | Grukh | Dagni | Poppy | Aelith |
| 2 | Sevil | Corrin | Ushka | Bolvar | Tobin | Nyssen |
| 3 | Devrim | Halla | Mor | Hedda | Marigold | Sarreth |
| 4 | Kâmuran | Ossic | Brakka | Torgan | Nim | Vaelis |
| 5 | Nuray | Perrin | Zhog | Vessa | Rosco | Ithren |
| 6 | Bora | Elsbet | Karg | Durnan | Hetty | Ysolla |
| 7 | Emel | Rowan | Ghesh | Marda | Pip | Corvyn |
| 8 | Tarkan | Alwin | Ruk | Balgur | Wilba | Melath |
| 9 | Ceren | Merrick | Ozha | Sigra | Fenwick | Ashvel |
| 10 | Osman | Tibbet | Vrukk | Kolvar | Dell | Nerelis |
| 11 | Şirin | Garrow | Nakka | Hilda | Brambel | Tavren |
| 12 | Ferhat | Isolde | Gorm | Rurik | Sable | Yseult |
| 13 | Gülten | Wendell | Shara | Tova | Ambrose | Delvyn |
| 14 | Barkın | Ophie | Drukh | Grimna | Lilliam | Karys |
| 15 | Nihal | Sedge | Yort | Fennik | Otho | Sevrin |
| 16 | Kerem | Mavis | Ilgra | Bruna | Tansy | Aurelis |
| 17 | Zeliha | Anselm | Thokk | Dorn | Griswold | Maenor |
| 18 | Serkan | Bryndis | Ekka | Ylva | Bettony | Ilvair |
| 19 | Duygu | Torrent | Bagra | Kazek | Hobb | Rethiel |
| 20 | Mahir | Quillon | Snarr | Verna | Mungo | Zaeryn |

**Soyadı gerekirse (d12):** Ardan · Kestrel · Vellum · Ockar · Halloway ·
Sunder · Brackwater · Tümer · Fenwill · Marrow · Oskal · Duva

### 2️⃣ İş — d20

| d20 | İş | Statblock |
|---:|---|---|
| 1 | Hancı / meyhaneci | Commoner |
| 2 | **Demirci** — *bir [Ocak](../02-lore/factions/smith-palace.md), numarası var* | Guard |
| 3 | Fırıncı, değirmenci | Commoner |
| 4 | Çiftçi, çoban | Commoner |
| 5 | Balıkçı, kayıkçı, liman işçisi | Commoner |
| 6 | Kasap, derici, tabakçı | Commoner |
| 7 | Muhafız / bekçi | Guard |
| 8 | Kasaba çavuşu / muhafız komutanı | Guard Captain |
| 9 | Muhtar / kaymakam / lonca başı | Noble |
| 10 | Kâtip, tahsildar, vergi memuru | Commoner |
| 11 | Rahip / rahibe *(ve **bir yıldır cevap alamıyor**)* | Priest / Acolyte |
| 12 | Arabacı, kervancı, katırcı | Commoner |
| 13 | Şifacı, ebe, berber-cerrah | Commoner |
| 14 | Marangoz, taşçı, çatıcı | Commoner |
| 15 | Terzi, dokumacı, boyacı | Commoner |
| 16 | Avcı, kürkçü, kılavuz | Scout |
| 17 | Ozan, hikâyeci, sokak müzisyeni | Commoner |
| 18 | Eskici, hurdacı, tefeci | Commoner |
| 19 | Gazi — **savaş bitti, işi yok** | Veteran |
| 20 | Aylak, dilenci, "her işi yaparım" | Commoner |

### 3️⃣ Ne ister — d12

| d12 | İstek |
|---:|---|
| 1 | Borcu var. Miktarı utanç verici derecede küçük |
| 2 | Biri kayıp. Üç haftadır. Kimse aramıyor |
| 3 | Yolun öbür ucuna bir şey götürecek ve tek başına gitmek istemiyor |
| 4 | Oğlu/kızı orduya yazıldı, ordu dağıldı, çocuk dönmedi |
| 5 | Rakibinin işini bozmak istiyor ve bunu itiraf etmiyor |
| 6 | Dua ediyor ve **cevap gelmiyor.** Bunun normal olup olmadığını soruyor |
| 7 | Bir eşyayı tamir ettirecek ama Ocakbaşı'yla arası bozuk |
| 8 | Hiçbir şey istemiyor. **Gerçekten.** Sadece konuşmak istiyor |
| 9 | Partinin birinin yüzünü tanıdı ve nereden olduğunu çıkaramıyor |
| 10 | Kışı çıkaracak yakacağı yok ve kimseye söylemedi |
| 11 | Bir şey gördü, anlattı, kimse inanmadı. Artık anlatmıyor |
| 12 | Buradan gitmek istiyor ve gidecek yeri yok |

### 4️⃣ Akılda kalıcı detay — d12

| d12 | Detay |
|---:|---|
| 1 | Konuşurken hep sağ omzunun üstünden bakıyor |
| 2 | Her cümleye *"kısacası"* diye başlıyor ve hiç kısa konuşmuyor |
| 3 | Bir elini hiç göstermiyor — cebinde, önlüğünde, arkasında |
| 4 | Sizi bir başkasıyla karıştırıyor ve ısrar ediyor |
| 5 | Çok yüksek sesle konuşuyor. Sağır değil; alışkanlık |
| 6 | İsminizi öğrenir öğrenmez üç kez tekrarlıyor |
| 7 | Yanında bir hayvan var ve hayvanın adını sizinkinden önce söylüyor |
| 8 | Gülerken hiç ses çıkarmıyor |
| 9 | Boynunda ya da bileğinde bir **demir halka** — süs değil, açıklamıyor |
| 10 | Elbisesinin bir yeri onarılmış ve onarım **daha pahalı** duruyor |
| 11 | Sürekli hava durumundan bahsediyor. **Bir yıldır gökyüzü kızıl** |
| 12 | Bir şeyi sayıyor: adım, kuş, para, sizi |

### 5️⃣ *(isteğe bağlı)* Tavır — d6

| d6 | Tavır |
|---:|---|
| 1 | Ürkek — cevap veriyor ama gözünüze bakmıyor |
| 2 | Meraklı — soru soran taraf o |
| 3 | Yorgun — kibar ama işini bırakmıyor |
| 4 | Sıcak — oturtur, yedirir, göndermez |
| 5 | Aksi — yardım eder ve boyunca söylenir |
| 6 | Kurnaz — yardım eder, **karşılığında bir şey ister** |

### 6️⃣ *(isteğe bağlı)* Ne duymuş — d10

Rastgele bir sivilin bildiği, **kampanyaya bağlı** gerçek bir şey:

| d10 | Duyduğu |
|---:|---|
| 1 | *"Bir yıldır rahipler cevap alamıyor. Kilise bunu konuşmuyor."* → [1494](../06-campaigns/new-campaign/01-premise.md) |
| 2 | *"Yollar açıldı. Sonra bir masa kuruldu ve adımızı sordular."* → [Iron Concord](../06-campaigns/new-campaign/factions-in-play/the-four-answers/the-iron-concord.md) |
| 3 | *"[Sparkhold](../06-campaigns/new-campaign/05-world-seeds.md#5-sparkhold--hextech-şehri)'da bir adam büyücünün büyüsünü elinden aldı. Meydanda. Alkışladılar."* → [Level Hand](../06-campaigns/new-campaign/factions-in-play/the-four-answers/the-level-hand.md) |
| 4 | *"Kuzeydeki koruluk değişti. Giren çıkıyor ama aynı gün çıkmıyor."* → [First Communion](../06-campaigns/new-campaign/factions-in-play/the-four-answers/the-first-communion.md) |
| 5 | *"Bir lordu üç gün önceden ilan edip öldürdüler. Kimse engelleyemedi."* → [Unfettered Wind](../06-campaigns/new-campaign/factions-in-play/the-four-answers/the-unfettered-wind.md) |
| 6 | *"Demir pahalandı. Ocakbaşı 'Saray böyle dedi' diyor."* → [Smith Sarayı](../02-lore/factions/smith-palace.md) |
| 7 | *"Kapılardan biri geçen ay açılmadı. Kervan on gün bekledi."* → [portal ağı](../03-ager/planar-sites/portal-network.md) |
| 8 | *"Ordu dağıtıldı ama adamlar eve dönmedi. Nereye gittiler?"* → [Mürai savaşı](../06-campaigns/new-campaign/01-premise.md#mürai-savaşı) |
| 9 | *"Cüceler makineyle kazıyor ve bir şey bulamıyorlar. Yine de duruyorlar mı? Durmuyorlar."* → [Hammerfall](../03-ager/continents/ravonia/regions/hammerfall/README.md) |
| 10 | Yalan. Adam uyduruyor — **ve uydurduğu şey ileride doğru çıkacak** |

---

## Örnek — üç saniyede

> 🎲 **d20 ad = 12 (Ravonia)** → *Isolde* · **d20 iş = 13** → şifacı ·
> **d12 istek = 4** → oğlu orduya yazıldı, dönmedi · **d12 detay = 9** → bileğinde demir halka
>
> **Şifacı Isolde.** Bileğinde bir demir halka var ve açıklamıyor. Oğlu Ravonia
> ordusundaydı; ordu 1495'te dağıtıldı, o dönmedi. Size yaranızı sarar, para
> almaz, ve giderken oğlunun adını söyler. **Statblock: Commoner.**

*(Halka bir [suppressor](../06-campaigns/new-campaign/factions-in-play/the-four-answers/the-level-hand.md)
olabilir. Ya da olmayabilir. Sen karar ver.)*

---

## Kim nerede — yerleşim indeksi

Adı konmuş sivil NPC'ler. Her yerleşimin kendi dosyasındaki **`## NPC'ler`**
tablosunda görünüş, tik ve istek yazılı.

### 🏰 Karsovia kıtası

| Yer | Tip | Kaç NPC | Dosya |
|---|---|---|---|
| **Karsovia şehri** | başkent | 8 | [→](../03-ager/continents/karsovia/cities/karsovia.md#npcler) |
| **Halden** | şehir | 6 | [→](../03-ager/continents/karsovia/cities/halden.md#npcler) |
| **Qereth** | çöl kasabası | 8 *(ayrı dosya)* | [→](../03-ager/continents/karsovia/cities/qereth/people.md) |
| **Softsoil** | köy | 6 | [→](../03-ager/continents/karsovia/villages/softsoil.md#npcler) |
| **Breslau** | kasaba | 7 | [→](../03-ager/continents/karsovia/villages/breslau.md#npcler) |
| **Ruthen** | köy | 6 | [→](../03-ager/continents/karsovia/villages/ruthen.md#npcler) |
| **Valden** | köy | 6 | [→](../03-ager/continents/karsovia/villages/valden.md#npcler) |
| **Zarkhul** | liman köyü | 6 | [→](../03-ager/continents/karsovia/villages/zarkhul.md#npcler) |
| **Grak'Tor** | ork köyü | 6 | [→](../03-ager/continents/karsovia/villages/grak-tor.md#npcler) |
| **Frostmaw** | ork köyü | 6 | [→](../03-ager/continents/karsovia/villages/frostmaw.md#npcler) |
| **Marshfall** | bataklık köyü | 6 | [→](../03-ager/continents/karsovia/villages/marshfall.md#npcler) |
| **Dunfen** | köy | 6 | [→](../03-ager/continents/karsovia/villages/dunfen.md#npcler) |
| **Karsfen** | köy | 6 | [→](../03-ager/continents/karsovia/villages/karsfen.md#npcler) |
| **Northwatch** | kale/karakol | 6 | [→](../03-ager/continents/karsovia/sites/northwatch.md#npcler) |
| **Surfwale** | kale | 5 | [→](../03-ager/continents/karsovia/sites/surfwale.md#npcler) |
| **Tidewatch** | kale | 5 | [→](../03-ager/continents/karsovia/sites/tidewatch.md#npcler) |

### 🌾 Ravonia kıtası

| Yer | Tip | Kaç NPC | Dosya |
|---|---|---|---|
| **Ravonia metropolü** | metropol | 12 *(ayrı dosya)* | [→](../03-ager/continents/ravonia/cities/ravonia/people.md) |
| **Caelora** | şehir | 6 | [→](../03-ager/continents/ravonia/cities/caelora.md#npcler) |
| **Tharn-Kel** | şehir | 6 | [→](../03-ager/continents/ravonia/cities/tharn-kel.md#npcler) |
| **Calithra** | şehir | 14 *(ayrı dosya)* | [→](../03-ager/continents/ravonia/regions/calithra/people.md) |
| **Wheatrest** | köy | 8 | [→](../03-ager/continents/ravonia/villages/wheatrest.md#-halk) |
| **Nethryn** | lanetli köy | 5 | [→](../03-ager/continents/ravonia/villages/nethryn/README.md#-halk--adı-olan-beş-kişi) |
| **Redburrow** | ork limanı | 6 | [→](../03-ager/continents/ravonia/villages/redburrow.md#npcler) |
| **Ragethorn** | köy | 6 | [→](../03-ager/continents/ravonia/villages/ragethorn.md#npcler) |
| **Gorestead** | köy | 6 | [→](../03-ager/continents/ravonia/villages/gorestead.md#npcler) |
| **Grak'Hollow** | ork köyü | 6 | [→](../03-ager/continents/ravonia/villages/grak-hollow.md#npcler) |
| **Northcurrent** | kale | 6 | [→](../03-ager/continents/ravonia/sites/northcurrent.md#npcler) |
| **Stone Raven** | kale | 5 | [→](../03-ager/continents/ravonia/sites/stone-raven.md#npcler) |

### 🏝️ Güney Takımadası

| Yer | Tip | Kaç NPC | Dosya |
|---|---|---|---|
| **Anchorrest** | kayıtsız liman | 6 | [→](../03-ager/continents/south-archipelago/anchorrest.md#npcler) |
| **Brinefield** | tuzla adası | 6 | [→](../03-ager/continents/south-archipelago/brinefield.md#npcler) |
| **Windfall** | volkanik bağ adası | 6 | [→](../03-ager/continents/south-archipelago/windfall.md#npcler) |

### ⚒️ Yerleşime bağlı olmayanlar

| Kim | Ne | Dosya |
|---|---|---|
| **[Smith Sarayı](../02-lore/factions/smith-palace.md)** kadrosu | Grandmaster Oskal, Usta Dagna, Kâhya Sevil, Ocakbaşı Trell, Kalfa Piri | [→](../02-lore/factions/smith-palace.md#sarayın-kilit-isimleri) |

---

## Kullanım notu

- **Her yerleşimde en az bir hancı, bir demirci *(Ocak numaralı)*, bir muhtar/çavuş var.**
  Parti nereye giderse gitsin bu üçü hazır.
- **Demirci her yerde aynı loncaya bağlı** →
  [Smith Sarayı](../02-lore/factions/smith-palace.md). Fiyat ve tavır oradan gelir.
- Bir NPC masada tutarsa **adını buraya yaz** ve önem kazanırsa
  `05-characters/npcs/minor/` altına terfi ettir.
