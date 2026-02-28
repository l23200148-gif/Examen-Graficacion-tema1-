/**
 * ---------------------------------------------------------
 * APLICACIÓN: Examen Tema 1. Introducción a la graficación
 * PROGRAMADOR: ELCHECHEEE
 * DESCRIPCIÓN: Recreación de Master Chief (Halo) con Espada de Energía.
 * Construido con más de 40 figuras básicas (Rectángulos, Líneas y Polígonos).
 * ---------------------------------------------------------
 */

const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

// --- 1. FONDO Y CUADRÍCULA (Cuenta como múltiples figuras: líneas) ---
function dibujarFondo() {
    // Fondo principal (1 figura)
    ctx.fillStyle = '#ffffff'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Líneas de cuadrícula sutiles
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;

    for (let x = 0; x <= canvas.width; x += 20) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y <= canvas.height; y += 20) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }
}

// --- FUNCIÓN AUXILIAR PARA DIBUJAR BLOQUES ---
// Dibuja un rectángulo con relleno y borde (2 figuras básicas por bloque)
function dibujarBloque(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
    ctx.strokeStyle = '#000000'; // Borde negro estilo pixel art
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, ancho, alto);
}

// --- 2. ESPADA DE ENERGÍA (Rectángulos y Polígonos) ---
function dibujarEspada() {
    const c_espada = '#87CEEB'; // Azul claro
    const c_mango = '#808080';  // Gris

    // Mango y guardas
    dibujarBloque(150, 100, 20, 70, c_mango); // Mango central
    dibujarBloque(135, 90, 35, 15, c_espada); // Guarda superior
    dibujarBloque(135, 165, 35, 15, c_espada); // Guarda inferior

    // Hojas de la espada (Rectángulos)
    dibujarBloque(60, 95, 75, 10, c_espada); // Hoja superior
    dibujarBloque(60, 165, 75, 10, c_espada); // Hoja inferior

    // Puntas de la espada (Polígonos / Triángulos)
    // Punta Superior
    ctx.fillStyle = c_espada;
    ctx.beginPath();
    ctx.moveTo(60, 95);  // Esquina superior
    ctx.lineTo(20, 100); // Punta extrema
    ctx.lineTo(60, 105); // Esquina inferior
    ctx.closePath();
    ctx.fill(); ctx.stroke();

    // Punta Inferior
    ctx.beginPath();
    ctx.moveTo(60, 165); 
    ctx.lineTo(20, 170); 
    ctx.lineTo(60, 175); 
    ctx.closePath();
    ctx.fill(); ctx.stroke();

    // Núcleo de energía (Líneas blancas interiores)
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(50, 98, 85, 4);
    ctx.fillRect(50, 168, 85, 4);
}

// --- 3. ARMADURA SPARTAN (Compuesta de rectángulos precisos) ---
function dibujarMasterChief() {
    const c_verde = '#228B22'; // Verde armadura
    const c_verdeOscuro = '#006400'; // Sombra armadura
    const c_negro = '#111111'; // Traje interior
    const c_visor = '#FFA500'; // Naranja visor

    // --- CASCO ---
    dibujarBloque(280, 30, 80, 15, c_verde); // Visera superior
    dibujarBloque(300, 10, 70, 20, c_verde); // Domo del casco
    dibujarBloque(290, 45, 50, 20, c_visor); // Visor naranja
    dibujarBloque(340, 45, 40, 40, c_verdeOscuro); // Nuca
    dibujarBloque(290, 65, 40, 20, c_verde); // Barbilla

    // --- TORSO ---
    dibujarBloque(310, 85, 30, 15, c_negro); // Cuello
    dibujarBloque(290, 100, 90, 50, c_verde); // Pecho principal
    dibujarBloque(300, 150, 70, 30, c_verdeOscuro); // Placa inferior pecho
    dibujarBloque(310, 180, 50, 30, c_negro); // Abdomen traje interior
    dibujarBloque(300, 210, 70, 30, c_verde); // Pelvis

    // --- BRAZO IZQUIERDO (Sosteniendo la espada) ---
    dibujarBloque(250, 110, 40, 40, c_verdeOscuro); // Hombrera
    dibujarBloque(190, 120, 60, 30, c_verde); // Antebrazo estirado
    dibujarBloque(170, 115, 20, 40, c_negro); // Mano / Guante

    // --- BRAZO DERECHO (Atrás) ---
    dibujarBloque(380, 100, 40, 40, c_verde); // Hombrera derecha
    dibujarBloque(390, 140, 20, 30, c_negro); // Bíceps
    dibujarBloque(400, 160, 30, 50, c_verdeOscuro); // Antebrazo derecho
    dibujarBloque(390, 210, 25, 25, c_negro); // Puño

    // --- PIERNA IZQUIERDA (Frente) ---
    dibujarBloque(280, 240, 40, 50, c_verde); // Muslo
    dibujarBloque(290, 290, 30, 20, c_negro); // Rodilla
    dibujarBloque(270, 310, 40, 50, c_verdeOscuro); // Espinillera
    dibujarBloque(240, 360, 60, 25, c_verde); // Bota

    // --- PIERNA DERECHA (Atrás) ---
    dibujarBloque(350, 240, 35, 45, c_verdeOscuro); // Muslo derecho
    dibujarBloque(360, 285, 25, 20, c_negro); // Rodilla derecha
    dibujarBloque(350, 305, 35, 55, c_verde); // Espinillera derecha
    dibujarBloque(350, 360, 60, 25, c_verdeOscuro); // Bota derecha
}

// --- EJECUCIÓN DEL DIBUJO ---
function generarDibujo() {
    dibujarFondo();
    // Se dibuja primero la espada para que el brazo quede por encima
    dibujarEspada();
    dibujarMasterChief();
}

generarDibujo();