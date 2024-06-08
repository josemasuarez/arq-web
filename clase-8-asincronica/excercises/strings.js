var string1 = "Hola ";
var string2 = "Mundo";
var concat = string1 + string2;
console.log(concat);

// Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
var cadena1 = "Hola";
var cadena2 = "Mundo";
var longitud1 = cadena1.length;
var longitud2 = cadena2.length;
var sumaLongitudes = longitud1 + longitud2;
console.log(sumaLongitudes);

//Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
var texto = "Hola mundo"
var textoEnMayusculas = texto.toUpperCase();
console.log(textoEnMayusculas);

//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var texto = "Hola mundo"
var primerosCinco = texto.substring(0, 5);
console.log(primerosCinco);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var texto = "javascript";
var resultado = texto.substring(0, 1).toUpperCase() + texto.substring(1).toLowerCase();
console.log(resultado);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var texto = "Hola mundo"
var ultimostres = texto.substring(texto.length - 3, texto.length);
console.log(ultimostres);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var texto = "javascript";
var resultado = texto.substring(0, 1).toUpperCase() + texto.substring(1).toLowerCase();
console.log(resultado);

//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var texto = "Hola mundo";
var posicionEspacio = texto.indexOf(" ");
console.log(posicionEspacio);

//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var texto = "programacion divertida";
var primerEspacio = texto.indexOf(" ");
var primeraPalabra = texto.substring(0, primerEspacio);
var segundaPalabra = texto.substring(primerEspacio + 1);
var primeraPalabraFormateada = primeraPalabra.substring(0, 1).toUpperCase() + primeraPalabra.substring(1).toLowerCase();
var segundaPalabraFormateada = segundaPalabra.substring(0, 1).toUpperCase() + segundaPalabra.substring(1).toLowerCase();
var resultado = primeraPalabraFormateada + " " + segundaPalabraFormateada;
console.log(resultado);