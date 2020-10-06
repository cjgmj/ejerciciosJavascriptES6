// **************** Añadiendo y buscando elementos en un Set ****************
// let items = new Set();

// items.add(10);
// items.add(11);
// items.add(8);
// items.add(7);
// // Si se meten valores repetidos se ignoran porque los elementos
// // ya existen en el set. Antes de añadir compara con la función
// // Object.is()
// items.add(7);
// items.add(7);
// items.add("7"); // Este si se añade porque Object.is(7, "7") devuelve falso
// items.add(7);

// console.log(items.size);

// console.log(items);

// let items = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7]);

// console.log(items);
// console.log(items.size);

// console.log(items.has(7)); // Comprueba si el elemento está en el Set
// console.log(items.has("7")); // También compara con Object.is()

// **************** Eliminando elementos en un Set ****************
// let items = new Set([1, 2, 3, 4, 5]);

// console.log(items);
// console.log(items.size);

// items.delete(3);

// console.log(items);
// console.log(items.size);

// items.clear(); // Borra todo el Set

// console.log(items);
// console.log(items.size);

// **************** ForEach en los Sets ****************
// let personas = new Set(["John", "Jane", "Linus"]);

// personas.forEach(function(value, key, set) {
//     console.log(value);
//     console.log(key);
//     console.log(set);

//     console.log(personas === set);
// });

// **************** Convertir Set en Array ****************
// let numeros = [1, 2, 3, 4, 5, 6, 7];

// let setNumeros = new Set(numeros);

// console.log(setNumeros);

// // Convertimos el Set en Array mediante el operador Spread
// let arrayNumeros = [...setNumeros];

// console.log(arrayNumeros);

let numeros = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 1, 2, 3, 4, 5];

let arrayNumeros = eliminaDuplicados(numeros);

console.log(arrayNumeros);

function eliminaDuplicados(items) {
    return [...new Set(items)];
}