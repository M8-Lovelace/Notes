
# Haz una clase llamada Persona 
import random


class Persona:
    
    def __init__(self,nombre="",edad=0,sexo="F",peso=0,altura=0):
        self.nombre=nombre
        self.edad=edad
        self.CC= self.generaCC()
        self.sexo=self.comprobarSexo(sexo)
        self.peso=peso
        self.altura=altura
        
    def calcularIMC(self):
        if self.peso!=0 and self.altura!=0:
            if (self.peso/(self.altura**2)) < 20:
                print(-1 , "---> Por debajo de su peso ideal")
            elif (self.peso/(self.altura**2)) >= 20 and (self.peso/(self.altura**2)) < 25:
                print(0, "---> Está en su peso ideal")
            elif (self.peso/(self.altura**2)) >= 25:
                print(1, "---> Tiene sobrepeso")
        
    def esMayorDeEdad(self):
        if self.edad >= 18:
            print("Es mayor de edad: ", True)
        else:
            print("Es mayor de edad: ",False)
    
    def toString(self):
        print(f"Nombre: {self.nombre}, edad: {self.edad} anios, CC: {self.CC}, sexo: {self.sexo}, peso: {self.peso} kg y altura: {self.altura} m.")
    
    def generaCC(self):
        self.CC= random.randint(00000000,99999999)
        return self.CC
    
    def comprobarSexo(self, sexo):
        letras=["F", "M", "f","m"]
        if sexo in letras:
            return sexo
        else:
            return "F"

print("Ingrese su nombre: ")
nombre=input()
print("Ingrese su edad: ")
edad=int(input())
print("Ingrese su sexo F o M: ")
sexo=input()
print("Ingrese su peso en kg: ")
kg=int(input())
print("Ingrese su altura en metros: ")
alt=float(input())


persona1= Persona(nombre, edad, sexo, kg, alt)
persona1.calcularIMC()
persona1.esMayorDeEdad()
persona1.toString()
persona2= Persona(nombre, edad, sexo)
persona2.calcularIMC()
persona2.esMayorDeEdad()
persona2.toString()
persona3= Persona()
persona3.calcularIMC()
persona3.esMayorDeEdad()
persona3.toString()


