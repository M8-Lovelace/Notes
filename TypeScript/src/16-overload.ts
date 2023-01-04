// Laura => [L,a,u,r,a] => string => string[]
// [L,a,u,r,a] => Laura => string[] => string

// ----------------------------Problema--------------------------------//
// Recibe como parametros un string o un array con string
function parseStr1(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(""); // string
  } else {
    return input.split(""); // string[]
  }
}

const rtaArray2 = parseStr('Laura');
// rtaArray.reverse();
if (Array.isArray(rtaArray2)) {
  rtaArray2.reverse();
}
console.log('1. rtaArray reverse', 'Laura =>' ,rtaArray2); // [ 'a', 'r', 'u', 'a', 'L' ]

// Con el 'as' define el tipo de dato a retornar
const rtaArray3 = parseStr1("Laura") as string[];
console.log("1. rtaArray", "Laura =>", rtaArray3); // [ 'L', 'a', 'u', 'r', 'a' ]


// ----------------------------Solución--------------------------------//
// Predefiniendo el tipo de datos a retornar
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// Buenas practicas, si hay un any o un unkown en el overload se deja al final
export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string'){
    return input.split(''); // string[]
  } else if (typeof input === 'number'){
    return true; // boolean
  }
}

const rtaArray = parseStr('Laura');
rtaArray.reverse();
console.log('2. rtaArray reverse', 'Laura =>' ,rtaArray); // [ 'a', 'r', 'u', 'a', 'L' ]

const rtaStr = parseStr(['L','a','u','r','a']);
rtaStr.toLowerCase();
console.log('2. rtaStr', "['L','a','u','r','a'] =>",rtaStr); // Laura

const rtaBoolean = parseStr(12);
console.log('2. rtaBoolean =>',rtaBoolean);
