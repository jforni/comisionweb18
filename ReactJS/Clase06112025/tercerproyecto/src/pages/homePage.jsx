import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import '../styles/homePage.css';

export default function HomePage() {

    const [libros, setLibros] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        const libro = {
            id: e.target.formGroupId.value,
            nombre: e.target.formGroupNombreLibro.value,
            autor: e.target.formGroupNombreAutor.value,
            editorial: e.target.formGroupNombreEditorial.value
        };
        
        setLibros([...libros, libro]);

        e.target.formGroupId.value = '';
        e.target.formGroupNombreLibro.value = '';
        e.target.formGroupNombreAutor.value = '';
        e.target.formGroupNombreEditorial.value = '';
    };

    function BorrarLibro(id) {
        const nuevosLibros = libros.filter(libro => libro.id !== id);
        setLibros(nuevosLibros);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} id='formCargaLibro'>
                <Form.Group className="mb-3" controlId="formGroupId">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese el ID " />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupNombreLibro">
                    <Form.Label>Nombre del libro</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre del libro..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupNombreAutor">
                    <Form.Label>Nombre del Autor</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre del Autor..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupNombreEditorial">
                    <Form.Label>Nombre de la Editorial</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre de la Editorial..." />
                </Form.Group>
                <button type="submit" className="btn btn-primary">Agregar Libro</button>
            </Form>

            <Table striped bordered hover id='tablaLibros'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Autor</th>
                        <th>Editorial</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map(libro => {
                        return (
                            <tr key={libro.id}>
                                <td>{libro.id}</td>
                                <td>{libro.nombre}</td>
                                <td>{libro.autor}</td>
                                <td>{libro.editorial}</td>
                                <td>
                                    <Button variant="danger" onClick={() => BorrarLibro(libro.id)}>Eliminar</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}