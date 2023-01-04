// let v={}

// let datos = {
//   nombre: "Laura",
//   apellido : "Susano",
//   edad : 20
// }

// let datos1 = {
//   nombre : "Edwin",
//   apellido : "Paez",
//   edad : 23,
//   genotipo : {
//     talla : 183,
//     peso : 73
//   },
//   disponible : true,
//   sumar : function(){
//     console.log(3+3)
//   }
// }

// // --- Editar el valor de una variable
// datos.nombre="Ximena"

// // --- Añadir una propiedad al objeto
// datos.telefono=123456

// // --- Eliminar propiedad
// delete datos.telefono

// // --- Imprimir los objetos
// console.log(datos)
// console.log(datos.nombre + " tiene " + datos.edad + " anios.")
// //Ximena Susano tiene 20 anios. su telefono es undefined
// console.log(datos1.nombre +" mide "+ datos1.genotipo.talla + " cm.")
// //Edwin Paez mide 183 cm.

// // --- Imprime la funcion
// datos1.sumar()
// //6

// // --- Imprime nombres de las llaves del objeto
// console.log(Object.keys(datos1))
// //[ 'nombre', 'apellido', 'edad', 'genotipo', 'disponible', 'sumar' ]

//------------------------------------------------------------------------------

// var myVar = { typeA: '501', typeB: '502' };

// // --- Imprime las propiedades del objeto
// for (var key in myVar) {
//   // --- Imprime la llave
//   console.log(key);
//   // --- Imprime el valor de la llave
//   console.log(myVar[key]);
// }

//------------------------------------------------------------------------------

// let num = [34,55,66,50,2,5,6,7,0,162]

// for (let i = 0; i<num.length;i++){
//   if (num[i]%2==0 && num[i]!==0){
//     console.log(num[i])
//   }
// }

//------------------------------------------------------------------------------

// let numeros = []
// for (let j = 0; j < 5; j++){
//   let numero= prompt("Inserte un numero: ")
//   numeros.push(parseInt(numero))
// }
// console.log(numeros)

//------------------------------------------------------------------------------

// let num = [34,55,66,50,2,5,6,7,0,162]
// let acum= 0

// for (let i = 0; i<num.length; i++){
//   acum += num[i]
// }
// console.log(acum)

//------------------------------------------------------------------------------

// let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto"]

// for(i=0;i<meses.length;i++){
//     if (meses[i]=='Junio')
//         meses.splice(i,1)
//     // console.log(meses)
// }
// console.log(meses)