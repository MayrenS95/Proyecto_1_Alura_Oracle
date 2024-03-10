function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function encriptar() {
    let textoInsertado = document.getElementById('textoUsuario').value;


    if(textoInsertado.indexOf("A")==-1 && textoInsertado.indexOf("E")==-1 && textoInsertado.indexOf("I")==-1 && textoInsertado.indexOf("O")==-1 && textoInsertado.indexOf("U")==-1){
        if(textoInsertado.indexOf("á")==-1 && textoInsertado.indexOf("é")==-1 && textoInsertado.indexOf("í")==-1 && textoInsertado.indexOf("ó")==-1 && textoInsertado.indexOf("ú")==-1 && textoInsertado.indexOf("Á")==-1 && textoInsertado.indexOf("É")==-1 && textoInsertado.indexOf("Í")==-1 && textoInsertado.indexOf("Ó")==-1 && textoInsertado.indexOf("Ú")==-1 ){
            textoInsertado = textoInsertado.replaceAll("e","enter");
            textoInsertado = textoInsertado.replaceAll("i","imes");
            textoInsertado = textoInsertado.replaceAll("a","ai");
            textoInsertado = textoInsertado.replaceAll("o","ober");
            textoInsertado = textoInsertado.replaceAll("u","ufat");
            asignarTextoElemento('#salida', textoInsertado);
            document.getElementById("salida").style.backgroundImage = "none";
            document.getElementById("mensajes").style.display = "none";
            
    }
    else {
        asignarTextoElemento('#salida', 'Lo siento. Has ingresado letras mayúsculas o con acentos');
    } 
    }

    limpiarCaja();
    
}


function desencriptar() {
    let textoInsertado = document.getElementById('textoUsuario').value;

    if(textoInsertado.indexOf("A")==-1 && textoInsertado.indexOf("E")==-1 && textoInsertado.indexOf("I")==-1 && textoInsertado.indexOf("O")==-1 && textoInsertado.indexOf("U")==-1){
        if(textoInsertado.indexOf("á")==-1 && textoInsertado.indexOf("é")==-1 && textoInsertado.indexOf("í")==-1 && textoInsertado.indexOf("ó")==-1 && textoInsertado.indexOf("ú")==-1 && textoInsertado.indexOf("Á")==-1 && textoInsertado.indexOf("É")==-1 && textoInsertado.indexOf("Í")==-1 && textoInsertado.indexOf("Ó")==-1 && textoInsertado.indexOf("Ú")==-1 ){
            textoInsertado = textoInsertado.replaceAll("enter","e");
            textoInsertado = textoInsertado.replaceAll("imes","i");
            textoInsertado = textoInsertado.replaceAll("ai","a");
            textoInsertado = textoInsertado.replaceAll("ober","o");
            textoInsertado = textoInsertado.replaceAll("ufat","u");
            asignarTextoElemento('#salida', textoInsertado);
            document.getElementById("salida").style.backgroundImage = "none";
            
    }
    else {
        asignarTextoElemento('#salida', 'Lo siento. Has ingresado letras mayúsculas o con acentos');
    } 
    }
}

function limpiarCaja() {
    document.querySelector('#textoUsuario').value = '';
}
