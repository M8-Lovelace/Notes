(() => {
  // [alias], crear tipos propios //
  type Ids = string | number | boolean;
  // La variable userId solo puede ser de un tipo del type Ids
  const userId: Ids = '1234';

  // LITERAL TYPES //
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  // La variable productID solo puede tener valores del type Sizes
  let productSize: Sizes = 'L';
  productSize = 'S';
  productSize = 'M';
  productSize = 'XL';

  function greeting(userId: Ids, productSize: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string: ${userId.toLowerCase()}`);
    }
  }
  greeting(111,'L')
})();