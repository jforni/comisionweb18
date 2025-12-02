const alumnos = fetch("datos.js")
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error al cargar los datos:', error));

console.log(alumnos)