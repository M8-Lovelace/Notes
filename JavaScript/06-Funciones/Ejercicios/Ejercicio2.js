
//Programa que determine:
// - Si el numero es primo o no


function esPrimo(num){
    if(num==0 || num == 1 || num== 4) return `El numero ${num} NO es primo`
    for (let i=2; i<=num/2; i++){
        if(num%i == 0) return `El numero ${num} NO es primo`;
    }
    return `El numero ${num} SI es primo`
}

console.log(esPrimo(101))



17
8.5
8.5/2


