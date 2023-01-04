// 15.	Dada un vector de números, crear una función que nos diga cuál es el menor
numeros = [8,5,6,15,45,62,7,99]

function menor(orden){
    return orden[0]
}

let orden = numeros.sort(function(a, b){return a - b})

// console.log(orden)

console.log("El numero menor es : " + menor(orden))


//Solucion 2:
// console.log("El numero menor es : " + Math.min(...numeros))