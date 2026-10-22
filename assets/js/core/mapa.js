/* ============================================================
   core/mapa.js — Mapas de ciudad para practicar direcciones
   ------------------------------------------------------------
   La ciudad es una cuadrícula de 4 x 4 cruces (nodos) y 3 x 3
   manzanas (edificios). El alumno empieza en un cruce, mirando
   hacia una dirección, y sigue instrucciones como
   "Gehen Sie links, dann geradeaus. Die Post ist rechts."

   Todo se CALCULA, nada se escribe a mano: dado el punto de
   partida y los pasos, simular() devuelve el recorrido y el
   edificio de destino. Así la respuesta correcta de cada
   ejercicio es siempre coherente con el mapa.

   Coordenadas: c = columna 0..3 (oeste → este)
                r = fila    0..3 (norte → sur, arriba → abajo)
   Pasos: 'g' geradeaus · 'l' links · 'r' rechts
   Cada paso recorre UNA calle hasta el siguiente cruce.
   ============================================================ */

DE.mapa = (function () {
  'use strict';

  /* ---- Ciudades (filas de arriba a abajo) ------------------- */
  var MAPAS = {
    A: [
      ['das Museum',   'die Bank',      'das Hotel'],
      ['die Post',     'der Park',      'das Café'],
      ['die Apotheke', 'der Bahnhof',   'das Kino']
    ],
    B: [
      ['die Schule',       'der Supermarkt',  'die Kirche'],
      ['das Krankenhaus',  'der Markt',       'das Rathaus'],
      ['das Restaurant',   'die Bibliothek',  'das Theater']
    ],
    C: [
      ['die Bäckerei', 'das Kino',   'die Bank'],
      ['der Bahnhof',  'das Hotel',  'die Apotheke'],
      ['das Café',     'das Museum', 'der Supermarkt']
    ]
  };

  var VECTOR = { N: [0, -1], E: [1, 0], S: [0, 1], W: [-1, 0] };
  var IZQ = { N: 'W', W: 'S', S: 'E', E: 'N' };
  var DER = { N: 'E', E: 'S', S: 'W', W: 'N' };
  var GIRO = { 'W': 270, 'N': 0, 'E': 90, 'S': 180 };
  var PALABRA = { g: 'geradeaus', l: 'links', r: 'rechts' };

  function mayus(t) { return t.charAt(0).toUpperCase() + t.slice(1); }

  /** Cuadrícula de nombres para un mapa. */
  function nombre(mapa, c, r) { return MAPAS[mapa][r][c]; }

  /**
   * Recorre los pasos y devuelve el resultado.
   * @param {{mapa:string, inicio:number[], dir:string, pasos:string, lado:string}} e
   * @returns {{ok:boolean, error?:string, ruta:number[][], celda?:number[],
   *            nombre?:string, texto:string}}
   */
  function simular(e) {
    var c = e.inicio[0], r = e.inicio[1], dir = e.dir;
    var ruta = [[c, r]];
    var i, paso, v;
    var fallo = function (msg) { return { ok: false, error: msg, ruta: ruta, texto: '' }; };

    if (!MAPAS[e.mapa]) return fallo('mapa desconocido ' + e.mapa);
    if (!VECTOR[dir]) return fallo('dirección desconocida ' + dir);
    if (c < 0 || c > 3 || r < 0 || r > 3) return fallo('inicio fuera del mapa');
    if (!e.pasos || /[^glr]/.test(e.pasos)) return fallo('pasos inválidos');

    for (i = 0; i < e.pasos.length; i++) {
      paso = e.pasos.charAt(i);
      if (paso === 'l') dir = IZQ[dir];
      else if (paso === 'r') dir = DER[dir];
      v = VECTOR[dir];
      c += v[0]; r += v[1];
      if (c < 0 || c > 3 || r < 0 || r > 3) return fallo('se sale del mapa en el paso ' + (i + 1));
      ruta.push([c, r]);
    }

    /* Edificio al lado indicado de la ÚLTIMA calle recorrida. */
    var a = ruta[ruta.length - 2], b = ruta[ruta.length - 1];
    var ladoDir = e.lado === 'l' ? IZQ[dir] : DER[dir];
    var horizontal = (dir === 'E' || dir === 'W');
    var celdaC, celdaR;
    if (horizontal) {
      celdaC = Math.min(a[0], b[0]);
      celdaR = ladoDir === 'N' ? a[1] - 1 : a[1];
    } else {
      celdaR = Math.min(a[1], b[1]);
      celdaC = ladoDir === 'W' ? a[0] - 1 : a[0];
    }
    if (celdaC < 0 || celdaC > 2 || celdaR < 0 || celdaR > 2) {
      return fallo('no hay edificio de ese lado (borde del mapa)');
    }
    var nom = nombre(e.mapa, celdaC, celdaR);
    return {
      ok: true, ruta: ruta, celda: [celdaC, celdaR], nombre: nom,
      dirFinal: dir, texto: texto(e.pasos, e.lado, nom)
    };
  }

  /** "Gehen Sie links, dann geradeaus. Die Post ist rechts." */
  function texto(pasos, lado, nom) {
    var partes = pasos.split('').map(function (p, i) {
      return (i ? 'dann ' : '') + PALABRA[p];
    });
    return 'Gehen Sie ' + partes.join(', ') + '. ' + mayus(nom) + ' ist ' +
      (lado === 'l' ? 'links' : 'rechts') + '.';
  }

  /** Solo la parte de ir: "Gehen Sie links, dann geradeaus." */
  function textoRuta(pasos) {
    return 'Gehen Sie ' + pasos.split('').map(function (p, i) {
      return (i ? 'dann ' : '') + PALABRA[p];
    }).join(', ') + '.';
  }

  /* ---- Dibujo SVG ------------------------------------------- */
  var contador = 0;
  var X = function (c) { return 30 + c * 100; };
  var Y = function (r) { return 30 + r * 100; };

  /**
   * @param {string} mapa  'A' | 'B' | 'C'
   * @param {Object} op    inicio, dir, ruta (nodos) para dibujar el camino,
   *                       interactivo (celdas clicables), marcar {c,r,clase}
   */
  function svg(mapa, op) {
    op = op || {};
    var id = 'mp' + (++contador);
    var h = '<svg class="mapa-svg" viewBox="0 0 360 360" role="img" aria-label="Plano de la ciudad">';

    h += '<defs><marker id="' + id + '" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">' +
         '<path d="M0 0 L10 5 L0 10 z" class="mapa-flecha-punta"/></marker></defs>';
    h += '<rect x="0" y="0" width="360" height="360" rx="14" class="mapa-fondo"/>';

    /* calles */
    var i;
    for (i = 0; i < 4; i++) {
      h += '<rect x="10" y="' + (Y(i) - 9) + '" width="340" height="18" rx="4" class="mapa-calle"/>';
      h += '<rect x="' + (X(i) - 9) + '" y="10" width="18" height="340" rx="4" class="mapa-calle"/>';
    }

    /* manzanas */
    var r, c, nom, partes, art, resto, cls, extra;
    for (r = 0; r < 3; r++) {
      for (c = 0; c < 3; c++) {
        nom = nombre(mapa, c, r);
        partes = nom.split(' ');
        art = partes[0]; resto = partes.slice(1).join(' ');
        cls = 'mapa-celda';
        if (op.marcar) {
          op.marcar.forEach(function (m) {
            if (m.c === this.c && m.r === this.r) cls += ' ' + m.clase;
          }, { c: c, r: r });
        }
        extra = op.interactivo
          ? ' tabindex="0" role="button" aria-label="' + nom + '" data-c="' + c + '" data-r="' + r + '"'
          : '';
        h += '<g class="' + cls + '"' + extra + '>' +
          '<rect x="' + (X(c) + 11) + '" y="' + (Y(r) + 11) + '" width="78" height="78" rx="9" class="mapa-edificio"/>' +
          '<text x="' + (X(c) + 50) + '" y="' + (Y(r) + 44) + '" class="mapa-art">' + art + '</text>' +
          '<text x="' + (X(c) + 50) + '" y="' + (Y(r) + 62) + '" class="mapa-nom">' + resto + '</text>' +
        '</g>';
      }
    }

    /* recorrido */
    if (op.ruta && op.ruta.length > 1) {
      h += '<polyline class="mapa-ruta" marker-end="url(#' + id + ')" points="' +
        op.ruta.map(function (n) { return X(n[0]) + ',' + Y(n[1]); }).join(' ') + '"/>';
    }

    /* tú */
    if (op.inicio) {
      h += '<g transform="translate(' + X(op.inicio[0]) + ' ' + Y(op.inicio[1]) + ') rotate(' + GIRO[op.dir] + ')">' +
        '<circle r="13" class="mapa-yo"/>' +
        '<path d="M0 -8 L7 6 L0 3 L-7 6 z" class="mapa-yo-flecha"/></g>';
    }

    return h + '</svg>';
  }

  return {
    MAPAS: MAPAS,
    simular: simular,
    texto: texto,
    textoRuta: textoRuta,
    nombre: nombre,
    svg: svg
  };
})();
