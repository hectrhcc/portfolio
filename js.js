$(document).ready(function() {
    // Cargar contenido inicial
    $('#contenido-dinamico').load('inicio.html', function() {
        $(this).addClass('loaded');
    });

    $('.cargar-contenido').click(function(e) {
        e.preventDefault();
        let pagina = $(this).attr('href');

        // Agregar clase para la animación de salida
        $('#contenido-dinamico').addClass('fade-out');

        // Esperar a que termine la animación de salida
        setTimeout(function() {
            // Cargar la nueva página
            $('#contenido-dinamico').load(pagina, function() {
                // Remover clase de salida y agregar clase de entrada
                $('#contenido-dinamico').removeClass('fade-out').addClass('fade-in');

                // Remover la clase de entrada después de la animación
                setTimeout(function() {
                    $('#contenido-dinamico').removeClass('fade-in');
                }, 500);
            });
        }, 500);

        return false;
    });
});