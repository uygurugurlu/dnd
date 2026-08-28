---
type: meta
title: Değişiklik Kaydı
updated: 2026-08-17
---

# Değişiklik Kaydı

Evrende ne zaman ne değişti. Her önemli ekleme/karar buraya bir satır.
Format: `- **YYYY-MM-DD** — açıklama. (etkilenen dosyalar)`

## 2026

- **2026-08-10** — Repo kuruldu. Dizin yapısı, konvansiyonlar ve şablonlar oluşturuldu.
- **2026-08-10** — Great Wheel kozmolojisi dolduruldu: 16 Outer Plane, Inner Planes,
  Transitive, Feywild/Shadowfell, Sigil/Outlands, Far Realm, Wildspace. (`01-cosmology/`)
- **2026-08-10** — Faerûnian pantheon + ırksal pantheonlar + archdevil/demon lord
  hiyerarşileri eklendi. (`02-lore/pantheon/`)
- **2026-08-10** — Weave, Shadow Weave, magic mekaniği; tarih/takvim; 8 ana faksiyon. (`02-lore/`)
- **2026-08-10** — Ager ve Charaxis iskeletleri açıldı, içerik bekliyor.
- **2026-08-10** — Zariel major NPC dosyası oluşturuldu. (`05-characters/npcs/major/zariel/`)
- **2026-08-11** — **Okuma sitesi eklendi.** Repo, yapısı hiç değiştirilmeden basit bir
  forum arayüzünde gezilebiliyor: `./serve.sh` → http://localhost:8787. Kategoriler klasörlerden,
  başlıklar frontmatter'dan otomatik gelir; tam metin arama, backlink'ler, içindekiler,
  DM-only gizleme ve koyu tema var. (`index.html`, `serve.sh`, `site/`)
- **2026-08-11** — 🌀 **PORTAL AĞI ÇÖZÜLDÜ: Charaxis Kapıları.**
  (`03-ager/planar-sites/portal-network.md`)
  - Haritadaki **turkuaz halkalar portal** çıktı. **Ager'de ayakta duran her portal
    bir Charaxis kapısıdır:** 1385 Spellplague'de kendiliğinden açıldılar, Charaxis'e
    çıkanlar **dönemin elf büyücülerince sabitlendi**, kararsız olanlar kapandı/kapatıldı.
  - **Altı kapı, kıta başına üçer** — haritadan tek tek çıkarıldı:
    **R-1** Urkhal Ovaları · **R-2** Wheatrest (*stabilite %62*) · **R-3** Stone Raven ·
    **K-1** Surfwale/Softsoil · **K-2** Northwatch · **K-3** Karsovia şehri.
  - Korunuyorlar: geçiş **şifre + yetki** ister. Şifre `04-charaxis/README.md`'de
    kayıtlıydı: *"Vael'Toruun u thalas—shaen, khar."*
  - Bu, üç eski soruyu birden kapattı: Ager↔Charaxis nasıl seyahat ediliyor,
    Wheatrest portalı neydi, Bel neden recruitment noktasını oraya kurmuştu.
  - Kampanyaya bağlandı: kapıları **elfler** sabitledi → kuyruklu yıldızlar
    sabitlemeyi bozuyor → yani susan tek şey tanrılar değil, **elf büyüsü de tutmuyor**.
    "Kapılar Bozuluyor" saati yazıldı. (`06-campaigns/new-campaign/06-clocks.md`)
  - **Beyaz kesikli sınır** sorusu kapandı: önemsiz, kıtalar doğal sınırlarla ayrılıyor.
- **2026-08-11** — 🗺️ **DÜNYA HARİTASI OKUNDU — evrenin yapısı düzeltildi.**
  (`AGENTS.md`, `03-ager/`, `09-index/gazetteer.md`)
  - **Ager iki kıtadan oluşuyor: RAVONIA (batı) ve KARSOVIA (doğu)**, artı bir
    **Güney Takımadası**. İkisini **Lover's Cut** boğazı ayırıyor — bu bir kanyon
    değil, boğaz. **Elandor Vael / Sıkışık Kıyılar** artık tek bir kıta değil,
    bu bütünün adı.
  - Dizin yapısı buna göre değişti: `continents/elandor-vael/nations/*` →
    `continents/{ravonia,karsovia,south-archipelago}/`. **Ravonia şehri**
    `ravonia/cities/ravonia/`'ya, Wheatrest/Nethryn/Thornhold Ravonia kıtasına taşındı.
    Tüm linkler onarıldı (repo genelinde sıfır kırık link).
  - **Haritadaki her etiket okundu ve stub dosyası açıldı** (30 yeni dosya):
    Caélora · Tharn'Kel · Grak Hollow · Gorestead · Ragethorn · Redburrow ·
    Stone Raven · Northcurrent · Mournwood · Eira'thalas · Karsovia · Qereth ·
    Halden · Softsoil · Ruthen · Valden · Zarkhul · Breslau · Grak'Tor · Frostmaw ·
    Marshfall · Dunfen · Karsfen · Surfwale · Northwatch · Tidewatch ·
    Mordavia Keep · Anchorrest · Brinefield · Windfall.
  - **Harita anahtarı:** [`03-ager/00-overview/world-map.md`](../03-ager/00-overview/world-map.md) —
    her etiket, her gemi/ejderha/portal işareti, her açık soru.
  - **[AGENTS.md](../AGENTS.md) oluşturuldu:** dünyanın şekli, zaman çizelgesi,
    iki kampanyanın ayrımı ve kırmızı çizgiler.
  - Haritadan çıkan düzeltmeler: cüce holdunun adı **Hammerfall** (uydurulan
    "Karn-Dur" iptal); night hag'in ormanı **Mournwood** olarak konumlandı;
    Lover's Cut boğaz olarak düzeltildi.
