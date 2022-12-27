// Creación de un nuevo enum que contiene los roles
enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

// Generar un type que contiene un enum
type User = {
  username: string;
  role: ROLES;
};

// Crear un objeto que cumpla con el type User
const user: User = {
  username: "lovelace",
  role: ROLES.ADMIN
};

// Mostramos el usuario en la consola
console.log("user:", user);

// Exportamos el type User y el enum ROLES
export { User, ROLES };
