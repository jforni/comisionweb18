
let libros =[]

class Libros {
    constructor(id, titulo, autor, isbn, editorial, anio) {
        this.id = id,
        this.titulo = titulo,
        this.autor = autor,
        this.isbn = isbn,
        this.editorial = editorial,
        this.anio = anio
    }
}


function AgregarLibro() {
    let idLibro = prompt('Ingrese el ID del libro: ');
    let tituloLibro = prompt('Ingrese el título del libro: ');
    let autorLibro = prompt('Ingrese el autor del libro: ');
    let isbnLibro = prompt('Ingrese el ISBN del libro: ');
    let editorialLibro = prompt('Ingrese la editorial del libro: ');
    let anioLibro = prompt('Ingrese el año de edición del libro: ');

    let libro = new Libros(idLibro, tituloLibro, autorLibro, isbnLibro, editorialLibro, anioLibro);    
    libros.push(libro);
    
    const bodyTable = document.getElementById("bodyTable");
    for (let i = 0; i < libros.length; i++) {
        bodyTable.innerHTML = `
        <tr>
            <td>${libros[i].id}</td>
            <td>${libros[i].titulo}</td>
            <td>${libros[i].autor}</td>
            <td>${libros[i].isbn}</td>
            <td>${libros[i].editorial}</td>
            <td>${libros[i].anio}</td>
        </tr>`
    }