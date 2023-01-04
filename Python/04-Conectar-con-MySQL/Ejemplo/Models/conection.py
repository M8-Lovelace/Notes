# Importar el conector a mysql
import mysql.connector

# Conectar a la base de datos
def conectar(): 
  database=mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="vehiculos"
  )

  # Definir el cursor
  cursor=database.cursor(buffered=True)

  return (database, cursor)