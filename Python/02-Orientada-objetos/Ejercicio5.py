
# Librerias
import random

# Definición y creación de la clase principal
class Persona:
  def __init__(self, nombre, escudo=500, vida=1000):
    self.nombre = nombre
    if escudo < 0 and escudo > 500:
      self.escudo = 100
    else: 
      self.escudo = escudo
    if vida < 0 and vida > 1000:
      self.vida = 1000 + self.escudo
    else:
      self.vida = vida + self.escudo
    self.ataque = ""
    self.valor = 0

  # Método de atacar
  def hallarHabilidad(self):
    ataques = { "puño": 100, "piedra": 200, "pistola": 300, "escopeta": 400, "rifle": 500 }
    randomNumber = random.randint(0, len(ataques) - 1)
    self.ataque, self.valor = list(ataques.items())[randomNumber]
    
  # Método de restar vida según el ataque
  def restarVida(self, ataque, valor):
    print(f"{self.nombre} fué atacado con {ataque} - ({valor})")
    self.vida -= valor 
    if self.vida <= 0:
      self.vida = 0
    print(f"{self.nombre} tiene {self.vida} de vida")

# Clase Super Héroe heredada de Persona
class Superheroe(Persona):
    def __init__(self, nombre, escudo, vida):
        super().__init__(nombre, escudo, vida)

# Clase Villano heredada de Persona
class Villano(Persona):
    def __init__(self, nombre, escudo, vida):
        super().__init__(nombre, escudo, vida)


# Función que iniciar la batalla hasta que uno de los dos personajes muera
def iniciarBatalla():
  # Se reciben los nombres de los personajes y se convierte en mayúsculas las primeras letras
  nombreHeroe = input("Ingrese el nombre del superhéroe: ").strip().lower()
  nombreVillano = input("Ingrese el nombre del villano: ").strip().lower()
  nombreHeroe = nombreHeroe[0].upper() + nombreHeroe[1:]
  nombreVillano = nombreVillano[0].upper() + nombreVillano[1:]

  # Se crean los objetos de las clases
  heroe = Superheroe(nombreHeroe, 100, 1000) 
  villano = Villano(nombreVillano, 100, 1000)
  turno = random.randint(0,1)
  muerto = True

  print(f"{nombreHeroe} ({heroe.vida}) HP vs {nombreVillano} ({villano.vida}) HP")

  while muerto == True:
    # Validacion para ver si el turno comienza en par o impar
    if turno & 1 == 0:
      heroe.hallarHabilidad()
      villano.restarVida(heroe.ataque, heroe.valor)
      if villano.vida <= 0:
        muerto = False
        print(f"{nombreVillano} ha muerto")
    else:
      villano.hallarHabilidad()
      heroe.restarVida(villano.ataque, villano.valor)
      if heroe.vida <= 0:
        muerto = False
        print(f"{nombreHeroe} ha muerto")
    turno += 1

iniciarBatalla()