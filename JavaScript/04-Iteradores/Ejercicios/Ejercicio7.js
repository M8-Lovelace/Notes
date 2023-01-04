
// 7.	pedir 5 numeros por pantalla e imprimir la suma total

let i=0;
let n=0;
let suma=0;

while (i <= 5) {
    n=parseInt(prompt("Ingrese un numero: "))
    suma+=n;
    i++
}

console.log(`La suma de los numeros es: ${suma}`)

