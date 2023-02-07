// Callback es una funcion que se ejectua despues de que algo sucede

// El callback mas sencillo es, se va a disparar cuando pasen 2 segundos
// Es una funcion que recibe otr funcion que se ejecuta mas adelante
// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 2000)


// El parametro callback es lo que voy a hacer cuando ya tenga la información de la funcion
let getUsuarioById = (id, callback) => {
  let usuario = {
    // Supongamos que vamos a la base de datos y trameos
    // La siguiente info
    nombre: 'Miguel',
    //id:id   //ES6
    id
  }
  callback(usuario);
}
getUsuarioById(10, (usuario) => {
  // En teoria yo estoy mandando un usuario 
  // Que quiero disparar cuando yo ya tenga el usuario
  console.log('Usuario base de datos', usuario);
}
)

// En este tipo de peticiones siempre puede haber un error
// Por ejemplo puede ser que el usiario con id=20 no exista
// Vamos a simular que el id 20 no existe

let getUsuarioById2 = (id, callback) => {
  let usuario = {
    nombre: 'Miguel',
    id
  }

  if (id === 20) {
    callback(`Usuario con id ${id} no existe en la bd`, null)
  } else { callback(null, usuario); }
}

getUsuarioById2(1,

  (err, usuario) => {
    if (err) {
      return console.log(err);
    }
    console.log('Usuario base de datos', usuario);
  }
)