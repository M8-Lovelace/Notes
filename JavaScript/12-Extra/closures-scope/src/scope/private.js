const person = () => {
  let saveName = 'Name'

  return {
    getName: () => {
      return saveName
    },
    setName: (name) => {
      saveName = name
    },
  }
}

let edwin = person()
console.log(edwin.getName())
edwin.setName('Prefacio tercero')
console.log(edwin.getName())

let miNombre = edwin.getName()
console.log(miNombre)
