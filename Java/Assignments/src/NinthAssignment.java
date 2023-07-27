// Mediante el teclado pedir dos números enteros positivos o negativos y multiplicarlos,
// pero sin usar el símbolo de multiplicación (*).

// Puede utilizar una sentencia for para realizar la multiplicación y tener en cuenta los
// unarios, donde menos por menos es positivo.

import java.util.Scanner;

public class NinthAssignment {
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    System.out.print("Ingrese el primer número: ");

    int firstNumber = scanner.nextInt();

    System.out.print("Ingrese el segundo número: ");

    int secondNumber = scanner.nextInt();

    scanner.close();

    int result = 0;

    for (int i = 0; i < Math.abs(secondNumber); i++) {
      result += Math.abs(firstNumber);
    }

    if (firstNumber < 0 && secondNumber < 0) {
      System.out.println("El resultado es: " + result);
    } else if (firstNumber < 0 || secondNumber < 0) {
      System.out.println("El resultado es: -" + result);
    } else {
      System.out.println("El resultado es: " + result);
    }

  }
}
