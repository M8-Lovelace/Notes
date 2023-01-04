# Login
# Creación de la clase llamada Login
#   Atributos:
#   Usuario: String 
#   Contraseña: Number

# Creación de la clase Login
class Login:
  # Constructor
  # Parametros identificacion,contraseña
  def __init__(self,id,contrasena):
    self.id = id
    self.contrasena = contrasena
    
  # Métodos de la clase
  def ingresar(self,id,contrasena):
    if self.id == id and self.contrasena == contrasena:
      print("Bienvenido")
    else:
      print("Usuario o contraseña incorrecta")

# Instancia de la clase Login
soyUnaInstancia = Login("admin",1234)
soyUnaInstancia.ingresar("admin",1234)