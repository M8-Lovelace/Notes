// IIFE: Immediately Invoked Function Expression, evitar contaminar el scope global
(() => {
  let prices = [1, 2, 3, 1, 2, 3, 212, 'hola', true];
  prices.push(8);
  console.log('prices:', prices);

  let products = ['hola', true];
  products.push(false);
  console.log('products:', products)

  // Asignar arrays con diferentes tipos de forma explicita
  let mixed: (number | string | boolean)[] = ['hola', true];
  mixed.push(12);
  console.log('mixed:', mixed);

  let numbers = [1, 2, 3, 2, 1, 1]
  let multi = numbers.map(item => item * 2)
  console.log('numbers:', numbers);
  console.log('multiplicados * 2:', multi);

  // ARRAYS //
  // [number[], string[], Date[], any[]], cualquier tipo de dato//
  const myArray: number[] = [1, 2, 3, 4, 5];
  let pricess: (number | string | boolean)[] = ['hola', 2, true];

  // TUPLES //
  // [number, string, boolean, Date, any], cualquier tipo de dato//
  let person: [number, string, boolean] = [1, 'Steve', true];
})();