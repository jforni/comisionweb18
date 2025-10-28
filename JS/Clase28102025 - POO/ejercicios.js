/* 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
 */
/* Facundo */
/* function Auto(color, marca, modelo){
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;

    this.encender = function(){
        alert('Auto encendido')
    }

    this.apagar = function(){
        alert('Auto apagado')
    }
}

let auto = new Auto('rojo', 'ford', 'ka');
console.log(auto);
auto.encender();
auto.apagar(); */

/* Pablo */
/* let auto = {
    color: "Rojo",
    marca: "Toyota",
    modelo: "Corolla",
    encendido: false, // al inicio está apagado
    
    encender: function() {
        if (!this.encendido) {
            this.encendido = true;
            console.log("El auto está ahora encendido.");
        } else {
            console.log("El auto ya estaba encendido.");
         }
    },
    
    apagar: function() {
        if (this.encendido) {
            this.encendido = false;
            console.log("El auto se apagó.");
        } else {
            console.log("El auto ya estaba apagado.");
        }
    }
};

auto.encender();
auto.apagar();
console.log(auto); */

/* Joaquín */
/* const auto = {
    color: "rojo",
    marca: "Toyota",
    modelo: "Corolla",
    encendido: false,
    encender: function() {
        this.encendido = true;
        console.log("El auto está encendido.");
    },
    apagar: function() {
        this.encendido = false;
        console.log("El auto está apagado.");
    }
};
console.log(auto);
auto.encender();
auto.apagar(); */

/* Nacho */
/* let auto = {
  color : 'negra',
  marca: 'ferrari',
  modelo: 'f-40',
  encender: function(){
    alert('el auto esta encendido')
  },
  
  apagar: function(){
    alert('el auto esta apagado')
  }
}

console.log(auto);
auto.encender();
auto.apagar(); */