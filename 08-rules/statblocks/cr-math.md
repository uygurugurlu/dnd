---
type: meta
title: CR Matematiği ve Denge
canon: adapted
status: complete
tags: [rules, statblock, challenge-rating, balance, 2024]
sources:
  - "System Reference Document 5.2 (CC-BY-4.0), s. 251–254 (XP/PB by CR, stat block kuralları)"
  - "Sly Flourish — The Lazy GM's 5e Monster Builder Resource Document (CC-BY-4.0): https://slyflourish.com/lazy_5e_monster_building_resource_document.html"
  - "Blog of Holding — 2024 Monster Manual on a Business Card: https://www.blogofholding.com/?p=8469"
  - "Blog of Holding — offensive and defensive adjustments in the 2024 MM: https://www.blogofholding.com/?p=8548"
  - "Alphastream — How to Create a Monster for Revised D&D 5E 2024: https://alphastream.org/index.php/2025/03/26/how-to-create-a-monster-for-revised-dd-5e-2024/"
updated: 2026-08-17
---

# CR Matematiği — 2024 için yeniden kurulmuş

## 0. Neden bu dosya var

**2024 DMG'de monster yaratma tablosu YOKTUR.** 2014 DMG s. 274–275'teki
"Monster Statistics by Challenge Rating" tablosu 2024 baskısına alınmadı; yeni DMG
(s. 56–57, "Creating a Creature") sadece *"mevcut bir yaratığı al ve değiştir"*
diyor. SRD 5.2 de sadece XP/PB tablolarını verir, denge tablosunu vermez.

Bu yüzden burada kullandığımız tablo **iki kaynağın birleşimidir** ve
`canon: adapted`'tir:

1. **Forge of Foes / Lazy GM tablosu** (CC-BY-4.0) — satır satır sayılar.
2. **2024 Monster Manual'in ampirik regresyonu** (Blog of Holding) — doğrulama:
   HP ≈ `15 + 15×CR`, DPR ≈ `7.5×CR`, AC 2014'e göre **+1**, attack bonus ve save DC
   2014 ile aynı.

Sayılar **hedef**tir, yasa değil. Nihai hakem her zaman §4'teki *gerçek statblock
çapaları*dır.

---

## 1. Referans tablo

| CR | AC | HP | Attack | Save DC | DPR | Saldırı sayısı | PB |
|---:|---:|---:|---:|---:|---:|:---:|---:|
| 0 | 10 | 3 | +2 | 10 | 2 | 1 | +2 |
| 1/8 | 11 | 9 | +3 | 11 | 3 | 1 | +2 |
| 1/4 | 11 | 13 | +3 | 11 | 5 | 1 | +2 |
| 1/2 | 12 | 22 | +4 | 12 | 8 | 2 | +2 |
| 1 | 12 | 33 | +5 | 12 | 12 | 2 | +2 |
| 2 | 13 | 45 | +5 | 13 | 17 | 2 | +2 |
| 3 | 13 | 65 | +5 | 13 | 23 | 2 | +2 |
| 4 | 14 | 84 | +6 | 14 | 28 | 2 | +2 |
| 5 | 15 | 95 | +7 | 15 | 35 | 3 | +3 |
| 6 | 15 | 112 | +7 | 15 | 41 | 3 | +3 |
| 7 | 15 | 130 | +7 | 15 | 47 | 3 | +3 |
| 8 | 15 | 136 | +7 | 15 | 53 | 3 | +3 |
| 9 | 16 | 145 | +8 | 16 | 59 | 3 | +4 |
| 10 | 17 | 155 | +9 | 17 | 65 | 4 | +4 |
| 11 | 17 | 165 | +9 | 17 | 71 | 4 | +4 |
| 12 | 17 | 175 | +9 | 17 | 77 | 4 | +4 |
| 13 | 18 | 184 | +10 | 18 | 83 | 4 | +5 |
| 14 | 19 | 196 | +11 | 19 | 89 | 4 | +5 |
| 15 | 19 | 210 | +11 | 19 | 95 | 5 | +5 |
| 16 | 19 | 229 | +11 | 19 | 101 | 5 | +5 |
| 17 | 20 | 246 | +12 | 20 | 107 | 5 | +6 |
| 18 | 21 | 266 | +13 | 21 | 113 | 5 | +6 |
| 19 | 21 | 285 | +13 | 21 | 119 | 5 | +6 |
| 20 | 21 | 300 | +13 | 21 | 132 | 5 | +6 |
| 21 | 22 | 325 | +14 | 22 | 150 | 5 | +7 |
| 22 | 23 | 350 | +15 | 23 | 168 | 5 | +7 |
| 23 | 23 | 375 | +15 | 23 | 186 | 5 | +7 |
| 24 | 23 | 400 | +15 | 23 | 204 | 5 | +7 |
| 25 | 24 | 430 | +16 | 24 | 222 | 5 | +8 |
| 26 | 25 | 460 | +17 | 25 | 240 | 5 | +8 |
| 27 | 25 | 490 | +17 | 25 | 258 | 5 | +8 |
| 28 | 25 | 540 | +17 | 25 | 276 | 5 | +8 |
| 29 | 26 | 600 | +18 | 26 | 294 | 5 | +9 |
| 30 | 27 | 666 | +19 | 27 | 312 | 5 | +9 |

