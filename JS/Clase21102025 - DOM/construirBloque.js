function agregarParrafo() {
    const nuevoParrafo = document.createElement("h1");
    nuevoParrafo.innerText = "Soy un nuevo párrafo";
    document.getElementById("contenedor").appendChild(nuevoParrafo);
}