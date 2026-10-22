/* ============================================================
   pictogramas.js — Dibujos para el vocabulario
   ------------------------------------------------------------
   Pictogramas SVG de trazo (viewBox 48x48) en el mismo estilo
   sobrio que los iconos: línea con `currentColor` y un relleno
   suave del mismo color (clase `t`). Así se adaptan solos al
   tema claro/oscuro y al color de cada categoría.

   Uso:  DE.pic('koffer')       → dibujo de una maleta
         DE.pic('flag:at')      → bandera de Austria
         DE.pic('lang:EN')      → burbuja de diálogo con "EN"
         DE.pic('ausweis:1')    → tarjeta de nombre (resalta línea 1)
         DE.pic('globo')        → si no hay pictograma, usa el icono
                                  del mismo nombre de DE.icono()
   Si no existe ninguno devuelve '' (la vista usa un icono de reserva).
   ============================================================ */

DE.pic = (function () {
  'use strict';

  /* ---- Banderas (rectángulo 36x24 centrado) ------------------ */
  function r(x, y, w, h, fill) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h +
      '" fill="' + fill + '" stroke="none"/>';
  }

  /** Estrella de cinco puntas como polígono. */
  function estrella(cx, cy, R, fill) {
    var r2 = R * 0.4, pts = [];
    for (var i = 0; i < 10; i++) {
      var rad = i % 2 === 0 ? R : r2;
      var ang = -Math.PI / 2 + i * Math.PI / 5;
      pts.push((cx + rad * Math.cos(ang)).toFixed(2) + ',' + (cy + rad * Math.sin(ang)).toFixed(2));
    }
    return '<polygon points="' + pts.join(' ') + '" fill="' + fill + '" stroke="none"/>';
  }

  /** Media luna abierta hacia la derecha. `s` = grosor aproximado. */
  function luna(cx, fill, s) {
    var rad = (36 + s * s) / (2 * s);
    return '<path d="M' + cx + ' 18A6 6 0 0 0 ' + cx + ' 30A' + rad.toFixed(2) + ' ' + rad.toFixed(2) +
      ' 0 0 1 ' + cx + ' 18z" fill="' + fill + '" stroke="none"/>';
  }

  var BANDERAS = {
    de: r(6, 12, 36, 8, '#000') + r(6, 20, 36, 8, '#DD0000') + r(6, 28, 36, 8, '#FFCE00'),
    at: r(6, 12, 36, 8, '#ED2939') + r(6, 20, 36, 8, '#fff') + r(6, 28, 36, 8, '#ED2939'),
    ch: r(6, 12, 36, 24, '#D52B1E') + r(22, 17, 4, 14, '#fff') + r(17, 22, 14, 4, '#fff'),
    br: r(6, 12, 36, 24, '#009C3B') +
        '<path d="M24 15 38 24 24 33 10 24z" fill="#FFDF00" stroke="none"/>' +
        '<circle cx="24" cy="24" r="5.2" fill="#002776" stroke="none"/>',
    es: r(6, 12, 36, 6, '#AA151B') + r(6, 18, 36, 12, '#F1BF00') + r(6, 30, 36, 6, '#AA151B'),
    fr: r(6, 12, 12, 24, '#0055A4') + r(18, 12, 12, 24, '#fff') + r(30, 12, 12, 24, '#EF4135'),
    it: r(6, 12, 12, 24, '#009246') + r(18, 12, 12, 24, '#fff') + r(30, 12, 12, 24, '#CE2B37'),
    jp: r(6, 12, 36, 24, '#fff') + '<circle cx="24" cy="24" r="6.5" fill="#BC002D" stroke="none"/>',
    pl: r(6, 12, 36, 12, '#fff') + r(6, 24, 36, 12, '#DC143C'),
    ru: r(6, 12, 36, 8, '#fff') + r(6, 20, 36, 8, '#0039A6') + r(6, 28, 36, 8, '#D52B1E'),
    ua: r(6, 12, 36, 12, '#0057B7') + r(6, 24, 36, 12, '#FFD700'),
    tr: r(6, 12, 36, 24, '#E30A17') + luna(19, '#fff', 2) + estrella(25.5, 24, 3.4, '#fff'),
    dz: r(6, 12, 18, 24, '#006233') + r(24, 12, 18, 24, '#fff') +
        luna(24, '#D21034', 3) + estrella(26.5, 24, 3.6, '#D21034'),
    us: (function () {
      var h = 24 / 7, s = '';
      for (var i = 0; i < 7; i++) s += r(6, (12 + i * h).toFixed(2), 36, h.toFixed(2), i % 2 ? '#fff' : '#B22234');
      return s + r(6, 12, 16, (h * 4).toFixed(2), '#3C3B6E');
    })()
  };

  function bandera(codigo) {
    var b = BANDERAS[codigo];
    if (!b) return '';
    return b + '<rect x="6" y="12" width="36" height="24" rx="1.5" fill="none" ' +
      'stroke="currentColor" stroke-opacity=".45" stroke-width="1.4"/>';
  }

  /* ---- Burbuja con el código de un idioma -------------------- */
  function idioma(codigo) {
    return '<path class="t" d="M8 8h32a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3H24l-8 8v-8H8a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3z"/>' +
      '<text x="24" y="26" text-anchor="middle" font-size="14" font-weight="800" ' +
      'class="s" stroke="none">' + codigo + '</text>';
  }

  /* ---- Tarjeta de nombre; arg = línea a resaltar ------------- */
  function ausweis(arg) {
    var g1 = arg === '1' ? 4.2 : 2, g2 = arg === '2' ? 4.2 : 2;
    return '<rect class="t" x="6" y="11" width="36" height="26" rx="4"/>' +
      '<circle cx="16" cy="21.5" r="3.6"/><path d="M10.5 31c1-3.2 3-4.5 5.5-4.5s4.5 1.3 5.5 4.5"/>' +
      '<path d="M27 20h10" stroke-width="' + g1 + '"/><path d="M27 28h10" stroke-width="' + g2 + '"/>';
  }

  /* ---- Pictogramas sueltos ----------------------------------- */
  var P = {

    /* Deutsch international */
    handtuch:
      '<path d="M8 9h32"/><path class="t" d="M14 9h20v28l-3-2-3 2-4-2-4 2-3-2-3 2z"/>' +
      '<path d="M14 27h20M14 31h20"/>',
    flasche:
      '<rect x="20" y="4" width="8" height="5" rx="1.5"/>' +
      '<path class="t" d="M21 9v5c0 3-6 5-6 10v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V24c0-5-6-7-6-10V9z"/>' +
      '<path d="M15 28h18"/>',
    koffer:
      '<rect class="t" x="7" y="16" width="34" height="24" rx="3"/>' +
      '<path d="M17 16v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M7 27h34M21 27v4h6v-4"/>',
    wurst:
      '<rect class="t" x="6" y="12" width="34" height="9" rx="4.5" transform="rotate(-8 23 16.5)"/>' +
      '<rect class="t" x="8" y="25" width="34" height="9" rx="4.5" transform="rotate(8 25 29.5)"/>' +
      '<path d="M8 43c3-3 5 3 8 0s5 3 8 0 5 3 8 0 5 3 8 0"/>',
    kindergarten:
      '<path class="t" d="M9 21 24 9l15 12v20H9z"/><path d="M5 23 24 8l19 15"/>' +
      '<rect x="20" y="31" width="8" height="10"/><circle cx="24" cy="21" r="3"/>',
    butterbrot:
      '<path class="t" d="M10 19c0-6 6-9 14-9s14 3 14 9c0 2.5-1.5 4-3 5v14a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2V24c-1.5-1-3-2.5-3-5z"/>' +
      '<path d="M15 23c3-2 6 2 9 0s6 2 9 0"/><path d="M24 17c1-3 4-4 6-4 0 2-1 5-6 4z"/>',
    kranke:
      '<circle class="t" cx="20" cy="25" r="14"/>' +
      '<path d="M13 22h4M23 22h4M14 32c3-3.5 9-3.5 12 0"/>' +
      '<rect x="36" y="6" width="5" height="19" rx="2.5"/><circle cx="38.5" cy="29" r="4"/>',
    autobahn:
      '<path class="t" d="M4 44 19 8h10l15 36z"/><path d="M24 40v-5M24 30v-4M24 21v-3M24 13v-2"/>',
    nudeln:
      '<path class="t" d="M6 26h36c0 9-8 16-18 16S6 35 6 26z"/>' +
      '<path d="M10 21c2-5 4 1 6-3s4 2 6-3 4 3 6-1 4 2 6-2M30 6l7 17M35 5l6 17"/>',

    /* Nombres */
    ausweis: ausweis(),

    /* Hobbys */
    camara:
      '<rect class="t" x="5" y="14" width="38" height="25" rx="4"/><path d="M16 14l2-5h12l2 5"/>' +
      '<circle cx="24" cy="26" r="7"/><path d="M37 19h.01" stroke-width="3"/>',
    microfono:
      '<rect class="t" x="17" y="5" width="14" height="22" rx="7"/><path d="M11 22a13 13 0 0 0 26 0M24 35v8M17 43h14"/>',
    olla:
      '<path class="t" d="M8 23h32v11a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6z"/><path d="M5 23h38M3 29h5M40 29h5"/>' +
      '<path d="M16 17c-2-3 2-4 0-7M24 17c-2-3 2-4 0-7M32 17c-2-3 2-4 0-7"/>',
    nadador:
      '<circle class="t" cx="33" cy="13" r="4"/><path d="M10 27c6-6 12-8 20-6M24 21l5-6"/>' +
      '<path d="M4 34c3-3 5 3 8 0s5-3 8 0 5 3 8 0 5-3 8 0 5 3 8 0M4 41c3-3 5 3 8 0s5-3 8 0 5 3 8 0 5-3 8 0 5 3 8 0"/>',
    avion:
      '<path class="t" d="M43 6 5 21l14 6 6 14z"/><path d="M19 27 43 6"/>',
    bailarin:
      '<circle class="t" cx="22" cy="9" r="4"/><path d="M22 14v14M22 18l-11 5M22 18l11-9M22 28l-8 13M22 28l9 13"/>' +
      '<circle cx="38" cy="33" r="2.5"/><path d="M40.5 33v-9l5-1.5"/>',
    corredor:
      '<circle class="t" cx="30" cy="8" r="4"/><path d="M28 14l-5 11M26 17l-9 3M26 17l8 5M23 25l-6 8-8 3M23 25l8 4-1 12"/>' +
      '<path d="M4 14h8M2 21h6"/>',
    claqueta:
      '<rect class="t" x="6" y="20" width="36" height="21" rx="2"/><path class="t" d="M6 20l-1-8 36-6 1 8z"/>' +
      '<path d="M13 18l3-9M21 16l3-9M29 14l3-9M6 29h36"/>',
    balon:
      '<circle class="t" cx="24" cy="24" r="17"/><path d="M24 17l6 4.5-2.3 7h-7.4l-2.3-7z"/>' +
      '<path d="M24 17V7.5M30 21.5l9-3M27.7 28.5l5.5 7.5M20.3 28.5l-5.5 7.5M18 21.5l-9-3"/>',

    /* Lugares */
    plato:
      '<circle class="t" cx="24" cy="26" r="12"/><circle cx="24" cy="26" r="7"/>' +
      '<path d="M7 6v9a3 3 0 0 0 6 0V6M10 6v36M41 6c-3 3-4 8-4 14h4V6zM41 20v22"/>',
    piscina:
      '<path d="M30 30V9a3 3 0 0 1 6 0M40 30V9a3 3 0 0 0-6 0"/><path d="M30 16h10M30 23h10"/>' +
      '<path class="t" d="M4 32c4-3 6 3 10 0s6 3 10 0 6 3 10 0 6 3 10 0v10H4z"/>',
    estadio:
      '<ellipse cx="24" cy="20" rx="20" ry="9"/><path d="M4 20v12c0 5 9 9 20 9s20-4 20-9V20"/>' +
      '<ellipse class="t" cx="24" cy="20" rx="11" ry="4.5"/>',
    mascaras:
      '<path class="t" d="M5 8h18v14a9 9 0 0 1-18 0z"/><path d="M10 14h3M16 14h3M10 21c2 3 6 3 8 0"/>' +
      '<path d="M25 20h18v14a9 9 0 0 1-18 0z"/><path d="M30 26h3M36 26h3M30 34c2-3 6-3 8 0"/>',

    /* Profesiones */
    taxi:
      '<path class="t" d="M5 31l4-9a4 4 0 0 1 4-3h22a4 4 0 0 1 4 3l4 9v8H5z"/><path d="M12 31l2-8h20l2 8z"/>' +
      '<rect x="19" y="10" width="10" height="6" rx="1"/><circle cx="14" cy="39" r="4" class="s"/><circle cx="34" cy="39" r="4" class="s"/>',
    estetoscopio:
      '<path d="M12 6h4M28 6h4M14 6v10a8 8 0 0 0 16 0V6M22 24v7a8 8 0 0 0 16 0v-5"/>' +
      '<circle class="t" cx="38" cy="22" r="4"/>',
    camarero:
      '<path class="t" d="M10 32a14 14 0 0 1 28 0z"/><circle cx="24" cy="15" r="2"/><path d="M5 32h38M14 38h20"/>',
    cruz:
      '<path class="t" d="M18 6h12v12h12v12H30v12H18V30H6V18h12z"/>',
    cama:
      '<path d="M5 10v31M5 33h38v8M43 33v-6a6 6 0 0 0-6-6H21v12"/><circle class="t" cx="13" cy="25" r="4"/>',
    portatil:
      '<rect class="t" x="9" y="10" width="30" height="20" rx="2"/><path d="M4 36h40l-3 4H7zM18 16l-4 4 4 4M30 16l4 4-4 4"/>',
    engranaje:
      '<circle class="t" cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="3.5"/>' +
      '<path stroke-width="4.5" stroke-linecap="butt" d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M10 38l4-4"/>',
    tienda:
      '<path class="t" d="M6 20 9 8h30l3 12z"/><path d="M6 20a4.5 4 0 0 0 9 0 4.5 4 0 0 0 9 0 4.5 4 0 0 0 9 0 4.5 4 0 0 0 9 0"/>' +
      '<path d="M9 26v15h30V26M20 41V31h8v10"/>',
    escuadra:
      '<path class="t" d="M8 40V8l32 32z"/><path d="M14 32V21l11 11z"/>',
    birrete:
      '<path class="t" d="M3 18 24 8l21 10-21 10z"/><path d="M12 23v10c0 3 6 6 12 6s12-3 12-6V23M45 18v12"/>',
    pizarra:
      '<rect class="t" x="5" y="8" width="38" height="25" rx="2"/><path d="M11 16h14M11 23h20M16 33l-4 9M32 33l4 9"/>',

    /* Objetos */
    vaso:
      '<path class="t" d="M12 8h24l-3 32a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2z"/><path d="M13.5 20h21"/>',
    pastillas:
      '<rect class="t" x="6" y="9" width="36" height="30" rx="3"/>' +
      '<circle cx="15" cy="19" r="3.5"/><circle cx="24" cy="19" r="3.5"/><circle cx="33" cy="19" r="3.5"/>' +
      '<circle cx="15" cy="30" r="3.5"/><circle cx="24" cy="30" r="3.5"/><circle cx="33" cy="30" r="3.5"/>',
    recibo:
      '<path class="t" d="M12 6h24v36l-4-3-4 3-4-3-4 3-4-3-4 3z"/><path d="M18 15h12M18 22h12M18 29h7"/>',
    jeringa:
      '<g transform="rotate(45 24 24)"><rect class="t" x="19" y="10" width="10" height="22" rx="2"/>' +
      '<path d="M24 10V4M18 4h12M15 10h18M24 32v10M19 18h5M19 23h5"/></g>',
    tableta:
      '<circle class="t" cx="24" cy="24" r="15"/><path d="M12 31 36 17"/>',
    km:
      '<rect class="t" x="7" y="8" width="34" height="21" rx="3"/><path d="M24 29v13M17 42h14"/>' +
      '<text x="24" y="23" text-anchor="middle" font-size="12" font-weight="800" class="s" stroke="none">km</text>',

    /* Ciudad */
    arbol:
      '<path class="t" d="M24 5a9 9 0 0 1 9 9 8 8 0 0 1-4 14H19a8 8 0 0 1-4-14 9 9 0 0 1 9-9z"/>' +
      '<path d="M24 28v14M24 37l-5-5M24 33l5-4M16 42h16"/>',
    markt:
      '<path class="t" d="M6 18 9 7h30l3 11z"/><path d="M6 18a4.5 4 0 0 0 9 0 4.5 4 0 0 0 9 0 4.5 4 0 0 0 9 0 4.5 4 0 0 0 9 0"/>' +
      '<path d="M9 26v16M39 26v16M8 33h32"/><circle cx="16" cy="29.5" r="2.5"/><circle cx="24" cy="29.5" r="2.5"/><circle cx="32" cy="29.5" r="2.5"/>',
    ancla:
      '<circle class="t" cx="24" cy="9" r="4"/><path d="M24 13v28M16 21h16M8 30a16 16 0 0 0 32 0M8 30l-3 4M40 30l3 4"/>',
    metro:
      '<rect class="t" x="8" y="8" width="32" height="32" rx="5"/><path stroke-width="3.5" d="M17 15v12a7 7 0 0 0 14 0V15"/>',
    arriba:
      '<path class="t" d="M24 6 38 22H29v20H19V22H10z"/>',
    izquierda:
      '<path class="t" d="M6 24 22 9v9h20v12H22v9z"/>',
    derecha:
      '<path class="t" d="M42 24 26 9v9H6v12h20v9z"/>',

    /* Tiempo y trabajo */
    finde:
      '<rect x="5" y="9" width="38" height="33" rx="3"/><path d="M5 18h38M14 5v8M34 5v8"/>' +
      '<g class="s"><circle cx="11" cy="30" r="1.6"/><circle cx="17" cy="30" r="1.6"/><circle cx="23" cy="30" r="1.6"/>' +
      '<circle cx="29" cy="30" r="1.6"/></g><rect class="t" x="33" y="24" width="8" height="12" rx="2"/>',
    sonrisa:
      '<circle class="t" cx="24" cy="24" r="17"/><path d="M17 20h.01M31 20h.01" stroke-width="3.5"/><path d="M16 28c3 5 13 5 16 0"/>',
    triste:
      '<circle class="t" cx="24" cy="24" r="17"/><path d="M17 20h.01M31 20h.01" stroke-width="3.5"/><path d="M16 33c3-5 13-5 16 0"/>'
  };

  /* ---- Función pública --------------------------------------- */
  function dibujar(contenido) {
    return '<svg class="pic" viewBox="0 0 48 48" aria-hidden="true" focusable="false">' + contenido + '</svg>';
  }

  function pic(especificacion) {
    if (!especificacion) return '';

    var partes = String(especificacion).split(':');
    var nombre = partes[0], arg = partes[1] || '';

    if (nombre === 'flag') {
      var b = bandera(arg);
      return b ? dibujar(b) : '';
    }
    if (nombre === 'lang')    return dibujar(idioma(arg));
    if (nombre === 'ausweis') return dibujar(ausweis(arg));
    if (P[nombre])            return dibujar(P[nombre]);

    /* Si no hay dibujo propio, se usa el icono de la interfaz. */
    if (DE.icono && DE.icono.existe(nombre)) return DE.icono(nombre, 'ico-pic');

    return '';
  }

  pic.catalogo = function () {
    return Object.keys(P).concat(Object.keys(BANDERAS).map(function (c) { return 'flag:' + c; }));
  };

  return pic;
})();