> **PB sütunu tablonun kendisinden değil, SRD'den gelir ve pazarlıksızdır.**
> Attack bonus ve save DC, PB + ability mod'dan **hesaplanır**; tablodaki sayı
> sadece "doğru yerde miyim" kontrolüdür.

**Hızlı formüller** (CR 1–20 arası, kafadan hesap için):

```
AC       = 12 + CR/2
HP       = 15 × CR + 15
Attack   = 4 + CR/2          (ability mod + PB ile örtüşmeli)
Save DC  = 12 + CR/2         ( = 8 + PB + ability mod )
DPR      = 7 × CR + 5
```

⚠️ **CR 15+ uyarısı:** Tablonun DPR sütunu, yayımlanmış MM yaratıklarının
*tek hedefe* verdiği ham hasarın üzerindedir; çünkü üst CR'lerde canavarlar AoE ve
Legendary Action'a yaslanır. CR 16–24 bandında **90–120 ham tek-hedef DPR normaldir**;
farkı alan etkileriyle kapat (§3).

---

## 2. CR doğrulama — Defensive / Offensive CR

2014 DMG'nin iki eksenli yöntemi hâlâ en iyi denetim aracıdır ve 2024 MM
sayılarını ±1 içinde yeniden üretir (§5'teki doğrulamalara bak).

### Adım 1 — Defensive CR

1. **Effective HP** hesapla (§3 çarpanlarıyla).
2. Tablodan bu HP'nin denk geldiği CR'yi bul.
3. **AC düzeltmesi:** yaratığın AC'si, o CR'nin beklenen AC'sinden ≥2 puan
   sapıyorsa, **her 2 puan için CR'yi ±1** kaydır.

### Adım 2 — Offensive CR

1. **3 tur ortalaması DPR** hesapla: en güçlü açılışı yapan, recharge'ını
   kullanan, nova'sını harcayan bir yaratık varsay. `(R1 + R2 + R3) / 3`.
   (SRD s. 252, "Running a Monster": sınırlı güçlü yetenekler **mümkün olan en
   erken ve en sık** kullanılır — hesap da böyle yapılır.)
2. Tablodan bu DPR'nin denk geldiği CR'yi bul.
3. **Attack/DC düzeltmesi:** attack bonus (ya da save-ağırlıklı yaratıkta save DC)
   o CR'nin beklenenden ≥2 sapıyorsa, **her 2 puan için CR'yi ±1** kaydır.

### Adım 3

```
CR = (Defensive CR + Offensive CR) / 2      → en yakın tam CR'ye yuvarla
```

Sonuç hedeften ±1 sapıyorsa kabul et. ±2 ve üzeriyse **statları düzelt**, CR'yi
değil.

---

## 3. Düzeltme çarpanları

### Effective HP (savunma)

| Özellik | Çarpan |
|---|---|
| 1–2 hasar tipine Resistance | ×1.1 |
| 3+ hasar tipine Resistance | ×1.25 |
| Nonmagical B/P/S'e Resistance | ×1.5 (CR 1–10) · ×1.25 (CR 11–16) · ×1.0 (CR 17+) |
| 1–2 hasar tipine Immunity | ×1.15 |
| 3+ hasar tipine Immunity | ×1.25 (CR 15+ için tavan ×1.15) |
| Magic Resistance | ×1.15 |
| Legendary Resistance (3/Day) | ×1.25 |
| Legendary Resistance (4–5/Day) | ×1.35 |
| Evasion, Parry/Riposte, AC yükselten Reaction | ×1.1 |
| Regeneration X/tur | +(X × 3) HP |
| Hasardan tamamen kaçma (possession, incorporeal transfer) | ×0.67 |
| 2+ save proficiency | ×1.05 |

> 2024 MM'in ampirik verisi (Blog of Holding) bu çarpanların **2014'e göre çok daha
> hafif** uygulandığını gösteriyor: dirençli yaratıkların HP'si emsallerinden
> ancak ~10 puan düşük. Yani çarpanları **üst üste bindirme**; en büyük iki
> tanesini uygula, gerisini yut.

### Effective DPR (saldırı)

| Özellik | Düzeltme |
|---|---|
| Alan etkisi (2+ hedefe vurması beklenen) | Hasarı **×2** say (partiye göre ×3'e kadar) |
| Advantage üreten trait (Pack Tactics vb.) | Effective attack bonus **+2** |
| Recharge 5–6 yetenek | 3 turluk ortalamaya doğal olarak girer (~2 kullanım / 3 tur) |
| 1/Day nova | 3 tura böl |
| Koşullu hasar (Assassinate, ilk tur, Bloodied hedefe) | **%50** say |
| Legendary Actions | Beklenen DPR'yi **%25** yukarı it (ya da toplam DPR'nin içinde say) |
| Isabet etmesi imkânsız derecede yüksek AC'ye vuruyorsa | düzeltme yok — ham hasar kullanılır |

---

## 4. Gerçek çapa statblock'lar (SRD 5.2)

Matematikten önce **buraya bak**. Yeni yaratık, aynı CR'deki resmî bir statblock'a
"kabaca aynı ağırlıkta" hissettirmeli.

| Yaratık | CR | AC | HP | Attack | Ham DPR | Not |
|---|---:|---:|---:|---:|---:|---|
| Kobold Warrior | 1/8 | 14 | 7 | +4 | 4 | Pack Tactics |
| Pirate | 1 | 14 | 33 | +5 | 10 | 2 saldırı |
| Knight | 3 | 18 | 52 | +5 | 28 | Yüksek AC, düşük HP, Parry |
| Lamia | 4 | 13 | 97 | +5 | 14 + spell | Düşük AC, yüksek HP |
| Gladiator | 5 | 16 | 112 | +7 | 33 | Parry (+3 AC) |
| Mage | 6 | 15 | 81 | +6 (DC 15) | 48 + Fireball | Cam top: HP düşük, nova yüksek |
| Pirate Captain | 6 | 17 | 84 | +7 | 39–45 | Riposte, Charm |
| **Assassin** | **8** | **16** | **97** | **+7** | **72** | HP benchmark'ın %71'i, DPR %136'sı |
| Glabrezu | 9 | 17 | 189 | +9 (DC 16) | 47 | Magic Resistance |
| Archmage | 12 | 17 | 170 | +9 (DC 17) | 108 | 4 saldırı, Magic Resistance |
| Planetar | 16 | 19 | 262 | +12 (DC 20) | 96 | |
| Iron Golem | 16 | 20 | 252 | +12 (DC 18) | ~63 | Immunity yığını |
| Pit Fiend | 20 | 21 | 337 | +14 (DC 21) | 92 | Legendary Resistance 4/Day |
| Lich | 21 | 20 | 315 | +12 (DC 20) | ~110 | Legendary Actions |
| Kraken | 23 | 18 | 481 | +17 (DC 23) | ~100 | Düşük AC, devasa HP |
| Ancient Red Dragon | 24 | 22 | 507 | +17 (DC 24) | ~120 | Breath + Legendary |

### 🔑 Humanoid NPC deseni — en önemli çıkarım

Resmî **humanoid NPC** statblock'ları, canavar benchmark'ının **HP'sinin %60–75'i**
kadar HP taşır; farkı **daha yüksek DPR ve/veya AC** ile kapatır.

- Assassin CR 8: HP 97 (benchmark 136 → %71), DPR 72 (benchmark 53 → %136).
- Mage CR 6: HP 81 (benchmark 112 → %72), nova DPR ~58 (benchmark 41 → %141).
- Knight CR 3: HP 52 (benchmark 65 → %80), ama AC 18 (benchmark 13 → +5).

**Bir NPC yaparken canavar HP'si verme.** İnsan bedeni benchmark HP'sini taşımaz;
tehdit gücü ekipmandan, saldırı sayısından ve taktik yeteneklerden gelir.

---

## 5. Yöntemin doğrulaması

Yöntem, resmî statblock'lara geri uygulandığında doğru CR'yi üretiyor mu?

**Assassin (gerçek CR 8):**
- HP 97, Evasion ×1.1 → 107 → tablo CR 6 (112). AC 16 vs beklenen 15 → fark 1, düzeltme yok. **D-CR 6.**
- DPR 3 × (7 + 17) = 72 → tablo CR 11 (71). Attack +7 vs beklenen +9 → −2 → **−1 CR**. **O-CR 10.**
- (6 + 10) / 2 = **8** ✅

**Gladiator (gerçek CR 5):**
- HP 112, Parry ×1.1 → 123 → tablo CR 6–7. **D-CR 6.**
- DPR 3 × 11 = 33 → tablo CR 5 (35). Attack +7 = beklenen +7. **O-CR 5.**
- (6 + 5) / 2 = 5.5 → **5** ✅

**Mage (gerçek CR 6):**
- HP 81 → tablo CR 4 (84). AC 15 vs beklenen 14 → düzeltme yok. **D-CR 4.**
- 3 tur: *Fireball* (level 4, 9d6 = 31, ×2 hedef = 62), *Fireball* 62, 3× Arcane Burst 48 → (62+62+48)/3 = 57 → tablo CR 8–9. DC 15 vs beklenen 16 → düzeltme yok. **O-CR 8.**
- (4 + 8) / 2 = **6** ✅

**Knight (gerçek CR 3):**
- HP 52, Parry ×1.1 → 57 → tablo CR 2–3. AC 18 vs beklenen 13 → +5 → **+2 CR**. **D-CR 4.**
- DPR 2 × 14 = 28 → tablo CR 4. Attack +5 vs beklenen +6 → düzeltme yok. **O-CR 4.**
- (4 + 4) / 2 = 4 → gerçek 3. **±1 sapma, kabul.**

---

## 6. Tasarım kuralları (matematikten sonra gelen kısım)

1. **Aynı anda her statı yükseltme.** (Blog of Holding'in tek net bulgusu:)
   *"Never increase all statistics simultaneously — that just creates a
   higher-CR monster."* Bir eksende yükselttiysen başka bir eksende indir.
2. **Hikâyeye göre ±%10 sapma normaldir, ±%30 nadir ve gerekçeli olmalı.**
3. **CR 3+ yaratıklar Multiattack alır.** Tek büyük vuruş, oyuncu turunu tek
   iskayla boşa çıkarır; iki-üç orta vuruş daha iyi bir masa deneyimidir.
4. **3–5 aksiyon yeterli.** Fazlası masada okunmaz.
5. **Menzilli bir seçenek koy.** Uçan/kaçan partiye karşı çaresiz kalan boss sıkıcıdır.
6. **Nova'yı 3 tura yay.** `Recharge 5–6` bunun için var.
7. **Yüksek AC + düşük HP** = "vurulması zor ama devrilince biter" hissi.
   **Düşük AC + yüksek HP** = "her vuruş isabet ediyor ama düşmüyor" hissi.
   İkisi de geçerli; hangisini istediğine karar ver, ortada kalma.
8. **Legendary Action sadece boss'a.** Verdiysen DPR bütçesini %25 artır ve
   en az bir hareket seçeneği koy.
9. **Save DC tek tut.** Yaratığın bütün etkileri aynı DC'yi kullanırsa masa hızlanır.
10. **Uçmak CR'yi yükseltmez** — parti onu yere indirebiliyorsa.

---

## 7. Sınıf seviyesi ↔ CR (kaba çeviri)

Kullanıcı "level 8 paladin" derse ile "CR 8 paladin" derse **aynı şeyi istemez**.

| Kurgusal seviye | Yaklaşık NPC CR |
|---|---|
| 3 | 1 |
| 5 | 3 |
| 8 | 5–6 |
| 11 | 8 |
| 14 | 10–11 |
| 17 | 13–14 |
| 20 | 16–17 |

Kabaca: **CR ≈ seviye − 2** (seviye 3–10), **CR ≈ seviye × 0.75** (seviye 11–20).
Çapa: SRD Mage CR 6 kurguda ~9. seviye wizard; Archmage CR 12 kurguda 17+.

**İstek "CR n" içeriyorsa CR'yi hedefle; "level n" içeriyorsa bu tablodan çevir ve
dosyada hangi seviyeye denk geldiğini yaz.**
