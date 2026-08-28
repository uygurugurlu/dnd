/* ---------------------------------------------------------------
   Ager — statik forum sitesi
   Tek dosya, build yok. site/data/*.json okur, .md dosyalarini
   tarayicida render eder.
--------------------------------------------------------------- */
(() => {
'use strict';

const $  = (s, r = document) => r.querySelector(s);
const view = $('#view');

let DATA = null;            // index.json
let BY_PATH = new Map();    // path -> doc
let BY_DIR = new Map();     // dir  -> doc[]
let DIRS = new Map();       // dir  -> dir kaydi
let SEARCH = null;          // search.json (tembel yuklenir)
let ASSETS = [];            // gorsel dosyalari
const CACHE = new Map();    // path -> ham markdown

const IMG_RE = /\.(jpe?g|png|webp|gif|svg|avif)$/i;

const TYPE_ICON = {
  deity: '✨', archdevil: '🔥', 'demon-lord': '👹', plane: '🌀', planar: '🌀',
  nation: '👑', city: '🏛', town: '🏘', village: '🏡', site: '📍', district: '🧱',
  region: '⛰', continent: '🗺', ocean: '🌊', planet: '🪐', map: '🗺',
  npc: '🧝', character: '🧝', pc: '🛡', creature: '🐉', monster: '🐉', bestiary: '🐉',
  faction: '⚑', organization: '⚑', session: '📓', campaign: '⚔️', quest: '🎯',
  arc: '🧵', encounter: '💥', handout: '📄', item: '💎', spell: '🔮',
  rules: '📖', 'house-rule': '📖', table: '🎲', background: '🎒', species: '🧬',
  subclass: '🗡', language: '🗣', history: '🕰', timeline: '🕰', meta: '🧭',
  template: '🧾', index: '🔎', lore: '📜'
};
const icon = (d) => TYPE_ICON[(d.type || '').toLowerCase()] || (d.readme ? '📁' : '📄');

const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* --------------------------- yol yardimcilari --------------------------- */
function resolvePath(baseDir, href) {
  if (/^(https?:)?\/\//.test(href) || href.startsWith('data:') || href.startsWith('mailto:')) return href;
  const parts = (href.startsWith('/') ? href.slice(1) : (baseDir ? baseDir + '/' : '') + href).split('/');
  const out = [];
  for (const p of parts) {
    if (p === '.' || p === '') continue;
    if (p === '..') out.pop(); else out.push(p);
  }
  return out.join('/');
}
const dirOf = (p) => p.includes('/') ? p.slice(0, p.lastIndexOf('/')) : '';
const routeDoc = (p, anchor) => '#/' + p + (anchor ? '#' + anchor : '');
const routeDir = (p) => '#/' + (p ? p + '/' : '');
const titleOf = (p) => (BY_PATH.get(p) || {}).title || p;

/* ------------------------------- ayarlar -------------------------------- */
const prefs = {
  get theme() { return localStorage.getItem('ager-theme') || 'light'; },
  set theme(v) { localStorage.setItem('ager-theme', v); applyTheme(); },
  get hideDm() { return localStorage.getItem('ager-hide-dm') === '1'; },
  set hideDm(v) { localStorage.setItem('ager-hide-dm', v ? '1' : '0'); applyDm(); }
};
function applyTheme() {
  document.documentElement.dataset.theme = prefs.theme;
  $('#theme-toggle').textContent = prefs.theme === 'dark' ? '☀️' : '🌙';
}
function applyDm() {
  document.body.classList.toggle('hide-dm', prefs.hideDm);
  const b = $('#dm-toggle');
  b.classList.toggle('on', !prefs.hideDm);
  b.title = prefs.hideDm ? 'DM-only içerik gizli — göstermek için tıkla' : 'DM-only içerik görünür — gizlemek için tıkla';
}

/* ------------------------------- render -------------------------------- */
function crumbs(path, isDoc) {
  const segs = path.split('/').filter(Boolean);
  const last = isDoc ? segs.pop() : null;
  const bits = ['<a href="#/">⚜ Ana sayfa</a>'];
  let acc = '';
  for (const s of segs) {
    acc = acc ? acc + '/' + s : s;
    const d = DIRS.get(acc);
    bits.push(`<a href="${routeDir(acc)}">${esc(d ? d.title : s)}</a>`);
  }
  if (last) bits.push(`<span>${esc(titleOf(path))}</span>`);
  return `<nav class="crumbs">${bits.join('<span class="sep">›</span>')}</nav>`;
}

function badges(d) {
  const out = [];
  if (d.type) out.push(`<span class="badge">${esc(d.type)}</span>`);
  if (d.canon) out.push(`<span class="badge canon-${esc(d.canon)}">${esc(d.canon)}</span>`);
  if (d.status && d.status !== 'usable') out.push(`<span class="badge stub">${esc(d.status)}</span>`);
  if (d.dm) out.push('<span class="badge dm">DM ONLY</span>');
  else if (d.dmb) out.push('<span class="badge dm">DM notu içerir</span>');
  return out.join(' ');
}

function topicRow(d) {
  const sub = [d.dir || 'kök'];
  return `<a class="topic ${d.dm ? 'is-dm' : ''}" href="${routeDoc(d.path)}">
    <span class="topic-ico">${icon(d)}</span>
    <span class="topic-main">
      <span class="topic-title">${esc(d.title)} ${d.dm ? '<span class="badge dm">DM</span>' : ''}</span>
      <span class="topic-sub">${esc(sub.join(' / '))}</span>
    </span>
    <span class="topic-meta">${d.type ? `<span class="badge">${esc(d.type)}</span><br>` : ''}${esc(d.updated || '')}</span>
  </a>`;
}

function catCard(dirPath) {
  const dd = DIRS.get(dirPath);
  if (!dd) return '';
  return `<a class="cat" href="${routeDir(dirPath)}">
    <span class="cat-ico">${dd.icon || '📁'}</span>
    <span class="cat-body">
      <span class="cat-title">${esc(dd.title)}</span>
      <span class="cat-desc">${esc(dd.desc || '')}</span>
      <span class="cat-count">${dd.total} yazı</span>
    </span>
  </a>`;
}

/* --------------------------------- ana --------------------------------- */
function renderHome() {
  const tops = DATA.dirs.filter(d => d.path && !d.path.includes('/')).map(d => d.path);
  const recent = DATA.docs
    .filter(d => /^\d{4}-\d{2}-\d{2}$/.test(d.updated) && !d.tpl)
    .sort((a, b) => b.updated.localeCompare(a.updated) || a.title.localeCompare(b.title, 'tr'))
    .slice(0, 12);

  view.innerHTML = `
    <section class="hero">
      <h1>Ager Kampanya Evreni</h1>
      <p>Aeltharys &amp; Shae'Khar · <em>The Syzygy of Vael</em> — kozmoloji ve tanrılar Forgotten Realms, harita ve tarih bize ait.</p>
    </section>
    <div class="cat-grid">${tops.map(catCard).join('')}</div>
    <h2 class="section-title">Son güncellenenler</h2>
    <div class="topics">${recent.map(topicRow).join('')}</div>`;
  document.title = 'Ager — Kampanya Evreni';
}

function renderDir(path) {
  const dd = DIRS.get(path);
  if (!dd) return renderMissing(path);
  const subs = DATA.dirs.filter(d => d.path && dirOf(d.path) === path && d.path !== path).map(d => d.path);
  const docs = (BY_DIR.get(path) || []).filter(d => !d.readme).sort((a, b) => a.title.localeCompare(b.title, 'tr'));
  const readme = dd.readme && BY_PATH.get(dd.readme);

  view.innerHTML = `
    ${crumbs(path, false)}
    <section class="hero">
      <h1>${dd.icon ? dd.icon + ' ' : ''}${esc(dd.title)}</h1>
      <p>${dd.desc ? esc(dd.desc) + ' · ' : ''}${dd.total} yazı${readme ? ` · <a href="${routeDoc(readme.path)}">klasör kapak sayfası →</a>` : ''}</p>
    </section>
    ${subs.length ? `<h2 class="section-title">Alt bölümler</h2><div class="cat-grid">${subs.map(s => {
      const sd = DIRS.get(s);
      return `<a class="cat" href="${routeDir(s)}">
        <span class="cat-ico">${sd.icon || '📂'}</span>
        <span class="cat-body">
          <span class="cat-title">${esc(sd.title)}</span>
          <span class="cat-count">${sd.total} yazı</span>
        </span></a>`;
    }).join('')}</div>` : ''}
    ${docs.length
      ? `<h2 class="section-title">Yazılar</h2><div class="topics">${docs.map(topicRow).join('')}</div>`
      : (subs.length || galleryFor(path).length ? '' : '<div class="empty">Bu klasörde henüz yazı yok.</div>')}
    ${galleryHtml(galleryFor(path))}`;
  document.title = dd.title + ' — Ager';
}

/* ------------------------------- galeri -------------------------------- */
// Bir klasorun gorselleri: kendi icindekiler, attachments/ alt klasoru ve
// dogrudan alt klasorlerdekiler (07-maps/ager gibi).
function galleryFor(path) {
  const p = path ? path + '/' : '';
  return ASSETS.filter(a => {
    if (a.dir === path) return true;                       // dogrudan icinde
    if (!a.dir.startsWith(p)) return false;
    const rest = a.dir.slice(p.length);
    return !rest.includes('/') ||                          // dogrudan alt klasor
           /^[^/]+\/attachments$/.test(rest);              // alt klasorun attachments'i
  });
}

// Bir yazinin kendi ek klasoru: wheatrest.md -> wheatrest-attachments/
function galleryForDoc(docPath) {
  if (/\/README\.md$/i.test(docPath)) return [];   // klasor kapaklarinda galeri kategori sayfasinda
  const folder = docPath.replace(/\.md$/, '') + '-attachments';
  return ASSETS.filter(a => a.dir === folder);
}

function galleryHtml(imgs, title = 'Görseller') {
  if (!imgs.length) return '';
  return `<h2 class="section-title">${title} (${imgs.length})</h2>
    <div class="gallery">${imgs.map(a => `
      <figure class="gal" data-full="${encodeURI(a.path)}">
        <img src="${encodeURI(a.path)}" loading="lazy" alt="${esc(a.name)}">
        <figcaption>${esc(a.name)}${a.used ? '' : ' <span class="badge">bağlanmamış</span>'}</figcaption>
      </figure>`).join('')}</div>`;
}

/* ------------------------------ lightbox ------------------------------- */
function openLightbox(src, caption) {
  let lb = $('#lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.innerHTML = '<img><div class="lb-cap"></div>';
    lb.addEventListener('click', () => lb.classList.remove('on'));
    document.body.appendChild(lb);
  }
  lb.querySelector('img').src = src;
  lb.querySelector('.lb-cap').textContent = caption || '';
  lb.classList.add('on');
}

document.addEventListener('click', e => {
  const gal = e.target.closest('.gallery .gal, .prose img, .md-figure img');
  if (!gal) return;
  const img = gal.tagName === 'IMG' ? gal : gal.querySelector('img');
  if (!img || !img.src) return;
  e.preventDefault();
  openLightbox(img.src, img.alt || img.getAttribute('src'));
});

function renderMissing(path) {
  view.innerHTML = `<section class="hero"><h1>Bulunamadı</h1>
    <p><code>${esc(path)}</code> diye bir sayfa yok. <a href="#/">Ana sayfaya dön</a> ya da
    indexi yenile: <code>python3 site/build.py</code></p></section>`;
}

/* ------------------------------ dokuman -------------------------------- */
async function renderDoc(path, anchor) {
  const d = BY_PATH.get(path);
  if (!d) return renderMissing(path);
  view.innerHTML = crumbs(path, true) + '<div class="loading">Yükleniyor…</div>';

  let raw = CACHE.get(path);
  if (raw == null) {
    try {
      const res = await fetch(encodeURI(path) + '?v=' + Date.now());
      if (!res.ok) throw new Error(res.status);
      raw = await res.text();
      CACHE.set(path, raw);
    } catch (e) {
      view.innerHTML = crumbs(path, true) +
        `<div class="empty">Dosya okunamadı (${esc(e.message)}). Siteyi bir HTTP sunucusundan aç:
        <code>./serve.sh</code></div>`;
      return;
    }
  }

  // frontmatter + bastaki H1 (baslik zaten sayfa basliginda) cikarilir
  const body = raw
    .replace(/^---\n[\s\S]*?\n---\n?/, '')
    .replace(/^\s*#\s+[^\n]*\n/, '');
  const html = marked.parse(body, { gfm: true, breaks: false });

  const siblings = (BY_DIR.get(d.dir) || []).slice().sort((a, b) =>
    (a.readme === b.readme) ? a.title.localeCompare(b.title, 'tr') : (a.readme ? -1 : 1));
  const i = siblings.findIndex(s => s.path === path);
  const prev = i > 0 ? siblings[i - 1] : null;
  const next = i >= 0 && i < siblings.length - 1 ? siblings[i + 1] : null;

  view.innerHTML = `
    ${crumbs(path, true)}
    <div class="doc-wrap">
      <article>
        <header class="doc-head">
          <h1>${icon(d)} ${esc(d.title)}</h1>
          <div class="doc-meta">${badges(d)}${d.updated ? `<span class="badge">güncel: ${esc(d.updated)}</span>` : ''}</div>
          ${d.tags.length ? `<div class="doc-tags">${d.tags.map(t =>
            `<a class="tag" href="#/tag/${encodeURIComponent(t)}">#${esc(t)}</a>`).join('')}</div>` : ''}
        </header>
        <div class="prose" id="prose">${html}</div>
        ${galleryHtml(galleryForDoc(path), 'Ek görseller')}
        <footer class="doc-foot">
          ${d.backlinks.length ? `<div class="backlinks"><h3>↩ Buraya bağlantı verenler (${d.backlinks.length})</h3>
            <div class="chips">${d.backlinks.map(b =>
              `<a class="chip" href="${routeDoc(b)}">${esc(titleOf(b))}</a>`).join('')}</div></div>` : ''}
          <div class="pager">
            ${prev ? `<a href="${routeDoc(prev.path)}"><span class="dir">← önceki</span><span class="nm">${esc(prev.title)}</span></a>` : '<span></span>'}
            ${next ? `<a class="next" href="${routeDoc(next.path)}"><span class="dir">sonraki →</span><span class="nm">${esc(next.title)}</span></a>` : '<span></span>'}
          </div>
          <div class="raw-link">${esc(path)} · ${d.words} kelime · <a href="${encodeURI(path)}" target="_blank">ham markdown</a></div>
        </footer>
      </article>
      <aside class="toc" id="toc"></aside>
    </div>`;

  fixLinks($('#prose'), d.dir);
  buildToc();
  document.title = d.title + ' — Ager';

  if (anchor) {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ block: 'start' });
  } else {
    window.scrollTo(0, 0);
  }
}

/* --------- markdown ciktisini siteye baglama (link/gorsel/tablo) -------- */
function slugify(s) {
  return s.toLowerCase().trim()
    .replace(/[çğıöşü]/g, c => ({ 'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u' }[c]))
    .replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
}

function fixLinks(root, baseDir) {
  // ONCE gorseller: asagidaki link donusumu yeni <img>'ler uretiyor, onlarin
  // src'si zaten kok-goreli — ikinci kez cozumlenmemeli.
  root.querySelectorAll('img[src]').forEach(img => {
    const src = img.getAttribute('src');
    if (/^(https?:)?\/\//.test(src) || src.startsWith('data:')) return;
    img.setAttribute('src', encodeURI(resolvePath(baseDir, decodeURI(src))));
    img.loading = 'lazy';
  });

  root.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    if (/^(https?:)?\/\//.test(href) || href.startsWith('mailto:')) {
      a.target = '_blank'; a.rel = 'noopener'; a.classList.add('ext'); return;
    }
    if (href.startsWith('#')) { a.setAttribute('href', location.hash.split('#').slice(0, 2).join('#') + href); return; }
    const [file, frag] = href.split('#');
    const target = resolvePath(baseDir, decodeURI(file));
    if (target.endsWith('.md')) {
      if (BY_PATH.has(target)) {
        a.setAttribute('href', routeDoc(target, frag));
        a.classList.add('wiki');
      } else {
        a.classList.add('dead');
        a.title = 'Bu dosya henüz yok: ' + target;
        a.removeAttribute('href');
      }
    } else if (IMG_RE.test(target)) {
      // Gorsele verilen link -> gercek gorsel (07-maps gibi yerler icin)
      const label = a.textContent.trim();
      const fig = document.createElement('figure');
      fig.className = 'md-figure';
      fig.innerHTML = `<img src="${encodeURI(target)}" loading="lazy" alt="${esc(label)}">` +
        (label && !IMG_RE.test(label) ? `<figcaption>${esc(label)}</figcaption>` : '');
      a.replaceWith(fig);
    } else if (DIRS.has(target.replace(/\/$/, ''))) {
      a.setAttribute('href', routeDir(target.replace(/\/$/, '')));
    } else {
      a.setAttribute('href', encodeURI(target));
      a.target = '_blank';
    }
  });

  root.querySelectorAll('table').forEach(t => {
    const head = t.querySelector('thead');
    if (head && !head.textContent.trim()) { head.classList.add('empty-head'); t.classList.add('headless'); }
    const wrap = document.createElement('div');
    wrap.className = 'table-scroll';
    t.parentNode.insertBefore(wrap, t);
    wrap.appendChild(t);
  });

  const used = new Set();
  root.querySelectorAll('h1, h2, h3').forEach(h => {
    let id = slugify(h.textContent) || 'bolum';
    let n = 2;
    while (used.has(id)) id = slugify(h.textContent) + '-' + n++;
    used.add(id);
    h.id = id;
  });

  root.querySelectorAll('blockquote').forEach(b => {
    if (/\[DM ONLY\]/i.test(b.textContent)) b.classList.add('is-dm');
  });
}

function buildToc() {
  const heads = [...$('#prose').querySelectorAll('h2, h3')];
  const toc = $('#toc');
  if (heads.length < 2) { toc.innerHTML = ''; return; }
  toc.innerHTML = '<div class="toc-title">İçindekiler</div>' + heads.map(h =>
    `<a class="${h.tagName === 'H3' ? 'lv3' : ''}" href="#" data-id="${h.id}">${esc(h.textContent)}</a>`).join('');

  toc.querySelectorAll('a').forEach(a => a.addEventListener('click', ev => {
    ev.preventDefault();
    document.getElementById(a.dataset.id).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));

  const links = new Map([...toc.querySelectorAll('a')].map(a => [a.dataset.id, a]));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => a.classList.remove('active'));
      const a = links.get(e.target.id);
      if (a) a.classList.add('active');
    });
  }, { rootMargin: '-70px 0px -75% 0px' });
  heads.forEach(h => obs.observe(h));
}

