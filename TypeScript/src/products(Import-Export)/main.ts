import { createProduct, calcStock, products } from './product.service';

createProduct({
  name: 'Product 3',
  createdAt: new Date(2002, 6, 22),
  stock: 3,
});

createProduct({
  name: 'Product 4',
  createdAt: new Date(1999, 6, 11),
  stock: 4,
  size: 'L',
});

console.log(products);
const total = calcStock();
console.log(total);
