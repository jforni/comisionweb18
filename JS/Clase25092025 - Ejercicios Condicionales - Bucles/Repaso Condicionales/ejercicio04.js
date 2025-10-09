/* 4. **Ejercicio 4:** Calcula el precio final de un producto. Si la cantidad comprada es mayor a 10 unidades, aplica un descuento del 15% sobre el total. De lo contrario, no hay descuento. */

/* let producto = prompt('Ingrese cantidad de producto seleccionado: ');
let precio = prompt('Ingrese el precio del producto seleccionado: ');
let valor = producto * precio;
let descuento = valor * 0.15;

if(producto > 10){
    alert(`Usted gastó $${valor}`);
    alert(`Su descuento es ${descuento}`);
    alert(`El costo total de su compra es ${valor - descuento}`)
} else {
    alert(`Usted gastó $${valor}`);
} */

/* const precio = 100;
let precioFinal = 0;
let cantProductos = parseInt(prompt('Ingrese cantidad de producto seleccionado: '));

if(isNaN(cantProductos)){
    alert('Por favor ingrese la cantidad de productos en números!');
} else if (cantProductos > 10){
    precioFinal = (cantProductos*100)*0.85;
    console.log(`El precio final con el descuento del 15% es: ${precioFinal}`);
} else {
    precioFinal=cantProductos*precio;
    console.log(`El precio final es: ${precioFinal}`);
}; */

let precio = parseFloat(prompt('Ingrese el precio del producto: '));
let cantidad = parseInt(prompt('Ingrese la cantidad del producto: '));
let totalSinDescuento = precio * cantidad;
let precioFinal;

if(cantidad > 10){
    precioFinal = totalSinDescuento * 0.85;
} else {
    precioFinal = totalSinDescuento;
}

console.log(`El precio final es: $${precioFinal}`)