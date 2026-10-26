/* ============================================================
   core/fotos.js — Fotos propias para las palabras
   ------------------------------------------------------------
   Una palabra puede mostrar una foto en lugar del dibujo. De
   dónde sale, por orden de prioridad:

     1. Tu foto guardada en este navegador (IndexedDB): la que
        pegas, subes, haces con la cámara o eliges entre las
        sugerencias, o la que cargas con "Cargar carpeta".
     2. La carpeta del proyecto: assets/img/palabras/<nombre>.jpg
        (se ve igual en todos tus dispositivos).
     3. El dibujo de la guía (lo que ya había).

   Nombre de archivo = la palabra SIN artículo, en minúsculas:
   Handtuch → handtuch.jpg · Straße → strasse.jpg · U-Bahn → u-bahn.jpg
   ============================================================ */

DE.fotos = (function () {
  'use strict';

  var d = DE.dom;
  var BD = 'deutsch-ilustrado-fotos', ALMACEN = 'fotos';
  var CARPETA = 'assets/img/palabras/';
  var LADO_MAX = 640;

  var resueltas = Object.create(null);   // slug → Promise<{url, tipo, credito}|null>
  var dbPromesa = null;

  /* ---- Nombre de archivo a partir de la palabra --------------- */
  function slug(palabra) {
    return String(palabra || '')
      .replace(/^(der|die|das)\s+/i, '')
      .toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  /* ---- IndexedDB ---------------------------------------------- */
  function abrirDB() {
    if (dbPromesa) return dbPromesa;
    dbPromesa = new Promise(function (ok) {
      try {
        if (!window.indexedDB) return ok(null);
        var req = indexedDB.open(BD, 1);
        req.onupgradeneeded = function () { req.result.createObjectStore(ALMACEN, { keyPath: 'slug' }); };
        req.onsuccess = function () { ok(req.result); };
        req.onerror = function () { ok(null); };
      } catch (e) { ok(null); }
    });
    return dbPromesa;
  }

  function operar(modo, fn) {
    return abrirDB().then(function (db) {
      if (!db) return null;
      return new Promise(function (ok) {
        try {
          var tx = db.transaction(ALMACEN, modo), st = tx.objectStore(ALMACEN);
          var req = fn(st);
          tx.oncomplete = function () { ok(req && req.result !== undefined ? req.result : true); };
          tx.onerror = tx.onabort = function () { ok(null); };
        } catch (e) { ok(null); }
      });
    });
  }

  function leerLocal(s) { return operar('readonly', function (st) { return st.get(s); }); }
  function guardarLocal(s, blob, credito) {
    return operar('readwrite', function (st) {
      return st.put({ slug: s, blob: blob, credito: credito || '', fecha: Date.now() });
    });
  }
  function borrarLocal(s) { return operar('readwrite', function (st) { return st.delete(s); }); }

  /* ---- Carpeta del proyecto ----------------------------------- */
  function probarCarpeta(s) {
    var clave = 'de-foto-no:' + s;
    try { if (sessionStorage.getItem(clave)) return Promise.resolve(null); } catch (e) { /* sin sessionStorage */ }
    return new Promise(function (ok) {
      var img = new Image();
      img.onload = function () { ok({ url: CARPETA + s + '.jpg', tipo: 'carpeta', credito: '' }); };
      img.onerror = function () {
        try { sessionStorage.setItem(clave, '1'); } catch (e) { /* nada */ }
        ok(null);
      };
      img.src = CARPETA + s + '.jpg';
    });
  }

  /** Resuelve la foto de una palabra (o null). */
  function buscar(palabra) {
    var s = slug(palabra);
    if (!s) return Promise.resolve(null);
    if (resueltas[s]) return resueltas[s];
    resueltas[s] = leerLocal(s).then(function (reg) {
      if (reg && reg.blob) {
        return { url: URL.createObjectURL(reg.blob), tipo: 'propia', credito: reg.credito || '' };
      }
      return probarCarpeta(s);
    });
    return resueltas[s];
  }

  function olvidar(s) {
    var p = resueltas[s];
    if (p) p.then(function (r) { if (r && r.tipo === 'propia') URL.revokeObjectURL(r.url); });
    delete resueltas[s];
    try { sessionStorage.removeItem('de-foto-no:' + s); } catch (e) { /* nada */ }
  }

  /* ---- Reducir el tamaño de una imagen ------------------------ */
  function reducir(archivo) {
    return new Promise(function (ok, fallo) {
      var pintar = function (fuente, ancho, alto) {
        var k = Math.min(1, LADO_MAX / Math.max(ancho, alto));
        var c = document.createElement('canvas');
        c.width = Math.max(1, Math.round(ancho * k)); c.height = Math.max(1, Math.round(alto * k));
        var g = c.getContext('2d');
        g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height);
        g.drawImage(fuente, 0, 0, c.width, c.height);
        c.toBlob(function (b) { b ? ok(b) : fallo(new Error('No se pudo convertir la imagen.')); }, 'image/jpeg', 0.82);
      };
      if (window.createImageBitmap) {
        createImageBitmap(archivo).then(function (bm) { pintar(bm, bm.width, bm.height); }, function () {
          fallo(new Error('Ese archivo no es una imagen válida.'));
        });
      } else {
        var u = URL.createObjectURL(archivo), im = new Image();
        im.onload = function () { pintar(im, im.naturalWidth, im.naturalHeight); URL.revokeObjectURL(u); };
        im.onerror = function () { fallo(new Error('Ese archivo no es una imagen válida.')); };
        im.src = u;
      }
    });
  }

  function kb(n) { return n > 1048576 ? (n / 1048576).toFixed(1).replace('.', ',') + ' MB' : Math.round(n / 1024) + ' KB'; }

  /* ---- Mostrar la foto en los elementos [data-foto] ----------- */
  function pintar(el) {
    var palabra = el.getAttribute('data-foto');
    buscar(palabra).then(function (r) {
      if (el._orig === undefined) el._orig = el.innerHTML;
      var tarjeta = el.closest('.pron-item');
      if (r) {
        el.innerHTML = '<img class="foto-img" src="' + d.esc(r.url) + '" alt="Foto de ' + d.esc(palabra) + '" loading="lazy">';
        el.classList.add('con-foto');
        if (tarjeta) tarjeta.classList.add('tiene-foto');
      } else {
        el.innerHTML = el._orig;
        el.classList.remove('con-foto');
        if (tarjeta) tarjeta.classList.remove('tiene-foto');
      }
      var btn = tarjeta && tarjeta.querySelector('.foto-btn');
      if (btn) btn.setAttribute('aria-label', (r ? 'Cambiar la foto de ' : 'Añadir una foto a ') + palabra);
    });
  }

  function aplicar(raiz) {
    (raiz || document).querySelectorAll('[data-foto]').forEach(pintar);
  }

  /* ---- Cargar una carpeta entera ------------------------------ */
  function cargarCarpeta(archivos) {
    var lista = Array.prototype.filter.call(archivos, function (f) { return /^image\//.test(f.type) || /\.(jpe?g|png|webp|gif|avif)$/i.test(f.name); });
    var hechas = 0, falladas = 0;
    return lista.reduce(function (cadena, f) {
      return cadena.then(function () {
        var s = slug(f.name.replace(/\.[^.]+$/, ''));
        if (!s) { falladas++; return null; }
        return reducir(f).then(function (b) { return guardarLocal(s, b, ''); })
          .then(function (r) { if (r) { olvidar(s); hechas++; } else falladas++; }, function () { falladas++; });
      });
    }, Promise.resolve()).then(function () {
      aplicar(document);
      return { hechas: hechas, falladas: falladas, total: lista.length };
    });
  }

  /* ==========================================================
     Ventana para añadir / cambiar la foto
     ========================================================== */
  function abrir(palabra, significado) {
    var s = slug(palabra);
    var nuevo = null;                    // { blob, credito, nombre, original }
    var actual = null;                   // lo que ya había
    var dlg = document.createElement('dialog');
    dlg.className = 'foto-dialogo';
    dlg.setAttribute('aria-labelledby', 'foto-titulo');

    var consulta = encodeURIComponent(palabra.replace(/^(der|die|das)\s+/i, ''));
    dlg.innerHTML =
      '<div class="foto-caja">' +
        '<div class="foto-cab">' +
          '<div><p class="foto-etq">Foto para la palabra</p>' +
          '<h2 id="foto-titulo">' + d.de(palabra, false) + (significado ? ' <small>· ' + d.esc(significado) + '</small>' : '') + '</h2></div>' +
          '<button type="button" class="foto-x" data-cerrar aria-label="Cerrar">' + DE.icono('cerrar') + '</button>' +
        '</div>' +
        '<div class="foto-zona" tabindex="0">' +
          '<div class="foto-zona-icono">' + DE.icono('subir') + '</div>' +
          '<p class="foto-zona-t">Arrastra y suelta tu foto aquí</p>' +
          '<p class="foto-zona-s">o pega una imagen con Ctrl + V · JPG, PNG o WEBP · se ajusta sola para que pese poco</p>' +
          '<div class="foto-botones">' +
            '<button type="button" class="btn" data-elegir>' + DE.icono('subir') + ' Elegir archivo</button>' +
            '<button type="button" class="btn btn-ghost" data-camara>' + DE.icono('camara') + ' Tomar foto</button>' +
            '<button type="button" class="btn btn-ghost" data-pegar>' + DE.icono('portapapeles') + ' Pegar</button>' +
          '</div>' +
          '<input type="file" accept="image/*" hidden data-in-archivo>' +
          '<input type="file" accept="image/*" capture="environment" hidden data-in-camara>' +
        '</div>' +
        '<div class="foto-buscar">' +
          '<a class="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer" ' +
            'href="https://www.google.com/search?tbm=isch&q=' + consulta + '">' + DE.icono('buscar') + ' Buscar en Google</a>' +
          '<button type="button" class="btn btn-ghost btn-sm" data-sugerir>' + DE.icono('ojo') + ' Sugerencias</button>' +
          '<p class="foto-ayuda">En Google: haz clic derecho en la imagen → "Copiar imagen" y vuelve aquí a pegar.</p>' +
        '</div>' +
        '<div class="foto-sugerencias" data-sugerencias hidden></div>' +
        '<p class="foto-estado" data-estado role="status" aria-live="polite"></p>' +
        '<div class="foto-previa" data-previa hidden></div>' +
        '<p class="foto-nota">' + DE.icono('candado') + '<span>Las fotos que subes aquí se guardan solo en este navegador. No se envían a ningún servidor.</span></p>' +
        '<div class="foto-pie">' +
          '<button type="button" class="btn btn-ghost" data-quitar hidden>Quitar mi foto</button>' +
          '<span class="foto-pie-esp"></span>' +
          '<button type="button" class="btn btn-ghost" data-cerrar>Cancelar</button>' +
          '<button type="button" class="btn btn-ok" data-guardar disabled>Guardar foto</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(dlg);
    var q = function (sel) { return dlg.querySelector(sel); };
    var estado = q('[data-estado]'), previa = q('[data-previa]'), zona = q('.foto-zona');
    var btnGuardar = q('[data-guardar]'), btnQuitar = q('[data-quitar]');
    var urlPrevia = null;

    function decir(t, mal) { estado.textContent = t || ''; estado.classList.toggle('mal', !!mal); }

    function mostrar(url, titulo, detalle, credito) {
      previa.hidden = false;
      previa.innerHTML = '<img src="' + d.esc(url) + '" alt="Vista previa">' +
        '<div><p class="foto-prev-t">' + d.esc(titulo) + '</p><p class="foto-prev-d">' + d.esc(detalle || '') + '</p>' +
        (credito ? '<p class="foto-prev-d">' + d.esc(credito) + '</p>' : '') + '</div>';
    }

    // Lo que ya tiene la palabra
    buscar(palabra).then(function (r) {
      actual = r;
      if (r) {
        mostrar(r.url, r.tipo === 'propia' ? 'Tu foto actual' : 'Foto de la carpeta del proyecto',
          r.tipo === 'propia' ? 'Guardada en este navegador' : 'Se ve en todos tus dispositivos', r.credito);
        btnQuitar.hidden = r.tipo !== 'propia';
      }
    });

    function procesar(archivo, credito, origen) {
      decir('Preparando la imagen…');
      return reducir(archivo).then(function (b) {
        nuevo = { blob: b, credito: credito || '' };
        if (urlPrevia) URL.revokeObjectURL(urlPrevia);
        urlPrevia = URL.createObjectURL(b);
        mostrar(urlPrevia, origen || archivo.name || 'Imagen pegada',
          (archivo.size ? kb(archivo.size) + ' → ' : '') + kb(b.size), credito);
        btnGuardar.disabled = false;
        decir('Lista para guardar.');
      }, function (e) { decir(e.message, true); });
    }

    // Elegir / cámara
    q('[data-elegir]').addEventListener('click', function () { q('[data-in-archivo]').click(); });
    q('[data-camara]').addEventListener('click', function () { q('[data-in-camara]').click(); });
    dlg.querySelectorAll('input[type=file]').forEach(function (inp) {
      inp.addEventListener('change', function () { if (inp.files[0]) procesar(inp.files[0]); inp.value = ''; });
    });

    // Arrastrar y soltar
    ['dragenter', 'dragover'].forEach(function (n) {
      zona.addEventListener(n, function (e) { e.preventDefault(); zona.classList.add('encima'); });
    });
    ['dragleave', 'drop'].forEach(function (n) {
      zona.addEventListener(n, function (e) { e.preventDefault(); zona.classList.remove('encima'); });
    });
    zona.addEventListener('drop', function (e) {
      var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if (f) procesar(f); else decir('Suelta un archivo de imagen (no un enlace).', true);
    });

    // Pegar (Ctrl+V) y botón Pegar
    function alPegar(e) {
      var items = (e.clipboardData && e.clipboardData.items) || [];
      for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') === 0) {
          e.preventDefault();
          return procesar(items[i].getAsFile(), '', 'Imagen pegada');
        }
      }
    }
    dlg.addEventListener('paste', alPegar);
    q('[data-pegar]').addEventListener('click', function () {
      if (!navigator.clipboard || !navigator.clipboard.read) {
        return decir('Tu navegador no permite el botón. Pulsa Ctrl + V (o mantén pulsado y elige "Pegar").', true);
      }
      navigator.clipboard.read().then(function (items) {
        var tipo = null, it = null;
        items.forEach(function (x) { x.types.forEach(function (t) { if (!tipo && t.indexOf('image') === 0) { tipo = t; it = x; } }); });
        if (!it) return decir('No hay ninguna imagen copiada.', true);
        return it.getType(tipo).then(function (b) { return procesar(b, '', 'Imagen pegada'); });
      }, function () { decir('No tengo permiso para leer el portapapeles. Usa Ctrl + V.', true); });
    });

    // Sugerencias (Openverse: imágenes con licencia abierta)
    var cajaSug = q('[data-sugerencias]');
    q('[data-sugerir]').addEventListener('click', function () {
      var termino = palabra.replace(/^(der|die|das)\s+/i, '');
      cajaSug.hidden = false;
      cajaSug.innerHTML = '<p class="foto-ayuda">Buscando "' + d.esc(termino) + '"…</p>';
      fetch('https://api.openverse.org/v1/images/?page_size=8&mature=false&q=' + encodeURIComponent(termino))
        .then(function (r) { if (!r.ok) throw new Error('http'); return r.json(); })
        .then(function (j) {
          var res = (j.results || []).filter(function (x) { return x.thumbnail; });
          if (!res.length) { cajaSug.innerHTML = '<p class="foto-ayuda">No encontré imágenes para esta palabra. Prueba con Google.</p>'; return; }
          cajaSug.innerHTML = '<p class="foto-ayuda">Toca una para elegirla (licencias abiertas, de Openverse):</p><div class="foto-rejilla">' +
            res.map(function (x, i) {
              return '<button type="button" class="foto-sug" data-i="' + i + '" aria-label="Elegir sugerencia ' + (i + 1) + '">' +
                '<img src="' + d.esc(x.thumbnail) + '" alt="" loading="lazy"></button>';
            }).join('') + '</div>';
          cajaSug.querySelectorAll('.foto-sug').forEach(function (b) {
            b.addEventListener('click', function () {
              var x = res[Number(b.getAttribute('data-i'))];
              decir('Descargando la imagen…');
              fetch(x.thumbnail).then(function (r) { if (!r.ok) throw new Error('http'); return r.blob(); })
                .then(function (blob) {
                  var lic = x.license ? (x.license.toUpperCase() + (x.license_version ? ' ' + x.license_version : '')) : 'licencia abierta';
                  return procesar(blob, 'Foto: ' + (x.creator || 'autor desconocido') + ' · ' + lic + ' · Openverse', 'Sugerencia de Openverse');
                })
                .catch(function () { decir('No pude descargar esa imagen. Prueba con otra o con Google.', true); });
            });
          });
        })
        .catch(function () {
          cajaSug.innerHTML = '<p class="foto-ayuda mal">No pude cargar las sugerencias (¿sin conexión?). Usa Google o sube tu foto.</p>';
        });
    });

    // Guardar / quitar / cerrar
    function cerrar() {
      if (urlPrevia) URL.revokeObjectURL(urlPrevia);
      if (dlg.open) dlg.close();
      dlg.remove();
    }
    dlg.querySelectorAll('[data-cerrar]').forEach(function (b) { b.addEventListener('click', cerrar); });
    dlg.addEventListener('cancel', function (e) { e.preventDefault(); cerrar(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) cerrar(); });

    btnGuardar.addEventListener('click', function () {
      if (!nuevo) return;
      btnGuardar.disabled = true;
      guardarLocal(s, nuevo.blob, nuevo.credito).then(function (r) {
        if (!r) { decir('Este navegador no permite guardar fotos (¿navegación privada?).', true); btnGuardar.disabled = false; return; }
        olvidar(s); aplicar(document); DE.toast('Foto guardada.'); cerrar();
      });
    });
    btnQuitar.addEventListener('click', function () {
      borrarLocal(s).then(function () { olvidar(s); aplicar(document); DE.toast('Foto quitada.'); cerrar(); });
    });

    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    q('[data-elegir]').focus();
    return dlg;
  }

  return {
    slug: slug, buscar: buscar, aplicar: aplicar, abrir: abrir,
    cargarCarpeta: cargarCarpeta, reducir: reducir,
    quitar: function (palabra) { var s = slug(palabra); return borrarLocal(s).then(function () { olvidar(s); }); },
    carpeta: CARPETA
  };
})();
