import React from 'react';
/* import CarouselComponent from '../components/carouselComponent';
import TableComponent from '../components/tableComponent'; */
import { Table } from 'react-bootstrap';

export default function HomePage() {
    const libros = [
        { id: 1, nombre: 'Drácula', autor: 'Bram Stoker', editorial: 'Cúspide' },
        { id: 2, nombre: 'Conde de Montecristo', autor: 'Alejandro Dumas', editorial: 'Cúspide' },
        { id:3, nombre: 'Los tres mosqueteros', autor: 'Alejandro Dumas', editorial: 'Pacífico'},
    ];

    const listaLibros = libros.map(libro => {
        return (
            <tr>
                <td>{libro.id}</td>
                <td>{libro.nombre}</td>
                <td>{libro.autor}</td>
                <td>{libro.editorial}</td>
            </tr>
        )
    });

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Autor</th>
                        <th>Editorial</th>
                    </tr>
                </thead>
                <tbody>
                    {listaLibros}
                </tbody>
            </Table>
        </div>
    )
}