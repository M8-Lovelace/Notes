// Console

// Limpiar la consola
console.clear()

// Ver los métodos de console
console.log(console)

// Mensaje general
console.log('Mensaje general')

// Mensaje de advertencia
console.warn('Mensaje advertencia')

// Mensaje de información
console.info('Mensaje información')

// Mensaje de error
console.error('Mensaje error')

// Mensaje en tablas
const animales = [{ id: 1, nombre: 'Lola' }]
console.table(animales)

// Mensaje con tiempo de ejecución
console.time('tiempoForOf')
for (const iterator of animales) {
  console.log(iterator['nombre'])
}
console.timeEnd('tiempoForOf')
