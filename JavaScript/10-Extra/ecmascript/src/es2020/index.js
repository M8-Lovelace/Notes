// Dynamic imports
const button = document.getElementById('btn')

button.addEventListener('click', async () => {
    const module = await import("./module.js")
    console.log(module.helloWorld())
})

// Use bigInt
const aBigNumber = 9007199254740991n;
const anotherBigIngNumber = BigInt(9007199254740991)

console.log(aBigNumber)
console.log(anotherBigIngNumber)

// Promises
const promise1 = new Promise((resolve, reject) => {
    reject("reject")
})

const promise2 = new Promise((resolve, reject) => {
    resolve("resolve")
})
const promise3 = new Promise((resolve, reject) => {
    resolve("resolve 1")
})

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))

// global this
console.log(globalThis)

// Null operator
let foo = null ?? "fuck you";
console.log(foo)

// Optional chaining
const user = {}
const validate = (user?.profile?.email) ? "Si existe" : "No existe";
console.log(validate)
