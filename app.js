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
let mapa = new Map([
    ["nombre", "John"],
    ["edad", 33],
    [null, undefined], // Esto sería una pareja válida
    [undefined, null] // Esto sería una pareja válida
]);

console.log(mapa);
console.log(mapa.get(null));
console.log(mapa.get(undefined));