// Los callbacks es la forma tradicional de hacer tareas con delay.
// Los callbacks no son asíncronos a no ser que tengan una tarea
// asíncrona dentro, simplemente demoran la acción de una función
// hasta que se realizar una tarea anterior.

const getUsuarioById = (id, callback) => {
    "use strict";

    const usuario = {
        nombre: 'John',
        id
    };

    if (id === 20) {
        callback(`El usuario con el id ${id}, no existe`);
    }

    callback(null, usuario);
};

getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.error(err);
    }

    console.log("Usuario de base de datos", usuario);
});