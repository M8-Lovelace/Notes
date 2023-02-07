class Calculator {
  constructor() {
    this.valueA = 0
    this.valueB = 0
  }

  setNumbers = (a, b) => {
    this.valueA = a
    this.valueB = b
  }

  get numbers () {
    return { a: this.valueA, b: this.valueB }
  }
}

const helloWorld = "Platzi"

export {Calculator, helloWorld}
