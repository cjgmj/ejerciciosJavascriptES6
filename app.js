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
function sumar(a = 1, b = 2) {
    console.log(arguments);
}

// Los valores por defecto no se ven reflejados en el arguments
sumar();
sumar(1, 2);