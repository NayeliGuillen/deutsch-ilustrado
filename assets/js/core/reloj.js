/* ============================================================
   core/reloj.js — Reloj analógico en SVG
   ------------------------------------------------------------
     DE.reloj.svg(7, 35)            → reloj que marca las 7:35
     DE.reloj.svg(7, 35, {tam: 96}) → más pequeño (para opciones)
   Aguja corta = hora (gruesa), aguja larga = minutos (roja).
   Usa los colores del tema, así funciona en claro y oscuro.
   ============================================================ */

DE.reloj = (function () {
  'use strict';

  function punto(angulo, radio) {
    var a = (angulo - 90) * Math.PI / 180;
    return [60 + radio * Math.cos(a), 60 + radio * Math.sin(a)];
  }

  function aguja(angulo, largo, clase) {
    var p = punto(angulo, largo), q = punto(angulo + 180, 8);
    return '<line class="' + clase + '" x1="' + q[0].toFixed(1) + '" y1="' + q[1].toFixed(1) +
      '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '"/>';
  }

  function svg(h, m, op) {
    op = op || {};
    var tam = op.tam || 150, i, marcas = '', nums = '';
    for (i = 0; i < 60; i++) {
      var grande = i % 5 === 0;
      var a = punto(i * 6, grande ? 49 : 52), b = punto(i * 6, 56);
      marcas += '<line class="' + (grande ? 'rj-marca-g' : 'rj-marca') + '" x1="' + a[0].toFixed(1) +
        '" y1="' + a[1].toFixed(1) + '" x2="' + b[0].toFixed(1) + '" y2="' + b[1].toFixed(1) + '"/>';
    }
    for (i = 1; i <= 12; i++) {
      var p = punto(i * 30, 40);
      nums += '<text class="rj-num" x="' + p[0].toFixed(1) + '" y="' + (p[1] + 3.6).toFixed(1) +
        '" text-anchor="middle">' + i + '</text>';
    }
    var angH = ((h % 12) + m / 60) * 30, angM = m * 6;
    return '<svg class="reloj" viewBox="0 0 120 120" width="' + tam + '" height="' + tam +
      '" role="img" aria-label="Reloj analógico">' +
      '<circle class="rj-cara" cx="60" cy="60" r="58"/>' + marcas + nums +
      aguja(angH, 28, 'rj-hora') + aguja(angM, 42, 'rj-min') +
      '<circle class="rj-centro" cx="60" cy="60" r="3.2"/></svg>';
  }

  return { svg: svg };
})();
