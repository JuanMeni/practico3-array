// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario


function tablaMultiplicar(numero){
    document.write("<table border = 1><tr><td>Numero</td><td>Resultado</td></tr>")
    for(let i=0; i <= 10; i++){
        document.write("<tr><td>"+numero+ "x"+ i +"</td><td>" + numero*i+"</td></tr>");
    }
}

let valor=parseInt(prompt("Ingrese un numero."));

tablaMultiplicar(valor)
