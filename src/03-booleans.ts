(() => {
  let isEnable = true;
  // isEnable = 'as';
  // isEnable = 1234;
  isEnable = false;

  // Tipado explicito
  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);

  // Retorna true o false si se cumple o no la condición
  isNew = random > 0.5;
  // Equivale lo mismo que esto
  // isNew = random > 0.5 ? true : false;
  
  console.log('yes or not', isNew);

  const myBoolean: boolean = true;
})();
