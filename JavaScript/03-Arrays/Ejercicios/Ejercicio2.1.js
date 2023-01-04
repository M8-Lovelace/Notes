// --- Ejercicio 2
numeros = [8,5,6,15,45,62,7,99]


function mayor(orden){
    return orden[orden.length - 1]
}

function menor(orden){
    return orden[0]
}

let orden = numeros.sort(function(a, b){return a - b})

console.log(orden)

console.log("El numero menor es : " + menor(orden) + " Y el numero mayor es : " + mayor(orden))

console.log("El numero menor es : " + Math.min(...numeros) + " Y el numero mayor es : " + Math.max(...numeros))
