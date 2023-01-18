// Los genéricos se usan cuando no sabemos que tipo de argumento va a recibir una función o una clase,
// por ejemplo, cuando se trabaja con una API que no sabemos que tipo de dato va a retornar
// o cuando se trabaja con una función que puede recibir cualquier tipo de dato, como un callback.
// --------------------------------------------------------------------//
(() => {
  // Literal function
  function queTipoSoy<T>(argumento: T): T {
    return argumento;
  }

  // Arrow function
  const queTipoSoy2 = <T>(argumento: T): T => {
    return argumento;
  };

  // Definimos un string en el genérico
  let soyString = queTipoSoy("Hola Mundo");
  // Definimos un numero en el genérico
  let soyNumero = queTipoSoy2(100);
  // Definimos un arreglo de números en el genérico 
  let soyArreglo = queTipoSoy([1, 2, 3, 4, 5, 6, 7, 8, 9]);
})();