/**
 * ---------------------------------------------------------
 * APLICACIÓN: Examen Tema 1. Introducción a la graficación
 * PROGRAMADOR: [Tu Nombre / ELCHECHEEE]
 * FECHA: 25 de Febrero de 2026
 * DESCRIPCIÓN: Recreación de escena usando API Canvas 2D
 * con un mínimo de 30 figuras básicas.
 * ---------------------------------------------------------
 */

const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

// --- 1. FUNCIÓN: DIBUJAR FONDO Y CUADRÍCULA ---
function dibujarFondo() {
    // Fondo principal (1 figura)
    ctx.fillStyle = '#0a192f'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Líneas de cuadrícula (Cuenta como múltiples figuras: líneas)
    ctx.strokeStyle = '#1e3a5f';
    ctx.lineWidth = 1;

    // Líneas verticales (aprox 15 figuras)
    for (let x = 0; x <= canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    // Líneas horizontales (aprox 10 figuras)
    for (let y = 0; y <= canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

// --- 2. FUNCIÓN: DIBUJAR LETRA 'C' ESTILIZADA ---
function dibujarLetraC() {
    // Cuerpo principal de la C (1 figura)
    ctx.fillStyle = '#fce205'; // Amarillo
    ctx.beginPath();
    ctx.arc(150, 150, 80, Math.PI * 0.5, Math.PI * 1.5, false);
    ctx.lineWidth = 20;
    ctx.strokeStyle = '#fce205';
    ctx.stroke();

    // Borde rojo interior de la C (1 figura)
    ctx.beginPath();
    ctx.arc(150, 150, 60, Math.PI * 0.5, Math.PI * 1.5, false);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();

    // Detalles naranjas (3 figuras)
    ctx.fillStyle = '#ff6600';
    ctx.fillRect(100, 70, 20, 20);
    ctx.fillRect(80, 100, 15, 15);
    ctx.fillRect(90, 200, 25, 15);
}

// --- 3. FUNCIÓN: DIBUJAR PERSONAJE (SILUETA BÁSICA) ---
// *AQUÍ DEBES AGREGAR MÁS FIGURAS PARA LLEGAR A LAS 30*
function dibujarPersonaje() {
    // Cabeza (1 figura - Círculo)
    ctx.fillStyle = '#ffccaa'; // Color piel
    ctx.beginPath();
    ctx.arc(300, 250, 25, 0, Math.PI * 2);
    ctx.fill();

    // Torso / Músculos (1 figura - Rectángulo)
    ctx.fillRect(270, 280, 60, 80);

    // Cinta del pelo (1 figura - Rectángulo)
    ctx.fillStyle = '#ff0000'; // Rojo
    ctx.fillRect(275, 235, 50, 10);
    
    // Pelo (1 figura - Polígono)
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(275, 235);
    ctx.lineTo(300, 210);
    ctx.lineTo(325, 235);
    ctx.fill();
}

// --- FUNCIÓN PRINCIPAL QUE EJECUTA TODO ---
function generarDibujo() {
    dibujarFondo();
    dibujarLetraC();
    dibujarPersonaje();
    // Llama a más funciones aquí mientras agregas detalles
}

// Iniciar el dibujo
generarDibujo();