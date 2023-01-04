
//Programa para convertir numeros de base binaria a decimal y viseversa

// --- CONVERTIR DE DECIMAL A BINARIO ---
// 1.  Realizar divisiones sucesivas entre 2 y escribir los residuos obtenidos en cada división en orden inverso al que han sido obtenidos.
// 
function decimalABinario (numero) {
    let num = numero;
    let binario = (num % 2).toString()
    for (; num > 1;) {
        num = parseInt(num / 2)
        binario =  (num % 2) + (binario)
    }
    return binario
}

// --- CONVERTIR DE BINARIO A DECIMAL ---
// 1. Escribe las potencias de dos de derecha a izquierda. Empieza en 20, dándole un valor de "1". Incrementa el exponente en uno en cada potencia.
//Détente cuando la cantidad de elementos de la lista sea igual a la cantidad de dígitos del número binario
// 2. Ahora, escribe el numero binario debajo de los números 128, 64, 32, 16, 8, 4, 2 y 1 (las potencias)
// 3. Conecta los dígitos del número binario con sus potencias correspondientes y multiplica
// 4. Suma los resultados y se obtiene el numero decimal
function binarioADecimal(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
       sum += +num[i] * 2 ** (num.length - 1 - i);
    }
    return sum;
}

//Llamar y ingresar datos a convertir
console.log("Binario "+decimalABinario(36))
console.log(binarioADecimal("11000"));
