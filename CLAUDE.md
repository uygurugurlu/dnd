# CLAUDE.md — Bu repoda nasıl çalışılır

Bu bir kod reposu değil, bir **worldbuilding bilgi tabanı**. Ager kampanya evreninin
tüm notları burada. Aşağıdakiler Claude Code oturumları için bağlayıcı kurallardır.

---

## 1. Evrenin temel gerçekleri (değiştirilmez)

- **Ana gezegen: Ager.** Uydusu: **Charaxis**.
- **Lore tabanı: Forgotten Realms**, 2024/2025 revizyonu. Tanrılar, düzlemler, Weave,
  büyü kuralları, tarih öncesi çağlar, ırklar — hepsi FR'den gelir.
- **Kozmoloji: Great Wheel.** Ager, Material Plane'de bir dünyadır.
- **Coğrafya FR'den GELMEZ.** Faerûn, Sword Coast, Waterdeep, Baldur's Gate yoktur.
  Ager'in kendi kıtaları/ülkeleri/şehirleri vardır ve `03-ager/` altında yaşar.
- FR'ye özgü bir yer adına ihtiyaç duyulursa, o yer Ager'e **taşınmaz** — Ager'de
  karşılığı yaratılır ve `canon: adapted` olarak işaretlenir.

Tereddütte kalınca: **kozmoloji ve tanrılar FR, harita ve tarih biz.**

---

## 2. Dil

- **Prose (anlatı, tarih, kültür, NPC hikâyeleri): Türkçe.**
- **Özel isimler ve oyun terimleri: İngilizce, olduğu gibi.**
  (Nine Hells, Weave, Chosen, archdevil, Wild Magic Zone, Charisma save...)
- **Statblock'lar ve mekanik metin: tamamen İngilizce.** Masada okunacak metin bu.
- Başlıklar Türkçe, dosya adları İngilizce/kebab-case.

Örnek: "Zariel'in **Avernus** üzerindeki hâkimiyeti, [Bel](05-characters/npcs/major/bel/README.md)'in ihanetinden sonra
[Asmodeus](02-lore/pantheon/archdevils/asmodeus.md) tarafından geri verildi."

---

## 3. Dosya konvansiyonları

Detaylı kural: [00-meta/conventions.md](00-meta/conventions.md). Özet:

- Dosya adı: `kebab-case.md`, İngilizce, ASCII (Türkçe karakter yok).
- **Her içerik dosyası YAML frontmatter ile başlar.** Şemalar `00-meta/templates/` içinde.
- Yeni bir şey açarken **önce ilgili şablonu oku**, sıfırdan format uydurma.
- Klasör açıyorsan içine mutlaka `README.md` koy (o klasörün kapak sayfası + içindekiler).

---

## 4. Ölçek terfisi kuralı

Coğrafi/kişisel bir kayıt tek dosyada başlar. Şu eşikleri aşınca klasöre terfi eder:

- Dosya ~200 satırı geçtiyse, **veya**
- 3+ alt başlık kendi başına dosya olacak kadar doluysa, **veya**
- Kampanyada tekrar tekrar dönülen bir yer/kişi hâline geldiyse.

Terfi işlemi: `x.md` → `x/README.md` + alt dosyalar. **Eski yola link veren
her dosya güncellenir** (grep at, kırık link bırakma).

---

## 5. Bir şey eklerken izlenecek adımlar

Yeni **yer** (kıta/ülke/şehir/kasaba/köy/mekân):
1. Doğru ölçek klasörünü bul (`03-ager/continents/...`).
2. `00-meta/templates/` içinden uygun şablonu kullan.
3. Üst seviyenin `README.md`'sindeki listeye ekle.
4. `09-index/gazetteer.md`'ye satır ekle.

Yeni **NPC** — ⚠️ **statblock ZORUNLU**, bkz. §5.5:
1. **`Skill(statblock)` çağır.** NPC/yaratık yaratma akışı odur.
2. Önemliyse `05-characters/npcs/major/<isim>/` klasörü (çok dosyalı yapı),
   değilse `05-characters/npcs/minor/<isim>.md` (`templates/npc-statsheet.md`).
3. `09-index/who-is-who.md`'ye ekle.
4. Bir yere bağlıysa o yerin dosyasından link ver.

Yeni **yaratık/canavar**:
1. **`Skill(statblock)` çağır.**
2. Lore: `02-lore/bestiary/<slug>.md` (`templates/creature.md`).
   Statblock büyüdüyse ayrı dosya: `08-rules/homebrew/monsters/<slug>.md`.
3. `02-lore/bestiary/README.md` tablosuna satır ekle.

Yeni **session**:
1. `06-campaigns/<kampanya>/sessions/session-NN-<slug>.md`
2. Kampanyanın `03-timeline.md`'sini güncelle.
3. Session'da değişen NPC/yer dosyalarına yansıt (**bu adım atlanmaz** — dünya
   kampanyayla birlikte değişir).
4. `00-meta/changelog.md`'ye satır at.

---

## 5.5. Statblock kuralı — pazarlıksız

