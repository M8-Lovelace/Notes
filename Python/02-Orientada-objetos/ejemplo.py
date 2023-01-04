
class Animal:
    def __init__(self, peso, color, dueno):
        self.peso = peso
        self.color = color
        self.dueno = dueno

    def respirar(self):
        print("Estoy respirando")

    def comer(self):
        print("Estoy comiendo")

class Gato(Animal):
    def __init__(self, peso, color, dueno, raza):
        super().__init__(peso, color, dueno)
        self.raza = raza

    def moverColita(self):
        print("Moviendo la colita del gato con raza" + self.raza)

miGato = Gato(20, "rojo", "Laura", "test")
miGato.moverColita()