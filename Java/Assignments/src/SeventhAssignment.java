// Crear una clase con el método main donde el desafío es buscar el número menor
// de mínimo 10 valores enteros, usando la clase Scanner ingresar la cantidad de 
// números a comparar, luego utilizando una sentencia for iterar el numero de veces
// (ingresado) para pedir el numero entero, entonces se requiere:

// - Calcular el menor número e imprimir el valor.

// - Si el menor número es menor que 10, imprimir "El número menor es menor que 10!".
// si no, imprimir " el numero menor es igual o mayor que 10!".

import java.util.Scanner;

public class SeventhAssignment {
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    System.out.println("Ingrese la cantidad de números a comparar: ");

    int cantidad = scanner.nextInt();

    int numeroMenor = 0;

    for (int i = 0; i < cantidad; i++) {
      System.out.println("Ingrese el número " + (i + 1) + ": ");
      int numero = scanner.nextInt();

      if (i == 0) {
        numeroMenor = numero;
      } else {
        if (numero < numeroMenor) {
          numeroMenor = numero;
        }
      }
    }

    scanner.close();

    System.out.println("El número menor es: " + numeroMenor);

    if (numeroMenor < 10) {
      System.out.println("El número menor es menor que 10!");
    } else {
      System.out.println("El número menor es igual o mayor que 10!");
    }
  }
}