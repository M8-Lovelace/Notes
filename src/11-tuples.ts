// Creacemos un array con numeros y strings
const prices: (number | string)[] = [1,3,2,2,2, 'as'];
// Puedo ingresar tanto numeros como strings
prices.push(1);
prices.push('1');

// Creamos una tupla con tres datos fijos
let user: [string, number, boolean];
// El orden y numero de valores declarados es fijo. El primer valor
// obligatoriamente debe ser un string
user = ['lovelace', 16, true];

// Destructuring de una tupla: reasigna con los valores de user e
// ignora el tercer valor
const [username, age] = user;
console.log('username:',username);
console.log('age:', age);
