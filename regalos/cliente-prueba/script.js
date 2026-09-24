// Seleccionamos los elementos
const caja = document.getElementById('caja');
const sorpresa = document.getElementById('sorpresa');
const musica = document.getElementById('musica');

// Agregamos el evento de clic a la caja
caja.addEventListener('click', () => {
    
    // 1. Reproducir la música (el navegador lo permite porque hubo un clic)
    musica.play();
    
    // 2. Animar la caja para que desaparezca
    caja.classList.add('abierta');
    
    // 3. Ocultar la caja del código y mostrar la sorpresa después de medio segundo
    setTimeout(() => {
        caja.style.display = 'none';
        sorpresa.classList.remove('oculto');
        sorpresa.classList.add('mostrar-sorpresa');
    }, 500); 
});