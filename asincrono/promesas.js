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

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe empleado con el id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
};

const getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        const salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({ id: empleado.id, nombre: empleado.nombre, salario: salarioDB.salario });
        }
    });
};

// getEmpleado(1).then(empleado => getSalario(empleado)
//         .then(resp => console.log(`El salario de ${resp.nombre} es de ${resp.salario}`))
//         .catch(err => console.error(err)))
//     .catch(err => console.error(err));

getEmpleado(1).then(empleado => getSalario(empleado))
    .then(resp => console.log(`El salario de ${resp.nombre} es de ${resp.salario}`))
    .catch(err => console.error(err));