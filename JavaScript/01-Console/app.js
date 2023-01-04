/* 
  Window => objeto global de JS y console deriva de este
  Puede usarse de estas maneras:
 */

  window.console.log("Soy el objeto console");
  console.log("Soy el objeto console");
  
  /* Para ver los métodos disponibles de console podemos verlo de manera persé */
  console.log(console);
  
  /* Ejemplos de los métodos de console más usados */
  
  // 1. Muestra mensajes generales
  console.log("Mensaje general");
  
  // 2. Muestra mensajes de advertencia
  console.warn("Mensaje de advertencia");
  
  // 3. Muestra información
  console.info("Mensaje de información");
  
  // 4. Mensaje de error
  console.error("Mensaje de error");
  
  // 5. Mensaje en formato de tablas con arrays
  const perros = [
    { id: 1, nombre: "Cachuchin", raza: "Mestizo", macho: true },
    { id: 2, nombre: "Pelusa", raza: "Cooker", macho: false },
    { id: 3, nombre: "Coco", raza: "Labrador", macho: true },
  ];
  
  console.table(perros);
  console.table(perros, "nombre");
  
  // 6. Mensaje en formato de tablas con objetos
  const persona = {
    nombre: "Edwin",
    apellido: "Páez",
    edad: 22,
    nombreCompleto: function () {
      return this.nombre + " " + this.apellido;
    },
  };
  
  console.table(persona);
  
  // 7. Agrupar consoles
  console.group("Console contenedor");
  console.log("Contenedor hijo");
  console.warn("Contenedor hijo");
  console.error("Contenedor hijo");
  console.groupEnd();
  
  // 8. Devuelve el orden de ejecución del programa (funciones)
  function foo() {
    function bar() {
      console.trace();
    }
    bar();
  }
  
  foo();
  
  console.trace();
  
  // 9. Determinar el tiempo de ejecución
  const numeros = Array(50000).fill(5);
  
  // forEach()
  console.time("forEach");
  const salidaFor = numeros.forEach((x) => x * 5);
  console.timeEnd("forEach");
  
  // map()
  console.time("map");
  const salidaMap = numeros.map((x) => x * 5);
  console.timeEnd("map");
  
  // 10. Imprime por consola todas las llaves y propiedades de un objeto especificiado
  console.dir(persona);
  
  // 11. Validar si una afirmación es falsa o verdadera, si la afirmación es verdadera no aparecerá nada, de lo contrario, saldrá un mensaje de error.
  let x = 3;
  let y = 5;
  let prueba = "Se espera que x siempre sea menor que y";
  console.assert(x > y, (x, y, prueba));
  
  // 12. Limpiar la consola
  console.clear();
  