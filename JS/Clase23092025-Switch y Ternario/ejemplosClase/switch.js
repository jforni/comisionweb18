/* Confeccionar un programa que solicite que ingrese un valor entre 1 y 5. Luego mostrar en castellano el valor ingresado. Mostrar un mensaje de error en caso de haber ingresado un valor que no se encuentre en dicho rango. */

let numero = parseInt(prompt('Ingrese un número entre 1 y 5: '));

switch (numero) {
    case 1:
        console.log('uno')
        break;
    case 2:
        console.log('dos')
        break;
    case 3:
        console.log('tres')
        break;
    case 4:
        console.log('cuatro')
        break;
    case 5:
        console.log('cinco')
        break;

    default:
        alert('Debe ingresar un valor comprendido entre 1 y 5.');
        break;
}