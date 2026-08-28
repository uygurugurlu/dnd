---
type: meta
title: Bölgesel Ekonomi — Fiyat Çarpanları
canon: homebrew
status: usable
tags: [house-rules, tables, economy, downtime, homebrew]
sources:
  - https://www.dndbeyond.com/forums/d-d-beyond-general/general-discussion/104757-settlement-environmental-price-modifiers-new-dm
  - https://litrpgreads.com/blog/rpg/how-to-use-supply-demand-and-trade-routes-to-create-a-living-dnd-economy
updated: 2026-08-11
---

# Bölgesel Ekonomi — Fiyat Çarpanları

**Yukarı:** [House Rules](README.md)

> PHB fiyatları **normal bir bölgede, normal bir günde** geçerlidir.
> Kuşatma altındaki bir kasabada bir somun ekmek bir kılıçtan pahalıdır.

Sistem tek bir sayıya dayanır: **Bölge Durumu.** Her bölge/yerleşimin bir durumu
vardır; durum, kategori bazında bir çarpan verir. DM masada iki şeye bakar:
*hangi durum* ve *hangi kategori*.

---

## 1. Bölge Durumu

| Durum | Ne demek |
|---|---|
| **Refah** | Hasat iyi, yollar açık, kervanlar geliyor. Para dönüyor. |
| **Normal** | PHB fiyatları. Hiçbir şey olmuyor. |
| **Gergin** | Bir yol kapandı, vergi arttı, huzursuzluk var. İnsanlar stok yapmaya başladı. |
| **Kriz** | Kuşatma, kıtlık, salgın ya da aktif tehdit. Panik alım var. |
| **Yıkım** | Bölge düştü. Pazar diye bir şey kalmadı. |

## 2. Çarpan Tablosu

Kategoriye göre çarpanlar. **PHB fiyatını bu sayıyla çarp.**

