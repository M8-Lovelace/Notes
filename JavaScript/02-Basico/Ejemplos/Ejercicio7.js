

let n= parseFloat(prompt("Ingrese su nota: "))

if (n>=0 && n<=5.9){
	console.log(`Su nota de ${n} es Insuficiente.`);
} else if(n>=6.0 && n<=8.9){
    console.log(`Su nota de ${n} es Aceptable.`);
} else if (n>=9 && n<=10){
    console.log(`Su nota de ${n} es Excelente.`);
} else {
    console.log("Ingrese una nota valida entre 1 y 10");
}
