/**
 * ---------------------------------------------------------
 * APLICACIÓN: Examen Tema 1. Introducción a la graficación
 * PROGRAMADOR: ELCHECHEEE
 * DESCRIPCIÓN: Recreación de Contra (Estilo Silueta Retro)
 * Cumple con >30 figuras (líneas, triángulos, rectángulos, arcos)
 * ---------------------------------------------------------
 */

const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

// --- 1. FONDO Y CUADRÍCULA (Aprox 20 figuras: líneas y rectángulos) ---
function dibujarFondo() {
    // Cielo oscuro
    ctx.fillStyle = '#0a1526'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Cuadrícula azul neón (Figuras)
    ctx.strokeStyle = '#1a365d';
    ctx.lineWidth = 1;
    for (let x = 0; x <= canvas.width; x += 30) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y <= canvas.height; y += 30) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }
}

// --- 2. PAISAJE DE JUNGLA (Aprox 10 figuras: triángulos/polígonos) ---
function dibujarPaisaje() {
    ctx.fillStyle = '#0f2922'; // Verde oscuro selva
    
    // Montañas / Árboles de fondo
    const picos = [
        [0, 400, 50, 250, 150, 400],
        [100, 400, 200, 200, 300, 400],
        [250, 400, 350, 280, 450, 400],
        [400, 400, 500, 220, 600, 400]
    ];

    picos.forEach(pico => {
        ctx.beginPath();
        ctx.moveTo(pico[0], pico[1]);
        ctx.lineTo(pico[2], pico[3]);
        ctx.lineTo(pico[4], pico[5]);
        ctx.fill();
    });

    // Suelo
    ctx.fillStyle = '#05110e';
    ctx.fillRect(0, 350, 600, 50);
}

// --- 3. LOGO CONTRA (Aprox 15 figuras: arcos y rectángulos) ---
function dibujarLogo() {
    ctx.strokeStyle = '#ffcc00'; // Amarillo
    ctx.lineWidth = 12;

    // Letra C (2 Arcos)
    ctx.beginPath();
    ctx.arc(140, 100, 45, Math.PI * 0.6, Math.PI * 1.4, false);
    ctx.stroke();
    ctx.strokeStyle = '#ff3300'; // Borde rojo
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(140, 100, 45, Math.PI * 0.6, Math.PI * 1.4, false);
    ctx.stroke();

    // Texto ONTRA (Rectángulos puros)
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#ff0055';
    ctx.lineWidth = 2;

    const rellenar = (x, y, w, h) => { ctx.fillRect(x,y,w,h); ctx.strokeRect(x,y,w,h); }

    // O
    rellenar(200, 70, 35, 45);
    ctx.fillStyle = '#0a1526'; ctx.fillRect(210, 80, 15, 25); ctx.fillStyle = '#ffffff'; // Hueco
    // N
    rellenar(250, 70, 10, 45); rellenar(280, 70, 10, 45);
    ctx.beginPath(); ctx.moveTo(250,70); ctx.lineTo(290,115); ctx.lineTo(280,115); ctx.lineTo(250,85); ctx.fill(); ctx.stroke();
    // T
    rellenar(305, 70, 35, 10); rellenar(317, 70, 10, 45);
    // R
    rellenar(355, 70, 10, 45); rellenar(355, 70, 30, 25);
    ctx.fillStyle = '#0a1526'; ctx.fillRect(365, 80, 10, 5); ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.moveTo(355,95); ctx.lineTo(385,115); ctx.lineTo(375,115); ctx.lineTo(355,105); ctx.fill(); ctx.stroke();
    // A
    rellenar(405, 70, 10, 45); rellenar(435, 70, 10, 45);
    rellenar(405, 70, 40, 10); rellenar(405, 90, 40, 10);
}

// --- 4. SILUETAS DE LOS HÉROES (Aprox 10 figuras) ---
function dibujarSiluetas() {
    ctx.fillStyle = '#000000'; // Negro puro para las siluetas

    // Héroe 1 (Izquierda) - Compuesto por polígonos simples
    ctx.beginPath();
    ctx.moveTo(270, 350); // Pie izq
    ctx.lineTo(290, 290); // Pierna
    ctx.lineTo(280, 250); // Torso izq
    ctx.lineTo(310, 250); // Torso der
    ctx.lineTo(320, 290); // Pierna der
    ctx.lineTo(340, 350); // Pie der
    ctx.fill();

    // Cabeza y Bandana 1
    ctx.fillRect(285, 230, 20, 20); // Cabeza
    ctx.fillStyle = '#ff0000'; ctx.fillRect(283, 235, 24, 6); // Bandana
    ctx.fillStyle = '#000000';

    // Arma 1
    ctx.fillRect(310, 260, 40, 8); // Rifle apuntando derecha

    // Héroe 2 (Derecha) 
    ctx.beginPath();
    ctx.moveTo(400, 350);
    ctx.lineTo(380, 290);
    ctx.lineTo(390, 250);
    ctx.lineTo(420, 250);
    ctx.lineTo(410, 290);
    ctx.lineTo(430, 350);
    ctx.fill();

    // Cabeza 2
    ctx.fillRect(395, 230, 20, 20);
    
    // Arma 2 (Apuntando arriba)
    ctx.beginPath();
    ctx.moveTo(390, 260);
    ctx.lineTo(360, 220);
    ctx.lineTo(365, 215);
    ctx.lineTo(395, 255);
    ctx.fill();
}

// --- EJECUCIÓN ---
function generarArteFinal() {
    dibujarFondo();
    dibujarPaisaje();
    dibujarLogo();
    dibujarSiluetas();
}

generarArteFinal();