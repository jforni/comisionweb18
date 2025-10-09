/* 1. **Ejercicio 1:** Dado un número entero, determina si es par o impar. */
let numero = parseInt(prompt('Ingrese un número: '));

/* switch (true) {
    case (numero%2==0):
        console.log('El número es Par!');
        break;
    case (numero%2!==0):
        console.log('El número es Impar!');
        break;
    default:
        console.log('Ingresó un valor no válido!');
        break;
} */

if(isNaN(numero)){
    console.log('Ingresó un valor inválido');
} else if( numero%2 === 0 ){
    console.log(`El número ${numero} es Par!`);
} else {
    /* console.log(`El número ${numero} es Impar!`); */
    console.log("El número ", numero, " es Impar!");
}