document.addEventListener('DOMContentLoaded', () => { 

// Obtener el enlaces
const linkinicio = document.querySelector('a[href="./inicio.html"]');
const linkproyectos = document.querySelector('a[href="./proyectos.html"]');
const linkcertificados= document.querySelector('a[href="./certificados.html"]');
const linkexperiencia = document.querySelector('a[href="./experiencia.html"]');
const linkcontacto = document.querySelector('a[href="./contacto.html"]');

linkinicio.addEventListener('click', function(e) {
    e.preventDefault();
    fetch('inicio.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue OK');
            }
            return response.text();
        })
        .then(data => {
            const mainContent = document.getElementById('main-content');
            mainContent.innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el contenido:', error));
    });
    linkproyectos.addEventListener('click', function(e) {
      e.preventDefault();
      fetch('proyectos.html')
          .then(response => {
              if (!response.ok) {
                  throw new Error('La respuesta de la red no fue OK');
              }
              return response.text();
          })
          .then(data => {
              const mainContent = document.getElementById('main-content');
              mainContent.innerHTML = data;
          })
          .catch(error => console.error('Error al cargar el contenido:', error));
      });
      linkcertificados.addEventListener('click', function(e) {
          e.preventDefault();
          fetch('certificados.html')
              .then(response => {
                  if (!response.ok) {
                      throw new Error('La respuesta de la red no fue OK');
                  }
                  return response.text();
              })
              .then(data => {

                  const mainContent = document.getElementById('main-content');
                  mainContent.innerHTML = data;
              })
              .catch(error => console.error('Error al cargar el contenido:', error));
          });  
          linkexperiencia.addEventListener('click', function(e) {
              e.preventDefault();
              fetch('experiencia.html')
                  .then(response => {
                      if (!response.ok) {
                          throw new Error('La respuesta de la red no fue OK');
                      }
                      return response.text();
                  })
                  .then(data => {
                      const mainContent = document.getElementById('main-content');
                      mainContent.innerHTML = data;
                  })
                  .catch(error => console.error('Error al cargar el contenido:', error));
              });
              linkcontacto.addEventListener('click', function(e) {
                e.preventDefault();
                fetch('contacto.html')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('La respuesta de la red no fue OK');
                        }
                        return response.text();
                    })
                    .then(data => {
                        const mainContent = document.getElementById('main-content');
                        mainContent.innerHTML = data;
                    })
                    .catch(error => console.error('Error al cargar el contenido:', error));
                });
});
