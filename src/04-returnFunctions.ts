// IIFE: Immediately Invoked Function Expression, evitar contaminar el scope global
(() => {
  // Retornando un string
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    })
    // total = prices.reduce((e, i) => e + i);
    return total.toString();
  };

  // Funcion sin retorno
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  printTotal([1, 2, 1, 1, 1]); // El total es 6
})();