let texto = "Desde tiempos inmemoriales la Luna ha estado allí, en lo alto de los cielos nocturnos, alumbrando el camino de nuestra especie y de las especies que la precedieron. Pero nadie la ha conocido tanto y tan bien como la humanidad, al punto tal de haber dejado la huella de nuestros zapatos en el polvo de su superficie misma. Y aunque nos tomó siglos comprender que no estaba hecha de queso y dejar de atribuirle nuestras diosas (la Selene griega, la Chandra hindú, la Elatha irlandesa y cientos de deidades más), hoy sabemos que la Luna es un elemento indispensable en el orden mundial que conocemos y necesitamos."

console.log(texto);

/* Propiedad Length */
console.log(texto.length);

/* Método IndexOf */
/* let posicionEncontrada = texto.indexOf('Luna');
console.log(posicionEncontrada);
let palabraNueva = texto.indexOf('Sol');
console.log(palabraNueva)
let fraseBuscada = texto.indexOf('Y aunque nos tomó siglos')
console.log(fraseBuscada) */

/*Método Slice*/
/* let parrafoChico = texto.slice(0, 34);
console.log(parrafoChico);
let parrafoRestante = texto.slice(35);
console.log(parrafoRestante);
let fraseCortada = texto.slice(322);
console.log(fraseCortada); */

/* Método Replace */
/* let nuevoTexto = texto.replace('Luna', 'Sol');
console.log(nuevoTexto) */

/* Métodos toLowerCase y toUpperCase*/
/* let textoMinusculas = texto.toLowerCase();
console.log(textoMinusculas);
let textoMayusculas = texto.toUpperCase();
console.log(textoMayusculas); */

/* Método Trim */
let email = ' julio@gmail.com ';
console.log(email);
let emailLimpio = email.trim();
console.log(emailLimpio);