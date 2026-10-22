/* ============================================================
   data/entrenamiento-articulos.js — Entrenamiento: der, die, das
   ------------------------------------------------------------
   Seis niveles, de reconocer a dominar. Los dos últimos son
   automáticos: eligen sustantivos al azar de TODO el vocabulario
   de la guía, así nunca repites el mismo examen.
   ============================================================ */

(function () {
  'use strict';

  var A = ['der', 'die', 'das'];

  /** Pregunta de artículo con tres opciones fijas der / die / das. */
  function art(palabra, es, gen, why, visual) {
    return {
      t: 'opcion', fijo: true,
      p: '¿Qué artículo lleva "' + palabra + '"? (' + es + ')',
      ops: A, ok: A.indexOf(gen), why: why, visual: visual, audio: gen + ' ' + palabra
    };
  }

  /** Igual, pero mostrando de qué piezas se compone la palabra. */
  function comp(palabra, piezas, es, gen, why) {
    return {
      t: 'opcion', fijo: true,
      p: '¿Qué artículo lleva "' + palabra + '" (' + piezas + ')? ' + es,
      ops: A, ok: A.indexOf(gen), why: why, audio: gen + ' ' + palabra
    };
  }

  /** Escribir una palabra con su artículo a partir del español. */
  function esc(es, de, why, pista) {
    return { t: 'escribir', p: 'Escribe en alemán, con artículo: ' + es, ok: [de], why: why,
      pista: pista || 'Primero decide el artículo, luego escribe la palabra con mayúscula.', audio: de };
  }

  DE.registrarLeccion({
    id: 'entrena-articulos',
    titulo: 'Entrenamiento: der, die, das',
    icono: 'jugar',
    grupo: 'Domina el tema',
    color: 'azul',
    resumen: 'Seis niveles de fácil a experto, con explicación de cada fallo. Objetivo: 100 %.',
    vista: 'entrenador',

    datos: {
      intro: 'Supera cada nivel con 90 % o más a la primera. Los fallos se explican y se repasan al final; ' +
             'cuando un nivel te salga al 100 %, pasa al siguiente. Si dudas, repasa la lección "der, die, das a fondo".',

      niveles: [

        /* ---------- Nivel 1 ---------- */
        {
          id: 'n1', dificultad: 'Fácil', titulo: 'Reconocer con dibujos',
          descripcion: 'Palabras de uso diario con su dibujo. Dilo en voz alta antes de elegir.',
          ejercicios: [
            art('Handtuch', 'toalla', 'das', 'das Handtuch (plural: die Handtücher). Es una palabra compuesta: manda la última pieza, das Tuch.', 'handtuch'),
            art('Flasche', 'botella', 'die', 'die Flasche (plural: die Flaschen). La mayoría de las palabras en -e son femeninas.', 'flasche'),
            art('Koffer', 'maleta', 'der', 'der Koffer (plural: die Koffer). No hay terminación que lo delate: se memoriza.', 'koffer'),
            art('Wurst', 'embutido', 'die', 'die Wurst (plural: die Würste).', 'wurst'),
            art('Butterbrot', 'pan con mantequilla', 'das', 'das Butterbrot: manda la última pieza, das Brot.', 'butterbrot'),
            art('Kamera', 'cámara', 'die', 'die Kamera (plural: die Kameras). Termina en -a, casi siempre femenino.', 'camara'),
            art('Taxi', 'taxi', 'das', 'das Taxi (plural: die Taxis).', 'taxi'),
            art('Glas', 'vaso', 'das', 'das Glas (plural: die Gläser).', 'vaso'),
            art('Laptop', 'portátil', 'der', 'der Laptop (plural: die Laptops).', 'portatil'),
            art('Tablet', 'tableta', 'das', 'das Tablet (plural: die Tablets).', 'tableta'),
            art('Nudeln', 'pasta (siempre plural)', 'die', 'die Nudeln: es plural, y todos los plurales llevan die.', 'nudeln'),
            art('Mann', 'hombre', 'der', 'der Mann. Las personas casi siempre siguen el sexo: hombre → der.'),
            art('Frau', 'mujer', 'die', 'die Frau. Las personas casi siempre siguen el sexo: mujer → die.'),
            art('Kind', 'niño', 'das', 'das Kind (plural: die Kinder). Es neutro aunque sea una persona.')
          ]
        },

        /* ---------- Nivel 2 ---------- */
        {
          id: 'n2', dificultad: 'Básico', titulo: 'Las pistas de las terminaciones',
          descripcion: 'Usa la terminación (-ung, -heit, -chen, -um, -er…) para acertar sin dudar.',
          ejercicios: [
            art('Wohnung', 'apartamento', 'die', 'die Wohnung: -ung siempre es femenino.'),
            art('Zeitung', 'periódico', 'die', 'die Zeitung: -ung siempre es femenino.'),
            art('Möglichkeit', 'posibilidad', 'die', 'die Möglichkeit: -keit siempre es femenino.'),
            art('Freundschaft', 'amistad', 'die', 'die Freundschaft: -schaft siempre es femenino.'),
            art('Station', 'estación; parada', 'die', 'die Station: -ion siempre es femenino.'),
            art('Universität', 'universidad', 'die', 'die Universität: -tät siempre es femenino.'),
            art('Lehrerin', 'profesora', 'die', 'die Lehrerin: -in (mujer) siempre es femenino.'),
            art('Bäckerei', 'panadería', 'die', 'die Bäckerei: -ei siempre es femenino.'),
            art('Mädchen', 'niña', 'das', 'das Mädchen: -chen siempre es neutro (diminutivo), aunque sea una niña.'),
            art('Brötchen', 'panecillo', 'das', 'das Brötchen: -chen siempre es neutro.'),
            art('Museum', 'museo', 'das', 'das Museum: -um es neutro.'),
            art('Dokument', 'documento', 'das', 'das Dokument: -ment es neutro.'),
            art('Lehrer', 'profesor', 'der', 'der Lehrer: -er para persona (hombre) es masculino.'),
            art('Frühling', 'primavera', 'der', 'der Frühling: -ling es masculino. Además es una estación.'),
            art('Montag', 'lunes', 'der', 'der Montag: todos los días de la semana son masculinos.'),
            art('Sommer', 'verano', 'der', 'der Sommer: todas las estaciones son masculinas.')
          ]
        },

        /* ---------- Nivel 3 ---------- */
        {
          id: 'n3', dificultad: 'Medio', titulo: 'Palabras compuestas y plurales',
          descripcion: 'En las compuestas manda la última pieza. En el plural, todo es die.',
          ejercicios: [
            comp('Straßenbahn', 'Straße + Bahn', 'tranvía', 'die', 'die Straßenbahn: manda la última pieza, die Bahn.'),
            comp('Bahnhof', 'Bahn + Hof', 'estación', 'der', 'der Bahnhof: manda la última pieza, der Hof.'),
            comp('Krankenhaus', 'Kranken + Haus', 'hospital', 'das', 'das Krankenhaus: manda la última pieza, das Haus.'),
            comp('Hauptstraße', 'Haupt + Straße', 'calle principal', 'die', 'die Hauptstraße: manda la última pieza, die Straße.'),
            comp('Schwimmbad', 'Schwimm + Bad', 'piscina pública', 'das', 'das Schwimmbad: manda la última pieza, das Bad.'),
            comp('Stadtplan', 'Stadt + Plan', 'plano de la ciudad', 'der', 'der Stadtplan: manda la última pieza, der Plan.'),
            comp('Flughafen', 'Flug + Hafen', 'aeropuerto', 'der', 'der Flughafen: manda la última pieza, der Hafen.'),
            comp('Apfelsaft', 'Apfel + Saft', 'zumo de manzana', 'der', 'der Apfelsaft: manda la última pieza, der Saft.'),
            comp('Wasserflasche', 'Wasser + Flasche', 'botella de agua', 'die', 'die Wasserflasche: manda la última pieza, die Flasche.'),
            comp('Sonnenbrille', 'Sonnen + Brille', 'gafas de sol', 'die', 'die Sonnenbrille: manda la última pieza, die Brille.'),
            comp('Schultasche', 'Schul + Tasche', 'mochila escolar', 'die', 'die Schultasche: manda la última pieza, die Tasche.'),
            comp('Fußball', 'Fuß + Ball', 'balón de fútbol', 'der', 'der Fußball: manda la última pieza, der Ball.'),
            { t: 'opcion', fijo: true, p: '"Die Kinder" es el plural de das Kind. ¿Qué artículo lleva CUALQUIER plural?', ops: A, ok: 1,
              why: 'En el plural los tres géneros se juntan en un solo artículo: die.' },
            { t: 'opcion', fijo: true, p: 'Escribes "___ Hotels" (varios hoteles). ¿Qué artículo va?', ops: A, ok: 1,
              why: 'Hotels es plural, así que die: die Hotels. (En singular sería das Hotel.)' },
            { t: 'opcion', p: '¿Cuál es el plural correcto de "das Buch" (libro)?',
              ops: ['die Buchs', 'die Bücher', 'die Buche', 'die Büchen'], ok: 1,
              why: 'das Buch → die Bücher: la palabra lleva Umlaut (u → ü) y la terminación -er.' }
          ]
        },

        /* ---------- Nivel 4 ---------- */
        {
          id: 'n4', dificultad: 'Avanzado', titulo: 'Escribir el artículo y la palabra',
          descripcion: 'Ahora ya no hay opciones: tú escribes la palabra con su artículo y su mayúscula.',
          ejercicios: [
            esc('la estación de tren', 'der Bahnhof', 'der Bahnhof (plural: die Bahnhöfe). Compuesta: manda Hof (der).'),
            esc('el hotel', 'das Hotel', 'das Hotel (plural: die Hotels).'),
            esc('la farmacia', 'die Apotheke', 'die Apotheke (plural: die Apotheken). Termina en -e: femenino.'),
            esc('el parque', 'der Park', 'der Park (plural: die Parks).'),
            esc('el cine', 'das Kino', 'das Kino (plural: die Kinos).'),
            esc('la escuela', 'die Schule', 'die Schule (plural: die Schulen). Termina en -e: femenino.'),
            esc('la calle', 'die Straße', 'die Straße (plural: die Straßen). Se acepta también "Strasse".'),
            esc('el banco', 'die Bank', 'die Bank (plural: die Banken). Es femenino aunque en español sea masculino.'),
            esc('la plaza', 'der Platz', 'der Platz (plural: die Plätze).'),
            esc('el supermercado', 'der Supermarkt', 'der Supermarkt: manda la última pieza, der Markt.'),
            esc('la ciudad', 'die Stadt', 'die Stadt (plural: die Städte).'),
            esc('el aeropuerto', 'der Flughafen', 'der Flughafen: manda la última pieza, der Hafen.'),
            esc('los libros', 'die Bücher', 'die Bücher: plural de das Buch. Todos los plurales llevan die.')
          ]
        },

        /* ---------- Nivel 5 (aleatorio) ---------- */
        {
          id: 'n5', dificultad: 'Experto', titulo: 'Examen sorpresa: elegir',
          descripcion: '20 sustantivos al azar de todo tu vocabulario. Cada intento es distinto.',
          auto: { tipo: 'articulo', n: 20 }
        },

        /* ---------- Nivel 6 (aleatorio) ---------- */
        {
          id: 'n6', dificultad: 'Maestro', titulo: 'Examen sorpresa: escribir',
          descripcion: '20 sustantivos al azar, y esta vez tecleas tú el artículo.',
          auto: { tipo: 'articulo-escribir', n: 20 }
        }
      ]
    }
  });
})();
