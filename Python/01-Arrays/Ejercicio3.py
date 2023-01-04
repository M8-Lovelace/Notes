# Concatenar dos arrays A y B de la siguiente forma: A0, B0, A1, B1, A2, B2, …, An, Bn. Los vectores 
# tendrán la misma longitud.

array1 = ['A', 'B']
array2 = []

cantidad=int(input("Ingrese un numero: "))
o=0

while o <= cantidad:
  array2.append(o)
  o+=1

numero = 0

for i in range(1, cantidad+2):
  print(array1[0] , array2[numero])
  print(array1[1] , array2[numero])
  numero += 1
