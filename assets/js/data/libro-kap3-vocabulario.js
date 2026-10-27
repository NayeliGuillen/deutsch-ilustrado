/* ============================================================
   data/libro-kap3-vocabulario.js — Netzwerk neu A1 · Kapitel 3
   ------------------------------------------------------------
   Vocabulario del capítulo 3 "Städte – Länder – Sprachen"
   (págs. 30–37): lugares y edificios, transporte, eventos,
   meses y estaciones, y los sitios de Múnich / Hamburgo.
   [LIBRO] = aparece en las páginas fotografiadas.
   ============================================================ */

(function () {
  'use strict';

  /** W(de, es, gen, fon, fonFacil, visual, ejemplo[4], nota) */
  function W(de, es, gen, fon, ff, visual, ej, nota, plural) {
    var p = { de: de, es: es, fon: fon, fonFacil: ff };
    if (gen) p.gen = gen; else p.tipo = 'palabra';
    if (plural) p.plural = plural;
    if (visual) p.visual = visual;
    if (nota) p.nota = nota;
    if (ej) {
      p.ejemplo = { de: ej[0], es: ej[1] };
      if (ej[2] && ej[2].indexOf('…') < 0) p.ejemplo.fon = ej[2];
      if (ej[3] && ej[3].indexOf('…') < 0) p.ejemplo.fonFacil = ej[3];
    }
    return p;
  }

  DE.registrarLeccion({
    id: 'k3-vocabulario',
    titulo: 'Kap. 3 · Vocabulario',
    icono: 'libro',
    grupo: 'Libro · Kapitel 3',
    color: 'turquesa',
    resumen: 'Lugares, edificios, transporte, eventos, estaciones y sitios de Hamburgo y Múnich (págs. 30–37).',
    vista: 'vocabulario-pron',

    datos: {
      intro: '[LIBRO] Todo el vocabulario nuevo del capítulo 3, ordenado por tema. Pulsa el altavoz para oír cada palabra. ' +
             'Los nombres propios (Alster, Michel…) llevan nota porque no se traducen.',

      leyenda: [
        { titulo: 'Pronunciación', texto: 'La del curso: vocal larga = letra doble (taac), sílaba tónica en MAYÚSCULAS, j = ch suave, c = k, ü = "iu".' },
        { titulo: 'Pronunciación fácil', texto: 'Sílabas con guiones y, entre paréntesis, cómo sale cada sonido difícil.' }
      ],

      categorias: [

        {
          id: 'lugares', titulo: 'Lugares y edificios', icono: 'ubicacion', color: 'rojo',
          descripcion: '[LIBRO] pp. 30–31 y 37. Los que ves en el plano de Hamburgo y en las fotos.',
          palabras: [
            W('der Bahnhof', 'la estación de tren', 'der', 'BAAN-hoof', 'BAN-jof (a larga; la h es una "j" suave como en inglés "hot")', 'tren',
              ['Das ist der Bahnhof.', 'Esa es la estación.', 'das ist dea BAAN-hoof', 'das ist der BAN-jof (r final = "a" suave)'],
              'Hauptbahnhof = estación central (Hbf). Bahn = tren/vía, Hof = patio/edificio.', 'die Bahnhöfe'),
            W('der Hafen', 'el puerto', 'der', 'HAA-fen', 'JA-fen (a larga; h suave)', 'barco',
              ['Das ist ein Hafen.', 'Eso es un puerto.', 'das ist ain HAA-fen', 'das ist ain JA-fen'], null, 'die Häfen'),
            W('der Fluss', 'el río', 'der', 'FLUS', 'FLUS (u corta; ss = "s" sorda)', 'rio',
              ['Der Fluss heißt Alster.', 'El río se llama Alster.', 'dea FLUS jaist AL-sta', 'der FLUS jaist AL-ster (ei = "ai"; ß = "s")'],
              'Vocal corta delante de doble consonante (ss): Fluss.', 'die Flüsse'),
            W('der See', 'el lago', 'der', 'ZEE', 'SEE (e larga; la s inicial suena como "z" inglesa)', 'lago',
              ['Das ist kein See, das ist ein Fluss.', 'No es un lago, es un río.', 'das ist kain ZEE das ist ain FLUS', 'das ist kain SEE, das ist ain FLUS'],
              'Ojo: der See = el lago; die See = el mar.', 'die Seen'),
            W('das Hotel', 'el hotel', 'das', 'ho-TEL', 'jo-TEL (acento al final; h suave)', 'cama',
              ['Das Hotel heißt „Michel“.', 'El hotel se llama «Michel».', 'das ho-TEL jaist MI-jel', 'das jo-TEL jaist MI-chel'], null, 'die Hotels'),
            W('das Rathaus', 'el ayuntamiento', 'das', 'RAAT-haus', 'RAT-jaus (a larga; "au" = "au")', 'ayuntamiento',
              ['Nein, das ist das Rathaus.', 'No, es el ayuntamiento.', 'nain das ist das RAAT-haus', 'nain das ist das RAT-jaus'],
              'Rat = consejo + Haus = casa → "casa del consejo".', 'die Rathäuser'),
            W('die Kirche', 'la iglesia', 'die', 'KIR-je', 'KIR-che (ch suave: como una "j" muy suave, sin rasparse)', 'iglesia',
              ['Ist das eine Kirche?', '¿Es eso una iglesia?', 'ist das AI-ne KIR-je', 'ist das AI-ne KIR-che'], null, 'die Kirchen'),
            W('die Kunsthalle', 'la sala de arte (galería)', 'die', 'KUNST-ha-le', 'KUNST-ja-le (u corta)', 'museo',
              ['Das ist die Kunsthalle.', 'Esa es la Kunsthalle.', 'das ist di KUNST-ha-le', 'das ist di KUNST-ja-le'],
              'Kunst = arte + Halle = sala/nave. Es un museo de arte.', 'die Kunsthallen'),
            W('das Museum', 'el museo', 'das', 'mu-ZEE-um', 'mu-SEE-um (la s inicial = "z")', 'museo',
              ['Das ist ein Museum.', 'Eso es un museo.', 'das ist ain mu-ZEE-um', 'das ist ain mu-SEE-um'], null, 'die Museen'),
            W('das Theater', 'el teatro', 'das', 'te-AA-ta', 'te-A-ter (a larga; er final = "a" suave)', 'teatro',
              ['Das Theater heißt Thalia Theater.', 'El teatro se llama Thalia Theater.', 'das te-AA-ta jaist TAA-lia te-AA-ta', 'das te-A-ter jaist TA-lia te-A-ter'],
              'th se pronuncia como "t". Cognado de "theater" (inglés) y "teatro".', 'die Theater'),
            W('die Brücke', 'el puente', 'die', 'BRIU-ke', 'BRIU-ke (ü = "iu": pon la boca de "u" y di "i")', 'puente',
              ['Die Brücke heißt „Köhlbrandbrücke“.', 'El puente se llama «Köhlbrandbrücke».', 'di BRIU-ke jaist KOEL-brant-briu-ke', 'di BRIU-ke jaist KOEL-brant-briu-ke'],
              'ü: labios de "u", lengua de "i". Vocal corta delante de ck.', 'die Brücken'),
            W('das Café', 'la cafetería', 'das', 'ka-FEE', 'ka-FEE (acento en la última sílaba, como en español)', 'taza',
              ['Das ist ein Café.', 'Eso es una cafetería.', 'das ist ain ka-FEE', 'das ist ain ka-FEE'], null, 'die Cafés'),
            W('das Kino', 'el cine', 'das', 'KII-no', 'KI-no (i larga)', 'cine',
              ['Das ist ein Kino.', 'Eso es un cine.', 'das ist ain KII-no', 'das ist ain KI-no'], null, 'die Kinos'),
            W('der Turm', 'la torre', 'der', 'TURM', 'TURM (u corta; la r se vocaliza suave)', 'torre',
              ['Der Turm ist 112 Meter hoch.', 'La torre mide 112 metros de alto.', 'dea TURM ist hun-dert-TSVOELF MEE-ta hoоj', 'der TURM ist hundert-TSVOELF ME-ta JOJ (z = ts; ö = oe)'],
              'Se usa "ist … hoch" (es alto): adjetivo con sein.', 'die Türme'),
            W('die Straße', 'la calle', 'die', 'SHTRAA-se', 'SHTRA-se (st- inicial = "sht"; ß = "s")', 'semaforo',
              ['Das ist eine Straße.', 'Eso es una calle.', 'das ist AI-ne SHTRAA-se', 'das ist AI-ne SHTRA-se'], null, 'die Straßen'),
            W('das Haus', 'la casa, el edificio', 'das', 'HAUS', 'JAUS (h suave)', 'casa',
              ['Die Häuser sind 400 Jahre alt.', 'Las casas tienen 400 años.', 'di HOI-sa zint fiir-hun-dert YAA-re alt', 'di JOI-ser zint FIR-hun-dert YA-re alt (äu = "oi")'],
              'Plural: die Häuser (a → ä).', 'die Häuser'),
            W('das Konzerthaus', 'la sala de conciertos', 'das', 'kon-TSERT-haus', 'kon-TSERT-jaus (z = "ts")', 'concierto',
              null, 'Konzert + Haus. Aparece en el ejercicio 2a de la taxifahrt.', 'die Konzerthäuser'),
            W('der Markt', 'el mercado', 'der', 'MARKT', 'MARKT (a corta; r suave)', 'markt'),
            W('der Park', 'el parque', 'der', 'PARK', 'PARK', 'parque'),
            W('die U-Bahn', 'el metro', 'die', 'UU-baan', 'UU-ban (U larga)', 'metro',
              ['Wo ist die U-Bahn?', '¿Dónde está el metro?', 'voo ist di UU-baan', 'vo ist di UU-ban (w = "v")'],
              'U = Untergrund (subterráneo). Bahn = tren.', 'die U-Bahnen')
          ]
        },

        {
          id: 'transporte', titulo: 'Transporte: "Kein Glück?!"', icono: 'ubicacion', color: 'azul',
          descripcion: '[LIBRO] p. 32. La historieta de la chica sin suerte.',
          palabras: [
            W('der Bus', 'el autobús', 'der', 'BUS', 'BUS (u corta)', 'bus',
              ['Ach nee, kein Bus.', 'Ay no, ningún autobús.', 'aj nee kain BUS', 'aj nee kain BUS'], null, 'die Busse'),
            W('das Fahrrad', 'la bicicleta', 'das', 'FAAR-raat', 'FAR-rat (a larga; d final = "t")', 'bici',
              ['Oje, kein Fahrrad!', '¡Ay, no hay bici!', 'OO-ye kain FAAR-raat', 'O-ye kain FAR-rat'],
              'Fahr = ir (en vehículo) + Rad = rueda. Se dice también "das Rad".', 'die Fahrräder'),
            W('das Auto', 'el coche', 'das', 'AU-to', 'AU-to', 'coche', null, null, 'die Autos'),
            W('die Fahrkarte', 'el billete', 'die', 'FAAR-kar-te', 'FAR-kar-te', 'ticket',
              ['Oh nein! Keine Fahrkarte?!', '¡Ay no! ¿Sin billete?', 'oo nain KAI-ne FAAR-kar-te', 'o nain KAI-ne FAR-kar-te'],
              'Fahren = ir en vehículo + Karte = tarjeta.', 'die Fahrkarten'),
            W('zu Fuß gehen', 'ir a pie', null, 'tsu FUUS GEE-en', 'tsu FUS GUE-en (z = "ts"; u larga; g = "gu")', null,
              ['Ich gehe zu Fuß. Jetzt aber schnell!', 'Voy a pie. ¡Pero ahora rápido!', 'ij GEE-e tsu FUUS YETST AA-ba shnel', 'ij GUE-e tsu FUS YETST A-ba shnel'],
              'Expresión fija: zu Fuß (a pie), sin artículo.'),
            W('der Test', 'el examen, la prueba', 'der', 'TEST', 'TEST', null,
              ['Heute kein Test! So ein Glück!', '¡Hoy no hay examen! ¡Qué suerte!', 'HOI-te kain TEST zoo ain GLIUK', 'JOI-te kain TEST so ain GLIUK'], null, 'die Tests'),
            W('das Glück', 'la suerte, la felicidad', 'das', 'GLIUK', 'GLIUK (ü = "iu"; ck = "k")', 'estrella',
              ['So ein Glück!', '¡Qué suerte!', 'zoo ain GLIUK', 'so ain GLIUK'],
              '"Kein Glück?!" = ¿Sin suerte? Kein + palabra neutra.')
          ]
        },

        {
          id: 'camino', titulo: 'Preguntar y dar el camino', icono: 'brujula', color: 'naranja',
          descripcion: '[LIBRO] p. 33. Las tres palabras clave del camino.',
          palabras: [
            W('links', 'a la izquierda', null, 'LINKS', 'LINKS (i corta; ng-k como en español)', 'izquierda',
              ['Gehen Sie links!', '¡Vaya a la izquierda!', 'GEE-en zii LINKS', 'GUE-en si LINKS'], 'Recuadro [!] del libro: links ←'),
            W('geradeaus', 'todo recto', null, 'ge-RAA-de-aus', 'gue-RA-de-AUS (g = "gu"; a larga)', 'arriba',
              ['Fahren Sie geradeaus!', '¡Siga todo recto (en vehículo)!', 'FAA-ren zii ge-RAA-de-AUS', 'FA-ren si gue-RA-de-AUS'], 'Recuadro [!] del libro: geradeaus ↑'),
            W('rechts', 'a la derecha', null, 'REJTS', 'REJTS (ch áspera, como la j de "caja")', 'derecha',
              ['Gehen Sie rechts und dann geradeaus.', 'Vaya a la derecha y luego todo recto.', 'GEE-en zii REJTS unt dan ge-RAA-de-aus', 'GUE-en si REJTS unt dan gue-RA-de-AUS'], 'Recuadro [!] del libro: rechts →')
          ]
        },

        {
          id: 'eventos', titulo: 'Eventos: Teatro – Música – Cine', icono: 'musica', color: 'rosa',
          descripcion: '[LIBRO] p. 34 "Events in Hamburg". Palabras internacionales: ¡las reconoces casi todas!',
          palabras: [
            W('das Festival', 'el festival', 'das', 'FES-ti-val', 'FES-ti-val (v = "v" aquí, como en español "valle")', 'mascaras',
              ['Das Hamburger Theater-Festival ist im Oktober.', 'El festival de teatro de Hamburgo es en octubre.', 'das JAM-bur-ga te-AA-ta-FES-ti-val ist im ok-TOO-ba', 'das JAM-bur-ga te-AA-ta-FES-ti-val ist im ok-TOO-ba'], null, 'die Festivals'),
            W('das Orchester', 'la orquesta', 'das', 'or-KES-ta', 'or-KES-ter (ch = "k"; er final = "a")', 'orquesta',
              ['Das Orchester spielt Mozart.', 'La orquesta toca a Mozart.', 'das or-KES-ta SHPIILT MOO-tsart', 'das or-KES-ter SHPILT MOT-sart'], null, 'die Orchester'),
            W('der Chor', 'el coro', 'der', 'KOOR', 'KOR (ch = "k"; o larga)', 'orquesta', null, null, 'die Chöre'),
            W('das Konzert', 'el concierto', 'das', 'kon-TSERT', 'kon-TSERT (z = "ts")', 'concierto',
              ['Philippe Herreweghe dirigiert das Konzert.', 'Philippe Herreweghe dirige el concierto.', 'FI-lip HE-re-vek di-ri-GEERT das kon-TSERT', 'fi-LIP E-re-vek di-ri-GUIERT das kon-TSERT (ie = i larga; g = gu)'], null, 'die Konzerte'),
            W('der Film', 'la película', 'der', 'FILM', 'FILM', 'claqueta',
              ['Er präsentiert seinen neuen Film.', 'Presenta su nueva película.', 'ea pre-zen-TIIRT zai-nen NOI-en FILM', 'er pre-sen-TIRT SAI-nen NOI-en FILM (eu = oi)'],
              'Ojo: das Theater, das Festival… pero DER Film y DER Chor (el cuadro del libro lo marca).', 'die Filme'),
            W('das Publikum', 'el público', 'das', 'PUU-bli-kum', 'PU-bli-kum (u larga en la primera; acento en PU-)', 'publico', null, null, null)
          ]
        },

        {
          id: 'jahreszeiten', titulo: 'Estaciones y actividades', icono: 'calendario', color: 'verde',
          descripcion: '[LIBRO] p. 35 "Jahreszeiten in D-A-CH". Con "im": im Sommer, im Januar.',
          palabras: [
            W('die Jahreszeit', 'la estación del año', 'die', 'YAA-res-tsait', 'YA-res-tsait (j = "y"; z = "ts")', 'calendario',
              null, 'Jahr (año) + Zeit (tiempo). Plural: die Jahreszeiten.', 'die Jahreszeiten'),
            W('der Frühling', 'la primavera', 'der', 'FRIU-ling', 'FRIU-ling (ü = "iu")', 'flor', ['Im Frühling fahre ich Fahrrad.', 'En primavera ando en bici.', 'im FRIU-ling FAA-re ij FAAR-raat', 'im FRIU-ling FA-re ij FAR-rat'], 'März · April · Mai'),
            W('der Sommer', 'el verano', 'der', 'ZO-ma', 'SO-mer (s = "z"; er final = "a")', 'sombrilla', ['Im Sommer schwimme ich.', 'En verano nado.', 'im ZO-ma SHVI-me ij', 'im SO-mer SHVI-me ij'], 'Juni · Juli · August'),
            W('der Herbst', 'el otoño', 'der', 'HERBST', 'JERBST (h suave)', 'hoja', null, 'September · Oktober · November'),
            W('der Winter', 'el invierno', 'der', 'VIN-ta', 'VIN-ter (w = "v")', 'nieve', null, 'Dezember · Januar · Februar'),
            W('ins Museum gehen', 'ir al museo', null, 'ins mu-ZEE-um GEE-en', 'ins mu-SEE-um GUE-en', 'museo',
              ['Im Winter gehe ich ins Museum.', 'En invierno voy al museo.', 'im VIN-ta GEE-e ij ins mu-ZEE-um', 'im VIN-ter GUE-e ij ins mu-SEE-um'], 'ins = in + das (Museum es neutro).'),
            W('schwimmen', 'nadar', null, 'SHVI-men', 'SHVI-men (sch = "sh"; w = "v")', 'nadador',
              ['Im Sommer schwimme ich im See.', 'En verano nado en el lago.', 'im ZO-ma SHVI-me ij im ZEE', 'im SO-mer SHVI-me ij im SEE'], 'Verbo regular; ich schwimme.'),
            W('Fahrrad fahren', 'ir en bicicleta', null, 'FAAR-raat FAA-ren', 'FAR-rat FA-ren', 'bici',
              ['Ich fahre gern Fahrrad.', 'Me gusta ir en bici.', 'ij FAA-re gern FAAR-raat', 'ij FA-re GUERN FAR-rat'], 'Fahren es irregular: ich fahre, du fährst, er fährt.'),
            W('reisen', 'viajar', null, 'RAI-sen', 'RAI-sen (ei = "ai"; s sonora)', 'maleta',
              ['Im Herbst reise ich nach Berlin.', 'En otoño viajo a Berlín.', 'im HERBST RAI-ze ij naaj ber-LIIN', 'im JERBST RAI-se ij naj ber-LIN (nach: ch áspera)'], 'Verbo regular.')
          ]
        },

        {
          id: 'muenchen', titulo: 'Múnich: la Stadttour', icono: 'ubicacion', color: 'morado',
          descripcion: '[LIBRO] p. 36 "Die Netzwerk-WG". Lugares de la ciudad; son nombres propios.',
          palabras: [
            W('der Englische Garten', 'el Jardín Inglés (parque de Múnich)', 'der', 'EN-gli-she GAR-ten', 'EN-gli-she GAR-ten (ng = "ng" de "tengo")', 'parque', null, 'Un parque gigante: 375 hectáreas (ejercicio 12).'),
            W('der Chinesische Turm', 'la Torre China', 'der', 'ji-NEE-zi-she TURM', 'chi-NEE-si-she TURM (ch = "j" suave o "k")', 'torre', null, 'Está dentro del Englischer Garten.'),
            W('das Müller’sche Volksbad', 'los baños públicos Müller', 'das', 'MIU-ler-she FOLKS-baat', 'MIU-ler-she FOLKS-bat (v alemana suena "f")', 'piscina', null, 'Junto al río Isar. Volk = pueblo; Bad = baño.'),
            W('der Olympiapark', 'el Parque Olímpico', 'der', 'o-LIM-pia-park', 'o-LIM-pia-park', 'estadio', null, 'Ahí está el Olympiastadion (Bauzeit 1969–1972).'),
            W('der Viktualienmarkt', 'el mercado Viktualienmarkt', 'der', 'vik-tu-AA-lien-markt', 'vik-tu-A-lien-markt (v = "v"; ien = "ien")', 'markt', null, 'Famoso mercado del centro de Múnich.'),
            W('der Hauptbahnhof', 'la estación central', 'der', 'JAUPT-baan-hoof', 'JAUPT-ban-jof (au = "au")', 'tren', null, 'Haupt = principal. Se abrevia Hbf.'),
            W('der Marienplatz', 'la plaza de María', 'der', 'ma-RII-en-plats', 'ma-RII-en-plats', 'casa', null, 'Plaza central de Múnich.'),
            W('das Isartor', 'la puerta del Isar', 'das', 'II-zar-toor', 'I-zar-tor', 'puerta', null, 'Tor = puerta. Es una de las puertas históricas.'),
            W('der Eisbach', 'el Eisbach (arroyo de los surfistas)', 'der', 'AIS-baj', 'AIS-baj (ch áspera final)', 'agua', null, 'Ahí surfean aunque está en pleno centro.'),
            W('das Museum „Haus der Kunst“', 'museo «Casa del Arte»', 'das', 'JAUS dea KUNST', 'JAUS dea KUNST (au = "au")', 'museo', null, 'Nombre propio: no se traduce al hablar.'),
            W('die Theatinerkirche', 'la iglesia de los Teatinos', 'die', 'te-a-TII-ner-kir-je', 'te-a-TI-ner-kir-che', 'iglesia', null, 'Iglesia de Múnich (ejercicio 11b).')
          ]
        },

        {
          id: 'hamburg', titulo: 'Hamburgo: nombres del plano', icono: 'ubicacion', color: 'turquesa',
          descripcion: '[LIBRO] p. 30 y p. 31. Los lugares del paseo en taxi.',
          palabras: [
            W('die Alster', 'el río Alster', 'die', 'AL-sta', 'AL-ster', 'rio', null, 'El taxista aclara: "Das ist kein See, das ist ein Fluss." (la Binnenalster parece un lago).'),
            W('die Michaeliskirche', 'la iglesia de San Miguel', 'die', 'mi-ja-EE-lis-kir-je', 'mi-cha-E-lis-kir-che', 'iglesia', null, 'Los hamburgueses la llaman "der Michel". Por eso el hotel se llama "Michel".'),
            W('das Thalia Theater', 'el Thalia Theater', 'das', 'TAA-lia te-AA-ta', 'TA-lia te-A-ter', 'teatro', null, 'Th = "t".'),
            W('Hamburg-Altona', 'estación Hamburg-Altona', null, 'JAM-burg AL-to-na', 'JAM-burg AL-to-na', 'tren', null, 'Una de las estaciones de Hamburgo.'),
            W('die Elbphilharmonie', 'la Elbphilharmonie (sala de conciertos)', 'die', 'EL-be-fil-jar-mo-NII', 'EL-be-fil-jar-mo-NI', 'concierto', null, 'Sala de conciertos junto al río Elba. Aparece en "Events in Hamburg".')
          ]
        }

      ]
    }
  });
})();
