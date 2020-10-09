const empleados = [{
        id: 1,
        nombre: 'John'
    },
    {
        id: 2,
        nombre: 'Jane'
    }, {
        id: 3,
        nombre: 'Linus'
    }
];

const salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

const getEmpleado = (id, callback) => {
    const empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe empleado con el id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
};

const getSalario = (empleado, callback) => {
    const salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, { id: empleado.id, nombre: empleado.nombre, salario: salarioDB.salario });
    }


};

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.error(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.error(err);
        }

        console.log(resp);
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    });
    console.log(empleado);
});