
let datos = {}

datos=[
  {nombre:"Laura",appellido:"Susano",telefono:3187379561},
  {nombre:"Laura",appellido:"SusanoF",telefono:3187379561},
  {nombre:"Juan",appellido:"Susano",telefono:3187379561}
]

console.log(datos[0].nombre+" "+datos[1].appellido)

// Insertar un item 
datos.push({nombre:"Teresa",appellido:"Zambrano",telefono:3143279561})
console.log(datos[3].nombre+" "+datos[3].appellido)

// Encuentra el indice de una propiedad en un vector
let pos=datos.findIndex(po => po.nombre === "LauraX")
datos.splice(pos,1)
console.log(datos)

// Filtrar un item
let filteredNom = datos.filter((item) => item.nombre == 'Laura')
console.log(filteredNom)

// Actualizar un registro
datos[0].nombre="Lauris"
console.log(datos)

// Recorre un objeto y actualiza con una condición
datos.forEach(e =>{
  if(e.nombre === "Lauris"){
    e.telefono=1
  }
})
console.log(datos)