function* helloWorld() {
  if (true) {
    yield 'Hello'
  }

  if (true) {
    yield 'World'
  }

}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)

const fullNumber = '0983420932810938'
const last4Digits = fullNumber.slice(-4)
let maskedNumber = last4Digits.padStart(fullNumber.length, '*')
maskedNumber.padEnd(fullNumber.length, '*')
console.log(maskedNumber)
