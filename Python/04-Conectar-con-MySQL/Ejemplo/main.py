import Models.vehiculoModel as model

vehiculo=model.Vehiculo("Mazda","CX-30",33000)

guardar=vehiculo.guardar()
print(guardar)

resul=vehiculo.eliminar(5)
print(resul)

lista=vehiculo.listar()
print(lista)