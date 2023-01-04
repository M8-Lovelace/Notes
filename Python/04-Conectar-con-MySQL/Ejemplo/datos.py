# Importar el conector a mysql
import mysql.connector

# Conectar a la base de datos
database=mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="vehiculos"
)

# Definir el cursor
cursor=database.cursor(buffered=True)

# Crear una tabla
cursor.execute("""
CREATE TABLE IF NOT EXISTS vehiculos(
  id INT(10) AUTO_INCREMENT NOT NULL,
  marca VARCHAR(20) NOT NULL,
  modelo VARCHAR(20) NOT NULL,
  precio FLOAT(10,2) NOT NULL,
  CONSTRAINT pk_vehiculos PRIMARY KEY (id)
  )
"""
)
# Insertar un solo datos a la tabla
cursor.execute('INSERT INTO vehiculos (marca, modelo, precio) VALUES("Toyota", "4runner","45000")')
database.commit()

# Ingresar varios datos a la tabla
autos=[
  ("Toyota","Rav4",37000),
  ("Nissan","Kiss",22000),
  ("Ferrari","Aventor",230000)
]
cursor.executemany('INSERT INTO vehiculos VALUES (null, %s,%s,%s)',autos)
database.commit()

# Hacer una consulta y mostrarla en una array
cursor.execute('SELECT * FROM vehiculos WHERE marca = "Toyota"')
result=cursor.fetchall()
print(result)

# Imprimir solo el modelo de la tabla vehiculos del resultado de la consulta
for item in result:
  print(item[2])

# Eliminar un dato de la tabla
cursor.execute("DELETE FROM vehiculos WHERE id=2")
database.commit()

# Contar cuando fueron modificados
print(cursor.rowcount, "borrados")

# Actualizar datos de una tabla
cursor.execute("UPDATE vehiculos SET modelo='Frontler' WHERE id=5")
database.commit()
print(cursor.rowcount, "editados")