// Laura => [L,a,u,r,a] => string => string[]
// [L,a,u,r,a] => Laura => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Laura');
console.log('rtaArray', 'Laura =>', rtaArray); // [ 'L', 'a', 'u', 'r', 'a' ]

// --------------------------------------------------------------------//
// rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray reverse', 'Laura =>' ,rtaArray); // [ 'a', 'r', 'u', 'a', 'L' ]

// --------------------------------------------------------------------//
const rtaStr = parseStr(['L','a','u','r','a']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['L','a','u','r','a'] =>",rtaStr); // Laura
