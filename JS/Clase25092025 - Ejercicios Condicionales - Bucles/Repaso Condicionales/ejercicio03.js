/* 3. **Ejercicio 3:** Dada una calificación numérica del 0 al 100, asigna una letra de acuerdo a la siguiente escala: 90-100 (A), 80-89 (B), 70-79 (C), 60-69 (D), 0-59 (F). 
 */

let nota = parseFloat(prompt('Ingrese la nota del alumno: '));

/* switch (true) {
    case (nota >= 90 && nota <= 100):
        console.log('La calificación es "A"');
        break;
    case (nota >= 80 && nota < 90):
        console.log('La calificación es "B"');
        break;    
    case (nota >= 70 && nota < 80):
        console.log('La calificación es "C"');
        break;
    case (nota >= 60 && nota < 70):
        console.log('La calificación es "D"');
        break;
    default:
        console.log('La calificación es "F"');
        break;
} */

if(nota >= 90 && nota <=100){
    console.log('La calificación es "A"');
} else if (nota <90 && nota >=80){
    console.log('La calificación es "B"');
} else if (nota <80 && nota >=70){
    console.log('La calificación es "C"');
} else if (nota <70 && nota >=60){
    console.log('La calificación es "D"');
} else if (nota <60 && nota >=0){
    console.log('La calificación es "F"');
} else {
    console.log('Ingrese una nota entre 0 y 100!');
}