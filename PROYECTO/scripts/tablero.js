`use strict`;
//Creamos objetos del DOM para el cofre, el heroe y la arena
//Heroe
let img_heroe=document.createElement("img");
img_heroe.id="heroe";
img_heroe.className="ingame";
img_heroe.src="../img/heroe.png";

//Cofre Cerrado 
let img_cofreCerrado=document.createElement("img");
img_cofreCerrado.id="cofreCerrado";
img_cofreCerrado.className="ingame";
img_cofreCerrado.src="../img/cofreCerrado.png";
  
export function generarTablero(){
     //Creamos una variable con una string que representa la apertura de la etiqueta <table>
    let tablero =document.createElement("table");
    tablero.id="tablero";
    tablero.style.border="1px solid black";
    //Doble bucle for para crear la tabla, añadiendo strings a la variable "tablero"
    for (let i = 0; i < 10; i++) {
            let tr_Arena=document.createElement("tr");
            tablero.appendChild(tr_Arena);
        for (let j = 0; j < 10; j++) {
            //Creamos finalmente un td con el class "arena", un id referente a su celda exacta y los valores de cada coordenada X e Y.
            let td_Arena=document.createElement("td");
            td_Arena.style.backgroundImage = "url('../img/arena.jpg')";
            td_Arena.className="arena";
            // tablero += `<td class="arena" style="background-image: url('../img/arena.jpg');" id="${i}-${j}">${i}-${j}</td>`;
            td_Arena.id=`${i}-${j}`;
            
            tr_Arena.appendChild(td_Arena);
        }
    }
      document.getElementById("main").appendChild(tablero);

    //Usamos los ID que hemos establecido anteriormente a los <td> para encontrar cada posición
    document.getElementById("0-0").appendChild(img_heroe);
    document.getElementById("9-9").appendChild(img_cofreCerrado);


    //Creamos el boton para tirar el dado y ina imagen representativa del dado,
    //Y las añadimos dentro del Main
    let btnJugar=document.createElement("button");
    btnJugar.id="jugar";
    btnJugar.textContent="Tirar Dado";
    document.getElementById("main").appendChild(btnJugar);
    
    let imgDado=document.createElement("img");
    imgDado.id="dadoActual";
    imgDado.src="../img/Dado6.png";

    document.getElementById("main").appendChild(imgDado);
    //Añadimos en el HTML una imagen del dado con el id "dadoActual", que en un futuro usaremos para cambiar la imagen del dado
   // document.getElementById("main").innerHTML+='<img  class="ingame" id="dadoActual" src="../img/Dado6.png" alt="cofreAbierto">'

    //Ponemos return true al final para retornar un valor, pero no necesitamos nada realmente.
    return true;
}

