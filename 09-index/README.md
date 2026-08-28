---
type: meta
title: Dizinler
status: usable
updated: 2026-08-10
---

# 09 — Dizinler

Çapraz referans. "Şu isim neydi ya?" dediğinde buraya bak.

| Dosya | Ne |
|---|---|
| [gazetteer.md](gazetteer.md) | Tüm yerler, alfabetik |
| [who-is-who.md](who-is-who.md) | Tüm kişiler, alfabetik |
| [glossary.md](glossary.md) | Terimler sözlüğü (TR ↔ EN) |
| [timeline-index.md](timeline-index.md) | Tüm zaman çizelgelerine giriş |
| [tags.md](tags.md) | Etiket dizini |

## Bakım

Bu dosyalar **elle güncellenir**. Yeni bir yer/kişi eklendiğinde ilgili dizine
satır atılır. Bu, `CLAUDE.md` §5'teki iş akışının parçasıdır.

**Toplu kontrol:**
```bash
# Dizinde olmayan yer dosyalarını bul
grep -rl "^type: \(city\|town\|village\|nation\|continent\|region\|site\)" \
  --include="*.md" ../03-ager ../04-charaxis
```
