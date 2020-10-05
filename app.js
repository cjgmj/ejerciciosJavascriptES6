// **************** Cambiar prototipo objeto ****************
// La Programación Orientada a Objetos de JavaScript se encantraba basada
// en prototipos y no en clases. Las clases de introducen en ES6.
// Los prototipos son un conjundo de normas para integrar POO en JavaScript.
// Pero con los prototipos, nosotros somos capaces de realizar algo parecido a:
// - Herencia
// - Encapsulamiento
// - Abstracción
// - Polimorfismo
let gato = {
    sonido() {
        console.log("Miau");
    },
    chillido() {
        console.log("MIAU!");
    }
};

let perro = {
    sonido() {
        console.log("guau");
    }
};

let angora = Object.create(gato);
console.log(Object.getPrototypeOf(angora) === gato);

angora.sonido();
angora.chillido();

// Cambia el prototipo del objeto
Object.setPrototypeOf(angora, perro);

console.log(Object.getPrototypeOf(angora) === gato);

angora.sonido();
angora.chillido(); // Da error porque el método no existe dentro del prototipo perro