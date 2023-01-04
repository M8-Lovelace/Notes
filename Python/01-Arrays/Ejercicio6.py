# Programa que llene un array con la altura de N personas y calcular la altura media. Calcular cuántas 
# personas tienen una altura superior a la media y cuántas tienen una altura inferior a la media. El 
# valor de N se pide por teclado y debe ser entero positivo.


alturas=[]
suma=0

while True:

  cantidad=int(input("Ingrese la cantidad de personas a registrar: "))

  if cantidad >= 0:
    for i in range(1, cantidad+1):
      altura=int(input("Ingrese altura de persona en centimetros: "))
      suma+=altura
      alturas.append(altura)

    media=suma/cantidad


    mayor=[]
    menor=[]
    numero=0


    for i in range(0,cantidad):
      if alturas[numero] >= media:
        mayor.append(alturas[numero])

      elif alturas[numero] <= media:
        menor.append(alturas[numero])

      numero+=1


    print("Las alturas ingresadas son: ",alturas)
    print("La media de las alturas ingresadas es: ",media)
    print("Los numeros menores al promedio son: ",menor)
    print("Los numeros mayores al promedio son: ",mayor)


  else:
    print("Ingrese un numero positivo entero.")
  continue

    


