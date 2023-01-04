//Programa  para leer la altura de N personas y calcular la altura media. Calcular cuántas personas tienen una altura superior a la media y cuántas tienen una altura inferior a la media. El valor de N se pide por teclado y debe ser entero positivo

let acum=0
let altu=[]
let mayor=0
let menor=0
let ingresar= parseInt(prompt("¿Cuantas personas desea ingresar?:"))

for (let i = 0; i < ingresar; i++) {
    let alt = parseInt(prompt(`Ingrese la altura de la persona ${i+1}: ` ))
    acum+=alt
    altu.push(alt)
}
let med = acum/ingresar

for (let i=0; i < altu.length ; i++){
    if(altu[i]>med){
        mayor+=1
    }
    else if(altu[i]<med){
        menor+=1
    }
}

console.log(`La media de las ${ingresar} ingresadas es ${med} y hay ${mayor} personas por encima de la media y ${menor} por debajo de la media.`)