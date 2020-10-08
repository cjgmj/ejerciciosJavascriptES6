// **************** Clases ****************
// Clases en ES5
// function Persona(nombre) {
//     this.nombre = nombre;

//     this.gritarNombre = function() {
//         console.log(this.nombre.toUpperCase());
//     };
// }

// Persona.prototype.decirNombre = function() {
//     console.log(this.nombre);
// };

// let persona = new Persona("John");
// persona.decirNombre();
// persona.gritarNombre();

// let persona2 = Persona("John");
// console.log(persona2); // Sin el new devuelve undefined

// console.log(persona instanceof Persona);
// console.log(persona instanceof Object);

// console.log(persona2 instanceof Persona);
// console.log(persona2 instanceof Object);

// **************** Clases en ES6 ****************
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    // Esto es lo mismo que Persona.prototype.decirNombre...
    decirNombre() {
        console.log(this.nombre);
    }
}

let persona = new Persona("John");

persona.decirNombre();

// let persona2 = Persona("John"); // Devuelve un error porque es obligatorio usar new

console.log(persona instanceof Persona);
console.log(persona instanceof Object);

console.log(typeof Persona); // Esto devuelve function
console.log(typeof Persona.prototype.decirNombre);