// Class expresion
const Cliente2 = class {};

// Class declaration
class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  getInformation() {
    return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
  }

  static welcome() {
    return `Bienvenido a la clase padre`;
  }
}

const juan = new Cliente("Juan", 20000); // Instanciar una clase - generar un objeto
console.log(juan.getInformation()); // Getter
console.log(Cliente.welcome()); // El método estático pertenece a la clase y no al objeto

// Herencia
class User extends Cliente {
  #categoria; // Sólo puede ser modificado por medio de su constructor o métodos públicos
  constructor(nombre, saldo, telefono = "User hasn't phone", categoria = "A1") {
    // El constructor permite valores default
    super(nombre, saldo); // Heredar atributos del constructor
    this.telefono = telefono;
    this.#categoria = categoria;
  }

  getInformation() {
    return `User: ${this.nombre}, ${this.saldo}; phone: ${this.telefono}, ${
      this.#categoria
    }`;
  }

  set categoria(nombreCategoria) {
    this.#categoria = nombreCategoria;
  }

  static welcome() {
    return "Bienvenido a la clase hija";
  }
}

const newUser = new User("Jaime", 200, 3114636977);
console.log(User.welcome());
newUser.categoria = "Juvenil";
console.log(newUser.getInformation());
console.log(newUser.categoria); // Atributo privado
