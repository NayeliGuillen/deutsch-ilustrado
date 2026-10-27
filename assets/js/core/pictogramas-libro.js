/* ============================================================
   pictogramas-libro.js — Dibujos para el vocabulario de los
   capítulos 3, 4 y 5 del libro (comida, lugares, transporte…)
   ------------------------------------------------------------
   Mismo estilo que pictogramas.js: viewBox 48, trazo + relleno
   suave con la clase `t`. Se añaden con DE.pic.registrar().
   ============================================================ */

DE.pic.registrar({
  queso:
    '<path class="t" d="M6 30 30 12l12 6v18H6z"/><path d="M6 30h36"/><circle cx="18" cy="35" r="2"/><circle cx="30" cy="33" r="2.5"/><circle cx="33" cy="22" r="1.8"/>',
  huevo:
    '<path class="t" d="M24 6c8 0 13 12 13 21a13 13 0 0 1-26 0c0-9 5-21 13-21z"/>',
  banana:
    '<path class="t" d="M9 14c2 14 12 25 30 24-3 5-10 7-17 5C12 39 6 28 9 14z"/><path d="M9 14l3-4"/>',
  taza:
    '<path class="t" d="M9 16h26v14a9 9 0 0 1-9 9h-8a9 9 0 0 1-9-9z"/><path d="M35 19h3a5 5 0 0 1 0 10h-3"/><path d="M16 8c-2 2 2 3 0 6M24 8c-2 2 2 3 0 6"/>',
  pescado:
    '<path class="t" d="M5 24c6-9 16-12 25-5l9-7v24l-9-7c-9 7-19 4-25-5z"/><circle cx="14" cy="22" r="1.6"/>',
  tomate:
    '<circle class="t" cx="24" cy="27" r="14"/><path d="M17 15l7 4 7-4M24 19V10"/>',
  pepino:
    '<rect class="t" x="6" y="17" width="36" height="14" rx="7"/><path d="M16 21v1M24 25v1M32 21v1M20 27v1M30 28v1"/>',
  ensalada:
    '<path class="t" d="M7 24h34a17 12 0 0 1-34 0z"/><path d="M12 24c0-8 6-12 10-8M20 22c2-8 10-10 12-4M30 24c4-6 9-4 8 0"/>',
  sopa:
    '<path class="t" d="M6 24h36a18 15 0 0 1-36 0z"/><path d="M15 15c-2 2 2 3 0 6M24 12c-2 2 2 3 0 7M33 15c-2 2 2 3 0 6"/>',
  salchicha:
    '<rect class="t" x="6" y="18" width="36" height="12" rx="6"/><path d="M16 18v12M26 18v12"/>',
  jamon:
    '<path class="t" d="M8 14c8-6 24-6 32 0l-3 22c-6 4-20 4-26 0z"/><path d="M14 20c4 2 16 2 20 0M15 28c4 2 14 2 18 0"/>',
  chocolate:
    '<rect class="t" x="9" y="7" width="30" height="34" rx="3"/><path d="M9 19h30M9 30h30M20 7v34M30 7v34"/>',
  galleta:
    '<circle class="t" cx="24" cy="24" r="16"/><circle cx="18" cy="19" r="1.6"/><circle cx="29" cy="18" r="1.6"/><circle cx="22" cy="28" r="1.6"/><circle cx="31" cy="29" r="1.6"/>',
  azucar:
    '<path class="t" d="M12 10h24l3 28H9z"/><path d="M12 10l-2-4h28l-2 4"/><path d="M18 22h12M18 29h12"/>',
  sal:
    '<path class="t" d="M16 14h16l2 26H14z"/><path d="M18 8h12l2 6H16z"/><path d="M20 22v1M24 26v1M28 22v1M22 32v1M27 33v1"/>',
  mantequilla:
    '<path class="t" d="M6 28 14 16h28l-8 12z"/><path d="M6 28v8h28v-8M34 28l8-12v8l-8 12"/>',
  aceite:
    '<path class="t" d="M19 6h10v8c4 3 6 6 6 10v16H13V24c0-4 2-7 6-10z"/><path d="M13 28h22"/>',
  patata:
    '<path class="t" d="M10 20c0-8 12-11 21-8 8 3 11 11 5 18-6 8-20 8-24 0-2-3-2-7-2-10z"/><circle cx="19" cy="22" r="1.4"/><circle cx="28" cy="26" r="1.4"/><circle cx="23" cy="31" r="1.4"/>',
  arroz:
    '<path class="t" d="M6 24h36a18 15 0 0 1-36 0z"/><path d="M14 18l3-3M21 17l3-3M28 17l3-3M18 21l3-3M25 21l3-3"/>',
  verdura:
    '<path class="t" d="M12 18c-5 8-3 22 12 24 15-2 17-16 12-24-3-5-8-6-12-3-4-3-9-2-12 3z"/><path d="M24 15v10"/>',
  pastel:
    '<path class="t" d="M8 28h32v12H8z"/><path d="M8 28c0-8 8-10 16-10s16 2 16 10"/><path d="M24 12v6M24 8v2"/>',
  bolsa:
    '<path class="t" d="M10 16h28l-2 24H12z"/><path d="M17 16a7 8 0 0 1 14 0"/>',
  ticket:
    '<path class="t" d="M8 10h32v28l-4-3-4 3-4-3-4 3-4-3-4 3-4-3-4 3z"/><path d="M15 18h18M15 25h18M15 31h10"/>',
  moneda:
    '<circle class="t" cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="10"/><path d="M28 19c-1-2-8-3-8 1 0 5 8 2 8 7 0 4-7 3-8 1"/>',
  panaderia:
    '<path class="t" d="M6 20h36l-3 8H9z"/><path d="M9 28v12h30V28"/><path d="M6 20c0-5 4-8 8-8h20c4 0 8 3 8 8"/>',
  bici:
    '<circle cx="12" cy="31" r="8"/><circle cx="36" cy="31" r="8"/><path class="t" d="M12 31l7-14h12l5 14M19 17l8 14M16 17h6M30 12h5"/>',
  bus:
    '<rect class="t" x="7" y="9" width="34" height="27" rx="5"/><path d="M7 24h34M7 17h34"/><circle cx="15" cy="36" r="3"/><circle cx="33" cy="36" r="3"/><path d="M15 40v0"/>',
  iglesia:
    '<path class="t" d="M12 22l12-8 12 8v18H12z"/><path d="M24 14V4M20 8h8"/><path d="M21 40v-9h6v9"/>',
  ayuntamiento:
    '<path class="t" d="M6 22 24 10l18 12v18H6z"/><path d="M24 10V4h6v4"/><path d="M12 28h4M22 28h4M32 28h4M12 34h4M32 34h4M21 40v-6h6v6"/>',
  puente:
    '<path class="t" d="M4 28h40v5H4z"/><path d="M10 28V10M38 28V10M10 10 24 28 38 10"/><path d="M4 40c6-3 10 3 16 0s10 3 16 0 6 0 8 0"/>',
  barco:
    '<path class="t" d="M6 30h36l-6 10H12z"/><path d="M24 8v22M24 8l12 16H24M24 12 14 24h10"/>',
  rio:
    '<path class="t" d="M4 14c8-6 12 6 20 0s12 6 20 0v6c-8 6-12-6-20 0S12 26 4 20z"/><path d="M4 30c8-6 12 6 20 0s12 6 20 0v6c-8 6-12-6-20 0S12 42 4 36z"/>',
  lago:
    '<ellipse class="t" cx="24" cy="26" rx="19" ry="11"/><path d="M14 25c3-3 6 3 9 0s6 3 9 0"/>',
  parque:
    '<path class="t" d="M24 6c8 0 12 8 8 14 5 3 3 11-4 11H20c-7 0-9-8-4-11-4-6 0-14 8-14z"/><path d="M24 31v12"/>',
  teatro:
    '<path class="t" d="M5 10h22v14a11 11 0 0 1-22 0z"/><path d="M11 18v2M21 18v2M11 27c3 3 7 3 10 0"/><path d="M29 18h14v12a8 8 0 0 1-14 0z"/>',
  museo:
    '<path class="t" d="M4 17 24 7l20 10z"/><path d="M10 20v16M19 20v16M29 20v16M38 20v16M5 38h38v4H5z"/>',
  cine:
    '<rect class="t" x="6" y="14" width="36" height="24" rx="3"/><path d="M6 22h36M14 14l-4 8M24 14l-4 8M34 14l-4 8"/>',
  concierto:
    '<path class="t" d="M16 36V10l22-4v26"/><circle class="t" cx="11" cy="36" r="5"/><circle class="t" cx="33" cy="32" r="5"/>',
  orquesta:
    '<path class="t" d="M20 6c-4 6-4 14 0 20 3 5 2 10-3 14"/><path d="M14 40h26M24 12h14M24 20h14M24 28h14"/>',
  publico:
    '<circle class="t" cx="14" cy="16" r="5"/><circle class="t" cx="34" cy="16" r="5"/><circle class="t" cx="24" cy="24" r="5"/><path d="M5 40c0-7 4-10 9-10s9 3 9 10M25 40c0-7 4-10 9-10s9 3 9 10"/>',
  mesa:
    '<path class="t" d="M6 18h36v5H6z"/><path d="M10 23v17M38 23v17M10 31h28"/>',
  grill:
    '<path class="t" d="M8 22h32a16 12 0 0 1-32 0z"/><path d="M16 34l-4 8M32 34l4 8M16 15c-2 2 2 3 0 5M24 13c-2 2 2 3 0 6M32 15c-2 2 2 3 0 5"/>',
  prost:
    '<path class="t" d="M8 12h14l-2 22H10z"/><path class="t" d="M26 12h14l-2 22H28z"/><path d="M22 8l4-2M22 12l5-1"/>',
  cocinero:
    '<path class="t" d="M14 20c-5-1-6-9 0-10 1-5 9-6 11-2 3-3 10-1 9 4 5 2 3 8-2 8v6H14z"/><path d="M14 31h20v10H14z"/>',
  pizza:
    '<path class="t" d="M6 14c12-6 24-6 36 0L24 42z"/><circle cx="20" cy="20" r="2"/><circle cx="29" cy="22" r="2"/><circle cx="24" cy="30" r="2"/>',
  ducha:
    '<path class="t" d="M10 40V14a8 8 0 0 1 16 0"/><path d="M24 12h14l-3 8H27z"/><path d="M28 26v3M32 26v3M36 26v3M30 33v3M34 33v3"/>',
  periodico:
    '<path class="t" d="M8 8h28v32H12a4 4 0 0 1-4-4z"/><path d="M36 16h4v20a4 4 0 0 1-4 4"/><path d="M14 14h16M14 21h16M14 28h10"/>',
  dormir:
    '<path class="t" d="M6 34h36v6H6zM6 26h14a4 4 0 0 1 4 4v4H6z"/><path d="M28 8h8l-8 8h8M34 18h5l-5 6h5"/>',
  libro:
    '<path class="t" d="M6 10c7-2 13-2 18 3 5-5 11-5 18-3v27c-7-2-13-2-18 3-5-5-11-5-18-3z"/><path d="M24 13v27"/>',
  abuela:
    '<circle class="t" cx="24" cy="15" r="8"/><path d="M12 42c0-9 5-14 12-14s12 5 12 14z" class="t"/><path d="M17 15h3M28 15h3"/>',
  torre:
    '<path class="t" d="M18 42V16h12v26z"/><path d="M16 16h16l-2-7H18zM24 9V4"/><path d="M21 24h6M21 31h6"/>',
  luna2:
    '<path class="t" d="M30 6a18 18 0 1 0 12 26A15 15 0 0 1 30 6z"/>'
});
