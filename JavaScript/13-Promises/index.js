// Es un objeto que representa la terminación o el fracaso de una operación asíncrona.

// 1. Crear una promesa
const myPromise = new Promise((resolve, reject) => {
  false
    ? setTimeout(() => resolve('Hello World'), 3000)
    : reject(new Error('Test error'))
})

// 2. Consumir una promesa
myPromise
  .then(response => console.log(response))
  .catch(error => console.error(error))

// 3. Encadenar promesas
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test error'))
  })
}

const helloAsync = async () => {
  const hello = await helloWorld()
  console.log(hello)
}

helloAsync()

// 4. Promesas en paralelo

