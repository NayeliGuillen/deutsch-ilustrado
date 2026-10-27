/* ============================================================
   data/libro-kap4-libro.js — Netzwerk neu A1 · Kapitel 4 (libro)
   ------------------------------------------------------------
   Lo que dicen las páginas 44–53: diálogos y textos con
   traducción plegable, recuadros G / [!] / "Gut gesagt" y las
   tablas de "kurz und klar".
   [LIBRO] = transcrito de las fotos · [EXTRA] = ayuda añadida.
   Donde el borde de la foto cortaba una palabra lo indico con […].
   ============================================================ */

DE.registrarLeccion({
  id: 'k4-libro',
  titulo: 'Kap. 4 · El libro paso a paso',
  icono: 'libro',
  grupo: 'Libro · Kapitel 4',
  color: 'naranja',
  resumen: 'Guten Appetit!, Kommt ihr?, Supermarkt, Grillparty, Was essen Sie?, Wörter lernen, Koch am Bodensee y Netzwerk-WG.',
  vista: 'infografia',

  datos: {
    titulo: 'Kapitel 4',
    subtitulo: 'Guten Appetit!',
    cinta: 'Netzwerk neu A1 · págs. 44–53',
    resumen: 'Metas del capítulo (libro): planear una compra · conversar al comprar · conversar mientras se come · hablar de preferencias · hablar de comida · estrategia: ordenar y aprender palabras.',

    tarjetas: [

      /* ------------------------------------------------ pp. 44-45 */
      {
        n: 1, color: 'naranja', icono: 'cafe', titulo: 'Guten Appetit! (pp. 44–45)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: 'Las palabras escritas a mano junto a las fotos. Cada comida del día tiene su lista:' },
          { tipo: 'tabla', encabezados: ['Frühstück', 'Mittagessen', 'Kaffee und Kuchen', 'Abendessen'], filas: [
            ['die Banane', 'der Apfelsaft', 'der Kaffee', 'die Butter'],
            ['der Orangensaft', 'die Kartoffeln', 'der Kuchen', 'das Brot'],
            ['das Müsli', 'das Salz', 'die Sahne', 'die Tomate'],
            ['der Joghurt', 'der Pfeffer', 'die Schokolade', 'die Gurke'],
            ['der Tee', 'das Gemüse', 'der Keks', 'der Salat'],
            ['die Milch', 'das Wasser', 'der Zucker', 'die Suppe'],
            ['der Käse', 'der Essig', '', 'die Wurst'],
            ['die Marmelade', 'das Öl', '', 'der Schinken'],
            ['das Ei', 'die Cola', '', ''],
            ['das Brötchen', 'das Fleisch', '', '']
          ]},
          { tipo: 'texto', texto: '[LIBRO] 1a. Lebensmittel: ¿qué palabras ya conoces en alemán? Únelas con la foto. 1b. ¿Cuáles se parecen en tu idioma? Ejemplo del libro: "Banane" en ruso es "banan". En español: banana, té (Tee), yogur (Joghurt), chocolate, tomate, ensalada (Salat), sopa (Suppe), cola…' },
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Truco de memoria: aprende cada palabra con su color. Rojo = der (Käse, Tee, Orangensaft…), azul = die (Milch, Banane, Butter…), verde = das (Müsli, Brot, Ei…). En plural, morado: die Kartoffeln.' },
          { tipo: 'texto', texto: '[LIBRO] 2a. Beim Einkaufen. Escuchas cuatro conversaciones (pistas 1.41–44) y las unes con una foto: die Bäckerei · der Markt · die Metzgerei · der Supermarkt.' },
          { tipo: 'texto', texto: '[LIBRO] 2b. Escucha otra vez y marca qué palabras oyes: der Schinken · die Kartoffeln · die Marmelade · der Kuchen · die Milch · die Banane · das Fleisch · das Brot · die Wurst · das Brötchen · der Apfel · der Käse.' },
          { tipo: 'texto', texto: '[LIBRO] 2c. Geschäfte: ¿dónde compras los alimentos de 2b? Dos columnas con "wo?":' },
          { tipo: 'tabla', encabezados: ['Wo?', 'Beispiel del libro'], filas: [
            ['in der Bäckerei', 'das Brot'],
            ['auf dem Markt', ''],
            ['in der Metzgerei', 'die Wurst'],
            ['im Supermarkt', 'das Brot']
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'Ich kaufe Brot in der Bäckerei.', es: 'Compro pan en la panadería. (modelo del libro)' },
            { de: 'Ich kaufe Wurst in der Metzgerei.', es: 'Compro embutido en la carnicería.' },
            { de: 'Ich kaufe Obst auf dem Markt.', es: 'Compro fruta en el mercado.' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] "Wo?": in der (die-palabras) · im (der/das-palabras, in + dem) · auf dem Markt (en el puesto de mercado). Ejemplos: in der Bäckerei, im Supermarkt, auf dem Markt.' }
        ]
      },

      /* ------------------------------------------------ p. 46 */
      {
        n: 2, color: 'rojo', icono: 'mensaje', titulo: 'Kommt ihr? (p. 46)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: 'Meta: planear una compra. Mario y Elena preparan una barbacoa (Grillparty).' },
          { tipo: 'lectura', modo: 'dialogo', nombres: true, etiqueta: 'LIBRO', titulo: '3a · Die Einladung (mensajes)',
            contexto: 'Un mensaje de invitación y tres posibles respuestas (A, B, C). Eliges cuál encaja.',
            lineas: [
              { q: 'Einladung', de: 'Wir grillen heute Abend bei uns. Kommt ihr?', es: 'Esta noche hacemos barbacoa en nuestra casa. ¿Venís?' },
              { q: 'Antwort A', de: 'Wo seid ihr? Wir warten schon – das Essen ist gleich fertig.', es: '¿Dónde estáis? Ya os esperamos: la comida está a punto de estar lista.' },
              { q: 'Antwort B', de: 'Gern. Wir kommen und kaufen Fleisch. Bis später!', es: 'Con gusto. Vamos y compramos carne. ¡Hasta luego!' },
              { q: 'Antwort C', de: 'Danke für die Einladung. Wir haben morgen keine Zeit. Aber vielleicht am Wochenende?', es: 'Gracias por la invitación. Mañana no tenemos tiempo. ¿Pero quizá el fin de semana?' }
            ],
            glosario: [
              { de: 'grillen', es: 'hacer barbacoa' },
              { de: 'bei uns', es: 'en nuestra casa' },
              { de: 'Kommt ihr?', es: '¿Venís? (ihr = vosotros/ustedes en plural)' },
              { de: 'gleich fertig', es: 'enseguida listo' },
              { de: 'vielleicht', es: 'quizás' },
              { de: 'Bis später!', es: '¡Hasta luego!' }
            ]
          },
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] La respuesta que encaja con una invitación para HOY es B (aceptan y traen carne). A ya espera a los invitados; C habla de "morgen" y rechaza.' },
          { tipo: 'lectura', modo: 'dialogo', nombres: true, etiqueta: 'LIBRO', titulo: '3b · Mario und Elena planen die Grillparty',
            contexto: 'Escribe la lista de la compra de cada uno. En el libro: Mario: Käse, … · Elena: Eier, …',
            lineas: [
              { q: 'Mario', de: 'Wir machen den Salat und kaufen die Getränke. Und Katrin und Lukas kaufen das Fleisch und die Würstchen.', es: 'Nosotros hacemos la ensalada y compramos las bebidas. Y Katrin y Lukas compran la carne y las salchichitas.' },
              { q: 'Elena', de: 'Okay. Was brauchen wir noch für den Salat? Haben wir alles?', es: 'Vale. ¿Qué más necesitamos para la ensalada? ¿Tenemos todo?' },
              { q: 'Mario', de: 'Moment … Salat haben wir. Ähm, wir brauchen Tomaten, Eier, Öl und eine Gurke. Ach, und Käse! Wir haben keinen Käse mehr. Hm … ah! Getränke, wir haben auch keine Getränke.', es: 'Un momento… Lechuga tenemos. Ehm, necesitamos tomates, huevos, aceite y un pepino. ¡Ah, y queso! Ya no tenemos queso. Hm… ¡ah! Bebidas, tampoco tenemos bebidas.' },
              { q: 'Elena', de: 'Gut. Ich gehe zum Markt und kaufe die Eier, die Tomaten und die Gurke. Und ein Brot kaufe ich auch. Der Käse ist da so teuer. Kaufst du den Käse im Supermarkt?', es: 'Bien. Voy al mercado y compro los huevos, los tomates y el pepino. Y también compro un pan. El queso es tan caro allí. ¿Compras tú el queso en el supermercado?' },
              { q: 'Mario', de: 'Ja, stimmt. Ich gehe zum Supermarkt und kaufe Käse, Öl und die Getränke.', es: 'Sí, es verdad. Voy al supermercado y compro queso, aceite y las bebidas.' }
            ],
            glosario: [
              { de: 'Was brauchen wir?', es: '¿Qué necesitamos?' },
              { de: 'Haben wir alles?', es: '¿Tenemos todo?' },
              { de: 'keinen Käse mehr', es: 'ya no queso' },
              { de: 'teuer', es: 'caro' },
              { de: 'Ja, stimmt.', es: 'Sí, es verdad / cierto.' }
            ]
          },
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Quién es quién: en el libro, los puntos ○ y ● marcan las dos voces; por la nota manuscrita (Mario: Käse; Elena: Eier) la primera voz (○) es Mario y la segunda (●) Elena. El diálogo termina con "…" porque el libro pide que lo continúes (3c: ¿qué hacen después de comprar?).' },
          { tipo: 'recuadro', clase: 'G', etiqueta: 'LIBRO', titulo: '3d · Akkusativ (tabla del libro)', bloques: [
            { tipo: 'tabla', encabezados: ['Nominativ', 'Akkusativ', 'der/das/die', 'ein', 'kein'], filas: [
              ['Der Käse ist gut.', 'Ich kaufe den Käse.', 'den', 'einen', 'keinen Käse'],
              ['Das Brot ist gut.', 'Ich kaufe das Brot.', 'das', 'ein', 'kein Brot'],
              ['Die Gurke ist gut.', 'Ich kaufe die Gurke.', 'die', 'eine', 'keine Gurke'],
              ['Die Tomaten sind gut.', 'Ich kaufe die Tomaten.', 'die', '–', 'keine Tomaten']
            ]},
            { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Analogía: el sujeto es quien "hace" (Nominativ); el objeto es lo que "recibe" la acción (Akkusativ: lo que compras, comes, necesitas). Solo el masculino cambia: der → den, ein → einen, kein → keinen. Die/das/ein/eine no cambian. Para hispanohablantes: es como el "a" personal, pero marcado en el artículo.' }
          ]},
          { tipo: 'recuadro', clase: 'G', etiqueta: 'LIBRO', titulo: 'Verben mit Akkusativ', bloques: [
            { tipo: 'tabla', encabezados: ['Wir', 'Verbo', 'Objeto (Akkusativ)'], filas: [
              ['Wir', 'brauchen', 'eine Gurke'],
              ['Wir', 'haben', 'keinen Käse'],
              ['Wir', 'machen', 'einen Salat'],
              ['Wir', 'kochen', 'keine Suppe'],
              ['Wir', 'essen', 'das Fleisch'],
              ['Wir', 'kaufen', 'die Getränke']
            ]},
            { tipo: 'texto', texto: 'En la p. 53 ("kurz und klar") la lista sigue: nehmen → den Schinken · mögen → Schokolade · möchten → ein Würstchen.' }
          ]},
          { tipo: 'lectura', modo: 'texto', etiqueta: 'LIBRO', titulo: '4 · Zusammen essen (en grupos de cuatro)',
            contexto: 'Preguntas del libro. Modelo de respuesta del libro:',
            lineas: [
              { de: 'Was brauchen Sie für das Essen? Schreiben Sie einen Einkaufszettel.', es: '¿Qué necesitan para la comida? Escriban una lista de la compra.' },
              { de: 'Wer kauft was?', es: '¿Quién compra qué?' },
              { de: 'Wer kocht?', es: '¿Quién cocina?' },
              { de: 'Wir kochen eine Suppe. Wir brauchen Tomaten und Fleisch. Ich kaufe die Tomaten und Anna …', es: 'Cocinamos una sopa. Necesitamos tomates y carne. Yo compro los tomates y Anna …' }
            ]
          }
        ]
      },

      /* ------------------------------------------------ p. 46 */
      {
        n: 3, color: 'morado', icono: 'tipografia', titulo: 'Umlaute ä – ö – ü (p. 46)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: '[LIBRO] 5a. Escucha y repite (pista 1.46):' },
          { tipo: 'tabla', encabezados: ['singular', 'plural / forma'], filas: [
            ['Apfel', 'Äpfel'],
            ['Saft', 'Säfte'],
            ['Brot', 'Brötchen'],
            ['Markt', 'Märkte']
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'Wir kaufen Müsli zum Frühstück.', es: 'Compramos muesli para el desayuno.' },
            { de: 'Ich kaufe Brötchen in der Bäckerei.', es: 'Compro panecillos en la panadería.' },
            { de: 'Wir brauchen Öl, Käse, Gemüse und Getränke.', es: 'Necesitamos aceite, queso, verdura y bebidas.' }
          ]},
          { tipo: 'texto', texto: '[LIBRO] 5b. ¿Oyes una palabra con Umlaut? Levántate y repite la palabra.' },
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Cómo se hacen: ä ≈ "e" abierta (Käse = KEE-ze). ö = di "e" con los labios en "o" (Öl, Brötchen). ü = di "i" con los labios en "u" (Müsli, Gemüse). Truco: a ü la boca le sale "iu". Los dos puntitos suelen indicar plural (Apfel → Äpfel) o cambio en la conjugación (fahren → fährt).' }
        ]
      },

      /* ------------------------------------------------ p. 47 */
      {
        n: 4, color: 'turquesa', icono: 'bolsa', titulo: 'Einkaufen im Supermarkt (p. 47)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: 'Meta: conversar al comprar. Cinco miniconversaciones (pistas 1.48–52); en el libro hay que unirlas con las imágenes A–E.' },
          { tipo: 'lectura', modo: 'dialogo', nombres: true, etiqueta: 'LIBRO', titulo: '6a · Fünf Dialoge',
            contexto: 'Cliente y vendedor/a. (○ cliente, ● vendedor/a).',
            lineas: [
              { q: '1 · Kunde', de: 'Entschuldigung, ich brauche einen Euro für den Einkaufswagen. Können Sie wechseln, bitte?', es: 'Disculpe, necesito un euro para el carrito. ¿Puede cambiarme, por favor?' },
              { q: '1 · Verkäufer', de: 'Ja, Moment – hier bitte.', es: 'Sí, un momento: aquí tiene.' },
              { q: '1 · Kunde', de: 'Danke.', es: 'Gracias.' },
              { q: '2 · Kunde', de: 'Entschuldigung, was kostet der Apfelsaft?', es: 'Disculpe, ¿cuánto cuesta el jugo de manzana?' },
              { q: '2 · Verkäufer', de: '99 Cent.', es: '99 céntimos.' },
              { q: '2 · Kunde', de: 'Und wie viel kostet der Orangensaft?', es: '¿Y cuánto cuesta el jugo de naranja?' },
              { q: '2 · Verkäufer', de: '1,09 Euro.', es: '1,09 euros.' },
              { q: '3 · Verkäufer', de: 'Wer kommt dran?', es: '¿Quién es el siguiente?' },
              { q: '3 · Kunde', de: 'Ich, bitte.', es: 'Yo, por favor.' },
              { q: '3 · Verkäufer', de: 'Was möchten Sie?', es: '¿Qué desea?' },
              { q: '3 · Kunde', de: 'Ich möchte ein Stück Emmentaler, bitte.', es: 'Quisiera un trozo de Emmental, por favor.' },
              { q: '3 · Verkäufer', de: 'Sonst noch etwas?', es: '¿Algo más?' },
              { q: '3 · Kunde', de: 'Ja, ich nehme noch 150 Gramm Schinken.', es: 'Sí, me llevo también 150 gramos de jamón.' },
              { q: '3 · Verkäufer', de: 'Ist das alles?', es: '¿Es todo?' },
              { q: '3 · Kunde', de: 'Ja, danke.', es: 'Sí, gracias.' },
              { q: '4 · Kunde', de: 'Entschuldigung, wo finde ich Reis?', es: 'Disculpe, ¿dónde encuentro el arroz?' },
              { q: '4 · Verkäufer', de: 'Dort rechts.', es: 'Allí a la derecha.' },
              { q: '4 · Kunde', de: 'Danke.', es: 'Gracias.' },
              { q: '5 · Kunde', de: 'Ich brauche noch eine Tüte, bitte.', es: 'Necesito también una bolsa, por favor.' },
              { q: '5 · Kassierer', de: 'Hier bitte. Die kostet 35 Cent.', es: 'Aquí tiene. Cuesta 35 céntimos.' },
              { q: '5 · Kunde', de: 'Wie bitte? 35 Cent? Das ist aber teuer! Also gut …', es: '¿Cómo? ¿35 céntimos? ¡Pero eso es caro! Bueno, está bien…' },
              { q: '5 · Kassierer', de: 'Das macht dann 18,65 Euro. Brauchen Sie den Kassenzettel?', es: 'Entonces son 18,65 euros. ¿Necesita el ticket?' },
              { q: '5 · Kunde', de: 'Ja, bitte.', es: 'Sí, por favor.' }
            ],
            glosario: [
              { de: 'wechseln', es: 'cambiar dinero' },
              { de: 'Sonst noch etwas?', es: '¿Algo más?' },
              { de: 'Ist das alles?', es: '¿Es todo?' },
              { de: 'Wer kommt dran?', es: '¿A quién le toca?' },
              { de: 'Das macht …', es: 'Eso hace … (el total)' },
              { de: 'Wie bitte?', es: '¿Cómo? (no entendí)' }
            ]
          },
          { tipo: 'recuadro', clase: '!', etiqueta: 'LIBRO', titulo: 'Preise sprechen', bloques: [
            { tipo: 'tabla', encabezados: ['Se escribe', 'Se dice'], filas: [
              ['0,99 Euro', 'neunundneunzig Cent'],
              ['1,09 Euro', 'ein Euro neun'],
              ['2,20 Euro', 'zwei Euro zwanzig']
            ]},
            { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] En alemán el precio se lee: euros + "Euro" + céntimos. Se dice "ein Euro neun" (1,09) sin decir "Cent". Y la coma es decimal: 1,09 (no 1.09). Por ejemplo, 18,65 € = "achtzehn Euro fünfundsechzig".' }
          ]},
          { tipo: 'texto', texto: '[LIBRO] 6b. Practica y varía los diálogos. 6c. Busca los precios de tres a cinco alimentos en Alemania/Austria/Suiza y cuéntalo.' }
        ]
      },

      /* ------------------------------------------------ p. 48 */
      {
        n: 5, color: 'rosa', icono: 'cafe', titulo: 'Die Grillparty (p. 48)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: 'Meta: conversar durante la comida y hablar de lo que te gusta.' },
          { tipo: 'lectura', modo: 'dialogo', nombres: true, etiqueta: 'LIBRO', titulo: '7a · Schmeckt’s? (3 mini-diálogos)',
            contexto: 'En el libro se unen con las fotos A, B, C. Aquí en orden.',
            lineas: [
              { q: '1', de: 'Guten Appetit!', es: '¡Buen provecho!' },
              { q: '1', de: 'Danke, gleichfalls!', es: '¡Gracias, igualmente!' },
              { q: '1', de: 'Schmeckt’s?', es: '¿Está rico? (¿Sabe bien?)' },
              { q: '1', de: 'Mmh, ja, das Fleisch schmeckt sehr gut!', es: 'Mmm, sí, ¡la carne sabe muy bien!' },
              { q: '2', de: 'Möchtet ihr noch ein Würstchen?', es: '¿Queréis otra salchichita?' },
              { q: '2', de: 'Ja, gerne, die Würstchen sind wirklich lecker.', es: 'Sí, con gusto, las salchichitas están realmente ricas.' },
              { q: '2', de: 'Und du, Lukas?', es: '¿Y tú, Lukas?' },
              { q: '2', de: 'Nein, danke, ich bin satt.', es: 'No, gracias, estoy lleno.' },
              { q: '3', de: 'Möchtest du Salat?', es: '¿Quieres ensalada?' },
              { q: '3', de: 'Nein, danke. Ich esse keine Gurken.', es: 'No, gracias. No como pepinos.' }
            ],
            glosario: [
              { de: 'Schmeckt’s?', es: '¿Te gusta? (= Schmeckt es?)' },
              { de: 'gleichfalls', es: 'igualmente' },
              { de: 'wirklich', es: 'realmente' },
              { de: 'satt', es: 'lleno, satisfecho' }
            ]
          },
          { tipo: 'recuadro', clase: 'dicho', etiqueta: 'LIBRO', titulo: 'Gut gesagt: Beim Essen', bloques: [
            { tipo: 'tabla', encabezados: ['Expresión', 'Cuándo'], filas: [
              ['Prost!', 'brindis informal (al chocar los vasos)'],
              ['Zum Wohl!', 'brindis algo más formal ("a su salud")'],
              ['Guten Appetit!', 'antes de comer (¡buen provecho!)'],
              ['Mahlzeit!', 'saludo/deseo a la hora de comer, sobre todo en el trabajo']
            ]},
            { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Al responder a "Guten Appetit!" se dice "Danke, gleichfalls!". "Mahlzeit" es muy normal en la oficina al mediodía, incluso como saludo.' }
          ]},
          { tipo: 'recuadro', clase: 'frases', etiqueta: 'LIBRO', titulo: '7b · Dialoge spielen', bloques: [
            { tipo: 'tabla', encabezados: ['Frage / Wunsch', 'Antwort'], filas: [
              ['Guten Appetit!', 'Danke, gleichfalls!'],
              ['Möchtet ihr (noch) …?', 'Ja, bitte. … schmeckt/schmecken sehr gut.'],
              ['Möchtest du (noch) …?', 'Ja, gerne. … ist/sind sehr lecker.'],
              ['', 'Nein, danke. Ich esse keinen/kein/keine …'],
              ['', 'Nein, danke. Ich bin satt.']
            ]}
          ]},
          { tipo: 'recuadro', clase: 'G', etiqueta: 'LIBRO', titulo: 'möchten', bloques: [
            { tipo: 'tabla', encabezados: ['', 'möchten', '', 'möchten'], filas: [
              ['ich', 'möchte', 'wir', 'möchten'],
              ['du', 'möchtest', 'ihr', 'möchtet'],
              ['er/es/sie', 'möchte', 'sie/Sie', 'möchten']
            ]},
            { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] möchten = "quisiera". Es la forma educada de pedir: Ich möchte einen Kaffee. Con otro verbo va al final en infinitivo: Ich möchte Kaffee trinken.' }
          ]},
          { tipo: 'texto', texto: '[LIBRO] 8a. Wer möchte was? Escuchas y completas: 1. Der Mann möchte ein ___. 2. Die Frau trinkt gern ___. 3. Der Mann möchte keine ___.' },
          { tipo: 'recuadro', clase: 'frases', etiqueta: 'LIBRO', titulo: '8b · Interview: Was essen und trinken Sie gern?', bloques: [
            { tipo: 'tabla', encabezados: ['Pregunta', 'Sí', 'No'], filas: [
              ['Essen/Trinken Sie gern …? · Isst/Trinkst du gern …?', 'Ja, sehr gern.', 'Nein, nicht so gern.'],
              ['Was essen Sie / isst du gern? · Was trinken Sie / trinkst du gern?', 'Ich esse/trinke gern …', 'Ich esse/trinke nicht gern …']
            ]}
          ]}
        ]
      },

      /* ------------------------------------------------ p. 49 */
      {
        n: 6, color: 'verde', icono: 'comida', titulo: 'Was essen Sie? (p. 49)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: 'Meta: hablar de lo que comes. Tres textos (en el libro, una encuesta en grupos de tres: cada uno lee un texto y toma notas).' },
          { tipo: 'lectura', modo: 'texto', etiqueta: 'LIBRO', titulo: 'Text 1 · Maria, Nikolaj und Lina Hepp',
            lineas: [
              { de: 'Wir frühstücken morgens zusammen. Mein Mann und ich essen Brot mit Käse oder Schinken. Lina isst Müsli mit Milch.', es: 'Desayunamos juntos por la mañana. Mi marido y yo comemos pan con queso o jamón. Lina come muesli con leche.' },
              { de: 'Am Mittag isst Lina im Kindergarten und Nikolaj isst in der Arbeit nur ein Brötchen. Ich esse in der Kantine oft Nudeln oder eine Suppe.', es: 'Al mediodía Lina come en el jardín infantil y Nikolaj come en el trabajo solo un panecillo. Yo como a menudo pasta o una sopa en la cantina.' },
              { de: 'Nachmittags esse ich manchmal ein Stück Schokolade.', es: 'Por la tarde a veces como un trozo de chocolate.' },
              { de: 'Abends um sieben essen wir dann alle zusammen: Wir mögen gerne Fisch oder Fleisch mit Gemüse und Reis oder Kartoffeln. Und wir trinken gern Saft und Wasser.', es: 'Por la noche a las siete comemos entonces todos juntos: nos gusta el pescado o la carne con verdura y arroz o papas. Y bebemos con gusto jugo y agua.' }
            ],
            glosario: [{ de: 'der Kindergarten', es: 'jardín de infancia' }, { de: 'die Kantine', es: 'cantina / comedor' }, { de: 'zusammen', es: 'juntos' }, { de: 'manchmal', es: 'a veces' }]
          },
          { tipo: 'lectura', modo: 'texto', etiqueta: 'LIBRO', titulo: 'Text 2 · Lars und Ben Geiger',
            lineas: [
              { de: 'Von Montag bis Freitag frühstücke ich nur schnell und allein: Ich bin schon um halb sechs wach. Vormittags esse ich dann oft noch einen Joghurt.', es: 'De lunes a viernes desayuno solo y rápido: ya estoy despierto a las cinco y media. A media mañana suelo comer todavía un yogur.' },
              { de: 'Aber am Wochenende essen wir zusammen. Zum Frühstück mag ich sehr gerne Obst: Äpfel, Birnen oder Bananen. Obst schmeckt gut und ist gesund. Lars mag Brötchen mit Marmelade.', es: 'Pero el fin de semana comemos juntos. En el desayuno me gusta mucho la fruta: manzanas, peras o plátanos. La fruta sabe bien y es sana. A Lars le gustan los panecillos con mermelada.' },
              { de: 'Mittags essen wir meistens nichts. Am Nachmittag mögen wir gern Kuchen und abends essen wir oft Brot, Salat oder eine Suppe.', es: 'Al mediodía casi nunca comemos nada. Por la tarde nos gusta el pastel y por la noche comemos a menudo pan, ensalada o sopa.' }
            ],
            glosario: [{ de: 'wach', es: 'despierto' }, { de: 'schnell', es: 'rápido' }, { de: 'das Obst', es: 'la fruta' }, { de: 'gesund', es: 'sano' }, { de: 'meistens', es: 'casi siempre' }]
          },
          { tipo: 'lectura', modo: 'texto', etiqueta: 'LIBRO', titulo: 'Text 3 · Emma Baumeister',
            lineas: [
              { de: 'Zum Frühstück esse ich zwei Brötchen mit Butter, Käse und Wurst. Am Wochenende frühstücke ich am Morgen nicht – ich schlafe lang.', es: 'En el desayuno como dos panecillos con mantequilla, queso y embutido. El fin de semana no desayuno por la mañana: duermo hasta tarde.' },
              { de: 'Mittags kaufe ich einen Döner oder eine Pizza. Ich habe nur wenig Zeit und esse allein.', es: 'Al mediodía compro un döner o una pizza. Tengo poco tiempo y como sola.' },
              { de: 'Am Abend koche ich oft Fisch, manchmal mache ich auch Sushi. Ich mag asiatisches Essen, lecker!', es: 'Por la noche cocino a menudo pescado, a veces hago también sushi. Me gusta la comida asiática, ¡rica!' }
            ],
            glosario: [{ de: 'lang schlafen', es: 'dormir hasta tarde' }, { de: 'wenig Zeit', es: 'poco tiempo' }, { de: 'asiatisch', es: 'asiático' }]
          },
          { tipo: 'recuadro', clase: 'G', etiqueta: 'LIBRO', titulo: 'mögen', bloques: [
            { tipo: 'tabla', encabezados: ['', 'mögen', '', 'mögen'], filas: [
              ['ich', 'mag', 'wir', 'mögen'],
              ['du', 'magst', 'ihr', 'mögt'],
              ['er/es/sie', 'mag', 'sie/Sie', 'mögen']
            ]},
            { tipo: 'ejemplos', items: [
              { de: 'Ich esse gern Schokolade. = Ich mag Schokolade.', es: 'Me gusta comer chocolate. = Me gusta el chocolate.' }
            ]},
            { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] mögen es irregular en singular (a en lugar de ö: ich mag, du magst, er mag). Es como "gustar a": mejor traducirlo con el sujeto que ama: Ich mag Fisch = Me gusta el pescado.' }
          ]},
          { tipo: 'texto', texto: '[LIBRO] 9a. Completa esta tabla con lo que lees (el libro ya escribe: Maria Hepp · morgens: Brot mit Käse oder Schinken · mittags: Nudeln; Nikolaj Hepp · mittags: Brötchen).' },
          { tipo: 'tabla', encabezados: ['Wer?', 'morgens', 'vormittags', 'mittags', 'nachmittags', 'abends'], filas: [
            ['Maria Hepp', 'Brot mit Käse oder Schinken', '–', 'Nudeln, Suppe (Kantine)', 'manchmal Schokolade', 'Fisch/Fleisch mit Gemüse, Reis, Kartoffeln'],
            ['Nikolaj Hepp', 'Brot mit Käse oder Schinken', '–', 'Brötchen (Arbeit)', '–', 'Fisch/Fleisch mit Gemüse, Reis, Kartoffeln']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Las celdas de "–" son lo que el texto no dice. Los demás los puedes ver en los textos de arriba.' },
          { tipo: 'recuadro', clase: 'G', etiqueta: 'LIBRO', titulo: 'Positionen im Satz', bloques: [
            { tipo: 'tabla', encabezados: ['Posición 1', 'Posición 2', '', ''], filas: [
              ['Lina', 'isst', 'morgens', 'Müsli.'],
              ['Morgens', 'isst', 'Lina', 'Müsli.']
            ]},
            { tipo: 'texto', texto: 'Das Verb steht auf Position 2. Das Subjekt steht vor oder nach dem Verb.' }
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'Morgens mag Lina …', es: 'Por la mañana a Lina le gusta … (modelo 9b del libro)' },
            { de: 'Maria isst mittags …', es: 'María come al mediodía … (modelo 9b del libro)' }
          ]},
          { tipo: 'recuadro', clase: 'frases', etiqueta: 'LIBRO', titulo: '9c · Was essen Sie wann? Escribe un texto como el de 9a', bloques: [
            { tipo: 'tabla', encabezados: ['', ''], filas: [
              ['Zum Frühstück esse ich …', 'Nachmittags / Am Nachmittag trinke/esse ich gern …'],
              ['Vormittags / Am Vormittag …', 'Abends / Am Abend mag ich (gern) …'],
              ['Mittags mag ich …', 'Ich trinke/esse oft …']
            ]}
          ]}
        ]
      },

      /* ------------------------------------------------ p. 50 */
      {
        n: 7, color: 'azul', icono: 'idea', titulo: 'Wörter lernen (p. 50)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: 'Estrategia de aprendizaje: cómo ordenar y memorizar vocabulario.' },
          { tipo: 'texto', texto: '[LIBRO] 10a. Haz un Mindmap (mapa mental) en grupo, en póster. El libro lo muestra con "Essen und Trinken" en el centro y cuatro ramas:' },
          { tipo: 'tabla', encabezados: ['Rama', 'Ejemplo escrito a mano en el libro'], filas: [
            ['Lebensmittel (alimentos)', 'das Brot'],
            ['Getränke (bebidas)', 'das Wasser'],
            ['Geschäfte (tiendas)', 'die Bäckerei'],
            ['Mahlzeiten (comidas)', 'das Frühstück']
          ]},
          { tipo: 'texto', texto: '[LIBRO] 10b. Palabras que van de a pares (¿qué palabras suelen ir juntas?). Ejemplo del libro: das Brot und die Brötchen. Completa tú:' },
          { tipo: 'tabla', encabezados: ['Izquierda', 'Derecha (tu respuesta)', 'Izquierda', 'Derecha (tu respuesta)'], filas: [
            ['das Brot und', 'die Brötchen (ejemplo del libro)', 'der Kaffee und', '…'],
            ['das Salz und', '…', 'Obst und', '…'],
            ['der Essig und', '…', 'Essen und', '…']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Parejas típicas para ayudarte (no vienen en el libro): das Salz und der Pfeffer · der Essig und das Öl · der Kaffee und der Kuchen / die Milch · Obst und Gemüse · Essen und Trinken.' },
          { tipo: 'texto', texto: '[LIBRO] 10c. ¿Qué palabras van juntas para ti? Forma grupos de palabras y compáralos en clase:' },
          { tipo: 'ejemplos', items: [
            { de: 'der Abend | alt | die Arbeit | der Beruf | bitte | danke | essen | der Film | Frau | hallo', es: 'las primeras diez palabras de la lista del libro' },
            { de: 'Herr | das Hobby | das Kino | links | Montag | der Morgen | neu | rechts | Sonntag | trinken | tschüss | die Woche | das Wochenende', es: 'el resto de la lista' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '[LIBRO] Ejemplos de grupos escritos a mano: "der Morgen – der Abend", "die Arbeit – der Beruf – das Hobby"; y una cadena de asociaciones: "Wochenende – Sonntag – das Hobby – der Film – …".' },
          { tipo: 'recuadro', clase: '!', etiqueta: 'LIBRO', titulo: 'Wörter lernen', bloques: [
            { tipo: 'texto', texto: 'Lernen Sie Wörter mit vielen Methoden:' },
            { tipo: 'lista', items: [
              'in thematischen Gruppen / Mindmaps',
              'in Paaren',
              'Sammeln Sie: Was fällt Ihnen zu einem Wort ein? (freie Assoziationen)'
            ]},
            { tipo: 'aviso', icono: 'idea', texto: 'Nota: el borde de la foto cortaba las palabras "Methoden" y "Mindmaps"; las reconstruyo por el contexto.' }
          ]}
        ]
      },

      /* ------------------------------------------------ p. 51 */
      {
        n: 8, color: 'rojo', icono: 'personas', titulo: 'Berufe rund ums Essen (p. 51)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: 'Meta: entender textos con las preguntas W (Wer? Was? Wann? Wo? Wie?). Menú del libro: Bäcker | Hotelfachfrau | Koch | Kellner | Landwirt.' },
          { tipo: 'recuadro', clase: '!', etiqueta: 'LIBRO', titulo: 'Wichtige Informationen in Texten verstehen', bloques: [
            { tipo: 'texto', texto: 'W-Fragen helfen: Wer? Was? Wann? Wo? Wie?' }
          ]},
          { tipo: 'lectura', modo: 'texto', etiqueta: 'LIBRO', titulo: 'Berufswahl leicht gemacht – von A–Z · Koch am Bodensee (11)',
            contexto: 'El libro pide leer el texto y las preguntas, marcar la información en el texto y responder.',
            lineas: [
              { de: 'Max Schmidt und sein Chef planen zusammen das Essen für die Woche. Dann geht Max Schmidt auf den Markt. Er kauft Tomaten, Champignons und Salat. Kartoffeln und Zwiebeln braucht er auch. Dann kauft er noch frischen Fisch.', es: 'Max Schmidt y su jefe planean juntos la comida de la semana. Luego Max Schmidt va al mercado. Compra tomates, champiñones y lechuga. También necesita papas y cebollas. Después compra todavía pescado fresco.' },
              { de: 'Max Schmidt arbeitet seit zwei Jahren als Koch im Restaurant „Esszimmer“ in der Altstadt von Konstanz. Da gibt es jeden Tag ein anderes Fischgericht: Fische frisch aus dem Bodensee.', es: 'Max Schmidt trabaja desde hace dos años como cocinero en el restaurante «Esszimmer» en el casco antiguo de Constanza. Allí hay cada día un plato de pescado distinto: pescados frescos del lago de Constanza (Bodensee).' },
              { de: 'Zurück im Restaurant wäscht, schält und schneidet er das Gemüse. Der Chef bereitet den Fisch zu. Paula, eine Kollegin, macht das Dessert. Max mag seine Arbeit. Er sagt: „Kochen ist mein Beruf, aber auch mein Hobby.“', es: 'De vuelta en el restaurante lava, pela y corta la verdura. El jefe prepara el pescado. Paula, una compañera, hace el postre. A Max le gusta su trabajo. Dice: «Cocinar es mi profesión, pero también mi pasatiempo».' },
              { de: '„Ich arbeite gern in einem kleinen Team und die Kollegen sind sehr nett. Kochen ist auch sehr kreativ – das macht viel Spaß. Ich probiere gerne neue Gerichte. Oft haben wir viele Gäste. Das ist dann echt stressig!', es: '«Trabajo a gusto en un equipo pequeño y los compañeros son muy amables. Cocinar es también muy creativo: me divierte mucho. Me gusta probar platos nuevos. A menudo tenemos muchos clientes. ¡Entonces es muy estresante de verdad!' },
              { de: 'Und die Arbeitszeiten sind nicht toll. Ich arbeite normalerweise von 6 bis 15 Uhr oder von 13 bis 22 Uhr. Am Wochenende arbeite ich abends oft noch länger. Das ist natürlich nicht so schön. Ich habe nicht viel Freizeit und wenig Zeit für meine Freunde.“', es: 'Y los horarios no son geniales. Normalmente trabajo de 6 a 15 h o de 13 a 22 h. El fin de semana trabajo por la noche a menudo todavía más tiempo. Eso naturalmente no es tan bonito. No tengo mucho tiempo libre y poco tiempo para mis amigos».' }
            ],
            glosario: [
              { de: 'der Chef', es: 'el jefe' },
              { de: 'die Altstadt', es: 'el casco antiguo' },
              { de: 'das Gericht', es: 'el plato (de comida)' },
              { de: 'waschen / schälen / schneiden', es: 'lavar / pelar / cortar' },
              { de: 'zubereiten', es: 'preparar (comida)' },
              { de: 'stressig', es: 'estresante' },
              { de: 'normalerweise', es: 'normalmente' },
              { de: 'die Freizeit', es: 'el tiempo libre' }
            ]
          },
          { tipo: 'texto', texto: '[LIBRO] Las cinco preguntas del libro y respuestas según el texto:' },
          { tipo: 'tabla', encabezados: ['Pregunta', 'Respuesta (del texto)'], filas: [
            ['1. Wo arbeitet Max Schmidt?', 'Im Restaurant „Esszimmer“ in der Altstadt von Konstanz. (marcado en amarillo en el libro)'],
            ['2. Was macht er auf dem Markt?', 'Er kauft Tomaten, Champignons, Salat, Kartoffeln, Zwiebeln und frischen Fisch.'],
            ['3. Was macht er im Restaurant?', 'Er wäscht, schält und schneidet das Gemüse.'],
            ['4. Wie findet er seinen Beruf?', 'Er mag seine Arbeit (Team, Kollegen nett, kreativ, macht Spaß), aber es ist oft stressig und die Arbeitszeiten sind nicht toll.'],
            ['5. Wann arbeitet er?', 'Normalerweise von 6 bis 15 Uhr oder von 13 bis 22 Uhr; am Wochenende abends oft länger.']
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'Max Schmidt arbeitet im Restaurant …', es: 'Max Schmidt trabaja en el restaurante … (inicio de respuesta del libro)' }
          ]}
        ]
      },

      /* ------------------------------------------------ p. 52 */
      {
        n: 9, color: 'rosa', icono: 'comida', titulo: 'Die Netzwerk-WG (p. 52)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: 'Sección de vídeo ("hören und sehen"): escenas 8 y 9. Bea, Anna, Max y Luca viven juntos (WG = Wohngemeinschaft = piso compartido).' },
          { tipo: 'texto', texto: '[LIBRO] 12a. Beas Idee (escena 8): ¿Qué quiere hacer la WG por la tarde? Completa: "Bea, Anna, Max und Luca wollen zusammen ___." (el audio/vídeo lo dice; el libro lo trabaja en la escena 9: hornear un pastel).' },
          { tipo: 'texto', texto: '[LIBRO] 12b. Anna y Luca van al supermercado. ¿Cuál es la lista de la compra correcta? Tres listas (A, B, C):' },
          { tipo: 'tabla', encabezados: ['A', 'B', 'C'], filas: [
            ['Kaffee', 'Zucker', 'Zucker'],
            ['Milch', 'Eier', 'Eier'],
            ['Mehl', 'Mehl', 'Mehl'],
            ['Eier', 'Äpfel', 'Brot'],
            ['Zucker', 'Butter', 'Müsli'],
            ['Orangensaft', 'Orangensaft', 'Orangensaft'],
            ['Cola', 'Cola', 'Cola'],
            ['Sahne', 'Sahne', 'Sahne']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Pista: para un Apfelkuchen necesitas manzanas (Äpfel), harina (Mehl), azúcar (Zucker), huevos (Eier) y mantequilla (Butter): eso lo tiene la lista B. Confírmalo con la escena 8 del vídeo del libro.' },
          { tipo: 'texto', texto: '[LIBRO] 12c. ¿Y qué compran Anna y Luca? Completa seis palabras que empiezan con: Ä…, B…, T…, eine G…, S…, K… (el libro da solo las letras iniciales).' },
          { tipo: 'texto', texto: '[LIBRO] 13a. Der WG-Nachmittag (escena 9): ordena las fotos A–F. 13b. ¿Qué pasa? Ordena las frases según las fotos y léelas en pareja:' },
          { tipo: 'lectura', modo: 'texto', etiqueta: 'LIBRO', titulo: '13b · Las seis frases (el libro marca "B5" en la primera)',
            contexto: 'En la foto del libro el margen derecho corta las frases 5 y 6; lo cortado va entre […].',
            lineas: [
              { de: '1. Alle trinken Kaffee und essen Kuchen.', es: '1. Todos beben café y comen pastel.' },
              { de: '2. Bea und Max machen einen Apfelkuchen.', es: '2. Bea y Max hacen un pastel de manzana.' },
              { de: '3. Max findet Mehl und Zucker.', es: '3. Max encuentra harina y azúcar.' },
              { de: '4. Max braucht Eier. Er geht zu Frau Müller.', es: '4. Max necesita huevos. Va a casa de la señora Müller.' },
              { de: '5. Anna und Luca kommen mi[t …] nach Hause. Jetzt haben sie zu v[iel] Apfelkuchen.', es: '5. Anna y Luca llegan a casa con […]. Ahora tienen demasiado pastel de manzana.' },
              { de: '6. Max bringt Frau Müller ein St[ück] Kuchen.', es: '6. Max le lleva a la señora Müller un trozo de pastel.' }
            ]
          },
          { tipo: 'texto', texto: '[LIBRO] 13c. Tu pastel favorito: ¿qué necesitas para hornearlo? Anótalo (tarea abierta).' }
        ]
      },

      /* ------------------------------------------------ p. 53 */
      {
        n: 10, color: 'azul', icono: 'mensaje', titulo: 'Kurz und klar (p. 53)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'recuadro', clase: 'frases', etiqueta: 'LIBRO', titulo: 'Gespräche beim Einkauf führen', bloques: [
            { tipo: 'tabla', encabezados: ['Preguntas / frases', 'Respuestas'], filas: [
              ['Bitte? Was möchten Sie?', 'Ich möchte …, bitte. Haben Sie …?'],
              ['Sonst noch etwas?', 'Ja, ich brauche noch … / Nein, danke.'],
              ['Ist das alles?', 'Ja, danke. / Nein, ich nehme bitte noch …'],
              ['Wo finde ich …? / Wo gibt es …?', 'Dort rechts/links/geradeaus.'],
              ['Was kostet/kosten …? / Wie viel kostet/kosten …?', 'Das kostet … / Sie kosten …'],
              ['Können Sie wechseln?', 'Ja, Moment.']
            ]}
          ]},
          { tipo: 'recuadro', clase: 'frases', etiqueta: 'LIBRO', titulo: 'Gespräche beim Essen führen', bloques: [
            { tipo: 'tabla', encabezados: ['Preguntas / frases', 'Respuestas'], filas: [
              ['Guten Appetit!', 'Danke, gleichfalls!'],
              ['Möchtest du noch …? / Möchten Sie noch …?', 'Ja, bitte. … schmeckt/schmecken sehr gut.'],
              ['', 'Ja, gerne. … ist/sind sehr lecker.'],
              ['', 'Nein, danke. Ich esse keinen/kein/keine …'],
              ['', 'Nein, danke. Ich bin satt.']
            ]}
          ]},
          { tipo: 'recuadro', clase: 'frases', etiqueta: 'LIBRO', titulo: 'über Vorlieben beim Essen sprechen', bloques: [
            { tipo: 'tabla', encabezados: ['Preguntas', 'Respuestas'], filas: [
              ['Essen/Trinken Sie gern …? / Isst/Trinkst du gern …?', 'Ja, sehr gern. / Nein, nicht so gern.'],
              ['Was essen Sie / isst du (nicht) gern?', 'Ich esse/trinke (nicht) gern …'],
              ['Was trinken Sie / trinkst du (nicht) gern?', 'Ich mag … (sehr/nicht) gern.'],
              ['', 'Ich mag keinen/kein/keine …']
            ]}
          ]},
          { tipo: 'recuadro', clase: 'frases', etiqueta: 'LIBRO', titulo: 'über Essen sprechen', bloques: [
            { tipo: 'tabla', encabezados: ['', ''], filas: [
              ['Zum Frühstück trinke/esse ich …', 'Nachmittags / Am Nachmittag trinke/esse ich gern …'],
              ['Vormittags / Am Vormittag trinke/esse ich …', 'Abends / Am Abend mag ich (gern) …'],
              ['Mittags mag ich …', 'Ich trinke/esse oft …']
            ]}
          ]},
          { tipo: 'recuadro', clase: 'G', etiqueta: 'LIBRO', titulo: 'unregelmäßige Verben', bloques: [
            { tipo: 'tabla', encabezados: ['', 'essen', 'mögen', 'möchten'], filas: [
              ['ich', 'esse', 'mag', 'möchte'],
              ['du', 'isst', 'magst', 'möchtest'],
              ['er/es/sie', 'isst', 'mag', 'möchte'],
              ['wir', 'essen', 'mögen', 'möchten'],
              ['ihr', 'esst', 'mögt', 'möchtet'],
              ['sie/Sie', 'essen', 'mögen', 'möchten']
            ]}
          ]},
          { tipo: 'recuadro', clase: 'G', etiqueta: 'LIBRO', titulo: 'Positionen im Satz', bloques: [
            { tipo: 'tabla', encabezados: ['', '', '', ''], filas: [
              ['Lina', 'isst', 'morgens', 'Müsli.'],
              ['Morgens', 'isst', 'Lina', 'Müsli.']
            ]},
            { tipo: 'texto', texto: 'Das Verb steht auf Position 2. Das Subjekt steht vor oder nach dem Verb.' }
          ]},
          { tipo: 'recuadro', clase: 'G', etiqueta: 'LIBRO', titulo: 'Artikel: Nominativ und Akkusativ', bloques: [
            { tipo: 'tabla', encabezados: ['', 'Nominativ', 'Akkusativ'], filas: [
              ['maskulin', 'der/ein/kein Käse', 'den/einen/keinen Käse'],
              ['neutrum', 'das/ein/kein Brot', 'das/ein/kein Brot'],
              ['feminin', 'die/eine/keine Gurke', 'die/eine/keine Gurke'],
              ['Plural', 'die/–/keine Tomaten', 'die/–/keine Tomaten']
            ]}
          ]},
          { tipo: 'recuadro', clase: 'G', etiqueta: 'LIBRO', titulo: 'Verben mit Akkusativ', bloques: [
            { tipo: 'tabla', encabezados: ['Wir', 'Verbo', 'Objeto'], filas: [
              ['Wir', 'brauchen', 'eine Gurke.'],
              ['Wir', 'haben', 'keinen Käse.'],
              ['Wir', 'machen', 'einen Salat.'],
              ['Wir', 'kochen', 'keine Suppe.'],
              ['Wir', 'essen', 'das Fleisch.'],
              ['Wir', 'kaufen', 'die Getränke.'],
              ['Wir', 'nehmen', 'den Schinken.'],
              ['Wir', 'mögen', 'Schokolade.'],
              ['Wir', 'möchten', 'ein Würstchen.']
            ]}
          ]}
        ]
      }

    ]
  }
});
