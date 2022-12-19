(() => {
  let myNull: null = null;
  let myUndefined: undefined = undefined;
  myNull = null;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'asa';

  function hi(name: string | null){
    let hello = 'Hola ';
    if(name){
      hello += name;
    } else{
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hiV2(name: string | null){
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hiV2('Laura')

})();