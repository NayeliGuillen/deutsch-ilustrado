/* ============================================================
   data/frases.js — Frases listas para usar hoy mismo
   ------------------------------------------------------------
   `fon` usa la escritura fonética en español: léela tal cual y
   te entenderán. Las MAYÚSCULAS marcan la sílaba tónica.
   ============================================================ */

DE.registrarLeccion({
  id: 'frases',
  titulo: 'Frases para conversar',
  icono: 'mensaje',
  grupo: 'Vocabulario y uso',
  color: 'rosa',
  resumen: 'Expresiones reales para saludar, pedir, viajar y salir del paso.',
  vista: 'frases',

  datos: {
    intro: 'Frases que funcionan hoy mismo en una conversación real. ' +
           'Entre paréntesis, cómo se lee en español. Pulsa cualquiera para escucharla.',

    grupos: [
      {
        id: 'saludos', titulo: 'Saludar y despedirse', icono: 'mensaje', color: 'verde',
        frases: [
          { de: 'Hallo!', fon: 'JA-lo', es: '¡Hola! (informal, a cualquier hora)' },
          { de: 'Guten Morgen!', fon: 'GU-ten MOR-guen', es: '¡Buenos días! (hasta las 11)' },
          { de: 'Guten Tag!', fon: 'GU-ten taac', es: '¡Buenos días/tardes! (saludo estándar)' },
          { de: 'Guten Abend!', fon: 'GU-ten AA-bent', es: '¡Buenas tardes/noches!' },
          { de: 'Gute Nacht!', fon: 'GU-te najt', es: '¡Buenas noches! (al irse a dormir)' },
          { de: 'Auf Wiedersehen!', fon: 'auf VII-dea-seen', es: '¡Hasta la vista! (formal)' },
          { de: 'Tschüss!', fon: 'chius', es: '¡Chao! (informal)' },
          { de: 'Bis bald!', fon: 'bis balt', es: '¡Hasta pronto!' },
          { de: 'Bis morgen!', fon: 'bis MOR-guen', es: '¡Hasta mañana!' },
          { de: 'Servus! / Grüß Gott!', fon: 'SER-vus / grius got', es: 'Hola (Baviera y Austria)' }
        ]
      },
      {
        id: 'cortesia', titulo: 'Cortesía básica', icono: 'corazon', color: 'rosa',
        frases: [
          { de: 'Bitte.', fon: 'BI-te', es: 'Por favor. / De nada. / Aquí tienes.' },
          { de: 'Danke schön.', fon: 'DAN-que shoen', es: 'Muchas gracias.' },
          { de: 'Vielen Dank!', fon: 'FII-len danc', es: '¡Muchísimas gracias!' },
          { de: 'Entschuldigung!', fon: 'ent-SHUL-di-gunc', es: '¡Perdón! / ¡Disculpe!' },
          { de: 'Es tut mir leid.', fon: 'es tut mia lait', es: 'Lo siento.' },
          { de: 'Kein Problem.', fon: 'kain pro-BLEEM', es: 'No hay problema.' },
          { de: 'Gern geschehen.', fon: 'guern gue-SHEE-en', es: 'De nada, con gusto.' },
          { de: 'Wie bitte?', fon: 'vii BI-te', es: '¿Cómo dice? (para que repitan)' }
        ]
      },
      {
        id: 'presentarse', titulo: 'Presentarse', icono: 'personas', color: 'azul',
        frases: [
          { de: 'Wie heißt du?', fon: 'vii jaist du', es: '¿Cómo te llamas?' },
          { de: 'Wie heißen Sie?', fon: 'vii JAI-sen sii', es: '¿Cómo se llama usted? (formal)' },
          { de: 'Ich heiße Ana.', fon: 'ij JAI-se A-na', es: 'Me llamo Ana.' },
          { de: 'Ich bin Ana.', fon: 'ij bin A-na', es: 'Soy Ana.' },
          { de: 'Freut mich!', fon: 'froit mij', es: '¡Mucho gusto!' },
          { de: 'Woher kommst du?', fon: 'vo-JEA komst du', es: '¿De dónde eres?' },
          { de: 'Ich komme aus Mexiko.', fon: 'ij KO-me aus MEX-i-ko', es: 'Soy de México.' },
          { de: 'Wo wohnst du?', fon: 'vo voonst du', es: '¿Dónde vives?' },
          { de: 'Ich wohne in Berlin.', fon: 'ij VOO-ne in ber-LIIN', es: 'Vivo en Berlín.' },
          { de: 'Wie geht es dir?', fon: 'vii gueet es dia', es: '¿Cómo estás?' },
          { de: 'Mir geht es gut, danke.', fon: 'mia gueet es guut DAN-que', es: 'Estoy bien, gracias.' },
          { de: 'Und dir?', fon: 'und dia', es: '¿Y tú?' }
        ]
      },
      {
        id: 'sos', titulo: 'Cuando no entiendes', icono: 'alertaCirc', color: 'rojo',
        frases: [
          { de: 'Ich verstehe nicht.', fon: 'ij fea-SHTEE-e nijt', es: 'No entiendo.' },
          { de: 'Können Sie das wiederholen?', fon: 'KOE-nen sii das vii-dea-JOO-len', es: '¿Puede repetirlo?' },
          { de: 'Sprechen Sie langsamer, bitte.', fon: 'SHPRE-jen sii LANG-sa-mea BI-te', es: 'Hable más despacio, por favor.' },
          { de: 'Sprechen Sie Spanisch?', fon: 'SHPRE-jen sii SHPA-nish', es: '¿Habla español?' },
          { de: 'Ich spreche nur ein bisschen Deutsch.', fon: 'ij SHPRE-je nua ain BIS-jen doich', es: 'Solo hablo un poco de alemán.' },
          { de: 'Wie sagt man das auf Deutsch?', fon: 'vii sact man das auf doich', es: '¿Cómo se dice eso en alemán?' },
          { de: 'Was bedeutet das?', fon: 'vas be-DOI-tet das', es: '¿Qué significa eso?' },
          { de: 'Können Sie mir helfen?', fon: 'KOE-nen sii mia JEL-fen', es: '¿Puede ayudarme?' }
        ]
      },
      {
        id: 'restaurante', titulo: 'En el restaurante', icono: 'cafe', color: 'naranja',
        frases: [
          { de: 'Einen Tisch für zwei, bitte.', fon: 'AI-nen tish fiua tsvai BI-te', es: 'Una mesa para dos, por favor.' },
          { de: 'Die Speisekarte, bitte.', fon: 'dii SHPAI-se-kar-te BI-te', es: 'La carta, por favor.' },
          { de: 'Ich hätte gern einen Kaffee.', fon: 'ij JE-te guern AI-nen KA-fee', es: 'Quisiera un café.' },
          { de: 'Was empfehlen Sie?', fon: 'vas emp-FEE-len sii', es: '¿Qué recomienda?' },
          { de: 'Ich bin Vegetarier.', fon: 'ij bin ve-gue-TAA-ria', es: 'Soy vegetariano.' },
          { de: 'Das schmeckt sehr gut!', fon: 'das shmect sea guut', es: '¡Está buenísimo!' },
          { de: 'Die Rechnung, bitte.', fon: 'dii REJ-nunc BI-te', es: 'La cuenta, por favor.' },
          { de: 'Zusammen oder getrennt?', fon: 'tsu-SA-men O-dea gue-TRENT', es: '¿Junto o separado? (te lo preguntarán)' },
          { de: 'Stimmt so.', fon: 'shtimt so', es: 'Quédese con el cambio.' },
          { de: 'Guten Appetit!', fon: 'GU-ten a-pe-TIIT', es: '¡Buen provecho!' },
          { de: 'Prost!', fon: 'proost', es: '¡Salud! (al brindar)' }
        ]
      },
      {
        id: 'compras', titulo: 'De compras', icono: 'bolsa', color: 'lima',
        frases: [
          { de: 'Was kostet das?', fon: 'vas KOS-tet das', es: '¿Cuánto cuesta esto?' },
          { de: 'Das ist zu teuer.', fon: 'das ist tsu TOI-ea', es: 'Es demasiado caro.' },
          { de: 'Haben Sie das in Größe M?', fon: 'JAA-ben sii das in GROE-se em', es: '¿Lo tiene en talla M?' },
          { de: 'Ich schaue nur, danke.', fon: 'ij SHAU-e nua DAN-que', es: 'Solo estoy mirando, gracias.' },
          { de: 'Ich nehme das.', fon: 'ij NEE-me das', es: 'Me llevo esto.' },
          { de: 'Kann ich mit Karte zahlen?', fon: 'kan ij mit KAR-te TSAA-len', es: '¿Puedo pagar con tarjeta?' },
          { de: 'Eine Tüte, bitte.', fon: 'AI-ne TIU-te BI-te', es: 'Una bolsa, por favor.' }
        ]
      },
      {
        id: 'viaje', titulo: 'Viajar y orientarse', icono: 'ubicacion', color: 'turquesa',
        frases: [
          { de: 'Wo ist der Bahnhof?', fon: 'vo ist dea BAAN-joof', es: '¿Dónde está la estación?' },
          { de: 'Wie komme ich zum Zentrum?', fon: 'vii KO-me ij tsum TSEN-trum', es: '¿Cómo llego al centro?' },
          { de: 'Eine Fahrkarte nach München, bitte.', fon: 'AI-ne FAAR-kar-te naj MIUN-jen BI-te', es: 'Un billete a Múnich, por favor.' },
          { de: 'Wann fährt der nächste Zug?', fon: 'van faert dea NAEJS-te tsuuc', es: '¿Cuándo sale el próximo tren?' },
          { de: 'Ist dieser Platz frei?', fon: 'ist DII-sea plats frai', es: '¿Está libre este asiento?' },
          { de: 'Ich habe mich verlaufen.', fon: 'ij JAA-be mij fea-LAU-fen', es: 'Me he perdido.' },
          { de: 'Wo ist die Toilette?', fon: 'vo ist dii toa-LE-te', es: '¿Dónde está el baño?' },
          { de: 'Links / rechts / geradeaus', fon: 'links / rejts / gue-RAA-de-aus', es: 'Izquierda / derecha / recto' }
        ]
      },
      {
        id: 'tramites', titulo: 'Trámites y trabajo', icono: 'documento', color: 'indigo',
        frases: [
          { de: 'Ich habe einen Termin um 10 Uhr.', fon: 'ij JAA-be AI-nen tea-MIIN um tseen ua', es: 'Tengo una cita a las 10.' },
          { de: 'Ich suche Arbeit.', fon: 'ij SU-je AR-bait', es: 'Busco trabajo.' },
          { de: 'Hier ist mein Lebenslauf.', fon: 'jia ist main LEE-bens-lauf', es: 'Aquí está mi currículum.' },
          { de: 'Ich habe drei Jahre Erfahrung.', fon: 'ij JAA-be drai JAA-re ea-FAA-runc', es: 'Tengo tres años de experiencia.' },
          { de: 'Welche Unterlagen brauche ich?', fon: 'VEL-je UN-tea-laa-guen BRAU-je ij', es: '¿Qué documentos necesito?' },
          { de: 'Können Sie mir das schriftlich geben?', fon: 'KOE-nen sii mia das SHRIFT-lij GUEE-ben', es: '¿Me lo puede dar por escrito?' },
          { de: 'Ich melde mich an.', fon: 'ij MEL-de mij an', es: 'Me doy de alta / me empadrono.' }
        ]
      },
      {
        id: 'emergencia', titulo: 'Emergencias y salud', icono: 'alerta', color: 'rojo',
        frases: [
          { de: 'Hilfe!', fon: 'JIL-fe', es: '¡Socorro!' },
          { de: 'Rufen Sie einen Arzt!', fon: 'RU-fen sii AI-nen artst', es: '¡Llame a un médico!' },
          { de: 'Ich brauche einen Arzt.', fon: 'ij BRAU-je AI-nen artst', es: 'Necesito un médico.' },
          { de: 'Mir geht es nicht gut.', fon: 'mia gueet es nijt guut', es: 'No me encuentro bien.' },
          { de: 'Ich habe Kopfschmerzen.', fon: 'ij JAA-be KOPF-shmer-tsen', es: 'Me duele la cabeza.' },
          { de: 'Ich bin allergisch gegen…', fon: 'ij bin a-LEER-guish GUEE-guen', es: 'Soy alérgico a…' },
          { de: 'Wo ist die nächste Apotheke?', fon: 'vo ist dii NAEJS-te a-po-TEE-que', es: '¿Dónde está la farmacia más cercana?' }
        ]
      },
      {
        id: 'smalltalk', titulo: 'Charla y reacciones', icono: 'mensaje', color: 'morado',
        frases: [
          { de: 'Toll!', fon: 'tol', es: '¡Genial!' },
          { de: 'Alles klar.', fon: 'A-les klaar', es: 'Todo claro / entendido.' },
          { de: 'Einverstanden.', fon: 'AIN-fea-shtan-den', es: 'De acuerdo.' },
          { de: 'Macht nichts.', fon: 'majt nijts', es: 'No importa.' },
          { de: 'Schade!', fon: 'SHAA-de', es: '¡Qué lástima!' },
          { de: 'Viel Glück!', fon: 'fiil gliuc', es: '¡Buena suerte!' },
          { de: 'Wirklich?', fon: 'VIRK-lij', es: '¿En serio?' },
          { de: 'Genau!', fon: 'gue-NAU', es: '¡Exacto!' },
          { de: 'Ach so!', fon: 'aj so', es: '¡Ah, ya entiendo!' },
          { de: 'Na klar!', fon: 'na klaar', es: '¡Por supuesto!' }
        ]
      }
    ]
  }
});
