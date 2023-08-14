// Crear una clase con el método main donde el desafío es buscar el número menor
// de mínimo 10 valores enteros, usando la clase Scanner ingresar la cantidad de 
// números a comparar, luego utilizando una sentencia for iterar el numero de veces
// (ingresado) para pedir el numero entero, entonces se requiere:

// - Calcular el menor número e imprimir el valor.

// - Si el menor número es menor que 10, imprimir "El número menor es menor que 10!".
// si no, imprimir " el numero menor es igual o mayor que 10!".

import java.util.Scanner;

public class Assignment7 {
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    System.out.println("Ingrese la cantidad de números a comparar: ");

    int quantity = scanner.nextInt();

    int smallNumber = 0;

    for (int i = 0; i < quantity; i++) {
      System.out.println("Ingrese el número " + (i + 1) + ": ");
      int number = scanner.nextInt();

      if (i == 0) {
        smallNumber = number;
      } else {
        if (number < smallNumber) {
          smallNumber = number;
        }
      }
    }

    scanner.close();

    System.out.println("El número menor es: " + smallNumber);

    if (smallNumber < 10) {
      System.out.println("El número menor es menor que 10!");
    } else {
      System.out.println("El número menor es igual o mayor que 10!");
    }
  }
}