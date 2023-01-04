# Animales
# Creación de la clase llamada Animal
# peso = int
# color = int
# dueno = string

# Creación de la clase Animal
class Animal:
    def __init__(self, peso, color, dueno):
        self.peso = peso
        self.color = color
        self.dueno = dueno
    # Métodos de la clase
    def respirar(self):
        print("Está respirando")
    def comer(self):
        print("Está comiendo")

class Gato(Animal):
    # Herencia de la clase Animal
    def __init__(self, peso, color, dueno, raza):
        # Atributos adicionales de la subclase
        super().__init__(peso, color, dueno)
        self.raza = raza

    # Métodos de la subclase
    def moverColita(self):
        print("Está moviendo la colita del gato de "+ self.dueno + " con raza " + self.raza)

class Perro(Animal):
    # Herencia de la clase Animal
    def __init__(self, peso, color, dueno, raza):
        # Atributos adicionales de la subclase
        super().__init__(peso, color, dueno)
        self.raza = raza

    # Métodos de la subclase
    def ladrar(self):
        print("Está landrando el perro de color "+ self.color+ " de "+ self.dueno + " con raza " + self.raza)
        
class Pez(Animal):
    # Herencia de la clase Animal
    def __init__(self, peso, color, dueno, raza):
        # Atributos adicionales de la subclase
        super().__init__(peso, color, dueno)
        self.raza = raza

    # Métodos de la subclase
    def nadar(self):
        print("Está nadando el pez de color "+ self.color+ " de "+ self.dueno + " con raza " + self.raza)

# Instancia de la clase Animal
# Instancia de la subclase Gato
miGato = Gato(10, "rojo", "Laura", "Romano")
miGato.moverColita()
miGato.respirar()
print("*************************************************")

# Instancia de la subclase Perro
miPerro = Perro(15, "negro", "Juan Fer", "Pastor Aleman")
miPerro.ladrar()
miPerro .comer()
print("*************************************************")

# Instancia de la subclase Pez
miPez = Pez(18, "blanco", "Edwin", "Dorado")
miPez.nadar()
miPez.respirar()
miPez.comer()