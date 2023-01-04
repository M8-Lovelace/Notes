let lista1=[6,6,6,6]
let lista2=[6,6,6,6]
let ver=""

function todosIguales(lista){
  for(let i = 0; i < lista.length; i++) {

    const elemento = lista[i]

    if (elemento==ver || ver==""){
      ver=elemento
    }
    else{
      return "False"
    }
  }
  
  return "True"
}

function todosDistintos(lista){
  for(let i = 0; i < lista.length; i++) {

    const elemento = lista[i]

    if (elemento==ver || ver==""){
      ver=elemento
    }
    else{
      return "True"
    }
  }
  return "False"
}

console.log(`¿Son todos Iguales?: `+ todosIguales(lista1))
console.log(`¿Son todos Distintos?: `+todosDistintos(lista2))
