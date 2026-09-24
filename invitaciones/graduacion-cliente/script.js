// Selección de elementos de la interfaz
const sello = document.getElementById('sello');
const envoltura = document.getElementById('envoltura');
const tarjeta = document.getElementById('tarjeta');
const textoContador = document.getElementById('contador');

// --- 1. LÓGICA DE APERTURA ---
sello.addEventListener('click', () => {
    // El sello desaparece
    sello.style.opacity = '0';
    
    setTimeout(() => {
        // El sobre baja y se desvanece
        envoltura.classList.add('desaparecer');
        
        // La tarjeta de invitación emerge
        setTimeout(() => {
            envoltura.style.display = 'none'; // Quitamos el sobre por completo
            tarjeta.classList.remove('oculto');
            tarjeta.classList.add('mostrar');
        }, 500); 
        
    }, 300); 
});

// --- 2. LÓGICA DEL CONTADOR REGRESIVO ---
// Define aquí la fecha de la fiesta (Año, Mes en inglés, Día, Hora)
const fechaFiesta = new Date("December 12, 2026 20:00:00").getTime();

const actualizarContador = setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = fechaFiesta - ahora;

    // Cálculos matemáticos de tiempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    // Mostrar el resultado
    textoContador.innerHTML = `Faltan: ${dias}d ${horas}h ${minutos}m`;

    // Si la fecha ya pasó
    if (distancia < 0) {
        clearInterval(actualizarContador);
        textoContador.innerHTML = "¡Es hoy! ¡Felicidades!";
    }
}, 1000);
