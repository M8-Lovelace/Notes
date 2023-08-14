// Escribir un programa que imprima una X construida a base de la letra X
// en las diagonales de la matriz y utilizar el carácter guion bajo como
// relleno. El tamaño de la x se basa en una variable n que indicará el 
// tamaño de la letra para imprimir en una matriz de n x n.

// El carácter "X" en mayúscula y el guion bajo "_" para los espacios.

// Por ejemplo para n=5 se obtiene:

// X___X
// _X_X_
// __X__
// _X_X_
// X___X
// Por ejemplo para n=6 se obtiene:

// X____X
// _X__X_
// __XX__
// __XX__
// _X__X_
// X____X
// Si n es igual a cero imprimir "ERROR" y finalizar la ejecución del 
// programa.

import java.util.Scanner;

public class Assignment18 {
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    System.out.println("Introduce el tamaño de la X: ");

    int n = scanner.nextInt();

    scanner.close();

    if (n == 0) {
      System.out.println("ERROR");
      System.exit(0);
    }

    int[][] matriz = new int[n][n];

    // Rellenamos la matriz con 0 y 1 en las diagonales
    for (int i = 0; i < matriz.length; i++) {
      for (int j = 0; j < matriz.length; j++) {

        // Si i es igual a j o i + j es igual a la longitud de la matriz - 1
        // entonces rellenamos con 1
        if (i == j || i + j == matriz.length - 1) {
          matriz[i][j] = 1;
        } else {
          matriz[i][j] = 0;
        }
      }
    }

    // Imprimimos la matriz con X y _ en las diagonales
    for (int i = 0; i < matriz.length; i++) {
      for (int j = 0; j < matriz.length; j++) {
        if (matriz[i][j] == 1) {
          System.out.print("X");
        } else {
          System.out.print("_");
        }
      }
      System.out.println();
    }

  }
}
