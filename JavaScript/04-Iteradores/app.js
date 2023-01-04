// Como crear arreglos
const numeros = [10, 20, 30, [1, 2, 3, 4]];

// Cómo acceder a los arreglos
console.log(numeros[3].length);

// Algunos métodos de los arreglos
const carrito = [];

// Agregar elementos de forma imperativa
carrito.push("Televisor", "Tablet", "Ventilador", "Computador");

// Crear una copia de un arreglo
const newArray = [...carrito];

// Eliminar posiciones en un arreglo dependiendo de la posición de algo
carrito.splice(carrito.indexOf("Tablet"), 1);

// Destructuring en arreglos
const [a, ...rest] = carrito;

const carro = Array(11).fill({ nombre: "Monitor", precio: 500 },)

// // Iteración de un array mediante un for loop
console.time("for"); // Tiempo de ejecución for: 1.150s
for (let index = 0; index < carro.length; index++) {
  console.log(`${carro[index].nombre} - Precio: ${carro[index].precio}`);
}
console.timeEnd("for");

// Iteración de un array mediante un forEach
console.time("forEach"); // Tiempo de ejecución forEach: 1.237s
carro.forEach((element, index) => {
  console.log(`${element.nombre}  ${index} - Precio: ${element.precio}`);
});
console.timeEnd("forEach");

// // Iteración de un array mediante un map
console.time("map"); // tiempo de ejecución map: 1.450s
carro.forEach((element, index) => {
  console.log(`${element.nombre}  ${index} - Precio: ${element.precio}`);
});
console.timeEnd("map");
