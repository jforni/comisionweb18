/* forEach() */

/* const nombres = ["Ana", "Beto", "Carlos", "Ignacio", "Facundo"];

nombres.forEach((nombre, indice) => {
    console.log(`El nombre en el índice ${indice} es: ${nombre}`);
}); */

/* map() */

/* const numeros = [1, 2, 3, 4, 5, 48, 125];
const cuadrados = numeros.map(num => num * num);
const cubo = numeros.map(num => num * num * num);

console.log(numeros);
console.log(cuadrados);
console.log(cubo); */

/* findIndex() */

/* const frutas = ['naranja', 'banana', 'manzana', 'uva', 'manzana'];

const indiceManzana = frutas.findIndex(fruta => fruta === 'manzana');
const indicePera = frutas.findIndex(fruta => fruta === 'pera');

console.log(indicePera);
console.log(indiceManzana); */

/* reduce() */

/* const precios = [10.5, 20.0, 5.5, 25.3, 112];

const sumaTotal = precios.reduce((total, precio) => {
    return total + precio;
}, 0);

console.log(sumaTotal) */

/* some() */
/* const productos = [
    {nombre: 'Leche', stock: 5},
    {nombre: 'Pan', stock: 0},
    {nombre: 'Huevos', stock: 12}
];

const haySinStock = productos.some(producto => producto.stock === 0);
const hayStockMayorA20 = productos.some(producto => producto.stock > 20);

console.log(haySinStock);
console.log(hayStockMayorA20); */

/* every() */

/* const notas = [8, 7, 6, 9];
const notas2 = [8, 5, 7, 9, 8, 7, 9, 9, 6, 7];

const todosAprobaron = notas.every(nota => nota >= 6);
const todosAprobaron2 = notas2.every(nota => nota >= 6);

console.log(todosAprobaron);
console.log(todosAprobaron2); */