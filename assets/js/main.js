/**
 * ---------------------------------------------------------
 * APLICACIÓN: Examen Tema 1. Introducción a la graficación
 * PROGRAMADOR: ELCHECHEEE
 * DESCRIPCIÓN: Recreación de Contra (Estilo Geométrico Detallado)
 * Intento definitivo para que los personajes sean reconocibles
 * usando solo figuras geométricas básicas (>30 figuras).
 * ---------------------------------------------------------
 */

const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

// --- 1. FONDO Y CUADRÍCULA (Aprox 20 figuras) ---
function dibujarFondo() {
    // Cielo oscuro
    ctx.fillStyle = '#0a1526'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Cuadrícula azul neón
    ctx.strokeStyle = 'rgba(26, 54, 93, 0.5)'; // Sutil
    ctx.lineWidth = 1;
    for (let x = 0; x <= canvas.width; x += 25) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y <= canvas.height; y += 25) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }
}

// --- 2. PAISAJE DE JUNGLA (Aprox 15 figuras) ---
function dibujarPaisaje() {
    ctx.fillStyle = '#0f2922'; // Verde oscuro selva
    
    // Montañas / Árboles de fondo (Polígonos)
    const picos = [
        [0, 400, 60, 240, 160, 400],
        [120, 400, 220, 180, 320, 400],
        [280, 400, 380, 260, 480, 400],
        [420, 400, 520, 200, 600, 400]
    ];

    picos.forEach(pico => {
        ctx.beginPath();
        ctx.moveTo(pico[0], pico[1]);
        ctx.lineTo(pico[2], pico[3]);
        ctx.lineTo(pico[4], pico[5]);
        ctx.fill();
    });

    // Suelo (Rectángulo)
    ctx.fillStyle = '#05110e';
    ctx.fillRect(0, 350, 600, 50);
}

// --- 3. LOGO CONTRA (Aprox 20 figuras) ---
function dibujarLogo() {
    // La "C" de Fuego (Arcos superpuestos)
    ctx.beginPath();
    ctx.arc(130, 120, 50, Math.PI * 0.6, Math.PI * 1.4, false);
    ctx.lineWidth = 25;
    ctx.strokeStyle = '#ffcc00'; // Amarillo base
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(130, 120, 50, Math.PI * 0.6, Math.PI * 1.4, false);
    ctx.lineWidth = 12;
    ctx.strokeStyle = '#ff3300'; // Rojo interior
    ctx.stroke();

    // Texto ONTRA (Rectángulos y polígonos)
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#ff0055';
    ctx.lineWidth = 2;
    const rellenar = (x, y, w, h) => { ctx.fillRect(x,y,w,h); ctx.strokeRect(x,y,w,h); }

    // O
    rellenar(190, 80, 40, 50); ctx.fillStyle = '#0a1526'; ctx.fillRect(200, 90, 20, 30); ctx.fillStyle = '#ffffff';
    // N
    rellenar(240, 80, 12, 50); rellenar(278, 80, 12, 50);
    ctx.beginPath(); ctx.moveTo(240,80); ctx.lineTo(290,130); ctx.lineTo(278,130); ctx.lineTo(240,95); ctx.fill(); ctx.stroke();
    // T
    rellenar(305, 80, 40, 12); rellenar(319, 80, 12, 50);
    // R
    rellenar(360, 80, 12, 50); rellenar(360, 80, 35, 25);
    ctx.fillStyle = '#0a1526'; ctx.fillRect(372, 90, 13, 8); ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.moveTo(360,105); ctx.lineTo(395,130); ctx.lineTo(380,130); ctx.lineTo(360,115); ctx.fill(); ctx.stroke();
    // A
    rellenar(415, 80, 12, 50); rellenar(450, 80, 12, 50); rellenar(415, 80, 47, 12); rellenar(415, 105, 47, 12);
}

// --- 4. PERSONAJES DETALLADOS (Aprox 40 figuras) ---
function dibujarPersonajesDetallados() {
    // --- HÉROE 1: BANDANA ROJA (Izquierda) ---
    const piel = '#e89e92';
    const ropa = '#000000';

    // Torso musculoso (Polígono)
    ctx.fillStyle = piel;
    ctx.beginPath();
    ctx.moveTo(260, 270); // Hombro izq
    ctx.lineTo(310, 270); // Hombro der
    ctx.lineTo(300, 320); // Cintura der
    ctx.lineTo(270, 320); // Cintura izq
    ctx.fill();
    // Pectorales (Círculos)
    ctx.beginPath(); ctx.arc(275, 285, 15, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(295, 285, 15, 0, Math.PI*2); ctx.fill();

    // Cabeza y Pelo
    ctx.fillStyle = piel;
    ctx.fillRect(275, 240, 20, 30);
    ctx.fillStyle = '#000000'; // Pelo negro
    ctx.beginPath(); ctx.moveTo(275, 240); ctx.lineTo(270, 220); ctx.lineTo(300, 225); ctx.lineTo(295, 245); ctx.fill();

    // Bandana Roja Épica
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(273, 242, 24, 8);
    ctx.beginPath(); ctx.moveTo(297, 245); ctx.lineTo(315, 240); ctx.lineTo(310, 255); ctx.fill(); // Nudo

    // Piernas (Ropa negra)
    ctx.fillStyle = ropa;
    ctx.beginPath();
    ctx.moveTo(270, 320); ctx.lineTo(260, 380); // Pierna izq
    ctx.lineTo(285, 380); ctx.lineTo(285, 320); // Entrepierna
    ctx.lineTo(300, 320); ctx.lineTo(310, 380); // Pierna der
    ctx.lineTo(330, 380); ctx.lineTo(300, 320); 
    ctx.fill();

    // Arma: Rifle (Rectángulos)
    ctx.fillStyle = '#333333';
    ctx.fillRect(280, 290, 50, 10); // Cuerpo
    ctx.fillRect(330, 292, 20, 6); // Cañón
    ctx.fillRect(290, 300, 10, 15); // Cargador

    // --- HÉROE 2: