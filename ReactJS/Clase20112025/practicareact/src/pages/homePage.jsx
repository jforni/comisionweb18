import React from 'react'
import CardGroupComponent from '../components/cardGroupComponent'
import CarruselComponent from '../components/carruselComponent'

export default function HomePage() {
    const productos = [
        {id: 1, nombre: 'Pantalon', talle: 'M', color: "Negro", precio: '45000', stock: 5, descripcion: "Pantalón negro", img: ''},
        {id: 2, nombre: 'Bermuda', talle: 'XXL', color: "Amarillo", precio: '25000', stock: 15, descripcion: "Bermuda amarillo patito", img: ''},
        {id: 1, nombre: 'Pantalon', talle: 'M', color: "Negro", precio: '45000', stock: 5, descripcion: "Pantalón negro", img: ''},
        {id: 1, nombre: 'Pantalon', talle: 'M', color: "Negro", precio: '45000', stock: 5, descripcion: "Pantalón negro", img: ''},
        {id: 1, nombre: 'Pantalon', talle: 'M', color: "Negro", precio: '45000', stock: 5, descripcion: "Pantalón negro", img: ''},
        {id: 1, nombre: 'Pantalon', talle: 'M', color: "Negro", precio: '45000', stock: 5, descripcion: "Pantalón negro", img: ''},
        {id: 1, nombre: 'Pantalon', talle: 'M', color: "Negro", precio: '45000', stock: 5, descripcion: "Pantalón negro", img: ''},
    ]

    return (
        <div>
            <CarruselComponent />
            <CardGroupComponent articulos={productos} />
        </div>
    )
}
