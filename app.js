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

// **************** Parámetros sin nombre ****************
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
function agregar_alumno(arr_alumnos, ...alumnos) {
    console.log(arguments);

    for (let i = 0; i < alumnos.length; i++) {
        arr_alumnos.push(alumnos[i]);
    }

    return arr_alumnos;
}

let alumnos_arr = ["John"];
let alumnos_arr2 = agregar_alumno(alumnos_arr, "Jane", "Linus", "Rasmus");

console.log(alumnos_arr2);