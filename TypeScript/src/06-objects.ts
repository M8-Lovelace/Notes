// ts-node src/06-objects.ts
// IIFE: Immediately Invoked Function Expression, evitar contaminar el scope global
(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: 'Product 1',
    createdAt: new Date(2002, 6, 22),
    stock: 12,
  });

  addProduct({
    title: 'Product 2',
    createdAt: new Date(1999, 6, 11),
    stock: 4,
    size: 'L',
  });
  console.log(products);
})();
