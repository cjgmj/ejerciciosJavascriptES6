// **************** Extensiones objetos literales ****************
// function crearPersona(nombre, apellido, edad) {
//     return {
//         // ES5
//         // nombre: nombre,
//         // apellido: apellido,
//         // edad: edad

//         // ES6
//         nombre,
//         apellido,
//         edad
//     };
// }

// let persona = crearPersona("John", "Doe", 33);

// console.log(persona);

// **************** Métodos concisos ****************
var persona = {
    nombre: "John",

    // ES5
    // getNombre: function() {
    //     console.log(this.nombre);
    // }

    // ES6
    getNombre() {
        console.log(this.nombre);
    }
};

persona.getNombre();