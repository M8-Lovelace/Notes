// --- Ejercicio 3 ---
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
