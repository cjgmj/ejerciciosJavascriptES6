// **************** Clases ****************
// Clases en ES5
function Persona(nombre) {
    this.nombre = nombre;

    this.gritarNombre = function() {
        console.log(this.nombre.toUpperCase());
    };
}

Persona.prototype.decirNombre = function() {
    console.log(this.nombre);
};

let persona = new Persona("John");
persona.decirNombre();
persona.gritarNombre();

let persona2 = Persona("John");
console.log(persona2); // Sin el new devuelve undefined

console.log(persona instanceof Persona);
console.log(persona instanceof Object);

console.log(persona2 instanceof Persona);
console.log(persona2 instanceof Object);