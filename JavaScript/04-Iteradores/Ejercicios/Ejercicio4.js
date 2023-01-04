
// 4.	Pedir 15 números y escribir la suma total.

let i=0;
let suma=0;
let n=0;

while (i <= 15) {
    n=parseInt(prompt("Ingrese un numero: "));
    suma+=n;
    i++
}

console.log(`La suma de los 15 numeros ingresador es: ${suma}`)