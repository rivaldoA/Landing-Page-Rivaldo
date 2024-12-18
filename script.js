// Obtener el botón
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Cuando el usuario hace scroll hacia abajo 100px desde la parte superior del documento, mostrar el botón
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
};

// Al hacer clic en el botón, ir a la parte superior
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function mostrarMensaje(event) {
            
            event.preventDefault();

            Swal.fire({
                title: '¡Mensaje enviado!',
                text: 'Gracias por contactarte con Sabor a Pastel. Te responderemos pronto.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        }
        
