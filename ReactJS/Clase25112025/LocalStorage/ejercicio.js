const usuariosSistema = []
const nombre = prompt('Ingrese el nombre del usuario: ');
const apellido = prompt('Ingrese el apellido del usuario: ');
const email = prompt('Ingrese el correo: ');
const password = prompt('Ingrese el password: ');

const usuario = {
    nombreUsuario: nombre,
    apellidoUsuario: apellido,
    emailUsuario: email,
    passwordUsuario: password,
}

usuariosSistema.push(usuario);

localStorage.setItem('usuarios', JSON.stringify(usuariosSistema))
localStorage.setItem('usuario', JSON.stringify(usuario));