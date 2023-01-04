// 16.	Dada un vector de números, crear una función que nos diga cuál es el promedio de todos los números
numeros = [8,5,6,15,45,62,7,99]
sum=0
prom=0

function promedio(numeros){
    for (let i=0; i<numeros.length;i++){
    sum+=numeros[i]
}
    prom=sum/numeros.length
    return prom
}
console.log(promedio(numeros))