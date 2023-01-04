# Escribir un programa que guarde en una variable el diccionario {'Euro':'€', 'Dollar':'$',
# 'Yen':'¥'}, pregunte al usuario por una divisa y muestre su símbolo o un mensaje de aviso
# si la divisa no está en el diccionario.

from __future__ import division

divisas={'euro':'€', 'dollar':'$',
'yen':'¥'}

divisa=input("Ingrese un divisa: ")
valor = divisas.get(divisa)

for valor in divisas.values():
    valor = divisas.get(divisa)
    print(valor)
    break
if valor == None:
    print("La divisa no está en el diccionario")