# Suma de la diagonal de una matriz
#  Crea una lista bidimensional de longitud NxN
#  Llenar la tabla con valores aleatorios.
#  Crear una función que calcule la suma de la diagonal de la lista.

from random import randint

def llenar_matriz(n):
    matriz =[]

    for i in range(n):
        fila=[]

        for c in range(n):
            fila.append(randint(1,100))

        matriz.append(fila)

    return matriz

longitud=int(input("Ingrese la longitud: "))

result=llenar_matriz(longitud)

print (result)
conteo=0
sumatoria=0


for l in range(1):
    for k in range(1):
        for k in range(0,longitud):
            traer=result[k][k]
            sumatoria+=traer
print("La sumatoria en diagonal de una matriz es: ",sumatoria)
