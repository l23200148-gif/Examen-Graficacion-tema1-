/**
 * ---------------------------------------------------------
 * APLICACIÓN: Examen Tema 1. Introducción a la graficación
 * PROGRAMADOR: ELCHECHEEE
 * FECHA: 25 de Febrero de 2026
 * DESCRIPCIÓN: Recreación de Contra (Nivel Avanzado)
 * con gradientes, sombras y Curvas de Bézier (>30 figuras)
 * ---------------------------------------------------------
 */

const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

// --- 1. FONDO CON GRADIENTE Y CUADRÍCULA NEÓN ---
function dibujarFondo() {
    // Gradiente de fondo (Figura 1)
    let grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grd.addColorStop(0, "#050b14");
    grd.addColorStop(1, "#112240");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Cuadrícula Neón (Figuras 2 a 25)
    ctx.strokeStyle = 'rgba(30, 70, 120, 0.5)';
    ctx.lineWidth = 1.5;
    for (let x = 0; x <= canvas.width; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y <= canvas.height; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }
}

// --- 2. LOGO "CONTRA" CON EFECTO DE FUEGO Y SOMBRAS ---
function dibujarLogoAvanzado() {
    ctx.shadowBlur = 15;
    ctx.shadowColor = "rgba(255, 50, 0, 0.8)";

    // Letra C - Fuego (Figuras 26-28)
    let fuegoGrd = ctx.createLinearGradient(50, 50, 150, 150);
    fuegoGrd.addColorStop(0, "#ffea00"); // Amarillo
    fuegoGrd.addColorStop(0.5, "#ff6600"); // Naranja
    fuegoGrd.addColorStop(1, "#cc0000"); // Rojo

    ctx.beginPath();
    ctx.arc(140, 100, 50, Math.PI * 0.6, Math.PI * 1.4, false);
    ctx.lineWidth = 22;
    ctx.strokeStyle = fuegoGrd;
    ctx.stroke();

    // Borde blanco de la C
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.arc(140, 100, 50, Math.PI * 0.6, Math.PI * 1.4, false);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();

    // Texto "ONTRA" estilizado (Figuras 29-33)
    ctx.font = "bold 65px 'Segoe UI', Arial"; // Usando texto para mantenerlo limpio, pero rellenando con gradiente
    
    let textoGrd = ctx.createLinearGradient(0, 60, 0, 120);
    textoGrd.addColorStop(0, "#ffffff");
    textoGrd.addColorStop(0.5, "#dddddd");
    textoGrd.addColorStop(0.51, "#ff0066"); // Corte rosa retro
    textoGrd.addColorStop(1, "#880033");

    ctx.fillStyle = textoGrd;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    
    ctx.fillText("ONTRA", 160, 120);
    ctx.strokeText("ONTRA", 160, 120);
}

// --- 3. HÉROE ESTILIZADO (CURVAS DE BÉZIER PARA ANATOMÍA) ---
function dibujarHeroePro() {
    const piel = '#ffccaa';
    const pielSombra = '#d89b7b';
    const pielBrillo = '#ffeedd';

    ctx.shadowBlur = 5;
    ctx.shadowColor = "rgba(0,0,0,0.5)";

    // Torso y Abdomen (Figura 34)
    ctx.fillStyle = piel;
    ctx.beginPath();
    ctx.moveTo(260, 260);
    ctx.quadraticCurveTo(300, 270, 340, 260); // Pecho inferior
    ctx.lineTo(330, 340);
    ctx.lineTo(270, 340);
    ctx.fill();

    // Pectorales con volumen (Figuras 35-36)
    ctx.fillStyle = pielBrillo;
    ctx.beginPath(); // Pectoral Izquierdo
    ctx.moveTo(298, 265);
    ctx.bezierCurveTo(280, 265, 260, 250, 255, 230);
    ctx.bezierCurveTo(270, 225, 290, 240, 298, 245);
    ctx.fill();
    
    ctx.beginPath(); // Pectoral Derecho
    ctx.moveTo(302, 265);
    ctx.bezierCurveTo(320, 265, 340, 250, 345, 230);
    ctx.bezierCurveTo(330, 225, 310, 240, 302, 245);
    ctx.fill();

    // Hombros / Deltoides masivos (Figuras 37-38)
    let hombroGrd = ctx.createRadialGradient(245, 235, 5, 245, 235, 25);
    hombroGrd.addColorStop(0, pielBrillo);
    hombroGrd.addColorStop(1, pielSombra);
    
    ctx.fillStyle = hombroGrd;
    ctx.beginPath(); ctx.arc(245, 235, 22, 0, Math.PI * 2); ctx.fill(); // Izq
    ctx.beginPath(); ctx.arc(355, 235, 22, 0, Math.PI * 2); ctx.fill(); // Der

    // Cuello y Cabeza (Figuras 39-40)
    ctx.fillStyle = pielSombra;
    ctx.fillRect(285, 200, 30, 25); // Cuello
    
    ctx.fillStyle = piel;
    ctx.beginPath();
    ctx.moveTo(280, 170);
    ctx.lineTo(320, 170);
    ctx.lineTo(320, 200);
    ctx.lineTo(305, 215); // Barbilla
    ctx.lineTo(280, 200);
    ctx.fill();

    // Pelo de Acción (Figura 41)
    ctx.fillStyle = '#111111';
    ctx.beginPath();
    ctx.moveTo(275, 175);
    ctx.lineTo(285, 150);
    ctx.lineTo(300, 160);
    ctx.lineTo(315, 145);
    ctx.lineTo(325, 170);
    ctx.fill();

    // Bandana Roja Épica (Figuras 42-43)
    ctx.fillStyle = '#ff0000';
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#ff0000";
    ctx.fillRect(278, 170, 44, 12);
    
    // Nudo al viento
    ctx.beginPath();
    ctx.moveTo(322, 175);
    ctx.quadraticCurveTo(345, 170, 350, 190);
    ctx.quadraticCurveTo(335, 185, 322, 182);
    ctx.fill();

    // Rostro intenso (Figuras 44-46)
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#000000';
    ctx.fillRect(288, 188, 8, 3); // Ceja Izq
    ctx.fillRect(304, 188, 8, 3); // Ceja Der
    ctx.fillRect(300, 205, 10, 2); // Boca seria
}

// --- EJECUCIÓN ---
function generarDibujoPro() {
    dibujarFondo();
    dibujarLogoAvanzado();
    dibujarHeroePro();
}

// Arrancamos la magia
generarDibujoPro();