
// Importanciones
import java.util.Scanner;

// Suponiendo un estanque de gasolina (gas) con capacidad 70 litros, se requiere un programa que pida la 
// medida actual en litros y mostrar el resultado de la forma: Insuficiente, Suficiente, Medio...
// La medida o capacidad actual del estanque puede ser en tipo double, para una mejor precisión, pero 
// tambien puede ser del tipo int.
// Si la capacidad actual es 70 litros: imprimir Estanque lleno
// Si está entre 60 y menor a 70: imprimir Estanque casi lleno
// Si está entre 40 y menor a 60: imprimir Estanque  3/4
// Si está entre 35 y menor a 40: imprimir Medio Estanque 
// Si está entre 20 y menor a 35: imprimir Suficiente
// Si está entre 1 y menor a 20: imprimir Insuficiente

public class Assignment5 {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    final int totalCapacity = 70;

    System.out.println("Ingresa la medida actual en litros del estanque de gasolina:");

    double measureCurrent = scanner.nextDouble();

    scanner.close();

    if (measureCurrent == totalCapacity) {
      System.out.println("Estanque lleno");
    } else if (measureCurrent > (0.9 * totalCapacity)) {
      System.out.println("Estanque casi lleno");
    } else if (measureCurrent > (0.75 * totalCapacity)) {
      System.out.println("Estanque 3/4");
    } else if (measureCurrent > (0.5 * totalCapacity)) {
      System.out.println("Medio Estanque");
    } else if (measureCurrent > (0.25 * totalCapacity)) {
      System.out.println("Suficiente");
    } else if (measureCurrent > 0) {
      System.out.println("Insuficiente");
    } else {
      System.out.println("Valor inválido ingresado.");
    }

  }
}
