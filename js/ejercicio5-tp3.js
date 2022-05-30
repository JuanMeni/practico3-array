// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function informacion(texto) {
 
    var resultado = `El texto ${texto} `;
   
    // Comprobar mayúsculas y minúsculas
    if(texto == texto.toUpperCase()) {
      resultado += " está formada sólo por mayúsculas";
    }
    else if(texto == texto.toLowerCase()) {
      resultado += " está formada sólo por minúsculas";
    }
    else {
      resultado += " está formada por mayúsculas y minúsculas";
    }
   
    return resultado;
  }
   
  alert(informacion("Hola, como estan todos por ahi?"));
  alert(informacion("DETRAS DE LAS MONTAÑAS, HABITA UN MONSTRUO."));