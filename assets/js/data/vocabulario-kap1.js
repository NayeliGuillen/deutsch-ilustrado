/* ============================================================
   data/vocabulario-kap1.js — Vocabulario nuevo del Kapitel 1
   ------------------------------------------------------------
   Saludos y presentaciones, países, idiomas y "Deutsch
   international". Cada palabra lleva:
     fon      → pronunciación del curso (vocal larga = letra doble,
                sílaba tónica en MAYÚSCULAS, j = ch suave, c = k).
     fonFacil → sílabas con guiones y notas de los sonidos difíciles.
     visual   → dibujo (ver core/pictogramas.js).
     ejemplo  → una oración con traducción y sus dos pronunciaciones.
   ============================================================ */

DE.registrarLeccion({
  id: 'vocabulario-kap1',
  titulo: 'Vocabulario nuevo: Kapitel 1',
  icono: 'libros',
  grupo: 'Vocabulario y uso',
  color: 'azul',
  resumen: 'Saludos, países, idiomas y palabras "Deutsch international", con dibujo, audio y ejemplo.',
  vista: 'vocabulario-pron',

  datos: {
    intro: 'Pulsa el altavoz (o la palabra) para oírla. Cada una trae su dibujo, su traducción, ' +
           'dos formas de leer la pronunciación y una oración de ejemplo.',

    leyenda: [
      { titulo: 'Pronunciación', texto: 'La del curso: vocal larga = letra doble (taac), sílaba tónica en MAYÚSCULAS, j = ch suave, c = k.' },
      { titulo: 'Pronunciación fácil', texto: 'Sílabas separadas con guiones y, entre paréntesis, cómo sale cada sonido difícil.' }
    ],

    categorias: [

      /* ---------------------------------------------------------- */
      {
        id: 'internacional', titulo: 'Deutsch international', icono: 'globo', color: 'azul',
        descripcion: 'Palabras que quizá ya reconoces. Ojo: cada una lleva su artículo.',
        palabras: [
          { de: 'das Handtuch', es: 'la toalla', gen: 'das', plural: 'die Handtücher',
            fon: 'JANT-tuuj',
            fonFacil: 'HANT-tuj (h aspirada suave; la ch es áspera, como la j de "caja"; u larga)',
            nota: 'Hand + Tuch = "paño de mano". Plural con ü: die Handtücher.',
            visual: 'handtuch',
            ejemplo: { de: 'Das Handtuch ist rot.', es: 'La toalla es roja.',
              fon: 'das JANT-tuuj ist root',
              fonFacil: 'das HANT-tuj ist ROT (la o de rot es larga)' } },

          { de: 'die Flasche', es: 'la botella', gen: 'die', plural: 'die Flaschen',
            fon: 'FLA-she',
            fonFacil: 'FLA-she (sch = "sh"; la e final se pronuncia)',
            visual: 'flasche',
            ejemplo: { de: 'Ich kaufe eine Flasche Wasser.', es: 'Compro una botella de agua.',
              fon: 'ij KAU-fe AI-ne FLA-she VA-sea',
              fonFacil: 'ij KAU-fe AI-ne FLA-she VA-sa (au = "au"; w = "v"; -er = "a")' } },

          { de: 'der Koffer', es: 'la maleta', gen: 'der', plural: 'die Koffer',
            fon: 'KO-fea',
            fonFacil: 'KO-fa (la -er final suena "a"; no se pronuncia la r)',
            visual: 'koffer',
            ejemplo: { de: 'Mein Koffer ist groß.', es: 'Mi maleta es grande.',
              fon: 'main KO-fea ist groos',
              fonFacil: 'main KO-fa ist GROS (ei = "ai"; ß = "s" sorda; o larga)' } },

          { de: 'das Würstchen', es: 'la salchicha', gen: 'das', plural: 'die Würstchen',
            fon: 'VIURST-jen',
            fonFacil: 'VÜRST-chen (w = "v"; ü = "i" con labios en "u"; -chen = ch suave + "en" corto)',
            nota: '-chen es un diminutivo y siempre es das. En el sur también se dice das Würstel.',
            visual: 'wurst',
            ejemplo: { de: 'Ich esse ein Würstchen.', es: 'Como una salchicha.',
              fon: 'ij E-se ain VIURST-jen',
              fonFacil: 'ij E-se AIN VÜRST-chen (ch suave, como en "ich")' } },

          { de: 'der Kindergarten', es: 'el jardín de infancia', gen: 'der', plural: 'die Kindergärten',
            fon: 'KIN-dea-gar-ten',
            fonFacil: 'KIN-da-gar-ten (-der = "da"; g como en "gato")',
            nota: 'Palabra alemana que el inglés tomó tal cual: kindergarten.',
            visual: 'kindergarten',
            ejemplo: { de: 'Der Kindergarten ist neu.', es: 'El jardín de infancia es nuevo.',
              fon: 'dea KIN-dea-gar-ten ist noi',
              fonFacil: 'der KIN-da-GAR-ten ist NOI (eu = "oi")' } },

          { de: 'das Butterbrot', es: 'el pan con mantequilla', gen: 'das', plural: 'die Butterbrote',
            fon: 'BU-tea-broot',
            fonFacil: 'BU-ta-BROT (u corta; -er = "a"; o larga en Brot)',
            nota: 'Butter + Brot. Es la merienda típica alemana.',
            visual: 'butterbrot',
            ejemplo: { de: 'Das Butterbrot schmeckt gut.', es: 'El pan con mantequilla sabe bien.',
              fon: 'das BU-tea-broot shmekt guut',
              fonFacil: 'das BU-ta-brot SHMEKT GUT (sch = "sh"; u larga en gut)' } },

          { de: 'der Kranke', es: 'el enfermo', gen: 'der', plural: 'die Kranken',
            fon: 'KRAN-ke',
            fonFacil: 'KRAN-ke (la e final se pronuncia)',
            nota: 'Viene del adjetivo krank. La enferma es die Kranke.',
            visual: 'kranke',
            ejemplo: { de: 'Der Kranke braucht einen Arzt.', es: 'El enfermo necesita un médico.',
              fon: 'dea KRAN-ke braujt AI-nen aatst',
              fonFacil: 'der KRAN-ke BRAUCHT AI-nen ARTST (ch áspera, como la j de "caja"; rz = "rts")' } },

          { de: 'die Autobahn', es: 'la autopista', gen: 'die', plural: 'die Autobahnen',
            fon: 'AU-to-baan',
            fonFacil: 'AU-to-ban (au = "au"; la h de Bahn no suena, solo alarga la a)',
            nota: 'Auto + Bahn ("camino"). Es la autopista alemana.',
            visual: 'autobahn',
            ejemplo: { de: 'Die Autobahn ist sehr lang.', es: 'La autopista es muy larga.',
              fon: 'dii AU-to-baan ist seea lanc',
              fonFacil: 'di AU-to-ban ist SE-a LANG (sehr: la r final = "a"; ng nasal)' } },

          { de: 'die Nudeln', es: 'los fideos, la pasta', gen: 'die', soloPlural: true,
            fon: 'NUU-deln',
            fonFacil: 'NU-deln (u larga; -eln se dice rápido)',
            nota: 'Casi siempre en plural: die Nudeln. Un solo fideo es die Nudel.',
            visual: 'nudeln',
            ejemplo: { de: 'Ich koche Nudeln.', es: 'Cocino fideos.',
              fon: 'ij KO-je NUU-deln',
              fonFacil: 'ij KO-che NU-deln (ch áspera, como la j de "caja")' } }
        ]
      },

      /* ---------------------------------------------------------- */
      {
        id: 'saludos', titulo: 'Saludos y presentaciones', icono: 'mensaje', color: 'verde',
        descripcion: 'Lo que dices al conocer a alguien. Con desconocidos y en el trabajo, usa Sie.',
        palabras: [
          { de: "Wie geht's?", es: '¿Cómo estás? (informal)', tipo: 'frase',
            fon: 'vii gueets',
            fonFacil: 'VI GUEETS (w = "v"; ie = "i" larga; eh = "e" larga)',
            nota: 'Es la forma corta y real de Wie geht es dir?',
            visual: 'mensaje',
            ejemplo: { de: "Hallo Niklas! Wie geht's?", es: '¡Hola Niklas! ¿Cómo estás?',
              fon: 'JA-lo NIK-las! vii gueets',
              fonFacil: 'JA-lo NIK-las! VI GUEETS (h aspirada suave)' } },

          { de: 'Wie geht es Ihnen?', es: '¿Cómo está usted? (formal)', tipo: 'frase',
            fon: 'vii geet es II-nen',
            fonFacil: 'VI GUET es I-nen (Ihnen: la h no suena y alarga la i)',
            nota: 'Con Sie. Con tus amigos usa Wie geht es dir? o Wie geht\'s?',
            visual: 'mensaje',
            ejemplo: { de: 'Guten Tag, Frau Weber. Wie geht es Ihnen?', es: 'Buenos días, señora Weber. ¿Cómo está usted?',
              fon: 'GUU-ten taac, frau VEE-bea. vii geet es II-nen',
              fonFacil: 'GU-ten TAK, frau VE-ba. VI guet es I-nen (g final = "k"; w = "v")' } },

          { de: 'Ganz gut, danke.', es: 'Bastante bien, gracias.', tipo: 'frase',
            fon: 'gants guut, DAN-ke',
            fonFacil: 'GANTS GUT, DAN-ke (z = "ts"; u larga)',
            visual: 'sonrisa',
            ejemplo: { de: "Wie geht's? – Ganz gut, danke.", es: '¿Cómo estás? – Bastante bien, gracias.',
              fon: 'vii gueets? – gants guut, DAN-ke',
              fonFacil: 'VI GUEETS? – GANTS GUT, DAN-ke' } },

          { de: 'Auch gut, danke.', es: 'También bien, gracias.', tipo: 'frase',
            fon: 'auj guut, DAN-ke',
            fonFacil: 'AUJ GUT, DAN-ke (ch áspera, como la j de "caja")',
            visual: 'sonrisa',
            ejemplo: { de: 'Und dir? – Auch gut, danke.', es: '¿Y tú? – También bien, gracias.',
              fon: 'unt diia? – auj guut, DAN-ke',
              fonFacil: 'UNT DIR? – AUJ GUT, DAN-ke (d final = "t")' } },

          { de: 'Und Ihnen?', es: '¿Y a usted?', tipo: 'frase',
            fon: 'unt II-nen',
            fonFacil: 'UNT I-nen (la d final suena "t")',
            nota: 'Formal. Informal: Und dir?',
            visual: 'mensaje',
            ejemplo: { de: 'Danke, gut. Und Ihnen?', es: 'Gracias, bien. ¿Y a usted?',
              fon: 'DAN-ke, guut. unt II-nen',
              fonFacil: 'DAN-ke, GUT. UNT I-nen' } },

          { de: 'Mein Name ist …', es: 'Mi nombre es …', tipo: 'frase',
            fon: 'main NAA-me ist',
            fonFacil: 'MAIN NA-me ist (ei = "ai"; a larga; la e final se pronuncia)',
            nota: 'Más formal que Ich heiße … Va bien al presentarte a un desconocido.',
            visual: 'ausweis',
            ejemplo: { de: 'Mein Name ist Nina Weber.', es: 'Mi nombre es Nina Weber.',
              fon: 'main NAA-me ist NII-na VEE-bea',
              fonFacil: 'MAIN NA-me ist NI-na VE-ba (w = "v"; -er = "a")' } },

          { de: 'Frau / Herr', es: 'señora / señor', tipo: 'tratamiento',
            fon: 'frau / jer',
            fonFacil: 'FRAU / HER (au = "au"; h aspirada; e corta; la r se relaja)',
            nota: 'Van antes del apellido: Frau Weber, Herr Hansen. Nunca con el nombre de pila.',
            visual: 'personas',
            ejemplo: { de: 'Auf Wiedersehen, Herr Hansen.', es: 'Hasta la vista, señor Hansen.',
              fon: 'auf VII-dea-seen, jer JAN-sen',
              fonFacil: 'AUF VI-da-ze-en, HER HAN-sen (w = "v"; ie = "i" larga)' } },

          { de: 'Das ist …', es: 'Esta es … / Este es … (para presentar)', tipo: 'frase',
            fon: 'das ist',
            fonFacil: 'DAS IST (la s final de das es sorda)',
            nota: 'Das no cambia: Das ist Frau Kowalski, Das ist Herr Hansen.',
            visual: 'personas',
            ejemplo: { de: 'Das ist Frau Kowalski.', es: 'Esta es la señora Kowalski.',
              fon: 'das ist frau ko-VAL-ski',
              fonFacil: 'das ist FRAU ko-VAL-ski (w = "v")' } },

          { de: 'Ciao!', es: '¡Chao! (informal)', tipo: 'despedida',
            fon: 'chau',
            fonFacil: 'CHAU (ch = "ch" de chico; es una palabra italiana)',
            nota: 'Se usa con amigos, igual que Tschüs. Se oye mucho en toda Alemania.',
            visual: 'mensaje',
            ejemplo: { de: 'Tschüs, Julia! Bis bald! – Ciao!', es: '¡Chao, Julia! ¡Hasta pronto! – ¡Chao!',
              fon: 'chius, YUU-lia! bis balt! – chau',
              fonFacil: 'CHÜS, YU-lia! BIS BALT! – CHAU (ü = "i" con labios en "u")' } }
        ]
      },

      /* ---------------------------------------------------------- */
      {
        id: 'paises', titulo: 'Países', icono: 'ubicacion', color: 'rojo',
        descripcion: 'La mayoría va sin artículo: aus Spanien, in Italien. Pocos llevan artículo (die Schweiz, die Türkei, die USA).',
        palabras: [
          { de: 'Österreich', es: 'Austria', tipo: 'país',
            fon: 'OES-tea-raij',
            fonFacil: 'ÖS-ta-raij (ö = "e" con labios redondeados; ei = "ai"; ch suave al final)',
            nota: 'Sin artículo: aus Österreich, in Österreich.',
            visual: 'flag:at',
            ejemplo: { de: 'Boris kommt aus Österreich.', es: 'Boris viene de Austria.',
              fon: 'BOO-ris komt aus OES-tea-raij',
              fonFacil: 'BO-ris komt aus ÖS-ta-raij' } },

          { de: 'die Schweiz', es: 'Suiza', gen: 'die',
            fon: 'shvaits',
            fonFacil: 'SHVAITS (sch = "sh"; w = "v"; ei = "ai"; z = "ts")',
            nota: 'Con artículo: aus der Schweiz, in der Schweiz.',
            visual: 'flag:ch',
            ejemplo: { de: 'Alessia kommt aus der Schweiz.', es: 'Alessia viene de Suiza.',
              fon: 'a-LE-sia komt aus dea shvaits',
              fonFacil: 'a-LE-sia komt aus der SHVAITS' } },

          { de: 'Brasilien', es: 'Brasil', tipo: 'país',
            fon: 'bra-SII-li-en',
            fonFacil: 'bra-SI-li-en (la s suena como la "z" inglesa; ie suena "i-en")',
            nota: 'Sin artículo: aus Brasilien, in Brasilien.',
            visual: 'flag:br',
            ejemplo: { de: 'Gabriel kommt aus Brasilien.', es: 'Gabriel viene de Brasil.',
              fon: 'GAA-bri-el komt aus bra-SII-li-en',
              fonFacil: 'GA-bri-el komt aus bra-SI-li-en' } },

          { de: 'Spanien', es: 'España', tipo: 'país',
            fon: 'SHPAA-ni-en',
            fonFacil: 'SHPA-ni-en (sp inicial = "shp"; a larga)',
            nota: 'Sin artículo: aus Spanien, in Spanien.',
            visual: 'flag:es',
            ejemplo: { de: 'Anna wohnt in Spanien.', es: 'Anna vive en España.',
              fon: 'A-na voont in SHPAA-ni-en',
              fonFacil: 'A-na VONT in SHPA-ni-en (w = "v"; o larga)' } },

          { de: 'Frankreich', es: 'Francia', tipo: 'país',
            fon: 'FRANK-raij',
            fonFacil: 'FRANK-raij (ei = "ai"; ch suave al final)',
            nota: 'Sin artículo: aus Frankreich, in Frankreich.',
            visual: 'flag:fr',
            ejemplo: { de: 'Paris liegt in Frankreich.', es: 'París está en Francia.',
              fon: 'pa-RIIS liikt in FRANK-raij',
              fonFacil: 'pa-RIS LIKT in FRANK-raij (ie = "i" larga; g final = "k")' } },

          { de: 'Italien', es: 'Italia', tipo: 'país',
            fon: 'i-TAA-li-en',
            fonFacil: 'i-TA-li-en (a larga; cuatro sílabas)',
            nota: 'Sin artículo: aus Italien, in Italien.',
            visual: 'flag:it',
            ejemplo: { de: 'Rom liegt in Italien.', es: 'Roma está en Italia.',
              fon: 'room liikt in i-TAA-li-en',
              fonFacil: 'ROM LIKT in i-TA-li-en' } },

          { de: 'Japan', es: 'Japón', tipo: 'país',
            fon: 'YAA-pan',
            fonFacil: 'YA-pan (j = "y"; la primera a es larga)',
            nota: 'Sin artículo: aus Japan, in Japan.',
            visual: 'flag:jp',
            ejemplo: { de: 'Saki kommt aus Japan.', es: 'Saki viene de Japón.',
              fon: 'SA-ki komt aus YAA-pan',
              fonFacil: 'SA-ki komt aus YA-pan' } },

          { de: 'Polen', es: 'Polonia', tipo: 'país',
            fon: 'POO-len',
            fonFacil: 'PO-len (o larga)',
            nota: 'Sin artículo: aus Polen, in Polen.',
            visual: 'flag:pl',
            ejemplo: { de: 'Warschau liegt in Polen.', es: 'Varsovia está en Polonia.',
              fon: 'VAR-shau liikt in POO-len',
              fonFacil: 'VAR-shau LIKT in PO-len (w = "v"; sch = "sh")' } },

          { de: 'Russland', es: 'Rusia', tipo: 'país',
            fon: 'RUS-lant',
            fonFacil: 'RUS-lant (la d final suena "t")',
            nota: 'Sin artículo: aus Russland, in Russland.',
            visual: 'flag:ru',
            ejemplo: { de: 'Moskau liegt in Russland.', es: 'Moscú está en Rusia.',
              fon: 'MOS-kau liikt in RUS-lant',
              fonFacil: 'MOS-kau LIKT in RUS-lant' } },

          { de: 'die Türkei', es: 'Turquía', gen: 'die',
            fon: 'tiur-KAI',
            fonFacil: 'tür-KAI (ü = "i" con labios en "u"; ei = "ai"; el acento va al final)',
            nota: 'Con artículo: aus der Türkei, in der Türkei.',
            visual: 'flag:tr',
            ejemplo: { de: 'Er kommt aus der Türkei.', es: 'Él viene de Turquía.',
              fon: 'ea komt aus dea tiur-KAI',
              fonFacil: 'er komt aus der tür-KAI' } },

          { de: 'Algerien', es: 'Argelia', tipo: 'país',
            fon: 'al-GUEE-ri-en',
            fonFacil: 'al-GE-ri-en (g como en "gato"; e larga)',
            nota: 'Sin artículo: aus Algerien, in Algerien.',
            visual: 'flag:dz',
            ejemplo: { de: 'Sie kommt aus Algerien.', es: 'Ella viene de Argelia.',
              fon: 'sii komt aus al-GUEE-ri-en',
              fonFacil: 'SI komt aus al-GE-ri-en' } },

          { de: 'die USA', es: 'los Estados Unidos', gen: 'die',
            fon: 'uu-es-AA',
            fonFacil: 'U-es-A (se deletrean las tres letras; el acento va en la última)',
            nota: 'Siempre plural: aus den USA, in den USA.',
            visual: 'flag:us',
            ejemplo: { de: 'Olivia kommt aus den USA.', es: 'Olivia viene de los Estados Unidos.',
              fon: 'o-LI-via komt aus deen uu-es-AA',
              fonFacil: 'o-LI-via komt aus DEN u-es-A (v = "v"; den = "den")' } },

          { de: 'die Ukraine', es: 'Ucrania', gen: 'die',
            fon: 'u-kra-II-ne',
            fonFacil: 'u-kra-I-ne (el acento cae en -i-)',
            nota: 'Con artículo: aus der Ukraine, in der Ukraine.',
            visual: 'flag:ua',
            ejemplo: { de: 'Kiew liegt in der Ukraine.', es: 'Kiev está en Ucrania.',
              fon: 'kiif liikt in dea u-kra-II-ne',
              fonFacil: 'KIF LIKT in der u-kra-I-ne (w final = "f")' } }
        ]
      },

      /* ---------------------------------------------------------- */
      {
        id: 'idiomas', titulo: 'Idiomas', icono: 'tipografia', color: 'morado',
        descripcion: 'Los idiomas terminan casi siempre en -isch y llevan mayúscula. Sin artículo: Ich spreche Englisch.',
        palabras: [
          { de: 'Englisch', es: 'inglés', tipo: 'idioma',
            fon: 'EN-glish',
            fonFacil: 'EN-glish (ng nasal; sch = "sh"; el acento va en la primera sílaba)',
            visual: 'lang:EN',
            ejemplo: { de: 'Ich spreche Englisch und Spanisch.', es: 'Hablo inglés y español.',
              fon: 'ij SHPRE-je EN-glish unt SHPAA-nish',
              fonFacil: 'ij SHPRE-che EN-glish unt SHPA-nish (sp = "shp"; ch suave)' } },

          { de: 'Portugiesisch', es: 'portugués', tipo: 'idioma',
            fon: 'por-tu-GII-sish',
            fonFacil: 'por-tu-GI-sish (g como en "gato"; ie = "i" larga; -isch = "ish")',
            visual: 'lang:PT',
            ejemplo: { de: 'Gabriel spricht Portugiesisch.', es: 'Gabriel habla portugués.',
              fon: 'GAA-bri-el shprijt por-tu-GII-sish',
              fonFacil: 'GA-bri-el SHPRICHT por-tu-GI-sish (ch suave)' } },

          { de: 'Französisch', es: 'francés', tipo: 'idioma',
            fon: 'fran-TSOE-sish',
            fonFacil: 'fran-TSÖ-sish (ö = "e" con labios redondeados; z = "ts")',
            visual: 'lang:FR',
            ejemplo: { de: 'Alessia spricht Französisch.', es: 'Alessia habla francés.',
              fon: 'a-LE-sia shprijt fran-TSOE-sish',
              fonFacil: 'a-LE-sia SHPRICHT fran-TSÖ-sish' } },

          { de: 'Italienisch', es: 'italiano', tipo: 'idioma',
            fon: 'i-ta-LYEE-nish',
            fonFacil: 'i-ta-LYE-nish (li + e se funden en "lye"; e larga)',
            visual: 'lang:IT',
            ejemplo: { de: 'Ich lerne Italienisch.', es: 'Aprendo italiano.',
              fon: 'ij LER-ne i-ta-LYEE-nish',
              fonFacil: 'ij LER-ne i-ta-LYE-nish' } },

          { de: 'Japanisch', es: 'japonés', tipo: 'idioma',
            fon: 'ya-PAA-nish',
            fonFacil: 'ya-PA-nish (j = "y"; el acento va en -pa-)',
            visual: 'lang:JA',
            ejemplo: { de: 'Saki spricht Japanisch und Deutsch.', es: 'Saki habla japonés y alemán.',
              fon: 'SA-ki shprijt ya-PAA-nish unt doich',
              fonFacil: 'SA-ki SHPRICHT ya-PA-nish unt DOICH (eu = "oi"; tsch = "ch" de chico)' } },

          { de: 'Spanisch', es: 'español', tipo: 'idioma',
            fon: 'SHPAA-nish',
            fonFacil: 'SHPA-nish (sp = "shp"; -isch = "ish")',
            nota: 'Como Honduras: Ich spreche Spanisch.',
            visual: 'lang:ES',
            ejemplo: { de: 'Olivia lernt Spanisch.', es: 'Olivia aprende español.',
              fon: 'o-LI-via lernt SHPAA-nish',
              fonFacil: 'o-LI-via LERNT SHPA-nish' } },

          { de: 'Türkisch', es: 'turco', tipo: 'idioma',
            fon: 'TIUR-kish',
            fonFacil: 'TÜR-kish (ü = "i" con labios en "u"; la r se relaja)',
            visual: 'lang:TR',
            ejemplo: { de: 'Sie spricht Türkisch.', es: 'Ella habla turco.',
              fon: 'sii shprijt TIUR-kish',
              fonFacil: 'SI SHPRICHT TÜR-kish' } },

          { de: 'Arabisch', es: 'árabe', tipo: 'idioma',
            fon: 'a-RAA-bish',
            fonFacil: 'a-RA-bish (a larga en -ra-)',
            visual: 'lang:AR',
            ejemplo: { de: 'Boris lernt Arabisch.', es: 'Boris aprende árabe.',
              fon: 'BOO-ris lernt a-RAA-bish',
              fonFacil: 'BO-ris LERNT a-RA-bish' } },

          { de: 'Polnisch', es: 'polaco', tipo: 'idioma',
            fon: 'POL-nish',
            fonFacil: 'POL-nish (o corta)',
            visual: 'lang:PL',
            ejemplo: { de: 'Er spricht Polnisch.', es: 'Él habla polaco.',
              fon: 'ea shprijt POL-nish',
              fonFacil: 'er SHPRICHT POL-nish' } },

          { de: 'Russisch', es: 'ruso', tipo: 'idioma',
            fon: 'RU-sish',
            fonFacil: 'RU-sish (ss = "s" sorda; u corta)',
            visual: 'lang:RU',
            ejemplo: { de: 'Sie lernt Russisch.', es: 'Ella aprende ruso.',
              fon: 'sii lernt RU-sish',
              fonFacil: 'SI LERNT RU-sish' } },

          { de: 'Rätoromanisch', es: 'romanche', tipo: 'idioma',
            fon: 'ree-to-ro-MAA-nish',
            fonFacil: 're-to-ro-MA-nish (ä = "e" larga; el acento va en -ma-)',
            nota: 'Una de las lenguas de Suiza, hablada en el cantón de los Grisones.',
            visual: 'lang:RM',
            ejemplo: { de: 'In der Schweiz spricht man auch Rätoromanisch.', es: 'En Suiza también se habla romanche.',
              fon: 'in dea shvaits shprijt man auj ree-to-ro-MAA-nish',
              fonFacil: 'in der SHVAITS SHPRICHT man AUJ re-to-ro-MA-nish' } }
        ]
      },

      /* ---------------------------------------------------------- */
      {
        id: 'nombre-origen', titulo: 'Nombre y origen', icono: 'personas', color: 'naranja',
        descripcion: 'Para rellenar un formulario o hablar de dónde eres.',
        palabras: [
          { de: 'das Land', es: 'el país', gen: 'das', plural: 'die Länder',
            fon: 'lant',
            fonFacil: 'LANT (la d final suena "t")',
            nota: 'Plural con ä: die Länder. Deutschland = Deutsch + Land.',
            visual: 'globo',
            ejemplo: { de: 'Mein Land heißt Honduras.', es: 'Mi país se llama Honduras.',
              fon: 'main lant jaist jon-DUU-ras',
              fonFacil: 'main LANT JAIST hon-DU-ras (ei = "ai"; h aspirada)' } },

          { de: 'die Sprache', es: 'el idioma, la lengua', gen: 'die', plural: 'die Sprachen',
            fon: 'SHPRAA-je',
            fonFacil: 'SHPRA-che (sp = "shp"; ch áspera, como la j de "caja"; a larga)',
            visual: 'mensaje',
            ejemplo: { de: 'Welche Sprachen sprichst du?', es: '¿Qué idiomas hablas?',
              fon: 'VEL-je SHPRAA-jen shprijst du',
              fonFacil: 'VEL-che SHPRA-chen SHPRICHST du (w = "v"; ch suave en welche)' } },

          { de: 'der Name', es: 'el nombre', gen: 'der', plural: 'die Namen',
            fon: 'NAA-me',
            fonFacil: 'NA-me (a larga; la e final se pronuncia)',
            visual: 'ausweis',
            ejemplo: { de: 'Wie ist Ihr Name?', es: '¿Cuál es su nombre?',
              fon: 'vii ist iea NAA-me',
              fonFacil: 'VI ist IR NA-me (Ihr: la h no suena; la r final se relaja)' } },

          { de: 'der Vorname', es: 'el nombre de pila', gen: 'der', plural: 'die Vornamen',
            fon: 'FOOR-naa-me',
            fonFacil: 'FOR-na-me (v = "f"; o larga)',
            nota: 'Vor = "antes": el nombre que va antes del apellido. Informal: du + Vorname.',
            visual: 'ausweis:1',
            ejemplo: { de: 'Mein Vorname ist Julia.', es: 'Mi nombre de pila es Julia.',
              fon: 'main FOOR-naa-me ist YUU-lia',
              fonFacil: 'main FOR-na-me ist YU-lia (v = "f"; j = "y")' } },

          { de: 'der Nachname', es: 'el apellido', gen: 'der', plural: 'die Nachnamen',
            fon: 'NAAJ-naa-me',
            fonFacil: 'NAJ-na-me (ch áspera, como la j de "caja")',
            nota: 'Formal: Sie + Vorname + Nachname.',
            visual: 'ausweis:2',
            ejemplo: { de: 'Mein Nachname ist Weber.', es: 'Mi apellido es Weber.',
              fon: 'main NAAJ-naa-me ist VEE-bea',
              fonFacil: 'main NAJ-na-me ist VE-ba (w = "v"; -er = "a")' } }
        ]
      }
    ]
  }
});
