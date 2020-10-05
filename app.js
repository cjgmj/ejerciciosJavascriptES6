// **************** Cambiar prototipo objeto ****************
// La Programación Orientada a Objetos de JavaScript se encantraba basada
// en prototipos y no en clases. Las clases de introducen en ES6.
// Los prototipos son un conjundo de normas para integrar POO en JavaScript.
// Pero con los prototipos, nosotros somos capaces de realizar algo parecido a:
// - Herencia
// - Encapsulamiento
// - Abstracción
// - Polimorfismo
// let gato = {
//     sonido() {
//         console.log("Miau");
//     },
//     chillido() {
//         console.log("MIAU!");
//     }
// };

// let perro = {
//     sonido() {
//         console.log("guau");
//     }
// };

// let angora = Object.create(gato);
// console.log(Object.getPrototypeOf(angora) === gato);

// angora.sonido();
// angora.chillido();

// Cambia el prototipo del objeto
// Object.setPrototypeOf(angora, perro);

// console.log(Object.getPrototypeOf(angora) === gato);

// angora.sonido();
// angora.chillido(); // Da error porque el método no existe dentro del prototipo perro

// **************** Acceso prototipo con "SUPER" ****************
// let persona = {
//     saludar() {
//         return "Hola";
//     }
// };

// let amigo = {
//     saludar() {
//         // ES5
//         // return Object.getPrototypeOf(this).saludar.call(this) + ", saludos!";

//         // ES6
//         return super.saludar() + ", saludos!"; // Si se llama al super sin haber herencia de un prototipo da error
//     }
// };

// Object.setPrototypeOf(amigo, persona);

// console.log(amigo.saludar());

// **************** Destructuración de objetos ****************
// let ajustes = {
//     nombre: "John Doe",
//     email: "john.doe@yopmail.com",
//     facebook: " john.doe",
//     google: "john.doe",
//     premium: true
// };

// // ES5
// // let nombre = ajustes.nombre,
// //     email = ajustes.email,
// //     facebook = ajustes.facebook;

// // ES6
// // Añadiendo : se le puede cambiar el nombre de la variable a la que será
// // asignado el valor, esto también se puede hacer en las variavle que no exista aún
// // Se puede inicializar variables aunque no exista en el objeto, si el objeto trae valor
// // en la variable, se asigna el que tiene
// let { nombre, email: correo, facebook, twitter = "john_d" } = ajustes;

// console.log(nombre, correo, facebook);
// console.log(twitter);

// **************** Destructuración de objetos anidados ****************
let autoGuardado = {
    archivo: "app.js",
    cursor: {
        linea: 7,
        columna: 16
    },
    ultimoArchivo: {
        archivo: "index.html",
        cursor: {
            linea: 8,
            columna: 20
        }
    },
    otroNodo: {
        subNodo: {
            cursor: {
                linea: 11,
                columna: 11
            }
        }
    }
};

let { cursor: cursorActivo } = autoGuardado;
console.log(cursorActivo);

let { ultimoArchivo: { cursor: cursorUltimoArchivo } } = autoGuardado;
console.log(cursorUltimoArchivo);

let { otroNodo: { subNodo: { cursor: cursorSubNodo } } } = autoGuardado;
console.log(cursorSubNodo);

let cursorSubNodo2 = autoGuardado.otroNodo.subNodo.cursor;
console.log(cursorSubNodo2);