---
type: meta
title: Oyuncu Karakterleri
canon: homebrew
status: usable
updated: 2026-08-30
---

# Oyuncu Karakterleri

> Bu klasör **oyuncu karakterlerinin** lore'unu, dünya bağlarını ve
> **gelişimini** tutar. NPC'lerden ayrı durur çünkü PC'ler kampanyaya bağlıdır
> ve **oyun ilerledikçe değişir.**

## Sistem — nasıl çalışır

| Kural | Neden |
|---|---|
| **Kampanya başına bir klasör** | PC'ler kampanyaya bağlıdır; NPC'ler değil |
| **Önemli PC başına bir klasör, beş dosya** | Karakter büyüdükçe dosya bölünür, README şişmez |
| ⭐ **Her PC'nin bir `03-development.md`'si vardır** | *"Başına ne geldi, neye dönüştü"* tek yerde durur |
| 🔒 **DM-only içerik ayrı dosyada** | [CLAUDE.md §7](../../CLAUDE.md) |
| **Ham oyuncu notu değiştirilmez** | Yorum ile kaynak ayrı tutulur; çelişince kaynak haklıdır |
| **Statblock yazılmaz** | Sheet oyuncunundur. Statblock kuralı NPC/yaratık içindir ([§5.5](../../CLAUDE.md)) |

### Klasör yapısı

```
player-characters/
├── README.md                       ← burası
├── nada-coldo.md                   CotBC — tek dosya
└── <kampanya>/
    ├── README.md                   parti kapak sayfası
    ├── 00-raw-notes.md             ★ oyuncu notlarının ham hâli — değiştirilmez
    └── <karakter>/
        ├── README.md               kimlik, inançlar, amaçlar
        ├── 01-background.md        oyun başlamadan önce
        ├── 02-ties.md              dünyaya bağları
        ├── 03-development.md       ⭐ gelişim günlüğü
        └── 04-dm-notes.md          🔒 DM-only
```

### Şablonlar

| Şablon | Ne zaman |
|---|---|
| [player-character.md](../../00-meta/templates/player-character.md) | Yeni PC klasörü açarken |
| [pc-development.md](../../00-meta/templates/pc-development.md) | Gelişim günlüğü iskeleti |

### Yeni PC eklerken

1. `player-characters/<kampanya>/<isim>/` klasörünü aç
2. Şablondan **beş dosyayı** kur
3. Oyuncunun ham notunu `<kampanya>/00-raw-notes.md`'ye **aynen** ekle
4. `<kampanya>/README.md`'deki kadro tablosuna satır ekle
5. Kampanyanın `04-party.md`'sine ve [who-is-who.md](../../09-index/who-is-who.md)'ye satır ekle
6. Memleketi/bağlı olduğu yerin dosyasından **geri link** ver

---

## ☄️ New Campaign

**1495 DR — tanrılar bir yıldır cevap vermiyor.**

| Oyuncu | Karakter | Sınıf | Durum |
|---|---|---|---|
| **Ardan** | **[Gwyndor](new-campaign/gwyndor.md)** | Paladin — **undead** | 🟡 Stub — hikâye metni bekleniyor |
| **Koray** | **[Grimnor](new-campaign/grimnor/README.md)** | Druid — Circle of the Moon *(orc)* | ✅ Yazıldı |
| **Erdem** | **[Vasili von Holtz](new-campaign/vasili-von-holtz/README.md)** | Wizard — Bladesinger | ✅ Yazıldı |
| **Burak** | **[Roful Roger](new-campaign/roful-roger.md)** | **Monk** | 🟡 Stub — ad + sınıf |

> 📈 **Stub'lar tek dosya, yazılanlar klasör.** [CLAUDE.md §4](../../CLAUDE.md)'ün
> ölçek terfisi kuralı: kayıt tek dosyada başlar, dolunca klasöre terfi eder.

📁 **Parti sayfası:** [new-campaign/README.md](new-campaign/README.md) —
parti içi eksenler, session akışı, bekleyenler
📜 **Ham notlar:** [new-campaign/00-raw-notes.md](new-campaign/00-raw-notes.md)

