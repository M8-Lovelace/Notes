# Vamos a almacenar las materias de un grupo (por ejemplo Matemáticas, Física, Química,
# Historia y español) en un diccionario y a la vez en una lista, preguntaremos al usuario la
# nota que ha sacado en cada una de las materias. Recibiremos materias hasta que el
# valor para materia sea “final”.
# Al final nuestra lista podría verse así:
# materias=[
# {"matematicas":5.5},
# {"fisica":7.8},
# {"quimica":9.5},
# ]
# Sobre la lista final
#  Elimine de la lista las asignaturas aprobadas.
#  mostrar por pantalla las asignaturas que el usuario tiene que repetir.


notas=[]
reprovadas=[]

continuar=True
while continuar:
    materia=input("Ingrese una materia: ").title()
    nota=float(input("Ingrese la nota de "+ materia+": "))
    notas.append({materia:nota})
    continuar=input("Quiere ingresar otra materia (si/no)? ") =="si"

print("Las notas son: ", notas)

for l in notas:
    for k,j in l.items():
            if j<=6.0:
                reprovadas.append({k:j})
            else:
                continue
        

print("Las notas reprovadas son: ",reprovadas)