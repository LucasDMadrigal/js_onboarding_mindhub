/**
 * 
 * Nivel de dificultad: Bajo
 * 
 */

// Ejercicio 1: Comparación de números
let num1 = 4;
let num2 = 5;

if (num1 > num2) {
    console.log(num1);
} else if (num2 > num1) {
    console.log(num2);
} else {
    console.log("Los números son iguales");
}

if (num1 === num2) {
    console.log("Los números son iguales");
} else {
    console.log("Los números son diferentes");
}

let date1 = "2018-9-2";
let date2 = "2023-7-5";

if (date1 > date2) {
    console.log(`La fecha ${date1} es mayor que la fecha ${date2}`);
} else if (date2 > date1) {
    console.log(`La fecha ${date2} es mayor que la fecha ${date1}`);
} else {
    console.log("Las fechas son iguales");
}

date1 = "2023-7-5";
date2 = "2018-9-2";

if (date1 > date2) {
    console.log(`La fecha ${date1} es mayor que la fecha ${date2}`);
} else if (date2 > date1) {
    console.log(`La fecha ${date2} es mayor que la fecha ${date1}`);
} else {
    console.log("Las fechas son iguales");
}

let number1 = 5;
let number2 = 7;
let number3 = 9;

if (number1 >= number2 && number1 >= number3) {
    console.log(`El número ${number1} es el más grande`);
} else if (number2 >= number1 && number2 >= number3) {
    console.log(`El número ${number2} es el más grande`);
} else {
    console.log(`El número ${number3} es el más grande`);
}

/**
 * 
 * Nivel de dificultad: Medio
 * 
 */

// Ejercicio 2: Interpretación de colores
let color = prompt("Ingrese un color (rojo, azul o verde):");

switch (color) {
    case "rojo":
        console.log("El color de la pasión");
        break;
    case "azul":
        console.log("El color del mar.");
        break;
    case "verde":
        console.log("El color de la naturaleza");
        break;
    default:
        console.log("Color desconocido");
}

num1 = parseInt(prompt("Ingrese el primer número (1 a 100):"));
num2 = parseInt(prompt("Ingrese el segundo número (1 a 100):"));
let operacion = prompt("Ingrese la operación (suma, resta, multiplicación, división):");

switch (operacion) {
    case "suma":
        console.log(`Suma: ${num1} + ${num2} = ${num1 + num2}`);
        break;
    case "resta":
        console.log(`Resta: ${num1} - ${num2} = ${num1 - num2}`);
        break;
    case "multiplicación":
        console.log(`Multiplicación: ${num1} * ${num2} = ${num1 * num2}`);
        break;
    case "división":
        console.log(`División: ${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log("Operación no válida");
}

let persona1 = {
    nombre: "Juan",
    edad: 39,
    altura: 1.69
};

let persona2 = {
    nombre: "Rosa",
    edad: 35,
    altura: 1.75
};

let masAlto = persona1.altura > persona2.altura ? persona1.nombre : persona2.nombre;
let mayor = persona1.edad > persona2.edad ? persona1.nombre : persona2.nombre;

console.log(`${masAlto} es más alto y mayor que ${mayor}`);

let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));
let altura = parseFloat(prompt("Ingrese su altura (en metros):"));
let vision = parseFloat(prompt("Ingrese su visión (de 0 a 10):"));

if (edad >= 18 && altura > 1.10 && vision >= 8) {
    console.log("Estás calificado para conducir");
} else {
    console.log("No estás calificado para conducir");
}

let userAge = parseInt(prompt("Ingrese su edad:"));

if (userAge >= 0 && userAge <= 12) {
    console.log("Eres un infante");
} else if (userAge >= 13 && userAge <= 18) {
    console.log("Eres un adolescente");
} else if (userAge >= 19 && userAge <= 45) {
    console.log("Eres un joven mayor");
} else if (userAge > 45) {
    console.log("Eres anciano");
} else if (userAge > 100) {
    console.log("¿Realmente es tan viejo?");
} else {
    console.log("Edad no válida");
}

let num = parseInt(prompt("Ingrese un número (1 a 3):"));

switch (num) {
    case 1:
        console.log(`El número ingresado es ${num}`);
        break;
    case 2:
        console.log(`El doble del número ingresado es ${num * 2}`);
        break;
    case 3:
        console.log(`El triple del número ingresado es ${num * 3}`);
        break;
    default:
        console.log("Ese valor no está permitido");
}

/**
 * 
 * Nivel de dificultad: Medio
 * 
 */

// Ejercicio 3: Interacción con cliente
let customerName = prompt("Ingrese su nombre:");
let pass = prompt("¿Tiene pase? (vip o normal):");
let entrance = prompt("¿Tiene entrada? (sí o no):");

if (customerName === "Juan" || pass === "vip") {
    let useTicket = prompt("¿Quiere usar su ticket? (sí o no):");
    if (useTicket === "sí") {
        console.log("¡Bienvenido!");
    } else {
        console.log("¡Hasta luego!");
    }
} else {
    let buyTicket = prompt("¿Quiere comprar? (sí o no):");
    if (buyTicket === "sí") {
        let money = parseFloat(prompt("¿Cuánto dinero tiene disponible?"));
        if (money > 1000) {
            console.log("Venta exitosa. ¡Bienvenido!");
        } else {
            console.log("Lo siento, no tiene suficiente dinero para comprar.");
        }
    } else {
        console.log("¡Hasta luego!");
    }
}
