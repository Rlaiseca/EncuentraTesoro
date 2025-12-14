`use strict`;

export function validarNombre(){
    
    let nombre=document.getElementById("nombre").value;
    let arrayErrores=[false,false];
    let arrayMensajesError=["El nombre debe tener 4 o más letras \n",
    "Números no permitidos\n"];
    let stringErrores="";
    
    
    //console.log(nombre);
    //Regex para evaluar que la string tiene letras mayusculas o minusculas.
    //No permite números ni sómbolos

    let regexLetras=/^[A-Za-z]+$/;
    if(nombre.length >= 4 ){
        arrayErrores[0]=true;
    }
    else{
        stringErrores+=arrayMensajesError[0];
    }
    if(regexLetras.test(nombre)){
        arrayErrores[1]=true;
    }
    else{
        stringErrores+=arrayMensajesError[1];
    }

    //retornamos True si el resultado booleano de comprobar si los dos elementos del array valen True
    //En caso contrario, muestra el String de errores mediante un alert()
    return (arrayErrores[0] && arrayErrores[1] ) || alert(stringErrores);
}