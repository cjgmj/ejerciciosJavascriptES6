/*jshint esversion: 6 */

// Si intentamos acceder a una variable que está definida posteriormente
// en el archivo devuelve undefined
// console.log(mensaje);

// Si variable no está dentro de una función está en el scope global dentro
// del objeto window
// var mensaje = "Hola Mundo";

// Si la variable es let y se intenta acceder a ella antes de existir da error
// console.log(mensaje);
// let mensaje = "Hola Mundo";

// if (1 === 3) {
//     var mensaje = "Hola Mundo";
// }

// Aunque el scope es distinto la definición de la variable está dentro del
// contexto por lo que devuelve undefined. Si se cambia por un let, la variable
// solo se construye dentro de la función por lo que daría error aunque se
// cumpliera la condición
// console.log(mensaje);

// let mensaje = "123";
// En ES6 solo se puede declarar la variable una única vez, a diferencia
// de lo que pasaba en ES5 donde se cogía el valor de la última declaración
// (Se podría hacer declarando todas las variables con var)
// var mensaje = "Hola";
// 
// if (1 === 2) {
//     mensaje = "Hola Mundo";
// }

// console.log(mensaje);

let mensaje = "Hola";

if (true) {
    let mensaje = "¿Qué tal?";

    console.log(mensaje);
}

console.log(mensaje);