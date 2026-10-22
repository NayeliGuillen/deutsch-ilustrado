/* ============================================================
   data/vocabulario-direcciones.js — Ciudad y direcciones
   ------------------------------------------------------------
   Las palabras que necesitas para preguntar y dar direcciones.
   Mismos campos que vocabulario-kap2.js (fon, fonFacil, visual,
   ejemplo). El entrenamiento de vocabulario también las usa.
   ============================================================ */

DE.registrarLeccion({
  id: 'vocabulario-direcciones',
  titulo: 'Vocabulario: ciudad y direcciones',
  icono: 'ubicacion',
  grupo: 'Domina el tema',
  color: 'turquesa',
  resumen: 'Calles, edificios, posición y frases para pedir ayuda, con dibujo, audio y ejemplo.',
  vista: 'vocabulario-pron',

  datos: {
    intro: 'Aprende cada edificio con su der / die / das: el color de la etiqueta te lo recuerda. ' +
           'Pulsa el altavoz de la palabra y luego el de la oración de ejemplo.',

    leyenda: [
      { titulo: 'Pronunciación', texto: 'La del curso: vocal larga = letra doble (taac), sílaba tónica en MAYÚSCULAS, j = ch suave, c = k.' },
      { titulo: 'Pronunciación fácil', texto: 'Sílabas separadas con guiones y, entre paréntesis, cómo sale cada sonido difícil.' }
    ],

    categorias: [

      /* ---------------------------------------------------------- */
      {
        id: 'calle', titulo: 'En la calle', icono: 'ubicacion', color: 'turquesa',
        descripcion: 'Lo que ves mientras caminas: calles, cruces, semáforos y paradas.',
        palabras: [
          { de: 'die Straße', es: 'la calle', gen: 'die', plural: 'die Straßen',
            fon: 'SHTRAA-se',
            fonFacil: 'SHTRA-se (st inicial = "sht"; a larga; ß = s sorda)',
            visual: 'autobahn',
            ejemplo: { de: 'Die Straße ist lang.', es: 'La calle es larga.',
              fon: 'dii SHTRAA-se ist lang',
              fonFacil: 'di SHTRA-se ist LANG' } },

          { de: 'die Kreuzung', es: 'el cruce', gen: 'die', plural: 'die Kreuzungen',
            fon: 'KROI-tsung',
            fonFacil: 'KROI-tsung (eu = "oi"; z = "ts"; ng nasal, sin g fuerte)',
            visual: 'brujula',
            ejemplo: { de: 'Die Kreuzung ist groß.', es: 'El cruce es grande.',
              fon: 'dii KROI-tsung ist groos',
              fonFacil: 'di KROI-tsung ist GROS (o larga; ß = s sorda)' } },

          { de: 'die Ampel', es: 'el semáforo', gen: 'die', plural: 'die Ampeln',
            fon: 'AM-pel',
            fonFacil: 'AM-pel (a corta; la p sí se pronuncia)',
            ejemplo: { de: 'Die Ampel ist rot.', es: 'El semáforo está en rojo.',
              fon: 'dii AM-pel ist root',
              fonFacil: 'di AM-pel ist ROT (o larga)' } },

          { de: 'die Ecke', es: 'la esquina', gen: 'die', plural: 'die Ecken',
            fon: 'E-ke',
            fonFacil: 'E-ke (e corta; ck = k)',
            nota: 'Frase hecha muy útil: an der Ecke = en la esquina.',
            ejemplo: { de: 'Das Café ist an der Ecke.', es: 'La cafetería está en la esquina.',
              fon: 'das ka-FEE ist an dea E-ke',
              fonFacil: 'das ka-FE ist an der E-ke (der = "dea"; la r final casi no suena)' } },

          { de: 'der Platz', es: 'la plaza', gen: 'der', plural: 'die Plätze',
            fon: 'plats',
            fonFacil: 'PLATS (tz = ts)',
            nota: 'Plural con Umlaut: die Plätze.',
            visual: 'markt',
            ejemplo: { de: 'Der Platz ist schön.', es: 'La plaza es bonita.',
              fon: 'dea plats ist shoen',
              fonFacil: 'der PLATS ist SHÖN (ö: di "e" con los labios en "o")' } },

          { de: 'die Haltestelle', es: 'la parada', gen: 'die', plural: 'die Haltestellen',
            fon: 'JAL-te-shte-le',
            fonFacil: 'HAL-te-SHTE-le (h aspirada suave; st = "sht")',
            visual: 'metro',
            ejemplo: { de: 'Die Haltestelle ist hier.', es: 'La parada está aquí.',
              fon: 'dii JAL-te-shte-le ist jiia',
              fonFacil: 'di HAL-te-SHTE-le ist HIR (ie = i larga)' } },

          { de: 'die Richtung', es: 'la dirección', gen: 'die', plural: 'die Richtungen',
            fon: 'RIJ-tung',
            fonFacil: 'RICH-tung (ch suave, como la j de "jirafa" muy suave; ng nasal)',
            visual: 'brujula',
            ejemplo: { de: 'Gehen Sie in diese Richtung.', es: 'Vaya en esta dirección.',
              fon: 'GEE-en sii in DII-ze RIJ-tung',
              fonFacil: 'GE-en SI in DI-ze RICH-tung (Sie = "si" larga; s = z)' } },

          { de: 'der Stadtplan', es: 'el plano de la ciudad', gen: 'der', plural: 'die Stadtpläne',
            fon: 'SHTAT-plaan',
            fonFacil: 'SHTAT-plan (st = "sht"; dt = t)',
            visual: 'ubicacion',
            ejemplo: { de: 'Hier ist der Stadtplan.', es: 'Aquí está el plano.',
              fon: 'jiia ist dea SHTAT-plaan',
              fonFacil: 'HIR ist der SHTAT-plan' } }
        ]
      },

      /* ---------------------------------------------------------- */
      {
        id: 'edificios', titulo: 'Edificios y lugares', icono: 'ubicacion', color: 'azul',
        descripcion: 'Los lugares de los mapas del entrenamiento. Cada uno con su artículo.',
        palabras: [
          { de: 'der Bahnhof', es: 'la estación de tren', gen: 'der', plural: 'die Bahnhöfe',
            fon: 'BAAN-joof',
            fonFacil: 'BAN-hof (la h de Bahn no suena; la de -hof sí, suave)',
            nota: 'Bahn (tren) + Hof (patio): una palabra compuesta, y manda la última: der Hof → der Bahnhof.',
            ejemplo: { de: 'Der Bahnhof ist groß.', es: 'La estación es grande.',
              fon: 'dea BAAN-joof ist groos',
              fonFacil: 'der BAN-hof ist GROS' } },

          { de: 'die Apotheke', es: 'la farmacia', gen: 'die', plural: 'die Apotheken',
            fon: 'a-po-TEE-ke',
            fonFacil: 'a-po-TE-ke (th = t; el acento va en TE)',
            visual: 'pastillas',
            ejemplo: { de: 'Die Apotheke ist dort.', es: 'La farmacia está allí.',
              fon: 'dii a-po-TEE-ke ist dort',
              fonFacil: 'di a-po-TE-ke ist DORT (o corta)' } },

          { de: 'die Bank', es: 'el banco', gen: 'die', plural: 'die Banken',
            fon: 'bank',
            fonFacil: 'BANK (a corta)',
            nota: 'Ojo: die Bank (el banco de dinero) tiene plural die Banken; die Bank (el banco para sentarse) tiene plural die Bänke.',
            visual: 'maletin',
            ejemplo: { de: 'Ich suche die Bank.', es: 'Busco el banco.',
              fon: 'ij ZUU-je dii bank',
              fonFacil: 'ich ZU-che di BANK (ch suave; u larga)' } },

          { de: 'die Post', es: 'correos', gen: 'die',
            fon: 'post',
            fonFacil: 'POST (o corta; s sorda)',
            visual: 'mensaje',
            ejemplo: { de: 'Die Post ist links.', es: 'Correos está a la izquierda.',
              fon: 'dii post ist links',
              fonFacil: 'di POST ist LINKS' } },

          { de: 'das Rathaus', es: 'el ayuntamiento', gen: 'das', plural: 'die Rathäuser',
            fon: 'RAAT-jaus',
            fonFacil: 'RAT-haus (au = "au"; la h de -haus sí suena)',
            nota: 'Rat (consejo) + Haus (casa): das Haus manda, por eso das Rathaus.',
            ejemplo: { de: 'Das Rathaus ist rechts.', es: 'El ayuntamiento está a la derecha.',
              fon: 'das RAAT-jaus ist rejts',
              fonFacil: 'das RAT-haus ist REJTS' } },

          { de: 'der Supermarkt', es: 'el supermercado', gen: 'der', plural: 'die Supermärkte',
            fon: 'ZUU-pea-markt',
            fonFacil: 'SU-per-markt (s = z; -er = "a")',
            visual: 'tienda',
            ejemplo: { de: 'Der Supermarkt ist geradeaus.', es: 'El supermercado está todo recto.',
              fon: 'dea ZUU-pea-markt ist gue-raa-de-AUS',
              fonFacil: 'der SU-pa-markt ist ge-ra-de-AUS' } },

          { de: 'die Schule', es: 'la escuela', gen: 'die', plural: 'die Schulen',
            fon: 'SHUU-le',
            fonFacil: 'SHU-le (sch = "sh"; u larga)',
            visual: 'birrete',
            ejemplo: { de: 'Die Schule ist groß.', es: 'La escuela es grande.',
              fon: 'dii SHUU-le ist groos',
              fonFacil: 'di SHU-le ist GROS' } },

          { de: 'das Krankenhaus', es: 'el hospital', gen: 'das', plural: 'die Krankenhäuser',
            fon: 'KRAN-ken-jaus',
            fonFacil: 'KRAN-ken-haus',
            nota: 'Kranken (de enfermos) + Haus: "casa de enfermos". Das Haus manda: das Krankenhaus.',
            visual: 'cruz',
            ejemplo: { de: 'Das Krankenhaus ist weit.', es: 'El hospital está lejos.',
              fon: 'das KRAN-ken-jaus ist vait',
              fonFacil: 'das KRAN-ken-haus ist VAIT (w = v; ei = ai)' } },

          { de: 'die Kirche', es: 'la iglesia', gen: 'die', plural: 'die Kirchen',
            fon: 'KIR-je',
            fonFacil: 'KIR-che (ch suave)',
            ejemplo: { de: 'Die Kirche ist alt.', es: 'La iglesia es antigua.',
              fon: 'dii KIR-je ist alt',
              fonFacil: 'di KIR-che ist ALT' } },

          { de: 'das Hotel', es: 'el hotel', gen: 'das', plural: 'die Hotels',
            fon: 'jo-TEL',
            fonFacil: 'ho-TEL (h aspirada; el acento va al final)',
            visual: 'cama',
            ejemplo: { de: 'Das Hotel ist neu.', es: 'El hotel es nuevo.',
              fon: 'das jo-TEL ist noi',
              fonFacil: 'das ho-TEL ist NOI (eu = "oi")' } },

          { de: 'das Theater', es: 'el teatro', gen: 'das', plural: 'die Theater',
            fon: 'te-AA-tea',
            fonFacil: 'te-A-ta (acento en A; -er = "a")',
            visual: 'mascaras',
            ejemplo: { de: 'Das Theater ist nah.', es: 'El teatro está cerca.',
              fon: 'das te-AA-tea ist naa',
              fonFacil: 'das te-A-ta ist NA' } },

          { de: 'die Bibliothek', es: 'la biblioteca', gen: 'die', plural: 'die Bibliotheken',
            fon: 'bi-blio-TEEK',
            fonFacil: 'bi-blio-TEK (th = t; falso amigo: no es "librería")',
            nota: 'Falso amigo: die Bibliothek = biblioteca. La librería (donde compras libros) es die Buchhandlung.',
            visual: 'libros',
            ejemplo: { de: 'Die Bibliothek ist dort.', es: 'La biblioteca está allí.',
              fon: 'dii bi-blio-TEEK ist dort',
              fonFacil: 'di bi-blio-TEK ist DORT' } },

          { de: 'die Bäckerei', es: 'la panadería', gen: 'die', plural: 'die Bäckereien',
            fon: 'be-ke-RAI',
            fonFacil: 'be-ke-RAI (ä = e; ei = ai; acento al final)',
            visual: 'butterbrot',
            ejemplo: { de: 'Die Bäckerei ist neu.', es: 'La panadería es nueva.',
              fon: 'dii be-ke-RAI ist noi',
              fonFacil: 'di be-ke-RAI ist NOI' } },

          { de: 'das Schwimmbad', es: 'la piscina (pública)', gen: 'das', plural: 'die Schwimmbäder',
            fon: 'SHVIM-baat',
            fonFacil: 'SHVIM-bat (sch = "sh"; w = v; d final = t)',
            visual: 'piscina',
            ejemplo: { de: 'Das Schwimmbad ist geradeaus.', es: 'La piscina está todo recto.',
              fon: 'das SHVIM-baat ist gue-raa-de-AUS',
              fonFacil: 'das SHVIM-bat ist ge-ra-de-AUS' } }
        ]
      },

      /* ---------------------------------------------------------- */
      {
        id: 'posicion', titulo: 'Dónde está', icono: 'brujula', color: 'verde',
        descripcion: 'Palabras de posición: cerca, lejos, enfrente, al lado.',
        palabras: [
          { de: 'dort', es: 'allí', tipo: 'adverbio',
            fon: 'dort',
            fonFacil: 'DORT (o corta; la r es suave)',
            nota: 'da = ahí; dort = allí (más lejos). En el día a día se usa mucho da.',
            visual: 'ubicacion',
            ejemplo: { de: 'Das Café ist dort.', es: 'La cafetería está allí.',
              fon: 'das ka-FEE ist dort',
              fonFacil: 'das ka-FE ist DORT' } },

          { de: 'weit', es: 'lejos', tipo: 'adjetivo',
            fon: 'vait',
            fonFacil: 'VAIT (w = v; ei = ai)',
            visual: 'km',
            ejemplo: { de: 'Ist es weit?', es: '¿Está lejos?',
              fon: 'ist es vait',
              fonFacil: 'ist es VAIT' } },

          { de: 'nah', es: 'cerca', tipo: 'adjetivo',
            fon: 'naa',
            fonFacil: 'NA (a larga; la h no suena)',
            ejemplo: { de: 'Der Park ist nah.', es: 'El parque está cerca.',
              fon: 'dea park ist naa',
              fonFacil: 'der PARK ist NA' } },

          { de: 'neben', es: 'al lado de', tipo: 'preposición',
            fon: 'NEE-ben',
            fonFacil: 'NE-ben (e larga)',
            nota: 'Después de neben el artículo cambia (dem). Por ahora memoriza la frase completa.',
            ejemplo: { de: 'Das Café ist neben dem Hotel.', es: 'La cafetería está al lado del hotel.',
              fon: 'das ka-FEE ist NEE-ben deem jo-TEL',
              fonFacil: 'das ka-FE ist NE-ben DEM ho-TEL (dem = der/das tras neben)' } },

          { de: 'gegenüber', es: 'enfrente', tipo: 'adverbio',
            fon: 'gue-guen-IUU-bea',
            fonFacil: 'ge-gen-Ü-ba (ü: di "i" con los labios en "u"; -er = "a"; el acento va en Ü)',
            ejemplo: { de: 'Das Hotel ist gegenüber.', es: 'El hotel está enfrente.',
              fon: 'das jo-TEL ist gue-guen-IUU-bea',
              fonFacil: 'das ho-TEL ist ge-gen-Ü-ba' } },

          { de: 'zurück', es: 'de vuelta, atrás', tipo: 'adverbio',
            fon: 'tsu-RIUK',
            fonFacil: 'tsu-RÜK (z = ts; ü: "i" con labios en "u"; ck = k)',
            visual: 'flechaIzq',
            ejemplo: { de: 'Gehen Sie zurück.', es: 'Vuelva (por donde vino).',
              fon: 'GEE-en sii tsu-RIUK',
              fonFacil: 'GE-en SI tsu-RÜK' } }
        ]
      },

      /* ---------------------------------------------------------- */
      {
        id: 'preguntar', titulo: 'Pedir ayuda y dar las gracias', icono: 'mensaje', color: 'naranja',
        descripcion: 'Las frases reales que se usan en la calle, con el tono correcto.',
        palabras: [
          { de: 'Entschuldigung', es: 'perdón; disculpe', tipo: 'frase',
            fon: 'ent-SHUL-di-gung',
            fonFacil: 'ent-SHUL-di-gung (sch = "sh"; -ung = ung nasal, sin g fuerte)',
            nota: 'Sirve para llamar la atención de un desconocido y para pedir perdón.',
            visual: 'mensaje',
            ejemplo: { de: 'Entschuldigung, wo ist die Post?', es: 'Disculpe, ¿dónde está correos?',
              fon: 'ent-SHUL-di-gung, voo ist dii post',
              fonFacil: 'ent-SHUL-di-gung, VO ist di POST (w = v)' } },

          { de: 'Gibt es hier …?', es: '¿Hay por aquí …?', tipo: 'frase',
            fon: 'gipt es jiia',
            fonFacil: 'GIPT es HIR (b final = p; ie = i larga)',
            nota: 'Es gibt = "hay". No cambia con singular o plural. Con palabras der el artículo cambia (einen): lo verás pronto.',
            visual: 'pregunta',
            ejemplo: { de: 'Gibt es hier ein Café?', es: '¿Hay por aquí una cafetería?',
              fon: 'gipt es jiia ain ka-FEE',
              fonFacil: 'GIPT es HIR ain ka-FE' } },

          { de: 'Wie komme ich zum …?', es: '¿Cómo llego a …?', tipo: 'frase',
            fon: 'vii KO-me ij tsum',
            fonFacil: 'VI KO-me ich tsum (w = v; ie = i larga; ch suave)',
            nota: 'zum = zu + dem (palabras der y das): zum Bahnhof, zum Hotel. zur = zu + der (palabras die): zur Post.',
            visual: 'pregunta',
            ejemplo: { de: 'Wie komme ich zum Bahnhof?', es: '¿Cómo llego a la estación?',
              fon: 'vii KO-me ij tsum BAAN-joof',
              fonFacil: 'VI KO-me ich tsum BAN-hof' } },

          { de: 'Vielen Dank!', es: '¡Muchas gracias!', tipo: 'frase',
            fon: 'FII-len dank',
            fonFacil: 'FI-len DANK (¡la v de Vielen suena como f!)',
            nota: 'La v alemana suena f en casi todas las palabras propias: Vater, viel, vier.',
            ejemplo: { de: 'Vielen Dank und tschüss!', es: '¡Muchas gracias y hasta luego!',
              fon: 'FII-len dank unt chius',
              fonFacil: 'FI-len DANK unt TCHÜS (tsch = "ch" de "chico"; ü...)' } },

          { de: 'Gern geschehen', es: 'de nada; con gusto', tipo: 'frase',
            fon: 'guern gue-SHEE-en',
            fonFacil: 'GERN ge-SHE-en (g como en "gato"; sch = "sh")',
            nota: 'Entre amigos también: Bitte! o Kein Problem!',
            ejemplo: { de: 'Danke! – Gern geschehen!', es: '¡Gracias! – ¡De nada!',
              fon: 'DAN-ke guern gue-SHEE-en',
              fonFacil: 'DAN-ke – GERN ge-SHE-en' } },

          { de: 'Kein Problem', es: 'no hay problema', tipo: 'frase',
            fon: 'kain pro-BLEEM',
            fonFacil: 'KAIN pro-BLEM (ei = ai; el acento va al final)',
            nota: 'Aquí aparece kein con una palabra neutra: das Problem → kein Problem.',
            ejemplo: { de: 'Danke! – Kein Problem!', es: '¡Gracias! – ¡No hay problema!',
              fon: 'DAN-ke kain pro-BLEEM',
              fonFacil: 'DAN-ke – KAIN pro-BLEM' } },

          { de: 'Noch einmal, bitte', es: 'otra vez, por favor', tipo: 'frase',
            fon: 'noj AIN-maal BI-te',
            fonFacil: 'NOCH AIN-mal BI-te (ch áspera, como la j de "caja")',
            nota: 'Imprescindible cuando alguien habla rápido.',
            ejemplo: { de: 'Noch einmal, bitte?', es: '¿Otra vez, por favor?',
              fon: 'noj AIN-maal BI-te',
              fonFacil: 'NOCH AIN-mal BI-te' } },

          { de: 'Langsamer, bitte', es: 'más despacio, por favor', tipo: 'frase',
            fon: 'LANG-zaa-mea BI-te',
            fonFacil: 'LANG-za-ma BI-te (s = z; -er = "a")',
            ejemplo: { de: 'Langsamer, bitte. Ich lerne Deutsch.', es: 'Más despacio, por favor. Estoy aprendiendo alemán.',
              fon: 'LANG-zaa-mea BI-te. ij LEA-ne doich',
              fonFacil: 'LANG-za-ma BI-te. ich LER-ne DOICH (eu = "oi"; tsch = "ch")' } },

          { de: 'Ich verstehe nicht', es: 'no entiendo', tipo: 'frase',
            fon: 'ij fea-SHTEE-e nijt',
            fonFacil: 'ich fer-SHTE-e NICHT (ver- = "fer"; st = "sht")',
            ejemplo: { de: 'Ich verstehe das nicht.', es: 'No entiendo eso.',
              fon: 'ij fea-SHTEE-e das nijt',
              fonFacil: 'ich fer-SHTE-e das NICHT' } }
        ]
      }
    ]
  }
});
