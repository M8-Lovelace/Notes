# un nombre y el número de faltas cometidas.

alumnos = {}

alumno = input('Introduce el nombre del bocaza [0 si vuelve el profe]:')

while alumno != '0':
    if alumno in alumnos:
        alumnos[alumno] = alumnos[alumno] + 1
    else:
        alumnos[alumno] = 1
    alumno = input('Introduce el nombre del bocaza [0 si vuelve el profe]:')

print()
print('LISTADO DE ALUMNOS QUE HAN ABIERTO LA BOCA')

for hablador, veces in alumnos.items():
    print(hablador, '-->', veces)