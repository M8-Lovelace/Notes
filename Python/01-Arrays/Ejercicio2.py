# Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos. La lista 
# termina cuando el numero sea negativo o Cero

numeros=[]
i=0
suma=0

while True:
  numero=int(input("Ingrese un numero: "))

  if numero>0:
    i+=1
    suma+=numero
    numeros.append(numero)

  else:
    print("Los numero ingresados fueron: ", numeros)
    media=suma/i
    numeros.sort()
    print("El numero menor es: ", numeros[0] )
    print("El numero menor es: ", numeros[i-1] )
    print("La media de los numero ingresados es: ", media)
    break


  