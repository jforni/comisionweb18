const persona = {
    nombre: "Fany",
    edad: 28,
    intereses : ["React", "Diseño", "Viajes"]
}

console.log(persona);

// Convertir a JSON
const texto = JSON.stringify(persona);
console.log(texto);

// Convertir de JSON a objeto
const objeto = JSON.parse(texto)
console.log(objeto.intereses[2])

