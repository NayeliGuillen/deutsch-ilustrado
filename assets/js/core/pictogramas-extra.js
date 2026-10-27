/* ============================================================
   core/pictogramas-extra.js — Más dibujos para verbos y vocabulario
   ------------------------------------------------------------
   Mismo estilo que pictogramas.js (viewBox 48, trazo + relleno
   suave con la clase `t`). Se añaden con DE.pic.registrar().
   ============================================================ */

DE.pic.registrar({
  casa:
    '<path class="t" d="M7 23 24 8l17 15v17H7z"/><path d="M20 40V28h8v12"/>',
  flecha:
    '<path class="t" d="M6 19h22v-8l14 13-14 13v-8H6z"/>',
  herramienta:
    '<path class="t" d="M30 6a9 9 0 0 0-8 12L7 33a4 4 0 0 0 8 8l15-15a9 9 0 0 0 12-8l-6 3-5-5z"/>',
  dinero:
    '<circle class="t" cx="24" cy="24" r="17"/><path d="M29 18c-1-2-3-3-5-3-3 0-5 1.5-5 4 0 6 11 2 11 8 0 2.5-2 4-6 4-2.5 0-4.5-1-5.5-3M24 11v4M24 33v4"/>',
  campana:
    '<path class="t" d="M10 34c3-3 4-7 4-13a10 10 0 0 1 20 0c0 6 1 10 4 13z"/><path d="M20 38a4 4 0 0 0 8 0"/>',
  maleta:
    '<rect class="t" x="6" y="14" width="36" height="26" rx="4"/><path d="M17 14V9h14v5M6 26h36"/>',
  mano:
    '<path class="t" d="M16 41c-4-3-8-9-8-13l4-3 4 4V11a3 3 0 0 1 6 0v10V8a3 3 0 0 1 6 0v13V10a3 3 0 0 1 6 0v14l3-5a3 3 0 0 1 5 3l-4 12c-1 3-3 6-6 8z"/>',
  manos:
    '<path class="t" d="M5 30 14 14l12 8-8 14zM43 30 34 14l-12 8 8 14z"/>',
  etiqueta:
    '<path class="t" d="M6 6h18l18 18-18 18L6 24z"/><circle cx="15" cy="15" r="2.5"/>',
  carrito:
    '<path d="M5 8h6l5 22h20l5-16H13"/><circle class="t" cx="19" cy="38" r="3"/><circle class="t" cx="33" cy="38" r="3"/>',
  coche:
    '<path class="t" d="M5 30v-6l5-9a4 4 0 0 1 4-2h20a4 4 0 0 1 4 2l5 9v6z"/><path d="M5 24h38"/><circle class="t" cx="14" cy="32" r="4"/><circle class="t" cx="34" cy="32" r="4"/>',
  zapato:
    '<path class="t" d="M6 34V14l10 4 6 8h14c4 0 6 3 6 6v2z"/><path d="M6 36h36"/>',
  tren:
    '<rect class="t" x="10" y="6" width="28" height="30" rx="6"/><path d="M10 22h28M16 42l4-6M32 42l-4-6"/><circle cx="17" cy="29" r="1.8"/><circle cx="31" cy="29" r="1.8"/>',
  puerta:
    '<rect class="t" x="11" y="6" width="26" height="36" rx="2"/><circle cx="31" cy="25" r="1.8"/>',
  dialogo:
    '<path class="t" d="M6 8h24a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H17l-7 6v-6H6a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3z"/><path d="M36 17h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-2v6l-7-6H21"/>',
  interrogacion:
    '<circle class="t" cx="24" cy="24" r="18"/><path d="M18 19a6 6 0 1 1 9 5c-2 1-3 2-3 4M24 34h.01" stroke-width="3"/>',
  lupa:
    '<circle class="t" cx="21" cy="21" r="12"/><path d="m30 30 12 12" stroke-width="4"/>',
  letra:
    '<rect class="t" x="6" y="6" width="36" height="36" rx="5"/><path d="M15 34 24 13l9 21M18 28h12"/>',
  oreja:
    '<path class="t" d="M15 20a9 9 0 0 1 18 0c0 6-5 8-5 14a5 5 0 0 1-9 2"/><path d="M21 20a3 3 0 0 1 6 0c0 2-2 3-3 5"/>',
  pelota:
    '<circle class="t" cx="24" cy="24" r="18"/><path d="m24 14 9 7-3 11H18l-3-11zM24 6v8M33 21l9-3M30 32l5 8M18 32l-5 8M15 21 6 18"/>',
  ojo:
    '<path class="t" d="M3 24s8-13 21-13 21 13 21 13-8 13-21 13S3 24 3 24z"/><circle cx="24" cy="24" r="6"/>',
  tele:
    '<rect class="t" x="5" y="9" width="38" height="26" rx="4"/><path d="M16 42h16M24 35v7"/>',
  agua:
    '<path class="t" d="M24 5C16 16 11 22 11 29a13 13 0 0 0 26 0c0-7-5-13-13-24z"/>',
  escoba:
    '<path d="M36 5 22 25"/><path class="t" d="M17 24l9 6 6 11H11z"/>',
  bandera:
    '<path d="M10 6v37"/><path class="t" d="M10 8h28l-6 8 6 8H10z"/>',
  semaforo:
    '<rect class="t" x="14" y="4" width="20" height="40" rx="6"/><g class="s"><circle cx="24" cy="14" r="3.5"/><circle cx="24" cy="24" r="3.5"/><circle cx="24" cy="34" r="3.5"/></g>',
  ropa:
    '<path class="t" d="M17 7 6 14l4 8 5-2v22h18V20l5 2 4-8-11-7a7 7 0 0 1-14 0z"/>',
  gorro:
    '<path class="t" d="M8 36a16 16 0 0 1 32 0z"/><path d="M4 36h40"/>',
  pan:
    '<path class="t" d="M6 24c0-9 8-14 18-14s18 5 18 14c0 3-2 4-4 4v12H10V28c-2 0-4-1-4-4z"/>',
  leche:
    '<path class="t" d="M15 5h18l3 10v26a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V15z"/><path d="M12 20h24M12 33h24"/>',
  manzana:
    '<path class="t" d="M24 14c-6-5-16-2-16 10 0 9 6 18 11 18 3 0 3-1 5-1s2 1 5 1c5 0 11-9 11-18 0-12-10-15-16-10z"/><path d="M24 14c0-4 2-7 6-8"/>',
  pastel:
    '<path class="t" d="M6 24h36v16H6z"/><path d="M10 24c0-6 4-9 7-9s4 3 7 3 4-3 7-3 7 3 7 9M24 8v7"/>',
  familia:
    '<circle class="t" cx="15" cy="12" r="5"/><circle class="t" cx="33" cy="12" r="5"/><circle class="t" cx="24" cy="26" r="4"/><path d="M6 40v-8a9 9 0 0 1 18 0v8M24 40V34a9 9 0 0 1 18 0v6"/>',
  rueda:
    '<circle class="t" cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="4"/><path d="M24 7v13M24 28v13M7 24h13M28 24h13"/>',
  nube:
    '<path class="t" d="M12 36a8 8 0 0 1 0-16 11 11 0 0 1 21-3 9 9 0 0 1 3 19z"/>',
  hoja:
    '<path class="t" d="M8 40C8 20 20 8 41 7c0 21-12 33-31 33"/><path d="M8 40 26 22"/>',
  nieve:
    '<path d="M24 5v38M8 14l32 20M8 34 40 14"/><circle class="t" cx="24" cy="24" r="5"/>',
  flor:
    '<g class="t"><circle cx="24" cy="12" r="6"/><circle cx="36" cy="22" r="6"/><circle cx="31" cy="36" r="6"/><circle cx="17" cy="36" r="6"/><circle cx="12" cy="22" r="6"/></g><circle cx="24" cy="25" r="4"/>',
  sombrilla:
    '<path class="t" d="M5 24a19 19 0 0 1 38 0z"/><path d="M24 24v14a4 4 0 0 1-8 0"/>'
});
