const usuario = {
    nombre: "Julio",
    apellido: "Forni",
    edad: 45,
    estudiante: true
}

localStorage.setItem('usuario', JSON.stringify(usuario));

const usuarioBD = JSON.parse(localStorage.getItem('usuario'));
console.log(usuarioBD)
console.log(usuarioBD.apellido)

/* LOCALSTORAGE */
/* const productos = [{
    id: 1,
    nombre: "Coca-Cola",
    stock: 150,
    descripcion: "Bebida refrescante"
},
{
    id: 2,
    nombre: "Sprite",
    stock: 10,
    descripcion: "Bebida refrescante blanca"
},
{
    id: 3,
    nombre: "Pepsi",
    stock: 135,
    descripcion: "Bebida refrescante copia de Coca-Cola"
},
{
    id: 4,
    nombre: "7Up",
    stock: 5,
    descripcion: "Bebida refrescante para enfermos"
}
]

localStorage.setItem('productos', JSON.stringify(productos));

const productosBD = JSON.parse(localStorage.getItem('productos'))
console.log(productosBD)

localStorage.removeItem('producto')

productos.push({
    id: 5,
    nombre: "Mirinda",
    stock: 50,
    descripcion: "Bebida refrescante naranja"
})
localStorage.setItem('productos', JSON.stringify(productos));

localStorage.clear(); */

/* SESSION STORAGE */
const productos = [{
    id: 1,
    nombre: "Coca-Cola",
    stock: 150,
    descripcion: "Bebida refrescante"
},
{
    id: 2,
    nombre: "Sprite",
    stock: 10,
    descripcion: "Bebida refrescante blanca"
},
{
    id: 3,
    nombre: "Pepsi",
    stock: 135,
    descripcion: "Bebida refrescante copia de Coca-Cola"
},
{
    id: 4,
    nombre: "7Up",
    stock: 5,
    descripcion: "Bebida refrescante para enfermos"
}
]

sessionStorage.setItem('productos', JSON.stringify(productos));

const productosBD = JSON.parse(sessionStorage.getItem('productos'))
console.log(productosBD)

sessionStorage.removeItem('producto')

productos.push({
    id: 5,
    nombre: "Mirinda",
    stock: 50,
    descripcion: "Bebida refrescante naranja"
})
sessionStorage.setItem('productos', JSON.stringify(productos));

/* sessionStorage.clear() */