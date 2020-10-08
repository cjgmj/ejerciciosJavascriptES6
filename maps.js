// **************** Mapas y métodos ****************
// let mapa = new Map();

// mapa.set("nombre", "John");
// mapa.set("edad", 33);
// // mapa.set("apellido"); // Inserta el valor como undefined
// // mapa.set(); // Añade undefined: undefined
// // mapa.set({}, { "hola": "Hola mundo" }); // Esto sería válido

// console.log(mapa);
// console.log(mapa.size);

// console.log(mapa.get("nombre"));
// console.log(mapa.get("edad"));

// console.log(mapa.has("nombre"));
// console.log(mapa.has("apellidos"));

// mapa.delete("nombre");
// console.log(mapa.has("nombre"));
// console.log(mapa.get("nombre")); // Devuelve undefined porque no existe en el map

// mapa.set("edad");
// console.log(mapa);

// mapa.clear(); // Eliminar todos los datos del mapa

// console.log(mapa);

// **************** Inicializaciones de los mapas ****************
// Para inicializar un mapa recibe un array compuesto por otros arrays con los clave-valor
// que se insertarán en el mapa
// let mapa = new Map([
//     ["nombre", "John"],
//     ["edad", 33],
//     [null, undefined], // Esto sería una pareja válida
//     [undefined, null] // Esto sería una pareja válida
// ]);

// console.log(mapa);
// console.log(mapa.get(null));
// console.log(mapa.get(undefined));

// **************** ForEach en los Maps ****************
// let mapa = new Map([
//     ["nombre", "John"],
//     ["edad", 33]
// ]);

// // mapa.forEach(function(valor, key, map) {
// //     console.log(key, valor);
// //     console.log(map);
// // });

// // No es necesario poner todos los valores, por ejemplo no ponemos el map
// mapa.forEach((valor, key) => console.log(key, valor));

// **************** Ciclo for-of ****************
// let numeros = [100, 20, 30, 50, 200];

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }

// for (let i in numeros) {
//     console.log(numeros[i]);
// }

// for (let numero of numeros) {
//     console.log(numero);
// }

// Array
// let personas = [{ "nombre": "John", "edad": 33 }, { "nombre": "Jane", "edad": 35 }, { "nombre": "Linus", "edad": 47 }, { "nombre": "Joe", "edad": 25 }]

// for (let persona of personas) {
//     console.log(persona.nombre, persona.edad);
//     console.log(persona);
// }

// Set
// let personas = new Set();

// personas.add({ "nombre": "John", "edad": 33 });
// personas.add({ "nombre": "Jane", "edad": 35 });
// personas.add({ "nombre": "Linus", "edad": 47 });
// personas.add({ "nombre": "Joe", "edad": 25 });

// for (let persona of personas) {
//     console.log(persona.nombre, persona.edad);
//     console.log(persona);
// }

// Map
let personas = new Map([
    ["nombre", "John"],
    ["apellido", "Doe"],
]);

for (let persona of personas) {
    console.log(persona);
}