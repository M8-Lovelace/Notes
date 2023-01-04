//----------------------Ejercicio 4------------------
//Programa  para leer la altura de N personas y calcular la altura media. Calcular cuántas personas tienen una altura superior a la media y cuántas tienen una altura inferior a la media. El valor de N se pide por teclado y debe ser entero positivo


// // Forma #1:
let acum=0
let altu=[]
let mayor=0
let menor=0

function media(ingresar){
    for (let i = 0; i < ingresar; i++) {
        let alt = parseInt(prompt(`Ingrese la altura de la persona ${i+1}: ` ))
        acum+=alt
        altu.push(alt)
    }
    return [altu,acum]
}

function mayorMenor(altu,med){
    for (let i=0;  i < altu.length ; i++){
        if(altu[i]>med){
            mayor+=1
        }
        else if(altu[i]<med){
            menor+=1
        }
    }
    return [mayor, menor]
}

let ingresar= parseInt(prompt("¿Cuantas personas desea ingresar?:"))
if (ingresar<0){
    console.log("Ingrese un numero valido")
} else{
    let medias= media(ingresar)
    let med = medias[1]/ingresar
    let mayorMenorr=mayorMenor(medias[0], med)

    console.log(`La media de las ${ingresar} ingresadas es ${med} y hay ${mayorMenorr[0]} personas por encima de la media y ${mayorMenorr[1]} por debajo de la media.`)
}


// // Forma #2:
// let acum=0
// let altu=[]
// let mayor=0
// let menor=0
// let ingresar= parseInt(prompt("¿Cuantas personas desea ingresar?:"))

// for (let i = 1; i < ingresar+1; i++) {
//     let alt = parseInt(prompt(`Ingrese la altura de la persona ${i}: ` ))
//     acum+=alt
//     altu.push(alt)
// }
// let med = acum/ingresar

// for (let i=0;  i < altu.length ; i++){
//     if(altu[i]>med){
//         mayor+=1
//     }
//     else if(altu[i]<med){
//         menor+=1
//     }
// }

// console.log(`La media de las ${ingresar} ingresadas es ${med} y hay ${mayor} personas por encima de la media y ${menor} por debajo de la media.`)
