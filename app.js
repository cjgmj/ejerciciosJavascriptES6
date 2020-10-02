// **************** Segmentos de caracteres ****************
var saludo = "Hola Mundo";

// StartsWith
console.log(saludo.substr(0, 1) === "h");
console.log(saludo.startsWith("Hola"));

// EndsWith
console.log(saludo.substr(saludo.length - 1, 1) === "o");
console.log(saludo.endsWith("!"));

// Includes
console.log(saludo.indexOf("x") != -1);
console.log(saludo.includes("l"));

// Ignora la cantidad de caracteres indicada como parámetro
console.log(saludo.startsWith("Mu", 5));
console.log(saludo.includes("a", 5));