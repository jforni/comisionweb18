/* Primer ejemplo */

/* function square(number){
    return number * number;
}

let cuadrado = square(10);
console.log(cuadrado); */

/* Segundo ejemplo */

/* let num = parseInt(prompt('Ingrese un número: '));

function square(number){
    return (number * number);
};

let cuadrado = square(num)
console.log(cuadrado); */

/* Tercer ejemplo */

/* let num = parseInt(prompt('Ingrese un número: '));
let calculoCuadrado = square(num);
let num1 = 34;
let num2 = 123;

function square(number){
    if(isNaN(number)){
        alert('Ingresó un valor no númerico')
    } else {
        let cuadrado = number * number
        return cuadrado;
    };
};

function sumar(number1, number2){
      if(isNaN(number1) || isNaN(number2)){
        alert('Ingresó un valor no númerico')
    } else {
        let suma = number1 + number2
        return suma;
    };
}

console.log(calculoCuadrado);
console.log(sumar(num1, num2)); */

/* Funciones Expresadas */
/* const sumar = function(a,b){
    return (a+b);
}

console.log(sumar(45, 56)); */

/* Funciones Arrow Function */
/* const multiplicar = (a,b) => a * b;

const sumar = (a,b) => {
    let suma = a + b;
    return suma;
}
console.log(multiplicar(4, 6));
console.log(sumar(5,45)); */


/* Funciones anónimas y callbacks */

/* setTimeout(function() {
    console.log('Ejecutado después de 2 segundos');
}, 2000); */

/* Callback Hell */
/* pedirUsuario(1, function(usuario) {
  pedirPosts(usuario.id, function(posts) {
    pedirComentarios(posts[0].id, function(comentarios) {
      console.log(comentarios);
    });
  });
}); */