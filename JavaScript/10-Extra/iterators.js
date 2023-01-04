/**
 * Itera la tabla del 28 hasta el 5 con condicionales
 */
for (let i = 1; i <= 5; i++) {
  if (i === 2) {
    continue // Detiene la iteración actual y va a la siguiente
  } else if (i === 4) {
    break // Detiene las estructuras de control
  } else {
    console.log(`${28} * ${i}: ${28 * i}`)
  }
}

/**
 * While => Evalua, Itera
 */
let i = 0
while (i < 3) {
  console.log(`While ${i}`)
  i++
}

/**
 * Do While => Itera, evalua
 */
let y = 0
do {
  console.log(`Do while ${y}`)
  y++
} while (y < 3)

/**
 * Foreach itera un array
 */
const pendientes = ['Tarea', 'Estudiar', 'Comer']
pendientes.forEach((element) => console.log(element))

/**
 * Map genera un array nuevo
 */
const nuevoArreglo = pendientes.map((item) => `${item} map`)
console.log(nuevoArreglo)

/**
 * For of => Itera en arrays
 */
for (const iterator of pendientes) {
  console.log(iterator)
}

/**
 * For in => Itera en objects
 */
const auto = {
  modelo: 'Camaro',
  year: 1989,
}

// Manera 1
for (const key in auto) {
  console.log(key) // Key
  console.log(auto[key]) // Value
}

// Manera 2
for (let [key, value] of Object.entries(auto)) {
  console.log(key + value)
}
