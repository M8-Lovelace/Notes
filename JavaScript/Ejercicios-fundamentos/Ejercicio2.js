// 2.	Pedir 10 sueldos. Mostrar su suma y cuantos
//  hay mayores de 1000€


let i=0;
let sueldo=0;
let suma=0;
let mayor=0;
let menor=0;


while (i <= 10) {
    sueldo=parseInt(prompt("Ingrese su sueldo: "));
    suma+=sueldo;
    i++
    if(sueldo>=1000){
        mayor+=1
    }
    else{
        menor+=1
    }
}

console.log(`La suma de todos los sueldos es: ${suma}, y hay ${mayor} sueldos mayores a 1000€`);
