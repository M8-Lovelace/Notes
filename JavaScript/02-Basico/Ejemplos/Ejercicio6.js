

let n= parseInt(prompt("Ingrese la cantidad de metros a convertir: "))
let opcion= prompt("Digite opción de conversion: \n kilometros = km \n centimetros = cm \n milimetros = ml \n millas = mi")
let r = 0

if (opcion=="km"){
    r=n/1000
	console.log(`${n} metros equivalen a ${r} km`);
} else if(opcion=="cm"){
    r=n*100
    console.log(`${n} metros equivalen a ${r} cm`);
} else if (opcion=="ml"){
    r=n*1000
    console.log(`${n} metros equivalen a ${r} ml`);
} else{
    r=n*1605
	console.log(`${n} metros equivalen a ${r} mi`);
}