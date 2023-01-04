
let n1= parseInt(prompt("Ingrese el primer numero: "))

let n2= parseInt(prompt("Ingrese el segundo numero: "))

suma = n1+n2

if (suma>100){
	console.log(`Felicitaciones, has ganado. La suma fue: ${suma}`);
}
else{
	console.log(`Has perdido. La suma fue: ${suma}`);
}
