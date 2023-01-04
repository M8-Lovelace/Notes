
Tipos de datos primitivos en JS
String, Number, Boolean, Null, Undefined, Symbol, BigInt

Tipos de datos objeto
Tipos predefinidos de JS: Date, RegEXP, Error 
Tipos definidos por el programador: Funciones simple, clases
Array, Objetos especiales: Tipo vector, matriz, objeto global, objeto prototipo, etc...

Funciones:
Funciones declarativas:
declarativeFunction(argumentos);
function declarativeFunction(parámetros) {
    return
}
declarativeFunction(argumentos);

Funciones de expresión:
const expressionFunction = (parametros) => {
    return
}
expressionFunction(argumentos);

Coerción en JS
Forma en la podemos cambiar un tipo de valor a otro, existen dos tipos de coerción
Implícita: Cuando el lenguaje nos ayuda y cambia el tipo de dato "hay que tener cuidado"
const a = (4+"7"); typeof a; String
const b = 4 * "7"; typeof b; Number

Explícita: Cuando forzamos a cambiar el tipo de dato, ejemplo
let explicit = "123"; parseInt(explicit) || Number(explicit);

Truthy & Falsy

Truthy
Boolean(true)
Boolean({})
Boolean([])
Boolean(42)
Boolean(" ") => Cualquier caracter
Boolean(new Date()) => Funciones
Boolean(-42)
Boolean(3.14)
Boolean(-3.14)
Boolean(Infinity)
Boolean(-Infinity)

Falsy
Boolean(false)
Boolean(null)
Boolean(Undefined)
Boolean(0)
Boolean(-0)
Boolean(0n)
Boolean(NaN)
Boolean("")

Operadores:
Asignación:
const asignacion = {
    asignacion: "=",
    adicion: "+=", 
    sustraccion: "-=",
    multiplicacion: "*=",
    division: "/=",
    residuo: "%=",
    potencia: "**=",
    and: "&=",
    or: "|=",
}

Comparación:
const comparacion = {
    igualA: "==",
    noIgualA: "!=",
    igualEstricto: "===",
    noIgualEstricto: "!==",
    mayorQue: ">",
    mayorOIgualQue: ">="
    menorQue: "<",
    menorOIgualQue: "<="
}

Aritméticos:
const aritmeticos = {
    suma: "+",
    resta: "-",
    multiplicacion: "*",
    division: "/",
    residuo: "%",
    potencia: "**",
    incremento: "++", tener en cuenta si es ++a y a++
    decremento: "--" tener en cuenta si es --a y a--
}

Lógicos:
const logicos = {
    and: "&&",
    or: "||"
    not: "!",
}

Operador ternario:
const age = 18;
age >= 18 ? console.log("Puede votar") : console.log("No puede votar")

