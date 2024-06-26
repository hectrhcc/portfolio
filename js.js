$(document).ready(function() {
    // Cargar contenido inicial (puedes ajustar esto según tu necesidad)
    $('#contenido-dinamico').load('inicio.html');

    // Manejar clicks en los enlaces
    $('.cargar-contenido').click(function(e) {
        e.preventDefault(); // Evitar comportamiento por defecto del enlace

        var pagina = $(this).attr('href'); // Obtener el enlace

        // Cargar la página usando AJAX
        $('#contenido-dinamico').load(pagina);

        // Opcional: cambiar la URL en el navegador sin recargar la página completa
        history.pushState(null, null, pagina);

        // Retornar false para evitar que el navegador siga el enlace
        return false;
    });
});