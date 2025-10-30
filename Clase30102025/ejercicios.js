/* Clase Rectangulo 
Define una clase Rectangulo con las propiedades ancho y alto. El constructor debe aceptar estos dos valores. Implementa un método llamado calcularArea que retorne el área del rectángulo. Implementa un método llamado calcularPerimetro que retorne el perímetro del rectángulo. Crea una instancia de Rectangulo y muestra su área y perímetro. 
 */

/* Nacho */

/* class Rectangulo {
    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea(){
        console.log(`El area del rectángulo es: ${this.ancho * this.alto}`)
    }

    calcularPerimetro(){
        console.log(`El perímetro del rectángulo es: ${this.ancho*2 + this.alto*2}`)
    }
}

const rectangulo1 = new Rectangulo(5, 10);
console.log(rectangulo1);
rectangulo1.calcularArea();
rectangulo1.calcularPerimetro(); */

/* Fanny */
/* class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  calcularArea() {
    console.log("Área:", this.ancho * this.alto);
  }

  calcularPerimetro() {
    console.log("Perímetro:", 2 * (this.ancho + this.alto));
  }
}

const rect = new Rectangulo(5, 10);
console.log(rect);
rect.calcularArea();
rect.calcularPerimetro(); */

/* Joaquín */
/* class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    calcularArea() {
        return this.ancho * this.alto;
    }
    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }
}
const rectangulo = new Rectangulo(5, 10);
console.log("Área:", rectangulo.calcularArea());
console.log("Perímetro:", rectangulo.calcularPerimetro()); */

/* Clase CuentaBancaria 
Crea una clase CuentaBancaria con las propiedades numeroCuenta y saldo. El constructor debe inicializar el numeroCuenta y establecer el saldo inicial en 0. Añade un método depositar(cantidad) que incremente el saldo. Añade un método retirar(cantidad) que decremente el saldo, solo si hay suficiente saldo. Si no hay suficiente, debe imprimir un mensaje de error. Añade un método obtenerSaldo que retorne el saldo actual. Crea una cuenta, realiza depósitos y retiros, y muestra el saldo. 
 */

/* Leo */
/* class CuentaBancaria {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }
  depositar(cantidad) {
    this.saldo += cantidad;
    console.log("Depositaste $" + cantidad + ", bien ahí " + this.titular + "!");
  }
  retirar(cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
      console.log("Retiraste $" + cantidad + ". Dale, disfrutá la plata " + this.titular + "!");
    } else {
      console.log("Saldo insuficiente para retirar $" + cantidad + ". Cargale plata, " + this.titular + "!");
    }
  }
  mostrarSaldo() {
    console.log("Cuenta de " + this.titular + ": $" + this.saldo);
  }
}

const cuentaJulio = new CuentaBancaria("Julio");
cuentaJulio.mostrarSaldo();
cuentaJulio.depositar(1000);
cuentaJulio.retirar(500);
cuentaJulio.retirar(600); 
cuentaJulio.mostrarSaldo(); */

/* Nacho */
/* class CuentaBancaria{
  constructor (numeroCuenta){
    this.numeroCuenta = numeroCuenta;
    this.saldo = 0
  }
  depositar(cantidadDepositar){
    cantidadDepositar = parseInt(prompt('ingrese el saldo a depositar: '));
    if (cantidadDepositar > 0){
      this.saldo += cantidadDepositar;
      console.log(`usted deposito ${cantidadDepositar}`);
    }
    else {
      alert('debe ingresar una cantidad mayor a 0');
    }
  }
  retirar(cantidadRetirar){
    cantidadRetirar = parseInt(prompt('ingrese el saldo que desea retirar: '));
    if (this.saldo >= cantidadRetirar){
      this.saldo -= cantidadRetirar
      console.log(`usted retiro ${cantidadRetirar}`);
    }
    else{
      alert('no tiene suficiente saldo en la cuenta!!!')
      
    }
  }
  obtenerSaldo(){
    alert(`el saldo actual en la cuenta es ${this.saldo}`)
  }
}

const cuenta1 = new CuentaBancaria (1);
console.log(cuenta1);
cuenta1.depositar();
console.log(cuenta1);
cuenta1.depositar();
console.log(cuenta1);
cuenta1.retirar();
console.log(cuenta1);
cuenta1.obtenerSaldo(); */

/* Julio */
/* class CuentaBancaria {
    constructor(numeroCuenta, saldo){
        this.numeroCuenta = numeroCuenta;
        this.saldo = 0 || saldo;
    }

    depositar(ingreso){
        this.saldo = this.saldo + ingreso;
    }

    retirar(retiro){
        if(retiro <= this.saldo){
            this.saldo = this.saldo - retiro
        } else {
            console.log('No tiene suficiente saldo para retirar!')
        }
    }

    obtenerSaldo(){
        console.log(`El saldo en la cuenta ${this.numeroCuenta} es de: $${this.saldo}`);
    }
}

const miCuenta = new CuentaBancaria(12345, 1000);
console.log(miCuenta);
miCuenta.depositar(3000);
console.log(miCuenta)
miCuenta.retirar(2500);
console.log(miCuenta);
miCuenta.obtenerSaldo();
miCuenta.depositar(15000);
miCuenta.obtenerSaldo();
miCuenta.retirar(2500);
miCuenta.obtenerSaldo(); */