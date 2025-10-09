/* Escribir un programa que solicite la carga de un número entre 0 y 999, y nos muestre un mensaje de cuántos dígitos tiene el mismo. Finalizar el programa cuando se cargue el valor 0. */

/* let numero; */

/* do{
    numero = parseInt(prompt('Ingrese un número entre 0 y 999: '));
    if(numero >= 0 && numero <= 9){
        console.log('Tiene un dígito');
    } else if (numero > 9 && numero <= 99) {
        console.log('Tiene dos dígito');
    } else if (numero > 99 && numero <= 999) {
        console.log('Tiene tres dígito');
    } else {
        console.log('Ingresó un valor inválido!')
    }; 
} while(numero != 0) */

/* do {
    numero = parseInt(prompt('Ingrese un número entre 0 y 999: '));
    switch (true) {
        case (numero >= 0 && numero <= 9):
            console.log('Tiene un dígito');
            break;
        case (numero >= 10 && numero <= 99):
            console.log('Tiene dos dígito');
            break;
        case (numero >= 100 && numero <= 999):
            console.log('Tiene tres dígito');
            break;
        default:
            console.log('Ingresó un valor inválido!')
            break;
    }
} while(numero != 0) */

/* 4. Solicita al usuario números repetidamente. Suma todos los números introducidos. El programa debe terminar cuando el usuario introduzca el número 0 y luego mostrar la suma total */

let numero, suma = 0;

do {
    numero = parseInt(prompt('Ingrese un número: '));
    suma += numero;
} while (numero != 0)

console.log(`La suma de los números ingresados es :${suma}`);