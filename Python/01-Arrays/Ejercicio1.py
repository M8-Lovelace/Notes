# Dado un vector de N enteros, comprobar el mayor, el menor y por último la media de todos

numeros=[]
suma=0

cantidad=int(input("Ingrese la cantidad de numeros a registrar: "))

for i in range(1, cantidad+1):
  numero=int(input("Ingrese un numero: "))
  suma+=numero
  numeros.append(numero)

print("Los numero ingresados fueron: ", numeros)
media=suma/cantidad
numeros.sort()
print("El numero menor es: ", numeros[0] )
print("El numero mayor es: ", numeros[cantidad-1])
print("La media de los numero ingresados es: ", media)
