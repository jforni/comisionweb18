let alumnos = ['Fany', 'Luciana', 'Ignacio', 'Alejo', 'Gonzalo', 'Javier', 'Carolina', 'Marcos', 'Luciana', 'Leonardo', 'Facundo', 'Lucia', 'Joaquín', 'Luciana'];

console.log(alumnos);

/* Propiedad Length */

/* console.log(alumnos.length)

console.log(alumnos.at(-1));
console.log(alumnos[alumnos.length-1]); */

/* Método Concat */

/* let alumnosG1 = ['Fany', 'Alejo'];
let alumnosG2 = ['Javier', 'Leonardo', 'Joaquín'];
let alumnosG3 = ['Gonzalo', 'Luciana'];
let alumnosG4 = ['Marcos', 'Pablo'];
let alumnosG5 = ['Facundo', 'Ignacio', 'Lucia', 'Carolina'];

let comisionW18 = alumnosG1.concat(alumnosG2, alumnosG3, alumnosG4, alumnosG5, ['Julio']);

console.log(comisionW18) */

/* Recorrer arreglo */

/* let numeros = [23, 56, 300, 67, 123, 45, 125];
for(let i = 0; i < numeros.length; i++){
    console.log(`Vuelta N°: ${i+1}`)
    console.log(numeros[i] * 2);
    console.log(Math.sqrt(numeros[i]));
}; */

/* Agregar al final o al inicio */

/* console.log(alumnos.push('Julio'))
console.log(alumnos)
console.log(alumnos.unshift('César', 'Miguel'))
console.log(alumnos) */

/* Eliminar al final o al inicio */

/* alumnos.pop()
console.log(alumnos)
alumnos.shift();
console.log(alumnos) */

/* Método Splice */
/* alumnos.splice(4,1);
console.log(alumnos);

alumnos.splice(9, 0, 'Walter', 'Silvana');
console.log(alumnos);

alumnos.splice(5);
console.log(alumnos) */

/* Buscar elementos */
/* 
console.log(alumnos.indexOf('Luciana'));
console.log(alumnos.indexOf('Julio'));

console.log(alumnos.includes('Luciana'));
console.log(alumnos.includes('Julio')); */

/* Ordenar y dar vuelta un arreglo */
/* console.log(alumnos.sort());
console.log(alumnos.reverse()); */

/* let numeros = [23, 56, 300, 67, 123, 45, 125];
console.log(numeros);

console.log(numeros.sort());
console.log(numeros.sort((a,b) => a - b));
console.log(numeros.sort((a,b) => b - a)); */

/* Copiar arrays Sin romper referencias */
let alumnosNuevos = alumnos;
console.log(alumnosNuevos);

let alumnosNuevos2 = alumnos.slice();
console.log(alumnosNuevos2);
alumnosNuevos2.push('Julio')
console.log(alumnosNuevos2)
console.log(alumnos)