
// Importanciones
import java.util.Scanner;

// El desafío es un programa que pida dos números y los muestre ordenados de mayor a menor. 
// Podría ser utilizando operador ternario.

public class Assignment4 {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Ingresa el primer número:");
    int num1 = scanner.nextInt();

    System.out.println("Ingresa el segundo número:");
    int num2 = scanner.nextInt();

    scanner.close();

    int larger = num1 > num2 ? num1 : num2;
    int minor = num1 < num2 ? num1 : num2;

    System.out.println("Mayor: " + larger);
    System.out.println("Menor: " + minor);
  }

}
