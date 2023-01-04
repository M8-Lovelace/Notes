# Escribir un programa que pregunte al usuario su nombre, edad, dirección y teléfono y
# lo guarde en un diccionario. Después debe mostrar por pantalla el mensaje <nombre>
# tiene <edad> años, vive en <dirección> y su número de teléfono es <teléfono>.

datos={}

nombre=input("Ingrese su nombre: ")
edad=int(input("Ingrese su edad: "))
direccion=input("Ingrese su direccion: ")
telefono=int(input("Ingrese un telefono: "))

datos={"nombre": nombre, "edad":edad,"direccion":direccion,"telefono":telefono}

print(datos["nombre"],"tiene", datos["edad"],"años, vive en",datos["direccion"],"y su telefono es",datos["telefono"])