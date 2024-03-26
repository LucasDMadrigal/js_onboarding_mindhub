// /**
//  * 
//  * Dificultad Baja
//  * 
//  */




// var nombreCompleto = miNombre + " " + miApellido;
// var textoPresentacion = "Mi nombre es " + nombreCompleto + ". Tengo " + miEdad + " años. Tengo una mascota llamada " + miMascota + " que tiene " + edadMascota + " años.";

// /**
//  * 
//  * Dificultad Media
//  * 
//  */

// var sumaEdades = miEdad + edadMascota;
// var restaEdades = miEdad - edadMascota;
// var productoEdades = miEdad * edadMascota;
// var divisionEdades = miEdad / edadMascota;

// console.log("Suma de edades:", sumaEdades);
// console.log("Resta de edades:", restaEdades);
// console.log("Producto de edades:", productoEdades);
// console.log("División de edades:", divisionEdades);

// var estudiante = {
//   nombre: "Juan",
//   edad: 25,
//   grado: "A",
//   colegio: "Universidad",
//   carrera: "Ciencias de la Computación"
// };

// console.table(estudiante);
// console.log("Nombre del estudiante:", estudiante.nombre);
// console.log("Edad del estudiante:", estudiante.edad);
// console.log("Grado del estudiante:", estudiante.grado);
// console.log("Colegio del estudiante:", estudiante.colegio);
// console.log("Carrera del estudiante:", estudiante.carrera);

// var mascota = {
//   nombre: "Fido",
//   especie: "Perro",
//   edad: 3,
//   color: "Marrón",
//   comidaFavorita: "Huesos"
// };

// console.table(mascota);
// console.log("Nombre de la mascota:", mascota.nombre);
// console.log("Especie de la mascota:", mascota.especie);
// console.log("Edad de la mascota:", mascota.edad);
// console.log("Color de la mascota:", mascota.color);
// console.log("Comida favorita de la mascota:", mascota.comidaFavorita);

// var frutas = ["Manzana", "Plátano", "Naranja", "Uvas", "Fresa"];

// console.log("Array de frutas:", frutas);
// frutas.forEach(function(fruta, indice) {
//   console.log("Fruta", indice + 1 + ":", fruta);
// });


/**
 * 
 * Dificultad Alta
 * 
 */
var edadIngresada = prompt("Ingrese su edad:");
var soyAdulto = parseInt(edadIngresada) >= 18;
console.log("Soy adulto:", soyAdulto);

var numeros = [1, 2, 3, 4, 5];

console.log("Array de números:", numeros);
numeros.forEach(function(numero, indice) {
  console.log("Número", indice + 1 + ":", numero);
});

var familia = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Maria", edad: 28 },
  { nombre: "Carlos", edad: 35 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Pedro", edad: 40 }
];

console.log("Array de familia:", familia);
familia.forEach(function(miembro, indice) {
  console.log("Miembro de la familia", indice + 1 + ":", miembro);
});

var textoAleatorio = frutas[1] + " " + numeros[3] + " " + familia[4].nombre + " tiene una mascota llamada " + mascota.nombre + ".";
console.log("Texto aleatorio:", textoAleatorio);
