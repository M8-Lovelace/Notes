// WeakSet: Sólo se pueden pasar objetos, no tiene size y no son iterables
const newWeakSet = new WeakSet();
const user = { nombre: "Edwin", age: 22 };
newWeakSet.add(user);

console.log(newWeakSet.has(user));
