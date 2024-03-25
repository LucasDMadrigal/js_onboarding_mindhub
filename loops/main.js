// 1. Utilizando un bucle "for" para imprimir números en orden descendente:
let numero = parseInt(prompt("Ingrese un número entre 1 y 100: "));

console.log("Imprimiendo números en orden descendente:");
for (let i = numero; i >= 0; i--) {
    console.log(i);
}

// 2. Utilizando un bucle "for" para mostrar la tabla de multiplicar:
numero = parseInt(prompt("Ingrese un número entre 1 y 10: "));

console.log("Tabla de multiplicar:");
for (let i = 1; i <= 10; i++) {
    console.log(`${i}x${numero}=${i * numero}`);
}

// 3. Utilizando un bucle "while" para acumular números hasta que se ingrese 0:
let suma = 0;
numero = parseInt(prompt("Ingrese un número (ingrese 0 para detener): "));

while (numero !== 0) {
    suma += numero;
    numero = parseInt(prompt("Ingrese un número (ingrese 0 para detener): "));
}

console.log("La suma es:", suma);

// 4. Utilizando un bucle "do while" para acumular números hasta que se ingrese 0:
suma = 0;
do {
    numero = parseInt(prompt("Ingrese un número (ingrese 0 para detener): "));
    if (numero !== 0) {
        suma += numero;
    }
} while (numero !== 0);

console.log("La suma es:", suma);
