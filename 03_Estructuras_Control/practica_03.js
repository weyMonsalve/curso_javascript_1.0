// 📌
// Ejercicios:
//     1️⃣ Usar
// if -else para verificar si un número es positivo, negativo o cero.
// 
// 2️⃣ Usar
// if -  else para comprobar si un usuario tiene acceso según su rol(admin, user, guest).

// 3️⃣ Usar
// switch para mostrar un mensaje según el día de la semana(lunes a domingo).



//ejercicio 1
let numero = 10;
if (numero > 0) {
    console.log("El numero es positivo")
} else if (numero < 0) {
    console.log("El numero es negativo");
} else {
    console.log("El numero es igual a cero")
};
// ejercicio 2

let rol = "user";

if (rol === "admin") {
    console.log("Tienes acceso total al sistema.");
} else if (rol === "user") {
    console.log("Tienes acceso limitado al sistema.");
} else if (rol === "guest") {
    console.log("Solo puedes ver información pública.");
} else {
    console.log("Rol no reconocido.");
};

//ejercicio 3

let dia = "martes";
switch (dia) {
    case "lunes":
        console.log("Este es el primer dia de la semana");
        break;
    case "martes":
        console.log("Este es el segundo dia de la semana");
        break;
    case "miercoles":
        console.log("Esta es la mitad de la semana");
        break;
    case "jueves":
        console.log("Este es el cuarto dia de la semana");
        break;
    case "viernes":
        console.log("Este dia inicia el fin semana");
        break;
    case "sabado":
        console.log("Este es el sexto dia de la semana");
        break;
    case "domingo":
        console.log("Este dia termina la semana y el fin semana");
        break;
    default:
        console.log("Este no es un dia de la semana")
};