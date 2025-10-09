/*  Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 */
/* let num = parseInt(prompt('Ingrese un número entero: '));

function parImpar(numero) {
    if (isNaN(numero)) {
        alert('Ingresó un valor no númerico!');
    } else if (numero % 2 == 0) {
        console.log(`El número ${numero} es PAR`);
    } else {
        console.log(`El número ${numero} es IMPAR`);
    }
}

parImpar(num);

let num1 = 45;
let num2 = 86;
let suma = num1 + num2;
parImpar(suma);

parImpar(145); */

/* Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla. */

/* let lado1 = parseFloat(prompt('Ingrese el valor del lado más largo: '));
let lado2 = parseFloat(prompt('Ingrese el valor del lado más corto: '));

function perimetroRectangulo(ladoLargo, ladoCorto){
    let perimetro = 2*(ladoLargo + ladoCorto);
    return perimetro;
}

console.log(perimetroRectangulo(lado1, lado2)); */

/* Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario. */

/* let num = parseInt(prompt('Ingrese un número: '));

function tablaMultiplicar(numero){
    for (let i = 0; i <= 10 ; i++) {
        console.log(`${numero} * ${i} = ${numero * i}`);
    }
};

tablaMultiplicar(num); */

/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

let texto = prompt('Ingrese un texto: ');

function analisisTexto(texto){
    /* let textoMayusc = texto.toUpperCase();
    let textoMinusc = texto.toLowerCase(); */

    if(!isNaN(texto)){
        alert('Ingresó un valor no válido!');
    } else if(texto === texto.toUpperCase()){
        alert('Todo el texto está en Mayúsculas!');
    } else if (texto === texto.toLowerCase()) {
        alert('Todo el texto está en Minúsculas!');
    } else {
        alert('El texto tiene tamaños mixtos!!');
    }
};

analisisTexto(texto);