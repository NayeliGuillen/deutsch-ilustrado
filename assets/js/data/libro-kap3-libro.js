/* ============================================================
   data/libro-kap3-libro.js — Netzwerk neu A1 · Kapitel 3 (libro)
   ------------------------------------------------------------
   Lo que dicen las páginas 30–37: diálogos y textos con
   traducción plegable, los recuadros G (gramática), [!] y
   "Gut gesagt", y las frases de "kurz und klar".
   [LIBRO] = transcrito de las fotos · [EXTRA] = ayuda añadida.
   ============================================================ */

DE.registrarLeccion({
  id: 'k3-libro',
  titulo: 'Kap. 3 · El libro paso a paso',
  icono: 'libro',
  grupo: 'Libro · Kapitel 3',
  color: 'turquesa',
  resumen: 'Taxifahrt, Kein Glück?!, Links-rechts-geradeaus, Events in Hamburg, Jahreszeiten y la Netzwerk-WG de Múnich.',
  vista: 'infografia',

  datos: {
    titulo: 'Kapitel 3',
    subtitulo: 'Lugares, caminos y estaciones',
    cinta: 'Netzwerk neu A1 · págs. 30–37',
    resumen: 'Sigue el orden del libro. Lee en voz alta, pulsa "Ver traducción" cuando lo necesites y después practica en el entrenador de este capítulo.',

    tarjetas: [

      /* ------------------------------------------------ p. 30 */
      {
        n: 1, color: 'rojo', icono: 'ubicacion', titulo: 'Die Taxifahrt (p. 30)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: 'Tema: nombrar lugares y edificios. Un pasajero va en taxi al hotel "Michel" en Hamburgo.' },
          { tipo: 'recuadro', clase: 'dicho', etiqueta: 'LIBRO', titulo: 'Gut gesagt: grüßen', bloques: [
            { tipo: 'texto', texto: 'Así se dice también "Guten Tag" en Alemania, Austria y Suiza (D-A-CH):' },
            { tipo: 'tabla', encabezados: ['Saludo', 'Dónde (según el mapa del libro)'], filas: [
              ['Moin!', 'norte de Alemania'],
              ['Grüß Gott!', 'sur de Alemania y Austria'],
              ['Grüezi!', 'Suiza']
            ]},
            { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Moin vale para cualquier hora del día (no solo "buenos días"). Grüß Gott no es religioso: es el "hola" normal en Baviera.' }
          ]},
          { tipo: 'lectura', modo: 'dialogo', nombres: true, etiqueta: 'LIBRO', titulo: 'Das Gespräch im Taxi (2b)',
            contexto: 'Los dos hablantes del libro se marcan con círculo vacío y lleno. Aquí: Fahrgast = pasajero, Taxifahrer = taxista.',
            lineas: [
              { q: 'Fahrgast', de: 'Guten Tag. Zum Hotel „Michel“ bitte.', es: 'Buenos días. Al hotel «Michel», por favor.' },
              { q: 'Taxifahrer', de: 'Moin. Hotel „Michel“, okay. Kennen Sie Hamburg?', es: 'Hola. Hotel «Michel», vale. ¿Conoce Hamburgo?' },
              { q: 'Fahrgast', de: 'Nein.', es: 'No.' },
              { q: 'Taxifahrer', de: 'Na, das ist der Bahnhof.', es: 'Bueno, esa es la estación de tren.' },
              { q: 'Fahrgast', de: 'Ah ja.', es: 'Ah, sí.' },
              { q: 'Taxifahrer', de: 'Und das hier rechts ist die Kunsthalle. Das ist ein Museum.', es: 'Y esto de aquí a la derecha es la Kunsthalle. Es un museo.' },
              { q: 'Fahrgast', de: 'Interessant. Und wie heißt der See?', es: 'Interesante. ¿Y cómo se llama el lago?' },
              { q: 'Taxifahrer', de: 'See? Das ist kein See, das ist ein Fluss. Der Fluss heißt Alster.', es: '¿Lago? Eso no es un lago, es un río. El río se llama Alster.' },
              { q: 'Fahrgast', de: 'Ach so. Und was ist das? Ist das eine Kirche?', es: 'Ah, ya. ¿Y qué es eso? ¿Es una iglesia?' },
              { q: 'Taxifahrer', de: 'Nein, das ist das Rathaus.', es: 'No, es el ayuntamiento.' },
              { q: 'Fahrgast', de: 'Ah ja.', es: 'Ah, sí.' },
              { q: 'Taxifahrer', de: 'Hier ist eine Kirche. Das ist die Michaeliskirche. Wir sagen „der Michel“.', es: 'Aquí hay una iglesia. Es la iglesia de San Miguel. Nosotros decimos «der Michel».' },
              { q: 'Fahrgast', de: 'Ah, sehr schön.', es: 'Ah, muy bonito.' },
              { q: 'Taxifahrer', de: 'Und da ist auch schon das Hotel.', es: 'Y allí ya está también el hotel.' }
            ],
            glosario: [
              { de: 'Kennen Sie …?', es: '¿Conoce …?' },
              { de: 'Na, …', es: 'Bueno, … (muletilla)' },
              { de: 'Ach so.', es: 'Ah, ya (entiendo).' },
              { de: 'Ah ja.', es: 'Ah, sí (reacción neutra)' },
              { de: 'schon', es: 'ya' },
              { de: 'Wir sagen …', es: 'Nosotros decimos …' }
            ]
          },
          { tipo: 'texto', texto: '[LIBRO] 2a: ¿Qué lugares nombra el taxista? Del cuadro (Bahnhof, Hafen, Fluss, Konzerthaus, Rathaus, Kirche) en la conversación aparecen: Bahnhof, Fluss, Rathaus y Kirche. No oyes ni Hafen ni Konzerthaus.' },
          { tipo: 'texto', texto: '[LIBRO] 2c: ¿der, das o die? Busca los sustantivos en el diálogo:' },
          { tipo: 'tabla', encabezados: ['Artículo', 'Palabra', 'Artículo', 'Palabra'], filas: [
            ['der', 'Bahnhof', 'das', 'Hotel'],
            ['das', 'Rathaus', 'die', 'Kirche'],
            ['die', 'Kunsthalle', 'der', 'See'],
            ['der', 'Fluss', '', '']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '[LIBRO] Ejercicio 3 (en grupo): reúnan sustantivos de los capítulos 1–3 en tres grupos: der, das, die. Una persona dice un sustantivo ("Auto") y el grupo con el artículo correcto se levanta y dice "das Auto".' }
        ]
      },

      /* ------------------------------------------------ p. 31 */
      {
        n: 2, color: 'azul', icono: 'lista', titulo: 'ein / der: el artículo (p. 31)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'recuadro', clase: 'G', etiqueta: 'LIBRO', titulo: 'unbestimmter und bestimmter Artikel', bloques: [
            { tipo: 'tabla', encabezados: ['', 'unbestimmt (neu / nicht bekannt)', 'bestimmt (bekannt)'], filas: [
              ['maskulin', 'Das ist ein Hafen.', 'Das ist der Hafen von Hamburg.'],
              ['neutrum', 'Das ist ein Hotel.', 'Das Hotel heißt „Alster“.'],
              ['feminin', 'Das ist eine Straße.', 'Die Straße heißt Müllerstraße.'],
              ['Plural', 'Das sind – Schiffe.', 'Die Schiffe sind im Hafen.']
            ]},
            { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Analogía: "ein" es presentar a alguien por primera vez ("un amigo mío"); "der/das/die" es hablar de alguien que ya conoces ("ese amigo"). Primera vez → ein; ya conocido → der/das/die. En plural no hay "ein": se deja vacío (–).' }
          ]},
          { tipo: 'texto', texto: '[LIBRO] 4b. Completa con artículo definido e indefinido:' },
          { tipo: 'tabla', encabezados: ['Imagen', 'unbestimmt', 'bestimmt'], filas: [
            ['Theater', 'Das ist ein Theater.', 'Das Theater heißt Thalia Theater.'],
            ['Bahnhof', 'Das ist ein Bahnhof.', 'Der Bahnhof heißt Hamburg-Altona.'],
            ['Brücke', 'Das ist eine Brücke.', 'Die Brücke heißt „Köhlbrandbrücke“.'],
            ['Häuser', 'Das sind – Häuser.', 'Die Häuser sind 400 Jahre alt.']
          ]},
          { tipo: 'texto', texto: '[LIBRO] 4c. Escribe frases: Café | Kunsthalle | Kirche | Hotel | Kino | Turm. Modelo del libro: "1. Das ist ein Café."' },
          { tipo: 'ejemplos', items: [
            { de: 'Das ist ein Café.', es: 'Eso es una cafetería. (Café es neutro: das / ein)' },
            { de: 'Das ist eine Kirche.', es: 'Eso es una iglesia. (die → eine)' },
            { de: 'Das ist ein Turm.', es: 'Eso es una torre. (der → ein)' }
          ]}
        ]
      },

      /* ------------------------------------------------ p. 31 */
      {
        n: 3, color: 'morado', icono: 'audio', titulo: 'Vocales largas y cortas (p. 31)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: '[LIBRO] 5a. Escucha las palabras y marca _ si la vocal es larga y . (punto) si es corta.' },
          { tipo: 'tabla', encabezados: ['Vocal', 'Palabras del libro'], filas: [
            ['a', 'alt – Jahr – Hafen – Star – lang – fahren – man'],
            ['e', 'zehn – Weg – See – gern – elf – Herr – sehr'],
            ['i', 'Schiff – Mitte – sieben – Kirche – wie – bitte – hier'],
            ['o', 'hoch – Kosten – von – pro – Sonntag – Ort – Montag'],
            ['u', 'Fluss – gut – Turm – Zug – Stunde – Buch – Fußball']
          ]},
          { tipo: 'recuadro', clase: '!', etiqueta: 'LIBRO', titulo: 'Regla del libro', bloques: [
            { tipo: 'texto', texto: 'Vor einem doppelten Konsonant (ff, nn, …) ist der Vokal immer kurz: Schiff, Fluss, …' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Cómo reconocerlas: vocal + h (Jahr, fahren, sehr) o vocal doblada (See) = larga. Vocal + dos consonantes distintas (alt, Herr, Turm) o doble (Schiff, Fluss) = corta. Trucos del libro: vocal larga → dibuja círculos con los brazos; vocal corta → golpea la mesa (5b).' },
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Para hispanohablantes: en español todas las vocales duran igual. En alemán la duración cambia el significado: Bahn (tren) vs. Bann (hechizo); Stadt vs. Staat.' }
        ]
      },

      /* ------------------------------------------------ p. 32 */
      {
        n: 4, color: 'naranja', icono: 'pregunta', titulo: 'Kein Glück?! (p. 32)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: 'Una historieta: una chica pierde la bici, el autobús y el metro… y al final no hay examen. Palabras clave: der Bus | das Fahrrad | die U-Bahn | zu Fuß gehen.' },
          { tipo: 'lectura', modo: 'texto', etiqueta: 'LIBRO', titulo: 'Las cinco frases de la historia (6b)',
            contexto: 'En el libro hay que unir cada frase con su dibujo (A–E). La que ya tiene respuesta es Fahrrad → imagen A.',
            lineas: [
              { de: 'Oh, nein! Keine Fahrkarte?!', es: '¡Ay, no! ¿Sin billete?' },
              { de: 'Ach nee, kein Bus. Also schnell! Wo ist die U-Bahn?', es: 'Ay no, ningún autobús. ¡Rápido entonces! ¿Dónde está el metro?' },
              { de: 'Oje, kein Fahrrad! Schnell, da ist ein Bus!', es: '¡Ay, no hay bici! ¡Rápido, allí hay un autobús!' },
              { de: 'Heute kein Test! So ein Glück!', es: '¡Hoy no hay examen! ¡Qué suerte!' },
              { de: 'Ich gehe zu Fuß. Jetzt aber schnell!', es: 'Voy a pie. ¡Pero ahora rápido!' }
            ],
            glosario: [
              { de: 'Ach nee', es: 'ay no (coloquial)' },
              { de: 'Oje', es: 'ay (de lamento)' },
              { de: 'also', es: 'entonces / bueno' },
              { de: 'schnell', es: 'rápido' },
              { de: 'jetzt aber', es: 'pero ahora' }
            ]
          },
          { tipo: 'recuadro', clase: 'G', etiqueta: 'LIBRO', titulo: 'Negationsartikel', bloques: [
            { tipo: 'tabla', encabezados: ['', 'definido', 'indefinido', 'negativo', 'ejemplo'], filas: [
              ['maskulin', 'der', 'ein', 'kein', 'Bus'],
              ['neutrum', 'das', 'ein', 'kein', 'Fahrrad'],
              ['feminin', 'die', 'eine', 'keine', 'U-Bahn'],
              ['Plural', 'die', '–', 'keine', 'Autos']
            ]},
            { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Regla fácil: kein = ein + k. Se declina igual que ein (kein/keine). Y en plural, que no tiene "ein", siempre keine. Úsalo para negar un SUSTANTIVO; para negar un verbo o adjetivo se usa nicht.' }
          ]},
          { tipo: 'texto', texto: '[LIBRO] 6c. Pregunta ¿Ist das …? y responde que no. Modelo del libro: "1. Nein, das ist kein Bus, das ist eine U-Bahn."' },
          { tipo: 'ejemplos', items: [
            { de: 'Ist das ein Auto? – Nein, das ist kein Auto, das ist ein Fahrrad.', es: '¿Es un coche? – No, no es un coche, es una bici.' },
            { de: 'Ist das eine Kirche? – Nein, das ist keine Kirche, das ist ein Bahnhof.', es: '¿Es una iglesia? – No, es una estación.' },
            { de: 'Sind das Busse? – Nein, das sind keine Busse, das sind Autos.', es: '¿Son autobuses? – No, son coches.' }
          ]}
        ]
      },

      /* ------------------------------------------------ p. 33 */
      {
        n: 5, color: 'verde', icono: 'brujula', titulo: 'Links, rechts, geradeaus (p. 33)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'recuadro', clase: '!', etiqueta: 'LIBRO', titulo: 'Wegbeschreibung', bloques: [
            { tipo: 'tabla', encabezados: ['Palabra', 'Flecha', 'Significado'], filas: [
              ['links', '←', 'izquierda'],
              ['geradeaus', '↑', 'todo recto'],
              ['rechts', '→', 'derecha']
            ]}
          ]},
          { tipo: 'recuadro', clase: 'frases', etiqueta: 'LIBRO', titulo: 'Dialoge spielen (7c)', bloques: [
            { tipo: 'tabla', encabezados: ['Preguntas', 'Respuestas'], filas: [
              ['Entschuldigung, wo ist bitte …?', 'Das ist ganz einfach. Gehen Sie rechts / links / geradeaus und dann … Da ist …'],
              ['Also hier rechts / links / geradeaus und dann …?', 'Ja. / Ja, genau.'],
              ['Vielen Dank.', 'Bitte, gern.']
            ]}
          ]},
          { tipo: 'recuadro', clase: 'G', etiqueta: 'LIBRO', titulo: 'Imperativ mit Sie', bloques: [
            { tipo: 'tabla', encabezados: ['Infinitiv', 'Imperativ', '', 'Complemento'], filas: [
              ['gehen', 'Gehen', 'Sie', 'links!'],
              ['fahren', 'Fahren', 'Sie', 'geradeaus!']
            ]},
            { tipo: 'aviso', icono: 'idea', texto: 'En el libro (p. 37): "Das Verb im Imperativ steht auf Position 1." [EXTRA] Truco: con Sie la orden es igual que el infinitivo + Sie (gehen → Gehen Sie). Es como una pregunta sin signo: el verbo va primero.' }
          ]},
          { tipo: 'lectura', modo: 'dialogo', etiqueta: 'LIBRO', titulo: 'Ejemplo del libro (8): Nach dem Weg fragen',
            contexto: 'Juego de dados: cada jugador tira dos veces (Start y Ziel). Ejemplo: ⚀ y ⚃ → Start B (Bahnhof), Ziel der Park.',
            lineas: [
              { q: 'A', de: 'Entschuldigung, wo ist der Park?', es: 'Disculpe, ¿dónde está el parque?' },
              { q: 'B', de: 'Gehen Sie rechts und dann geradeaus. Da ist der Park.', es: 'Vaya a la derecha y luego todo recto. Allí está el parque.' },
              { q: 'A', de: 'Vielen Dank!', es: '¡Muchas gracias!' }
            ]
          },
          { tipo: 'tabla', encabezados: ['Dado', '1', '2', '3', '4', '5', '6'], filas: [
            ['Start', 'A', 'B', 'C', 'D', 'E', 'F'],
            ['Ziel', 'das Hotel', 'der Bahnhof', 'der Hafen', 'der Park', 'die U-Bahn', 'der Markt']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] El plano del libro (con las letras A–F en los bordes) está en la p. 33. En "Entrenamiento Kap. 3" tienes planos de ciudad interactivos para practicar esto.' },
          { tipo: 'texto', texto: '[LIBRO] 7a/7b: escuchas tres conversaciones y anotas qué buscan: das Hotel | die Kirche | das Rathaus | das Theater | die U-Bahn (el audio de las pistas 1.30–32 lo tienes en el libro).' }
        ]
      },

      /* ------------------------------------------------ p. 34 */
      {
        n: 6, color: 'rosa', icono: 'musica', titulo: 'Events in Hamburg (p. 34)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: 'Estrategia del libro: entender textos con palabras internacionales. Muchas palabras se parecen en inglés, francés y español.' },
          { tipo: 'lectura', modo: 'texto', etiqueta: 'LIBRO', titulo: 'Veranstaltungstipps (9a)',
            contexto: 'Tres textos cortos; en el libro hay que unirlos con las fotos A (Theater), B (Musik) y C (Film).',
            lineas: [
              { de: 'Hamburger Theater-Festival, 12.–18. Okt.', es: 'Festival de teatro de Hamburgo, del 12 al 18 de octubre.' },
              { de: 'Zum Festival kommen deutschsprachige Theater aus Deutschland, Österreich und der Schweiz.', es: 'Al festival vienen teatros de habla alemana de Alemania, Austria y Suiza.' },
              { de: 'In diesem Jahr zeigen die Schaubühne Berlin, das Wiener Burgtheater, das Deutsche Theater Berlin und das Theater Basel ihre Produktionen.', es: 'Este año presentan sus producciones la Schaubühne Berlin, el Burgtheater de Viena, el Deutsches Theater Berlin y el Theater Basel.' },
              { de: 'Tickets gibt es im Thalia Theater und im Hamburger Schauspielhaus ab 12,50 Euro.', es: 'Hay entradas en el Thalia Theater y en el Schauspielhaus de Hamburgo desde 12,50 euros.' },
              { de: 'Orchester aus aller Welt zu Gast in Hamburg, 25. Okt.', es: 'Orquestas de todo el mundo, invitadas en Hamburgo, 25 de octubre.' },
              { de: 'Das Orchestre des Champs-Élysées ist am 25.10. Gast in der Elbphilharmonie.', es: 'La Orchestre des Champs-Élysées es invitada el 25.10 en la Elbphilharmonie.' },
              { de: 'Das Orchester spielt das Requiem von Wolfgang Amadeus Mozart.', es: 'La orquesta toca el Réquiem de Wolfgang Amadeus Mozart.' },
              { de: 'Es singen der Chor Collegium Vocale aus Gent und vier bekannte Solisten.', es: 'Cantan el coro Collegium Vocale de Gante y cuatro solistas conocidos.' },
              { de: 'Philippe Herreweghe dirigiert das Konzert. 20:00 Uhr, ab 29 Euro.', es: 'Philippe Herreweghe dirige el concierto. 20:00 h, desde 29 euros.' },
              { de: 'Kino für alle, Hamburg 27.9.–6.10.', es: 'Cine para todos, Hamburgo, del 27.9 al 6.10.' },
              { de: '40.000 Filmfans sehen an 10 Tagen über 100 Filme, deutsche und internationale Produktionen.', es: '40.000 aficionados al cine ven en 10 días más de 100 películas, producciones alemanas e internacionales.' },
              { de: 'Regisseure und Schauspieler kommen gern nach Hamburg.', es: 'A los directores y actores les gusta venir a Hamburgo.' },
              { de: 'Regisseur Fatih Akın präsentiert dem Publikum seinen neuen Film.', es: 'El director Fatih Akın presenta su nueva película al público.' }
            ],
            glosario: [
              { de: 'zu Gast sein', es: 'ser invitado' },
              { de: 'der Regisseur', es: 'el director (de cine)' },
              { de: 'der Schauspieler', es: 'el actor' },
              { de: 'dirigieren', es: 'dirigir (orquesta)' },
              { de: 'ab 12,50 Euro', es: 'desde 12,50 euros' },
              { de: 'bekannt', es: 'conocido' }
            ]
          },
          { tipo: 'texto', texto: '[LIBRO] 9c. Cuadro de palabras parecidas (inglés – francés – alemán). El artículo que el libro escribe a mano:' },
          { tipo: 'tabla', encabezados: ['Inglés', 'Francés', 'Deutsch'], filas: [
            ['the theater', 'le théâtre', 'das Theater'],
            ['the festival', 'le festival', 'das Festival'],
            ['the orchestra', 'l’orchestre', 'das Orchester'],
            ['the choir', 'le choeur', 'der Chor'],
            ['the concert', 'le concert', 'das Konzert'],
            ['the film', 'le film', 'der Film'],
            ['the audience', 'le public', 'das Publikum']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Tú tienes una ventaja: en español también se parecen (teatro, festival, orquesta, coro, concierto, film, público). Escríbelos en tu columna "Ihre Sprache" y apréndete solo el artículo y la ortografía alemana.' },
          { tipo: 'texto', texto: '[LIBRO] 9d. Pregunta abierta: "Welches Event finden Sie interessant?" Responde, por ejemplo: "Ich finde das Konzert interessant."' }
        ]
      },

      /* ------------------------------------------------ p. 35 */
      {
        n: 7, color: 'verde', icono: 'calendario', titulo: 'Jahreszeiten in D-A-CH (p. 35)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: 'El libro muestra la rueda del año con las estaciones y los meses (Alemania, Austria, Suiza).' },
          { tipo: 'tabla', encabezados: ['Jahreszeit', 'Monate (según la rueda)'], filas: [
            ['der Frühling (primavera)', 'März · April · Mai'],
            ['der Sommer (verano)', 'Juni · Juli · August'],
            ['der Herbst (otoño)', 'September · Oktober · November'],
            ['der Winter (invierno)', 'Dezember · Januar · Februar']
          ]},
          { tipo: 'texto', texto: '[LIBRO] 10a. Escribe los 12 meses en alemán y en tu idioma, en orden del 1 al 12 (el libro ya da: 1 Januar, 9 September).' },
          { tipo: 'tabla', encabezados: ['1', '2', '3', '4', '5', '6'], filas: [
            ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni']
          ]},
          { tipo: 'tabla', encabezados: ['7', '8', '9', '10', '11', '12'], filas: [
            ['Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
          ]},
          { tipo: 'texto', texto: '[LIBRO] 10b. ¿Qué estación ves en las fotos A–D? (A: esquiador/snowboard, B: seta en el bosque, C: salto al lago, D: ciclistas). Responde con: "im Winter", "im Herbst", "im Sommer", "im Frühling/Sommer".' },
          { tipo: 'texto', texto: '[LIBRO] 10c. Escuchas a cuatro personas. Actividades del cuadro: ins Museum gehen | schwimmen | Fahrrad fahren | reisen. Das "Wann?" se responde con "im" + mes o estación.' },
          { tipo: 'ejemplos', items: [
            { de: 'Im Sommer schwimme ich gern im See.', es: 'En verano me gusta nadar en el lago.' },
            { de: 'Im Januar gehe ich ins Museum.', es: 'En enero voy al museo.' },
            { de: 'Im Herbst reise ich nach Wien.', es: 'En otoño viajo a Viena.' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '[LIBRO] 10d (en pareja, con diccionario): ¿qué haces y cuándo? Hagan un póster de las estaciones y preséntenlo en clase.' }
        ]
      },

      /* ------------------------------------------------ p. 36 */
      {
        n: 8, color: 'morado', icono: 'ubicacion', titulo: 'Die Netzwerk-WG: München (p. 36)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: 'Sección de vídeo ("hören und sehen"): Luca y Anna hacen un recorrido por Múnich (escena 6) y preguntan por el Viktualienmarkt (escena 7).' },
          { tipo: 'texto', texto: '[LIBRO] 11a/b. Las seis estaciones (fotos) y los títulos A–I. Tres títulos NO encajan con ninguna foto:' },
          { tipo: 'tabla', encabezados: ['Letra', 'Título', 'Letra', 'Título'], filas: [
            ['A', 'die Theatinerkirche', 'F', 'das Müller’sche Volksbad'],
            ['B', 'das Museum „Haus der Kunst“', 'G', 'der Viktualienmarkt'],
            ['C', 'der Hauptbahnhof', 'H', 'der Olympiapark'],
            ['D', 'der Chinesische Turm', 'I', 'der Eisbach mit Surfern'],
            ['E', 'der Englische Garten', '', '']
          ]},
          { tipo: 'lectura', modo: 'texto', etiqueta: 'LIBRO', titulo: '12a · Zahlen, Zahlen, Zahlen',
            contexto: 'Completa las huecos con: 25 | 1969–1972 | 375 | 1901 | 3,5 | 137 | 1792. [EXTRA] Abajo tienes el texto completo con la asignación más lógica; confírmala con la escena 6.',
            lineas: [
              { de: 'Seit 1792 gibt es den Englischen Garten. Der Park ist sehr groß: 375 Hektar. Riesig, oder? Jedes Jahr kommen über 3,5 Millionen Besucher. Der Chinesische Turm im Englischen Garten ist 25 m hoch.',
                es: 'El Jardín Inglés existe desde 1792. El parque es muy grande: 375 hectáreas. Enorme, ¿no? Cada año vienen más de 3,5 millones de visitantes. La Torre China del Jardín Inglés mide 25 m de alto.' },
              { de: 'Das Müller’sche Volksbad ist direkt neben der Isar. Das Bad gibt es seit 1901.',
                es: 'Los baños Müller están justo al lado del Isar. Los baños existen desde 1901.' },
              { de: 'Das Olympiastadion ist toll. Bauzeit: 1969–1972. Kosten: 137 Millionen D-Mark.',
                es: 'El estadio olímpico es genial. Tiempo de construcción: 1969–1972. Costes: 137 millones de marcos alemanes.' }
            ],
            glosario: [
              { de: 'seit', es: 'desde (tiempo)' },
              { de: 'riesig', es: 'enorme' },
              { de: 'der Besucher', es: 'el visitante' },
              { de: 'die Bauzeit', es: 'el tiempo de construcción' },
              { de: 'die Kosten', es: 'los costes' },
              { de: 'D-Mark', es: 'marco alemán (moneda antigua)' }
            ]
          },
          { tipo: 'texto', texto: '[LIBRO] 12b. Investiga: ¿qué conciertos y eventos habrá pronto en el Olympiapark? ¿A dónde te gustaría ir?' },
          { tipo: 'texto', texto: '[LIBRO] 13. "Entschuldigung, wo ist der Viktualienmarkt?" Ordena las expresiones y describe el camino. Estas son las piezas del libro:' },
          { tipo: 'ejemplos', items: [
            { de: 'Gehen Sie ___ vor dem Marienplatz nach links', es: 'Vaya … delante de la Marienplatz hacia la izquierda' },
            { de: 'Gehen Sie ___ durch das Isartor', es: 'Vaya … a través de la puerta Isartor' },
            { de: 'Gehen Sie ___ immer geradeaus', es: 'Vaya … siempre todo recto' },
            { de: 'Gehen Sie ___ die Straße bis zum Isartor', es: 'Vaya … por la calle hasta el Isartor' },
            { de: 'Dann sehen Sie den Viktualienmarkt.', es: 'Entonces ve usted el Viktualienmarkt.' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] El orden exacto lo da la escena 7 del vídeo del libro. Una secuencia lógica sería: 1) die Straße bis zum Isartor, 2) durch das Isartor, 3) immer geradeaus, 4) vor dem Marienplatz nach links. Confírmala con el vídeo.' }
        ]
      },

      /* ------------------------------------------------ p. 37 */
      {
        n: 9, color: 'azul', icono: 'mensaje', titulo: 'Kurz und klar (p. 37)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'recuadro', clase: 'frases', etiqueta: 'LIBRO', titulo: 'Fragen zu Orten stellen und antworten', bloques: [
            { tipo: 'tabla', encabezados: ['Pregunta', 'Respuesta'], filas: [
              ['Was ist das?', 'Das ist der Hafen / eine Kirche / …'],
              ['Ist das eine Kirche?', 'Ja. / Ja, das ist die Michaeliskirche.'],
              ['Ist das ein Hotel?', 'Nein, das ist das Rathaus / …']
            ]}
          ]},
          { tipo: 'recuadro', clase: 'frases', etiqueta: 'LIBRO', titulo: 'nach Dingen fragen', bloques: [
            { tipo: 'tabla', encabezados: ['Pregunta', 'Respuesta'], filas: [
              ['Ist das ein Bus / ein Auto / eine U-Bahn?', 'Ja, das ist ein/eine … · Nein, das ist kein/keine …']
            ]}
          ]},
          { tipo: 'recuadro', clase: 'frases', etiqueta: 'LIBRO', titulo: 'nach dem Weg fragen und einen Weg beschreiben', bloques: [
            { tipo: 'tabla', encabezados: ['Pregunta', 'Respuesta'], filas: [
              ['(Entschuldigung.) Wo ist bitte …?', 'Das ist ganz einfach. Gehen Sie rechts/links/geradeaus und dann … Da ist …'],
              ['Also, hier rechts/links/geradeaus und dann …?', 'Ja. / Ja, genau.'],
              ['Vielen Dank.', 'Bitte. / Bitte, gern.']
            ]}
          ]},
          { tipo: 'recuadro', clase: 'G', etiqueta: 'LIBRO', titulo: 'Artikel (resumen)', bloques: [
            { tipo: 'tabla', encabezados: ['', 'unbestimmt: ein, ein, eine', 'bestimmt: der, das, die', 'Negation: kein, kein, keine'], filas: [
              ['maskulin', 'Das ist ein Hafen.', 'Das ist der Hafen von Hamburg.', 'Das ist kein Bahnhof.'],
              ['neutrum', 'Das ist ein Hotel.', 'Das Hotel heißt „Linde“.', 'Das ist kein Rathaus.'],
              ['feminin', 'Das ist eine Brücke.', 'Die Brücke heißt „Alsterbrücke“.', 'Das ist keine Straße.'],
              ['Plural', 'Das sind – Schiffe.', 'Die Schiffe sind im Hafen.', 'Das sind keine Autos.']
            ]}
          ]},
          { tipo: 'recuadro', clase: 'G', etiqueta: 'LIBRO', titulo: 'Imperativ mit Sie', bloques: [
            { tipo: 'tabla', encabezados: ['Infinitiv', 'Imperativ', '', ''], filas: [
              ['gehen', 'Gehen', 'Sie', 'links.'],
              ['fahren', 'Fahren', 'Sie', 'rechts.']
            ]},
            { tipo: 'texto', texto: 'Das Verb im Imperativ steht auf Position 1.' }
          ]},
          { tipo: 'recuadro', clase: 'G', etiqueta: 'LIBRO', titulo: 'Adjektiv mit sein', bloques: [
            { tipo: 'ejemplos', items: [
              { de: 'Der Turm ist 112 Meter hoch.', es: 'La torre mide 112 metros de alto.' },
              { de: 'Der Hafen ist groß.', es: 'El puerto es grande.' }
            ]},
            { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] El adjetivo detrás de "sein" NO cambia (no concuerda): der Hafen ist groß · die Brücke ist groß · die Häuser sind groß.' }
          ]}
        ]
      }

    ]
  }
});
