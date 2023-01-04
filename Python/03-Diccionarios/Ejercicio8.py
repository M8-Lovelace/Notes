
lista = [1,2,3,4,5,6,7,8,9]

while True:
    print("1. Añadir al final")
    print("2. Añadir X")
    print("3. Tamaño")
    print("4. Eliminar final")
    print("5. Eliminar x")
    print("6. Contar busqueda")
    print("7. Mostrar")
    print("8. Salir")
    opcion = int(input("Dime opción: "))
    if opcion == 1:
        cadena = int(input("Introduce el numero a añadir: "))
        lista.append(cadena)
        print(lista)
    elif opcion == 2:
        numero = int(input("Introduce el numero a añadir: "))
        posicion = int(input("Introduce la posicion a partir de 1: "))
        lista[posicion] = numero
        print(lista)
    elif opcion == 3:
        print("Hay ",len(lista)," numeros en la lista")
    elif opcion == 4:
        print("El numero eliminado fue: ",lista[len(lista)-1])
        lista.pop()
        print(lista)
    elif opcion == 5:
        posicione = int(input("Introduce la posicion a eliminar a partir de 1: "))
        lista.pop(posicione)
        print(lista)
    elif opcion == 6:
        numeroc = int(input("Introduce el numero a contar: "))
        print("El numero ", numeroc, " se repite ",lista.count(numeroc), " veces")
    elif opcion == 7:
        print("Los elementos de la lista son: \n ",lista)
    elif opcion == 8:
        print("Fin del menu")
        break
    else:
        print("Introduce una posicion valida.")
