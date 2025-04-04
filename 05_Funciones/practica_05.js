// 📌Ejercicios:
// 1️⃣ Crear una función que reciba dos números y retorne el mayor de los dos.
// 2️⃣ Crear una función que reciba un número y retorne true si es par, false si es impar.
// 3️⃣ Crear una función flecha que convierta grados Celsius a Fahrenheit.


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