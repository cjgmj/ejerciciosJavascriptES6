// **************** Símbolos y propiedades ****************
// Los símbolos son perfectos para dar nombre a propiedades y asegurarnos 
// que no coincidirá con el nombre de otra propiedades de otros elementos
// Al ser un dato primitivo no va con new
// let nombre = Symbol("nombre");
// let apellidos = Symbol();

// let persona = {
//     [apellidos]: "Doe"
// };

// persona[nombre] = "John";

// // Si definimos una propiedad de un objeto como símbolo tiene que usarse
// // con []
// console.log(persona[nombre]);
// console.log(persona[apellidos]);

// console.log(nombre);
// console.log(apellidos);

// let simbolo1 = Symbol("simbolo");
// let simbolo2 = Symbol("simbolo");

// // Los símbolos siempre son diferentes
// console.log(simbolo1 == simbolo2);
// console.log(simbolo1 === simbolo2);
// console.log(Object.is(simbolo1, simbolo2));

// console.log(typeof nombre);

// // console.log("Símbolo: " + nombre); // Da error porque no se puede convertir el símbolo a string

// console.log('nombre' in persona); // No se puede comprobar así si un símbolo está dentro de un objeto

// **************** Compartiendo símbolos ****************
// Sirve para verificar si el símbolo ha sido previamente creado, y si es así usar ese
// let userID = Symbol.for("userID");
// let objecto = {};

// objecto[userID] = "12345";

// console.log(objecto[userID]);
// console.log(userID);

// let userID2 = Symbol.for("userID");
// console.log(userID == userID2);
// console.log(userID === userID2);
// console.log(Object.is(userID, userID2));

// console.log(objecto[userID2]);
// console.log(userID2);

// // De esta forma obtenemos el key usado por el símbolo
// let id = Symbol.for("uniqueId");
// console.log(Symbol.keyFor(id));

// let id2 = Symbol.for("uniqueId");
// console.log(Symbol.keyFor(id2));

// console.log(id === id2);

// let id3 = Symbol("uniqueId");
// console.log(Symbol.keyFor(id3)); // Devuelve undefined porque no existe nada asociado para este id

// **************** Coerción de los símbolos ****************
// let id = Symbol.for("id");
// let numero = 10;
// let texto = "10";
// let bool = true;
// let nan = NaN;

// console.log(numero + texto);
// console.log(numero + Number(texto));
// console.log(numero + nan);
// console.log(bool + bool);
// console.log(bool + (!bool));

// // console.log(texto + id); // Da error
// console.log("Símbolo: ", id); // Para imprimir el símbolo
// console.log("Símbolo: " + String(id)); // Para imprimir el símbolo

// **************** Recuperar propiedades símbolo ****************
let id = Symbol.for("id");
let activo = Symbol.for("activo");

let persona = {
    [id]: "123",
    [activo]: true,
    ["codigo"]: "XY123",
    nombre: "John",
    apellido: "Doe",
    edad: 33
};

// Los símbolos no aparecen así
console.log(Object.keys(persona));

for (let key in persona) {
    console.log(key, persona[key]);
}

// Para obtener los símbolos de un objeto se haría así
let simbolos = Object.getOwnPropertySymbols(persona);

console.log(simbolos);

for (let i in simbolos) {
    console.log(simbolos[i], Symbol.keyFor(simbolos[i]), persona[simbolos[i]]);
}