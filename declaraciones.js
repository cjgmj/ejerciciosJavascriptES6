// **************** Declaración de variables ****************
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

// **************** Redeclaraciones ****************
// let mensaje = "123";
// En ES6 solo se puede declarar la variable una única vez, a diferencia
// de lo que pasaba en ES5 donde se cogía el valor de la última declaración
// (Se podría hacer declarando todas las variables con var)
// var mensaje = "Hola";

// if (1 === 2) {
//     mensaje = "Hola Mundo";
// }

// console.log(mensaje);

// let mensaje = "Hola";

// if (true) {
//     let mensaje = "¿Qué tal?";
// 
//     console.log(mensaje);
// }

// console.log(mensaje);

// **************** Declaración de constantes ****************
// Las constantes tiene que ser inicializadas en el momento en el que son
// definidas
// const IMPUESTO_SV = 15.25;

// Las constates no pueden cambiar de valor
// IMPUESTO_SV = 33;

// Como el let las constantes se crean en el scope del bloque en el que estén
// definidas
// if (true) {
//     const IMPUESTO_SV = 19.75;

//     console.log(IMPUESTO_SV);
// }

// console.log(IMPUESTO_SV);

// Se pueden declarar objetos como variables, los cuales no pueden volver a ser
// inicializados pero sus propiedades si pueden cambiar de valor
// const PERSONA = {
//     nombre: "John",
//     apellido: "Doe"
// };

// Esto no está permitido
// PERSONA = {
//     nombre: "Joe",
//     apellido: "Simons"
// };

// PERSONA.nombre = "Jane";

// console.log(PERSONA);

// **************** Declaración de variables en ciclos ****************
// for (var i = 0; i < 10; i++) {

// }

// console.log(i); // 10

// De esta forma la variable solo existe dentro del for
// for (let i = 0; i < 10; i++) {

// }

// console.log(i); // Error

// **************** Declaración de funciones en ciclos ****************
// var funciones = [];

// for (var i = 0; i < 10; i++) {
//     funciones.push(() => {
//         console.log(i);
//     });
// }

// funciones.forEach(function(func) {
//     func(); // Todos imprimen 10
// });

var funciones = [];

for (let i = 0; i < 10; i++) {
    funciones.push(() => {
        console.log(i);
    });
}

funciones.forEach(function(func) {
    func(); // Imprimen el valor de i en el momento que fue creado el método
});

// Lo anterior se haría en ES5 de la siguiente forma
// var funciones = [];

// for (let i = 0; i < 10; i++) {
//     funciones.push(((valor) => function() {
//         console.log(valor);
//     })(i));
// }

// funciones.forEach(function(func) {
//     func(); // Imprimen el valor de i en el momento que fue creado el método
// });