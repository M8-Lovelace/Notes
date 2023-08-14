// Para la tarea se requiere un menú para administrar a los productos con las opciones:
// actualizar, eliminar, crear, listar y salir.

// Para la clase con el método main vamos a contar con un menú para poder seleccionar el
// tipo de operación, puede ser con la clase Scanner indicando una lista con las opciones,
// cada opción asociada a un numero.

// O bien! otra forma mucho mejor seria usando la clase JOptionPane para un menú con 
// interfaces graficas

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

import java.util.HashMap;
import java.util.Map;

import javax.swing.JOptionPane;

public class Assignment10 {

  public static void main(String[] args) {
    // Mostrar el menú
    Map<String, Integer> options = new HashMap<>();
    options.put("Actualizar", 1);
    options.put("Eliminar", 2);
    options.put("Agregar", 3);
    options.put("Listar", 4);
    options.put("Salir", 5);

    // Convertir las opciones a un arreglo para mostrarlas en el JOptionPane
    Object[] opArray = options.keySet().toArray();
    int optionIndex;

    // Mostrar el menú hasta que el usuario seleccione la opción de salir
    do {
      // Mostrar el menú
      Object selectedOption = JOptionPane.showInputDialog(null,
          "Seleccione una Opción",
          "Mantenedor de Productos",
          JOptionPane.INFORMATION_MESSAGE, null, opArray, opArray[0]);

      // Si el usuario cancela la operación, selectedOption será null
      if (selectedOption == null) {
        JOptionPane.showMessageDialog(null, "Debe seleccionar una operación");
        optionIndex = 0;
      } else {
        // Obtener el índice de la opción seleccionada
        optionIndex = options.get(selectedOption.toString());

        // Ejecutar la opción seleccionada
        switch (optionIndex) {
          case 1:
            updateProduct();
            break;
          case 2:
            deleteProduct();
            break;
          case 3:
            addProduct();
            break;
          case 4:
            listProducts();
            break;
          case 5:
            JOptionPane.showMessageDialog(null, "Has salido con éxito!");
            break;
          default:
            JOptionPane.showMessageDialog(null, "Opción inválida");
            optionIndex = 0;
            break;
        }
      }
    } while (optionIndex != 5);
  }

  // Método para agregar un producto
  private static void updateProduct() {
    JOptionPane.showMessageDialog(null, "Producto actualizado correctamente");
  }

  // Método para eliminar un producto
  private static void deleteProduct() {
    JOptionPane.showMessageDialog(null, "Producto eliminado correctamente");
  }

  // Método para agregar un producto
  private static void addProduct() {
    JOptionPane.showMessageDialog(null, "Producto agregado correctamente");
  }

  // Método para listar los productos
  private static void listProducts() {
    JOptionPane.showMessageDialog(null, "Listando productos...");
  }
}
