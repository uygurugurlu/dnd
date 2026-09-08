---
type: meta
title: Saha Tahtası — Dört Cevap'ın Ekipleri
campaign: New Campaign
canon: homebrew
status: usable
tags: [four-answers, field-ops, tracker, factions, new-campaign, dm-tool]
board_date: 20 Uktar 1495 DR
board_day: D+8
updated: 2026-08-30
---

# Saha Tahtası

> *Dört faction kıtanın dört ucunda çalışıyor sanılıyor.*
> *Bu tahta, aynı anda kaç tanesinin aynı sokakta olduğunu gösteriyor.*

**Yukarı:** [Dört Cevap](../README.md) · [Sahnedeki Güçler](../../README.md) ·
[New Campaign](../../../README.md)

---

## Bu klasör ne işe yarar

[Dört Cevap](../README.md) dosyaları **faction'ların ne olduğunu** anlatır.
Bu klasör **şu an ne yaptıklarını** tutar. Aralarındaki fark:

| Faction dosyaları | Saha Tahtası |
|---|---|
| Kimlik, ideoloji, lider, mekanik | **Ekipler.** Kim, kaç kişi, nerede |
| Değişmez | **Her oturumda değişir** |
| Kampanya boyunca sabit | Tarihli. Bugünün tarihi frontmatter'da |

| Dosya | Ne var içinde |
|---|---|
| **README.md** *(buradasın)* | Tahtanın kendisi: ekip listesi, şehir görünümü, mesafe tablosu, güncelleme protokolü |
| [calithra-standoff.md](calithra-standoff.md) | ⭐ **Açılış durumu** — dört faction'ın aynı anda Calithra'da olduğu hafta |
| [first-communion-teams.md](first-communion-teams.md) | FC ekipleri — beş halka, beş iş |
| [iron-concord-teams.md](iron-concord-teams.md) | IC kolları — Sekizinci Kol, Ledger masası, kule keşfi |
| [level-hand-teams.md](level-hand-teams.md) | LH hücreleri — ve **el afişi kodu** |
| [unfettered-wind-teams.md](unfettered-wind-teams.md) | UW hücreleri — ve neden Vane'in satırı boş |

---

## 1. Kod sistemi

Her ekibin sabit bir kodu var. Kod değişmez; **konum değişir.**

| Önek | Faction |
|---|---|
| **FC-** | [The First Communion](../the-first-communion.md) |
| **IC-** | [The Iron Concord](../the-iron-concord.md) |
| **LH-** | [The Level Hand](../the-level-hand.md) |
| **UW-** | [The Unfettered Wind](../the-unfettered-wind.md) |

`-0` her zaman **liderin kendi ekibidir.** Diğer numaralar kuruluş sırasına göre.

### Durum işaretleri

| İşaret | Anlam |
|---|---|
| 🟢 **Yerleşik** | Şehirde, çalışıyor, kaldığı yer belli |
| 🟡 **Yolda** | İki nokta arasında. `→ hedef (kalan gün)` |
| 🔵 **Bekleme** | Yerinde ama iş yapmıyor; bir tetikleyici bekliyor |
| 🔴 **Temas** | Şu anda birine karşı aktif operasyonda |
| ⬜ **Bilinmiyor** | Tahta bu ekibi göremiyor. **Bu bir hata değil, bir bilgi.** |

---

## 2. Ana Tahta — 20 Uktar 1495 DR (D+8)

