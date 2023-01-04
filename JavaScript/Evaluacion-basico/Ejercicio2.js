
let suma=0
let acum=0
let a=[7,1,4,9,8]
let b=[0,1,2,3,4]

function productoInterno(a,b){
  for (let i=0; i < a.length ; i++){
    let uno = a[i]
    let dos = b[i]
    suma = (uno*dos)
    acum += suma
  }
  return acum
}

console.log(`El Producto Interno es: ${productoInterno(a,b)}`)