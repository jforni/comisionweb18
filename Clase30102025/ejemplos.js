class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar() {
        alert(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
    }
}

/* const persona1 = new Persona('Julio', 'Forni', 45);
console.log(persona1)
persona1.saludar(); */

class Empleado extends Persona {
    constructor(nombre, apellido, edad, puesto){
        super(nombre, apellido, edad);
        this.puesto = puesto;
    }

    trabajar() {
        console.log(`${this.nombre} ${this.apellido} tiene ${this.edad} años y trabaja como ${this.puesto}`)
    }
}

/* const julio = new Empleado('Julio', 'Forni', 45, 'Desarrollador');
julio.saludar();
julio.trabajar();

const mikael = new Persona('Mikael', 'Forni', 12);
mikael.trabajar(); */

class Ninho extends Persona {
    constructor(nombre, apellido, edad, colegio){
        super(nombre, apellido, edad)
        this.colegio = colegio;
    }

    estudiar() {
        console.log(`El niño ${this.nombre} ${this.apellido} y que tiene ${this.edad} años, está estudiando en: ${this.colegio}`);
    }
};

const mikael = new Ninho('Mikael', 'Forni', 12, 'Primaria CNEC');
mikael.estudiar();