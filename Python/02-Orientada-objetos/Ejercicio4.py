# Librerías
import random

# Variables
electrodomesticos = []
totalElectrodomesticos = 0
totalTelevisores = 0
totalLavadora = 0
precioFinal=0

class Electrodomestico:
    
    def __init__(self, precioBase=100, color="blanco", consumo="F" , peso=5):
        self.precioBase = precioBase
        self.color = self.comprobarColor(color)
        self.consumo = self.comprobarConsumoEnergetico(consumo)
        self.peso = peso

    def comprobarConsumoEnergetico(self, consumo):
        letras=["A", "B", "C", "D", "E", "F"]
        if consumo in letras:
            return consumo
        else:
            return "F"

    def comprobarColor(self, color):
        colores=["blanco", "negro", "rojo", "azul", "gris"]
        if color in colores:
            return color
        else:
            return "blanco"

    def precioFinal(self):
        consumos = {
            "A":100,
            "B":80,
            "C":60,
            "D":50,
            "E":30,
            "F":10
        }
        valorConsumo= consumos[self.consumo]
        if self.peso > 0 and self.peso <= 19 :
            valorPeso = 10
        elif self.peso >= 20 and self.peso <=49:
            valorPeso = 50
        elif self.peso >= 50 and self.peso <=79:
            valorPeso = 80
        else:
            valorPeso = 100
        return valorConsumo + valorPeso

class Lavadora(Electrodomestico):
    def __init__(self, precioBase=100, color="blanco", consumo="F" , peso=5, carga=5):
        super().__init__(precioBase, color, consumo, peso)
        self.carga=carga

    def precioFinal(self):
        precio = super().precioFinal()
        if self.carga > 30:
            precio += 50
        return precio

class Television(Electrodomestico):
    def __init__(self, precioBase=100, color="blanco", consumo="F" , peso=5, resolucion=20, sintonizador=False):
        super().__init__(precioBase, color, consumo, peso)
        self.resolucion=resolucion
        self.sintonizador=sintonizador

    def precioFinal(self):
        precio = super().precioFinal()
        if self.resolucion > 40:
            precio += precio * 0.3

        if self.sintonizador:
            precio += 50

        return precio

# Valores aleatorios para la creación de los 10 objetos "instancias"
ranClass = 0
for i in range(0,10):
    ranClass = random.randint(0,2)
    ranPrecio = random.randint(0, 1000)
    ranColor = random.choice(["blanco", "negro", "rojo", "azul", "gris"])
    ranConsumo = random.choice(["A", "B", "C", "D", "E", "F"])
    ranPeso = random.randint(0, 100)
    ranCarga = random.randint(0, 100)
    ranResolucion = random.randint(0, 100)
    ranSintonizador = random.choice([True, False])

    if ranClass == 0:
        nuevoObjeto = Lavadora(ranPrecio, ranColor, ranConsumo, ranPeso, ranCarga)
        electrodomesticos.append(nuevoObjeto)
    elif ranClass == 1:
        nuevoObjeto = Television(ranPrecio, ranColor, ranConsumo, ranPeso, ranResolucion, ranSintonizador)
        electrodomesticos.append(nuevoObjeto)
    else:
        nuevoObjeto = Electrodomestico(ranPrecio, ranColor, ranConsumo, ranPeso)
        electrodomesticos.append(nuevoObjeto)


# Leer los objetos dentro del arreglo y hallar su valor unitario y total
for i in electrodomesticos:
    # Con esta sentencia estamos obteniendo el nombre de la clase
    nombreObjeto = type(i).__name__
    if nombreObjeto == "Lavadora":
        # print("Lavadora: ", i.precioFinal())
        totalLavadora += i.precioFinal()
        precioFinal += i.precioFinal()
    elif nombreObjeto == "Television":
        # print("Television: ", i.precioFinal())
        totalTelevisores += i.precioFinal()
        precioFinal += i.precioFinal()
    else:
        # print("Electrodoméstico: ", i.precioFinal())
        totalElectrodomesticos += i.precioFinal()
        precioFinal += i.precioFinal()

# Se muestra en pantalla los totales obtenidos teniendo en cuenta las validaciones del problema
print("Total Electrodomesticos: ", totalElectrodomesticos)
print("Total Televisores: ", totalTelevisores)
print("Total Lavadoras: ", totalLavadora)
print("Precio Final: ", precioFinal)