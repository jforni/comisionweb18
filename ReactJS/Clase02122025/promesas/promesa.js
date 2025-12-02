/* const promesa = new Promise((resolve, reject) => {
    const exito = false;

    if(exito) {
        resolve("¡Operación exitosa!");
    } else {
        reject("Algo salió mal.");
    }
})

promesa
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error)); */

function esperar(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("¡Tiempo cumplido!");
        }, ms);
    })
}

esperar(3000)
    .then((mensaje) =>console.log(mensaje));