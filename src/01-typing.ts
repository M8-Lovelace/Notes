// IIFE: Immediately Invoked Function Expression, evitar contaminar el scope global
(() => {
  // Nunca usar [String, Boolean, Number, Object, Symbol] (se usan en JS),
  // usar los tipos que recomienda TS, en este caso [string, boolean, number,
  // object, symbol]
  // --------------------------------------------------------------------//

  // Si una variable no se va a asignar, se debe tipar siempre o se
  // asignará any
  let productInStock: number;

  // --------------------------- CONSTANTS ------------------------------//
  const myProductStock = 1000;

  // ---------------------------- STRINGS -------------------------------//
  // ["iPhone12", 'iPhone12', `iPhone12`] las comillas                   //
  let myProductName = 'iPhone14';
  myProductName = 'change';
  myProductName.toLowerCase();

  // ---------------------------- NUMBERS -------------------------------//
  // [int, float, octal: "0o0771234", hex: "0xfff", binary: "ob1010", NaN//
  // Infinity]                                                           //
  let myProductPrice: number = 123;
  myProductPrice.toFixed();

  // ---------------------------- BOOLEANS ------------------------------//
  // [true, false]                                                       //
  let isOpen: boolean = Math.random() > 0.5;

  // ------------------------------ ARRAYS ------------------------------//
  // [number[], string[], Date[], any[]], cualquier tipo de dato         //
  const myArray: number[] = [1, 2, 3, 4, 5];
  let pricess: (number | string | boolean)[] = ['hola', 2, true];

  // ------------------------------ TUPLES ------------------------------//
  // [number, string, boolean, Date, any], cualquier tipo de dato        //
  let person: [number, string, boolean] = [1, 'Steve', true];

  // -------------------------------- ANY -------------------------------//
  // puede ir cualquier cosa, mal uso, pero puede ser usado en migración //
  let myDinamicVar: any;
  // Casteo: tipar el any, pero no es recomendable
  myDinamicVar = 'hola';
  myDinamicVar = (myDinamicVar as string).charAt(0); // Casteo: string
  // Usando genéricos
  myDinamicVar = 2.2333;
  myDinamicVar = (<number>myDinamicVar).toFixed(2); // Casteo: number

  // -------------------------- UNION TYPES------------------------------//
  // Para poder soportar más de un tipo de dato                          //
  let myUnionType: number | string | boolean | symbol = 16;

  // ---------------------------- ALIAS ---------------------------------//
  // Crear tipos propios                                                 //
  type Ids = string | number | boolean;
  // La variable userID solo puede ser de un tipo del type Ids
  const userId: Ids = '1234';

  // -------------------------- LITERAL TYPES ---------------------------//
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  // La variable productID solo puede tener valores del type Sizes
  const productID: Sizes = 'L';

  // ----------------------------- UNKNOWN ------------------------------//
  // Solo puede ser asignado a any o a unknown                           //
  let value: unknown;

  // ------------------------------ VOID --------------------------------//
  // Sirve para decir que una función no retorna nada                    //
  const returnAvoid = (name?: string): void => {
    console.log(`${name ? name : 'Unknown'}`);
  };

  // -------------------------- NULL & UNDEFINED-------------------------//
  // epende el caso de uso para asignar estos valores con union types    //
  const myName: string | null = 'Edwin';
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  // Optional chaining, puede ser usado en types, parámetros, interfaces,
  // para decir que es opcional, si myName llegase a ser nulo, asignaría
  // 'Sin nombre'
  const lettersName = myName?.length || 'Sin nombre';

  // ------------------------------ NEVER -------------------------------//
  // Significa que el valor nunca va a existir, se usa en funciones que  //
  // que lanzan excepciones                                              //
  function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
  }
})();



