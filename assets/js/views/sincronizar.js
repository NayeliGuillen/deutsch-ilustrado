/* ============================================================
   views/sincronizar.js — Llevar tu progreso a otro dispositivo
   ------------------------------------------------------------
   Sin cuentas ni servidor: el progreso viaja como archivo JSON o
   como un código de texto que se copia y se pega.

   Por defecto FUSIONA en vez de reemplazar: al pasar el progreso
   del ordenador al móvil no se pierde lo aprendido en el móvil.
   ============================================================ */

DE.sincronizar = (function () {
  'use strict';

  var d = DE.dom;
  var dialogo = null;

  /* ---- Base64 con acentos y Umlaute -------------------------
     btoa() solo admite Latin-1 y reventaría con "Übung" o "Fuß",
     así que se pasa por UTF-8 antes de codificar.
     ----------------------------------------------------------- */

  function aBase64(texto) {
    var bytes = new TextEncoder().encode(texto);
    var binario = '';
    // En trozos, para no desbordar la pila con progresos grandes.
    for (var i = 0; i < bytes.length; i += 8192) {
      binario += String.fromCharCode.apply(null, bytes.subarray(i, i + 8192));
    }
    return btoa(binario);
  }

  function desdeBase64(base64) {
    var binario = atob(String(base64).replace(/\s+/g, ''));
    var bytes = new Uint8Array(binario.length);
    for (var i = 0; i < binario.length; i++) bytes[i] = binario.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }

  function codigoActual() {
    return aBase64(JSON.stringify(DE.store.exportar()));
  }

  /* ---- Acciones --------------------------------------------- */

  function descargarArchivo() {
    var json = JSON.stringify(DE.store.exportar(), null, 2);
    var blob = new Blob([json], { type: 'application/json' });
    var url = URL.createObjectURL(blob);

    var enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'progreso-aleman-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);

    // Liberar la memoria del blob cuando el navegador haya terminado.
    setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
    DE.toast('Progreso descargado.');
  }

  function aplicar(datos, reemplazar) {
    var resumen = DE.store.importar(datos, reemplazar);
    DE.toast('Importado: ' + resumen.lecciones + ' lecciones y ' +
             resumen.palabras + ' palabras favoritas.');
    DE.router.refrescar();
    refrescarDialogo();
  }

  function leerArchivo(archivo, reemplazar) {
    var lector = new FileReader();
    lector.onload = function () {
      try {
        aplicar(JSON.parse(lector.result), reemplazar);
      } catch (e) {
        DE.toast('No se pudo importar: ' + e.message);
      }
    };
    lector.onerror = function () { DE.toast('No se pudo leer el archivo.'); };
    lector.readAsText(archivo);
  }

  /* ---- Diálogo ---------------------------------------------- */

  function construir() {
    var dlg = d.crear(
      '<dialog class="dlg" aria-labelledby="dlg-titulo">' +
        '<div class="dlg-cabecera">' +
          '<h2 id="dlg-titulo" class="titulo-icono">' + DE.icono('repetir') +
            '<span>Llevar el progreso a otro dispositivo</span></h2>' +
          '<button type="button" class="icon-btn" data-cerrar aria-label="Cerrar">' +
            DE.icono('cerrar') + '</button>' +
        '</div>' +

        '<p class="dlg-nota">Tu progreso se guarda solo en este navegador. ' +
        'Para tenerlo también en el móvil, pásale el código o el archivo. ' +
        'Al importar se <strong>suma</strong> a lo que ya haya allí; no se pierde nada.</p>' +

        '<section class="dlg-bloque">' +
          '<h3>1. Código para copiar y pegar</h3>' +
          '<p class="dlg-ayuda">Cópialo y mándatelo por mensaje. En el otro ' +
            'dispositivo, pégalo aquí mismo y pulsa <em>Aplicar código</em>.</p>' +
          '<textarea class="dlg-codigo" data-codigo spellcheck="false" ' +
            'aria-label="Código de progreso"></textarea>' +
          '<div class="dlg-acciones">' +
            '<button type="button" class="btn btn-sm" data-copiar>' +
              DE.icono('documento') + 'Copiar mi código</button>' +
            '<button type="button" class="btn btn-sm btn-ghost" data-aplicar>' +
              DE.icono('check') + 'Aplicar código pegado</button>' +
          '</div>' +
        '</section>' +

        '<section class="dlg-bloque">' +
          '<h3>2. Archivo de respaldo</h3>' +
          '<p class="dlg-ayuda">Útil también como copia de seguridad: si borras ' +
            'los datos del navegador, el progreso se pierde.</p>' +
          '<div class="dlg-acciones">' +
            '<button type="button" class="btn btn-sm" data-descargar>' +
              DE.icono('flechaDer') + 'Descargar JSON</button>' +
            '<button type="button" class="btn btn-sm btn-ghost" data-subir>' +
              DE.icono('mas') + 'Cargar archivo</button>' +
            '<input type="file" accept="application/json,.json" hidden data-archivo>' +
          '</div>' +
        '</section>' +

        '<p class="dlg-estado" data-estado></p>' +
      '</dialog>'
    );

    dlg.querySelector('[data-cerrar]').addEventListener('click', function () { dlg.close(); });

    dlg.querySelector('[data-copiar]').addEventListener('click', function () {
      var area = dlg.querySelector('[data-codigo]');
      area.value = codigoActual();
      area.select();
      var hecho = function () { DE.toast('Código copiado al portapapeles.'); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(area.value).then(hecho, function () {
          DE.toast('Selecciónalo y cópialo a mano (Ctrl+C).');
        });
      } else {
        DE.toast('Selecciónalo y cópialo a mano (Ctrl+C).');
      }
    });

    dlg.querySelector('[data-aplicar]').addEventListener('click', function () {
      var valor = dlg.querySelector('[data-codigo]').value.trim();
      if (!valor) { DE.toast('Pega antes un código.'); return; }
      try {
        aplicar(JSON.parse(desdeBase64(valor)), false);
      } catch (e) {
        DE.toast('El código no es válido o está incompleto.');
      }
    });

    dlg.querySelector('[data-descargar]').addEventListener('click', descargarArchivo);

    var archivo = dlg.querySelector('[data-archivo]');
    dlg.querySelector('[data-subir]').addEventListener('click', function () { archivo.click(); });
    archivo.addEventListener('change', function () {
      if (this.files && this.files[0]) leerArchivo(this.files[0], false);
      this.value = '';
    });

    document.body.appendChild(dlg);
    return dlg;
  }

  function refrescarDialogo() {
    if (!dialogo) return;
    var resumen = DE.store.exportar();
    dialogo.querySelector('[data-estado]').textContent =
      'En este dispositivo: ' + resumen.completadas.length + ' lecciones aprendidas, ' +
      resumen.favoritas.length + ' palabras favoritas, mejor quiz ' + resumen.mejorQuiz + '%.';
    dialogo.querySelector('[data-codigo]').value = codigoActual();
  }

  return {
    abrir: function () {
      if (!dialogo) dialogo = construir();
      refrescarDialogo();
      if (typeof dialogo.showModal === 'function') dialogo.showModal();
      else dialogo.setAttribute('open', '');   // navegadores muy antiguos
    },

    /* Expuesto para las pruebas automáticas. */
    _codigo: codigoActual,
    _aBase64: aBase64,
    _desdeBase64: desdeBase64
  };
})();
