/* Confeccionar un programa que pida por teclado tres notas de un alumno, calcule el promedio e imprima alguno de estos mensajes:

Si el promedio es >=7 mostrar "Promocionado".
Si el promedio es >=4 y <7 mostrar "Regular".
Si el promedio es <4 mostrar "Reprobado". */

let nota1, nota2, nota3, promedio;

nota1 = parseFloat(prompt('Ingrese la primer nota: '));
nota2 = parseFloat(prompt('Ingrese la segunda nota: '));
nota3 = parseFloat(prompt('Ingrese la tercer nota: '));

promedio = (nota1 + nota2 + nota3)/3;

if(promedio >= 7){
    alert(`PROMOCIONADO, promedio ${promedio}`);
} else if(promedio >= 4){
    alert('REGULAR');
} else {
    alert('REPROBADO');
};