/* ------------------------------ etiket --------------------------------- */
function renderTag(tag) {
  const docs = DATA.docs.filter(d => d.tags.some(t => t.toLowerCase() === tag.toLowerCase()));
  view.innerHTML = `
    ${crumbs('', false)}
    <section class="hero"><h1>#${esc(tag)}</h1><p>${docs.length} yazı bu etiketi taşıyor.</p></section>
    ${docs.length ? `<div class="topics">${docs.map(topicRow).join('')}</div>` : '<div class="empty">Bu etiketle yazı yok.</div>'}`;
  document.title = '#' + tag + ' — Ager';
}

/* ------------------------------- arama --------------------------------- */
async function loadSearch() {
  if (SEARCH) return SEARCH;
  const res = await fetch('site/data/search.json?v=' + encodeURIComponent(DATA.generated));
  SEARCH = await res.json();
  return SEARCH;
}

function snippet(text, terms) {
  const low = text.toLowerCase();
  let at = -1;
  for (const t of terms) { const i = low.indexOf(t); if (i !== -1 && (at === -1 || i < at)) at = i; }
  if (at === -1) at = 0;
  const start = Math.max(0, at - 60);
  let s = esc(text.slice(start, start + 190));
  for (const t of terms) {
    s = s.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'), '<mark>$1</mark>');
  }
  return (start ? '…' : '') + s + '…';
}