- **2026-08-11** — **Zaman çizelgesi netleşti.** New Campaign **1495 DR**'de geçiyor:
  kuyruklu yıldızlar 1494'te geldi, **Mürai savaşı ondan önce çıkıp bitti**,
  CotBC ise 1492'de oynandı. Üç yıl arayla aynı dünya.
  (`06-campaigns/new-campaign/03-timeline.md`, `01-premise.md`, `README.md`)
- **2026-08-11** — **Ravonia notları işlendi; 12 NPC dosyası açıldı.** Ravonia'nın
  README, districts, sites ve religions dosyaları baştan sona okundu; içlerindeki
  kadro ve olaylar yapılandırıldı. (`05-characters/npcs/minor/`, `09-index/`)
  - Yeni NPC dosyaları: Alina Voss, Ilyon Verne, Molly Thorne, Prens Arkhavel Karsov,
    Kral Alper Tümerhan, Kont Edric Halmoor, Ysmae Calloran, Kaeryth Vhalassa,
    Mother Ulkryssa, Glenda Vhalemor, Mizora.
  - Yeni yer dosyaları: **[Vhaelureth](../03-ager/continents/ravonia/cities/ravonia/sites/vhaelureth.md)**
    (Ravonia'nın altındaki gömülü şehir; 1385 Spellplague) ve
    **[Lowward](../03-ager/continents/ravonia/cities/ravonia/districts/lowward-south.md)**
    (eksik olan dördüncü kanat).
  - `03-ager/00-overview/` doldu: **history-overview**, **religion-in-ager**,
    **trade-and-economy**, **peoples-of-ager**. Spellplague'in Ager'deki karşılığı
    artık somut: Vhaelureth'in çöküşü.
  - Ravonia `nations/` altına taşındığı için kırılan **tüm linkler onarıldı**.
  - `open-questions.md`'ye Ravonia notlarından çıkan 8 yeni soru eklendi
    (Ravonia–Karsovia ayrımı, prensin ölümü, "Hallowreach", Elizabeth Thorne…).
- **2026-08-11** — **New Campaign hayata geçirildi ve CotBC'den ayrıldı.**
  (`06-campaigns/new-campaign/`, `06-campaigns/README.md`)
  - Kampanya iskeleti kuruldu: [premise](../06-campaigns/new-campaign/01-premise.md)
    (kızıl gök, sessiz tanrılar, Charaxis vahası, kararsız portallar),
    [kadro](../06-campaigns/new-campaign/02-cast.md),
    [timeline](../06-campaigns/new-campaign/03-timeline.md),
    [parti](../06-campaigns/new-campaign/04-party.md) (undead paladin · moon druid ·
    bladesinger · fighter), [dünya tohumları](../06-campaigns/new-campaign/05-world-seeds.md),
    [saatler](../06-campaigns/new-campaign/06-clocks.md).
  - Ham notlardaki 9 *popup idea* işlendi: ork faksiyonları + **Ataman Ghorag**,
    cüce mecha madenciliği + primitive AI, **Lirion** (Aşıklar Yarığı),
    **Silvaerun** (= Evermeet, `canon: adapted`), **Sparkhold** (hextech),
    **Yutak Bataklığı**, **Barutdere**, **Kuyudibi**, kararsız portal tablosu.
  - Yeni ülke dosyaları: [Ork Toprakları](../03-ager/continents/ravonia/regions/urkhal-plains/README.md),
    [Cüce Holdları](../03-ager/continents/ravonia/regions/hammerfall/README.md),
    [Silvaerun](../03-ager/continents/ravonia/regions/silvaerun/README.md).
    Elandor Vael'in batı ve kuzey boşlukları kapandı.
  - **Kampanya ayrımı kuralı** yazıldı: [06-campaigns/README.md](../06-campaigns/README.md);
    `who-is-who` ve minor NPC dizini kampanya bazında ayrıldı.
- **2026-08-11** — **House Rules bölümü açıldı.** `08-rules/house-rules.md` klasöre terfi
  ettirildi (`08-rules/house-rules/README.md`, eski içerik korundu) ve üç homebrew sistem eklendi:
  - [Nat 1 / Nat 20 komplikasyon & ödül tabloları](../08-rules/house-rules/crit-and-fumble.md) —
    ortak d20 tablosu (1–12) + karaktere özel satırlar (13–20): Undead Paladin,
    Moon Druid, Bladesinger Wizard, Fighter. Ayrıca savaş dışı d6 tabloları.
  - [Söylenti sistemi](../08-rules/house-rules/rumor-system.md) — Cazibe zarı (d4–d12),
    5 yayılım seviyesi, d8 bozulma tablosu, faksiyon tepkisi, d10×3 tohum üreteci.
  - [Bölgesel ekonomi](../08-rules/house-rules/economy.md) — 5 Bölge Durumu × 11 kategori
    fiyat çarpanı, stok zarı, takas birimleri, haber hızı spekülasyon kuralı.
  - Üç sistem birbirine bağlandı; Karsovia yerleşimleri için başlangıç durumları
    **öneri** olarak girildi ve `open-questions.md`'ye işlendi.
- **2026-08-12** — 🍷 **Calithra eklendi** — Ravonia kıtasına yeni bölge.
  (`03-ager/continents/ravonia/regions/calithra/`)
  - Denize bakan dik bir kıyı vadisine, **kayanın içine oyulmuş** katmanlı şehir.
    Halkın çoğu sonradan gelme; şehrin en sağlam geleneği **geçmişin sorulmaması**.
    "İş konuşulmaz" görgü kuralı, şarap ihracatı, *"Aşağıdaki ciddi yer"* liman mahallesi,
    **Vadinin şarkısı** ve *"Kızıl yıldızların altında verilen kararlar geri alınmaz"* inanışı.
  - 3 görsel eklendi (`calithra/attachments/`).
  - Masa tarafı yazıldı: sosyal kural tablosu, 5 hook, 2 DM-only soru.
  - **Kızıl gök** temasına bağlandı: kuyruklu yıldızlar 1494'te geldiğine göre şehrin
    "kızıl yıldız kararı" âdeti ya bir yaşında ya da eski bir sözün üstüne oturmuş.
  - **[AÇIK SORU]** Konum (doğu kıyı / Lover's Cut önerisi), yönetim, ve
    **Calithra = Lirion mu?** (New Campaign'in bard şehri tohumu).
  - Index'lere işlendi: `gazetteer.md`, `regions/README.md`, `ravonia/README.md`,
    `new-campaign/05-world-seeds.md`.
- **2026-08-12** — 🎻 **Calithra dolduruldu: kurucu, kadro, mekânlar, görevler, efsane.**
  - **Kuruluş FR'ye bağlandı.** Şehri **1389 DR**'de bir bard kurdu: **Calith Auveran**,
    Harpers'tan ayrılmış bir **Brightcandle**. İzinden gittiği tanrı FR canon'undan:
    **Finder Wyvernspur — *the Nameless Bard*** — kendi teşkilatı tarafından **adı
    elinden alınarak** cezalandırılmış, sonra sanatın dönüşümünün tanrısı olmuş bard.
    Calithra'nın isimsizlik geleneği bunun **tersine çevrilmiş** hâli: ceza olan şey
    burada hediye. (`history.md`, `sources:` frontmatter'da 6 FR wiki linki)
  - ⚜️ **Şehirde gizli bir Harper hücresi var:** karargâh *Merdiven Altı* (çeşmenin
    sabahları kuruyan su kanalının altı), üyeler **Vesna Marroc** (Wise Owl),
    **Ilva Sunderly** (Harpshadow), **Nedra Corm** (Watcher) + bir bilinmeyen.
    Şifre: kemanın her gecelik son notası (7 nota, 7 anlam).
    [harpers.md](../02-lore/factions/harpers.md)'nin boş "Ager'de" bölümü dolduruldu.
  - **13 NPC + ilişki ağı** (`people.md`): tembel, over-the-top ve deli uçları olan
    bir kadro; kim kime ne borçlu, hangi ipi çekince hangi üçü oynuyor.
  - **12 mekân** (`places.md`) ve **10 yan görev + d10 kanca tablosu** (`quests.md`) —
    hepsi ana hikâye dışı.
  - 🌊 **Lover's Cut'ın adı çözüldü** (`lovers-cut-tale.md`): iki kıta aslında iki
    sevgiliydi; tanrılar onları açtı, etleri toprak, **kara kanları deniz** oldu.
    Kavuşamıyorlar — ama kanın inceldiği yerde en yakın duruyorlar. Masada okunacak
    metin olarak yazıldı; anlatan **Bex Anadare**, yılda bir kızıl yıldızlı gece.
    `oceans-and-seas/lovers-cut.md`'deki *"bir efsane bekliyor"* açık sorusu kapandı.
  - **[DM ONLY]** (`05-secrets-dm-only.md`): şehri kim yönetiyor · Perrin'in defteri ·
    kurucunun ölüp ölmediği · Adsızlar Bahçesi'nin tanrılar sustuğu hâlde neden hâlâ
    çalışıyor olabileceği (kimse Finder'ı **adıyla çağırmıyor**).
  - Index'ler: `who-is-who.md` (Calithra kadrosu), `gazetteer.md`, `harpers.md`,
    `lovers-cut.md`.

- **2026-08-12** — ☄️ **New Campaign'in antagonist omurgası kuruldu: DÖRT CEVAP.**
  (`06-campaigns/new-campaign/factions-in-play/the-four-answers/`)
  - **[The Unwoven](../02-lore/magic/the-unwoven.md)** artık pasif bir anomali değil:
    dört ölümlüyü tanıdı, dördüne de aynı sorcerous kaynağı açtı. İlham: Avatar Korra'nın
    dört sezon villain'i. Dördü de **bir bağı kırmak** istiyor.
  - **[The Level Hand](../06-campaigns/new-campaign/factions-in-play/the-four-answers/the-level-hand.md)**
    — *"No gift should make a master."* Lider **Halden Rooke** (human, 44), Sparkhold'un
    *"loadless"* sınıfından; Cold Ward dead-magic yarasında seçildi. **Severance Sorcery.**
  - **[The First Communion](../06-campaigns/new-campaign/factions-in-play/the-four-answers/the-first-communion.md)**
    — *"The world was whole before we divided it."* Lider **Ysolde Marr** (elf, 341),
    Silvaerun'un **eski** yüksek rahibesi; kapı R-2'de dokuz gün yarı-fazda kaldı.
    **Confluence Sorcery.** Silvaerun schism'i buradan geliyor.
  - **[The Unfettered Wind](../06-campaigns/new-campaign/factions-in-play/the-four-answers/the-unfettered-wind.md)**
    — *"No throne beneath an open sky."* Lider **Vane** (tiefling, 38), Lirion'un
    en alt katmanından; Northcurrent'ta *the Anchor* hücresinde, kuyruklu yıldızların
    ilk gecesi ayağı yerden kesildi. **Skybreak Sorcery.**
  - **[The Iron Concord](../06-campaigns/new-campaign/factions-in-play/the-four-answers/the-iron-concord.md)**
    — *"Order is mercy."* Lider **Marshal Vharra Stane** (dwarf, 137), Hammerfall doğumlu
    ordu mühendisi; **Mürai**'de yaraya *"Stand down"* dedi. **Axiom Sorcery.**
    Ledger + Concord Towers + Hammerfall mecha kontratları.
  - **[The Loomless Chamber](../06-campaigns/new-campaign/factions-in-play/the-four-answers/the-loomless-chamber.md)**:
    dört liderin buluştuğu yer — bir plane değil, Unwoven'ın bilincinde ortak bir algı alanı.
    Masa yok, taht yok, kapı yok. Halkları ittifaktan **habersiz**.
  - **[DM ONLY] The Unweave:** dördü tek makinenin parçası. Level Hand ipleri kesiyor,
    Communion duvarları açıyor, Wind koruyucuları kaldırıyor, **Concord tezgâhı kuruyor.**
    Amaç Mystra'yı öldürmek değil — **yanına ikinci bir magical infrastructure kurmak.**
  - **Lore çelişkisi çözüldü:** `the-unwoven.md` *"it never lies"* diyor, ham fikir
    dört yalandan bahsediyordu. Çözüm: başta **ayna** (kendi inançlarını yankılıyor),
    kampanyanın ortasında **aldatmayı öğreniyor** — ve muhtemelen partiden.
  - **Emniyet supabı kapalı:** dördü de Fraying 5+; kurala göre Mystra'nın kilisesi
    onları avlıyor olmalıydı. Tanrılar sustuğu için kimse avlamıyor. *"Neden şimdi?"*
    sorusunun cevabı bu.
  - Bağlanan tohumlar: Sparkhold şebekesi → Concord Towers · Silvaerun → Communion
    schism'i · Lirion → Wind'in doğum yeri · Barutdere → Wind devşirme sahası ·
    Hammerfall/Tozkuyu → Concord tedarik zinciri · Ataman Ghorag → Stane'un rakip
    devlet kurucusu.
  - Güncellenen: `factions-in-play/README.md`, `02-cast.md`, `05-world-seeds.md`,
    `06-clocks.md` (**6. saat: Dört Cevap**), `02-lore/magic/the-unwoven.md` (Part 4),
    `09-index/who-is-who.md`, `00-meta/open-questions.md`.

- **2026-08-12** — ⚔️ **MÜRAİ SAVAŞI CANON'A GEÇTİ — ve iki kampanya tek zaman
  çizgisine bağlandı.** (`new-campaign/01-premise.md`, `03-timeline.md`)
  - **1492–1495 DR. [Ravonia](../03-ager/continents/ravonia/README.md) ↔
    [Karsovia](../03-ager/continents/karsovia/README.md).** İki kıta, üç yıl.
  - **Fitil:** Karsovia'nın prensi Ravonia'nın **başkentindeki turnuvaya davet
    edildi**, gitti ve **orada öldürüldü** — yani
    [Chains of the Burning Compact](../06-campaigns/chains-of-the-burning-compact/README.md)'in
    olayı. [Prens Arkhavel Karsov](../05-characters/npcs/minor/arkhavel-karsov.md)'un
    ölümü artık kesin olarak savaşın sebebidir. **CotBC = fitil, New Campaign = kül.**
  - **Sonuç: Ravonia yenildi, orduları dağıtıldı.** Barış imzalandı, gerginlik sürüyor.
  - ⚠️ **Zamanlama düzeltildi:** savaş kuyruklu yıldızlardan *önce* bitmiyor —
    **1495'te bitiyor.** Yani kuyruklu yıldızlar (1494) ve tanrıların susması
    savaşın **ortasında** oldu; son yıl kızıl gök altında savaşıldı. Halkın okuması:
    *"Tanrılar savaşın ortasında yüzünü çevirdi — ve sonra Ravonia kaybetti."*
    Kampanya başladığında barış **aylık**, yıllık değil.
  - **[Iron Concord](../06-campaigns/new-campaign/factions-in-play/the-four-answers/the-iron-concord.md)
    yeniden temellendirildi:** Karsovia ordusundan değil, **Ravonia'nın dağıtılmış
    ordusundan** doğuyor. Marshal Stane Hammerfall doğumlu bir **Ravonia** mühendisi;
    savaşın son yılında **the Fortyday** koridorunu kırk gün tutup dokuz bin kişiyi
    kurtardı, sonra devleti orduyu feshetti. Concord bir işgalci değil —
    **kendi ordusunun geri dönmesi.**
  - Düzeltilen dosyalar: `AGENTS.md`, `new-campaign/README.md`,
    `factions-in-play/orc-factions.md` (ork-Karsovia varsayımı **yanlıştı**),
    `urkhal-plains/README.md`, `calithra/history.md` (`~1490` → **1492–1495**),
    `ravonia/README.md` (ateşkes hattı okuması güçlendi), `open-questions.md`
    (**iki soru kapandı**).
  - **Kalan tek soru:** *"Mürai" kelimesi ne demek?*

- **2026-08-12** — 🏷️ **Dört Cevap liderlerinin adları sadeleştirildi** (akılda
  kalıcılık için, `Rooke` standardı):
  | Eski | Yeni |
  |---|---|
  | Halden Rooke | **Halden Rooke** *(değişmedi)* |
  | Saeleth Vaelthorn | **Ysolde Marr** — faction içinde **"Nine"** (dikişte geçirdiği dokuz gün) |
  | Rhoan Vess | **Vane** — tek kelime; *rüzgârgülü*. Miras alınan soyadı taşımayı reddediyor |
  | Marshal Vharra Duln | **Marshal Vharra Stane** |
  | Belane Corr · Tem "Sekiz" Ossary | **Corr** · **Tem "Kâğıt" Ossary** |

- **2026-08-12** — 🗿 **THE STANDING STONE CALITHRA'YA KONDU** — ve Ager'in takvimi
  bir adrese kavuştu. (`03-ager/continents/ravonia/regions/calithra/standing-stone.md`)
  - FR'nin Standing Stone'u **olduğu gibi** alındı (`canon: adapted`): 20 ft, tek parça,
    koyu camsı gri monolit, baştan aşağı **Elven rune**, **yüzeyi kendini onaran**
    koruma büyüsü, **1 DR**'de dikildi ve **Dale Reckoning** buradan başlıyor.
    Antlaşmanın maddeleri (*ormanın derinine balta girmez / ağacın olmadığı yer sizindir*)
    de aynen alındı.
  - **Coğrafya alınmadı** ([CLAUDE.md §1](../CLAUDE.md)): Cormanthor / Rauthauvyr's Road
    kavşağı yerine taş **Calithra vadisinin ağzında** duruyor — merdivenin dibi,
    liman mahallesinin üstü. Şehre giren herkes önünden geçer.
  - **Taraflar uyarlandı:** Cormanthyr ↔ Dalesfolk yerine
    **[Silvaerun](../03-ager/continents/ravonia/regions/silvaerun/README.md) elfleri ↔
    karaya çıkan insan yerleşimciler.** Silvaerun'un "sözleşme ve ant uzmanlığı" artık
    bir kökene sahip: insanların bu kıtada olma hakkı onların imzası.
  - **Taş şehirden 1388 yıl yaşlı.** Calithra (1389 DR) onun *arkasına* kuruldu.
    Hiçbir şeyi kaydetmeyen şehir, kıtanın en eski yazılı belgesinin dibinde yaşıyor —
    ve sözleşmelerin imzalandığı liman mahallesi tam onun gölgesinde.
  - **Yerel âdet:** yeni gelen taşa dokunur, Calithralı dokunmaz
    (*"Antlaşmaya dokunursan tarafı olursun"*) → şehrin farkında olmadan tuttuğu
    ikinci kayıt.
  - **Açık soru cevap adayı buldu:** runelerde geçen **calith** ("eşik"/"sığınak")
    kelimesi, `history.md`'deki *"Calithra eski elfçe bir kelime"* teorisini
    destekliyor — vadi kurucudan 1388 yıl önce de bu adla anılıyor olabilir.
  - **[DM ONLY]** taşın **altında** ne olduğu (çapa / tanık / mezar), devirmeye
    kalkışanın başına gelenler, Silvaerun'un antlaşmayı hâlâ takip edip etmediği ve
    1494'ten beri **onarma hızının yavaşlıyor** olabileceği →
    `05-secrets-dm-only.md` §8.
  - Index'ler ve bağlar: `calendar.md`'nin boş **"Ager'de"** bölümü dolduruldu,
    `timeline-master.md`'nin **1 DR** satırına konum eklendi, `gazetteer.md`,
    `ravonia/README.md`, `ravonia/sites/README.md`, `calithra/README.md`,
    `places.md`, `history.md`, `silvaerun/README.md`.

- **2026-08-12** — 🏜️ **QERETH YAZILDI** — stub'dan klasöre terfi
  (`03-ager/continents/karsovia/cities/qereth/`).
  - **Ana fikir:** küçüklüğü ile tarihî önemi birbirine uymayan bir sınır kasabası.
    Bugün ~2.800 kişilik sert bir çöl kasabası; altında **6+ katman** eski Qereth var.
    Bir tavernanın bodrum duvarı bir saray cephesi, avludaki sütun bir tapınak
    parçası, meydandaki parçalanmış heykel adı unutulmuş bir kral.
    Sözü: *"Before there were roads, there was Qereth."*
  - **the Gate:** kasabanın girişinde **100 fit (30 m)**, alt üçte biri kuma gömülü,
    menteşesiz, kanatsız, hiçbir sura bağlı olmayan taş kapı. **Kapı Qereth için
    yapılmadı — bugünkü Qereth onun etrafında kuruldu.**
  - **the Veils:** çölün üstünde kumdan göğe yükselen büyü perdeleri (turkuaz,
    mor; *arcane aurora*). Qereth'in teknolojisi **değil** — muhtemelen Qereth
    onların yüzünden kuruldu. Kurallar, d8 *Veil Surge* tablosu ve **Veil-glass**
    ticaret malı yazıldı. (`the-veils.md`)
  - **Yeni bölge: [Tavreth](../03-ager/continents/karsovia/regions/tavreth.md)** —
    Karsovia'nın ilk isimlendirilmiş bölgesi. Haritadaki "ölü ağaçlar" bu çölün
    kenarı olarak yorumlandı: **the Standing Dead**, çöl ilerledikçe ayakta kuruyan
    orman kuşağı. *(Harita/brifing uzlaştırması — DM onayı bekliyor.)*
  - **Yönetim:** the Well Council (Water · Rope · Guard · Dig · Gate). Kasabanın
    merkezi Kapı değil **kuyu**; ölçü defteri 1102 DR'den beri kesintisiz.
  - **7 NPC** (`people.md`) + `history.md` (Qereth I–VII kronolojisi) +
    `places.md` (Cold Mouth · Third Cellar · Broken King · Sealed Stair · Obelisk).
  - **[DM ONLY]** Kapı'nın ne olduğu (3 seçenek), Perdelerin **Charaxis'in konumuna
    bağlı** olduğu tezi, Sealed Stair'in altı, **40 yıldır ölü olan Warden** ve
    mührü kullanan katip → `05-secrets-dm-only.md`.
  - **Kampanyaya bağ:** Perde sıklığı **1494 kuyruklu yıldızlarından** beri artıyor —
    yani Qereth, "Kapılar Bozuluyor" saatinin en erken ve en görünür göstergesi
    olabilir. Sanavar Kest'in 11 yıllık defteri bunun tek verisi.
  - Görseller eklendi: `attachments/qereth-gate.png`, `qereth-gatefoot-market.png`.
  - Güncellenen index'ler: `gazetteer.md`, `who-is-who.md`, `world-map.md`,
    `karsovia/README.md`, `karsovia/cities/README.md`, `karsovia/regions/README.md`,
    `open-questions.md`. Eski `cities/qereth.md` stub'ı silindi.

- **2026-08-12** — 🕯️ **MORDAVIA KEEP YAZILDI** — stub'dan klasöre terfi
  (`03-ager/continents/karsovia/sites/mordavia-keep/`).
  - **Ana fikir:** kıtanın ortasındaki körfezde, doğal bir adanın üstünde duran
    lanetli bir aristokrat malikânesi. **Victorian.** Adada sadece kale, dört misafir
    evi ve mezarlık var; ulaşım **yalnızca deniz**. İçindeki herkes ölü — kimi ruh
    iyi niyetli, kimi kötü, **hepsi kusursuz giyimli** ve kendi aralarında konuşuyorlar.
  - **Aile FR canon'undan seçildi: [House Uskevren](../03-ager/continents/karsovia/sites/mordavia-keep/history.md)**
    (`canon: adapted`). Servetin kaynağı FR'deki gibi kirli — korsanlık, burada
    **enkazcılık**: adanın sualtı kayalıklarında yakılan sahte fener, on dokuz gemi.
    Thamalon, Shamur, Tamlin, Talbot, Thazienne ve başuşak **Erevis Cale** aynen
    alındı; coğrafya (Selgaunt/Sembia/Stormweather) **alınmadı**. Kaynak URL'leri
    dosyanın `sources:` alanında.
  - **Lanet:** Nightal **1408 DR**, nişan balosu gecesi. Kırk bir kişi bir gecede öldü;
    hiçbiri boğulmadı, hiçbiri ıslanmadı, hepsi giyinikti. Balo o geceden beri
    **her akşam yeniden başlıyor** — gecenin **beş perdesi** yazıldı.
  - **Oyun mekaniği: Evin Kuralları.** Yemeğe giyinilir · takdim edilmeden konuşulmaz ·
    yemek reddedilmez · yemek yenmez · gece yarısından sonra üst kata çıkılmaz ·
    adadan gece ayrılınmaz. **Nezaket bir zırh sistemidir**; misafir evleri güvenli bölge.
  - **Murder mystery** (`mystery.md`): 12 ipucu, çelişki haritası, ifade tablosu,
    üç saat (Gerçek / Ev / Su) ve üç oturumluk iskelet. Bel kemiği tek bir tutarsızlık:
    **40 ceset, 41 mezar.**
  - **[DM ONLY]** Laneti kimin koyduğu, lanetin sözleri, **CR 11 statblock**
    (*The Drowned Nurse*), körfezdeki deniz yılanının ne olduğu, kayıp Uskevren
    servetinin gerçekte nereye gittiği ve **dört final** →
    `05-secrets-dm-only.md`. Statblock `08-rules/homebrew/monsters/README.md`'ye
    işlendi (adı bile spoiler olduğu için sadece işaret).
  - **Yan etkiler:** haritadaki isimsiz büyük körfeze **Mordavia Körfezi** adı verildi
    (onay bekliyor); [Zarkhul](../03-ager/continents/karsovia/villages/zarkhul.md)
    stub'ı adanın **tek geçiş kapısı** olarak dolduruldu.
  - Görsel eklendi: `attachments/mordavia-keep-island.png`.
  - Güncellenen index'ler: `gazetteer.md`, `who-is-who.md`, `world-map.md`,
    `karsovia/README.md`, `karsovia/sites/README.md`, `open-questions.md`,
    `homebrew/monsters/README.md`. Eski `sites/mordavia-keep.md` stub'ı silindi.

- **2026-08-13** — 🪨 **LAST CALL one-shot'ı eklendi — ⚠️ AGER EVRENİNE DAHİL DEĞİL.**
  (`06-campaigns/oneshot-last-call/`)
  - Bekârlığa veda gecesi için **10 kişilik, 6. seviye, raid boss** one-shot'ı.
    **Doctor Strange** paralel evrenlerden maceracıları kapısız bir odaya çağırır.
  - **1.200 HP / 3 faz** (500-400-300), takım initiative'i (5+5), boss turda iki
    kez oynar. Ölüm yok. 10 hazır karakter kartı, mekân + 6 interaktif obje,
    yardımcı tablolar, basılabilir oyuncu kartı, DM-only final.
  - **Kanon etkisi: sıfır.** Ne gazetteer'a, ne who-is-who'ya, ne timeline'a
    işlendi — bilerek. Sadece `06-campaigns/README.md`'ye "evren dışı" işaretiyle
    bir satır eklendi.

- **2026-08-14** — 🔄 **LAST CALL yeniden yazıldı: içki kurgudan çıkarıldı, iki
  katmana ayrıldı.** (`06-campaigns/oneshot-last-call/`)
  - **Tasarım kararı:** hikâyede alkol yok. **Kurgu katmanı** = homebrew
    **Intoxication** condition'ı (Lvl 1–6: −1 d20 → **Poisoned** → **Slowed** →
    **Sunken**/unconscious). **Masa katmanı** = oyuncunun shot atması, saf
    roleplay. Katılmayanın karakteri aynı derecede zehirli; mekanik değişmiyor.
    Ayrım her dosyanın başında tablo hâlinde duruyor.
  - **Yeni lore:** Ebriax bir canavar değil, **biten her evreni içinde taşıyan bir
    kap** — ve dolu. Sızdırdığı **tortu** zihinleri seyreltiyor. Adı
    *the Thirst Between Worlds* → **the Last Vessel**. Mekân bar değil,
    Strange'in aralara kurduğu **The Holdfast**.
  - **d10 Kadeh Kaderi → d10 Tortu Tablosu:** her satır artık *hangi ölü evrenin
    tortusunun bulaştığı*. Yeni girişler: **BAĞ** (kendini birine zincirler,
    o kazandıkça sen de kazanırsın), **MAHZEN GÖRÜSÜ** (Frightened + DM kulağına
    gerçek bir mekanik fısıldar), **AĞIR ZAMAN** (*Slow* etkisi), **RAF ÇÖKÜYOR**
    (d8 Çarpışan Evren, tüm oda), **SUNU** (10 atan hiçbir şey almaz — **seçtiği
    kişi alır**). **YANKI** yeniden yazıldı: Ebriax zihne girip aklından geçecek
    bir sonraki kelimeye dokunuyor, o kelime gece boyunca lanetli.
  - **"Masa Anlaşması" bölümü tamamen silindi.**
  - Terminoloji: Backwash → *Sediment Backlash* · Kork → Intoxication ·
    Masa Altı → *Sunken* · The Pour → *The Overflow* · Foam Imp → *Sediment Mote* ·
    Mantarı Tak → *Mührü Sür* · Kapanış Saati → *Taşma Saati* ·
    İçki Yeteneği → **Çapa Yeteneği** · **The Final Toast → The Concord**
    (on kişi aynı anda **aynı anıyı** tutar; masada bu bir kadeh kaldırmadır).
  - Dosya adları güncellendi: `01-drinking-rules.md` → `01-intoxication.md`,
    `04-the-bar.md` → `04-the-holdfast.md`. Tüm iç linkler ve anchor'lar
    doğrulandı, kırık link yok.

- **2026-08-14** — 🎲 **Tortu Tablosu ikinci geçiş: doz ayarı + 4 giriş değişti.**
  (`06-campaigns/oneshot-last-call/01-intoxication.md`, `06-tables.md`,
  `08-player-handout.md`)
  - **Doz dengelendi:** tablonun çoğu artık **yudum**. Shot sadece **4**'te
    (rolleyicinin seçtiği kişi) ve **8🅰**'da; **10** ise sayı bitene kadar içmek.
    "Doz — yudum mu, shot mu" tablosu eklendi.
  - **4 (Paralel Sen) silindi;** yerine **SUNU** geldi (eski 10): rolleyici
    hiçbir şey almaz, **seçtiği kişi +2 Intoxication** alır.
  - **8 (Ağır Zaman/Slowed) → SEÇİM:** bir evren tam bu soruyla bitti —
    🅰 *"ben taşırım"* (**sen +2 Intox**) veya 🅱 *"paylaşalım"*
    (**sen hariç odadaki herkes +1 Intox**). Ortası yok.
  - **9 (Raf Çöküyor) → AKINTI:** her şeyin tek yöne aktığı evren.
    **1d10 at**, senden **sağa doğru** o kadar yaratık +1 Intoxication.
  - **10 → GERİ SAYIM:** Ebriax'ın içindeki en kısa evren. **DM 1d6 atar (N)**;
    odadaki herkes +1 Intoxication ve **Ebriax 10 × N hasar alır** (yuttuğu bir
    sonu yeniden yaşıyor). Masada DM N'e kadar sayar, sayı boyunca herkes içer.
  - Çarpışan Evren d8 artık 9'dan tetiklenmiyor (Overfull, Lair 5, Yarık 6,
    Faz 3 "ÜÇ BİRDEN" kaldı).

- **2026-08-17** — 🪨 **LAST CALL sadeleştirildi: Intoxication sistemi tamamen
  kaldırıldı, geriye tek tablo kaldı.** (`06-campaigns/oneshot-last-call/`)
  - **Intoxication condition'ı (Lvl 1–6) silindi.** Sayaç yok, jeton yok,
    seviye yok. Oyuncular artık Intoxication kazanmıyor.
  - **Sediment Backlash'in DC 13 CON save'i kaldırıldı.** Ebriax'a hasar veren
    herkes **turda bir kez d10 atar** ve sonucu **otomatik uygular.**
  - **Tortu Tablosu (d10) korundu** — lore, sıralama ve masa katmanı aynen duruyor.
    Girişlerin "+1 Intoxication" satırı, tablonun zaten yazdığı masa sonucuna
    (yudum / shot / sayım) indirgendi.
  - Ebriax'ın tortu dağıtan tüm hamleleri tabloya bağlandı: *Sediment Lash*,
    *Aura of Seepage*, *The Common Dose*, *Split*, *Seep*, *Distribution* artık
    **d10 attırıyor**. *The Unmarked* ve *Distribution* hedefini **çeteleye**
    göre seçiyor (kim kaç kere zar attı).
  - **Silinenler:** Çarpışan Evren d8 tablosu · Lair Actions d6 tablosu ·
    *Overfull* trait'i · odadaki altı interaktif obje (Strange'in Çemberi, Çapa
    Taşları, Yankı Çanı, Kırık Ayna, Tortu Küresi, Yarık) · "Odanın Kalıntıları"
    eşyaları · tüm temizlenme ekonomisi (−Intoxication diye bir şey yok).
  - **Sunken artık sadece 0 HP'den** geliyor. Ölüm yasağı aynen duruyor.
  - **10 pregen'in Çapa Yeteneği yeniden tasarlandı.** Hiçbiri sonucu iptal
    edemiyor; dört kalıptan biri: *üstlen* (Bramblewick, Grunda, Malt, Melodia) ·
    *devret* (Vex, Silk) · *yeniden at* (Ka'Tsu, Thorn, ZZZT-9) · *güce çevir*
    (Fizzwick).
  - Tortu Zerresi'nin *Discharge*'ı **10 geçici HP** verdi (eskiden −1 Intox);
    *Smear* artık tortu bulaştırmıyor.
  - Faz 3'ün "ÜÇ BİRDEN"i **"HEPSİ BİRDEN"** oldu: odadaki herkes aynı anda d10 atar.
  - Dosya adı: `01-intoxication.md` → **`01-sediment.md`**, tüm linkler güncellendi.
- **2026-08-17** — 👁 **EBRIAX statblock'u sıfırdan yeniden yaratıldı — yeni form,
  2024 formatı, CR doğrulaması.** (`06-campaigns/oneshot-last-call/02-ebriax-statblock.md`)
  - **Yeni görsel kimlik:** yürüyen kaplı bir gövde değil — **tonozu tutan devasa
    bir ağız.** Halka halka içe kıvrık dişler, ortasında zifiri bir boşluk;
    siğilli dokungaçlar salonun tavanını baştan başa kavramış. Ebriax artık
    **yukarıda** ve salon çökmüyor çünkü o izin vermiyor.
  - **Format 2024/2025'e çevrildi** (`08-rules/statblocks/format-2024.md`):
    `Initiative` satırı, MOD/SAVE ability tablosu, tek `Immunities` satırı,
    `*Melee Attack Roll:*` kalıbı, `**CR** 14 (XP 11,500; PB +5)`,
    `Habitat:` / `Treasure:`. 2014 dili tamamen kalktı.
  - **CR doğrulaması dosyada gösterildi** (`cr-math.md §2`):
    D-CR 16 (HP 210 ×1.25 → CR 18; AC 17 vs 21 → −2) · O-CR 12 (3 tur DPR 74 →
    CR 11; attack +12 vs +9 → +1) · **CR = 14 ✅ hedefte.**
  - **Ebriax'ın artık dişi var:** Tendril ×3 (3d8+7, reach 30 ft),
    *The Descent* (60 ft koni, 6d10, DC 19), *Draw Down* (ağza doğru 20 ft çeker).
    Ölüm yasağı ve *Steady the Fallen* aynen duruyor — sertleşti, öldürücü olmadı.
  - **Hamle adları yenilendi:** *Sediment Lash* → **Tendril** · *The Overflow* →
    **The Descent** · *Aura of Seepage* → **Braced in the Vault** (ağzın altındaki
    30 ft, Faz 3'te 60) · *List* → **Haul** · *Backhand/Distribution/Settle* →
    kalktı, yerine **Draw Down** geldi. Tüm dosyalarda güncellendi.
  - **Raid ayarı ayrıldı:** CR 14 tek parti içindir; on kişilik masa için sadece
    HP havuzu ×6 olup üç faza bölünüyor (500/400/300). Diğer statlar değişmiyor.
  - **Sediment Mote** da 2024 formatına çevrildi (CR 1/4, tam ability tablosu).
  - Oda yeni forma göre hizalandı: tonoz + iki sıra tırmanılabilir sütun,
    **iki katlı harita** (tavan planı + zemin planı), Faz 2/3 geçiş metinleri ve
    finalin iniş sahnesi yeniden yazıldı.
  - Statblock'a **opsiyonel** "Contained Mass" koruması korundu.

## Notion Aktarımı

- **2026-08-10** — **Notion export'u repoya aktarıldı** (81 sayfa, 91 görsel).
  - Ager'in gerçek adı **Aeltharys**, okyanusu [Thalassar Yayılımı](../03-ager/oceans-and-seas/README.md),
    yaşanabilir kıtası **Elandor Vael / Sıkışık Kıyılar** kayda geçti.
  - **Charaxis bir uydu değil, ikiz dünya** olarak düzeltildi (`Shae'Khar`, = Selûne).
    Sistem: [The Syzygy of Vael](../03-ager/cosmic-position/README.md). Vael'Toruun kuşağı, Meridyen Yolu, 4 şehir,
    madenler ve **moondust** eklendi.
  - Karsovia krallığı, Ravonia metropolü (4 kanat), Wheatrest, Nethryn,
    Thornhold Kalesi `03-ager/` altına yerleştirildi.
  - 3 kampanya kuruldu: **Chains of the Burning Compact** (aktif),
    [Oneshot — Clathropos](../06-campaigns/oneshot-clathropos/README.md), [New Campaign](../06-campaigns/new-campaign/00-overview.md).
  - Major NPC eklendi: [Bel](../05-characters/npcs/major/bel/README.md), [Marcus Hale](../05-characters/npcs/major/marcus-hale/README.md). Minor NPC dizini çıkarıldı.
  - Homebrew lore: **The Unwoven**, **Ordo Cognitae / Auditum**, moondust.
  - Haritalar: `world-ager-aeltharys.jpg`, `city-ravonia.jpg`.
  - `open-questions.md` güncellendi: 7 soru kapandı, 30+ yeni soru açıldı.
