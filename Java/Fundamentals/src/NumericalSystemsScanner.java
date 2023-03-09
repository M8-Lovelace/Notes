// Importamos la clase Scanner de Java, para entradas de datos

import java.util.InputMismatchException;
import java.util.Scanner;

public class NumericalSystemsScanner {
  public static void main(String[] args) {
    // Scanner -> es la clase que nos permite obtener la entrada de datos primitivos.
    // scanner -> es el nombre de la variable a la que le asignamos el objeto.
    // new  -> palabra reservada que instancia un objeto de la clase Scanner.
    // System.in -> parámetro que indica de donde proceden los datos, en este caso del teclado.
    Scanner scanner = new Scanner(System.in);

    // Pedimos el número por consola.
    System.out.println("Ingrese un número entero: ");
    int numeroDecimal = 0;
    try {
      // Si fueran enteros lo que queremos ingresar se usaría nextInt, para decimales,
      // nextDouble, etc. next es un método del objeto entrada.
      // nextInt() -> método que lee un número entero.
      numeroDecimal = scanner.nextInt();
    }
    // Si el usuario ingresa un valor que no es un número entero, se captura la excepción específica.
    // Se puede utilizar la palabra Exception en lugar de InputMismatchException como una excepción general.
    catch (InputMismatchException e) {
      System.out.println("Error: debe ingresar un número entero.");
      // Se vuelve a llamar al método main para que el usuario ingrese un número entero.
      main(args);
      // Se termina la ejecución del programa.
      System.exit(0);
    }

    // Mostramos el número ingresado por consola.
    System.out.println("numeroDecimal = " + numeroDecimal);

    // Convertimos el número decimal a binario, octal y hexadecimal.
    // Integer.toBinaryString -> método que convierte un número entero a binario.
    String resultadoBinario = "Numero binario de " + numeroDecimal + " = " + Integer.toBinaryString(numeroDecimal);
    // Integer.toOctalString -> método que convierte un número entero a octal.
    String resultadoOctal = "Numero octal de " + numeroDecimal + " = " + Integer.toOctalString(numeroDecimal);
    // Integer.toHexString -> método que convierte un número entero a hexadecimal.
    String resultadoHexadecimal = "Numero hexadecimal de " + numeroDecimal + " = " + Integer.toHexString(numeroDecimal);

    // Concatenamos los resultados.
    String mensaje = resultadoBinario;
    mensaje += "\n" + resultadoOctal;
    mensaje += "\n" + resultadoHexadecimal;

    // Mostramos el resultado por consola.
    System.out.println(mensaje);
  }
}
