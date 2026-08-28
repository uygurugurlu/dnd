---
name: statblock
description: Ager evrenine bir NPC, düşman, yaratık ya da canavar eklerken kullanılır — D&D 5e 2024 (5.5e) / Monster Manual 2025 formatında dengeli, kural uyumlu, dünyaya bağlı bir statsheet üretir. "CR 8 paladin yarat", "Wheatrest'e bir demirci ekle", "bu bölgeye bir canavar", "şu NPC'nin statblock'unu çıkar", "create an NPC/monster/statblock", "add a villain/guard/boss" gibi her istekte devreye girer. NPC yaratılıyorsa statblock ZORUNLUDUR.
---

# Statblock Üretimi — Ager

Bu skill iki şeyi aynı anda üretir:
**(A)** 2024 kurallarına uygun, CR'si doğrulanmış bir **statblock**,
**(B)** Ager'e çivilenmiş bir **dünya bağı** (kim, nerede, kimin adamı, ne istiyor).

İkisi olmadan iş bitmiş sayılmaz. Sadece lore yazıp statblock atlamak **yasaktır**.

---

## Adım 0 — Referansları oku

Şu dosyaları **şimdi** oku (hepsini, atlamadan):

| Dosya | Ne için |
|---|---|
| `08-rules/statblocks/format-2024.md` | Satır sırası ve kelime kalıpları |
| `08-rules/statblocks/cr-math.md` | Taban statlar ve CR doğrulaması |
| `08-rules/statblocks/grounding.md` | Zorunlu bölümler, tarih çapaları, link kuralı |

Sınıflı bir NPC ise ayrıca `08-rules/statblocks/npc-kits.md`.
Sihirli eşya varsa ayrıca `08-rules/statblocks/magic-items.md`.

Örnek çıktı: `.claude/skills/statblock/references/worked-example.md` —
istenen kalite çıtası budur, ona bak.

---

## Adım 1 — İsteği çöz

İstekten şunları çıkar. Belirtilmeyeni **sor değil, makul varsay ve dosyada yaz**
(kritik belirsizlik dışında):

- [ ] **CR** mi, **seviye** mi verilmiş? "Level 8" ≠ "CR 8" — çeviri tablosu `cr-math.md §7`.
- [ ] Arketip / sınıf (paladin, wizard, haydut, canavar…)
- [ ] Silah, zırh, kalkan — verilen ekipman
- [ ] Sihirli eşya: kaç tane, hangi rarity
- [ ] Nerede yaşar / bulunur → **repo'da o yerin dosyasını aç ve oku**
- [ ] Geçmiş kancaları (savaş gazisi, sürgün, tapınak…) → **timeline'ı doğrula**
- [ ] Hangi kampanya: 1492 CotBC mi, **1495 New Campaign** mi? (varsayılan: New Campaign)

**Yer verilmişse o yerin dosyasını okumadan yazma.** Wheatrest deniyorsa
`03-ager/continents/ravonia/villages/wheatrest.md` okunur; oradaki muhtar, demirci,
aileler, mevcut olaylar NPC'ye bağlanır. Bu adımın atlanması en sık kalite kaybıdır.

---

## Adım 2 — Statları kur

1. `cr-math.md §1` tablosundan hedef CR'nin AC / HP / attack / DC / DPR değerlerini al.
2. **Humanoid NPC ise HP'yi benchmark'ın %60–75'ine indir**, farkı DPR ve AC ile kapat
   (`cr-math.md §4`, "Humanoid NPC deseni"). Canavar ise benchmark HP'sinde kal.
3. Ability score'ları konsepte göre dağıt; attack bonusu ve save DC'yi
   **hesapla** (`ability mod + PB`, `8 + PB + ability mod`), tablodan kopyalama.
4. PB'yi CR'den al — pazarlıksız (`format-2024.md §2`).
5. Sınıflıysa `npc-kits.md`'ten **3–5 özellik** seç. Fazlasını yazma.
6. Hasarı DPR bütçesine oturt: silah zarını büyütme, **rider ekle**
   (`plus 1d8 Radiant damage` gibi).

---

## Adım 3 — Eşyaları ver

- **Resmî eşya kullan.** Homebrew sadece açıkça istenirse (`magic-items.md §1`).
- Rarity NPC'nin gücüne oturuyor mu (`magic-items.md §2`); oturmuyorsa **gerekçesini yaz**.
- Attune gereken eşya **≤ 3**.
- Sınıf şartlı eşya varsa creature type tag'i doğru mu: `Humanoid (Paladin)`.
- Bonusları AC / attack / damage satırlarına **işle** ve `Gear` satırına yaz.
- Eşyanın **Ager'de nasıl eline geçtiğini** yaz.
- ⚠️ Eşyadan sonra kaynağı doğrula: rarity/metin konusunda emin değilsen **ara**
  ve bulduğun URL'yi `sources:`e yaz.

---

