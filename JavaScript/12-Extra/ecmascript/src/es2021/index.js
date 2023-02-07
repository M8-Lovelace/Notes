// Change all words
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replacedString = string.replace("JavaScript", "Python") // Sólo cambia el primero
const replacedAllString = string.replaceAll("JavaScript", "Python")
console.log(replacedString)
console.log(replacedAllString)


// Métodos privados en las clases
class Message {
    constructor(name) {
        this.name = name;
    }

    #lastName = 'Páez' // Private variable

    get getName() {
        return `${this.name} ${this.#lastName}`
    }

    setName(val) {
        this.name = val
    }
}
const message = new Message('Edwin');
console.log(message.getName)


// Encontrar la primera promesa satisfactoria
const promise1 = new Promise((resolve, reject) => reject("1"))
const promise2 = new Promise((resolve, reject) => resolve("2"))
const promise3 = new Promise((resolve, reject) => reject("3"))

Promise.any([promise1, promise2, promise3])
    .then(res => console.log(res))

// Generar una referencia débil
class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
}


let isTrue = true
let isFalse = false
console.log(isTrue &&= isFalse)

let isTrue = true
let isFalse = false
console.log(isTrue ||= isFalse)

let isTrue = true
let isFalse = false
console.log(isTrue ??= isFalse)