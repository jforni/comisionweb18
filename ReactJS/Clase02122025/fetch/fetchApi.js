fetch("https://jsonplaceholder.typicode.com/users")
    .then((respuesta) => respuesta.json())
    .then((datos) => console.log(datos))
    .catch((error) => console.error('Error: ', error));