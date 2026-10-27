/* ============================================================
   data/conversaciones.js — Conversaciones de todos los días
   ------------------------------------------------------------
   Diálogos cortos y reales (formales con Sie, informales con du),
   cada uno con traducción plegable, palabras clave y las frases
   que puedes reutilizar. Pulsa el altavoz para oír el diálogo entero.
   ============================================================ */

DE.registrarLeccion({
  id: 'conversaciones',
  titulo: 'Conversaciones de todos los días',
  icono: 'mensaje',
  grupo: 'Hablar y escribir',
  color: 'turquesa',
  resumen: 'Ocho diálogos reales (café, panadería, calle, citas, teléfono, tren…) con traducción al español.',
  vista: 'infografia',

  datos: {
    titulo: 'Conversaciones',
    subtitulo: 'para usar mañana mismo',
    cinta: 'du = amigos · Sie = formal',
    resumen: 'Léelos en voz alta, imita el ritmo y después tápate un lado y responde tú. Pulsa "Ver traducción" cuando lo necesites.',

    tarjetas: [
      {
        n: 1, color: 'azul', icono: 'personas', titulo: 'Conocer a alguien (du)', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'lectura', modo: 'dialogo', nombres: true, titulo: 'Kennenlernen', contexto: 'Dos estudiantes se conocen en el curso de alemán. Tuteo (du).',
            lineas: [
              { q: 'Tim', de: 'Hallo! Ich bin Tim. Und du?', es: '¡Hola! Soy Tim. ¿Y tú?' },
              { q: 'Nayeli', de: 'Hallo, Tim! Ich heiße Nayeli.', es: '¡Hola, Tim! Me llamo Nayeli.' },
              { q: 'Tim', de: 'Woher kommst du, Nayeli?', es: '¿De dónde eres, Nayeli?' },
              { q: 'Nayeli', de: 'Ich komme aus Honduras. Und du?', es: 'Soy de Honduras. ¿Y tú?' },
              { q: 'Tim', de: 'Ich komme aus Köln. Sprichst du Englisch?', es: 'Soy de Colonia. ¿Hablas inglés?' },
              { q: 'Nayeli', de: 'Ja, ein bisschen. Und Spanisch natürlich.', es: 'Sí, un poco. Y español, por supuesto.' },
              { q: 'Tim', de: 'Schön! Freut mich.', es: '¡Qué bien! Encantado.' },
              { q: 'Nayeli', de: 'Freut mich auch!', es: 'Encantada también.' }
            ],
            glosario: [{ de: 'ein bisschen', es: 'un poco' }, { de: 'natürlich', es: 'por supuesto' }, { de: 'Freut mich', es: 'encantado/a' }] },
          { tipo: 'recuadro', clase: 'frases', etiqueta: 'EXTRA', titulo: 'Para reutilizar', bloques: [
            { tipo: 'ejemplos', items: [
              { de: 'Ich heiße … / Ich bin …', es: 'Me llamo … / Soy …' },
              { de: 'Woher kommst du?', es: '¿De dónde eres?' },
              { de: 'Freut mich!', es: '¡Encantado/a!' }
            ]}
          ]}
        ]
      },
      {
        n: 2, color: 'naranja', icono: 'cafe', titulo: 'En el café (Sie)', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'lectura', modo: 'dialogo', nombres: true, titulo: 'Im Café', contexto: 'Pides algo en un café. Trato formal (Sie) con el camarero.',
            lineas: [
              { q: 'Kellner', de: 'Guten Tag! Was möchten Sie trinken?', es: '¡Buenas tardes! ¿Qué desea beber?' },
              { q: 'Gast', de: 'Einen Kaffee und ein Wasser, bitte.', es: 'Un café y un agua, por favor.' },
              { q: 'Kellner', de: 'Gern. Möchten Sie auch etwas essen?', es: 'Con gusto. ¿Desea también algo de comer?' },
              { q: 'Gast', de: 'Ja, ein Stück Kuchen. Was haben Sie?', es: 'Sí, un trozo de pastel. ¿Qué tienen?' },
              { q: 'Kellner', de: 'Wir haben Apfelkuchen und Schokoladenkuchen.', es: 'Tenemos pastel de manzana y de chocolate.' },
              { q: 'Gast', de: 'Dann nehme ich den Apfelkuchen.', es: 'Entonces tomo el de manzana.' },
              { q: 'Gast', de: 'Zahlen, bitte!', es: '¡La cuenta, por favor!' },
              { q: 'Kellner', de: 'Das macht sieben Euro fünfzig.', es: 'Son siete euros cincuenta.' }
            ],
            glosario: [{ de: 'das Stück', es: 'el trozo' }, { de: 'der Kuchen', es: 'el pastel' }, { de: 'etwas', es: 'algo' }] },
          { tipo: 'recuadro', clase: 'dicho', etiqueta: 'EXTRA', titulo: 'Gut gesagt', bloques: [
            { tipo: 'texto', texto: 'Con el camarero basta "Ich nehme…" (tomo…) o "Ich hätte gern…" (quisiera…, muy cortés). "Ich will" suena exigente.' }
          ]}
        ]
      },
      {
        n: 3, color: 'amarillo', icono: 'bolsa', titulo: 'En la panadería', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'lectura', modo: 'dialogo', nombres: true, titulo: 'In der Bäckerei', contexto: 'Compras pan por la mañana.',
            lineas: [
              { q: 'Verkäuferin', de: 'Guten Morgen! Was darf es sein?', es: '¡Buenos días! ¿Qué desea?' },
              { q: 'Kunde', de: 'Guten Morgen! Vier Brötchen, bitte.', es: '¡Buenos días! Cuatro panecillos, por favor.' },
              { q: 'Verkäuferin', de: 'Sonst noch etwas?', es: '¿Algo más?' },
              { q: 'Kunde', de: 'Ja, ein Brot. Was kostet das?', es: 'Sí, un pan. ¿Cuánto cuesta?' },
              { q: 'Verkäuferin', de: 'Drei Euro zwanzig. Das macht zusammen fünf Euro zehn.', es: 'Tres euros veinte. En total son cinco euros diez.' },
              { q: 'Kunde', de: 'Hier, bitte.', es: 'Tome.' },
              { q: 'Verkäuferin', de: 'Danke schön! Schönen Tag noch!', es: '¡Muchas gracias! ¡Que tenga un buen día!' },
              { q: 'Kunde', de: 'Danke, gleichfalls!', es: '¡Gracias, igualmente!' }
            ],
            glosario: [{ de: 'das Brötchen', es: 'el panecillo' }, { de: 'Was darf es sein?', es: '¿Qué desea?' }, { de: 'sonst noch etwas', es: '¿algo más?' }, { de: 'gleichfalls', es: 'igualmente' }] }
        ]
      },
      {
        n: 4, color: 'rojo', icono: 'brujula', titulo: 'Preguntar el camino (Sie)', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'lectura', modo: 'dialogo', nombres: true, titulo: 'Nach dem Weg fragen', contexto: 'En la calle preguntas a un desconocido.',
            lineas: [
              { q: 'Nayeli', de: 'Entschuldigung, wie komme ich zum Bahnhof?', es: 'Disculpe, ¿cómo llego a la estación?' },
              { q: 'Passant', de: 'Gehen Sie geradeaus bis zur Ampel.', es: 'Siga recto hasta el semáforo.' },
              { q: 'Nayeli', de: 'Und dann?', es: '¿Y luego?' },
              { q: 'Passant', de: 'Dann gehen Sie rechts. Der Bahnhof ist links.', es: 'Luego gire a la derecha. La estación está a la izquierda.' },
              { q: 'Nayeli', de: 'Ist es weit?', es: '¿Está lejos?' },
              { q: 'Passant', de: 'Nein, nur fünf Minuten zu Fuß.', es: 'No, solo cinco minutos a pie.' },
              { q: 'Nayeli', de: 'Vielen Dank!', es: '¡Muchas gracias!' },
              { q: 'Passant', de: 'Gern geschehen!', es: '¡De nada!' }
            ],
            glosario: [{ de: 'zu Fuß', es: 'a pie' }, { de: 'weit', es: 'lejos' }, { de: 'Gern geschehen', es: 'de nada' }] }
        ]
      },
      {
        n: 5, color: 'morado', icono: 'calendario', titulo: 'Quedar con un amigo (du)', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'lectura', modo: 'dialogo', nombres: true, titulo: 'Verabredung', contexto: 'Mensajes o llamada entre amigos. Tuteo.',
            lineas: [
              { q: 'Lena', de: 'Hast du morgen Zeit?', es: '¿Tienes tiempo mañana?' },
              { q: 'Ben', de: 'Ja, warum?', es: 'Sí, ¿por qué?' },
              { q: 'Lena', de: 'Wollen wir ins Kino gehen?', es: '¿Vamos al cine?' },
              { q: 'Ben', de: 'Gern! Wann fängt der Film an?', es: '¡Con gusto! ¿Cuándo empieza la película?' },
              { q: 'Lena', de: 'Um halb acht.', es: 'A las siete y media.' },
              { q: 'Ben', de: 'Okay, das passt. Wo treffen wir uns?', es: 'Vale, me va bien. ¿Dónde quedamos?' },
              { q: 'Lena', de: 'Am Bahnhof, um Viertel nach sieben.', es: 'En la estación, a las siete y cuarto.' },
              { q: 'Ben', de: 'Super! Bis morgen!', es: '¡Genial! ¡Hasta mañana!' }
            ],
            glosario: [{ de: 'warum', es: 'por qué' }, { de: 'passen', es: 'convenir, ir bien' }, { de: 'sich treffen', es: 'quedar, encontrarse' }] },
          { tipo: 'aviso', icono: 'alerta', texto: 'halb acht = 7:30 (no 8:30). Viertel nach sieben = 7:15.' }
        ]
      },
      {
        n: 6, color: 'verde', icono: 'telefono', titulo: 'Por teléfono (Sie)', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'lectura', modo: 'dialogo', nombres: true, titulo: 'Am Telefon', contexto: 'Llamas a una empresa.',
            lineas: [
              { q: 'Empfang', de: 'Firma Weber, guten Tag!', es: 'Empresa Weber, ¡buenos días!' },
              { q: 'Nayeli', de: 'Guten Tag, hier ist Nayeli Guillén. Kann ich bitte Frau Müller sprechen?', es: 'Buenos días, le habla Nayeli Guillén. ¿Puedo hablar con la señora Müller, por favor?' },
              { q: 'Empfang', de: 'Einen Moment, bitte … Es tut mir leid, sie ist nicht da.', es: 'Un momento, por favor… Lo siento, no está.' },
              { q: 'Nayeli', de: 'Dann rufe ich später noch einmal an.', es: 'Entonces vuelvo a llamar más tarde.' },
              { q: 'Empfang', de: 'Gern. Auf Wiederhören!', es: 'Con gusto. ¡Hasta luego! (por teléfono)' },
              { q: 'Nayeli', de: 'Auf Wiederhören!', es: '¡Hasta luego!' }
            ],
            glosario: [{ de: 'Es tut mir leid', es: 'lo siento' }, { de: 'noch einmal', es: 'otra vez' }, { de: 'Auf Wiederhören', es: 'adiós (solo por teléfono)' }] }
        ]
      },
      {
        n: 7, color: 'azul', icono: 'maletin', titulo: 'En la estación', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'lectura', modo: 'dialogo', nombres: true, titulo: 'Am Bahnhof', contexto: 'Compras un billete de tren.',
            lineas: [
              { q: 'Nayeli', de: 'Eine Fahrkarte nach Bonn, bitte.', es: 'Un billete a Bonn, por favor.' },
              { q: 'Verkäufer', de: 'Einfach oder hin und zurück?', es: '¿Solo ida o ida y vuelta?' },
              { q: 'Nayeli', de: 'Hin und zurück. Was kostet das?', es: 'Ida y vuelta. ¿Cuánto cuesta?' },
              { q: 'Verkäufer', de: 'Das macht vierzehn Euro achtzig.', es: 'Son catorce euros ochenta.' },
              { q: 'Nayeli', de: 'Von welchem Gleis fährt der Zug ab?', es: '¿De qué andén sale el tren?' },
              { q: 'Verkäufer', de: 'Von Gleis drei. Er fährt um zehn Uhr fünfzehn ab.', es: 'Del andén tres. Sale a las diez y quince.' },
              { q: 'Nayeli', de: 'Vielen Dank!', es: '¡Muchas gracias!' }
            ],
            glosario: [{ de: 'die Fahrkarte', es: 'el billete' }, { de: 'einfach', es: 'solo ida' }, { de: 'hin und zurück', es: 'ida y vuelta' }, { de: 'das Gleis', es: 'el andén' }] },
          { tipo: 'aviso', icono: 'idea', texto: 'En la estación se usa la hora OFICIAL: zehn Uhr fünfzehn (10:15), no "Viertel nach zehn".' }
        ]
      },
      {
        n: 8, color: 'rosa', icono: 'comida', titulo: 'En el restaurante', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'lectura', modo: 'dialogo', nombres: true, titulo: 'Im Restaurant', contexto: 'Dos personas piden la comida.',
            lineas: [
              { q: 'Kellner', de: 'Haben Sie schon gewählt?', es: '¿Ya han elegido?' },
              { q: 'Ana', de: 'Ja. Ich nehme die Suppe und einen Salat.', es: 'Sí. Yo tomo la sopa y una ensalada.' },
              { q: 'Kellner', de: 'Und Sie?', es: '¿Y usted?' },
              { q: 'Tom', de: 'Ich möchte das Schnitzel mit Kartoffeln.', es: 'Quisiera el escalope con patatas.' },
              { q: 'Kellner', de: 'Und was möchten Sie trinken?', es: '¿Y qué desean beber?' },
              { q: 'Ana', de: 'Ein Mineralwasser, bitte.', es: 'Un agua mineral, por favor.' },
              { q: 'Tom', de: 'Für mich ein Bier.', es: 'Para mí una cerveza.' },
              { q: 'Tom', de: 'Das Essen war sehr lecker. Wir möchten bitte zahlen.', es: 'La comida estaba muy rica. Quisiéramos pagar, por favor.' },
              { q: 'Kellner', de: 'Zusammen oder getrennt?', es: '¿Juntos o por separado?' },
              { q: 'Ana', de: 'Zusammen, bitte.', es: 'Juntos, por favor.' }
            ],
            glosario: [{ de: 'wählen', es: 'elegir' }, { de: 'lecker', es: 'rico' }, { de: 'zusammen / getrennt', es: 'juntos / por separado' }] },
          { tipo: 'recuadro', clase: 'dicho', etiqueta: 'EXTRA', titulo: 'Gut gesagt', bloques: [
            { tipo: 'texto', texto: 'En Alemania cada uno suele pagar lo suyo: "Zusammen oder getrennt?" es la pregunta normal. Y se deja propina redondeando: "Stimmt so" (quédese con el cambio).' }
          ]}
        ]
      }
    ]
  }
});