async function runSearch(q) {
  const box = $('#search-results');
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) { box.innerHTML = '<div class="sr-none">Bir şeyler yaz — başlıklarda ve tüm metinde arar.</div>'; return; }
  const data = await loadSearch();
  const hits = [];
  for (const it of data) {
    const t = it.t.toLowerCase(), g = it.g.toLowerCase(), x = it.x.toLowerCase();
    let score = 0, ok = true;
    for (const term of terms) {
      const inT = t.includes(term), inG = g.includes(term), inX = x.includes(term);
      if (!inT && !inG && !inX) { ok = false; break; }
      if (inT) score += t.startsWith(term) ? 60 : 30;
      if (inG) score += 12;
      if (inX) score += Math.min(10, (x.split(term).length - 1));
    }
    if (ok) hits.push({ it, score });
  }
  hits.sort((a, b) => b.score - a.score);
  const top = hits.slice(0, 30);
  box.innerHTML = top.length ? top.map(({ it }) => {
    const d = BY_PATH.get(it.p) || {};
    return `<a class="sr" href="${routeDoc(it.p)}">
      <div class="sr-title">${icon(d)} ${esc(it.t)} ${d.dm ? '<span class="badge dm">DM</span>' : ''}</div>
      <div class="sr-path">${esc(it.p)}</div>
      <div class="sr-snip">${snippet(it.x, terms)}</div></a>`;
  }).join('') : '<div class="sr-none">Sonuç yok.</div>';
}

