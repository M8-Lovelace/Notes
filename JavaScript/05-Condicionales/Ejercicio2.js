// Hacer un programa que simule un cajero automático con un saldo inicial de 1000 dólares,
//  con el siguiente menú de opciones:

// 1. Ingresar dinero a la cuenta.
// 2. Retirar dinero de la cuenta.
// 3. Salir

/* Dado el monto de retiro calcular
Numero de billetes de 50 mil
Numero de billetes de 20 mil
Numero de billetes de 10 mil
Numero de billetes de 5 mil
Numero de billetes de 2 mil
*/


function algoritmo(canti)
{
    let billetes_de_100, billetes_de_20, billetes_de_50, billetes_de_10, billetes_de_5 , billetes_de_2 ,cantidad,residuo;
    let monedas_de_100, monedas_de_50, monedas_de_500, monedas_de_200, monedas_de_1000;
    cantidad = canti;
    residuo=cantidad;
    billetes_de_100=(residuo-residuo%100000)/100000;
    residuo=residuo%100000;
    billetes_de_50=(residuo-residuo%50000)/50000;
    residuo=residuo%50000;
    billetes_de_20=(residuo-residuo%20000)/20000;
    residuo=residuo%20000;
    billetes_de_10=(residuo-residuo%10000)/10000;
    residuo=residuo%10000;
    billetes_de_5=(residuo-residuo%5000)/5000;
    residuo=residuo%5000;
    billetes_de_2=(residuo-residuo%2000)/2000;
    residuo=residuo%2000;
    monedas_de_1000=(residuo-residuo%1000)/1000;
    residuo=residuo%1000;
    monedas_de_500=(residuo-residuo%500)/500;
    residuo=residuo%500;
    monedas_de_200=(residuo-residuo%200)/200;
    residuo=residuo%200;
    monedas_de_100=(residuo-residuo%100)/100;
    residuo=residuo%100;
    monedas_de_50=(residuo-residuo%50)/50;
    residuo=residuo%50;


    
    console.log(`La cantidad de billetes de 100.000 son : ${billetes_de_100.value = billetes_de_100}`)
    console.log(`La cantidad de billetes de 50.000 son : ${billetes_de_50.value = billetes_de_50}`)
    console.log(`La cantidad de billetes de 20.000 son : ${billetes_de_20.value = billetes_de_20}`)
    console.log(`La cantidad de billetes de 10.000 son : ${billetes_de_10.value = billetes_de_10}`)
    console.log(`La cantidad de billetes de 5.000 son : ${billetes_de_5.value = billetes_de_5}`)
    console.log(`La cantidad de billetes de 2.000 son : ${billetes_de_2.value = billetes_de_2}`)
    console.log(`La cantidad de monedas de 1000 son : ${monedas_de_1000.value = monedas_de_1000}`)
    console.log(`La cantidad de monedas de 500 son : ${monedas_de_500.value = monedas_de_500}`)
    console.log(`La cantidad de monedas de 200 son : ${monedas_de_200.value = monedas_de_200}`)
    console.log(`La cantidad de monedas de 100 son : ${monedas_de_100.value = monedas_de_100}`)
    console.log(`La cantidad de monedas de 50 son : ${monedas_de_50.value = monedas_de_50}`)
    console.log(`El residuo es : ${residuo} pesos`)
}



let opcion = parseInt(prompt("============================== \n ==== Bienvenido al menu de opciones ==== \n ============================== \n \n ELIJA UNA OPCION: \n 1. Ingresar dinero a la cuenta. \n 2. Retirar dinero de la cuenta. \n 3. Salir."))
let acum = 1000000
let retirar = 0
let ingresa = 0
let menos = 0
let bill = 0

if (opcion == 1) {
    ingresa = 0
    ingresa = parseInt(prompt("Ingrese el dinero a depositar: "))
    if (ingresa >= 0) {
        acum = acum + ingresa
        console.log(`Dinero ingresado exitosamete. Su saldo actual es ${acum}.`)
    } else {
        console.log("ERROR: Ingrese un valor valido.")
    }
}
else if (opcion == 2) {
    retirar = 0
    retirar = parseInt(prompt("Ingrese el dinero a retirar: "))
    if (retirar <= acum) {
        acum = acum - retirar
        console.log(`Dinero retirado exitosamete. Su saldo actual es ${acum}.`)
        console.log(algoritmo(retirar))
    } else {
        console.log("ERROR: Saldo insufiente.")
    }
}
else if (opcion == 3) {
    console.log("Gracias por utilizar el cajero.")
}
else {
    console.log("ERROR: Ingrese una opcion valida.")

}

