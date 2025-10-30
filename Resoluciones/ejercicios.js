class CuentaBancaria {
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
miCuenta.obtenerSaldo();