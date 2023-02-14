// Objects

// Crear objetos literales => this apunta al contexto del objeto
const objetoLiteral = {
  nombre: 'JavaScript',
  mostrarInformacion: function () {
    return this.nombre
  },
}
console.log(objetoLiteral.mostrarInformacion())

// Crear objetos mediante clases
class Carro {
  constructor(nombre, color) {
    this.nombre = nombre
    this.color = color
  }

  get mostrarInformacion() {
    return this
  }
}

// Generar una instancia de la clase Carro
const ferrari = new Carro('Ferrari V3', 'Rojo')

// Añadir nuevas propiedades a un objeto
ferrari['modelo'] = 2016

// Mostrar la información por medio de un getter
console.log(ferrari.mostrarInformacion)

// Acceder a las propiedades de los objetos
console.log(objetoLiteral['nombre'])
console.log(objetoLiteral.nombre)

// Eliminar una propiedad de un objeto
delete ferrari['color'] // o ferrari.color

// Hacer una copia de un objeto => con el spread operator '...' generamos una copia de un objeto
const nuevoObjeto = { ...ferrari }

// Pasar la referencia de un objeto
const nuevaReferencia = nuevoObjeto
nuevaReferencia['nombre'] = 'Ecmascript'

// Obtener las llaves de un objeto
Object.keys(ferrari)

// Obtener los valores de un objeto
Object.values(ferrari)

// Obtener un arreglo con subarreglos de [llave, valor]
Object.entries(ferrari)

// Destructuración en objetos
const usuario = {
  nombre: 'Edwin Jesús',
  nucleoFamiliar: {
    padre: 'Edwin Páez',
    madre: 'Yohana Rueda',
    hermanos: [
      { id: 1, nombre: 'Yeison Páez' },
      { id: 1, nombre: 'Steven Páez' },
    ],
    primos: [{ id: 1, nombre: 'Matías Páez' }],
  },
}

const {
  nucleoFamiliar: {
    padre,
    madre,
    hermanos: [nicolas, steven],
  },
} = usuario
console.clear()

console.log(`
  ${padre}
  ${madre}
  ${nicolas['nombre']}
  ${steven['nombre']}`)

// Congelar un objeto
Object.freeze(usuario)
console.log(Object.isFrozen(usuario))

// Sellar un objeto
Object.seal(usuario)
console.log(Object.isSealed(usuario))
