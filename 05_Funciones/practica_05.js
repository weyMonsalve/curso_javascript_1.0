// 📌Ejercicios:
// 1️⃣ Crear una función que reciba dos números y retorne el mayor de los dos.
// 2️⃣ Crear una función que reciba un número y retorne true si es par, false si es impar.
// 3️⃣ Crear una función flecha que convierta grados Celsius a Fahrenheit.

const e = require("express");


//ejercicio 1

function numeroMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(numeroMayor(10, 5));
console.log(numeroMayor(2, 5));
console.log(numeroMayor(4, 4));


//ejercicio 2


function esPar(numero) {
    return numero % 2 === 0;
}


console.log(esPar(4));
console.log(esPar(7));
console.log(esPar(0));


// ejercicio 3


const celsiusAFahrenheit = (celsius) => (celsius * 9 / 5) + 32;


console.log(celsiusAFahrenheit(0));
console.log(celsiusAFahrenheit(25));
console.log(celsiusAFahrenheit(-10));

// 1️⃣ Crear una función que reciba una edad y retorne un mensaje si es mayor o menor de edad.
// 2️⃣ Crear una función que reciba un número y retorne su cuadrado.
// 3️⃣ Crear una función flecha que reciba dos números y retorne su suma.
// 4️⃣ Crear una función que reciba un número y retorne true si es múltiplo de 5, false si no lo es.
// 5️⃣ Crear una función que reciba una palabra y retorne cuántas letras tiene.
// 6️⃣ Crear una función flecha que reciba una temperatura en Fahrenheit y la convierta a Celsius.
// 7️⃣ Crear una función que reciba tres números y retorne el promedio.
// 8️⃣ Crear una función que reciba un nombre y lo devuelva con la primera letra en mayúscula.
// 9️⃣ Crear una función que reciba una cantidad de segundos y lo convierta a minutos y segundos.
// 🔟 Crear una función flecha que reciba una edad y diga si puede votar(18 o más).



// 1️⃣ Función que verifica si es mayor de edad

function verificarEdad(edad) {
    return edad >= 18 ? "Mayor de edad" : "Menor de edad"
}
console.log(verificarEdad(20));
console.log(verificarEdad(15));


// 2️⃣ Función que retorna el cuadrado de un número


function cuadrado(numero) {
    return numero * numero
}

console.log(cuadrado(4));
console.log(cuadrado(8));


// 3️⃣ Función flecha que suma dos números


const sumar = (a, b) => a + b;
console.log(sumar(5, 3));
console.log(sumar(10, 20));



// 4️⃣ Función que verifica si un número es múltiplo de 5

function esMultiploDeCinco(numero) {
    return numero % 5 === 0;
}
console.log(esMultiploDeCinco(10));
console.log(esMultiploDeCinco(7));


// 5️⃣ Función que cuenta las letras de una palabra

function contarLetras(palabra) {
    return palabra.length;
}
console.log(contarLetras("JavaScript"));
console.log(contarLetras("hola"));


// 6️⃣ Función flecha que convierte Fahrenheit a Celsius
const fahrenheitACelsius = f => (f - 32) * 5 / 9;
console.log(fahrenheitACelsius(32)); // 0
console.log(fahrenheitACelsius(212)); // 100



// 7️⃣ Función que calcula el promedio de tres números

function promedio(a, b, c) {
    return (a + b + c) / 3;
}

console.log(promedio(5, 10, 15));
console.log(promedio(8, 9, 10))


// 8️⃣ Función que convierte la primera letra en mayúscula

function capitalizar(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

console.log(capitalizar("wbeimar"));
console.log(capitalizar("javascript"));


// 9️⃣ Función que convierte segundos a minutos y segundos

function convertirTiempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const resto = segundos % 60;
    return `${minutos} min y ${resto} seg`;
}
console.log(convertirTiempo(130));
console.log(convertirTiempo(59));


// 🔟 Función flecha que dice si puedes votar
const puedeVotar = edad => edad >= 18 ? "Puede votar" : "No puede votar";
console.log(puedeVotar(20));
console.log(puedeVotar(16));