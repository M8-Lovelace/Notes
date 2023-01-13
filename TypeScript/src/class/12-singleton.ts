// Singleton: constructor privado
// Singleton nos previene crear múltiples instancias de una clase.

export class MyService {

  static instance: MyService | null = null;

  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  // Se crea un metodo estatico que controla el acceso de las instancias
  static create(name: string) {
    // Creamos la bandera que nos previene de crear multiples instancias
    if (MyService.instance === null) {
      console.log('debería entrar una vez');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

// Creamos la instacia del objeto
// El primero que lo llamó crea la instacia y a partir de el ya se reutiliza
const myService1 = MyService.create('service 1'); // Service 1
console.log(myService1.getName());
const myService2 = MyService.create('service 2'); // Service 1
console.log(myService2.getName());
const myService3 = MyService.create('service 3'); // Service 1
console.log(myService3.getName());

console.log(myService1 === myService2); // True