//Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
function suma(a, b) {
    return a + b;
}
var resultado = suma(5, 3);
console.log(resultado);

//Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
function suma1(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Uno de los parámetros tiene error');
        return NaN;
    }
    return a + b;
}
var resultado = suma(5, 3);
console.log(resultado);

// Crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(number) {
    return Number.isInteger(number);
}

//A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
function suma2(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Uno de los parámetros tiene error');
        return NaN;
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        alert('Los números deben ser enteros');
        return Math.round(a) + Math.round(b);
    }
    return a + b;
}

//Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
function suma3(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Uno de los parámetros tiene error');
        return NaN;
    }
    if (!validateInteger(a) || !validateInteger(b)) {
        alert('Los números deben ser enteros');
        return Math.round(a) + Math.round(b);
    }
    return a + b;
}