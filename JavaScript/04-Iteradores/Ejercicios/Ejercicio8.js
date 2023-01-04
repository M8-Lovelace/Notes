

// Realizar un programa que compruebe si la palabra es palíndromo o no 
// Realizar un juego que permita adivinar un numero entre 1 a 20 
// (use Math.random) y solo le permita


let stri=prompt("Ingrese una palabra o frase: ");
let uni= stri.split(" ").join("");
stri=""

for (let i=uni.length; i>0; i--){
    stri+=uni[i-1]
}
console.log(stri)
if (stri==uni){
    console.log("Es un palindromo.")
} else{
    console.log("No es un palindromo.")
}


