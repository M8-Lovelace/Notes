const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Includes => Comprobar si un valor existe en un arreglo
const resultado = meses.includes('Diciembre'); // Retorna true o false

// Some => Comprobar si existe un valor en un arreglo de objetos
const existe = carrito.some(item => item['nombre'] === "Nada");

// Every => Evalúa todos los elementos, devuelve booleano
const every = carrito.every((item) => item['precio'] > 1000)
console.log(every)

// findIndex => Encontrar la posición de un item en un arreglo => si no existe retorna -1
const findIndex = meses.findIndex(month => month === 'Marzo')
const findIndex2 = carrito.findIndex(item => item['nombre'] === 'Televisión' )

// Reduce =>, nos permite tener un total y el valor actual
let resultado2 = carrito.reduce((total, actual) => total + actual.precio, 0)

// Filter => retorna un nuevo arreglo dependiendo de los filtros
let filter = carrito.filter((item) => item['precio'] > 300);
filter = carrito.filter((item) => item['nombre'] !== 'Televisión');
filter = carrito.filter((item) => item['nombre'] === 'Televisión');

// Find => Se evalúa si existe un elemento y devuelve el elemento
const find = carrito.find((item) => item['nombre'] === 'Tablet')
