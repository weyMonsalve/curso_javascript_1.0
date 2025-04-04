// 📌Ejercicios:
// 1️⃣ Usar un for para imprimir los números del 10 al 1(de forma descendente).
// 
// 2️⃣ Usar un  while para contar desde 1 hasta 100 pero solo los números pares.
//
// 3️⃣ Usar un do while para pedirle al usuario que ingrese "ok" y
// repetir mientras no lo haga(usando readline - sync).
//


//ejercicio 1

for (let i = 1; i <= 10; i++) {
    console.log("Numero:", i);
};


//ejercicio 2let numero = 1;

let numero = 1;
while (numero <= 100) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
    numero++;
}


// ejercicio 3

const readline = require('readline-sync');

let entrada;

do {
    entrada = readline.question("Escribe 'ok' para continuar: ");
} while (entrada.toLowerCase() !== "ok");

console.log("¡Gracias! Has escrito 'ok'.");