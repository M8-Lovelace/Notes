# Escribir un programa que cree un diccionario simulando una cesta de la compra. El
# programa debe preguntar el artículo y su precio y añadir el par al diccionario, hasta que
# el usuario decida terminar. Después se debe mostrar por pantalla la lista de la compra
# y el coste total, con el siguiente formato

canasta={
}

continuar=True
while continuar:
    producto=input("Ingrese un producto: ").title()
    precio=float(input("Ingrese el precio de "+ producto+": "))
    canasta[producto]=precio
    continuar=input("Quiere ingresar otro articulo (si/no)? ") =="si"

costo=0
print("La lista de compra: ")
for producto,precio in canasta.items():
    print(producto, "\t", precio)
    costo+=precio

print("Coste total: ","\t",costo)

