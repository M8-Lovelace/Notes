//----------------------Ejercicio 3------------------
// Quitar del vector los números repetidos

// Recorrer el array y agregar cada elemento a un nuevo array siempre y cuando no exista ya en el mismo, con el metodo includes
let n=[34,55,66,50,2,5,0,7,102,2,97,50,33,7,10]
let unicos=[]

for(let i = 0; i < n.length; i++) {

    const elemento = n[i]

    if (!unicos.includes(n[i])) {
        unicos.push(elemento)
    }
}
console.log(unicos)

// const unicos = [... new Set(n)]
// console.log(unicos)

