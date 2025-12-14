'use strict';

import {validarNombre} from "./validarNombre.js";
import { generarTablero } from "./tablero.js";
import { tirarDado } from "./dados.js";
import { normalizarTirada, moverAbajo, moverArriba, moverDerecha, moverIzquierda, quitarEventosCeldas } from "./movimientos.js";

window.onload = inicio;

function inicio() {
    document.getElementById("btn-nombre").addEventListener(`click`, (ev) => {
        let main = document.getElementById("main");
        ev.preventDefault();
        
        if (validarNombre()) {
            document.getElementById("formularioInicio").style.display = "none";
            
            let heroe = document.getElementById('nombre').value;
            main.innerHTML += `<p class="p-heroe"> A luchar héroe: ${heroe}</p>`;
            main.innerHTML += `<button id="btn-start">Jugar</button>`;

            document.getElementById("btn-start").addEventListener(`click`, () => {
                generarTablero();
                document.getElementById("btn-start").style.display = "none";

                const btnJugar = document.getElementById("jugar");
                let movimientos = 0;

                btnJugar.addEventListener(`click`, () => {
                    btnJugar.disabled = true;
                    let tirada = tirarDado();
                    const pasos = normalizarTirada(tirada);

                    pasos.marcaNorte.onclick = () => { movimientos++; moverArriba(movimientos); btnJugar.disabled = false; };
                    pasos.marcaSur.onclick = () => { movimientos++; moverAbajo(movimientos); btnJugar.disabled = false; };
                    pasos.marcaEste.onclick = () => { movimientos++; moverDerecha(movimientos); btnJugar.disabled = false; };
                    pasos.marcaOeste.onclick = () => { movimientos++; moverIzquierda(movimientos); btnJugar.disabled = false; };
                });
            });
        }
    });
}
