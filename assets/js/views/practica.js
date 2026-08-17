/* ============================================================
   views/practica.js — Flashcards + quiz
   ------------------------------------------------------------
   Dos componentes independientes que comparten pantalla. Cada
   uno gestiona su propio estado local; nada global.
   ============================================================ */

(function () {
  'use strict';

  var d = DE.dom;

  /* ==========================================================
     1) FLASHCARDS
     ========================================================== */
  function crearFlashcards() {
    var vocab = DE.leccion('vocabulario');
    var categorias = vocab ? vocab.datos.categorias : [];

    var raiz = d.crear(
      '<section class="tarjeta" style="margin-bottom:26px">' +
        '<h2 class="titulo-icono">' + DE.icono('carta') + '<span>Flashcards</span></h2>' +
        '<p style="color:var(--txt-suave);font-size:.9rem">' +
          'Mira la palabra en alemán, di la traducción en voz alta y voltea la ficha para comprobar.' +
        '</p>' +
        '<div class="chips" data-mazo></div>' +
        '<div class="flash-zona">' +
          '<button type="button" class="flash" data-ficha>' +
            '<span class="flash-inner">' +
              '<span class="flash-cara frontal">' +
                '<span class="flash-pista">Alemán</span>' +
                '<span class="flash-palabra" data-frente></span>' +
              '</span>' +
              '<span class="flash-cara reverso">' +
                '<span class="flash-pista">Español</span>' +
                '<span class="flash-palabra" data-reverso></span>' +
              '</span>' +
            '</span>' +
          '</button>' +
          '<p class="flash-contador" data-contador></p>' +
          '<div class="flash-controles">' +
            '<button type="button" class="btn btn-ghost" data-anterior>' + DE.icono('flechaIzq') + 'Anterior</button>' +
            '<button type="button" class="btn" data-escuchar>' + DE.icono('audio') + 'Escuchar</button>' +
            '<button type="button" class="btn btn-ghost" data-siguiente>Siguiente' + DE.icono('flechaDer') + '</button>' +
            '<button type="button" class="btn btn-ghost" data-barajar>' + DE.icono('barajar') + 'Barajar</button>' +
          '</div>' +
        '</div>' +
      '</section>'
    );

    var mazo = [];
    var indice = 0;

    var ficha     = raiz.querySelector('[data-ficha]');
    var frente    = raiz.querySelector('[data-frente]');
    var reverso   = raiz.querySelector('[data-reverso]');
    var contador  = raiz.querySelector('[data-contador]');
    var chips     = raiz.querySelector('[data-mazo]');

    /* Selector de mazo: favoritas + una opción por categoría */
    chips.innerHTML =
      '<button type="button" class="chip activo" data-fuente="todas">Todo el vocabulario</button>' +
      '<button type="button" class="chip" data-fuente="favoritas">' + DE.icono('estrella') + 'Mis favoritas</button>' +
      categorias.map(function (c) {
        return '<button type="button" class="chip" data-fuente="' + d.esc(c.id) + '">' +
          DE.icono(c.icono) + d.esc(c.titulo) + '</button>';
      }).join('');

    function cargarMazo(fuente) {
      var palabras = [];

      if (fuente === 'favoritas') {
        var favoritas = DE.store.favoritas();
        categorias.forEach(function (c) {
          c.palabras.forEach(function (p) {
            if (favoritas.indexOf(p.de) !== -1) palabras.push(p);
          });
        });
        if (!palabras.length) {
          DE.toast('Aún no tienes favoritas. Márcalas con la estrella en Vocabulario.');
          return false;
        }
      } else if (fuente === 'todas') {
        categorias.forEach(function (c) { palabras = palabras.concat(c.palabras); });
      } else {
        var cat = categorias.find(function (c) { return c.id === fuente; });
        palabras = cat ? cat.palabras.slice() : [];
      }

      mazo = DE.barajar(palabras);
      indice = 0;
      pintar();
      return true;
    }

    function pintar() {
      if (!mazo.length) {
        frente.textContent = '—';
        reverso.textContent = '—';
        contador.textContent = 'Mazo vacío';
        return;
      }
      var p = mazo[indice];
      ficha.classList.remove('volteada');
      frente.textContent = p.de;
      reverso.textContent = p.es;
      contador.textContent = 'Ficha ' + (indice + 1) + ' de ' + mazo.length;
    }

    function mover(paso) {
      if (!mazo.length) return;
      indice = (indice + paso + mazo.length) % mazo.length;
      pintar();
    }

    chips.addEventListener('click', function (ev) {
      var chip = ev.target.closest('[data-fuente]');
      if (!chip) return;
      if (cargarMazo(chip.getAttribute('data-fuente')) !== false) {
        chips.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('activo'); });
        chip.classList.add('activo');
      }
    });

    ficha.addEventListener('click', function () { ficha.classList.toggle('volteada'); });
    raiz.querySelector('[data-anterior]').addEventListener('click', function () { mover(-1); });
    raiz.querySelector('[data-siguiente]').addEventListener('click', function () { mover(1); });
    raiz.querySelector('[data-barajar]').addEventListener('click', function () {
      mazo = DE.barajar(mazo); indice = 0; pintar(); DE.toast('Mazo barajado');
    });
    raiz.querySelector('[data-escuchar]').addEventListener('click', function () {
      if (mazo.length) DE.voz.hablar(mazo[indice].de, this);
    });

    cargarMazo('todas');
    return raiz;
  }

  /* ==========================================================
     2) QUIZ
     ========================================================== */
  function crearQuiz(datos) {
    var raiz = d.crear(
      '<section class="tarjeta">' +
        '<h2 class="titulo-icono">' + DE.icono('diana') + '<span>Quiz relámpago</span></h2>' +
        '<div data-cuerpo></div>' +
      '</section>'
    );

    var cuerpo = raiz.querySelector('[data-cuerpo]');
    var ronda = [];
    var actual = 0;
    var aciertos = 0;

    function empezar() {
      ronda = DE.barajar(datos.preguntas).slice(0, datos.preguntasPorRonda || 10);
      actual = 0;
      aciertos = 0;
      pintarPregunta();
    }

    function pintarPregunta() {
      var p = ronda[actual];
      var porcentaje = Math.round((actual / ronda.length) * 100);

      cuerpo.innerHTML =
        '<div class="quiz">' +
          '<div class="quiz-barra"><span style="width:' + porcentaje + '%"></span></div>' +
          '<p style="font-size:.8rem;color:var(--txt-tenue);text-transform:uppercase;letter-spacing:.08em">' +
            'Pregunta ' + (actual + 1) + ' de ' + ronda.length + ' · Aciertos: ' + aciertos +
          '</p>' +
          '<p class="quiz-pregunta">' + d.esc(p.pregunta) + '</p>' +
          '<div class="quiz-opciones">' +
            p.opciones.map(function (op, i) {
              return '<button type="button" class="quiz-opcion" data-opcion="' + i + '">' +
                '<span class="letra">' + 'ABCD'.charAt(i) + '</span>' +
                '<span>' + d.esc(op) + '</span>' +
              '</button>';
            }).join('') +
          '</div>' +
          '<div data-feedback></div>' +
        '</div>';

      cuerpo.querySelectorAll('[data-opcion]').forEach(function (boton) {
        boton.addEventListener('click', function () {
          responder(Number(boton.getAttribute('data-opcion')));
        });
      });
    }

    function responder(elegida) {
      var p = ronda[actual];
      var botones = cuerpo.querySelectorAll('[data-opcion]');

      botones.forEach(function (b, i) {
        b.disabled = true;
        if (i === p.correcta) b.classList.add('correcta');
        else if (i === elegida) b.classList.add('incorrecta');
      });

      if (elegida === p.correcta) aciertos++;

      var feedback = cuerpo.querySelector('[data-feedback]');
      feedback.innerHTML =
        '<div class="quiz-explicacion">' +
          '<strong>' + (elegida === p.correcta
            ? DE.icono('checkCirculo') + ' ¡Richtig!'
            : DE.icono('cerrar') + ' Casi. ') + '</strong> ' +
          d.esc(p.explicacion) +
        '</div>' +
        '<button type="button" class="btn" data-siguiente>' +
          (actual < ronda.length - 1 ? 'Siguiente pregunta' : 'Ver resultado') +
        '</button>';

      feedback.querySelector('[data-siguiente]').addEventListener('click', function () {
        if (actual < ronda.length - 1) { actual++; pintarPregunta(); }
        else pintarResultado();
      });
    }

    function pintarResultado() {
      var porcentaje = Math.round((aciertos / ronda.length) * 100);
      var mejor = DE.store.registrarQuiz(porcentaje);

      var mensaje =
        porcentaje === 100 ? 'Perfekt! Nivel nativo.' :
        porcentaje >= 80   ? 'Sehr gut! Vas muy bien.' :
        porcentaje >= 60   ? 'Gut! Repasa las que fallaste.' :
                             'Weiter üben! Vuelve a las láminas y reinténtalo.';

      cuerpo.innerHTML =
        '<div class="quiz-resultado">' +
          '<p class="quiz-nota">' + porcentaje + '%</p>' +
          '<p><strong>' + aciertos + ' de ' + ronda.length + '</strong> respuestas correctas</p>' +
          '<p style="color:var(--txt-suave)">' + d.esc(mensaje) + '</p>' +
          '<p style="font-size:.85rem;color:var(--txt-tenue)">Tu mejor marca: ' + mejor + '%</p>' +
          '<button type="button" class="btn" data-reiniciar>' + DE.icono('actualizar') + 'Otra ronda</button>' +
        '</div>';

      cuerpo.querySelector('[data-reiniciar]').addEventListener('click', empezar);
    }

    empezar();
    return raiz;
  }

  /* ==========================================================
     Vista
     ========================================================== */
  DE.registrarVista('practica', function (leccion) {
    var frag = document.createDocumentFragment();

    frag.appendChild(d.crear(
      '<header class="vista-encabezado">' +
        '<p class="migaja">' + d.esc(leccion.grupo) + '</p>' +
        '<h1>' + d.esc(leccion.titulo) + '</h1>' +
        '<p class="intro">' + d.esc(leccion.datos.intro) + '</p>' +
      '</header>'
    ));

    frag.appendChild(DE.panelVoz());
    frag.appendChild(crearFlashcards());
    frag.appendChild(crearQuiz(leccion.datos));

    return frag;
  });
})();
