// Arrays

// Arreglo base para ejemplos en métodos
const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Enero',
]

// Crear arreglos => Un arreglo puede tener cualquier tipo de dando dentro
const inventario = ['Televisor', 'Celular', [1, 'Soy un string', true]]

// Crear una copia de un arreglo => haciendo uso del spread operator '...'
const nuevoCarrito = [...inventario]

// Pasar la referencia de un arreglo
const nuevaReferencia = nuevoCarrito

// Acceder a propiedades de los arreglos
console.log(inventario[1][1]) // Muestra el string

// Desestructuración en los arreglos
const [televisor, celular] = inventario

// Métodos más usados en los arreglos

// Ver cuantas posiciones tiene un arreglo => comienzan en 0
console.log(inventario.length)

// Agregar nuevos índices a los arreglos
inventario.push('Tablet') // Agrega al final del arreglo
inventario.unshift('Monitor') // Agrega al inicio del arreglo

// Eliminar posiciones de un arreglo
inventario.shift() // Elimina la primera posición del arreglo
inventario.pop() // Elimina la última posición del arreglo
inventario.splice(0, 1) // Elimina desde el parámetro 1, hasta el parámetro 2

// Crear un array mediante la clase Array y llenarlo con 20 valores iguales
const nuevoArreglo = Array(20).fill('Soy una posición')

// Evaluar si es un arreglo
console.log(Array.isArray(nuevoArreglo))

// Retornar un elemento mediante la posición => acepta números negativos
console.log(nuevoArreglo.at(5))

// Concatenar arreglos
const nuevoConcat = nuevoArreglo.concat(['Nací de un concat'])

// Obtener un arreglo con subarreglos con su posición y su valor
const arrayEntries = ['uno', 'dos'].entries()
console.log(arrayEntries.next().value)

// Verificar si todos los elementos cumplen con uno condición => retorna true o false
const every = carrito.every((item) => item['precio'] > 1000)

// Filtrar elementos de un arreglo
const filter = carrito.filter((iterator) => iterator['precio'] > 500)

// Validar si existe dentro de un arreglo
const find = carrito.find((item) => item['nombre'] === 'Tablet') // Devuelve el elemento si lo encuentra, si no, retorna undefined

const includes = meses.includes('Enero') // Valida si existe un dato primitivo y retorna true o false

const some = carrito.some((item) => item['nombre'] === 'Tablet') // Valida si existe un elemento y retorna true o false

// Encontrar la posición de un elemento en un array
const indexOf = meses.indexOf('Enero', 2) // Si no encuentra la posición, retorna -1, se le puede pasar el número de veces a encontrar un elemento

const findIndex = carrito.findIndex((item) => item['nombre'] === 'Tablet') // Retorna 1 si no lo encuentra

const lastIndex = meses.lastIndexOf('Enero')

// Eliminar todos los subarreglos de un arreglo
const flat = [0, 1, 2, 3, [4, 5]].flat(2) // Recibe el número de subarreglos a aplanar, o Infinity

// Iterar un arreglo
const forEach = [0, 1].forEach((item) => console.log(item))

// Generar un nuevo arreglo desde una iteración
const map = [0, 1].map((item) => item * 2)

// Organizar los elementos de un array
const sort = [2, 6, 1, 7, 4].sort((a, b) => b - a) // Organiza dependiendo de menor a mayor (a-b) y de mayor a menor (b - a)

// Reversar un arreglo
const reverse = [1, 2, 3, 4].reverse()

// Iterar todo el array y acumular un valor
const reduce = [1, 2, 3, 4, 5].reduce(
  (valorPrevio, valorActual) => valorPrevio + valorActual,
  0
)
