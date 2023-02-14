// Prototypes 

// Función constructora
function User(name, count) {
  this.name = name;
  this.count = count;
}

// Definimos un prototype para el objecto user
User.prototype.tipoCliente = function () {
  console.log(this.count);
};

// Instaciamos el objeto User
const Edwin = new User("Edwin", 10000);
// Usamos el proto
Edwin.tipoCliente();
console.log(Edwin);

// Heredar prototypes
function Persona(name, count, phone) {
  User.call(this, name, count); // Esto hereda las propiedades de nombre y cuenta de User
  this.phone = phone;
}

Persona.prototype = Object.create(User.prototype) // Heredar los métodos
Persona.prototype.constructor = User // Heredar el constructor

Persona.prototype.mostrarTelefono = function () {
  return `${this.phone}`
}

// Instanciamos el objeto Persona
const userInherit = new Persona("Nicolas", 20000, "3114636977");
console.log(userInherit);
console.log(userInherit.mostrarTelefono())
