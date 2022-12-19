(() => {
  // Para poder soportar más de un tipo de dato 
  let userId: number | string ;
  userId = 'asasa';

  function greeting(myText: string | number){
    if(typeof myText === 'string'){
      console.log(`string: ${myText.toLowerCase()}`);
    } else{
      console.log(`number: ${myText.toFixed(1)}`);
    }
  };

  greeting('adada');
  greeting(1212.1222);
})();