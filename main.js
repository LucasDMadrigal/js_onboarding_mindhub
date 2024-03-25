console.log("Iniciando JavaScript...");
/**
 * 
 * Nivel de dificultad: Bajo
 * 
 */

console.log("Nombre:", miNombre);
console.log("Apellido:", miApellido);
console.log("Edad:", miEdad);

var nombreCompleto = miNombre + " " + miApellido;
var textoPresentacion = "Hola, mi nombre es " + nombreCompleto + ". Tengo una mascota llamada " + miMascota + " que tiene " + edadMascota + " años.";

console.log(textoPresentacion);


/**
 * 
 * Nivel de dificultad: Medio
 * 
 */

var sumaEdades = miEdad + edadMascota;
var restaEdades = miEdad - edadMascota;
var productoEdades = miEdad * edadMascota;
var divisionEdades = miEdad / edadMascota;

console.log("Suma de edades:", sumaEdades);
console.log("Diferencia de edades:", restaEdades);
console.log("Producto de edades:", productoEdades);
console.log("División de edades:", divisionEdades);

var estudiante = {
  nombre: "Juan",
  edad: 25,
  carrera: "Ciencias de la Computación",
  promedio: 3.8,
  esGraduado: false
};

console.log("Objeto Estudiante:");
console.table(estudiante);

for (var propiedad in estudiante) {
  console.log(propiedad + ": " + estudiante[propiedad]);
}

var mascota = {
  nombre: "Buddy",
  especie: "Perro",
  edad: 5,
  color: "Marrón",
  esAmigable: true
};

console.log("Objeto Mascota:");
console.table(mascota);

for (var propiedad in mascota) {
  console.log(propiedad + ": " + mascota[propiedad]);
}

var frutas = ["Manzana", "Plátano", "Naranja", "Uvas", "Fresa"];

console.log("array de Frutas:");
console.log(frutas);

frutas.forEach(function(fruta, indice) {
  console.log("Fruta " + (indice + 1) + ": " + fruta);
});


/**
 * 
 * Nivel de dificultad: Alto
 * 
 */

var edadIngresada = prompt("Por favor ingresa tu edad:");

var soyAdulto = edad >= 18;

console.log("Soy adulto:", soyAdulto);

var numeros = [1, 2, 3, 4, 5];

console.log("array de Números:");
console.log(numeros);

numeros.forEach(function(numero, indice) {
  console.log("Número " + (indice + 1) + ": " + numero);
});

var familia = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Carlos", edad: 40 },
  { nombre: "Elena", edad: 35 },
  { nombre: "Daniel", edad: 45 }
];

console.log("array de Familia:");
console.table(familia);

familia.forEach(function(miembro, indice) {
  console.log("Miembro de la Familia " + (indice + 1) + ": ", miembro);
});

var textoAleatorio = "Me gusta " + frutas[1] + " y mi número de la suerte es " + numeros[3] + ". " + familia[4].nombre + " es un miembro de mi familia.";
console.log("Texto Aleatorio:", textoAleatorio);
