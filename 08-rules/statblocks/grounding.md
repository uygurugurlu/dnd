---
type: meta
title: Statsheet Dünya Bağı
canon: homebrew
status: complete
tags: [rules, statblock, npc, worldbuilding, ager]
updated: 2026-08-17
---

# Dünya Bağı — statsheet'in yarısı

Bir statblock sadece sayı değildir. **Ager'de duran** bir statblock, masaya
oturduğunda DM'e şunu vermelidir: *bu kim, nereden geliyor, kimin adamı, neden
burada, ve parti onunla karşılaşırsa ne olur.*

Sayılar [cr-math.md](cr-math.md)'de. Bu dosya **etrafındaki her şey**.

---

## 1. NPC statsheet'inde zorunlu bölümler

| # | Bölüm | İçerik |
|---|---|---|
| 1 | **Tek cümle** | Blockquote. "Bu kişiyi bir cümlede tanımla." |
| 2 | **Kimlik Kartı** | Tam ad/unvan, tür, yaş, nerede bulunur, kime bağlı, CR |
| 3 | **Görünüş** | 3–4 cümle. **Bir tane akılda kalıcı detay zorunlu** (yara, koku, ses, eşya) |
| 4 | **Ses ve tavır** | Nasıl konuşur, hangi kelimeyi çok kullanır, ne zaman susar |
| 5 | **Nerede yaşar / bulunur** | 🔗 Yer dosyasına link. Haritada yoksa uydurma (AGENTS.md §4) |
| 6 | **Kim için çalışır** | 🔗 Faksiyon dosyasına link. Yoksa "bağımsız" yaz, boş bırakma |
| 7 | **İlişkiler** | Tablo. 🔗 Var olan NPC'lere link. En az 2 satır |
| 8 | **Geçmiş** | Kronolojik, **timeline'a çivili** (AGENTS.md §2). Mürai savaşı, kuyruklu yıldızlar, Spellplague |
| 9 | **Amaçlar** | Görünen amaç / gerçek amaç ayrı sütun. Gerçek amaç `[DM ONLY]` |
| 10 | **Statblock** | Tam MM 2024 formatı ([format-2024.md](format-2024.md)) |
| 11 | **Eşyalar** | Her sihirli eşya: rarity, resmî kaynak, **Ager'de nasıl eline geçti** |
| 12 | **Taktik** | Savaşta ne yapar, kimi hedefler, ne zaman kaçar, ne zaman teslim olur |
| 13 | **Sırlar** | `> **[DM ONLY]**` |
| 14 | **Kancalar** | `> **[HOOK]**` — en az bir tane |

## 2. Yaratık statsheet'inde zorunlu bölümler

| # | Bölüm | İçerik |
|---|---|---|
| 1 | **Tek cümle** | Blockquote |
| 2 | **Görünüş** | Masada okunacak tarif. Duyusal (koku, ses, doku) |
| 3 | **Habitat** | 🔗 Ager bölgesine link + resmî habitat etiketi |
| 4 | **Origin** | Nereden geldi: FR canon mu, Charaxis mi, Spellplague artığı mı, Mürai savaşı yaratığı mı? `canon:` alanıyla tutarlı olmalı |
| 5 | **Alignment gerekçesi** | Neden bu alignment? SRD: alignment bir *öneri*dir, dosyada gerekçesi olur |
| 6 | **Davranış / Ekoloji** | Avlanma, sürü mü tek mi, beslenme, üreme, doğal düşman |
| 7 | **Kültürel yer** | Ager halkları bunu nasıl bilir? Adı ne? Efsanesi var mı? Avlanır mı? |
| 8 | **Lore kontrolleri** | DC 10 / 15 / 20 tablosu — parti ne öğrenir |
| 9 | **Statblock** | Tam MM 2024 formatı |
| 10 | **Habitat / Treasure satırı** | Statblock'un altında, resmî etiketlerle |
| 11 | **Ganimet / malzeme** | Derisi, dişi, kanı, özü ne işe yarar; kaç gp |
| 12 | **Nerede karşılaşılır** | Hangi bölge, hangi kampanya, hangi seviye |
| 13 | **Sırlar / Kancalar** | `[DM ONLY]` · `[HOOK]` |

---

## 3. Sert kurallar

### 🔗 Link zorunluluğu
Metinde geçen **her** yer, faksiyon ve NPC adı repo dosyasına link olmalı.
Dosya yoksa iki seçenek var:
1. O dosyayı da aç (küçük stub yeter), **ya da**
2. `00-meta/open-questions.md`'ye satır at ve metinde `> **[AÇIK SORU]**` bırak.

