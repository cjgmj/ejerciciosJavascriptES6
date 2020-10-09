const getNombre = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('John');
        }, 3000);
    });
};

const saludo = async() => {
    const nombre = await getNombre();

    return `Hola ${nombre}`;
};

// getNombre().then(console.log);

saludo().then(console.log);