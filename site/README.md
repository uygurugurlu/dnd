---
type: meta
title: Site — Okuma Arayuzu
canon: n/a
status: usable
updated: 2026-08-11
---

# Site — Okuma Arayüzü

Bu klasör, repodaki markdown notlarını tarayıcıda okunabilir bir **forum sitesine**
çevirir. Lore dosyalarına hiç dokunmaz — sadece okur.

> Kural: bu klasör bir **görüntüleyici**dir. Evrenin tek gerçek kaynağı hâlâ
> `.md` dosyalarının kendisi. Site silinse hiçbir bilgi kaybolmaz.

## Çalıştırma

```bash
./serve.sh          # index'i yeniler + http://localhost:8787 açar
./serve.sh 9000     # başka port
```

Kapatmak için `Ctrl+C`.

## Yeni yazı eklediğimde ne yapmalıyım?

Hiçbir şey — `serve.sh` her açılışta indeksi baştan kurar. Sunucu zaten
açıkken yeni dosya eklediysen tek satır yeter:

```bash
python3 site/build.py     # sonra tarayıcıda yenile
```

Site klasör yapısını **otomatik** okur: yeni klasör açtığında yeni kategori,
yeni `.md` eklediğinde yeni yazı olarak çıkar. Kategori başlığı, klasördeki
`README.md`'nin frontmatter `title`'ından gelir.

## Dosyalar

| Dosya | Ne yapar |
|---|---|
| `build.py` | Tüm `.md`'leri tarar, `data/index.json` + `data/search.json` üretir. Bağımlılık yok. |
| `app.js` | Router, markdown render, arama, içindekiler, backlink'ler. |
| `style.css` | Tema. Renkleri değiştirmek için sadece en üstteki `:root` bloğuna dokun. |
| `vendor/marked.min.js` | Markdown → HTML (MIT, sabit sürüm, offline çalışır). |
| `data/` | Üretilen dosyalar. Elle düzenlenmez. |
| `../index.html` | Sitenin giriş sayfası (repo kökünde durmalı). |

## Özellikler

- **Kategoriler** = üst klasörler; alt klasörler alt bölüm olarak listelenir.
- **Arama** (`⌘K` veya `/`) — başlık, etiket ve tüm gövde metninde; ok tuşlarıyla gezinir.
- **Backlink'ler** — her sayfanın altında "buraya bağlantı verenler".
- **Kırık linkler** üstü çizili görünür (dosya henüz yoksa), tıklanmaz.
- **İçindekiler** sağ kolonda, okurken takip eder.
- **Etiketler** tıklanabilir: `#zariel` → o etiketi taşıyan tüm yazılar.
- **Görseller** — üç yoldan da görünür:
  - `![...](...)` ile gömülenler normal şekilde,
  - `[dosya.jpg](...)` diye **link** verilmiş görseller otomatik resme çevrilir
    (07-maps böyle yazılmış), tablo içindeyse küçük önizleme olur,
  - her klasör sayfasının altında **galeri**: o klasördeki ve `attachments/`
    alt klasörlerindeki tüm görseller. Hiçbir yazıya bağlanmamış olanlar
    `bağlanmamış` rozetiyle işaretlenir.
- **Büyütme** — herhangi bir görsele tıkla, tam boy açılır (masada harita göstermek için).
- **DM modu** (🎲 düğmesi) — `*-dm-only.md` dosyalarını ve `> **[DM ONLY]**`
  bloklarını gizler. Masada ekranı oyunculara çevirmeden önce kapat.
- **Tema** (🌙 düğmesi) — açık/koyu, tercih tarayıcıda saklanır.

## Ayarlar

Kategori adları, ikonları ve açıklamaları `build.py` içindeki `CATEGORY_META`
sözlüğünde. Yeni üst klasör açarsan oraya bir satır ekle (eklemezsen de çalışır,
sadece klasör adını kullanır).

Yazı tipi ikonları `app.js` içindeki `TYPE_ICON` sözlüğünde — frontmatter'daki
`type:` alanına göre seçilir.