**Link vermeden isim uydurmak yasak.** Kırık link bırakmak da yasak.

### 🗺️ Harita kanondur
Yeni bir yer adı gerekiyorsa **önce**
[world-map.md](../../03-ager/00-overview/world-map.md)'ye bak. Haritadaki isim,
uydurulan isme her zaman tercih edilir (AGENTS.md §4).

### 📅 Zamanı doğrula
NPC'nin geçmişi **1495 DR**'ye (New Campaign'in şimdisi) göre yazılır.
Kritik çapa noktaları:

| Yıl | Olay | NPC'ye etkisi |
|---|---|---|
| 1385 DR | Spellplague; Vhaelureth çöker | Yaşlı NPC'lerin dedelerinin hikâyesi |
| 1492 DR | Karsovia prensi turnuvada öldürülür → **Mürai savaşı** başlar | 3 yıllık savaş geçmişi |
| 1494 DR | Kuyruklu yıldızlar; gök kızarır; **tanrılar cevap vermeyi keser** | ⚠️ Aşağıya bak |
| 1495 DR | Mürai savaşı biter. **Ravonia yenilir, orduları dağıtılır** | Gazi NPC = dağıtılmış ordudan |
| 1495 DR | New Campaign'in şimdisi; barış aylık | Yaralar açık |

> ⚠️ **Tanrılar bir yıldır sessiz.** 1495'te geçen her **ilahi kaynaklı** NPC
> (paladin, cleric, warlock, druid) bu gerçekle yüzleşmiş olmalıdır:
> büyüsü hâlâ çalışıyor mu, kim cevap veriyor, inancını sürdürüyor mu?
> Bunu yazmadan ilahi bir NPC bırakma. Bu, **New Campaign'in ana konusudur.**

Kampanya ayrımı: Chains of the Burning Compact = **1492**, New Campaign = **1495**.
NPC hangisine aitse geçmişi ona göre yazılır (AGENTS.md §3).

### ⚔️ Mürai savaşı gazisi yazarken
- **Hangi tarafta?** Ravonia (yenilen) mi, Karsovia (kazanan) mı?
- **Hangi cephede?** Lover's Cut geçişi, Thornhold, Urkhal Ovaları, Northcurrent?
- **Ordusu dağıtıldıysa** şimdi ne yapıyor: çiftçi mi, paralı asker mi, haydut mu?
- Ravonialı bir gazi 1495'te **yenilmiş tarafın adamıdır** — gururu yaralı,
  maaşı kesik, silahı muhtemelen elinden alınmış.

### 🚫 Yapılmayacaklar
- Kampanyada henüz oynanmamış olayı NPC dosyasına yazmak.
- Faerûn coğrafyasından yer adı taşımak (Waterdeep, Baldur's Gate yok).
- NPC'nin gerçek amacını / ihanetini genel bölüme yazmak — `[DM ONLY]`'ye gider.
- FR lore detayını uydurmak — `open-questions.md`'ye soru olarak gider.
- Statblock'u Türkçeleştirmek.

---

## 4. Dosya nereye gider

| Ne | Nereye | Ek adım |
|---|---|---|
| Önemli NPC (tekrar dönülecek) | `05-characters/npcs/major/<slug>/README.md` + `statblock.md` | Klasör README'si zorunlu |
| Sıradan NPC | `05-characters/npcs/minor/<slug>.md` (tek dosya, statblock içinde) | — |
| Ager'e özgü yaratık | `02-lore/bestiary/<slug>.md` + `08-rules/homebrew/monsters/<slug>.md` | Bestiary README tablosuna satır |
| Standart MM yaratığının Ager varyantı | `02-lore/bestiary/<slug>.md` | `canon: adapted`, farkları yaz |
| Homebrew eşya | `08-rules/homebrew/items/<slug>.md` | Sadece açıkça istenirse |

**Her yeni NPC'den sonra:** `09-index/who-is-who.md`'ye satır.
**Her yeni yaratıktan sonra:** `02-lore/bestiary/README.md` tablosuna satır.
**Her ikisinde de:** bağlı olduğu yer dosyasından geri link + `00-meta/changelog.md`.

Ölçek terfisi (CLAUDE.md §4): minor NPC dosyası ~200 satırı geçerse ya da masada
tekrar tekrar dönülen biri hâline gelirse → `major/<slug>/` klasörüne terfi eder,
statblock ayrı dosyaya çıkar, **eski yola link veren her dosya güncellenir.**
