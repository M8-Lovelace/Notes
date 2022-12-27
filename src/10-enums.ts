// IIFE: Immediately Invoked Function Expression, evitar contaminar el scope global
(() => {
  // Creación de un nuevo enum que contiene los roles
  enum ROLES {
    ADMIN = "admin",
    USER = "user",
    OWNER = "owner"
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
  console.log('user:', user);
})();
