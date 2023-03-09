// Importar librería Swing | API para proveer interfaces gráficas
import javax.swing.*;

public class NumericalSystems {
  public static void main(String[] args) {
    // Convertimos de String a tipo primitivo.
    // Recibimos el número entero del usuario.
    String numeroStr = JOptionPane.showInputDialog(null, "Ingrese un número entero");
    int numeroDecimal = 0;

    try {
      // Convertimos el String a int.
      numeroDecimal = Integer.parseInt(numeroStr);
    } catch (NumberFormatException e) {
      // Si el usuario no ingresa un número entero, mostramos un mensaje de error.
      JOptionPane.showMessageDialog(null, "Error: debe ingresar un número entero.");
      // Se vuelve a llamar al método main para que el usuario ingrese un número entero.
      main(args);
      // Se termina la ejecución del programa.
      System.exit(0);
    }

    // Mostramos el número ingresado por consola.
    System.out.println("numeroDecimal = " + numeroDecimal);

    // Convertimos el número decimal a binario, octal y hexadecimal.
    // Concatenamos los resultados en un solo String.
    String mensaje = ("Numero binario de " + numeroDecimal + " = " + Integer.toBinaryString(numeroDecimal) + "\n") +
                     ("Numero octal de " + numeroDecimal + " = " + Integer.toOctalString(numeroDecimal)) + "\n" +
                     ("Numero hexadecimal de " + numeroDecimal + " = " + Integer.toHexString(numeroDecimal));

    // Mostramos el resultado por consola.
    System.out.println(mensaje);
    // Mostramos el resultado en un cuadro de diálogo.
    JOptionPane.showMessageDialog(null, mensaje);
  }
}
