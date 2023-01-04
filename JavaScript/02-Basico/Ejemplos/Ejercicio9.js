

let n1= parseFloat(prompt("Ingrese el primer numero: "))
let n2= parseFloat(prompt("Ingrese el segundo numero: "))

if (n1>n2){
	console.log(`${n1} es mayor que ${n2}`);
} else if(n1<n2){
    console.log(`${n2} es mayor que ${n1}`);
} else{
    console.log(`Los dos numero son iguales`);
}