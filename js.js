$(document).ready(function() {
    // Cargar contenido inicial
    cargarContenido('inicio.html');

    $('.cargar-contenido').click(function(e) {
        e.preventDefault();
        let pagina = $(this).attr('href');
        cargarContenido(pagina);
        return false;
    });

    function cargarContenido(pagina) {
        // Ocultar el contenido actual
        $('#contenido-dinamico').css('opacity', '0');

        // Esperar a que se complete la animación de desvanecimiento
        setTimeout(function() {
            // Cargar el nuevo contenido
            $('#contenido-dinamico').load(pagina, function() {
                // Reiniciar la animación
                $('#contenido-dinamico').css('animation', 'none');
                $('#contenido-dinamico')[0].offsetHeight; // Trigger reflow
                $('#contenido-dinamico').css('animation', null);
                
                // Mostrar el nuevo contenido
                $('#contenido-dinamico').css('opacity', '1');
            });
        }, 1000); // Este tiempo debe coincidir con la duración de tu transición CSS
    }
});