---

## Chains of the Burning Compact

> **Hepsini bağlayan şey:** [Kara Mühür Akoru](../../08-rules/homebrew/items/kara-muhur-akoru.md).
> Parti üyelerinin çoğunun hayatı bir noktada bu artifaktla kesişmiş.


| Oyuncu adı | Karakter | Sınıf | Durum |
|---|---|---|---|
| **max** | **Maximus Legroom** | — | Aktif. [Marcus Hale](../npcs/major/marcus-hale/README.md)'in öğrencisi. Kurdu: **Leke** |
| **han** | — | Rogue (thief) | Aktif. Karsovia arka sokakları; Zhentarim'e borçlu |
| **ea basr** | — | — | Aktif. Kont Edric Halmoor ile husumetli |
| **aysif** | — | — | **Öldü** → Kelemvor yargıladı → Tempus aldı → **Cyric çaldı**. 7 madness level |
| — | **[Nada Coldo](../npcs/minor/nada-coldo.md)** | Psion / truth-sayer | Kralın truth-sayer'ı. Mind flayer tadpole kökenli. |

### han — geçmişi

Karsovia'nın arka sokaklarında büyüdü; "mahalle abisi" diye anılan bir rogue.
Beş yıl önce kız kardeşinin kocası (Zhentarim locası organizatörü) ona el kaldırdığını
öğrenince adamı sokak ortasında tartakladı. Zhentarim onu **rakip lonca ajanlığı** ve
**tılsım hırsızlığına yardım** ile suçladı. Hayatta kalmak için borçlandı; beş yıldır
Thieves' Guild üzerinden ödüyor.

> 🔒 **Ilyon Verne, han'ın kız kardeşiyle evli.** Kara Mühür Akoru kaybolduğunda
> han suçlandı — **alakası yoktu.**

Son iş onu tekrar Zhentarim'le aynı soygun masasına oturttu. Soygun ters gitti,
Zhentarim adamları masum birini öldürdü, celestial varlıklar müdahale etti.
**Piç Joe** ile kaçmayı başardı.

> 🔒 Kız kardeşinin eli yaşlı bir el gibi — yakından bakmadan fark edilmiyor.
> **Mizora** ona Kara Akor Mührü'nü çalmasını söylemiş; dokununca eline yapışmış.
> han sebebini hâlâ öğrenemedi.

### ea basr — Great Old One warlock

Random, çılgın bir **Great Old One warlock**. Kara Mühür Akoru olaylarıyla
**alakası yok** — bu onu partideki tek "temiz" kişi yapıyor.

### ea basr — intro vizyonu

> Rüzgârla değil, gökyüzündeki uzak bir gözbebeğine doğru eğilen bir buğday tarlasında
> duruyorsun. Başaklar içe doğru bükülüyor; sanki bakılıyor olmanın ağırlığıyla.
> Tarlanın kıyısında üç gölge var. Kımıldamıyorlar. İzliyorlar.
> Gölgenin değdiği yerde buğday çürüyor.
>
> **"Üçü hasadı korumak için dikildiğinde, hasat çoktan kaybedilmiştir."**

### aysif — Kara Mühür Akoru ritüeli

> 🔒 Çocukken köyünde, **Kara Mühür Akoru kullanılarak üzerinde bir ritüel yapıldı** —
> güçlü bir varlık bedenini ele geçirsin diye. **Ritüel yarım kaldı.**
> Weave'e erişimi bu yüzden var; **güçleri doğuştan değil.**

### aysif — ölümü

**Ölüm sahnesi**:
Kelemvor tarttı, Tempus'un Ysgard'ına gönderdi — **Cyric yolda çaldı.**
Şu an 7 madness level taşıyor; Cyric fısıldadığında yerine getirmezse +1 level.

---

> **[AÇIK SORU]** Karakterlerin tam adları, ırkları, sınıfları ve seviyeleri
> notlarda eksik. Doldurulmayı bekliyor.
