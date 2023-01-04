"""
  Creación de la clase llamada Cuenta
  Atributos:
  Titular: String 
  Cantidad: Number 
    1. En el constructor, si la cantidad es negativa, no se hace nada
    2. Al retirar, si el valor es negativo la cantidad de la cuenta pasa a ser 0 
"""

# Creación de la clase cuenta
class Cuenta:
  # Constructor
  # Parámetros, cantidad es opcional
  def __init__(self, titular, cantidad=0):
    print('Creación del objeto terminada con éxito')
    self.titular = titular
    self.cantidad = cantidad

  # Métodos de la clase
  # Método que ingresa dinero a la cuenta
  def ingresar(self, cantidad):
    if cantidad < 0:
      print('Error, por favor ingrese un número positivo')
    else:
      self.cantidad += cantidad
      print(f'Se ha ingresado ${cantidad}\nSu saldo actual es de ${self.cantidad}')

  # Método que retira dinero de la cuenta
  def retirar(self, cantidad):
    self.cantidad -= cantidad
    if self.cantidad < 0:
      self.cantidad = 0
      print(f"Su cuenta tiene un salgo negativo, asi que su saldo de cuenta está en 0")
    else:
      print(f'Se ha retirado ${cantidad}\nSu saldo actual es de ${self.cantidad}')

# Instancia de la clase Cuenta
soyUnaInstancia = Cuenta("Laura Susano", 100)
soyUnaInstancia.ingresar(10)
soyUnaInstancia.retirar(20)