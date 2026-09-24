// --- 1. LÓGICA DE CARGA SEGURA (PRELOADER) ---
// window.onload asegura que TODAS las imágenes y CSS estén renderizados
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// --- 2. LÓGICA DE APERTURA Y AUDIO ---
const sello = document.getElementById('sello');
const envoltura = document.getElementById('envoltura');
const tarjeta = document.getElementById('tarjeta');
const musica = document.getElementById('musica');
const textoContador = document.getElementById('contador');

sello.addEventListener('click', () => {
    // Reproducir música (volumen suave)
    musica.volume = 0.5;
    musica.play().catch(e => console.log("Audio bloqueado por el navegador", e));

    // Desaparecer sello
    sello.style.opacity = '0';
    
    setTimeout(() => {
        // Cae el sobre
        envoltura.classList.add('desaparecer');
        
        // Sube la tarjeta
        setTimeout(() => {
            envoltura.style.display = 'none'; 
            tarjeta.classList.remove('oculto');
            tarjeta.classList.add('mostrar');
        }, 500); 
        
    }, 300); 
});

// --- 3. LÓGICA DEL CONTADOR REGRESIVO ---
const fechaFiesta = new Date("December 12, 2026 18:00:00").getTime();

const actualizarContador = setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = fechaFiesta - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    textoContador.innerHTML = `Faltan: ${dias}d ${horas}h ${minutos}m`;

    if (distancia < 0) {
        clearInterval(actualizarContador);
        textoContador.innerHTML = "¡Es hoy! ¡Felicidades!";
    }
}, 1000);