> **Okuma sırası:** önce bu tablo, sonra [şehir görünümü](#3-şehir-görünümü).
> Bir ekibin ayrıntısı için faction dosyasına git.

| Kod | Ekip | Başında | Şu an | Durum | Neyi kovalıyor | Sonraki hamle |
|---|---|---|---|---|---|---|
| **FC-0** | Ağız | [Ysolde Marr](../the-first-communion.md#ysolde-marr) | Kapı **R-2**, Wheatrest doğusu | 🔵 | Kapının sabitlemesini sökmek | Black Still'e geçmek — haber gelirse Calithra |
| **FC-1** | İkinci Dikiş | [Nerath](../../../../../05-characters/npcs/minor/the-first-communion/nerath.md) | **Kırıkbağ** *(Calithra, 1 gün kuzey)* | 🔴 | **Dikişte dokuz gün durabilecek bir canlı** | Kordonu delip üçüncü denemeyi yapmak |
| **FC-2** | Bağlayanlar | [Thava Vessek](../../../../../05-characters/npcs/minor/the-first-communion/thava-vessek.md) | **Kırıkbağ** | 🔴 | Dikişi **kapatmanın** yolu | Nerath'a söylemeden ritüeli tersine çevirmeyi denemek |
| **FC-3** | Kurtarıcılar | [Mirel Ashvane](../../../../../05-characters/npcs/minor/the-first-communion/mirel-ashvane.md) | Calithra — **Sessiz Ev** | 🟢 | İçeride kalan yedi kişi | Kordonun altından geçip dördüncü çıkarma |
| **FC-4** | Geçenler | [Ilrien](../../../../../05-characters/npcs/minor/the-first-communion/ilrien.md) | [Northcurrent](../../../../../03-ager/continents/ravonia/sites/northcurrent.md) | 🟡 → FC-0 (4 gün) | Haberi **geciktirmek** | Marr'a "kaza" diye anlatmak |
| **FC-5** | Dinleyiciler | [Corvane Sull](../../../../../05-characters/npcs/minor/the-first-communion/corvane-sull.md) | Calithra — **Adsızlar Bahçesi** | 🟢 | Bir sonraki ince yer | Mournwood'a inmek |
| **IC-0** | Karargâh | [Marshal Stane](../the-iron-concord.md#marshal-vharra-stane) | **the Fortyday** | 🔵 | Doğu kıyısında hukukî dayanak | Kule programını Ravonia doğusuna açmak |
| **IC-1** | Kayıt Masası | [Aleth Brann](../../../../../05-characters/npcs/minor/the-iron-concord/aleth-brann.md) | **Calithra — Standing Stone düzlüğü** | 🟢 | **Calithra'daki her caster'ın adı** | Kayıt zorunluluğunu limana yaymak |
| **IC-2** | Sekizinci Kol | [Rhoswen Marek](../../../../../05-characters/npcs/minor/the-iron-concord/rhoswen-marek.md) · [Gruvv Ashani](../../../../../05-characters/npcs/minor/the-iron-concord/gruvv-ashani.md) | **Kırıkbağ kordonu** | 🔴 | Ritüeli yapanların **isimleri** | Kordonu daraltmak; ilk tutuklama |
| **IC-3** | Kule Keşfi | [Torvi Sedd](../../../../../05-characters/npcs/minor/the-iron-concord/torvi-sedd.md) | Northcurrent | 🟡 → Calithra (3 gün) | Kuleye **yer** ve **besleme hattı** | Kırıkbağ'ı ölçmek |
| **IC-4** | Warden | [Vashka Durn](../../../../../05-characters/npcs/minor/the-iron-concord/vashka-durn.md) | the Fortyday | 🔵 | *(henüz çağrılmadı)* | "Ölüler konuşuyor" haberi ulaşırsa yola çıkar |
| **LH-0** | the Hand | [Halden Rooke](../../../../../05-characters/npcs/major/halden-rooke/README.md) | **Sparkhold — Cold Ward** | 🟢 | Sonraki Unmaking'in hedefi | ⬜ DM |
| **LH-1** | the Voice | [Nyrra Delsaeth](../../../../../05-characters/npcs/minor/the-level-hand/nyrra-delsaeth.md) | Sparkhold | 🟢 | Kalabalık | Yük grevini mitinge çevirmek |
| **LH-2** | Dokuzuncu Eldiven | [Selvarr Dhune](../../../../../05-characters/npcs/minor/the-level-hand/selvarr-dhune.md) | [Surfwale](../../../../../03-ager/continents/karsovia/sites/surfwale.md) | 🟡 → Calithra limanı (5 gün) | **Suppressor sandığı** — Concord hattı | Teslimatı *Aşağıdaki Ciddi Yer*'den almak |
| **LH-3** | Kâğıt Kolu | [Tem "Kâğıt" Ossary](../../../../../05-characters/npcs/minor/the-level-hand/tem-ossary.md) | Northcurrent | 🟢 | Yeni taban | Lirion'a geçmek |
| **LH-4** | Ölçüm Kurulu | [Perra Voight](../../../../../05-characters/npcs/minor/the-level-hand/perra-voight.md) | Sparkhold | 🟢 | Şebeke defterlerindeki **kayıp yük** | Rooke'a sormadan hesap çıkarmak |
| **UW-0** | — | **Vane** | ⬜ | ⬜ | ⬜ | ⬜ |
| **UW-1** | Lirion hücresi | [Kesh Duva](../../../../../05-characters/npcs/minor/the-unfettered-wind/kesh-duva.md) | Lirion | 🟢 | Lirion'un üst katmanı | Üç hücre lideriyle konuşmak *(Vane bilmiyor)* |
| **UW-2** | İlan ve Kurşun | [Serane Ardo](../../../../../05-characters/npcs/minor/the-unfettered-wind/serane-ardo.md) · [Corr](../../../../../05-characters/npcs/minor/the-unfettered-wind/corr.md) | Northcurrent | 🟡 → Calithra (2 gün) | **Aleth Brann'ın adı** | D+10: adı duvara çivilemek. D+13: Corr |
| **UW-3** | Gedik | [Ashka](../../../../../05-characters/npcs/minor/the-unfettered-wind/ashka.md) · [Emrys Tal](../../../../../05-characters/npcs/minor/the-unfettered-wind/emrys-tal.md) | Surfwale | 🟢 | **Kule ikmal konvoyu** | Sahte yetki belgesiyle konvoya girmek |

> **[DM ONLY]** **UW-0 satırı asla doldurulmuyor** ve bu kasıtlı. Vane'in konumu
> tahtada tutulmaz; **sahnede ilan edilir.** Parti bir masada oturur, tavan
> kirişinden bir ses gelir ve o an Vane oradadır. Bir hücre lideri bile onun
> nerede olduğunu bilmez.
>
> Kural: Vane sadece **birinin adı duvara çivilendikten sonra** ve sadece
> **o adamın öldüğü sahnede** görünebilir. Başka hiçbir yerde.

### Aynı anda kaç faction Calithra'da?

**Dördü de.** Ve dördü de bunu bilmiyor.

→ [calithra-standoff.md](calithra-standoff.md)

---

## 3. Şehir Görünümü

Aynı veri, şehirden bakınca. **Masada asıl kullanılan tablo bu:** parti nereye
giderse o satırı oku.

| Şehir / Yer | Kim var | Ne oluyor |
|---|---|---|
| **[Calithra](../../../../../03-ager/continents/ravonia/regions/calithra/README.md)** | FC-3 · FC-5 · IC-1 · *(LH afişleri)* · IC-2 & FC-1 & FC-2 vadinin kuzeyinde | ⭐ Dört faction, bir vadi → [calithra-standoff.md](calithra-standoff.md) |
| **Kırıkbağ** *(Calithra'nın 1 gün kuzeyi)* | FC-1 · FC-2 · IC-2 | **İkinci Dikiş.** Kordon içeride, ritüelistler kordonun içinde kaldı |
| **[Northcurrent](../../../../../03-ager/continents/ravonia/sites/northcurrent.md)** | FC-4 · IC-3 · LH-3 · UW-2 | Kıtanın en kalabalık kavşağı — dördü de burada durup geçiyor ve **hiçbiri diğerini tanımıyor** |
| **[Surfwale](../../../../../03-ager/continents/karsovia/sites/surfwale.md)** | LH-2 · UW-3 | İki düşman faction aynı limanda, aynı konvoyun peşinde. **Birbirlerini fark etmek üzereler** |
| **the Fortyday** | IC-0 · IC-4 | Stane'in masası. Modron modeli her sabah kuruluyor |
| **[Sparkhold](../../../05-world-seeds.md#5-sparkhold--hextech-şehri)** | LH-0 · LH-1 · LH-4 | Yük grevi olgunlaşıyor; Perra hesap tutuyor |
| **[Lirion](../../../05-world-seeds.md#3-lirion--aşıklar-yarığının-bard-şehri)** | UW-1 | Kesh, Vane'in arkasından hücre liderleriyle konuşuyor |
| **Kapı R-2** *(Wheatrest doğusu)* | FC-0 | Marr sabitlemeyi söküyor. **Yavaş.** |
| **[Silvaerûn](../../../../../03-ager/continents/ravonia/regions/silvaerun/README.md)** | — | Kimse yok. **Ve bu bir bilgi:** Communion doğduğu şehri terk etti |
| **[Hammerfall](../../../../../03-ager/continents/ravonia/regions/hammerfall/README.md)** | — | IC-3'ün sipariş verdiği yer; ekip yok, **sevkiyat var** |

> **[HOOK]** **Northcurrent satırı kampanyanın bedava hediyesi.** Dört faction'ın
> dört ayrı ekibi aynı kalede, aynı hafta. Parti orada bir gece geçirirse dört
> ayrı sahne, dört ayrı ton — ve hiçbiri diğerine bakmıyor.
> [Reveal Kademesi 1](../README.md#revealin-üç-kademesi)'in en ucuz kanıtı.

---

## 4. Mesafe Tablosu

Kara yolu, yürüyerek, günde 24 mil. Atlıysa ×⅔, gemiyle kıyı boyunca ×½.

> **[AÇIK SORU]** Harita bu mesafeleri henüz doğrulamıyor —
> [Calithra'nın konumu](../../../../../03-ager/continents/ravonia/regions/calithra/README.md)
> ve [Lirion'un yakası](../../../05-world-seeds.md#3-lirion--aşıklar-yarığının-bard-şehri)
> hâlâ açık. Aşağısı **çalışan varsayım**; harita netleşince düzeltilir.

| | Calithra | Northcurrent | R-2 | Fortyday | Surfwale | Sparkhold | Lirion |
|---|---|---|---|---|---|---|---|
| **Calithra** | — | 2 | 11 | 9 | 4 *(gemi)* | 13 | 3 |
| **Northcurrent** | 2 | — | 9 | 8 | 2 *(gemi)* | 11 | 1 |
| **R-2** *(Wheatrest d.)* | 11 | 9 | — | 6 | 11 | 20 | 10 |
| **the Fortyday** | 9 | 8 | 6 | — | 10 | 19 | 9 |
| **Surfwale** | 4 | 2 | 11 | 10 | — | 7 | 3 |
| **Sparkhold** | 13 | 11 | 20 | 19 | 7 | — | 12 |
| **Lirion** | 3 | 1 | 10 | 9 | 3 | 12 | — |

> **Portal kısayolu yok.** [Charaxis Kapıları](../../../../../03-ager/planar-sites/portal-network.md)
> sadece Charaxis'e çıkar ve zaten kararsız. **Bu tahta yürüyerek işliyor** —
> [Kapılar Bozuluyor saatinin](../../../06-clocks.md) asıl bedeli bu.

---

## 5. Güncelleme Protokolü

Her oturumdan sonra, sırayla:

1. **Tarihi ilerlet.** Frontmatter'daki `board_date` ve `board_day` güncellenir.
2. **Yoldakileri yürüt.** 🟡 satırlarda kalan gün düşülür; sıfırlanınca ekip
   hedef şehre yerleşir ve durum 🟢 olur.
3. **Tetikleyicileri kontrol et.** Her ekip dosyasında **"Ne olursa hareket eder"**
   bloğu var. Parti bir tetikleyiciye dokunduysa ekip hamlesini yapar.
4. **Hamleyi yaz.** Aşağıdaki [Hareket Defteri](#6-hareket-defteri)'ne satır.
5. **Saati çevir.** Hamle [Dört Cevap saatinin](../../../06-clocks.md#-6-dört-cevap)
   bir dilimine denk geliyorsa dilimi doldur.
6. **Dünyaya yansıt.** Bir ekip bir yerleşimi kalıcı olarak değiştirdiyse
   ilgili yer dosyası güncellenir (CLAUDE.md §5, adım 3 — **atlanmaz**).

### Parti hiçbir şey yapmazsa

Ekipler yine hareket eder. **Bu tahtanın varlık sebebi bu.**
Her oturum arası her ekip **en az bir** hamle yapar; hamle partiye görünmese
bile deftere yazılır. İki oturum sonra parti aynı şehre döndüğünde şehir
değişmiş olmalıdır.

### Yeni ekip açarken

| Alan | Zorunlu mu | Not |
|---|---|---|
| Kod | ✅ | Faction öneki + boştaki en küçük numara |
| Başında | ✅ | **Var olan bir NPC.** Yeni isim uyduruluyorsa önce `Skill(statblock)` |
| Kadro | ✅ | Kaç kişi, ne. Adsız personel için resmî statblock adı yeter *(Guard, Scout, Warrior Veteran)* |
| Şu an | ✅ | Tek bir yer. "Bölgede" yazılmaz |
| Neden orada | ✅ | Bir cümle |
| Neyi kovalıyor | ✅ | **Somut bir nesne, isim ya da kişi.** Soyut hedef yazılmaz |
| Sonraki hamle | ✅ | Parti müdahale etmezse ne olur |
| Ne olursa hareket eder | ✅ | Tetikleyici listesi |
| Partinin gördüğü iz | ✅ | Ekip görünmeden önce masada ne fark edilir |

> **Kural:** *"Neyi kovalıyor"* alanı asla ideoloji olamaz. Level Hand
> "eşitliği" kovalamaz — **bir sandığı** kovalar. İdeoloji faction dosyasında,
> sandık burada.

---

## 6. Hareket Defteri

En yeni üstte. Bir satır = bir ekibin bir hamlesi.

| Gün | Kod | Hamle |
|---|---|---|
| **D+8** | — | ★ **Kampanya başlıyor.** Tahtanın açılış hâli yukarıda |
| D+7 | IC-1 | Standing Stone düzlüğünde kayıt masası açıldı |
| D+6 | FC-2 | İkinci deneme; **iki ölü.** Thava ritüeli durdurmayı istedi, Nerath reddetti |
| D+5 | IC-2 | Sekizinci Kol Kırıkbağ'a girdi, kordon kuruldu |
| D+4 | FC-3 | Mirel Calithra'ya vardı; ilk çıkarma *(üç kişi)* |
| D+3 | FC-4 | Ilrien haberi aldı ve **yola çıkmadı** |
| D+2 | — | Kırıkbağ'ın üstündeki gökyüzü Calithra'dan görülmeye başladı |
| D+1 | FC-2 | İlk deneme; bir ölü |
| **D+0** | FC-1 | ⭐ **İkinci Dikiş açıldı** — 12 Uktar 1495 DR |
| D−18 | LH-3 | Tem Calithra'dan ayrıldı; **afişler kaldı** |
| D−21 | LH-3 | Kâğıt Kolu Calithra'ya girdi |

---

## Bağlantılar

| Nereye | Ne |
|---|---|
| [Dört Cevap](../README.md) | Faction'ların kendisi, ilişki matrisi, The Unweave |
| [06-clocks.md](../../../06-clocks.md) | Bu tahta 6. saati besler |
| [03-timeline.md](../../../03-timeline.md) | Oturum sonrası buraya da satır |
| [02-cast.md](../../../02-cast.md) | Kadro listesi |
| [The Loomless Chamber](../the-loomless-chamber.md) | Dört liderin buluştuğu yer — **tahtada görünmez** |
