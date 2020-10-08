// **************** Promesas ****************
// function tareaAsincrona() {
//     setTimeout(function() {
//         console.log("Proceso asíncrono terminado");
//         resolve();
//     }, 1300);
// }

// tareaAsincrona();

// console.log("Código secuencial");

// function resolve() {
//     console.log("Todo OK!");
// }

// function reject() {
//     console.error("Todo MAL!");
// }

function tareaAsincrona() {
    let promesa = new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Proceso asíncrono terminado");
            resolve();
        }, 1300);
    });

    return promesa;
}

tareaAsincrona().then(function() {
    console.log("Todo OK!");
}, function() {
    console.error("TODO MAL!");
});

console.log("Código secuencial");