/* ============================================================
   data/entrenamiento-oraciones.js — Formar oraciones
   ------------------------------------------------------------
   Seis niveles: ordenar, preguntar, Akkusativ/kein, traducir,
   encontrar el error y responder en situaciones reales.
   ============================================================ */

(function () {
  'use strict';

  /** Opción múltiple: la primera es la correcta (la app las baraja). */
  function opc(p, ops, why) {
    return { t: 'opcion', fijo: false, p: p, ops: ops, ok: 0, why: why };
  }
  function ord(es, de, extra, why, alt) {
    var e = { t: 'ordenar', p: es, ok: de, extra: extra || [], why: why };
    if (alt) e.alt = alt;
    return e;
  }
  function esc(es, ok, why) {
    return { t: 'escribir', p: 'Escribe en alemán: ' + es, ok: ok, why: why };
  }
  var EIN = ['ein', 'eine', 'einen'];

  DE.registrarLeccion({
    id: 'entrena-oraciones',
    titulo: 'Entrenamiento: formar oraciones',
    icono: 'jugar',
    grupo: 'Hablar y escribir',
    color: 'naranja',
    resumen: 'Ordena, traduce, corrige y responde: oraciones completas con verbo en 2ª posición, Akkusativ y kein.',
    vista: 'entrenador',

    datos: {
      intro: 'Regla de oro: el verbo conjugado va en 2ª posición. Si empiezas con otra cosa (heute, morgen), el sujeto pasa detrás del verbo. ' +
             'En las preguntas con palabra interrogativa: palabra + verbo + sujeto.',

      niveles: [

        {
          id: 'n1', dificultad: 'Fácil', titulo: 'Sujeto + verbo + resto',
          descripcion: 'Ordena las fichas para formar la oración.',
          ejercicios: [
            ord('Yo vivo en Colonia.', 'Ich wohne in Köln.', ['wohnst', 'Kölns'], 'ich + verbo en -e + resto.'),
            ord('Él cocina con gusto.', 'Er kocht gern.', ['koche', 'gerne'], 'er → kocht (-t). gern va después del verbo.'),
            ord('Nosotros aprendemos alemán.', 'Wir lernen Deutsch.', ['lernt', 'Deutsche'], 'wir → -en (igual que el infinitivo).'),
            ord('Ella bebe café.', 'Sie trinkt Kaffee.', ['trinke', 'trinken'], 'sie (ella) → trinkt.'),
            ord('Mi nombre es Ana.', 'Mein Name ist Ana.', ['Meine', 'bin'], 'Name es der → mein. ist con er/sie/es y con cosas.'),
            ord('Soy de Honduras.', 'Ich komme aus Honduras.', ['bin', 'von'], 'Origen: kommen + aus.'),
            ord('Ellos juegan fútbol.', 'Sie spielen Fußball.', ['spielt', 'Fußballs'], 'sie (ellos) → -en.'),
            ord('Tengo hambre.', 'Ich habe Hunger.', ['bin', 'hast'], 'Hambre = Hunger se dice con haben, no con sein.'),
            ord('Vosotros habláis alemán.', 'Ihr sprecht Deutsch.', ['sprechen', 'sprichst'], 'ihr → sprecht (sin cambio de vocal: solo du y er cambian).')
          ]
        },

        {
          id: 'n2', dificultad: 'Básico', titulo: 'Verbo en 2ª posición y preguntas',
          descripcion: 'Con "heute" o "morgen" delante, el sujeto pasa detrás del verbo. Las preguntas tienen su propio orden.',
          ejercicios: [
            ord('Hoy aprendo alemán.', 'Heute lerne ich Deutsch.', ['lernen', 'Ich'], 'Posición 1: heute · Posición 2: lerne · luego ich.', ['Ich lerne heute Deutsch.']),
            ord('¿Cómo te llamas?', 'Wie heißt du?', ['heiße', 'bist'], 'Palabra interrogativa + verbo + sujeto.'),
            ord('¿De dónde eres?', 'Woher kommst du?', ['Wo', 'komme'], 'woher = ¿de dónde? Wo = ¿dónde?'),
            ord('¿Dónde vives?', 'Wo wohnst du?', ['Woher', 'wohne'], 'wo + wohnst + du.'),
            ord('¿Hablas alemán?', 'Sprichst du Deutsch?', ['sprechst', 'Du'], 'Pregunta sí/no: el verbo va PRIMERO. sprechen: e→i en du.'),
            ord('¿Qué haces hoy?', 'Was machst du heute?', ['Wo', 'mache'], 'was + machst + du.'),
            ord('¿Cuándo empieza el curso?', 'Wann fängt der Kurs an?', ['anfängt', 'Wo'], 'Separable: fängt … an. anfangen: a→ä en er/es/sie.'),
            ord('Mañana viajo a Berlín.', 'Morgen fahre ich nach Berlin.', ['fliege', 'in'], 'Con morgen en 1ª posición: fahre ich. Ciudades: nach.', ['Ich fahre morgen nach Berlin.']),
            ord('¿Eres de España?', 'Kommst du aus Spanien?', ['Bist', 'von'], 'Pregunta sí/no: verbo primero.'),
            ord('Me levanto a las siete.', 'Ich stehe um sieben Uhr auf.', ['aufstehe', 'stehst'], 'Separable: auf va al final.')
          ]
        },

        {
          id: 'n3', dificultad: 'Medio', titulo: 'Akkusativ y kein',
          descripcion: 'Elige ein / eine / einen / kein… según el género. Solo el masculino cambia en Akkusativ.',
          ejercicios: [
            opc('Ich habe ___ Schwester.   (die Schwester)', ['eine', 'ein', 'einen'], 'die Schwester es femenino: eine (no cambia en Akkusativ).'),
            opc('Ich habe ___ Bruder.   (der Bruder)', ['einen', 'ein', 'eine'], 'der Bruder + objeto directo (Akkusativ) → einen.'),
            opc('Ich suche ___ Bahnhof.   (der Bahnhof)', ['einen', 'ein', 'eine'], 'der → einen en Akkusativ.'),
            opc('Ich brauche ___ Handy.   (das Handy)', ['ein', 'einen', 'eine'], 'das no cambia en Akkusativ: ein.'),
            opc('Ich möchte ___ Kaffee.   (der Kaffee)', ['einen', 'ein', 'eine'], 'der Kaffee → einen Kaffee.'),
            opc('Das ist ___ Hotel.   (¡no!)   (das Hotel)', ['kein', 'keine', 'keinen'], 'Nominativo neutro: kein Hotel.'),
            opc('Ich habe ___ Hunger.   (¡no!)   (der Hunger)', ['keinen', 'kein', 'keine'], 'der Hunger + Akkusativ → keinen Hunger.'),
            opc('Ich habe ___ Zeit.   (¡no!)   (die Zeit)', ['keine', 'kein', 'keinen'], 'die Zeit → keine Zeit.'),
            opc('Wir haben ___ Auto.   (¡no!)   (das Auto)', ['kein', 'keinen', 'keine'], 'das Auto → kein Auto.'),
            opc('Er hat ___ Geschwister.   (¡no!)   (plural)', ['keine', 'kein', 'keinen'], 'Plural: keine (Geschwister = hermanos).'),
            ord('No tengo hermano.', 'Ich habe keinen Bruder.', ['kein', 'nicht'], 'kein se declina como ein: der → keinen (Akk).'),
            ord('No tengo tiempo.', 'Ich habe keine Zeit.', ['kein', 'nicht'], 'Zeit es femenino: keine.')
          ]
        },

        {
          id: 'n4', dificultad: 'Medio', titulo: 'Traduce al alemán',
          descripcion: 'Escribe la oración entera. Cuidado con mayúsculas en los sustantivos.',
          ejercicios: [
            esc('Me llamo Nayeli.', ['Ich heiße Nayeli', 'Mein Name ist Nayeli'], 'Dos formas válidas: Ich heiße… / Mein Name ist…'),
            esc('Vivo en Honduras.', ['Ich wohne in Honduras'], 'wohnen + in + lugar.'),
            esc('Tengo veinte años.', ['Ich bin zwanzig Jahre alt', 'Ich bin zwanzig'], 'En alemán la edad lleva sein: ich bin zwanzig (Jahre alt).'),
            esc('No hablo francés.', ['Ich spreche kein Französisch'], 'Los idiomas se niegan con kein: kein Französisch.'),
            esc('¿Cuánto cuesta esto?', ['Was kostet das', 'Wie viel kostet das'], 'Was kostet das? / Wie viel kostet das?'),
            esc('Quisiera un café.', ['Ich möchte einen Kaffee'], 'möchte + objeto: der Kaffee → einen.'),
            esc('¿Cómo llego al hotel?', ['Wie komme ich zum Hotel'], 'zum Hotel (das Hotel: zu + dem).'),
            esc('Mañana trabajo.', ['Morgen arbeite ich', 'Ich arbeite morgen'], 'El tiempo puede ir al principio (entonces: verbo, sujeto) o después.'),
            esc('Hoy es el 3 de mayo.', ['Heute ist der dritte Mai', 'Heute ist der 3. Mai'], 'der + ordinal: der dritte Mai.'),
            esc('La película empieza a las ocho.', ['Der Film fängt um acht Uhr an', 'Der Film fängt um 8 Uhr an'], 'anfangen (separable): fängt … an; hora: um acht Uhr.')
          ]
        },

        {
          id: 'n5', dificultad: 'Difícil', titulo: 'Encuentra la oración correcta',
          descripcion: 'Solo una está bien. Las otras tienen un error típico de hispanohablantes.',
          ejercicios: [
            opc('¿Cuál es correcta?', ['Heute gehe ich ins Kino.', 'Heute ich gehe ins Kino.', 'Heute gehst ich ins Kino.', 'Ich heute gehe ins Kino.'], 'El verbo siempre va en 2ª posición: Heute (1) gehe (2) ich.'),
            opc('¿Cuál es correcta?', ['Ich habe einen Hund.', 'Ich habe ein Hund.', 'Ich habe eine Hund.', 'Ich haben einen Hund.'], 'der Hund + objeto directo → einen. haben con ich: habe.'),
            opc('¿Cuál es correcta?', ['Er spricht gut Deutsch.', 'Er sprecht gut Deutsch.', 'Er spreche gut Deutsch.', 'Er sprechen gut Deutsch.'], 'sprechen: e→i en er → spricht.'),
            opc('¿Cuál es correcta?', ['Wir fahren nach Berlin.', 'Wir fahrt nach Berlin.', 'Wir fähren nach Berlin.', 'Wir fahren in Berlin.'], 'wir → fahren (sin cambio). nach = hacia una ciudad.'),
            opc('¿Cuál es correcta?', ['Ich stehe um sieben auf.', 'Ich aufstehe um sieben.', 'Ich stehen um sieben auf.', 'Ich auf stehe um sieben.'], 'Separable: stehe … auf (prefijo al final).'),
            opc('¿Cuál es correcta?', ['Ich kann gut schwimmen.', 'Ich kann gut schwimme.', 'Ich kann schwimmen gut.', 'Ich kannst gut schwimmen.'], 'Modal en 2ª posición, infinitivo al FINAL. ich kann (sin terminación).'),
            opc('¿Cuál es correcta?', ['Ich habe keine Zeit.', 'Ich habe nicht Zeit.', 'Ich habe kein Zeit.', 'Ich habe keinen Zeit.'], 'Sustantivo → kein-. Zeit es die → keine.'),
            opc('¿Cuál es correcta?', ['Wie komme ich zur Post?', 'Wie komme ich zum Post?', 'Wie komme ich zu Post?', 'Wie ich komme zur Post?'], 'die Post → zur. Pregunta: palabra + verbo + sujeto.'),
            opc('¿Cuál es correcta?', ['Am dritten Mai habe ich Geburtstag.', 'Am dritte Mai habe ich Geburtstag.', 'Am drei Mai habe ich Geburtstag.', 'Im dritten Mai habe ich Geburtstag.'], 'Fecha: am + ordinal con -en. (im solo con el mes: im Mai.)'),
            opc('¿Cómo se dice que son las 7:30?', ['Es ist halb acht.', 'Es ist halb sieben.', 'Es ist Viertel vor acht.', 'Es ist halb neun.'], 'halb acht = media hora ANTES de las ocho = 7:30.'),
            opc('¿Cuál es correcta?', ['Er isst einen Apfel.', 'Er esst einen Apfel.', 'Er ist einen Apfel.', 'Er isst ein Apfel.'], 'essen: e→i → isst. der Apfel + objeto → einen.'),
            opc('¿Cuál es correcta?', ['Der Zug kommt um acht Uhr an.', 'Der Zug ankommt um acht Uhr.', 'Der Zug kommen um acht Uhr an.', 'Der Zug an kommt um acht Uhr.'], 'ankommen es separable: kommt … an.')
          ]
        },

        {
          id: 'n6', dificultad: 'Experto', titulo: 'Qué decir en cada situación',
          descripcion: 'Elige la frase natural y educada para cada momento.',
          ejercicios: [
            opc('Estás en un café y quieres pedir un café.', ['Ich möchte einen Kaffee, bitte.', 'Ich will Kaffee.', 'Gib mir Kaffee!', 'Ich habe einen Kaffee.'], 'möchte + bitte es lo cortés. "Ich will" suena exigente.'),
            opc('Preguntas el camino a un desconocido.', ['Entschuldigung, wie komme ich zum Bahnhof?', 'He, wo Bahnhof?', 'Wo bist du Bahnhof?', 'Ich bin Bahnhof.'], 'Entschuldigung + pregunta completa.'),
            opc('No has entendido y quieres que lo repitan.', ['Wie bitte? Können Sie das wiederholen?', 'Was?', 'Ich bin nicht.', 'Nein, danke.'], 'Wie bitte? es la forma educada de "¿cómo?". "Was?" es muy seco.'),
            opc('Quieres pagar en un restaurante.', ['Zahlen, bitte!', 'Ich bin fertig Geld.', 'Wo ist das Geld?', 'Ich bestelle.'], 'Zahlen, bitte! (o Ich möchte zahlen) es lo normal.'),
            opc('Preguntas la hora.', ['Wie spät ist es?', 'Was ist Uhr?', 'Wo ist die Zeit?', 'Wann bist du?'], 'Wie spät ist es? o Wie viel Uhr ist es?'),
            opc('Un amigo te pregunta "Wie geht\'s?". Respondes bien.', ['Gut, danke. Und dir?', 'Gut, danke. Und Ihnen?', 'Ich gehe gut.', 'Ich habe gut.'], 'Entre amigos: Und dir? (con Sie sería Und Ihnen?).'),
            opc('Te despides del profesor.', ['Auf Wiedersehen!', 'Tschö!', 'Bis dann, Alter!', 'Hallo!'], 'Con el profesor (formal): Auf Wiedersehen. Tschüss/Tschö es para amigos.'),
            opc('Necesitas ayuda y hablas de usted.', ['Können Sie mir helfen?', 'Kannst du mir helfen?', 'Du hilfst mir!', 'Ich helfen Sie.'], 'Con Sie: können Sie. Kannst du es informal.'),
            opc('Quieres saber el precio de algo en la tienda.', ['Was kostet das?', 'Wie viel bist du?', 'Was macht das Geld?', 'Wo ist der Preis?'], 'Was kostet das? / Wie viel kostet das?'),
            { t: 'completar', p: 'Completa el diálogo en la calle.',
              partes: ['A: Entschuldigung, ', { ok: ['wie'], ops: ['wie', 'wo', 'was'] }, ' komme ich zum Bahnhof?\nB: Gehen Sie ', { ok: ['geradeaus'], ops: ['geradeaus', 'gerade aus', 'gerade'] },
                ' und dann ', { ok: ['links'], ops: ['links', 'linke', 'link'] }, '.\nA: ', { ok: ['Danke'], ops: ['Danke', 'Bitte', 'Hallo'] }, ' schön!'],
              why: 'wie komme ich…? · geradeaus · links · Danke schön (B diría: Bitte schön / Gern geschehen).' }
          ]
        }
      ]
    }
  });
})();
