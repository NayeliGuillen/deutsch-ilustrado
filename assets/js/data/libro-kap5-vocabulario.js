/* ============================================================
   data/libro-kap5-vocabulario.js — Netzwerk neu A1 · Kapitel 5
   ------------------------------------------------------------
   Vocabulario del capítulo 5 "Alltag und Familie" (págs. 54–56
   fotografiadas): el día de Kaan, el domingo, la hora y las
   preguntas Wann? – Um …
   ============================================================ */

(function () {
  'use strict';

  function W(de, es, gen, fon, ff, visual, ej, nota, plural, solo) {
    var p = { de: de, es: es, fon: fon, fonFacil: ff };
    if (gen) p.gen = gen; else p.tipo = 'palabra';
    if (solo) p.soloPlural = true;
    if (plural) p.plural = plural;
    if (visual) p.visual = visual;
    if (nota) p.nota = nota;
    if (ej) {
      p.ejemplo = { de: ej[0], es: ej[1] };
      if (ej[2] && ej[2] !== '…') p.ejemplo.fon = ej[2];
      if (ej[3] && ej[3] !== '…') p.ejemplo.fonFacil = ej[3];
    }
    return p;
  }

  DE.registrarLeccion({
    id: 'k5-vocabulario',
    titulo: 'Kap. 5 · Vocabulario',
    icono: 'libro',
    grupo: 'Libro · Kapitel 5',
    color: 'morado',
    resumen: 'El día de Kaan, el domingo en familia, lugares y la hora: Wann? – Um … (págs. 54–56).',
    vista: 'vocabulario-pron',

    datos: {
      intro: '[LIBRO] Palabras y frases del inicio del capítulo 5 (págs. 54–56). Los verbos con cambio de vocal (fahren, lesen, schlafen, treffen) están marcados: son los que más se equivocan los hispanohablantes.',

      leyenda: [
        { titulo: 'Pronunciación', texto: 'La del curso: vocal larga = letra doble (taac), sílaba tónica en MAYÚSCULAS, j = ch, c = k, ü = "iu".' },
        { titulo: 'Pronunciación fácil', texto: 'Sílabas con guiones y, entre paréntesis, cómo sale cada sonido difícil.' }
      ],

      categorias: [

        {
          id: 'tag', titulo: 'Kaans Tag (p. 54–55)', icono: 'calendario', color: 'morado',
          descripcion: '[LIBRO] Las siete frases del ejercicio 1a, una por foto.',
          palabras: [
            W('duschen', 'ducharse', null, 'DUU-shen', 'DU-shen (u larga; sch = "sh")', 'ducha',
              ['Kaan duscht.', 'Kaan se ducha.', 'KAAN DUSHT', 'KAAN DUSHT (la t final se junta con sch)'], 'Regular: ich dusche, du duschst, er duscht.'),
            W('frühstücken', 'desayunar', null, 'FRIU-shtiu-ken', 'FRIU-shtiu-ken (ü = "iu"; st = "sht")', 'pan',
              ['Kaan frühstückt und liest Nachrichten.', 'Kaan desayuna y lee las noticias.', 'KAAN FRIU-shtiukt unt liist NAAJ-rij-ten', 'KAAN FRIU-shtiukt unt LIST NAJ-rich-ten'], 'Regular: das Frühstück → frühstücken.'),
            W('die Nachrichten', 'las noticias', 'die', 'NAAJ-rij-ten', 'NAJ-rich-ten (ach áspera + ich suave)', 'periodico', null, 'Casi siempre en plural. Se leen o se ven.', null, true),
            W('lesen', 'leer', null, 'LEE-zen', 'LE-sen (s = "z"; e larga)', 'libro',
              ['Er liest Nachrichten.', 'Él lee las noticias.', 'ea LIIST NAAJ-rij-ten', 'er LIST NAJ-rich-ten'], 'Irregular: ich lese, du liest, er liest, wir lesen.'),
            W('fahren', 'ir (en vehículo), conducir', null, 'FAA-ren', 'FA-ren (a larga)', 'bici',
              ['Er fährt in die Uni.', 'Él va a la universidad (en vehículo).', 'ea FEERT in dii UU-ni', 'er FERT in di U-ni (ä = e larga)'], 'Irregular: ich fahre, du fährst, er fährt.'),
            W('lernen', 'estudiar, aprender', null, 'LER-nen', 'LER-nen', 'libro',
              ['Er lernt in der Bibliothek.', 'Él estudia en la biblioteca.', '…', 'er LERNT in der bi-blio-TEEK'], 'Regular.'),
            W('besuchen', 'visitar', null, 'be-ZUU-jen', 'be-SU-chen (s = "z"; ch áspera tras u)', 'abuela',
              ['Er besucht seine Oma.', 'Él visita a su abuela.', 'ea be-ZUUJT ZAI-ne OO-ma', 'er be-SUCHT SAI-ne O-ma'], 'Regular. Inseparable (be-): ich besuche.'),
            W('treffen', 'encontrarse con', null, 'TRE-fen', 'TRE-fen (e corta)', 'personas',
              ['Kaan trifft Marie.', 'Kaan se encuentra con Marie.', 'KAAN trift ma-RII', 'KAAN trift ma-RI (ie = i larga)'], 'Irregular: ich treffe, du triffst, er trifft.'),
            W('in die Mensa gehen', 'ir a la cafetería universitaria', null, 'in dii MEN-za GEE-en', 'in di MEN-za GUE-en (g = "gu")', 'plato',
              ['Kaan geht in die Mensa.', 'Kaan va a la mensa.', 'KAAN GEET in dii MEN-za', 'KAAN GUET in di MEN-za'], 'Mensa = comedor de la universidad. in + die (Akkusativ: wohin?).')
          ]
        },

        {
          id: 'orte', titulo: 'Lugares y personas', icono: 'ubicacion', color: 'azul',
          descripcion: '[LIBRO] Del día de Kaan.',
          palabras: [
            W('die Mensa', 'el comedor universitario', 'die', 'MEN-za', 'MEN-za (s = "z", como la z inglesa de "zoo"; e corta)', 'plato', null, null, 'die Mensen'),
            W('die Uni', 'la uni(versidad)', 'die', 'UU-ni', 'U-ni (u larga)', 'birrete', null, 'Forma corta de die Universität. Muy cotidiana.', 'die Unis'),
            W('die Bibliothek', 'la biblioteca', 'die', 'bi-blio-TEEK', 'bi-blio-TEK (acento al final; th = "t")', 'libro', null, 'Biblio + thek: la th suena como "t".', 'die Bibliotheken'),
            W('das Büro', 'la oficina', 'das', 'biu-ROO', 'biu-RO (ü = "iu"; acento final)', 'puerta',
              ['Dann gehe ich ins Büro.', 'Luego voy a la oficina.', '…', 'dan GUE-e ij ins biu-RO'], 'ins = in + das.', 'die Büros'),
            W('die Oma', 'la abuela', 'die', 'OO-ma', 'O-ma', 'abuela', null, 'Cariñoso: Oma. Formal: die Großmutter. Abuelo: der Opa.', 'die Omas'),
            W('die Familie', 'la familia', 'die', 'fa-MII-lie', 'fa-MI-lie (ie final suena "ie")', 'familia',
              ['Mit der Familie zu Mittag essen.', 'Almorzar con la familia.', '…', 'mit der fa-MI-lie tsu MI-tak E-sen'], null, 'die Familien'),
            W('die Freunde', 'los amigos', 'die', 'FROIN-de', 'FROIN-de (eu = "oi")', 'personas', null, 'Singular: der Freund / die Freundin.', null, true)
          ]
        },

        {
          id: 'sonntag', titulo: 'Am Sonntag (2a, p. 54)', icono: 'calendario', color: 'rojo',
          descripcion: '[LIBRO] Las doce actividades de las que hay que marcar las del domingo de Kaan.',
          palabras: [
            W('Zeitung lesen', 'leer el periódico', null, 'TSAI-tung LEE-zen', 'TSAI-tung LE-sen (z = "ts"; s = "z")', 'periodico', null, 'die Zeitung = el periódico. Sin artículo con lesen aquí.'),
            W('mit der Familie zu Mittag essen', 'almorzar con la familia', null, 'mit dea fa-MII-lie tsu MI-taak E-sen', 'mit der fa-MI-lie tsu MI-tak E-sen', 'plato', null, 'zu Mittag essen = almorzar.'),
            W('lange schlafen', 'dormir hasta tarde', null, 'LAN-ge SHLAA-fen', 'LAN-ge SHLA-fen (sch = "sh"; ng = "ng")', 'dormir',
              ['Am Sonntag schläft Kaan lange.', 'El domingo Kaan duerme hasta tarde.', 'am ZON-taak SHLEEFT KAAN LAN-ge', 'am SON-tak SHLEFT KAAN LAN-ge'], 'schlafen es irregular: ich schlafe, du schläfst, er schläft.'),
            W('Fußball spielen', 'jugar al fútbol', null, 'FUUS-bal SHPII-len', 'FUS-bal SHPI-len (sp = "shp")', 'pelota', null, 'der Fußball = el fútbol (y el balón).'),
            W('Freunde treffen', 'quedar con amigos', null, 'FROIN-de TRE-fen', 'FROIN-de TRE-fen', 'personas'),
            W('lernen', 'estudiar', null, 'LER-nen', 'LER-nen', 'libro'),
            W('Oma besuchen', 'visitar a la abuela', null, 'OO-ma be-ZUU-jen', 'O-ma be-SU-chen', 'abuela'),
            W('Pizza essen', 'comer pizza', null, 'PI-tsa E-sen', 'PI-tsa E-sen (z = "ts")', 'pizza'),
            W('Marie treffen', 'quedar con Marie', null, 'ma-RII TRE-fen', 'ma-RI TRE-fen', 'personas'),
            W('in den Supermarkt gehen', 'ir al supermercado', null, 'in deen ZUU-pa-markt GEE-en', 'in den SU-per-markt GUE-en', 'carrito', null, 'in den (Akkusativ masculino): in den Supermarkt.'),
            W('ins Kino gehen', 'ir al cine', null, 'ins KII-no GEE-en', 'ins KI-no GUE-en', 'cine', null, 'ins = in + das (Kino es neutro).'),
            W('am Computer arbeiten', 'trabajar en el ordenador', null, 'am kom-PIU-ta AR-bai-ten', 'am kom-PIU-ter AR-bai-ten (ü = "iu")', 'portatil')
          ]
        },

        {
          id: 'uhr', titulo: 'Wie spät ist es? (p. 56)', icono: 'reloj', color: 'turquesa',
          descripcion: '[LIBRO] Palabras de la esfera del reloj y de las dos formas de decir la hora.',
          palabras: [
            W('Wie spät ist es?', '¿Qué hora es?', null, 'vii SHPEET ist es', 'vi SHPET ist es (w = "v"; ä = "e" larga)', 'reloj', ['Es ist Viertel vor drei.', 'Son las tres menos cuarto.', 'es ist FIR-tel foa drai', 'es ist FIR-tel for drai (v = "f")'], 'También: Wie viel Uhr ist es?'),
            W('Wie viel Uhr ist es?', '¿Qué hora es? (variante)', null, 'vii fiil UUR ist es', 'vi FIL UR ist es', 'reloj'),
            W('die Uhr', 'el reloj; la hora (con números)', 'die', 'UUR', 'UR (u larga)', 'reloj', null, 'Es ist vierzehn Uhr fünfundvierzig.', 'die Uhren'),
            W('das Viertel', 'el cuarto', 'das', 'FIR-tel', 'FIR-tel (v = "f")', 'reloj', null, 'Viertel nach sieben = 7:15 · Viertel vor acht = 7:45.'),
            W('halb', 'medio', null, 'HALP', 'JALP (h suave; b final = "p")', 'reloj', null, 'halb acht = 7:30 (media hora PARA las ocho).'),
            W('nach', 'después de, y', null, 'NAAJ', 'NAJ (ch áspera)', null, ['zehn nach sieben', '7:10', '…', 'TSEEN naj ZII-ben'], 'zehn nach sieben = siete y diez.'),
            W('vor', 'antes de, menos', null, 'FOOR', 'FOR (v = "f")', null, ['fünf vor halb acht', '7:25', '…', 'FIUNF for jalp AJT'], 'zwanzig vor acht = ocho menos veinte.'),
            W('kurz vor / kurz nach', 'poco antes / poco después', null, 'KURTS foor / KURTS naaj', 'KURTS for / KURTS naj', null, ['kurz vor sieben', 'un poco antes de las siete', '…', 'KURTS for ZII-ben'], 'En la esfera del libro: kurz vor sieben, kurz nach sieben.'),
            W('inoffiziell', 'no oficial (hablado)', null, 'IN-o-fi-tsiel', 'IN-o-fi-TSIEL (z = "ts")', null, null, 'Es ist Viertel vor drei. (conversación diaria)'),
            W('offiziell', 'oficial (24 horas)', null, 'o-fi-TSIEL', 'o-fi-TSIEL', null, null, 'Es ist vierzehn Uhr fünfundvierzig. (trenes, citas, TV)'),
            W('Wann?', '¿Cuándo?', null, 'VAN', 'VAN (w = "v")', null, ['Wann frühstückst du?', '¿Cuándo desayunas?', 'van FRIU-shtiukst duu', 'VAN FRIU-shtiukst du'], null),
            W('um', 'a (la hora)', null, 'UM', 'UM', null, ['Um Viertel nach sieben.', 'A las siete y cuarto.', 'um FIR-tel naaj ZII-ben', 'um FIR-tel naj SI-ben'], 'Wann? → Um + hora. Um Viertel vor drei.'),
            W('die Uhrzeit', 'la hora (el momento)', 'die', 'UUR-tsait', 'UR-tsait (z = "ts"; ei = "ai")', 'reloj', null, 'Die Uhrzeit verstehen und nennen = meta del capítulo.', 'die Uhrzeiten'),
            W('Zeitangaben', 'indicaciones de tiempo', 'die', 'TSAIT-an-gaa-ben', 'TSAIT-an-GA-ben', null, null, 'Plural. Meta del capítulo: Zeitangaben machen.', null, true)
          ]
        }

      ]
    }
  });
})();
