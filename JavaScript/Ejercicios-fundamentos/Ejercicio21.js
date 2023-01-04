// 21.	Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares

let n=[34,55,66,50,2,5,0,7,102,2,97,50,33,7]
let par= []
let inpar= []

function esParOno(n){
    for(let i=0;i<n.length;i++){
        num=n[i]
        if(num%2 == 0){
            par.push(n[i])
        }
        else{
            inpar.push(n[i])
        }
    }
}

esParOno(n)
console.log(`Los numeros pares son: ${par}`)
console.log(`Los numeros inpares son: ${inpar}`)

