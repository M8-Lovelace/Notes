// --------------------------------------------------------------------//
// Escribir un programa para una matriz de n x n e imprima en ella una 
// silla (o letra h minúscula) construida a base del numero 1 y utilizar
// el numero 0 como espacio. El tamaño de la silla se basa en una variable n
// que indicará el tamaño de la figura a imprimir en una matriz de n x n.

// Por ejemplo para n=5 se obtiene:

// 10000
// 10000
// 11111
// 10001
// 10001
// Por ejemplo para n=6 se obtiene:

// 100000
// 100000
// 100000
// 111111
// 100001
// 100001
// Por ejemplo para n=10 se obtiene:

// 1000000000
// 1000000000
// 1000000000
// 1000000000
// 1000000000
// 1111111111
// 1000000001
// 1000000001
// 1000000001
// 1000000001
// Si n es igual a cero imprimir "ERROR" y finalizar la ejecución del programa.

import java.util.Scanner;

public class Assignment19 {
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);
    System.out.print("Ingrese el valor de n: ");
    int n = scanner.nextInt();
    scanner.close();
    printChair(n);
  }

  public static void printChair(int n) {
    if (n == 0) {
      System.out.println("ERROR");
      return;
    }

    int[][] matriz = new int[n][n];

    for (int i = 0; i < n; i++) {
      matriz[n / 2][i] = 1;
      matriz[i][0] = 1;

      // matriz[i][n - 1] = 1;
      // for (int j = 0; j < n / 2; j++) {
      // matriz[j][n - 1] = 0;
      // }

      if (i < n / 2) {
        matriz[i][n - 1] = 0;
      } else {
        matriz[i][n - 1] = 1;
      }
    }

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
        System.out.print(matriz[i][j]);
      }
      System.out.println();
    }
  }
}
