(()=>{
  // Puede ir cualquier cosa, mal uso, pero puede ser usado en migración //
  let myDinamicVar: any;
  myDinamicVar = 100;
  myDinamicVar = null;
  myDinamicVar = {};
  myDinamicVar = '';

  // Casteo: tipar el any, pero no es recomendable
  myDinamicVar = 'hola';
  myDinamicVar = (myDinamicVar as string).toLowerCase(); // Casteo: string
  console.log('myDinamicVar:', myDinamicVar);

  // Usando genéricos
  myDinamicVar = 2.2333;
  myDinamicVar = (<number>myDinamicVar).toFixed(2); // Casteo: number
  console.log('myDinamicVar:', myDinamicVar);
})();