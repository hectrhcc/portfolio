$(document).ready(function() {
    // Cargar contenido inicial (puedes ajustar esto según tu necesidad)
    $('#contenido-dinamico').load('inicio.html');
    $(this).addClass('loaded'); 
    // Manejar clicks en los enlaces
    $('.cargar-contenido').click(function(e) {
        e.preventDefault(); // Evitar comportamiento por defecto del enlace

        var pagina = $(this).attr('href'); // Obtener el enlace

        $('#contenido-dinamico').removeClass('loaded');

        // Cargar la página usando AJAX
        $('#contenido-dinamico').load(pagina, function() {
            $(this).addClass('loaded'); // Aplicar clase loaded después de cargar el nuevo contenido
        });

        // Retornar false para evitar que el navegador siga el enlace
        return false;
    });
});