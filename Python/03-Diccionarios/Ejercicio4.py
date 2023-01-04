# Escribir un programa que guarde en un diccionario los precios de las frutas de la tabla,
# pregunte al usuario por una fruta, un número de kilos y muestre por pantalla el precio
# de ese número de kilos de fruta. Si la fruta no está en el diccionario debe mostrar un
# mensaje informando de ello

frutas={
    "platano":1.35,
    "manzana":0.80,
    "pera":0.85,
    "naranja":0.70
}

fruta=input("Ingrese una fruta: ")


if fruta in frutas:
    kg=float(input("Ingrese los kilos: "))
    print(kg,"kilos de",fruta,"valen",frutas[fruta]*kg,"$")

else:
    print("Lo siento, la fruta",fruta,"no está disponible.")

