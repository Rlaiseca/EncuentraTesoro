`use strict`;

export function tirarDado(){
        //Numero aleatorio entre 1 y 6
        let numero=Math.floor(Math.random() * 6) + 1;
        document.getElementById("dadoActual").src = `../img/Dado${numero}.png`;
        //console.log(`Numero del dado:${numero}`);
        return parseInt(numero);

}