function openSearch() {
  $('#search-overlay').hidden = false;
  const inp = $('#search-input');
  inp.focus(); inp.select();
  if (!$('#search-results').innerHTML) runSearch('');
}
function closeSearch() { $('#search-overlay').hidden = true; }

/* ------------------------------- router -------------------------------- */
function route() {
  const h = decodeURI(location.hash.slice(1));
  closeSearch();
  if (!h || h === '/') return renderHome();
  const [pathPart, anchor] = h.slice(1).split('#');
  if (pathPart.startsWith('tag/')) return renderTag(pathPart.slice(4));
  if (pathPart === '' ) return renderHome();
  if (pathPart.endsWith('/')) return renderDir(pathPart.slice(0, -1));
  if (pathPart.endsWith('.md')) return renderDoc(pathPart, anchor);
  if (DIRS.has(pathPart)) return renderDir(pathPart);
  renderMissing(pathPart);
}

/* -------------------------------- init --------------------------------- */
async function init() {
  applyTheme(); applyDm();
  try {
    const res = await fetch('site/data/index.json?v=' + Date.now());
    DATA = await res.json();
  } catch (e) {
    view.innerHTML = `<div class="empty">İndeks okunamadı. Önce <code>python3 site/build.py</code> çalıştır,
      sonra siteyi <code>./serve.sh</code> ile aç (dosyayı çift tıklayarak değil).</div>`;
    return;
  }
  DATA.docs.forEach(d => {
    BY_PATH.set(d.path, d);
    if (!BY_DIR.has(d.dir)) BY_DIR.set(d.dir, []);
    BY_DIR.get(d.dir).push(d);
  });
  ASSETS = DATA.assets || [];
  DATA.dirs.forEach(d => {
    const meta = DATA.categories[d.path];
    if (meta) { d.title = d.title || meta.title; d.icon = d.icon || meta.icon; d.desc = d.desc || meta.desc; }
    DIRS.set(d.path, d);
  });
  $('#footer-stats').textContent = `${DATA.docs.length} yazı · indeks ${DATA.generated}`;

  window.addEventListener('hashchange', route);
  route();
}

