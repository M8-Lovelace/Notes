# Crea un array de números y otro de String de 10 posiciones donde insertaremos notas entre 0 y 10 (debemos controlar que inserte una nota valida), pudiendo ser decimal la nota en el array de  números, en el de Strings se insertaran los nombres de los alumnos.
# Después, crearemos un array de String donde insertaremos el resultado de la nota con palabras.
# Si la nota esta entre 0 y 4,99 , será un suspenso
# Si esta entre 5 y 6,99 , será un bien.
# Si esta entre 7 y 8,99 será un notable.
# Si esta entre 9 y 10 será un sobresaliente.
# Muestra por pantalla, el alumno su nota y su resultado en palabras. Crea los métodos que creas 
# conveniente


notas=[]
nombres=[]
palabras=[]	


for i in range(1,11):
  nombre=input("Ingrese un nombre: ")
  nota=float(input("Ingrese una nota entre 0 y 10: "))
  if nota <= 10 and nota >= 0:
    nombres.append(nombre)
    notas.append(nota)
    if nota >= 0 and nota <= 4.99:
      palabras.append("es un suspenso")
    elif nota >=5.0 and nota <=6.99:
      palabras.append("es un Bien.")
    elif nota >=7.0 and nota <=8.99:
      palabras.append("es un Notable.")
    elif nota >=9.0 and nota <=10:
      palabras.append ("es un Sobresaliente.")
  else:
    print ("Ingrese una nota valida")

numero=0

for i in range(1,11):
  print (nombres[numero],"obtuvo", notas[numero] , palabras[numero])
  numero+=1
