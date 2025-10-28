/* let auto = {
    color: "verde",
    marca: "Fiat",
    modelo: "Bravo",
    año: 2008,
    potencia: "130bhp"
}

console.log(auto);
console.log(auto.modelo);

auto.precio = 70000;
console.log(auto);

delete auto.precio;
console.log(auto); */

/* let productos = [
    {id: 1, name: 'Leche', price: 120, categories: ['familiar', 'comida']},
    {id: 2, name: 'Arroz', price: 80, categories: ['familiar', 'comida']},
    {id: 3, name: 'Lavadora', price: 7800, categories: ['electrodomésticos']}
]; */
/* 
console.log(productos)
console.log(productos[2].categories[0]); */

/* for (let i = 0; i < productos.length; i++){
    let producto = productos[i];
    console.log(producto.name);
    console.log(`ID: ${producto.id}`);
    console.log(`PRECIO: ${producto.price}`);
    console.log(`Categorias: ${producto.categories}`);
} */


/* MÉTODOS */
/* const calculadora = {
    num1: 10,
    num2: 5,

    //Método: un función que vive dentro del objeto
    sumar: function() {
        return this.num1 + this.num2
    },

    restar() {
        return this.num1 - this.num2;
    }
};

console.log(calculadora.sumar());
console.log(calculadora.restar()); */

/*  Función constructora */
/* function Auto(color, marca, modelo, anio){
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio
}

let auto = new Auto('rojo', 'fiat', 'bravo', 2008);
console.log(auto);

let auto2 = new Auto('negro', 'chevrolet', 'camaro', 2024);
console.log(auto2);

let auto3 = new Auto('ford', 2025, 'bronco', 'azul');
console.log(auto3); */

/* Clases */

class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    /* Métodos */
    comer(){
        alert('comiendo')
    }
};

let persona1 = new Persona('Juan', 'Mendoza', 20);
let persona2 = new Persona('Carlos', 'Gardel', 24);

console.log(persona1.nombre + ' ' + persona1.apellido)
console.log(`${persona2.nombre} ${persona2.apellido} tiene ${persona2.edad} años.`);
persona2.comer();