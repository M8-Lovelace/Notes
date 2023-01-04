export const createProduct = (
  id: string | number, // Parametro obligatorio
  isNew?: boolean, // Parametro opcional
  stock?: number, // Parametro opcional
) => {
  return {
    id, // Valor asignado
    stock: stock ?? 10, // Valor por defecto
    isNew: isNew ?? true // Valor por defecto
  }
}

// 0 === false
// '' === false
// false === false

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1);
console.log(p2);

const p3 = createProduct(1, false, 0);
console.log(p3);
