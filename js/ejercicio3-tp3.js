//  Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
let posibilidad = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for(let i = 0; i<50 ; i++){
    let dado1 = Math.floor(Math.random()*6)+1;
    let dado2 = Math.floor(Math.random()*6)+1;
    let suma = dado1 + dado2;

    document.write(`<br>El valor del dado 1 = ${dado1} y del dado 2 = ${dado2}, por lo tanto su suma sera de ${suma}`);
     posibilidad[suma-2]++;
}

for (let i=0; i<posibilidad.length; i++){
    document.write(`<br>El valor de la suma=${i+2} aparece un numero total de ${posibilidad[i]}`);
}