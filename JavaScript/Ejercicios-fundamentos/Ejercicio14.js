// 14.	Dada un vector de números, crear una función que nos diga cuál es el mayor

numeros = [8,5,6,15,45,62,7,99]


function mayor(orden){
    return orden[orden.length - 1]
}

let orden = numeros.sort(function(a, b){return a - b})

// console.log(orden)

console.log("El numero mayor es : " + mayor(orden))

// console.log("el numero mayor es : " + Math.max(...numeros))