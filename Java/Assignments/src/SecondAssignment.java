// Importanciones
import java.util.InputMismatchException;
import java.util.Scanner;

// Crear un programa que reciba un nombre de factura, con dos productos.
// El programa debe retornar el iva del 19% sobre el valor total de los productos
public class SecondAssignment {
  public static void main (String[] args){
    // Instanciar Scanner
    Scanner scanner = new Scanner(System.in);

    // Variables
    String invoiceName = "";
    double productOne = 0;
    double productTwo = 0;

    try {
      // Ingreso de datos
      System.out.println("Ingrese el nombre de la factura: ");
      invoiceName = scanner.nextLine();
      System.out.println("Ingrese el precio del primer producto: ");
      productOne = scanner.nextDouble();
      System.out.println("Ingrese el precio del segundo producto: ");
      productTwo = scanner.nextDouble();

    } catch (InputMismatchException e){
      // Error
      System.out.println("Error en los datos ingresados");
      // Reinicio
      main(args);
      // Salida
      System.exit(0);

    } finally {
      // Aumentar el 19% al precio total de los dos productos
      long total = Math.round((productOne + productTwo) * 1.19);
      // Mostramos el resultado en la consola
      System.out.println("La factura producto de " + invoiceName + " " +
                         "\nTiene un total bruto de " + Math.round((productOne + productTwo)) +
                         ",\nCon un impuesto de " + Math.round((total - (productOne + productTwo))) +
                         "\nY el monto después de impuesto es de " + total );
    }
  }
}
