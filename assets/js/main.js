/* ============================================================
   main.js — Arranque de la aplicación
   ------------------------------------------------------------
   Se carga el último: aquí todas las lecciones y vistas ya están
   registradas. Conecta la interfaz (menú, tema, buscador, audio)
   con el núcleo y lanza el router.
   ============================================================ */

(function () {
  'use strict';

  /* Orden de las secciones del menú lateral. */
  var ORDEN_GRUPOS = [
    'Inicio',
    'Primeros pasos',
    'Gramática esencial',
    'Vocabulario y uso',
    'Domina el tema',
    'Practicar'
  ];

  var d = DE.dom;

  /* ==========================================================
     Iconos del HTML estático
     ------------------------------------------------------------
     index.html marca sus iconos con data-icono="nombre" y aquí
     se rellenan, para no repetir el SVG dentro del marcado.
     ========================================================== */
  function pintarIconosEstaticos(raiz) {
    (raiz || document).querySelectorAll('[data-icono]').forEach(function (el) {
      el.innerHTML = DE.icono(el.getAttribute('data-icono'));
    });
  }

  /* ==========================================================
     Tema claro / oscuro
     ========================================================== */
  function aplicarTema(tema) {
    if (tema) document.documentElement.setAttribute('data-tema', tema);
    else document.documentElement.removeAttribute('data-tema');

    var boton = document.getElementById('btn-tema');
    var oscuro = tema === 'oscuro' ||
      (!tema && window.matchMedia('(prefers-color-scheme: dark)').matches);
    boton.innerHTML = DE.icono(oscuro ? 'sol' : 'luna');
    boton.setAttribute('aria-label', oscuro ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
  }

  function iniciarTema() {
    aplicarTema(DE.store.obtener('tema'));

    document.getElementById('btn-tema').addEventListener('click', function () {
      var actual = DE.store.obtener('tema');
      var sistemaOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var siguiente = actual
        ? (actual === 'oscuro' ? 'claro' : 'oscuro')
        : (sistemaOscuro ? 'claro' : 'oscuro');
      DE.store.fijar('tema', siguiente);
      aplicarTema(siguiente);
    });
  }

  /* ==========================================================
     Menú lateral
     ========================================================== */
  function construirMenu() {
    var lista = document.getElementById('nav-lecciones');
    var visibles = DE.lecciones().filter(function (l) { return !l.oculta; });

    var html = '';
    ORDEN_GRUPOS.forEach(function (grupo) {
      var delGrupo = visibles.filter(function (l) { return l.grupo === grupo; });
      if (!delGrupo.length) return;

      if (grupo !== 'Inicio') html += '<li class="nav-grupo">' + d.esc(grupo) + '</li>';

      delGrupo.forEach(function (l) {
        html += '<li><a class="nav-link" href="#/' + d.esc(l.id) + '" data-nav="' + d.esc(l.id) + '">' +
          '<span class="nav-icono">' + DE.icono(l.icono) + '</span>' +
          '<span class="nav-texto">' + d.esc(l.titulo) + '</span>' +
          '<span class="nav-check">' + DE.icono('check') + '</span>' +
        '</a></li>';
      });
    });

    lista.innerHTML = html;
  }

  function actualizarMenu() {
    var actual = DE.router.actual();
    document.querySelectorAll('[data-nav]').forEach(function (enlace) {
      var id = enlace.getAttribute('data-nav');
      enlace.classList.toggle('activo', id === actual);
      enlace.classList.toggle('completa', DE.store.estaCompletada(id));
      if (id === actual) enlace.setAttribute('aria-current', 'page');
      else enlace.removeAttribute('aria-current');
    });
  }

  function iniciarMenuMovil() {
    var sidebar = document.getElementById('sidebar');
    var fondo = document.getElementById('sidebar-backdrop');
    var boton = document.getElementById('btn-menu');

    function abrir(si) {
      sidebar.classList.toggle('abierto', si);
      fondo.hidden = !si;
      boton.setAttribute('aria-expanded', si ? 'true' : 'false');
    }

    boton.addEventListener('click', function () {
      abrir(!sidebar.classList.contains('abierto'));
    });
    fondo.addEventListener('click', function () { abrir(false); });
    sidebar.addEventListener('click', function (ev) {
      if (ev.target.closest('.nav-link')) abrir(false);
    });
  }

  /* ==========================================================
     Barra de progreso
     ========================================================== */
  function actualizarProgreso() {
    var ruta = DE.ruta();
    var hechas = ruta.filter(function (l) { return DE.store.estaCompletada(l.id); }).length;
    var pct = ruta.length ? Math.round((hechas / ruta.length) * 100) : 0;

    document.getElementById('progreso-fill').style.width = pct + '%';
    document.getElementById('progreso-texto').textContent =
      hechas + ' de ' + ruta.length + ' lecciones · ' + pct + '%';
  }

  /* ==========================================================
     Audio: un único listener para toda la página
     ========================================================== */
  function iniciarAudio() {
    document.addEventListener('click', function (ev) {
      var objetivo = ev.target.closest('[data-hablar]');
      if (!objetivo) return;
      ev.preventDefault();
      // Cualquier BOTON recibe la animacion de "sonando"; los <span>
      // con data-hablar (palabras dentro del texto) no la necesitan.
      DE.voz.hablar(objetivo.getAttribute('data-hablar'),
        objetivo.tagName === 'BUTTON' ? objetivo : null);
    });

    // Accesibilidad: las palabras en alemán también responden al teclado.
    document.addEventListener('keydown', function (ev) {
      if (ev.key !== 'Enter' && ev.key !== ' ') return;
      var objetivo = ev.target.closest && ev.target.closest('.de[data-hablar]');
      if (!objetivo) return;
      ev.preventDefault();
      DE.voz.hablar(objetivo.getAttribute('data-hablar'));
    });

    /* Si no hay voz alemana, avisar una vez: escuchar alemán con voz
       inglesa enseña una pronunciación falsa. */
    var yaAvisado = false;
    function comprobarVoz() {
      if (yaAvisado) return;
      var estado = DE.voz.estado();
      if (estado.nivel === 'cargando') return;   // aún no sabemos
      yaAvisado = true;
      if (estado.nivel !== 'ok') {
        DE.toast('Sin voz alemana disponible: revisa el aviso en «Alfabeto y pronunciación».');
      }
    }
    document.addEventListener('de:voces', comprobarVoz);
    setTimeout(comprobarVoz, 1200);

    var rango = document.getElementById('velocidad-voz');
    rango.value = DE.store.obtener('velocidadVoz');
    rango.addEventListener('change', function () {
      DE.store.fijar('velocidadVoz', Number(this.value));
      DE.voz.hablar('Guten Tag');
    });
  }

  /* ==========================================================
     Buscador
     ========================================================== */
  function iniciarBuscador() {
    var campo = document.getElementById('buscador');
    var temporizador = null;

    campo.addEventListener('input', function () {
      clearTimeout(temporizador);
      var texto = this.value.trim();
      temporizador = setTimeout(function () {
        if (texto.length < 2) return;
        DE.consultaBusqueda = texto;
        DE.router.ir('buscar');
      }, 320);
    });

    campo.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') {
        this.value = '';
        this.blur();
        if (DE.router.actual() === 'buscar') DE.router.ir('inicio');
      }
    });

    // Atajo: "/" enfoca el buscador.
    document.addEventListener('keydown', function (ev) {
      if (ev.key === '/' && document.activeElement !== campo) {
        ev.preventDefault();
        campo.focus();
      }
    });
  }

  /* ==========================================================
     Funcionamiento sin conexión
     ------------------------------------------------------------
     El service worker solo se registra sobre http(s): abriendo el
     archivo con doble clic (file://) el navegador lo rechaza, y no
     pasa nada porque en local ya no hace falta.
     ========================================================== */
  function iniciarOffline() {
    if (!('serviceWorker' in navigator)) return;
    if (!/^https?:$/.test(window.location.protocol)) return;

    navigator.serviceWorker.register('sw.js').then(function (registro) {
      console.info('[DE] Modo sin conexión activo.', registro.scope);
    }).catch(function (e) {
      console.warn('[DE] No se pudo activar el modo sin conexión.', e);
    });
  }

  /* ==========================================================
     Reinicio de progreso
     ========================================================== */
  function iniciarSincronizacion() {
    document.getElementById('btn-sincronizar').addEventListener('click', function () {
      DE.sincronizar.abrir();
    });
  }

  function iniciarReset() {
    document.getElementById('btn-reset').addEventListener('click', function () {
      if (!window.confirm('¿Seguro que quieres borrar tu progreso, favoritas y récord del quiz?')) return;
      DE.store.reiniciar();
      DE.toast('Progreso reiniciado. ¡Viel Erfolg!');
      DE.router.refrescar();
    });
  }

  /* ==========================================================
     Arranque
     ========================================================== */
  /** Ejecuta `fn` cuando el DOM esté listo, aunque ya lo esté. */
  function cuandoListo(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  cuandoListo(function () {
    pintarIconosEstaticos();
    iniciarTema();
    construirMenu();
    iniciarMenuMovil();
    iniciarAudio();
    iniciarBuscador();
    iniciarSincronizacion();
    iniciarReset();
    iniciarOffline();

    document.addEventListener('de:ruta', function () {
      actualizarMenu();
      actualizarProgreso();
    });
    document.addEventListener('de:store-actualizado', function () {
      actualizarMenu();
      actualizarProgreso();
    });

    DE.router.iniciar(document.getElementById('vista'));
    actualizarProgreso();

    console.info('%cDeutsch Ilustrado v' + DE.version,
      'color:#c98a2b;font-weight:bold', '·', DE.lecciones().length, 'lecciones registradas.');
  });
})();
