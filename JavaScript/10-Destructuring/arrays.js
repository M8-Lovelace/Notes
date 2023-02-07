// La sintaxis de desestructuración es una expresión de JavaScript que permite 
// desempacar valores de arreglos o propiedades de objetos en distintas variables.
const vehicles = ['mustang', 'f-150', 'expedition'];

// Al desestructurar arreglos, el orden en que se declaran las variables es importante.
const [car, truck, suv] = vehicles;

const vehicles2 = ['mustang', 'f-150', 'expedition'];

// Si solo queremos el automóvil y el todoterreno, simplemente podemos omitir el camión
// pero mantener la coma
const [car2,, suv2] = vehicles;


function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);
// Console
// Sum: 11
// Difference -3
// Product: 28
// Quotient 0.5714285714285714