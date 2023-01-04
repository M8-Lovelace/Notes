
let n= parseInt(prompt("Ingrese la cantidad de productos: "))
let precio1= 500
let precio2= 450

if (n>=3){
	console.log(`El total a pagar por ${n} productos con un valor de ${precio2} es: ${n*precio2}`);
} else{
	console.log(`El total a pagar por ${n} productos con un valor de ${precio1} es: ${n*precio1}`);
}
