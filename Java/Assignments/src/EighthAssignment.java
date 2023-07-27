// Pedir 20 notas finales de alumnos en una escala de 1 a 7, manejar decimales en 
// las notas (double). Mostrar el promedio de las notas mayores a 5, promedio de 
// notas inferiores a 4 y la cantidad de notas 1, ademas mostrar el promedio total.

// Ayuda: usar un bucle for que itere hasta 20 (notas) y dentro del ciclo pedir las
// notas una a una para realizar los cálculos (contadores, sumas).

// Opcional: si una de las notas ingresadas es 0 debe salirse del ciclo for y mostrar
// un mensaje de error finalizando el programa.

import java.util.Scanner;

public class EighthAssignment {
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    double sumOfSuperiorsTo5 = 0;
    double sumOfSuperiorsTo4 = 0;
    int quantityNotes = 5;
    double sumNotes = 0;
    double averageTotal = 0;

    for (int i = 0; i < quantityNotes; i++) {
      System.out.println("Ingrese la nota " + (i + 1) + ": ");
      double note = scanner.nextDouble();

      if (note == 0) {
        System.out.println("Error: nota inválida.");
        break;
      }

      sumNotes += note;

      if (note > 5) {
        sumOfSuperiorsTo5 += note;
        System.out.println(sumOfSuperiorsTo5);
      } else if (note < 4) {
        sumOfSuperiorsTo4 += note;
        System.out.println(sumOfSuperiorsTo4);
      }

    }

    scanner.close();

    averageTotal = sumNotes / quantityNotes;

    System.out.println("Promedio de notas mayores a 5: " + (sumOfSuperiorsTo5 / quantityNotes));
    System.out.println("Promedio de notas menores a 4: " + (sumOfSuperiorsTo4 / quantityNotes));
    // Aproximación a dos decimales con String.format y %.2f (f de float) para el
    // formato de número decimal.
    System.out.println("Promedio total: " + String.format("%.2f", averageTotal));

  }
}
