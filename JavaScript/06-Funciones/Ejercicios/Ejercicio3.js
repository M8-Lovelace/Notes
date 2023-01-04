
//Programa para definir que un numero es par o impar

function esPar(num){
if(num%2 == 0) return `El numero ${num} SI es par`
    return `El numero ${num} NO es par`
}

console.log(esPar(9))