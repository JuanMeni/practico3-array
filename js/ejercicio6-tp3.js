/*Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
*/

let lado1 = parseInt(prompt("Ingrese el valor del lado 1."));
let lado2 = parseInt(prompt("ingrese el valor del lado 2."));

valorPerimetro(lado1,lado2);

function valorPerimetro(a,b){
    let perimetro = 2*(a+b);
    document.write(`El perimetro de un rectangulo de lado ${a} y ${b} es igual a ${perimetro}`);
}


