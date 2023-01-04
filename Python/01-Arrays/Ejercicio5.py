# Programa que llene un array con 10 números enteros que se leen por teclado. A continuación calcula 
# y muestra la media de los valores positivos y la de los valores negativos del array.

numeros=[]
suma=0
positivo=0
positivos=[]
negativo=0
negativos=[]
a=0
b=0

for i in range(1, 11):
  numero=int(input("Ingrese un numero: "))
  numeros.append(numero)
  if numero >= 0:
    a+=1
    positivo+=numero
    positivos.append(numero)
  else:
    b+=1
    negativo+=numero
    negativos.append(numero)

print("Los numero ingresados son: ",numeros)
print("Los numeros postivos ingresados son: ",positivos)
print("Los numeros negativos ingresados son: ",negativos)
  
print("La media de los valores positivos es: ", positivo/a)
print("La suma de los valores negativos es: ", negativo/b)
