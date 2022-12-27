// IIFE: Immediately Invoked Function Expression, evitar contaminar el scope global
(() => {
  // Función declarativa
  function returnName(
    name: string, // Parámetro obligatorio
    lastname: string = 'Fernandez', // Parámetro por defecto
    status?: boolean // Parámetro opcional
  ): string { // Retorna un string
    return `1. My name is ${name} ${lastname}, status: ${status ? status : 'Desconocido'}`;
  }
  console.log(returnName('Laura', 'Susano', true));

  // ------------------------ ARROW FUNCTIONS ---------------------------//
  // Función de expresión
  const returnName2 = (
    name: string, // Parámetro obligatorio
    lastname: string = 'Fernandez', // Parámetro por defecto
    status?: boolean // Parámetro opcional
  ): string => { // Retorna un string
    return `2. My name is ${name} ${lastname}, status: ${status ? status : 'Desconocido'}`;
  };
  console.log(returnName2('Laura'));
})();
