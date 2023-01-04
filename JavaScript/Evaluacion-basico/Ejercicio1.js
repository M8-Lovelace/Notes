// Escriba un programa que pregunte al usuario cuántos datos ingresará, a continuación le pida que ingrese los datos uno por uno, y finalmente entregue como salida cuántos de los datos ingresados son mayores que el promedio

let acum=0
let altu=[]
let mayor=0
let ingresar= parseInt(prompt("¿Cuantos datos desea ingresar?:"))

for (let i = 0; i < ingresar; i++) {
    let alt = parseFloat(prompt(`Ingrese Dato ${i+1}: ` ))
    acum= acum + alt
    altu.push(alt)
}

let med = acum/ingresar

for (let i=0; i < altu.length ; i++){
    if(altu[i]>med){
        mayor+=1
    }
}

console.log(`La media de las ${ingresar} ingresadas es ${med} y hay ${mayor} personas por encima de la media.`)