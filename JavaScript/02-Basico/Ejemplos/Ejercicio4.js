

let n1= parseInt(prompt("Ingrese su sueldo actual: "))


if (n1<=1000){
    aumentosum= n1*15/100
    aumento= aumentosum + n1
	console.log(`Su sueldo aumento un 15%, su nuevo sueldo es: ${aumento}`);
} else{
	aumentosuma= n1*12/100
    aumentos= aumentosuma + n1
	console.log(`Su sueldo aumento un 12%, su nuevo sueldo es: ${aumentos}`);
}
