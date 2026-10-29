/* ============================================================
   sw.js — Service worker: la guía funciona sin conexión
   ------------------------------------------------------------
   Estrategia: "cache first" con red de reserva. Son archivos
   estáticos que no cambian solos, así que servir desde caché es
   correcto y además instantáneo.

   IMPORTANTE: al añadir, quitar o renombrar archivos hay que
   actualizarlos en RECURSOS y subir el número de VERSION. Sin eso
   los navegadores seguirían sirviendo la versión antigua.
   ============================================================ */

const VERSION = 'deutsch-ilustrado-v11';

const RECURSOS = [
  './',
  'index.html',
  'manifest.webmanifest',

  'assets/css/tokens.css',
  'assets/css/base.css',
  'assets/css/layout.css',
  'assets/css/components.css',
  'assets/css/infografia.css',

  'assets/js/core/app.js',
  'assets/js/core/iconos.js',
  'assets/js/core/pictogramas.js',
  'assets/js/core/pictogramas-extra.js',
  'assets/js/core/pictogramas-libro.js',
  'assets/js/core/mapa.js',
  'assets/js/core/store.js',
  'assets/js/core/voz.js',
  'assets/js/core/dom.js',
  'assets/js/core/fotos.js',
  'assets/js/core/articulos.js',
  'assets/js/core/numeros-de.js',
  'assets/js/core/reloj.js',
  'assets/js/core/generadores.js',
  'assets/js/core/generadores-vocab.js',
  'assets/js/core/router.js',

  'assets/js/data/pronunciacion.js',
  'assets/js/data/generos.js',
  'assets/js/data/casos.js',
  'assets/js/data/verbos-regulares.js',
  'assets/js/data/verbos-separables.js',
  'assets/js/data/numeros.js',
  'assets/js/data/adjetivos.js',
  'assets/js/data/vocabulario.js',
  'assets/js/data/frases.js',
  'assets/js/data/vocabulario-koeln.js',
  'assets/js/data/vocabulario-kap1.js',
  'assets/js/data/vocabulario-kap2.js',
  'assets/js/data/dominio-articulos.js',
  'assets/js/data/entrenamiento-articulos.js',
  'assets/js/data/dominio-ein-kein.js',
  'assets/js/data/entrenamiento-ein-kein.js',
  'assets/js/data/dominio-direcciones.js',
  'assets/js/data/vocabulario-direcciones.js',
  'assets/js/data/entrenamiento-direcciones.js',
  'assets/js/data/entrenamiento-vocabulario.js',
  'assets/js/data/libro-kap3-vocabulario.js',
  'assets/js/data/libro-kap3-libro.js',
  'assets/js/data/entrenamiento-kap3.js',
  'assets/js/data/libro-kap4-vocabulario.js',
  'assets/js/data/libro-kap4-libro.js',
  'assets/js/data/entrenamiento-kap4.js',
  'assets/js/data/libro-kap5-vocabulario.js',
  'assets/js/data/libro-kap5-libro.js',
  'assets/js/data/entrenamiento-kap5.js',
  'assets/js/data/quiz.js',
  'assets/js/data/vocabulario-tiempo.js',
  'assets/js/data/verbos-a1.js',
  'assets/js/data/conjugacion-teoria.js',
  'assets/js/data/entrenamiento-conjugacion.js',
  'assets/js/data/examen-guia.js',
  'assets/js/data/examen-entrenamientos.js',
  'assets/js/data/entrenamiento-oraciones.js',
  'assets/js/data/conversaciones.js',
  'assets/js/data/slang.js',
  'assets/js/data/entrenamiento-slang.js',

  'assets/js/views/panel-voz.js',
  'assets/js/views/sincronizar.js',
  'assets/js/views/infografia.js',
  'assets/js/views/alfabeto.js',
  'assets/js/views/vocabulario.js',
  'assets/js/views/vocabulario-pron.js',
  'assets/js/views/frases.js',
  'assets/js/views/entrenador.js',
  'assets/js/views/practica.js',
  'assets/js/views/inicio.js',
  'assets/js/views/buscador.js',

  'assets/js/main.js',

  'assets/icons/icono.svg',
  'assets/icons/icono-192.png',
  'assets/icons/icono-512.png',
  'assets/icons/apple-touch-icon.png'
];

/* ---- Instalación: precargar todo ---------------------------- */
self.addEventListener('install', function (evento) {
  evento.waitUntil(
    caches.open(VERSION).then(function (cache) {
      // addAll falla en bloque si un solo archivo da error, así que
      // se añaden de uno en uno y se avisa del que falle.
      return Promise.all(RECURSOS.map(function (url) {
        return cache.add(new Request(url, { cache: 'reload' })).catch(function (e) {
          console.warn('[sw] No se pudo precargar:', url, e);
        });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

/* ---- Activación: borrar cachés de versiones anteriores ------- */
self.addEventListener('activate', function (evento) {
  evento.waitUntil(
    caches.keys().then(function (nombres) {
      return Promise.all(nombres.map(function (n) {
        return n === VERSION ? null : caches.delete(n);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* ---- Peticiones --------------------------------------------- */
self.addEventListener('fetch', function (evento) {
  var peticion = evento.request;

  // Solo GET del propio origen: nada de terceros ni de POST.
  if (peticion.method !== 'GET') return;
  if (new URL(peticion.url).origin !== self.location.origin) return;

  // Navegación (abrir la app, recargar): servir index.html.
  // El enrutado es por hash, así que index.html vale para toda ruta.
  if (peticion.mode === 'navigate') {
    evento.respondWith(
      caches.match('index.html').then(function (cacheada) {
        return cacheada || fetch(peticion);
      })
    );
    return;
  }

  evento.respondWith(
    caches.match(peticion, { ignoreSearch: true }).then(function (cacheada) {
      if (cacheada) return cacheada;

      return fetch(peticion).then(function (respuesta) {
        // Guardar lo nuevo para la próxima vez (si es válido).
        if (respuesta && respuesta.ok && respuesta.type === 'basic') {
          var copia = respuesta.clone();
          caches.open(VERSION).then(function (cache) { cache.put(peticion, copia); });
        }
        return respuesta;
      }).catch(function () {
        // Sin red y sin caché: no hay nada que devolver.
        return new Response('Sin conexión y este recurso no está en la caché.', {
          status: 503,
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      });
    })
  );
});
