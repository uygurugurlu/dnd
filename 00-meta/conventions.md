---
type: meta
title: Dosya ve Yazım Konvansiyonları
updated: 2026-08-10
---

# Konvansiyonlar

## Dosya adlandırma

- `kebab-case.md` — küçük harf, kelimeler arası tire.
- **Sadece ASCII.** Türkçe karakter kullanılmaz: `sehr-i-nur.md`, `şehr-i-nur.md` değil.
- Klasör adları da aynı kurala tabi.
- Sıralama önemliyse sayı prefixi: `01-`, `02-`. (Session'lar: `session-03-...`)
- Klasörün kapak dosyası her zaman `README.md`.
- Şablon/iskelet klasörleri `_` ile başlar: `_template-campaign/`.

## Frontmatter

Her içerik dosyası YAML frontmatter ile başlar. (Tek istisna: kök dizindeki
`CLAUDE.md` — o bir harness dosyası, içerik değil.) Ortak alanlar:

```yaml
---
type: continent | nation | city | town | village | site | character | statblock |
      faction | deity | plane | campaign | session | quest | item | creature | meta
name: Görünen ad (Türkçe karakter serbest)
canon: fr-canon | adapted | homebrew
status: stub | draft | usable | complete
tags: [tag1, tag2]
updated: YYYY-MM-DD
---
```

Tipe özel ek alanlar şablonlarda tanımlı.

### `canon` alanı ne demek

| Değer | Anlamı |
|---|---|
| `fr-canon` | Forgotten Realms'ten doğrudan alındı, değiştirilmedi. |
| `adapted` | FR kaynaklı ama Ager'e uyarlanırken değiştirildi. Farklar dosyada belirtilir. |
| `homebrew` | Tamamen bize ait. FR'de karşılığı yok. |

### `status` alanı ne demek

| Değer | Anlamı |
|---|---|
| `stub` | Sadece iskelet, isim ve bir iki satır. |
| `draft` | Yazılmaya başlandı, tutarsız olabilir. |
| `usable` | Masada kullanılabilir. |
| `complete` | Detaylı, çapraz linkleri tam. |

## Yazım

- Prose Türkçe, özel isim ve oyun terimleri İngilizce (bkz. `CLAUDE.md` §2).
- Statblock'lar tamamen İngilizce.
- Tarihler **DR** (Dale Reckoning) ile: `1492 DR`. Belirsizse `~1300 DR`.
- Ölçüler: mil / fit (D&D standardı). Gerekirse parantezle km.
- Para: gp / sp / cp.

## Link kuralları

- Repo içi linkler **relative**: `[Zariel](../05-characters/npcs/major/zariel/README.md)`
- Her yer dosyası bir üst seviyesine link verir ("Yukarı" satırı).
- Her NPC, bağlı olduğu yere link verir; yer de NPC'ye.
- Kırık link bırakılmaz. Dosya taşınınca `grep -rn "eski-yol"` ile hepsi güncellenir.

## Başlık hiyerarşisi

```
# Dosya başlığı (H1, dosyada tek)
## Ana bölüm
### Alt bölüm
```

## Özel bloklar

```markdown
> **[DM ONLY]** Oyunculara gösterilmeyecek bilgi.

> **[HOOK]** Kampanyada kullanılabilecek olay kancası.

> **[AÇIK SORU]** Henüz karar verilmedi — open-questions.md'ye de eklenir.
```

## TODO işaretleme

Doldurulmayı bekleyen yerler: `<!-- doldur: ne gerekiyor -->`
Toplu tarama: `grep -rn "<!-- doldur" --include="*.md" .`