/* ------------------------------ olaylar -------------------------------- */
$('#theme-toggle').addEventListener('click', () => { prefs.theme = prefs.theme === 'dark' ? 'light' : 'dark'; });
$('#dm-toggle').addEventListener('click', () => { prefs.hideDm = !prefs.hideDm; });
$('#search-open').addEventListener('click', openSearch);
$('#search-close').addEventListener('click', closeSearch);
$('#search-overlay').addEventListener('click', e => { if (e.target.id === 'search-overlay') closeSearch(); });

let t;
$('#search-input').addEventListener('input', e => {
  clearTimeout(t);
  const q = e.target.value;
  t = setTimeout(() => runSearch(q), 110);
});

// arama sonuclarinda ok tuslariyla gezinme
function moveSel(delta) {
  const items = [...$('#search-results').querySelectorAll('.sr')];
  if (!items.length) return;
  let i = items.findIndex(el => el.classList.contains('sel'));
  items.forEach(el => el.classList.remove('sel'));
  i = (i + delta + items.length + (i === -1 && delta < 0 ? 1 : 0)) % items.length;
  items[i].classList.add('sel');
  items[i].scrollIntoView({ block: 'nearest' });
}

document.addEventListener('keydown', e => {
  const open = !$('#search-overlay').hidden;
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
  else if (e.key === 'Escape') closeSearch();
  else if (open && e.key === 'ArrowDown') { e.preventDefault(); moveSel(1); }
  else if (open && e.key === 'ArrowUp') { e.preventDefault(); moveSel(-1); }
  else if (open && e.key === 'Enter') {
    const sel = $('#search-results .sr.sel') || $('#search-results .sr');
    if (sel) { e.preventDefault(); location.hash = sel.getAttribute('href').slice(1); closeSearch(); }
  }
  else if (e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
});

init();
})();
