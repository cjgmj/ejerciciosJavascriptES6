// **************** Funciones de flecha ****************
// 1. No hay creación de this, super, arguments y new.target, el valor de esos objetos
// apuntan al objeto padre.
// 2. No puede ser llamado con new.
// 3. No tienen prototipos prototype.
// 4. No pueden cambiar el valor de this.
// 5. No hay objeto arguments.
// 6. No pueden tener nombre de parámetros duplicados.
// var miFuncion2 = function(valor) {
//     return valor;
// };

// let miFunction1 = valor => valor;

// console.log(miFuncion2("Hola"));
// console.log(miFunction1("Hola"));

// var sumar2 = function(num1, num2) {
//     return num1 + num2;
// };

// let sumar1 = (num1, num2) => num1 + num2;

// console.log(sumar2(1, 2));
// console.log(sumar1(1, 2));

// var saludar2 = function() {
//     return "Hola Mundo";
// };

// let saludar1 = () => "Hola Mundo";

// console.log(saludar2());
// console.log(saludar1());

// var saludarPersona2 = function(nombre) {
//     var salida = "Hola, " + nombre;

//     return salida;
// };

// let saludarPersona1 = nombre => {
//     let salida = `Hola, ${nombre}`;

//     return salida;
// };

// console.log(saludarPersona2("John"));
// console.log(saludarPersona1("John"));

// var obtenerLibro2 = function(id) {
//     return {
//         id: id,
//         nombre: "Harry Potter"
//     };
// };

// let obtenerLibro1 = id => ({
//     id,
//     nombre: "Harry Potter"
// });

// console.log(obtenerLibro2(1));
// console.log(obtenerLibro1(1));

// **************** Funciones anónimas ****************
// Son las funciones que se ejecutan en el momento en el que son creadas
// Los paréntesis en las funciones normales no son obligatorios
// var saludo2 = (function(nombre) {
//     return "Hola " + nombre;
// })("John");

// let saludo1 = (nombre => `Hola ${nombre}`)("John");

// console.log(saludo2);
// console.log(saludo1);

// **************** No hay cambios en el objeto this ****************
// var manejador = {
//     id: "123",
//     init: function() {
//         // ES5
//         // document.addEventListener("click", (function(event) {
//         //     this.clickEnPagina(event.type);
//         //     // console.log(this);
//         // }).bind(this), false);

//         // ES6
//         document.addEventListener("click", event => this.clickEnPagina(event.type), false);
//     },
//     clickEnPagina: function(type) {
//         console.log("Manejando " + type + " para el id: " + this.id);
//     }
// };

// manejador.init();

// **************** Funciones de flecha y arrays ****************
// var arr = [5, 10, 11, 2, 1, 9, 20];

// ES5
// var ordenado = arr.sort(function(a, b) {
//     return a - b;
// });

// ES6
// let ordenado = arr.sort((a, b) => a - b);

// console.log(ordenado);

// **************** Identificar funciones de flecha ****************
let restar = (a, b) => a - b;

console.log(typeof restar);
console.log(restar instanceof Function);

// let restar2 = new restar(1, 2); // Devuelve un error porque no tiene un constructor

// Deuvelve error porque no existe el objeto arguments
// ((a, b) => {
//     console.log(arguments[0]);
// })();

// De esta forma arguments es buscado en el objeto padre más cercano
function ejemplo(x, y) {
    ((a, b) => {
        console.log(arguments[0]);
    })();
}

ejemplo(10, 20);