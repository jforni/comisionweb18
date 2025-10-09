/*Operadores de Comparación (>, <, ==)

Estos operadores comparan dos valores y devuelven un booleano (true o false). Son cruciales para las sentencias condicionales (if).

== Igualdad (débil): Compara si los valores son iguales, sin importar el tipo de dato.

5 == '5' da true.
=== Igualdad estricta: Compara si los valores y los tipos de dato son iguales. Esta es la forma recomendada para evitar errores.

5 === '5' da false.
!= Desigualdad (débil): Compara si los valores son diferentes.
!== Desigualdad estricta: Compara si los valores o los tipos de dato son diferentes.

5 !== 5 da false.
5 !== '5' da true.
> Mayor que: 10 > 5 da true.
< Menor que: 10 < 5 da false.
>= Mayor o igual que: 10 >= 10 da true.
<= Menor o igual que: 10 <= 5 da false. */

/* if(5 !== 5){
    console.log(true);
} */

/*CONDICIONALES*/
/* Ejemplo: Realizar la carga de una nota de un alumno. Mostrar un mensaje que aprobó si tiene una nota mayor o igual a 4 */

let nota = prompt('Ingrese la nota del alumno: ');
if(nota >= 4){
    console.log('Aprobó');
} else {
    console.log('Desaprobó')
}