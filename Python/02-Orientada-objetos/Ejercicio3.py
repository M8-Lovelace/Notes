
##Libraries
import string
import random

#Variables
myPasswords=[]
myStatus= []

    
# Creación de la clase password
class Password:
    
    def __init__(self, longitud=8):
        self.longitud = longitud
        self.contrasena = ""
        
    # Genera una contraseña al azar con la longitud que este definida
    def generarPassword(self):
        password= ''.join(random.choice(string.ascii_letters + string.digits) for x in range(self.longitud))
        self.contrasena= password
        return self.contrasena
        
    # Comprueba la fortaleza de la contraseña
    # return True or False
    def esFuerte(self):
        numeros=0
        minusculas=0
        mayusculas=0
        i=0
        
        while i < len(self.contrasena):
            letra = self.contrasena[i]
            if letra.isupper() == True:
                mayusculas +=1
            elif letra.islower() == True:
                minusculas +=1
            else:
                numeros += 1
            i += 1
            
        #Si la constraseña tiene mas de 5 numeros, mas de 1 minuscula y mas de 2 mayusculas
        if (numeros >= 5 and minusculas > 1 and mayusculas > 2):
            return True
        else:
            return False
        
# //Introducimos el tamaño del array y la longitud del password
try:
    tamanio=int(input("Introduce un tamaño para el array: "))
except:
    tamanio=1

try:
    longitud=int(input("Ingrese la longitud de password: "))
except:
    longitud=8

# 1. Iteramos sobre el tamaño del usuario
# 2. Generamos una instancia "objeto" de la clase Password
# 3. Generamos una contraseña al azar y la almacenamos en el arreglo de contraseñas
# 4. Valida si la contraseña es fuerte o no y se almacena en el arreglo de estatus
# 5. Imprime el arreglo de contraseñas y estatus
for i in range(tamanio):
    newPassword= Password(longitud)
    myPasswords.append(newPassword.generarPassword())   
    myStatus.append(newPassword.esFuerte()) 
    print(f"{myPasswords[i]} = {myStatus[i]}")

