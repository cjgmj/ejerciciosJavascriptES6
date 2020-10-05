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
// let autoGuardado = {
//     archivo: "app.js",
//     cursor: {
//         linea: 7,
//         columna: 16
//     },
//     ultimoArchivo: {
//         archivo: "index.html",
//         cursor: {
//             linea: 8,
//             columna: 20
//         }
//     },
//     otroNodo: {
//         subNodo: {
//             cursor: {
//                 linea: 11,
//                 columna: 11
//             }
//         }
//     }
// };

// let { cursor: cursorActivo } = autoGuardado;
// console.log(cursorActivo);

// let { ultimoArchivo: { cursor: cursorUltimoArchivo } } = autoGuardado;
// console.log(cursorUltimoArchivo);

// let { otroNodo: { subNodo: { cursor: cursorSubNodo } } } = autoGuardado;
// console.log(cursorSubNodo);

// let cursorSubNodo2 = autoGuardado.otroNodo.subNodo.cursor;
// console.log(cursorSubNodo2);

// **************** Destructuración de arrays ****************
// let frutas = ["Plátano", "Pera", "Uva"];

// // Es en orden secuencial
// let [fruta1, fruta2] = frutas;

// console.log(fruta1, fruta2);

// // Para ignorar los elementos colocamos una , en la posición a ignorar
// let [, , fruta3] = frutas;
// console.log(fruta3);

// let otraFruta = "Manzana";

// // La destructuración sobrescribe valores
// [otraFruta] = frutas;

// console.log(otraFruta);

// let a = 1;
// let b = 2;
// let temp;

// // ES5
// // temp = a;
// // a = b;
// // b = temp;

// // ES6
// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// **************** Destructuración de arrays anidados ****************
// let colores1 = ["Rojo", ["Verde", "Amarillo"], "Morado", "Naranja"];
// let [color1, [color2]] = colores1;

// console.log(color1, color2);

// let colores2 = ["Rojo", "Verde", "Amarillo", "Morado", "Naranja"];
// // Con los ... obtenemos el resto de elementos en un nuevo array, esto solo funciona
// // para los arrays
// // Si no hay más elementos devuelve un array vacío
// let [colorPrincipal, ...restoColores] = colores2;

// console.log(colorPrincipal);
// console.log(restoColores);

// **************** Valores por defecto en la destructuración ****************
// let frutas = ["Plátano"];
// // Si el array tiene un segundo valor usará ese, en caso contrario el valor será Manzana
// let [fruta1, fruta2 = "Manzana"] = frutas;

// console.log(fruta1, fruta2);

// let opciones = {
//     nombre: "John"
// };

// // Si el objeto tiene una propiedad apellido usará esa, en caso contrario el valor será Doe
// // Sirve para hacer, por ejemplo, let apellido = opciones.apellido || "Doe";
// let { nombre, apellido = "Doe" } = opciones;

// console.log(nombre, apellido);

// **************** Destructuración de parámetros ****************
// ES5
// function crearJugador(nickname, opciones) {
//     opciones = opciones || {};

//     let hp = opciones.hp,
//         sp = opciones.sp,
//         clase = opciones.clase;

//     console.log(nickname, hp, sp, clase);

//     // Código para crear el jugador
// }

// ES6
function crearJugador(nickname, { hp, sp, clase } = { hp: 100, sp: 50, clase: "Mago" }) {
    console.log(nickname, hp, sp, clase);

    // Código para crear el jugador
}

crearJugador("johnd");

crearJugador("johnd", {
    hp: 500,
    sp: 100,
    clase: "Guerrero"
});