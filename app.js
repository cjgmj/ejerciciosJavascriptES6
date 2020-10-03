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

// **************** Parámetros sin nombre (parámetros REST) ****************
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

// **************** Restricciones parámetro REST ****************
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
let persona1 = {
    nombre: "John",
    edad: 33
};

let persona2 = {
    nombre: "Jane",
    edad: 22,
    pais: "España",
    conduce: true,
    vehiculo: true
};

// persona1.pais = persona2.pais;
// persona2.pais = "Portugal";

persona1 = {
    ...persona2,
    ...persona1
}

console.log(persona1);
console.log(persona2);