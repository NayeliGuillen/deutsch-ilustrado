/* ============================================================
   core/numeros-de.js — Números, fechas y horas en alemán
   ------------------------------------------------------------
   Convierte cifras en palabras (y al revés se comprueba en los
   ejercicios) para generar práctica infinita y SIEMPRE correcta.

     DE.num.palabras(347)          → 'dreihundertsiebenundvierzig'
     DE.num.ordinal(3)             → 'dritte'   (nominativo)
     DE.num.ordinal(3, 'dat')      → 'dritten'  (am dritten Mai)
     DE.num.fecha(3, 5)            → { nom:'der dritte Mai', dat:'am dritten Mai', num:'3. Mai' }
     DE.num.hora(7, 35)            → { inoff:'fünf nach halb acht', off:'sieben Uhr fünfunddreißig', ... }
     DE.num.precio(2, 20)          → 'zwei Euro zwanzig'
   ============================================================ */

DE.num = (function () {
  'use strict';

  var U = ['null', 'ein', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn',
    'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn'];
  var T = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];

  var MESES = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August',
    'September', 'Oktober', 'November', 'Dezember'];
  var MESES_ES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto',
    'septiembre', 'octubre', 'noviembre', 'diciembre'];
  var ESTACIONES = ['Winter', 'Frühling', 'Sommer', 'Herbst'];
  var ESTACIONES_ES = { Winter: 'invierno', 'Frühling': 'primavera', Sommer: 'verano', Herbst: 'otoño' };
  var DIAS = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
  var DIAS_ES = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

  /** Menos de 100. `final` = la palabra termina aquí (1 → "eins"). */
  function menor100(n, final) {
    if (n < 20) return n === 1 ? (final ? 'eins' : 'ein') : U[n];
    var t = Math.floor(n / 10), u = n % 10;
    if (!u) return T[t];
    return (u === 1 ? 'ein' : U[u]) + 'und' + T[t];
  }

  function menor1000(n, final) {
    var h = Math.floor(n / 100), r = n % 100, s = '';
    if (h) s += (h === 1 ? '' : U[h]) + 'hundert';
    if (r) s += menor100(r, final);
    else if (!h) s = menor100(n, final);
    return s;
  }

  function palabras(n) {
    n = Math.floor(n);
    if (n === 0) return 'null';
    var s = '';
    var miles = Math.floor(n / 1000), resto = n % 1000;
    if (miles) s += (miles === 1 ? '' : menor1000(miles, false)) + 'tausend';
    if (resto) s += menor1000(resto, true);
    return s;
  }

  /** Año hablado: 1969 → neunzehnhundertneunundsechzig · 2024 → zweitausendvierundzwanzig. */
  function anio(n) {
    if (n >= 2000) return 'zweitausend' + (n % 100 ? menor100(n % 100, true) : '');
    return palabras(Math.floor(n / 100)) + 'hundert' + (n % 100 ? menor100(n % 100, true) : '');
  }

  function ordinal(n, caso) {
    var especiales = { 1: 'erst', 3: 'dritt', 7: 'siebt', 8: 'acht' };
    var base;
    if (especiales[n]) base = especiales[n];
    else if (n < 20) base = U[n] + 't';
    else base = palabras(n).replace(/eins$/, 'ein') + 'st';
    return base + (caso === 'dat' ? 'en' : 'e');
  }

  function fecha(dia, mes) {
    var m = MESES[mes - 1];
    return {
      nom: 'der ' + ordinal(dia) + ' ' + m,
      dat: 'am ' + ordinal(dia, 'dat') + ' ' + m,
      num: dia + '. ' + m,
      dia: dia, mes: mes
    };
  }

  /** Hora del reloj de 12 h: 0 → zwölf. `conUhr` usa "ein"; sin Uhr usa "eins". */
  function h12(h, conUhr) {
    var x = h % 12 || 12;
    return x === 1 ? (conUhr ? 'ein' : 'eins') : U[x];
  }

  /**
   * Hora completa. Acepta minutos 0–59 (inoficial solo para múltiplos de 5
   * con fórmula exacta; el resto sale como "Stunde Minuten" oficial).
   */
  function hora(h, m) {
    var sig = (h + 1) % 24;
    var inoff = [], texto;
    if (m === 0) inoff.push(h12(h, true) + ' Uhr');
    else if (m === 5) inoff.push('fünf nach ' + h12(h));
    else if (m === 10) inoff.push('zehn nach ' + h12(h));
    else if (m === 15) inoff.push('Viertel nach ' + h12(h));
    else if (m === 20) inoff.push('zwanzig nach ' + h12(h), 'zehn vor halb ' + h12(sig));
    else if (m === 25) inoff.push('fünf vor halb ' + h12(sig), 'fünfundzwanzig nach ' + h12(h));
    else if (m === 30) inoff.push('halb ' + h12(sig));
    else if (m === 35) inoff.push('fünf nach halb ' + h12(sig), 'fünfundzwanzig vor ' + h12(sig));
    else if (m === 40) inoff.push('zwanzig vor ' + h12(sig), 'zehn nach halb ' + h12(sig));
    else if (m === 45) inoff.push('Viertel vor ' + h12(sig));
    else if (m === 50) inoff.push('zehn vor ' + h12(sig));
    else if (m === 55) inoff.push('fünf vor ' + h12(sig));
    texto = inoff[0] || null;

    var off = (h === 0 ? 'null' : menor100(h, false)) + ' Uhr' + (m ? ' ' + menor100(m, true) : '');
    var dig = (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
    return { h: h, m: m, inoff: texto, inoffTodas: inoff, off: off, dig: dig };
  }

  /** 2,20 € → "zwei Euro zwanzig"; 0,99 → "neunundneunzig Cent"; 1,09 → "ein Euro neun". */
  function precio(euros, cent) {
    if (!euros) return menor100(cent, true) + ' Cent';
    var e = palabras(euros).replace(/eins$/, 'ein') + ' Euro';
    return cent ? e + ' ' + menor100(cent, true) : e;
  }

  return {
    palabras: palabras, anio: anio, ordinal: ordinal, fecha: fecha, hora: hora, precio: precio,
    h12: h12, menor100: menor100,
    MESES: MESES, MESES_ES: MESES_ES, ESTACIONES: ESTACIONES, ESTACIONES_ES: ESTACIONES_ES,
    DIAS: DIAS, DIAS_ES: DIAS_ES,
    /** Estación (hemisferio norte, como en el libro): marzo–mayo = primavera. */
    estacionDe: function (mes) {
      if (mes === 12 || mes <= 2) return 'Winter';
      if (mes <= 5) return 'Frühling';
      if (mes <= 8) return 'Sommer';
      return 'Herbst';
    }
  };
})();