**Bir NPC ya da yaratık yaratılıyorsa, statblock'u da yaratılır.** Sadece lore
yazıp mekaniği "sonraya bırakmak" yoktur. Kural seti tek yerde:

📁 **[08-rules/statblocks/](08-rules/statblocks/README.md)**

| Dosya | Ne cevaplar |
|---|---|
| [format-2024.md](08-rules/statblocks/format-2024.md) | Hangi satır, hangi sırayla, hangi kelimeyle |
| [cr-math.md](08-rules/statblocks/cr-math.md) | Statlar ne olmalı, CR nasıl doğrulanır |
| [npc-kits.md](08-rules/statblocks/npc-kits.md) | Sınıflı NPC nasıl statblock'a çevrilir |
| [magic-items.md](08-rules/statblocks/magic-items.md) | Hangi eşya verilir, CR'yi nasıl etkiler |
| [grounding.md](08-rules/statblocks/grounding.md) | Statsheet dünyaya nasıl bağlanır |

Beş madde:

1. **Format: D&D 5e 2024 / Monster Manual 2025.** 2014 dili (`Melee Weapon Attack:
   +7 to hit`, ayrı `Condition Immunities`, spell slot tablosu) **kullanılmaz**.
2. **CR doğrulaması dosyada gösterilir.** `## CR Doğrulaması` bloğu, D-CR/O-CR
   hesabıyla. Hedeften ±1 dışındaysa **statlar** düzeltilir, CR etiketi değil.
3. **Sihirli eşyalar resmîdir.** PHB 2024 / DMG 2024 / SRD 5.2. Homebrew eşya
   **sadece açıkça istendiğinde** yaratılır ve `08-rules/homebrew/items/`'e yazılır.
4. **Statsheet dünyaya bağlanır:** nerede yaşar, kim için çalışır, kimi tanır,
   nasıl görünür, savaşta ne yapar. Yaratıksa: habitat, origin, alignment gerekçesi,
   ekoloji. Metindeki her isim repo dosyasına link.
5. **İlahi kaynaklı NPC (paladin/cleric/warlock/druid) 1495'te yazılıyorsa**,
   "tanrılar 1494'ten beri cevap vermiyor" gerçeğiyle yüzleşmiş olmalıdır.

## 6. Canon kaynak kullanımı

- FR lore'u eklerken/doğrularken web araması yapılabilir; **kaynak URL'si dosyanın
  `sources:` frontmatter alanına yazılır.**
- Uydurulan (homebrew) her şey `canon: homebrew` olarak işaretlenir. FR canon'u ile
  homebrew asla karıştırılmadan, aynı dosyada bile ayrı bölümlerde tutulur.
- Emin olunmayan lore detayı **uydurulmaz**; `00-meta/open-questions.md`'ye soru olarak yazılır.

---

## 7. DM-only içerik

Oyunculardan saklanacak her şey ayrı dosyada ve başlıkta işaretli:
`05-secrets-dm-only.md`, `> **[DM ONLY]**` bloğu. Bir NPC'nin gerçek amacı,
ihanet planı, gizli kimliği — **asla** genel lore dosyasına yazılmaz.

---

## 8. Yapılmayacaklar

- ❌ Kullanıcı istemeden mevcut lore'u "düzeltmek"/yeniden yazmak.
- ❌ Faerûn coğrafyasını Ager'e kopyalamak.
- ❌ Frontmatter'sız dosya bırakmak.
- ❌ Klasör açıp `README.md` koymamak.
- ❌ Kampanya olaylarını dünya lore dosyalarına, henüz oynanmadan yazmak.
- ❌ Statblock'u Türkçeleştirmek.
- ❌ **NPC/yaratık yaratıp statblock'suz bırakmak.**
- ❌ **CR doğrulaması yapmadan CR etiketi yazmak.**
- ❌ **Sihirli eşya uydurmak** (istenmedikçe). Resmî eşya kullanılır, kaynağı yazılır.
- ❌ 2014 statblock formatı kullanmak.

---

## 9. Faydalı komutlar

```bash
# Tüm frontmatter'ları tara (eksik alan kontrolü)
grep -rL "^---" --include="*.md" .

# Bir ismin geçtiği her yer
grep -rn "Zariel" --include="*.md" .

# Ağaç görünümü
find . -type d -not -path '*/.*' | sort

# Doldurulmayı bekleyen dosyalar
grep -rn "TODO\|⬜\|<!-- doldur -->" --include="*.md" .

# Statblock'u olmayan NPC dosyaları
grep -rLi "Melee Attack Roll\|Ranged Attack Roll\|Saving Throw:" \
  --include="*.md" 05-characters/npcs/

# Eski (2014) statblock dili kalmış mı
grep -rn "to hit\|Condition Immunities\|Damage Immunities\|Challenge [0-9]" \
  --include="*.md" .

# CR yazıp doğrulamasını göstermeyen dosyalar
grep -rl "^cr:" --include="*.md" . | while read -r f; do
  grep -q "CR Doğrulaması" "$f" || echo "$f"
done
```
