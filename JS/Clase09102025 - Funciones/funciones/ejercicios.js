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
/* 
let texto = prompt('Ingrese un texto: ');

function analisisTexto(texto){
    let textoMayusc = texto.toUpperCase();
    let textoMinusc = texto.toLowerCase();

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

analisisTexto(texto); */

/* Arrow Function */

/* Área de un Rectángulo: Crea una función calcularAreaRectangulo(alto, ancho) que devuelva el área. */

/* let ancho = parseFloat(prompt('Ingrese el ancho del rectángulo: '));
let alto = parseFloat(prompt('Ingrese el alto del rectángulo: '));
let lado1 = parseFloat(prompt('Ingrese el ancho del rectángulo: '));
let lado2 = parseFloat(prompt('Ingrese el alto del rectángulo: '));

const areaRectangulo = (lado1, lado2) => {
    let calculoArea = lado1 * lado2;
    console.log(calculoArea);
};

areaRectangulo(ancho, alto);
areaRectangulo(lado1, lado2); */

/* Conversor de Moneda: Crea una función convertirEurosADolares(euros) que tome una cantidad en euros y devuelva su equivalente en dólares (usa un factor de conversión de, por ejemplo, $1$ euro $= 1.08$ dólares). */

/* Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar» */

function calcularLetraDni() {
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

    do {
        dni = prompt('Ingrese su número de documento: ');
        if (isNaN(dni) || dni < 0 || dni > 99999999) {
            alert('Ingreso un valor no válido');
        } else {
            let calculoResto = dni % 23;
            console.log(calculoResto)
            let letraDni = letras[calculoResto];
            console.log(letraDni);
        };
    } while (dni != 'i');
}

calcularLetraDni()

/* const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
while (true) {
  let dni = prompt("Introduce tu número de DNI (sin letra):");
  if (dni === null) {
    alert("se cancelo el programa");
    break;
  }
  dni = Number(dni);
  if (isNaN(dni) || dni < 0 || dni > 99999999) {
    alert("ingresa un número válido entre 0 y 99.999.999.");
    continue;
  }
  const resto = dni % 23;
  const letra = letras[resto];
 
  alert(`Número de DNI: ${dni}\nLetra del DNI: ${letra}`);
} */