/* ============================================================
   iconos.js — Sistema de iconos SVG
   ------------------------------------------------------------
   Iconos de trazo (24x24, stroke = currentColor) dibujados en
   línea. Sustituyen a los emojis: heredan el color y el tamaño
   del texto que los rodea, se ven nítidos en cualquier pantalla
   y mantienen un aspecto uniforme y sobrio.

   Uso:  DE.icono('idea')            → <svg class="ico">…</svg>
         DE.icono('check', 'ico-lg') → con clase extra
   ============================================================ */

DE.iconos = (function () {
  'use strict';

  /* Cada entrada son los trazos internos del SVG (viewBox 0 0 24 24). */
  var TRAZOS = {

    /* --- Navegación e interfaz --- */
    inicio:      '<path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V20a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1V9.5"/>',
    buscar:      '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.7-3.7"/>',
    menu:        '<path d="M4 7h16M4 12h16M4 17h16"/>',
    cerrar:      '<path d="m6 6 12 12M18 6 6 18"/>',
    subir:       '<path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M4 20h16"/>',
    camara:      '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    portapapeles:'<rect x="6" y="5" width="12" height="16" rx="2"/><path d="M9 5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M9 11h6M9 15h6"/>',
    sol:         '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    luna:        '<path d="M20 14.7A8.6 8.6 0 0 1 9.3 4 8.6 8.6 0 1 0 20 14.7z"/>',
    audio:       '<path d="M11 5 6.5 9H3v6h3.5L11 19z"/><path d="M15.2 8.8a4.6 4.6 0 0 1 0 6.4"/><path d="M18 6a8.6 8.6 0 0 1 0 12"/>',
    'audio-off': '<path d="M11 5 6.5 9H3v6h3.5L11 19z"/><path d="m15.5 9.5 5 5M20.5 9.5l-5 5"/>',
    flechaIzq:   '<path d="M19 12H5"/><path d="m11 6-6 6 6 6"/>',
    flechaDer:   '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    check:       '<path d="m5 12.5 4.5 4.5L19 7"/>',
    checkCirculo:'<circle cx="12" cy="12" r="9"/><path d="m8 12.2 2.7 2.8L16 9.5"/>',
    estrella:    '<path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.8l5.9-.9z"/>',
    barajar:     '<path d="M3 6h4l10 12h4"/><path d="M3 18h4l2.4-2.9"/><path d="M14.6 8.9 17 6h4"/><path d="m18 3 3 3-3 3M18 15l3 3-3 3"/>',
    actualizar:  '<path d="M20.5 12a8.5 8.5 0 1 1-2.8-6.3"/><path d="M20.5 4v5h-5"/>',
    jugar:       '<circle cx="12" cy="12" r="9"/><path d="M10.3 8.6 16 12l-5.7 3.4z"/>',
    prohibido:   '<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',

    /* --- Conceptos --- */
    idea:        '<path d="M9.5 18.5h5"/><path d="M10.2 21.2h3.6"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5.9 1.1 1 1.7h5.2c.1-.6.4-1.2 1-1.7A6 6 0 0 0 12 3z"/>',
    info:        '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><path d="M12 7.8h.01"/>',
    alerta:      '<path d="M12 4.2 2.7 20h18.6z"/><path d="M12 10v3.8"/><path d="M12 16.8h.01"/>',
    alertaCirc:  '<circle cx="12" cy="12" r="9"/><path d="M12 7.4v5.4"/><path d="M12 16.4h.01"/>',
    pregunta:    '<circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.5 2.5 0 1 1 3.5 2.5c-.7.3-1.1 1-1.1 1.7v.3"/><path d="M12 17.4h.01"/>',
    diana:       '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none"/>',
    brujula:     '<circle cx="12" cy="12" r="9"/><path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1z"/>',
    premio:      '<circle cx="12" cy="9" r="5.5"/><path d="m8.6 13.7-1.4 7.3 4.8-2.5 4.8 2.5-1.4-7.3"/>',
    rayo:        '<path d="M13 3 5.6 13.6h6L11 21l7.4-10.6h-6z"/>',
    llave:       '<circle cx="8" cy="15.5" r="4"/><path d="m10.9 12.6 8.6-8.6"/><path d="m17 6.5 2.2 2.2M14.6 8.9l2.2 2.2"/>',
    candado:     '<rect x="4.5" y="10" width="15" height="10.5" rx="2"/><path d="M8 10V7.6a4 4 0 0 1 8 0V10"/>',
    tijeras:     '<circle cx="6.2" cy="6.6" r="2.6"/><circle cx="6.2" cy="17.4" r="2.6"/><path d="M8.4 8 20 18.4M20 5.6 8.4 16"/>',
    enlace:      '<path d="M10.2 13.6a4.2 4.2 0 0 0 5.9 0l2.6-2.6a4.2 4.2 0 0 0-5.9-5.9l-1.3 1.3"/><path d="M13.8 10.4a4.2 4.2 0 0 0-5.9 0l-2.6 2.6a4.2 4.2 0 0 0 5.9 5.9l1.3-1.3"/>',
    capas:       '<path d="m12 3 9 4.8-9 4.8-9-4.8z"/><path d="m3.4 12.6 8.6 4.6 8.6-4.6"/>',
    mas:         '<path d="M12 5.5v13M5.5 12h13"/>',

    /* --- Contenido y materias --- */
    tipografia:  '<path d="M3.5 20 8.8 5l5.3 15"/><path d="M5.4 15.3h6.9"/><path d="M20.5 20v-5.6a2.6 2.6 0 0 0-5.2 0"/><path d="M20.5 17.2h-2.7a2 2 0 0 0 0 4h2.7"/>',
    libro:       '<path d="M5 5a2 2 0 0 1 2-2h12v15H7a2 2 0 0 0-2 2z"/><path d="M5 18a2 2 0 0 1 2-2h12v5H7a2 2 0 0 1-2-2z"/>',
    libros:      '<rect x="3" y="7" width="4.2" height="13" rx="1"/><rect x="9.4" y="4" width="4.2" height="16" rx="1"/><rect x="15.8" y="9" width="4.2" height="11" rx="1"/>',
    documento:   '<path d="M13.2 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.8z"/><path d="M13.2 3v5.8H19"/><path d="M8.6 13h6.8M8.6 16.4h6.8"/>',
    lista:       '<path d="M9 6.5h11M9 12h11M9 17.5h11"/><path d="M4.6 6.5h.01M4.6 12h.01M4.6 17.5h.01"/>',
    tabla:       '<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><path d="M3.5 9.6h17M9.6 9.6V19.5"/>',
    lapiz:       '<path d="M4 20h4L20.1 7.9a2.8 2.8 0 0 0-4-4L4 16z"/><path d="m14.2 5.8 4 4"/>',
    numeros:     '<path d="M9.2 3.6 7.6 20.4M16.6 3.6 15 20.4M4 8.6h16.2M3.4 15.4h16.2"/>',
    paleta:      '<path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.9-1 1.6-2-.3-1 .4-1.9 1.5-1.9H17a4.2 4.2 0 0 0 4.2-4.2C21.2 7.3 17 3 12 3z"/><circle cx="8" cy="11" r="1.1" fill="currentColor" stroke="none"/><circle cx="12" cy="7.8" r="1.1" fill="currentColor" stroke="none"/><circle cx="16" cy="11" r="1.1" fill="currentColor" stroke="none"/>',
    grafico:     '<path d="m3 16.5 5.6-5.6 3.4 3.4L21 5.7"/><path d="M15.2 5.7H21v5.8"/>',
    globo:       '<circle cx="12" cy="12" r="9"/><path d="M3.2 9.6h17.6M3.2 14.4h17.6"/><path d="M12 3c2.5 2.4 3.8 5.4 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.4-3.8-9S9.5 5.4 12 3z"/>',
    reloj:       '<circle cx="12" cy="12" r="9"/><path d="M12 6.8v5.4l3.4 2.1"/>',
    calendario:  '<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M3.5 10.2h17M8.2 3v4M15.8 3v4"/>',
    musica:      '<path d="M9 18V6.2l11-2.2v12"/><circle cx="6.4" cy="18" r="2.6"/><circle cx="17.4" cy="16" r="2.6"/>',
    auriculares: '<path d="M4 14.5V12a8 8 0 0 1 16 0v2.5"/><rect x="2.4" y="13.6" width="4.2" height="6.8" rx="2.1"/><rect x="17.4" y="13.6" width="4.2" height="6.8" rx="2.1"/>',
    mensaje:     '<path d="M20.5 14.6a2 2 0 0 1-2 2H8l-4.5 4V5.4a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"/>',
    personas:    '<circle cx="9" cy="8" r="3.6"/><path d="M2.6 20.2a6.4 6.4 0 0 1 12.8 0"/><path d="M15.8 5.2a3.6 3.6 0 0 1 0 5.6"/><path d="M17.6 14.4a6.4 6.4 0 0 1 3.8 5.8"/>',
    corazon:     '<path d="M12 20.3S4.2 15.4 4.2 10.4A3.9 3.9 0 0 1 12 7.6a3.9 3.9 0 0 1 7.8 2.8c0 5-7.8 9.9-7.8 9.9z"/>',
    regalo:      '<rect x="3.5" y="9.4" width="17" height="11.1" rx="1.5"/><path d="M3.5 13.8h17M12 9.4v11.1"/><path d="M12 9.4S10.6 5 8.6 5a2.2 2.2 0 0 0 0 4.4zM12 9.4S13.4 5 15.4 5a2.2 2.2 0 0 1 0 4.4z"/>',
    maletin:     '<rect x="2.6" y="7" width="18.8" height="13.2" rx="2"/><path d="M8.6 7V5.6a2 2 0 0 1 2-2h2.8a2 2 0 0 1 2 2V7"/><path d="M2.6 12.4h18.8"/>',
    cafe:        '<path d="M4 7.8h11v5.4a5.5 5.5 0 0 1-11 0z"/><path d="M15 9.2h2.4a2.6 2.6 0 0 1 0 5.2H15"/><path d="M4 20h11"/>',
    bolsa:       '<path d="M5.2 7.8h13.6l-1.1 12.4H6.3z"/><path d="M9 7.8V6a3 3 0 0 1 6 0v1.8"/>',
    ubicacion:   '<path d="M12 21.2s7-6.3 7-11.2a7 7 0 1 0-14 0c0 4.9 7 11.2 7 11.2z"/><circle cx="12" cy="10" r="2.6"/>',
    moneda:      '<circle cx="12" cy="12" r="9"/><path d="M15.6 8.6a4.2 4.2 0 1 0 0 6.8"/><path d="M7.6 11h6M7.6 13.4h5.4"/>',
    telefono:    '<path d="M6.4 3.4h3.1l1.5 4-2 1.5a12.4 12.4 0 0 0 6.1 6.1l1.5-2 4 1.5v3.1a1.6 1.6 0 0 1-1.7 1.6A17.2 17.2 0 0 1 4.8 5.1a1.6 1.6 0 0 1 1.6-1.7z"/>',
    carta:       '<rect x="3" y="6.4" width="12.6" height="14.1" rx="2"/><path d="M7.6 3.5h11a2 2 0 0 1 2 2v11"/>',
    repetir:     '<path d="M4 9.4V8.6a3 3 0 0 1 3-3h10.4"/><path d="m14.4 2.4 3.2 3.2-3.2 3.2"/><path d="M20 14.6v.8a3 3 0 0 1-3 3H6.6"/><path d="m9.6 21.6-3.2-3.2 3.2-3.2"/>'
  };

  /* Nombres alternativos, para que las lecciones puedan usar
     una palabra natural sin conocer el catálogo exacto. */
  var ALIAS = {
    atencion: 'alerta', ojo: 'alerta', truco: 'idea', consejo: 'idea',
    nota: 'lapiz', escribir: 'lapiz', ejemplo: 'mensaje', hablar: 'mensaje',
    tiempo: 'reloj', fecha: 'calendario', dinero: 'moneda', compras: 'bolsa',
    comida: 'cafe', trabajo: 'maletin', salud: 'corazon', viaje: 'ubicacion',
    pin: 'ubicacion', ok: 'checkCirculo', meta: 'diana', clave: 'llave',
    orden: 'lista', resumen: 'tabla', practica: 'jugar', vocabulario: 'libros'
  };

  function icono(nombre, clases) {
    var real = TRAZOS[nombre] ? nombre : (ALIAS[nombre] || null);

    if (!real) {
      console.warn('[DE.icono] Icono desconocido:', nombre);
      real = 'info';
    }

    return '<svg class="ico' + (clases ? ' ' + clases : '') + '" viewBox="0 0 24 24" ' +
      'fill="none" stroke="currentColor" stroke-width="1.7" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      TRAZOS[real] + '</svg>';
  }

  icono.existe = function (nombre) { return !!(TRAZOS[nombre] || ALIAS[nombre]); };
  icono.catalogo = function () { return Object.keys(TRAZOS); };

  return icono;
})();

/* Atajo cómodo: DE.icono(...) */
DE.icono = DE.iconos;
