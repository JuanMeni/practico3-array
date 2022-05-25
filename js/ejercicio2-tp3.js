/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

let nombres = "";
let ciudades = [];
do{
    nombres = prompt("Ingrese nombre de ciudades");
    ciudades.push(nombres);
      
}while(confirm("Quiere ingresar otro nombre?")==true);
console.log(ciudades);

console.log(ciudades.length);

document.write("Las ciudades de la primera, tecera y ultima posicion son: "+ ciudades[0]+", "+ ciudades[2]+", "+ ciudades[ciudades.length-1]);

ciudades.push("Paris");

document.write("<br>La ciudad que ocupa la segunda posicion es: "+ ciudades[1]);

let agregar = ciudades.splice(1,1,"Barcelona");

console.log(agregar);