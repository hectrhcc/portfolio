$(document).ready(function() {
    // Cargar contenido inicial
    $('#contenido-dinamico').load('inicio.html', function() {
        $(this).addClass('loaded'); // Aplicar clase loaded después de cargar el contenido inicial
    });

    $('.cargar-contenido').click(function(e) {
        e.preventDefault(); // Evitar comportamiento por defecto del enlace
        let pagina = $(this).attr('href'); // Obtener el enlace

        $('#contenido-dinamico').removeClass('loaded').addClass('loading'); 
        // Cargar la página usando AJAX
        $('#contenido-dinamico').load(pagina, function() {
            $(this).removeClass('loading').addClass('loaded'); // Aplicar clase loaded después de cargar el nuevo contenido
        });
        // Retornar false para evitar que el navegador siga el enlace
        return false;
    });
});
