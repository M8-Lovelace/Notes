// localStorage
const myObject = { name: Edwin };

// Guardar
localStorage.setItem("user", JSON.stringify(myObject));

// Obtener
const cat = JSON.parse(localStorage.getItem("user"));

// Eliminar
localStorage.removeItem("user"); // La propiedad MyCat
localStorage.clear() // Todo el localStorage

// Actualizar => Sólo debemos guardar en la misma propiedad 
myObject.age = 22
localStorage.setItem("user", JSON.stringify(myObject));