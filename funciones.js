// **************** Parámetros por defecto ****************
// function saludoES5(mensaje, tiempo) {
//     // mensaje = mensaje || "Hola Mundo";
//     // Igual que el anterior pero más seguro
//     mensaje = typeof mensaje !== "undefined" ? mensaje : "Hola Mundo";

//     setTimeout(function() {
//         console.log(mensaje);
//     }, tiempo);
// }

// Los parámetros opcionales irán detrás de los obligatorios
// function saludoES6(mensaje = "Hola Mundo", tiempo = 1500) {
//     setTimeout(function() {
//         console.log(mensaje);
//     }, tiempo);
// }

// saludoES6();

// function saludar(fn = function() { console.log("Hola Mundo"); }) {
// function saludar(fn = fnTemp, persona = {
//     nombre: "John"
// }) {
//     // console.log(typeof fn);

//     if (typeof fn === "undefined") {
//         console.error("No es una función");
//         return;
//     }

//     fn();
//     console.log(persona);
// }

// function fnTemp() {
//     console.log("Hola mundo FN");
// }

// saludar();

// var persona = {
//     nombre: "Jane"
// };
// saludar(fnTemp, persona);

// **************** Valores por defecto arguments ****************
// function sumar(a = 1, b = 2) {
//     console.log(arguments);
// }

// Los valores por defecto no se ven reflejados en el arguments
// sumar();
// sumar(1, 2);

// **************** Parámetros sin nombre (parámetros Rest) ****************
// ES5
// function agregar_alumno() {
//     console.log(arguments);

//     for (var i = 1; i < arguments.length; i++) {
//         arguments[0].push(arguments[i]);
//     }

//     return arguments[0];
// }

// var alumnos_arr = ["John"];
// var alumnos_arr2 = agregar_alumno(alumnos_arr, "Jane", "Linus", "Rasmus");

// console.log(alumnos_arr2);

// ES6
// function agregar_alumno(arr_alumnos, ...alumnos) {
//     console.log(arguments);

//     for (let i = 0; i < alumnos.length; i++) {
//         arr_alumnos.push(alumnos[i]);
//     }

//     return arr_alumnos;
// }

// let alumnos_arr = ["John"];
// let alumnos_arr2 = agregar_alumno(alumnos_arr, "Jane", "Linus", "Rasmus");

// console.log(alumnos_arr2);

// **************** Restricciones parámetro Rest ****************
// 1. Solo puede existir un parámetro rest en la función
// 2. El parámetro REST debe de ir siempre como último parámetro
// function juntar_nombres(...nombres, apellidos) {
//     // Esta función da error
// }

// function juntar_nombres(...nombres, ...apellidos) {
//     // Esta función da error
// }

// **************** Operador Spread ****************
// El operador spread nos permite enviar a una función un array que será
// tratado como argumentos individuales
// ES5
// var numeros = [1, 5, 10, 20, 100, 234];

// La función apply nos permite cambiar el valor del objeto this
// y enviar un array adicional
// var max = Math.max.apply(Math, numeros);

// console.log(max);

// ES6
// let numeros = [1, 5, 10, 20, 100, 234];

// let max = Math.max(...numeros);

// console.log(max);

// **************** Romper relación de referencia ****************
// let persona1 = {
//     nombre: "John",
//     edad: 33
// };

// Para romper la referencia de los objetos hay que encapsular el objeto
// entre llaves y usar el operador spread
// let persona2 = {...persona1 };

// persona2.nombre = "Jane";

// console.log(persona1);
// console.log(persona2);

// **************** Añadir propiedades a objetos desde otros ****************
// let persona1 = {
//     nombre: "John",
//     edad: 33
// };

// let persona2 = {
//     nombre: "Jane",
//     edad: 22,
//     pais: "España",
//     conduce: true,
//     vehiculo: true
// };

// persona1.pais = persona2.pais;
// persona2.pais = "Portugal";

// persona1 = {
//     ...persona2,
//     ...persona1
// }

// console.log(persona1);
// console.log(persona2);

// **************** Diferencias entre Spread y Rest ****************
// Rest: Junta los elementos en un array
// Spread: Esparce los elementos como si fueran enviados de forma separada
// function saludarRest(saludo, ...nombres) {
//     for (let i in nombres) {
//         console.log(`${saludo} ${nombres[i]}`);
//     }
// }

// function saludarSpread(saludo, ...nombres) {
//     console.log(`${saludo} ${nombres}.`);
// }

// saludarRest("Hola", "John", "Jane", "Linus");

// let personas = ["John", "Jane", "Linus"];
// saludarSpread("¿Qué tal?", personas);

// Los une al array de cuerpo individualmente
// let partes = ["brazos", "piernas"];
// let cuerpo = ["cabeza", "cuello", ...partes, "pies", "dedos"];

// console.log(cuerpo);

// **************** Doble comportamiento funciones ****************
// En ES5 y versiones anteriores, las funciones sirve con un doble propósito de ser
// llamadas con o sin la palabra reservada "new".
// Cuando se llama con "new" el valor de "this" dentro de la función es un nuevo
// objeto y ese nuevo objeto es retornado.
// Cuando se llama sin "new", simplemente hacemos la llamada de la función y esperamos
// el retorno de algún valor procesado que puede ser un objeto, undefined o null.
// let nombre = "Jane";

// function Persona(nombre) {
//     this.nombre = nombre;
// }

// var persona = new Persona("John");

// Cuando la función no es declarada con el new y pasa por "this", "this" apunta al objeto
// global, en este caso window. Esto es delicado ya que puede cambiar el valor de otra
// variable con el mismo nombre, en este caso la variable nombre
// var noEsPersona = Persona("John");

// console.log(persona);
// console.log(noEsPersona);

// Determinar como fue llamada la función
// function Persona(nombre) {
//     if (this instanceof Persona) {
//         this.nombre = nombre;
//     } else {
//         throw new Error("Esta función debe de ser utilizada con el new");
//     }
// }

// var persona = new Persona("John");
// var noEsPersona = Persona("John");

// A la función call se le manda como primer parámetro el elemento que queremos trabajar
// como el "this"
// var noEsPersona = Persona.call(persona, "John");

// **********************************************
// new.target
// Meta propiedad
// **********************************************
// Una meta propiedad, es una propiedad de un no-objeto, que provee información adicional
// relacionada con su procedencia (como el new).
// Cuando el constructor de la función es llamada, new.target se llena con el operador new.
// Si la función "Call()" es ejecutada, "new.target" no estará definida ya que no se ejecutó
// el constructor.
function Persona(nombre) {
    // De esta forma nos aseguramos que haya sido llamada con el new
    if (typeof new.target !== "undefined") {
        this.nombre = nombre;
    } else {
        throw new Error("Esta función debe de ser utilizada con el new");
    }
}

var persona = new Persona("John");

var noEsPersona = Persona.call(persona, "John");