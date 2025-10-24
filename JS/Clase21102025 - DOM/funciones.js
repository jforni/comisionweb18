function cambiarSaludo() {
    const titulo = document.getElementById("saludo");
    titulo.innerText = "¡Hola desde JavaScript!";
}

function agregarParrafo() {
    const nuevoParrafo = document.createElement("h1");
    nuevoParrafo.innerText = "Soy un nuevo párrafo";
    document.getElementById("contenedor").appendChild(nuevoParrafo);
}

const boton = document.querySelector('.btnCambiar');
const mensaje = document.querySelector(".mensaje");
boton.addEventListener("click", () => { 
    mensaje.style.color = 'blue';
    mensaje.style.fontSize = "24px";
})

const superBoton = document.getElementById('superBoton');
superBoton.addEventListener("click", () => {
    alert('¡Activaste el superpoder!');
});