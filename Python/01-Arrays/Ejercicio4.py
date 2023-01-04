# Escribe una función iterativa que dado un número entero n, retorne un array con todos los números
# enteros en orden decreciente desde n a 1.

numeros=[]
numero=int(input("Ingrese un numero: "))

for i in range(1, numero+1):
  numeros.append(numero)
  numero-=1

numeros.sort(reverse=True)
print(numeros)
