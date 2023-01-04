
//----------------------Ejercicio 1------------------
// De los números  anteriores devolver un vector con todos los números entre  30 y 60
let n=[34,55,66,50,2,5,0,7,102,56,97] 
let v=[]

for (let i=0; i<n.length;i++){
    if(n[i]>30 && n[i]<60){
        v.push(n[i])
    }
}
console.log(v)

