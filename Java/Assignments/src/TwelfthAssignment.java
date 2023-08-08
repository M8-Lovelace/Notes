// Pedir el radio de un círculo y calcular su área. Utilizar la formula:

// area = PI*r² (Constante PI multiplicado por el radio al cuadrado).

import java.util.Scanner;

public class TwelfthAssignment {
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    System.out.print("Ingrese el radio del círculo: ");

    double radius = scanner.nextDouble();

    scanner.close();

    double area = Math.PI * Math.pow(radius, 2);

    System.out.println("El área del círculo es: " + area);
  }
}
