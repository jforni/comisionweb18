const productos = [
    { id: 101, nombre: "Laptop Pro", precio: 1500, stock: 5, categoria: "Electrónica" },
    { id: 102, nombre: "Teclado Mecánico", precio: 120, stock: 15, categoria: "Periféricos" },
    { id: 103, nombre: "Monitor Curvo 32''", precio: 450, stock: 0, categoria: "Electrónica" },
    { id: 104, nombre: "Mouse Vertical", precio: 45, stock: 30, categoria: "Periféricos" },
    { id: 105, nombre: "Disco SSD 1TB", precio: 90, stock: 12, categoria: "Almacenamiento" },
    { id: 106, nombre: "Webcam HD", precio: 60, stock: 0, categoria: "Periféricos" },
];

const puntajes = [85, 92, 78, 95, 88, 70, 100, 81];

/* Primer ejercicio */
/* Recorre el array e imprima en la consola el nombre y el precio de cada producto con el formato: "[Nombre del Producto] - [Precio] USD".  */

/* productos.forEach((producto) => {
    console.log(`${producto.nombre} - U$D ${producto.precio}`);
}) */

/* Crea una nueva variable llamada productosConIVA. Utiliza el método map() para generar un nuevo array de objetos basado en productos. Cada objeto debe ser idéntico al original, pero debe incluir una nueva propiedad llamada precioFinal que sea el precio original incrementado en un 21% (precio * 1.21). */

/* const productosConIVA = productos.map((producto) => 
    producto.precioFinal = producto.precio * 1.21
);

console.log(productosConIVA); */

/* Utiliza el método map() sobre el array productos para crear un nuevo array que contenga solamente los nombres de los productos, convertidos completamente a mayúsculas. */
/* 
const mayusculas = productos.map((producto) => {
    const mayus = producto.nombre;
    console.log(mayus.toUpperCase());
}); */

/* Ejercicio 4: Encontrar Producto Agotado

Utiliza findIndex() en el array productos para encontrar y devolver el índice del primer producto que tenga un stock igual a 0. Almacena el resultado en una variable y muéstralo en consola. Si no encuentra ninguno, debe devolver -1. */

/* const encontrar = productos.findIndex(producto => producto.stock === 0)
console.log(encontrar)
console.log(productos[encontrar]) */

/* Utiliza findIndex() sobre el array puntajes para encontrar el índice del primer puntaje que sea superior a 90 */

/* const encontrar = puntajes.findIndex(numero => numero >= 90)
console.log(encontrar)
console.log(puntajes[encontrar]); */

/* Ejercicio 6: Valor Total del Inventario

Utiliza el método reduce() sobre el array productos para calcular el valor total del inventario. El valor de cada producto es (precio * stock). El resultado final debe ser la suma de estos valores individuales. */

const inventarioTotal = productos.reduce((total, producto) => {
    const totalInvent = producto.precio * producto.stock
    return total + totalInvent;
}, 0);
console.log(inventarioTotal);