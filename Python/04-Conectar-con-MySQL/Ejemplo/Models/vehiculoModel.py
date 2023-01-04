import Models.conection as conexion

conex = conexion.conectar()
database=conex[0]
cursor=conex[1]

class Vehiculo:
  def __init__(self, marca, modelo, precio):
    self.marca = marca
    self.modelo = modelo
    self.precio = precio
    self.id = id
  
  def guardar(self):
    sql="INSERT INTO vehiculos VALUES(NULL,%s,%s,%s)"
    vehiculo = (self.marca,self.modelo,self.precio)
    cursor.execute(sql,vehiculo)
    database.commit()
    return [cursor.rowcount, self]
  
  def eliminar(self,id):
    sql= "DELETE FROM vehiculos WHERE id=%s" %id
    cursor.execute(sql)
    database.commit()
    return cursor.rowcount
  
  def listar(self):
    sql="SELECT * FROM vehiculos"
    cursor.execute(sql)
    return cursor.fetchall()