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
// let texto = "Hola";

// Duplica la cadena el número de veces indicado como parámetro
// console.log(texto.repeat(2));
// console.log("0".repeat(10));

// const ESPACIOS = 10;

// let nombres = ["John", "Jane", "Linus"];
// let telefonos = ["999999999", "888888888", "777777777"];

// for (let i in nombres) {
//     let dif = ESPACIOS - nombres[i].length;

//     console.log(nombres[i] + " ".repeat(dif) + "| " + telefonos[i]);
// }

// **************** Plantillas literales ****************
function obtenerNombre() {
    return "John Doe";
}

let nombre = "John";
let apellido = "Doe";

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

let nombreCompleto2 = `El nombre completo es: ${nombre} ${apellido}`;
console.log(nombreCompleto2);

// Lo que esté dentro de ${} debe ser código JavaScript válido
let nombreCompleto3 = `El nombre completo es: ${obtenerNombre()} ${1 + 2}`;
console.log(nombreCompleto3);

// Los literal templates nos permiten crear multilínea
let multiLinea = "<h1>Titulo</h1> \n<p>Hola Mundo</p>";
console.log(multiLinea);

// El carácter del salto de línea es contando en el length
let multiLinea2 = `<h1 class="algo">${nombre}</h1>
<p>Hola Mundo ${apellido}</p>
I'm John`;
console.log(multiLinea2);