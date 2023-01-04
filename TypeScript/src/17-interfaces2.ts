(() => {
  // -------------------------- INTERFACES ------------------------------//
  // Permite nuevas propiedades y métodos
  // Interface base para extender
  interface BaseModel {
    id: string | number;
    createdAt?: Date;
    updatedAt?: Date;
  }

  // Extender la interfaz Base Model
  interface Address extends BaseModel {
    name?: string; // Propiedad opcional
    location: string[]; // Propiedad de tipo array
    getAddress?: () => string; // Método que retorna un string
  }

  // Se puede expandir una interface
  interface Address {
    status: boolean;
  }

  // ------------------------ UTILITY TYPES -----------------------------//
  // De esta manera podemos extender una interfaz pero omitir ciertos valores
  interface OmitInterface extends Omit<BaseModel, "createdAt" | "updatedAt"> {}
  // De esta manera podemos extender una interfaz pero seleccionar solamente ciertos valores
  interface PickInterface extends Pick<BaseModel, "id" | "createdAt"> {}
  // De esta manera podemos extender una interfaz y que todos sus atributos sean opcionales
  interface PartialInterface extends Partial<BaseModel> {}
  // De esta manera podemos extender una interfaz y que todos sus atributos sean requeridos
  interface RequiredInterface extends Required<BaseModel> {}
  // De esta manera podemos extender una interfaz y que todos sus atributos sean de lectura
  interface ReadOnlyInterface extends Readonly<BaseModel> {}

  // Los utility types pueden ser anidados, de esta manera, todos son opcionales pero solo en modo lectura
  interface JoinUtilitiesInterface extends Readonly<Partial<BaseModel>> {}

  // ReadOnlyArray, se omite el ID, se colocan todos opcionales y se colocan todos en modo readonly
  // Recordar que el ReadOnlyArray no permite mutar, y el readonly en el property no permite reasignaciones
  interface readOnlyInterface extends Readonly<Partial<Omit<BaseModel, "id">>> {
    readonly id: ReadonlyArray<string>;
  }

  // ---------------------------- TYPES ---------------------------------//
  // No permite nuevas propiedades y métodos
  type newUser = {
    readonly id: string; // Propiedad obligatoria que solo se podrá asignar 1 vez y no se podrá editar
    name: string; // Propiedad obligatoria
    address: Address; // Propiedad de tipo interface
    skills: string[]; // Propiedad de tipo array
    age?: number; // Propiedad opcional
    getName?: () => string; // Método que retorna un string
  };

  // Ejemplo de construcción con types y interfaces
  const newUser: newUser = {
    id: "01",
    name: "Laura",
    address: {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      name: "Altamira",
      location: ["Calle", "4", "5-16"],
      status: false
    },
    age: 20,
    skills: ["TypeScript", "JavaScript", "Git"],
    getName() {
      return `${this.name} vive en ${this.address?.name} en ${this.address?.location}, ${this.address?.status}`;
    }
  };

  // newUser.id = "Nuevo ID, no se puede porque es solo lectura"

  // Acceder al tipado por índice - en este caso el id de base model es string, entonces recibirá un string
  const indexAccess = (id: BaseModel["id"]): BaseModel["id"] => {
    return id;
  };
  // indexAccess(true) // Error
  indexAccess(20);
  indexAccess("20");
})();