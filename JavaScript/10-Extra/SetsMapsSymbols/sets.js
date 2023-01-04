// Set: crear una lista de valores sin duplicados, son iterables
// Map: crear un objeto sin duplicados, son iterables

/*  Métodos de los Set
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
*/

const carItems = new Set();
carItems.add('Hello')
carItems.add('World')
carItems.add('JavaScript')
carItems.has('JavaScript') ?  carItems.delete('JavaScript') : carItems.clear()
const iterator = carItems.values()
console.log(iterator.next().value)
console.log(iterator.next().value)

// Eliminar los valores duplicados de un arreglo
const newArray = [1,1, "hola", "hola"]
const arrayParsed = new Set(newArray)
console.log(arrayParsed)