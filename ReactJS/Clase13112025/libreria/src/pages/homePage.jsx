import React, { useState } from 'react';
import { Form, Table, Button } from 'react-bootstrap';
import '../styles/homePage.css'

export default function HomePage() {

    const [libros, setLibros] = useState([]);

    function handleSubmitLibro(e) {
        e.preventDefault();

        const libro = {
            id: libros.length + 1,
            nombreLibro: e.target.formGroupNombreLibro.value,
            autorLibro: e.target.formGroupNombreAutor.value,
            editorial: e.target.formGroupNombreEditorial.value,
            cantStock: e.target.formGroupCantStock.value,
            descripcion: e.target.formGroupDescripcion.value,
        };

        setLibros([...libros, libro]);
        /* setLibros(libros.push(libro)) */

        e.target.formGroupNombreLibro.value = '';
        e.target.formGroupNombreAutor.value = '';
        e.target.formGroupNombreEditorial.value = '';
        e.target.formGroupCantStock.value = '';
        e.target.formGroupDescripcion.value = '';
    }

    function ModificarLibro(id) {
        const nuevosDatos = libros.map(libro => {
            if (libro.id === id) {
                formGroupNombreLibro.value = libro.nombreLibro;
                formGroupNombreAutor.value = libro.autorLibro;
                formGroupNombreEditorial.value = libro.editorial;
                formGroupCantStock.value = libro.cantStock;
                formGroupDescripcion.value = libro.descripcion;
            };
            
        });

    }

    function BorrarLibro(id) {
        const nuevosLibros = libros.filter(libro => libro.id !== id);
        setLibros(nuevosLibros)
    }

    return (
        <div>
            <Form onSubmit={handleSubmitLibro} id='formCargaLibro'>
                <Form.Group className="mb-3" controlId="formGroupNombreLibro">
                    <Form.Label>Nombre del Libro</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el Nombre del libro..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupNombreAutor">
                    <Form.Label>Nombre del Autor</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el Nombre del autor..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupNombreEditorial">
                    <Form.Label>Nombre de la Editorial</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el Nombre de la editorial..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupCantStock">
                    <Form.Label>Cantidad Stock</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese la cantidad en stock..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDescripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button type='submit' onClick={ModificarLibro} variant='success'>Cargar libro</Button>

            </Form>
            <hr />
            <Table id='tablaLibros'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre del libro</th>
                        <th>Autor</th>
                        <th>Editorial</th>
                        <th>Stock</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map(libro => {
                        return (
                            <tr>
                                <td>{libro.id}</td>
                                <td>{libro.nombreLibro}</td>
                                <td>{libro.autorLibro}</td>
                                <td>{libro.editorial}</td>
                                <td>{libro.cantStock}</td>
                                <td>{libro.descripcion}</td>
                                <td>
                                    <Button variant='warning' onClick={() => ModificarLibro(libro.id)}>Modificar</Button>
                                </td>
                                <td>
                                    <Button variant='danger' onClick={() => BorrarLibro(libro.id)}>Eliminar</Button>
                                </td>
                            </tr>
                        )
                    })

                    }
                </tbody>
            </Table>
        </div>
    )
}
