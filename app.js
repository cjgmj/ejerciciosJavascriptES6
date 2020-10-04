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

// let suffix = "nombre";

// let persona = {
//     ["primer " + suffix]: "John",
//     ["segundo " + suffix]: "Howard"
// };

// console.log(persona["primer nombre"]);
// console.log(persona["segundo " + suffix]);

// **************** Método Object.is() ****************
// console.log(+0 == -0);
// console.log(+0 === -0);
// console.log(Object.is(+0, -0));

// console.log("*****");

// console.log(NaN == NaN);
// console.log(NaN === NaN);
// console.log(Object.is(NaN, NaN));

// console.log("*****");

// console.log(5 == 5);
// console.log(5 == "5");

// console.log(5 === 5);
// console.log(5 === "5");

// console.log(Object.is(5, 5));
// console.log(Object.is(5, "5"));

// **************** Método Object.assing() ****************
// ES5
// function mezclar(objReceptor, objDonador) {
//     Object.keys(objDonador).forEach(function(key) {
//         objReceptor[key] = objDonador[key];
//     });

//     return objReceptor;
// }

var objReceptor = {};

var objDonador = {
    // nombre: "mi-archivo.js",
    // Este get se introdujo en ES6 y devuelve el valor de la propiedad
    // Es útil para procesar la propiedad antes de devolverla
    // A la hora de mezclarlo se introduce como la propiedad y no como el get
    get nombre() {
        return "mi-archivo.js";
    }
};

// console.log(objDonador.nombre);
// console.log(objDonador);
// console.log(mezclar(objReceptor, objDonador));

// ES6
console.log(Object.assign(objReceptor, objDonador));