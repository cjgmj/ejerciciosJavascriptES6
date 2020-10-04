// **************** Extensiones objetos literales ****************
// function crearPersona(nombre, apellido, edad) {
//     return {
//         // ES5
//         // nombre: nombre,
//         // apellido: apellido,
//         // edad: edad

//         // ES6
//         nombre,
//         apellido,
//         edad
//     };
// }

// let persona = crearPersona("John", "Doe", 33);

// console.log(persona);

// **************** Métodos concisos ****************
// var persona = {
//     nombre: "John",

//     // ES5
//     // getNombre: function() {
//     //     console.log(this.nombre);
//     // }

//     // ES6
//     getNombre() {
//         console.log(this.nombre);
//     }
// };

// persona.getNombre();

// **************** Nombre propiedades procesadas ****************
// ES5
// var persona = {};

// var apellido = "apellido";

// persona["nombre"] = "John";
// persona[apellido] = "Doe";

// console.log(persona["nombre"]);
// console.log(persona[apellido]);

// var persona = {
//     "nombre": "Jane"
// };

// console.log(persona["nombre"]);

// ES6
// let apellido = "apellido";

// let persona = {
//     "nombre": "John",
//     [apellido]: "Doe"
// };

// console.log(persona["nombre"]);
// console.log(persona[apellido]);

let suffix = "nombre";

let persona = {
    ["primer " + suffix]: "John",
    ["segundo " + suffix]: "Howard"
};

console.log(persona["primer nombre"]);
console.log(persona["segundo " + suffix]);