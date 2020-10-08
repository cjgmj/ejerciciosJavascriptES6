// **************** Clases ****************
// 1. Las clases funcionan muy parecido a la declaración LET.
// 2. Todo el código dentro de la clase, funcione en modo estricto "strict mode".
// 3. Todos los métodos no son enumerables.
// 4. Todos los métodos internos no tienen un constructor.
// 5. Llamar una clase sin el "new" dará un error.
// 6. Intentar renombrar el nombre de la clase dentro de algún método de la misma
// dará error.
// 7. Tienen métodos estáticos y privados.

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
// class Persona {
//     constructor(nombre) {
//         this.nombre = nombre;
//     }

//     // Esto es lo mismo que Persona.prototype.decirNombre...
//     decirNombre() {
//         console.log(this.nombre);
//     }
// }

// let persona = new Persona("John");

// persona.decirNombre();

// // let persona2 = Persona("John"); // Devuelve un error porque es obligatorio usar new

// console.log(persona instanceof Persona);
// console.log(persona instanceof Object);

// console.log(typeof Persona); // Esto devuelve function
// console.log(typeof Persona.prototype.decirNombre);

// **************** Clases como expresiones ****************
// Se pueden crear de la misma forma que se crea una función
// let miFuncion = function() {
//     console.log("Hola mundo");
// };

// let otraFuncion = miFuncion;

// console.log(typeof otraFuncion);

// otraFuncion();

// let Persona = class {
//     constructor() {
//         this.nombre = "";
//     }

//     decirNombre() {
//         console.log("Hola mundo");
//     }
// };

// let persona = new Persona();

// console.log(typeof persona);
// console.log(persona instanceof Persona);

// **************** Clases como parámetros ****************
function creadorClases(definicionClase) {
    return new definicionClase();
}

let objeto = creadorClases(
    class {
        constructor() {
            this.nombre = undefined;
        }

        saludar() {
            console.log("Hola");
        }
    }
);

objeto.saludar();

class Cuadrado {
    constructor(lado) {
        this.lado = lado;
    }

    getArea() {
        return this.lado * this.lado;
    }
}

function imprimirCuadrado(cuadrado) {
    if (!(cuadrado instanceof Cuadrado)) {
        console.error("El parámetro enviado no es un cuadrado");
        return;
    }

    console.log(cuadrado.getArea());
}

let mesa = new Cuadrado(10);
imprimirCuadrado(mesa);
imprimirCuadrado("123"); // Da error porque no es de tipo Cuadrado