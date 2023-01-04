
let menor = 0
let medio = 0
let mayor = 0
let n1= parseFloat(prompt("Ingrese el primer numero: "))
let n2= parseFloat(prompt("Ingrese el segundo numero: "))
let n3= parseFloat(prompt("Ingrese el tercer numero: "))

if (n1<=n2 && n1<=n3) {
    menor = n1;
    if (n2<=n3){
        medio= n2
        mayor = n3;
    } else {
        medio = n3;
        mayor = n2;
    }
} else if (n2<=n1 && n2<=n3) {
    menor = n2;
    if (n1<=n3){
        medio= n1;
        mayor = n3;
    } else {
        medio = n3;
        mayor = n1;
    }
}
else{
	menor = n3;
    if (n1<=n2){
        medio= n1;
        mayor = n2;
    } else {
        medio = n2;
        mayor = n1;
    }
}

console.log(`${menor} , ${medio} , ${mayor}`)