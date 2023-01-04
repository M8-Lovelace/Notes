
let nombres=[]
let ronda=0
let rondauno=[]
let rondados=[]
let ganador1=""
let ganador2=""
let ganadorfinal=""
let a=0
let b=1

for (let i=0; i<8; i++){
  let nombre=prompt(`Ingrese el nombre del ${i+1}: `)
  nombres.push(nombre)
}

for (let ronda=1; ronda<4; ronda++){
  if(ronda==1){
    for(let u=1; u<5; u++){
      console.log(`RONDA 1: `)
      console.log(`a. ${nombres[a]} - b. ${nombres[b]}`)
      ganador1=prompt(`Ingrese el ganador de la ronda 1: `)
      if (ganador1=="a"){
        rondauno.push(nombres[a])
      }
      else if(ganador1=="b"){
        rondauno.push(nombres[b])
      }
      else{
        console.log("Ingrese un ganador valido.")
        break
      }
      a+=2
      b+=2
    }
  }
  else if(ronda==2){
    a=0
    b=1
    for(let i=1; i<3; i++){
      console.log(`RONDA 2: `)
      console.log(`a. ${rondauno[a]} - b. ${rondauno[b]}`)
      ganador2=prompt(`Ingrese el ganador de la ronda: `)
      if (ganador2=="a"){
        rondados.push(rondauno[a])
      }
      else if(ganador2=="b"){
        rondados.push(rondauno[b])
        
      }
      else{
        console.log("Ingrese un ganador valido.")
        break
      }
      a+=2
      b+=2
    }
  }
  else if(ronda==3){
    for(let i=1; i<2; i++){
      console.log(`RONDA 3: `)
      console.log(`a. ${rondados[0]} - b. ${rondados[1]}`)
      ganadorfinal=prompt(`Ingrese el ganador de la ronda: `)
      if (ganadorfinal=="a"){
        console.log(`El ganador del torneo de tenis es: ${rondados[0]}`)
      }
      else if(ganadorfinal=="b"){
        console.log(`El ganador del torneo de tenis es: ${rondados[1]}`)
      }
      else{
        console.log("Ingrese un ganador valido.")
      }
    }
  }
}


