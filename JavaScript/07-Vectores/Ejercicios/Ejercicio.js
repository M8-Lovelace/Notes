
/* crear un programa que despliegue un menu que muestre las
siguientes opciones 
1. agregar producto
2. eliminar producto
3. editar producto
4. ver lista de productos
5. Salir del programa
En la opcion de insertar los datos a un vector los datos 
de un articulo son (codigo, nombre, cantidad, precio, costo, 
fecha vencimiento) */

let articulos = []
let codigoP = 0
let nombreP = ""
let cantidadP = 0
let precioP = 0
let costoP = 0
let fechaVencimientoP = ""
let edit=0

while(true) {
  let opc=prompt('-----BIENVENIDO AL MENÚ-----\nElija la opción que desee:\n1. Agregar producto \n2. Eliminar producto \n3. Editar producto\n4. Ver lista de productos\n5. Salir del programa')

  if(opc==1){
    codigoP=prompt('Ingrese el codigo del producto: ')
    nombreP=prompt('Ingrese el nombre del producto: ')
    cantidadP=prompt('Ingrese la cantidad del producto: ')
    precioP=prompt('Ingrese el precio del producto: ')
    costoP=prompt('Ingrese el costo del producto: ')
    fechaVencimientoP=prompt('Ingrese la fecha de vencimiento del producto: ')
    articulos.push({codigo:codigoP,nombre:nombreP,cantidad:cantidadP,precio:precioP,costo:costoP,fechaVencimiento:fechaVencimientoP})
    console.log(articulos)
  }
  else if(opc==2){
    ins = prompt('Ingrese el codigo del producto a eliminar: ')
    let pos=articulos.findIndex(po => po.codigo == ins)
    if(pos!=-1){
    articulos.splice(pos,1)
    }
    else{
      console.log('Posición no encontrada.')
    }
    console.log(articulos)
  }
  else if(opc==3){
    edit=prompt('Ingrese el codigo del producto a editar: ')
    let ope=prompt('1. Editar un solo campo\n2. Editar todos.')
    articulos.forEach(e =>{
      if(e.codigo == edit){
        if(ope==1){
          let op=prompt('Elija el campo que desee editar:\n1. Codigo \n2. Nombre \n3. Cantidad\n4. Precio\n5. Costo\n6. Fecha de  Vencimiento.')
          if(op==1){
            e.codigo=prompt('Ingrese el nuevo codigo del producto: ')
          }
          else if(op==2){
            e.nombre=prompt('Ingrese el nuevo nombre del producto: ')
          }
          else if(op==3){
            e.cantidad=prompt('Ingrese la nueva cantidad del producto: ')
          }
          else if(op==4){
            e.precio=prompt('Ingrese el nuevo precio del producto: ')
          }
          else if(op==5){
            e.costo=prompt('Ingrese el nuevo costo del producto: ')
          }
          else if(op==6){
          e.fechaVencimiento=prompt('Ingrese la nueva fecha de vencimiento del producto: ')
          }
          else{
            console.error('Ingrese un campo valido para editar.')
          }
        }
        else if(ope==2){
            e.codigo=prompt('Ingrese el nuevo codigo del producto: ')
            e.nombre=prompt('Ingrese el nuevo nombre del producto: ')
            e.cantidad=prompt('Ingrese la nueva cantidad del producto: ')
            e.precio=prompt('Ingrese el nuevo precio del producto: ')
            e.costo=prompt('Ingrese el nuevo costo del producto: ')
            e.fechaVencimiento=prompt('Ingrese la nueva fecha de vencimiento del producto: ')
        }
        else{
          console.error('Ingrese una opcion valida')
        }
      }
    })
    console.log(articulos)
  }
  else if(opc==4){
    for(let i=0;i<articulos.length;i++){
      console.log('Codigo: ',articulos[i].codigo,', Nombre: ',articulos[i].nombre,', Cantidad: ',articulos[i].cantidad,', Precio: ',articulos[i].precio,', Costo: ',articulos[i].costo,', Fecha de vencimiento: ',articulos[i].fechaVencimiento)
    }
  }
  else if(opc==5){
    alert('Fin del Programa')
    console.log(articulos)
    break
  }
  else{
    console.error('Ingrese una opcion valida.')
  }
}

// codigo a modificar 