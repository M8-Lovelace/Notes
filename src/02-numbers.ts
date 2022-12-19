(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('ProductPrice', productPrice)

  let customerAge: number = 23;
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge)

  let productInStock: number;

  if(productInStock>10){
    console.log('is greater')
  }

  console.log('productInStock', productInStock); // undefined

  // No es un datos que se pueda convertir
  let discount = parseInt('asdf');
  console.log('discount', discount) // NaN

  if(discount<=200){
    console.log('apply');
  }
  else{
    console.log('not apply'); 
  }

  // Hexadecimal 
  let hex = 0xfff;
  console.log('hex', hex); // 4095

  // Binarios 
  let bin = 0b1010;
  console.log('bin', bin); // 10

  // Si se refieres al tipado de números, siempre escribir en minúscula 'number'
  const myNumber: number = 10;
})();