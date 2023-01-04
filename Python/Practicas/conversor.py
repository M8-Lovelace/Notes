menu= """
Bienvenidos al conversor de monedas 💵
1- Pesos colombianos
2- Pesos argentinos
3- Pesos mexicanos

Elige una opción:  """

def conversion (tipo_pesos, valor_dolar):
     pesos = int(input ("Cuantos pesos "+ tipo_pesos + " tienes: "))
     pesos= float(pesos)
     dolares =pesos/valor_dolar
     dolares = round (dolares, 2)
     dolares = str(dolares)
     print("Tienes $"+ dolares +" dólares")

opcion= int(input(menu))

if opcion == 1:
      conversion ("colombianos", 3875)
elif opcion == 2:
      conversion ("argentinos",65 )
elif opcion == 3:
     conversion("mexicanos", 25)
else:
     print("Ingresa una opcion correcta")
