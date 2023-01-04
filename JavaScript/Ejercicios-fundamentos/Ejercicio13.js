

//13. Programa para convertir de grados Celsius a Fahrenheit y viseversa

function convertirFahrenheit(g){
    let grados= (g * 9/5) + 32
    console.log(`${g} grados Celsius equivalen a ${grados} Fahrenheit`)
}

function convertirCelsius(g){
    let grados = (g - 32) * 5/9
    console.log(`${g} grados Fahrenheit equivalen a ${grados} Celsius`)
}

convertirCelsius(-5)
convertirFahrenheit(25)