| Kategori | Refah | Normal | Gergin | Kriz | Yıkım |
|---|---|---|---|---|---|
| **Yiyecek & su** | ×0.8 | ×1 | ×1.5 | ×4 | ×10 · sadece takas |
| **Barınma & yemek (han)** | ×0.9 | ×1 | ×1.5 | ×3 | yok |
| **Silah & zırh** | ×0.9 | ×1 | ×1.5 | ×3 | ×5 · sadece takas |
| **Alet & macera ekipmanı** | ×0.9 | ×1 | ×1.25 | ×2 | ×4 |
| **İyileştirme** (potion, healer's kit, cleric hizmeti) | ×0.9 | ×1 | ×1.5 | ×3 | ×5 |
| **Büyü hizmeti & scroll** | ×0.9 | ×1 | ×1.5 | ×2.5 | bulunmaz |
| **Lüks** (mücevher, ipek, sanat) | ×0.8 | ×1 | ×0.8 | ×0.5 | ×0.25 |
| **Ulaşım** (at, kervan yeri, gemi) | ×0.9 | ×1 | ×2 | ×4 | bulunmaz |
| **Bilgi & rüşvet** | ×1 | ×1 | ×1.5 | ×2 | ×0.5 |
| **İşçilik & hizmet** (ücretler) | ×1.2 | ×1 | ×1.2 | ×2 | para geçmez |
| **PARTİ SATARKEN** | ×0.5 | ×0.5 | ×0.4 | ×0.3 | ×0.15 |

**Neden lüks ucuzluyor:** kriz anında kimse gerdanlık almaz — herkes satar.
Bu, partinin loot'unu değerlendireceği yeri seçmesini gerektirir. Ravonia'da satılan
mücevher ile kuşatma altındaki bir kasabada satılan mücevher aynı şey değildir.

**Yıkım'da para geçmez.** Neyin geçtiği:

| Takas birimi | Kabaca değeri |
|---|---|
| Bir günlük yiyecek (rations) | 1 "birim" |
| Temiz su fıçısı | 2 birim |
| Tuz kesesi | 3 birim |
| Healer's kit / ilaç | 5 birim |
| Bir tutam ok / cephane | 2 birim |
| Yakıt, lamba yağı, odun | 2 birim |
| Sağlam bir çift çizme, battaniye | 3 birim |
| **1 gp** | ~0 birim. Kimse ekmek yerine altın yemiyor. |

## 3. Stok — Para Yetse Bile Bulamayabilirsin

Fiyat bir şey, **bulunabilirlik** başka şey.

| Yerleşim ölçeği | Tek kalemde en yüksek değer | Stok zarı |
|---|---|---|
| **Köy** (<500) | 25 gp | d4 |
| **Kasaba** (500–5.000) | 250 gp | d6 |
| **Şehir** (5.000+) | 2.500 gp | d8 |
| **Metropol** ([Ravonia](../../03-ager/continents/ravonia/cities/ravonia/README.md)) | 10.000 gp+ | d10 |

**Stok kontrolü:** aradığın şey o yerleşim için "olağan" değilse stok zarını at.
**3+ ise var.**

Durum stok zarını küçültür: **Gergin −1 kademe · Kriz −2 · Yıkım −3.**
(d10 → d8 → d6 → d4 → yok.)

> Tersi de olur: **Kriz**'de silah ve iyileştirme stoğu düşer ama **karaborsada**
> bulunur — fiyat ×2 daha, ve bir iyilik borcu.

## 4. Durum Ne Zaman Değişir

Bölge Durumu bir olayla **bir kademe** kayar. DM her downtime haftasında ya da
her seyahat ayağında bir kez değerlendirir.

| **İyileştirir (+1 kademe)** | **Kötüleştirir (−1 kademe)** |
|---|---|
| Bol hasat, iyi mevsim | Kıtlık, kuraklık, mahsul hastalığı |
| Yeni ticaret yolu ya da kapalı yolun açılması | Bir geçidin/limanın kapanması |
| Büyük bir kervanın gelmesi | Ordu geçişi ya da kuşatma |
| Bir tehdidin temizlenmesi (**genelde parti**) | Haydut, undead ya da canavar baskısı |
| Kraliyet yardımı, vergi affı, festival | Ağır vergi, zorla asker toplama |
| Yeni bir maden/kaynak bulunması | Salgın, lanet, karantina |
| Lehte bir söylentinin yayılması | **Yayılım 3+ bir panik söylentisi** → [rumor-system.md](rumor-system.md) |

> **İki kademe birden** sadece felaket ölçeğinde olur: şehrin düşmesi, bir tanrının
> müdahalesi, bir kalenin kapanması.

## 5. Haber Hızı — Spekülasyon Kuralı

Ticaret oynamak isteyen oyuncular için. Kâr, iki bölgenin çarpan farkından gelir —
**ama sadece haber henüz oraya ulaşmadıysa.**

1. Bir malı A bölgesinden al (A'nın çarpanıyla), B bölgesine götür (B'nin çarpanıyla sat).
2. **Şart:** B'deki insanlar A'da olan biteni henüz duymamış olmalı. Bunu
   [rumor-system.md](rumor-system.md) belirler — ilgili söylentinin Yayılımı **3'e**
   ulaştıysa fiyat farkı kapanmıştır, herkes biliyor.
3. **Tavan:** bir kervan yükü = 500 gp değerinde mal. Fazlası dikkat çeker
   (lonca, gümrük, haydut).
4. **Risk:** yol başına bir kez, DM bir olay atar — haydut, gümrük, bozulma, rakip tüccar.

Yani en kârlı iş, kötü haberi **taşıyan** olmak değil, kötü haberden **önce** varmaktır.

## 6. Masada Hızlı Kullanım

> Oyuncu: "Bunu kaça satarım?"
> DM: **Durum** → **kategori** → çarpan → PHB fiyatı × çarpan. Bitti.

Örnek: Thornhold geçidi kapalı, kasaba **Kriz**'de.
- Rations (normal 5 sp) → ×4 = **2 gp**
- Longsword (15 gp) → ×3 = **45 gp**
- Parti bir yakut (500 gp) satıyor → lüks ×0.5, satış ×0.3 → **75 gp**. Kimsenin
  yakuta ayıracak parası yok.

---

## Karsovia — Mevcut Durumlar

> **[AÇIK SORU]** Aşağıdakiler **öneri**. DM onaylayınca `status: usable` sayılır;
> kampanya ilerledikçe güncellenir. Değerler `00-meta/open-questions.md`'ye de girildi.

| Yer | Ölçek | Önerilen Durum | Neden |
|---|---|---|---|
| [Ravonia](../../03-ager/continents/ravonia/cities/ravonia/README.md) | Metropol | **Normal** (kanat bazında değişir) | Zengin ve kalabalık, ama Karsovia içten içe borçlu |
| [Wheatrest](../../03-ager/continents/ravonia/villages/wheatrest.md) | Köy | **Gergin** | Fakir çiftçi köyü, üç gözcü kulesi, sürekli tedirginlik |
| [Nethryn](../../03-ager/continents/ravonia/villages/nethryn/README.md) | Köy | **Yıkım** | Lanetli. Pazar diye bir şey yok, sadece takas |
| [Thornhold Kalesi](../../03-ager/continents/ravonia/sites/thornhold-kalesi.md) | Garnizon | **Kriz** | Geçit kapalı → ticaret çöküşü, açlık. Kendi dosyasında yazılı |

> **Zincir:** Thornhold'un geçidi kapalı olduğu sürece batı ve kuzey ticareti kesik.
> Bu, **Wheatrest**'i Gergin tutan ve kaçak rotaları oraya kaydıran şeydir. Geçit
> açılırsa iki yer birden bir kademe iyileşir — bu partiye verilebilecek en somut
> ekonomik ödüldür.

---

## Kaynaklar

Durum bazlı çarpan aralıkları (frontier +%20–100, kıtlık +%25–300, savaş +%50–200)
şu tartışmalardan uyarlandı; kademeler ve kategoriler bu masaya göre yeniden yazıldı
(`canon: homebrew`):

- [D&D Beyond — Settlement/Environmental Price Modifiers](https://www.dndbeyond.com/forums/d-d-beyond-general/general-discussion/104757-settlement-environmental-price-modifiers-new-dm)
- [LitRPG Reads — Supply, Demand, and Trade Routes](https://litrpgreads.com/blog/rpg/how-to-use-supply-demand-and-trade-routes-to-create-a-living-dnd-economy)
