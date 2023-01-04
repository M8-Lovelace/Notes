
// 5.	Una empresa que se dedica a la venta de 
// desinfectantes 
// necesita un programa para gestionar las facturas. 
// En cada factura figura: el código del artículo, 
// la cantidad vendida en litros y el precio por litro. 
// Se pide de 5 facturas introducidas: Facturación total, 
// cantidad en litros vendidos del artículo 1 y cuantas 
// facturas se emitieron de más de 600 €.


let i=0;
let codigo=0;
let suma=0;
let factura=0;
let menor=0;
let valor=0;
let p1=0;
let seis=0;
let u=0;


while (i <= 5) {
    codigo=parseInt(prompt("Ingrese el codigo del producto: "));
    valor=parseInt(prompt("Ingrese el valor por litro: "));
    litros=prompt("Ingrese el numero de litros: ");
    suma+=(valor*litros);
    i++
    if(codigo==1){
        p1+=litros
    }
    if((valor*litros)>=600){
        seis+=u
    }
}

console.log(`La facturacion total es: ${suma}, la cantidad de litros vendidos del articulo 1 es: ${p1} litros y la cantidad de facturas superiores a 600€ son ${u}`);

