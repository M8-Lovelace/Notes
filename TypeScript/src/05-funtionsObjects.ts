// IIFE: Immediately Invoked Function Expression, evitar contaminar el scope global
(() => {
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };

  login({
    email: 'laura@sus.com',
    password: 12345,
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
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
    size: 'S',
  });
  console.log(products);
})();
