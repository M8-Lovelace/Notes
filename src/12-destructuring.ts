// IIFE: Immediately Invoked Function Expression, evitar contaminar el scope global
(() => {
  // Type user para hacer pruebas en las funciones
  type User = { user: string; id: number; param: number; otherParam: number };

  // Parámetros Rest - mismo tipo
  const restParams = (
    first: string,
    second: string,
    ...rest: string[]
  ): void => {
    console.log(
      `1. First: ${first}, Second: ${second}, Rest: ${JSON.stringify(rest)}`
    );
  };
  restParams("Laura", "Ximena", "Susano", "Fernandez", "16");

  const anyParams = (
    first: string,
    second: string,
    ...rest: (number | boolean)[]
  ): void => {
    console.log(
      `2. First: ${first}, Second: ${second}, Rest: ${JSON.stringify(rest)}`
    );
  };
  anyParams("Laura", "Susano", 4, true);

  // Con un Type dentro de la función
  const typeDestructuring = (usuario: User): void => {
    const { user, id, ...rest } = usuario;
    console.log(`3. User: ${user}, ID: ${id}, Rest: ${JSON.stringify(rest)}`);
  };
  typeDestructuring({ user: "Laura", id: 16, param: 1, otherParam: 2 });

  // Destructuring dentro de los parámetros
  const anotherTypeDestructuring = ({ user, id, ...rest }: User): void => {
    console.log(`4. User: ${user}, ID: ${id}, Rest: ${JSON.stringify(rest)}`);
  };
  anotherTypeDestructuring({ user: "Laura", id: 22, param: 1, otherParam: 2 });

  // Destructuring en arreglos
  const games: string[] = ["League Of Legends", "Smite", "Albion Online"];
  const [lol, smite, albion] = games;
  console.log(
    `5. Juego 1: ${lol}, Juego 2: ${smite}, Juego 3: ${albion}`
  );
})();
