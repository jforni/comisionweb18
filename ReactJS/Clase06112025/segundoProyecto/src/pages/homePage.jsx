import React from 'react'
import '../styles/homePage.css';

export default function HomePage() {
    const producto = {
        nombre: 'Lavadora',
        marca: 'QueLava',
        precio: 125000,
    };

    let pi = 3.14159624;

    const productos = [
        { nombre: 'Coliflor', id: 1},
        { nombre: 'Ajo', id: 2},
        { nombre: 'Manzana', id: 3},
    ]

    const listaProductos = productos.map(producto => 
        <li key={producto.id}>{producto.nombre}</li>
    )

    function handleClick(){
        alert('¡Hiciste click en el botón!');
    }
    
    return (
        <div className='homeContainer'>
            <section>
                <p className='texto'>Hola, soy un párrafo</p>
                <p>Nombre del Producto: {producto.nombre}</p>
                <p>Marca del Producto: {producto.marca}</p>
                <p>Precio del Producto: {producto.precio}</p>
                <p>Número de Pi: {pi}</p>
            </section>
            <hr />
            <section>
                <ul>{listaProductos}</ul>
            </section>
            <hr />
            <section>
                <button onClick={handleClick}>Haz click!</button>
            </section>
        </div>
    )
}
