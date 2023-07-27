// Para la tarea se requiere un menú para administrar a los productos con las opciones:
// actualizar, eliminar, crear, listar y salir.

// Para la clase con el método main vamos a contar con un menú para poder seleccionar el
// tipo de operación, puede ser con la clase Scanner indicando una lista con las opciones,
// cada opción asociada a un numero.

// O bien! otra forma mucho mejor seria usando la clase JOptionPane para un menú con 
// interfaces graficas de la siguiente forma:

// int opcionIndice = 0;
// ...

// // los Map (o mapas) los veremos mas adelante en el curso en profundidad
// // pero son como un arreglo asociativo, asocia un nombre (o indice) a un valor
// // también se les conoce como diccionarios para almacenar datos en base a un nombre.
// Map<String, Integer> opciones = new HashMap();
// opciones.put("Actualizar", 1);
// opciones.put("Eliminar", 2);
// opciones.put("Agregar", 3);
// opciones.put("Listar", 4);
// opciones.put("Salir", 5);

// Object[] opArreglo = opciones.keySet().toArray();

// Object opcion = JOptionPane.showInputDialog(null,
//                     "Seleccione un Opción", 
//                      "Mantenedor de Productos", 
//                      JOptionPane.INFORMATION_MESSAGE, null, opArreglo, opArreglo[0]);

// if (opcion == null) {
//     JOptionPane.showMessageDialog(null, "Debe seleccionar una operación");
// } else {
//     opcionIndice = opciones.get(opcion.toString());

//    // aca un if o switch para las distintas opciones.
// }

// Según el numero ingresado usar un if o switch para implementar cada una de las 4 operaciones
// y 5 para salir.

// Dentro de cada sentencia o switch imprimir un texto relacionado a la opción, por ejemplo 
// para actualizar:

// JOptionPane.showMessageDialog(null, "Usuario actualizado correctamente");

// o mediante sout en consola:

// System.out.println("Usuario actualizado correctamente");

// Para eliminar el mensaje "Usuario eliminado correctamente" y así sucesivamente dependiendo
// de la opción.

// Usar un do while para iterar hasta que la opción sea salir, cada vez que se selecciona una 
// operación distinta a salir, al finalizar con dicha operación debe volver al menú para continuar
// con otra, al finalizar con la opción salir (5) se debe mostrar el mensaje "Haz salido con exito!"
// y finalizar el programa.

public class TenthAssignment {
  public static void main(String[] args) {

  }
}
