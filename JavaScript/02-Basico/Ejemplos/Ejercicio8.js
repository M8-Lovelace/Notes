

let peso= parseFloat(prompt("Ingrese el peso del vehiculo en toneladas: "))

let reduccion= peso*15/100
let actual = peso - reduccion
let kl= actual * 1000
let g= actual * 1000000


if (reduccion>3.5){
	console.log(`La reduccion fue de ${reduccion} toneladas \n El peso final es de ${actual} toneladas. \n En kilogramos serian ${kl} \n En gramos serian ${g} \n El vehiculo quedo liviano.`);
} else{
    console.log(`La reduccion fue de ${reduccion} toneladas \n El peso final es de ${actual} toneladas. \n En kilogramos serian ${kl} \n En gramos serian ${g}.`) ;
} 