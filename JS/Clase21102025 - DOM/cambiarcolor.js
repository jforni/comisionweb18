/* function cambiarColor() {
    const mensaje = document.querySelector(".mensaje");
    mensaje.style.color = 'blue';
    mensaje.style.fontSize = "24px";
} */

const boton = document.querySelector('.btnCambiar');
const mensaje = document.querySelector(".mensaje");
boton.addEventListener("click", () => { 
    mensaje.style.color = 'blue';
    mensaje.style.fontSize = "24px";
})