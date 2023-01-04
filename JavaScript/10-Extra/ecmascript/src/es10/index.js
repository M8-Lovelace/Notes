// Create a new array with all sub-array elements
const edades = [8, 10, 9, 20, [13, 18, 12, [20, 9, 25, 9]]]
// console.log(edades.flat(2))
// console.log(edades.flat().flat())
console.log(edades.flat(Infinity))

// Flat map
let newArray = [1, 2, 3, 4, 5]
console.log(newArray.flatMap((item) => [item, item * 2]))

// Delete blank spaces from strings
let hello = '               hello         '
console.log(hello.trimStart())
console.log(hello.trimEnd())
console.log(hello.trim())

// New form to work with errors
try {
} catch {
  error
}

// Create an object by an array
let entries = [
  ['name', 'oscar'],
  ['age', 22],
]

console.log(Object.fromEntries(entries))
console.log(Object.entries(entries))

// Symbols
let mySymbol = 'mY sYMBOL'

let anItem = Symbol('putos')
console.log(anItem.description)
