
// 6.	Pedir un número de 6 sueldos y mostrar el sueldo máximo.

let i=0;
let sueldo=0;
let mayor=0;
let menor=0;


while (i <= 6) {
    sueldo=parseInt(prompt("Ingrese su sueldo: "));
    i++
    if(sueldo>mayor){
        mayor=sueldo;
    }
}

console.log(`El numero mayor es: ${mayor}`);
