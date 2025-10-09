/*2. **Número Positivo, Negativo o Cero** Escribe una función `tipoDeNumero(numero)` que reciba un número y devuelva una cadena de texto indicando si es "Positivo", "Negativo" o "Cero". */

let numero = parseInt(prompt('Ingrese un número: '));

    /* Resuelto con Switch */
switch (true) {
    case (numero < 0):
        console.log('El número es Negativo');
        break;
    case (numero == 0):
        console.log('El número es Cero');
        break;
    case (numero > 0):
        console.log('El número es Positivo');
        break;
    default:
        console.log('Ingrese un número')
        break;
}

    /* Resuelto con If-Else */
if(numero > 0){
    console.log('El número es Positivo');
} else if (numero < 0){
    console.log('El número es Negativo');
} else if (numero == 0){
    console.log('El número es Cero');
} else {
    console.log('Por favor, ingrese un número');
}

    /* Resuelto con Ternario */
let mensaje = (numero > 0) ? 'El número es positivo' : (numero < 0) ? 'El número es negativo' : (numero == 0) ? 'El número es cero' : 'Por favor, ingrese un número!';
console.log(mensaje);