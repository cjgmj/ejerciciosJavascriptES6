// **************** Segmentos de caracteres ****************
// var saludo = "Hola Mundo";

// StartsWith
// console.log(saludo.substr(0, 1) === "h");
// console.log(saludo.startsWith("Hola"));

// EndsWith
// console.log(saludo.substr(saludo.length - 1, 1) === "o");
// console.log(saludo.endsWith("!"));

// Includes
// console.log(saludo.indexOf("x") != -1);
// console.log(saludo.includes("l"));

// Ignora la cantidad de caracteres indicada como parámetro
// console.log(saludo.startsWith("Mu", 5));
// console.log(saludo.includes("a", 5));

// **************** Repeticiones de strings ****************
let texto = "Hola";

// Duplica la cadena el número de veces indicado como parámetro
console.log(texto.repeat(2));
console.log("0".repeat(10));

const ESPACIOS = 10;

let nombres = ["John", "Jane", "Linus"];
let telefonos = ["999999999", "888888888", "777777777"];

for (let i in nombres) {
    let dif = ESPACIOS - nombres[i].length;

    console.log(nombres[i] + " ".repeat(dif) + "| " + telefonos[i]);
}