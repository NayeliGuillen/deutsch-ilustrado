/* ============================================================
   data/verbos-a1.js — Verbos nuevos con conjugación completa
   ------------------------------------------------------------
   Mismo esquema que el vocabulario: dibujo, audio, pronunciación,
   pronunciación fácil y ejemplo. Además cada verbo trae:
     clase → regular | irregular | separable | modal
     conj  → 6 formas: ich, du, er/es/sie, wir, ihr, sie/Sie
     irr   → posiciones que NO siguen la regla (se marcan en rojo)
   Las formas regulares se calculan aquí con R() para no
   equivocarse; las irregulares se escriben a mano.
   ============================================================ */

(function () {
  'use strict';

  /** Conjugación regular a partir del infinitivo. */
  function R(inf) {
    var s = inf.replace(/en$/, '');
    var conE = /[td]$/.test(s) || /[^aeiouäöülrhwy][mn]$/.test(s);
    var du = /[sßzx]$/.test(s) ? s + 't' : s + (conE ? 'est' : 'st');
    var t = s + (conE ? 'et' : 't');
    return [s + 'e', du, t, inf, t, inf];
  }

  var VISTO = { sein: 1 };

  /**
   * V(de, es, clase, fon, fonFacil, conj|null, nota, visual, ejemplo[4], extra)
   * conj null = regular. Para separables `extra.base` = verbo sin prefijo
   * (para saber qué formas son irregulares) y `extra.part` = prefijo.
   */
  function V(de, es, clase, fon, fonFacil, conj, nota, visual, ej, extra) {
    extra = extra || {};
    var formas, irr = [];
    if (!conj) formas = R(de);
    else formas = conj;

    var regular = extra.base ? R(extra.base) : R(de);
    if (conj) {
      formas.forEach(function (f, i) {
        var solo = extra.part ? f.replace(new RegExp('\\s' + extra.part + '$'), '') : f;
        if (solo !== regular[i]) irr.push(i);
      });
    }
    var p = {
      de: de, es: es, tipo: 'verbo', clase: clase,
      fon: fon, fonFacil: fonFacil, conj: formas, irr: irr
    };
    if (nota) p.nota = nota;
    if (visual) p.visual = visual;
    if (ej) p.ejemplo = { de: ej[0], es: ej[1], fon: ej[2], fonFacil: ej[3] };
    return p;
  }

  /** Verbos separables: ich stehe auf. */
  function S(de, part, base, es, fon, fonFacil, conj, nota, visual, ej) {
    var regular = R(base).map(function (f) { return f + ' ' + part; });
    return V(de, es, 'separable', fon, fonFacil, conj || regular, nota, visual, ej, { base: base, part: part });
  }

  var M = 'modal';

  DE.registrarLeccion({
    id: 'verbos-a1',
    titulo: 'Verbos nuevos y conjugación',
    icono: 'repetir',
    grupo: 'Verbos',
    color: 'verde',
    resumen: 'Más de 55 verbos con dibujo, audio, pronunciación, ejemplo y su conjugación completa.',
    vista: 'vocabulario-pron',

    datos: {
      intro: 'Pulsa "Ver conjugación" en cada verbo: las formas en rojo son las que cambian de forma irregular (lo único que tienes que memorizar). ' +
             'Para practicar, usa los entrenamientos de la sección Verbos.',

      leyenda: [
        { titulo: 'Pronunciación', texto: 'La del curso: vocal larga = letra doble (taac), sílaba tónica en MAYÚSCULAS, j = ch suave, c = k.' },
        { titulo: 'Pronunciación fácil', texto: 'Sílabas separadas con guiones y, entre paréntesis, cómo sale cada sonido difícil.' },
        { titulo: 'Clases', texto: 'Regular: raíz + terminación. Irregular: cambia la raíz (o toda la forma). Separable: el prefijo va al final de la oración. Modal: ayuda a otro verbo, que va en infinitivo al final.' }
      ],

      categorias: [

        /* ------------------------------------------------------ */
        {
          id: 'basicos', titulo: 'Los más importantes', icono: 'estrella', color: 'rojo',
          descripcion: 'sein y haben se usan en casi cualquier oración. Apréndelos primero.',
          palabras: [
            V('sein', 'ser, estar', 'irregular', 'SAIN', 'SAIN (s como la z de "zumbar"; ei = "ai")',
              ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'],
              'En alemán "ser" y "estar" son un solo verbo: Ich bin müde (estoy cansado), Ich bin Lehrer (soy profesor).',
              'estrella',
              ['Wir sind müde.', 'Estamos cansados.', 'viia sint MIU-de', 'VIR sint MÜ-de (w = "v"; ü como "i" con labios de "u"; -e final suave)']),

            V('haben', 'tener, haber', 'irregular', 'JAA-ben', 'HA-ben (h aspirada suave; a larga)',
              ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'],
              'Solo cambian du y er: hast / hat (se pierde la b).',
              'estrella',
              ['Ich habe Hunger.', 'Tengo hambre.', 'ij JAA-be JUN-gea', 'ij HA-be HUN-ga (ch suave; u corta; la r final casi no se oye)']),

            V('heißen', 'llamarse', 'regular', 'JAI-sen', 'HAI-sen (ei = "ai"; ß = "s" sorda)',
              null,
              'Con ß la forma du pierde la s: du heißt (igual que er heißt).',
              'etiqueta',
              ['Wie heißt du?', '¿Cómo te llamas?', 'vii jaist duu', 'VI HAIST DU (w = "v"; ie = "i" larga)']),

            V('wohnen', 'vivir (residir)', 'regular', 'VOO-nen', 'VO-nen (w = "v"; o larga)',
              null, 'Wohnen = tener tu casa en un lugar. "Vivir" (estar vivo) es leben.', 'casa',
              ['Ich wohne in Köln.', 'Vivo en Colonia.', 'ij VOO-ne in koeln', 'ij VO-ne in KÖLN (ö = "e" con labios de "o")']),

            V('kommen', 'venir, ser de', 'regular', 'KO-men', 'KO-men (o corta)',
              null, 'Woher kommst du? = ¿De dónde eres? Ich komme aus Honduras.', 'flecha',
              ['Ich komme aus Honduras.', 'Soy de Honduras.', 'ij KO-me aus jon-DUU-ras', 'ij KO-me AUS hon-DU-ras (au = "au"; h aspirada)']),

            V('machen', 'hacer', 'regular', 'MA-jen', 'MA-chen (ch áspera, como la j de "caja"; a corta)',
              null, 'Was machst du? = ¿Qué haces? (también ¿cómo estás? informal: Was machst du so?)', 'herramienta',
              ['Was machst du heute?', '¿Qué haces hoy?', 'vas majst duu JOI-te', 'VAS MACHST du HOI-te (eu = "oi"; ach áspera)']),

            V('gehen', 'ir (a pie)', 'regular', 'GEE-en', 'GUE-en (g como en "gato"; e larga)',
              null, 'Wie geht es dir? = ¿cómo estás? Ich gehe nach Hause = voy a casa.', 'flecha',
              ['Wir gehen ins Kino.', 'Vamos al cine.', 'viia GEE-en ins KII-no', 'VIR GUE-en ins KI-no (ie = "i" larga)']),

            V('wissen', 'saber (un dato)', 'irregular', 'VI-sen', 'VI-sen (w = "v"; i corta; ss = "s" sorda)',
              ['weiß', 'weißt', 'weiß', 'wissen', 'wisst', 'wissen'],
              'Ich weiß es nicht = no lo sé. "Saber hacer algo" es können; "conocer" es kennen.',
              'idea',
              ['Ich weiß es nicht.', 'No lo sé.', 'ij vais es nijt', 'ij VAIS es NIJT (ei = "ai"; ch suave)'])
          ]
        },

        /* ------------------------------------------------------ */
        {
          id: 'comer', titulo: 'Comer, beber y comprar', icono: 'comida', color: 'naranja',
          descripcion: 'Los verbos de la mesa y de la tienda.',
          palabras: [
            V('essen', 'comer', 'irregular', 'E-sen', 'E-sen (e corta; ss = "s" sorda)',
              ['esse', 'isst', 'isst', 'essen', 'esst', 'essen'],
              'du isst y er isst: e → i. Las dos son iguales porque la raíz acaba en s.',
              'comida',
              ['Er isst gern Pizza.', 'Le gusta comer pizza.', 'ea ist guern PI-tsa', 'ER ist GUERN PI-tsa (er = "ea"; z = "ts")']),

            V('trinken', 'beber', 'regular', 'TRIN-ken', 'TRIN-ken (i corta; la n suena como en "tengo")',
              null, null, 'cafe',
              ['Ich trinke Wasser.', 'Bebo agua.', 'ij TRIN-ke VA-sea', 'ij TRIN-ke VA-sa (w = "v"; -er = "a")']),

            V('kochen', 'cocinar', 'regular', 'KO-jen', 'KO-chen (ch áspera, como la j de "caja"; o corta)',
              null, null, 'olla',
              ['Mama kocht gern.', 'A mamá le gusta cocinar.', 'MA-ma kojt guern', 'MA-ma KOCHT GUERN (ch áspera)']),

            V('kaufen', 'comprar', 'regular', 'KAU-fen', 'KAU-fen (au = "au")',
              null, 'Einkaufen (separable) es "hacer las compras".', 'bolsa',
              ['Ich kaufe ein Brot.', 'Compro un pan.', 'ij KAU-fe ain broot', 'ij KAU-fe ain BROT (ei = "ai"; o larga)']),

            V('bezahlen', 'pagar', 'regular', 'be-TSAA-len', 'be-TSA-len (z = "ts"; acento en -zah-)',
              null, 'Zahlen, bitte! = ¡La cuenta, por favor!', 'dinero',
              ['Ich bezahle mit Karte.', 'Pago con tarjeta.', 'ij be-TSAA-le mit KAR-te', 'ij be-TSA-le mit KAR-te (z = "ts"; a larga)']),

            V('bestellen', 'pedir (en un restaurante), encargar', 'regular', 'be-SHTE-len', 'be-SHTE-len (st inicial = "sht"; e corta)',
              null, 'En el restaurante: Ich bestelle einen Kaffee.', 'campana',
              ['Ich bestelle einen Tee.', 'Pido un té.', 'ij be-SHTE-le AI-nen tee', 'ij be-SHTE-le AI-nen TE (ei = "ai"; e larga)']),

            V('brauchen', 'necesitar', 'regular', 'BRAU-jen', 'BRAU-chen (au = "au"; ch áspera)',
              null, 'Ich brauche Hilfe = necesito ayuda.', 'maleta',
              ['Ich brauche ein Handy.', 'Necesito un celular.', 'ij BRAU-je ain JEN-di', 'ij BRAU-che ain HEN-di (h aspirada)']),

            V('nehmen', 'tomar, coger', 'irregular', 'NEE-men', 'NE-men (e larga)',
              ['nehme', 'nimmst', 'nimmt', 'nehmen', 'nehmt', 'nehmen'],
              'e → i y se acorta: du nimmst, er nimmt (la h desaparece). Ich nehme den Kaffee = tomo (pido) el café.',
              'mano',
              ['Er nimmt einen Salat.', 'Toma una ensalada.', 'ea nimt AI-nen sa-LAAT', 'ER nimt AI-nen sa-LAT (a larga en -lat)']),

            V('schmecken', 'saber (a), gustar (comida)', 'regular', 'SHME-ken', 'SHME-ken (sch = "sh"; e corta)',
              null, 'Das schmeckt gut = esto está rico. Ojo: el sujeto es la comida.', 'sonrisa',
              ['Die Suppe schmeckt gut.', 'La sopa está rica.', 'dii SU-pe shmekt guut', 'di SU-pe SHMEKT GUT (u corta en Su-; u larga en gut)']),

            V('kosten', 'costar', 'regular', 'KOS-ten', 'KOS-ten (o corta)',
              null, 'Solo se usa en 3ª persona: Was kostet das? = ¿cuánto cuesta?', 'etiqueta',
              ['Was kostet das?', '¿Cuánto cuesta esto?', 'vas KOS-tet das', 'VAS KOS-tet das (w = "v"; la -e- extra se oye)']),

            S('einkaufen', 'ein', 'kaufen', 'hacer compras', 'AIN-kau-fen', 'AIN-kau-fen (acento en ein-; ei = "ai")',
              null, 'Ich kaufe ein, no "ich einkaufe". El prefijo ein va al final.', 'carrito',
              ['Ich kaufe heute ein.', 'Hoy hago las compras.', 'ij KAU-fe JOI-te ain', 'ij KAU-fe HOI-te AIN (eu = "oi")'])
          ]
        },

        /* ------------------------------------------------------ */
        {
          id: 'moverse', titulo: 'Moverse y viajar', icono: 'tren', color: 'azul',
          descripcion: 'Gehen es ir a pie, fahren es ir en un vehículo.',
          palabras: [
            V('fahren', 'ir (en vehículo), conducir', 'irregular', 'FAA-ren', 'FA-ren (a larga)',
              ['fahre', 'fährst', 'fährt', 'fahren', 'fahrt', 'fahren'],
              'a → ä en du y er: du fährst, er fährt. La ä suena como "e" abierta.',
              'coche',
              ['Er fährt nach Berlin.', 'Va a Berlín (en vehículo).', 'ea fèrt naaj ber-LIIN', 'ER fèrt nach ber-LIN (ä = "e" abierta; ach áspera)']),

            V('laufen', 'correr, caminar', 'irregular', 'LAU-fen', 'LAU-fen (au = "au")',
              ['laufe', 'läufst', 'läuft', 'laufen', 'lauft', 'laufen'],
              'au → äu en du y er. En el sur de Alemania laufen = caminar.',
              'zapato',
              ['Sie läuft schnell.', 'Ella corre rápido.', 'sii loift shnel', 'SI LOIFT SHNEL (äu = "oi"; sch = "sh")']),

            V('reisen', 'viajar', 'regular', 'RAI-sen', 'RAI-sen (ei = "ai"; s sonora)',
              null, 'Du reist (sin segunda s).', 'maleta',
              ['Wir reisen gern.', 'Nos gusta viajar.', 'viia RAI-sen guern', 'VIR RAI-sen GUERN']),

            V('besuchen', 'visitar', 'regular', 'be-SUU-jen', 'be-SU-chen (u larga; ch áspera)',
              null, 'No es separable aunque empiece por be-: Ich besuche dich.', 'casa',
              ['Ich besuche meine Oma.', 'Visito a mi abuela.', 'ij be-SUU-je MAI-ne OO-ma', 'ij be-SU-che MAI-ne O-ma']),

            V('treffen', 'encontrarse con', 'irregular', 'TRE-fen', 'TRE-fen (e corta)',
              ['treffe', 'triffst', 'trifft', 'treffen', 'trefft', 'treffen'],
              'e → i: du triffst, er trifft. Ich treffe Anna = quedo con Anna.',
              'manos',
              ['Ich treffe dich um acht.', 'Quedo contigo a las ocho.', 'ij TRE-fe dij um ajt', 'ij TRE-fe DIJ um ACHT']),

            V('warten', 'esperar', 'regular', 'VAR-ten', 'VAR-ten (w = "v"; a corta)',
              null, 'Raíz en t: se añade e: du wartest, er wartet, ihr wartet. Warten auf = esperar a.', 'reloj',
              ['Wir warten auf den Bus.', 'Esperamos el autobús.', 'viia VAR-ten auf deen bus', 'VIR VAR-ten auf DEN BUS (u corta)']),

            V('fliegen', 'volar', 'irregular', 'FLII-guen', 'FLI-guen (ie = "i" larga; g como en "gato")',
              ['fliege', 'fliegst', 'fliegt', 'fliegen', 'fliegt', 'fliegen'],
              'En presente es regular (la irregularidad aparece en pasado).', 'avion',
              ['Wir fliegen nach Madrid.', 'Volamos a Madrid.', 'viia FLII-guen naaj ma-DRIT', 'VIR FLI-guen nach ma-DRIT']),

            S('ankommen', 'an', 'kommen', 'llegar', 'AN-ko-men', 'AN-ko-men (acento en an-)',
              null, 'Der Zug kommt um acht an: el prefijo an va al final.', 'flecha',
              ['Der Zug kommt um neun an.', 'El tren llega a las nueve.', 'dea tsuuk komt um noin an', 'DER TSUK komt um NOIN an (z = "ts"; eu = "oi")']),

            S('abfahren', 'ab', 'fahren', 'salir (un vehículo)', 'AP-faa-ren', 'AP-fa-ren (b final = "p")',
              ['fahre ab', 'fährst ab', 'fährt ab', 'fahren ab', 'fahrt ab', 'fahren ab'],
              'Como fahren: du fährst ab, er fährt ab.', 'tren',
              ['Der Bus fährt um zehn ab.', 'El autobús sale a las diez.', 'dea bus fèrt um tseen ap', 'DER BUS fèrt um TSEN ap']),

            S('einsteigen', 'ein', 'steigen', 'subir (al tren/bus)', 'AIN-shtai-guen', 'AIN-shtai-guen (st = "sht"; g como en "gato")',
              null, 'Bitte einsteigen! = ¡Suban, por favor! Lo contrario: aussteigen.', 'puerta',
              ['Ich steige in den Bus ein.', 'Subo al autobús.', 'ij SHTAI-gue in deen bus ain', 'ij SHTAI-gue in DEN BUS ain']),

            S('aussteigen', 'aus', 'steigen', 'bajar (del tren/bus)', 'AUS-shtai-guen', 'AUS-shtai-guen (au = "au")',
              null, 'Wo muss ich aussteigen? = ¿Dónde tengo que bajar?', 'puerta',
              ['Wir steigen in Köln aus.', 'Bajamos en Colonia.', 'viia SHTAI-guen in koeln aus', 'VIR SHTAI-guen in KÖLN aus']),

            S('umsteigen', 'um', 'steigen', 'hacer transbordo', 'UM-shtai-guen', 'UM-shtai-guen (u corta)',
              null, 'Muy útil en el metro: Hier müssen Sie umsteigen.', 'flecha',
              ['Du musst in Bonn umsteigen.', 'Tienes que hacer transbordo en Bonn.', 'duu must in bon UM-shtai-guen', 'du MUST in BON UM-shtai-guen'])
          ]
        },

        /* ------------------------------------------------------ */
        {
          id: 'hablar', titulo: 'Hablar, preguntar y entender', icono: 'dialogo', color: 'morado',
          descripcion: 'Los verbos de la clase y de la conversación.',
          palabras: [
            V('sagen', 'decir', 'regular', 'SAA-guen', 'SA-guen (s sonora; g como en "gato")',
              null, 'Wie sagt man "…" auf Deutsch? = ¿cómo se dice "…" en alemán?', 'dialogo',
              ['Was sagst du?', '¿Qué dices?', 'vas saakst duu', 'VAS SAKST du (g final antes de t = "k")']),

            V('fragen', 'preguntar', 'regular', 'FRAA-guen', 'FRA-guen (a larga)',
              null, 'Ich frage dich = te pregunto a ti.', 'interrogacion',
              ['Ich frage den Lehrer.', 'Le pregunto al profesor.', 'ij FRAA-gue deen LEE-rea', 'ij FRA-gue DEN LE-ra']),

            V('antworten', 'responder', 'regular', 'ANT-vor-ten', 'ANT-vor-ten (w = "v")',
              null, 'Raíz en t: du antwortest, er antwortet.', 'dialogo',
              ['Er antwortet nicht.', 'Él no responde.', 'ea ANT-vor-tet nijt', 'ER ANT-vor-tet NIJT (ch suave)']),

            V('sprechen', 'hablar', 'irregular', 'SHPRE-jen', 'SHPRE-chen (sp inicial = "shp"; ch suave tras e)',
              ['spreche', 'sprichst', 'spricht', 'sprechen', 'sprecht', 'sprechen'],
              'e → i en du y er: du sprichst, er spricht.', 'microfono',
              ['Sie spricht Deutsch.', 'Ella habla alemán.', 'sii shprijt doich', 'SI SHPRICHT DOICH (eu = "oi")']),

            V('verstehen', 'entender', 'regular', 'fea-SHTEE-en', 'fer-SHTE-en (acento en -steh-)',
              null, 'No es separable: Ich verstehe dich nicht. Das verstehe ich nicht.', 'idea',
              ['Ich verstehe nicht.', 'No entiendo.', 'ij fea-SHTEE-e nijt', 'ij fer-SHTE-e NIJT']),

            V('helfen', 'ayudar', 'irregular', 'JEL-fen', 'HEL-fen (h aspirada)',
              ['helfe', 'hilfst', 'hilft', 'helfen', 'helft', 'helfen'],
              'e → i. Rige dativo: Ich helfe dir (te ayudo).', 'manos',
              ['Kannst du mir helfen?', '¿Puedes ayudarme?', 'kanst duu miia JEL-fen', 'KANST du MIR HEL-fen']),

            V('finden', 'encontrar, opinar', 'regular', 'FIN-den', 'FIN-den (i corta)',
              null, 'Raíz en d: du findest, er findet. Wie findest du das? = ¿qué te parece?', 'lupa',
              ['Ich finde das toll.', 'Me parece genial.', 'ij FIN-de das tol', 'ij FIN-de das TOL']),

            V('lernen', 'aprender, estudiar', 'regular', 'LER-nen', 'LER-nen (e corta)',
              null, null, 'libro',
              ['Ich lerne Deutsch.', 'Aprendo alemán.', 'ij LER-ne doich', 'ij LER-ne DOICH']),

            V('buchstabieren', 'deletrear', 'regular', 'buj-shta-BII-ren', 'buch-shta-BI-ren (ch áspera; acento en -bie-)',
              null, 'Wie schreibt man das? Können Sie das buchstabieren?', 'letra',
              ['Können Sie das buchstabieren?', '¿Puede deletrearlo?', 'KOE-nen sii das buj-shta-BII-ren', 'KÖ-nen SI das buch-shta-BI-ren']),

            V('telefonieren', 'hablar por teléfono', 'regular', 'te-le-fo-NII-ren', 'te-le-fo-NI-ren (acento en -nie-)',
              null, null, 'telefono',
              ['Ich telefoniere mit Anna.', 'Hablo por teléfono con Anna.', 'ij te-le-fo-NII-re mit A-na', 'ij te-le-fo-NI-re mit A-na']),

            S('anrufen', 'an', 'rufen', 'llamar (por teléfono)', 'AN-ruu-fen', 'AN-ru-fen (u larga)',
              null, 'Ruf mich an! = ¡Llámame!', 'telefono',
              ['Ich rufe dich morgen an.', 'Te llamo mañana.', 'ij RUU-fe dij MOR-guen an', 'ij RU-fe DIJ MOR-guen an']),

            V('hören', 'oír, escuchar', 'regular', 'JOE-ren', 'HÖ-ren (ö = "e" con labios de "o"; larga)',
              null, null, 'oreja',
              ['Ich höre Musik.', 'Escucho música.', 'ij JOE-re mu-SIIK', 'ij HÖ-re mu-SIK'])
          ]
        },

        /* ------------------------------------------------------ */
        {
          id: 'rutina', titulo: 'Rutina y tiempo libre', icono: 'sol', color: 'amarillo',
          descripcion: 'El día a día: levantarse, trabajar, descansar.',
          palabras: [
            S('aufstehen', 'auf', 'stehen', 'levantarse', 'AUF-shtee-en', 'AUF-shte-en (st = "sht")',
              null, 'Ich stehe um sieben Uhr auf. El prefijo auf se va al final.', 'sol',
              ['Ich stehe um sechs auf.', 'Me levanto a las seis.', 'ij SHTEE-e um zeks auf', 'ij SHTE-e um SEKS auf']),

            V('schlafen', 'dormir', 'irregular', 'SHLAA-fen', 'SHLA-fen (sch = "sh")',
              ['schlafe', 'schläfst', 'schläft', 'schlafen', 'schlaft', 'schlafen'],
              'a → ä: du schläfst, er schläft.', 'luna',
              ['Das Baby schläft.', 'El bebé duerme.', 'das BEE-bi shleft', 'das BE-bi SHLÈFT (ä = "e" abierta)']),

            V('arbeiten', 'trabajar', 'regular', 'AR-bai-ten', 'AR-bai-ten (ei = "ai")',
              null, 'Raíz en t: du arbeitest, er arbeitet.', 'maletin',
              ['Er arbeitet bei Siemens.', 'Trabaja en Siemens.', 'ea AR-bai-tet bai SII-mens', 'ER AR-bai-tet bai SI-mens']),

            V('spielen', 'jugar, tocar', 'regular', 'SHPII-len', 'SHPI-len (sp = "shp"; ie = "i" larga)',
              null, 'Fußball spielen, Gitarre spielen.', 'pelota',
              ['Wir spielen Fußball.', 'Jugamos fútbol.', 'viia SHPII-len FUUS-bal', 'VIR SHPI-len FUS-bal']),

            V('lesen', 'leer', 'irregular', 'LEE-sen', 'LE-sen (e larga; s sonora)',
              ['lese', 'liest', 'liest', 'lesen', 'lest', 'lesen'],
              'e → ie: du liest, er liest. (Las dos son iguales.)', 'libro',
              ['Sie liest ein Buch.', 'Ella lee un libro.', 'sii liist ain buuj', 'SI LIST ain BUCH']),

            V('sehen', 'ver', 'irregular', 'SEE-en', 'SE-en (s sonora)',
              ['sehe', 'siehst', 'sieht', 'sehen', 'seht', 'sehen'],
              'e → ie: du siehst, er sieht.', 'ojo',
              ['Ich sehe einen Film.', 'Veo una película.', 'ij SEE-e AI-nen film', 'ij SE-e AI-nen FILM']),

            S('fernsehen', 'fern', 'sehen', 'ver televisión', 'FERN-see-en', 'FERN-se-en',
              ['sehe fern', 'siehst fern', 'sieht fern', 'sehen fern', 'seht fern', 'sehen fern'],
              'Ich sehe abends fern. Se conjuga como sehen.', 'tele',
              ['Wir sehen abends fern.', 'Por las noches vemos tele.', 'viia SEE-en AA-bents fern', 'VIR SE-en A-bents FERN']),

            V('tanzen', 'bailar', 'regular', 'TAN-tsen', 'TAN-tsen (z = "ts")',
              null, 'Du tanzt (sin segunda s).', 'musica',
              ['Sie tanzt sehr gut.', 'Ella baila muy bien.', 'sii tantst seea guut', 'SI TANTST SER GUT']),

            V('schwimmen', 'nadar', 'regular', 'SHVI-men', 'SHVI-men (schw = "shv")',
              null, null, 'agua',
              ['Ich schwimme gern.', 'Me gusta nadar.', 'ij SHVI-me guern', 'ij SHVI-me GUERN']),

            V('singen', 'cantar', 'regular', 'SIN-en', 'SING-en (ng nasal, sin g aparte)',
              null, null, 'microfono',
              ['Er singt toll.', 'Canta genial.', 'ea sinkt tol', 'ER SINGT TOL']),

            V('suchen', 'buscar', 'regular', 'SUU-jen', 'SU-chen (u larga; ch áspera)',
              null, null, 'lupa',
              ['Ich suche meine Tasche.', 'Busco mi bolso.', 'ij SUU-je MAI-ne TA-she', 'ij SU-che MAI-ne TA-she']),

            S('aufräumen', 'auf', 'räumen', 'ordenar, recoger', 'AUF-roi-men', 'AUF-roi-men (äu = "oi")',
              null, 'Räum dein Zimmer auf! = ¡Ordena tu cuarto!', 'escoba',
              ['Ich räume heute auf.', 'Hoy ordeno.', 'ij ROI-me JOI-te auf', 'ij ROI-me HOI-te AUF']),

            S('einladen', 'ein', 'laden', 'invitar', 'AIN-laa-den', 'AIN-la-den (ei = "ai")',
              ['lade ein', 'lädst ein', 'lädt ein', 'laden ein', 'ladet ein', 'laden ein'],
              'a → ä: du lädst ein, er lädt ein. Ich lade dich ein = te invito.', 'regalo',
              ['Ich lade dich ein.', 'Te invito.', 'ij LAA-de dij ain', 'ij LA-de DIJ ain']),

            S('anfangen', 'an', 'fangen', 'empezar', 'AN-fan-guen', 'AN-fan-guen',
              ['fange an', 'fängst an', 'fängt an', 'fangen an', 'fangt an', 'fangen an'],
              'a → ä: er fängt an. Der Kurs fängt um neun an.', 'bandera',
              ['Der Film fängt um acht an.', 'La película empieza a las ocho.', 'dea film fènkt um ajt an', 'DER FILM fènkt um ACHT an'])
          ]
        },

        /* ------------------------------------------------------ */
        {
          id: 'modales', titulo: 'Verbos modales', icono: 'llave', color: 'turquesa',
          descripcion: 'Ayudan a otro verbo. Ese segundo verbo va en infinitivo al FINAL: Ich kann gut schwimmen.',
          palabras: [
            V('können', 'poder, saber (hacer)', M, 'KOE-nen', 'KÖ-nen (ö = "e" con labios de "o")',
              ['kann', 'kannst', 'kann', 'können', 'könnt', 'können'],
              'ich y er NO llevan terminación: ich kann, er kann. Es el "poder" de habilidad y permiso.', 'llave',
              ['Ich kann Deutsch sprechen.', 'Puedo hablar alemán.', 'ij kan doich SHPRE-jen', 'ij KAN DOICH SHPRE-chen']),

            V('müssen', 'tener que', M, 'MIU-sen', 'MÜ-sen (ü = "i" con labios de "u")',
              ['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'],
              'Ich muss gehen = tengo que irme. Ojo: Du musst NO es "no debes", es "tienes que".', 'alerta',
              ['Ich muss arbeiten.', 'Tengo que trabajar.', 'ij mus AR-bai-ten', 'ij MUS AR-bai-ten']),

            V('wollen', 'querer', M, 'VO-len', 'VO-len (w = "v"; o corta)',
              ['will', 'willst', 'will', 'wollen', 'wollt', 'wollen'],
              'Ich will es muy directo (quiero). Para pedir con educación usa möchten.', 'estrella',
              ['Wir wollen tanzen.', 'Queremos bailar.', 'viia VO-len TAN-tsen', 'VIR VO-len TAN-tsen']),

            V('möchten', 'querría, quisiera', M, 'MOEJ-ten', 'MÖCH-ten (ö = "e" con labios de "o"; ch suave)',
              ['möchte', 'möchtest', 'möchte', 'möchten', 'möchtet', 'möchten'],
              'Ich möchte… = quisiera… Es la forma educada para pedir en el café o la tienda.', 'cafe',
              ['Ich möchte einen Kaffee.', 'Quisiera un café.', 'ij MOEJ-te AI-nen KA-fe', 'ij MÖCH-te AI-nen KA-fe']),

            V('mögen', 'gustar, querer (a alguien)', M, 'MOE-guen', 'MÖ-guen (ö larga)',
              ['mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen'],
              'Ich mag Pizza = me gusta la pizza. Ich mag dich = me caes bien / te quiero.', 'corazon',
              ['Ich mag Schokolade.', 'Me gusta el chocolate.', 'ij maak sho-ko-LAA-de', 'ij MAK sho-ko-LA-de']),

            V('dürfen', 'poder, tener permiso', M, 'DIUR-fen', 'DÜR-fen (ü corta)',
              ['darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'],
              'Darf ich? = ¿Puedo / me permiten? Hier darf man nicht rauchen = aquí no se puede fumar.', 'semaforo',
              ['Darf ich hier sitzen?', '¿Puedo sentarme aquí?', 'darf ij jiia SI-tsen', 'DARF ij HIR SI-tsen']),

            V('sollen', 'deber (por encargo)', M, 'SO-len', 'SO-len (s sonora)',
              ['soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen'],
              'Soll ich…? = ¿Quieres que…? Wir sollen leise sein = nos piden que estemos callados.', 'campana',
              ['Soll ich das Fenster öffnen?', '¿Abro la ventana?', 'sol ij das FENS-ta OEF-nen', 'SOL ij das FENS-ta ÖF-nen'])
          ]
        }
      ]
    }
  });
})();
