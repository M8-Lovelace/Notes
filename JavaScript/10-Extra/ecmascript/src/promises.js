import * as main from './modules/main.js'

// Promises
const invoicePromise = () => {
  return new Promise((resolve, reject) => {
    if (true) resolve('Todo bien')
    reject('Todo mal')
  })
}

invoicePromise()
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .finally(() => console.log('Finalizado'))

const newCalculator = new main.Calculator()
newCalculator.setNumbers(2, 3)
const number = newCalculator.numbers
console.log(number)
console.log(main.helloWorld)
