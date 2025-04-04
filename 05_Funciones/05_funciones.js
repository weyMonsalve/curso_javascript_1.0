// 📌 Función simple
function saludar() {
    console.log("¡Hola, bienvenido a JavaScript!");
}
saludar();

// 📌 Función con parámetros
function saludarPersona(nombre) {
    console.log("¡Hola, " + nombre + "!");
}
saludarPersona("Wbeimar");

// 📌 Función con retorno
function sumar(a, b) {
    return a + b;
}
console.log("La suma es:", sumar(5, 3));

// 📌 Función Flecha
const multiplicar = (a, b) => a * b;
console.log("Multiplicación:", multiplicar(4, 2));
