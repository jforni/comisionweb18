import { useState } from 'react';
import { Card, CardGroup, Button, ListGroup, Form } from 'react-bootstrap';

export default function CardGroupComponent(props) {
    const [prodComprar, setProdComprar] = useState([]);
    
    function Compra(id, nombre, precio){
        let artCompra = {id, nombre, precio}
        const preCompra = [artCompra]
        setProdComprar([...prodComprar, preCompra])
    }

    return (
        <CardGroup>
            {props.articulos.map((articulo) =>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={articulo.img} />
                    <Card.Body>
                        <Card.Title>{articulo.nombre}</Card.Title>
                        <Card.Text>
                            {articulo.descripcion}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Precio: {articulo.precio}</ListGroup.Item>
                        <ListGroup.Item>Talles: {articulo.talle}</ListGroup.Item>
                        <ListGroup.Item>Colores: {articulo.color}</ListGroup.Item>
                        <ListGroup.Item>Cant. Disponible:{articulo.stock}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Form.Control
                            type="number"
                            id="cantArt"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Button variant="primary" onClick={() => Compra(articulo.id, articulo.nombre, articulo.precio)}>Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            )}
        </CardGroup>
    );
}