## Adım 4 — CR'yi DOĞRULA (atlanmaz)

`cr-math.md §2`'yi uygula ve **hesabı dosyada göster**:

```
D-CR: effective HP <n> (<çarpanlar>) → tablo CR <x>; AC <n> vs beklenen <n> → <düzeltme> = <D-CR>
O-CR: 3 tur DPR (<R1>+<R2>+<R3>)/3 = <n> → tablo CR <y>; attack +<n> vs beklenen +<n> → <düzeltme> = <O-CR>
CR = (<D-CR> + <O-CR>) / 2 = <sonuç>   [hedef: <hedef CR>]
```

Sonuç hedeften **±1 dışındaysa statları düzelt**, CR etiketini değil.
Bu blok statsheet'te `## CR Doğrulaması` başlığı altında kalır — sonradan
kontrol edilebilsin diye.

---

## Adım 5 — Dünya bağını yaz

`grounding.md §1` (NPC) ya da `§2` (yaratık) bölümlerinin **hepsini** doldur.
Kısayol yok. Özellikle:

- Metindeki **her** yer/faksiyon/kişi adı repo dosyasına **link**. Dosya yoksa
  ya stub aç ya `00-meta/open-questions.md`'ye soru at.
- Görünüşte **bir akılda kalıcı detay** olsun.
- Geçmiş 1495 DR'ye göre çivili (`grounding.md §3` tarih tablosu).
- ⚠️ **İlahi kaynaklı NPC (paladin/cleric/warlock/druid) ise:** 1494'ten beri
  tanrılar cevap vermiyor. Bu NPC bununla nasıl yaşıyor? Yazmadan bırakma.
- Taktik bölümü: kimi hedefler, ne zaman kaçar.
- En az bir `> **[HOOK]**` ve bir `> **[DM ONLY]**`.

---

## Adım 6 — Dosyala ve indeksle

Yerleşim (`grounding.md §4`):

| Ne | Nereye |
|---|---|
| Önemli NPC | `05-characters/npcs/major/<slug>/README.md` + `statblock.md` |
| Sıradan NPC | `05-characters/npcs/minor/<slug>.md` (statblock içinde) |
| Yaratık | `02-lore/bestiary/<slug>.md` + `08-rules/homebrew/monsters/<slug>.md` |

Şablon: `00-meta/templates/npc-statsheet.md` · `statblock.md` · `creature.md`.
Dosya adı `kebab-case`, **ASCII** (Türkçe karakter yok — `mürai` → `murai`).

Sonra **zorunlu** indeks güncellemeleri:

- [ ] NPC → `09-index/who-is-who.md`'ye satır
- [ ] Yaratık → `02-lore/bestiary/README.md` tablosuna satır
- [ ] Bağlı olduğu yer dosyasından **geri link**
- [ ] `00-meta/changelog.md`'ye satır
- [ ] Yeni açık soru varsa `00-meta/open-questions.md`

---

## Çıkış kontrol listesi

Teslim etmeden önce hepsi ✅ olmalı:

**Format**
- [ ] `**Initiative** +n (10+n)` satırı var ve aritmetiği doğru
- [ ] `*Melee Attack Roll:* +n, reach 5 ft. *Hit:* …` kalıbı (2014 dili yok)
- [ ] Ability tablosu MOD + SAVE sütunlu
- [ ] `Immunities` tek satır, hasar/condition arasında `;`
- [ ] `**CR** n (XP n; PB +n)` — XP ve PB tablodan doğru
- [ ] Hasar tipleri büyük harf (`Fire damage`), spell'ler *italik*
- [ ] Spell slot yok; `At Will:` / `X/Day Each:` var
- [ ] `Gear` satırı ekipmanla uyumlu
- [ ] `Habitat:` / `Treasure:` satırı var
- [ ] HP aritmetiği tutuyor: `XdY + Z` ortalaması yazılan sayıya eşit

**Denge**
- [ ] CR doğrulaması dosyada gösterildi, hedeften ±1 içinde
- [ ] Aynı anda her stat yükseltilmedi
- [ ] CR 3+ ise Multiattack var
- [ ] Menzilli bir seçenek var
- [ ] 3–5 aksiyon; masada okunmayan satır yok

**Dünya**
- [ ] Frontmatter tam (`type`, `name`, `canon`, `status`, `tags`, `updated`, `sources`)
- [ ] Her isim linkli, kırık link yok
- [ ] Görünüş + ses + taktik + ilişkiler yazıldı
- [ ] Tarihler timeline'la tutarlı; ilahi NPC ise "sessiz tanrılar" ele alındı
- [ ] `[DM ONLY]` ve `[HOOK]` var
- [ ] İndeksler güncellendi

**Eşya**
- [ ] Resmî; kaynak `sources:`te
- [ ] Attunement ≤ 3, sınıf tag'i uygun
- [ ] Bonuslar sayılara işlendi
- [ ] Eşya sonrası CR yeniden hesaplandı
