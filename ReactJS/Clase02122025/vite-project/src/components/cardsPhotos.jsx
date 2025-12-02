import React, { useEffect, useState } from 'react';
import {Button, Card} from 'react-bootstrap'

export default function CardsPhotos() {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => {return response.json()})
            .then((photosApi) => setPhotos(photosApi))
            .catch((error) => console.log(error)) 
    }, [])

    return (
        <div>
            {photos.map(photo => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={photo.thumbnailUrl} />
                        <Card.Body>
                            <Card.Title>{photo.id}</Card.Title>
                            <Card.Text>
                                <p>Album: </p>
                                {photo.albumId}
                            </Card.Text>
                            <Card.Text>
                                <p>Titulo:</p>
                                {photo.title}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}
