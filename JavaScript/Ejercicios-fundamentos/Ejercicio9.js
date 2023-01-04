
// 3 oportunidades para adivinar dicho numero, si adivina enviar mensaje 
// de felicitaciones si se acaba las oportunidades enviar mensaje de 
// game over


let op=0;
let num= Math.floor(Math.random()*21);

while(op<=2){
    n=prompt("Introduce un numero: ")
    op+=1;
    if (n==num){
        console.log("Ganaste!");
    } else{
        console.log("Perdió. El numero era:", num);
    }
}

