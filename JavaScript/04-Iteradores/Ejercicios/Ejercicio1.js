// 1.	Pide un número (que debe estar entre 0 y 10) 
// y mostrar la tabla de multiplicar de dicho número

let i=0;
let n=prompt("Ingrese un numero entre 0 y 10: ");

while (i <= 10) {
    console.log(`${n}*${i}= `,n*i);
    i++
}

