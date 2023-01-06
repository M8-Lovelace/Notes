// El ReadOnlyArray no permite mutar, y el readonly en el property no permite reasignaciones
const numbers: ReadonlyArray<number> = [1,2,2,2];
numbers.filter(()=> {});
numbers.reduce(() => 0);
numbers.map(() => 0);
// numbers.push(9);
// numbers.pop();
// numbers.unshift(1);