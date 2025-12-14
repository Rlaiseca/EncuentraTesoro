'use strict';

let marcaNorte, marcaSur, marcaEste, marcaOeste;
let img_heroe = document.createElement("img");
img_heroe.id = "heroe";
img_heroe.src = "../img/heroe.png";
img_heroe.alt = "Héroe";
let actualX, actualY;

export function normalizarTirada(tirada){
    tirada = parseInt(tirada);
    let arrayCelda = document.getElementById("heroe").parentElement.id.split("-");
    actualY = parseInt(arrayCelda[0]);
    actualX = parseInt(arrayCelda[1]);

    let movDerecha = Math.min(actualX + tirada, 9);
    let movIzquierda = Math.max(actualX - tirada, 0);
    let movArriba = Math.max(actualY - tirada, 0);
    let movAbajo = Math.min(actualY + tirada, 9);

    marcaNorte = document.getElementById(`${movArriba}-${actualX}`);
    marcaNorte.style.filter = "brightness(0) saturate(100%) invert(16%) sepia(87%) saturate(7480%) hue-rotate(1deg) brightness(95%) contrast(110%)";

    marcaSur = document.getElementById(`${movAbajo}-${actualX}`);
    marcaSur.style.filter = "brightness(0) saturate(100%) invert(16%) sepia(87%) saturate(7480%) hue-rotate(1deg) brightness(95%) contrast(110%)";

    marcaOeste = document.getElementById(`${actualY}-${movIzquierda}`);
    marcaOeste.style.filter = "brightness(0) saturate(100%) invert(16%) sepia(87%) saturate(7480%) hue-rotate(1deg) brightness(95%) contrast(110%)";

    marcaEste = document.getElementById(`${actualY}-${movDerecha}`);
    marcaEste.style.filter = "brightness(0) saturate(100%) invert(16%) sepia(87%) saturate(7480%) hue-rotate(1deg) brightness(95%) contrast(110%)";

    return {marcaNorte, marcaSur, marcaEste, marcaOeste, actualX, actualY};
}

export function quitarEventosCeldas(){
    [marcaNorte, marcaSur, marcaEste, marcaOeste].forEach(celda => {
        if(celda){
            celda.onclick = null;
            celda.style.filter = "";
        }
    });
}

function mover(celda, contador){
    celda.appendChild(document.getElementById("heroe"));
    quitarEventosCeldas();

    // Comprobamos si es la casilla del cofre
    if(celda.id === "9-9"){
        // Cambiamos la imagen del cofre
        const cofre = document.getElementById("9-9").querySelector("img");
        if(cofre){
            cofre.src = "../img/cofreAbierto.png";
        }

        // Sistema de récord usando localStorage
        let record = localStorage.getItem("recordTiradas");
        record = record ? parseInt(record) : null;

        if(record === null || contador < record){
            localStorage.setItem("recordTiradas", contador);
            alert(`¡Has encontrado el cofre en ${contador} tiradas! ¡Nuevo récord!`);
        } else {
            alert(`¡Has encontrado el cofre en ${contador} tiradas! Récord no superado, el actual récord es ${record} tiradas.`);
        }
    }
}

export function moverArriba(contador){ mover(marcaNorte, contador); }
export function moverAbajo(contador){ mover(marcaSur, contador); }
export function moverDerecha(contador){ mover(marcaEste, contador); }
export function moverIzquierda(contador){ mover(marcaOeste, contador); }
