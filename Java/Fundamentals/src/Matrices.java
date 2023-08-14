public class Matrices {
  public static void main(String[] args) {
    int[][] numeros = new int[2][4];

    numeros[0][0] = 1;
    numeros[0][1] = 2;
    numeros[0][2] = 3;
    numeros[0][3] = 4;

    numeros[1][0] = 11;
    numeros[1][1] = 12;
    numeros[1][2] = 13;
    numeros[1][3] = 14;

    System.out.println("número de filas: " + numeros.length); // 2
    System.out.println("número de columnas: " + numeros[0].length); // 4

    // Matriz: 2 filas x 4 columnas
    // 1 2 3 4
    // 11 12 13 14

    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ------------------------ MATRICES STRINGS --------------------------//

    String[][] nombres = new String[3][2];
    nombres[0][0] = "Pepe";
    nombres[0][1] = "Pepa";
    nombres[1][0] = "Josefa";
    nombres[1][1] = "Paco";
    nombres[2][0] = "Lucas";
    nombres[2][1] = "Pancha";

    System.out.println(" Iterando con for: ");
    for (int i = 0; i < nombres.length; i++) {
      for (int j = 0; j < nombres[i].length; j++) {
        System.out.print(nombres[i][j] + "\t");
      }
      System.out.println();
    }

    System.out.println(" Iterando con foreach: ");
    for (String[] fila : nombres) {
      for (String nombre : fila) {
        System.out.print(nombre + "\t");
      }
      System.out.println();
    }

    // Matriz: 3 filas x 2 columnas
    // Pepe Pepa
    // Josefa Paco
    // Lucas Pancha

    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ------------------------ MATRICES COLUMNAS -------------------------//

    int[][] matriz = new int[3][];

    matriz[0] = new int[2];
    matriz[1] = new int[3];
    matriz[2] = new int[4];

    System.out.println("matriz length: " + matriz.length); // 3
    System.out.println("fila 0 length: " + matriz[0].length); // 2
    System.out.println("fila 1 length: " + matriz[1].length); // 3
    System.out.println("fila 2 length: " + matriz[2].length); // 4

    // Modificar valores de la matriz con un for anidado (i * j)
    for (int i = 0; i < matriz.length; i++) {
      for (int j = 0; j < matriz[i].length; j++) {
        matriz[i][j] = i * j;
      }
    }

    // Imprimir matriz con un for anidado
    for (int i = 0; i < matriz.length; i++) {
      for (int j = 0; j < matriz[i].length; j++) {
        System.out.print(matriz[i][j] + "\t");
      }
      System.out.println();
    }

    // Matriz
    // 0 0
    // 0 1 2
    // 0 2 4 6

    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ------------------- BUSCAR ELEMENTO DE UN MATRIZ -------------------//

    int[][] matrizDeEnteros = {
        { 35, 90, 3, 1978 },
        { 15, 2020, 10, 5 },
        { 677, 127, 32767, 1999 }
    };

    int elementoBuscar = 15;
    boolean encontrado = false;
    int i;
    int j = 0;

    // Buscar elemento en la matriz con un for anidado y break
    buscar: for (i = 0; i < matrizDeEnteros.length; i++) {
      for (j = 0; j < matrizDeEnteros[i].length; j++) {
        if (matrizDeEnteros[i][j] == elementoBuscar) {
          encontrado = true;
          // Romper el bucle anidado con la etiqueta buscar
          break buscar;
        }
      }
    }

    if (encontrado) {
      // Encontrado 1999 en las coordenadas 1,0
      System.out.println("Encontrado " + elementoBuscar + " en las coordenadas " + i + "," + j);
    } else {
      System.out.println(elementoBuscar + " no se encontró en la matriz!");
    }

    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ------------------------- MATRIZ SIMETRICA -------------------------//
    // Es simétrica si es cuadrada y si es igual a su transpuesta

    boolean simetrica = true;

    int[][] matriz2 = {
        { 1, 2, 3, 4 },
        { 2, 1, 0, 5 },
        { 3, 0, 1, 6 },
        { 4, 5, 6, 7 }
    };

    salir: for (int i2 = 0; i2 < matriz2.length; i2++) {

      for (int j2 = 0; j2 < i2; j2++) {
        if (matriz2[i2][j2] != matriz2[j2][i2]) {
          simetrica = false;
          break salir;
        }
      }
    }

    if (simetrica) {
      System.out.println("La matriz es simétrica");
      // La matriz es simétrica
    } else {
      System.out.println("La matriz no es simétrica");
    }
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ------------------------ MATRIZ TRANSPUESTA ------------------------//

    int[][] matriz3 = {
        { 1, 2, 3, 4 },
        { 5, 6, 7, 8 },
        { 9, 10, 11, 12 },
        { 13, 14, 15, 16 }
    };

    System.out.println("Matriz original");

    for (int i2 = 0; i2 < matriz3.length; i2++) {
      for (int j2 = 0; j2 < matriz3[i2].length; j2++) {
        System.out.print(matriz3[i2][j2] + "\t");
      }
      System.out.println();
    }

    // Matriz original
    // 1 2 3 4
    // 5 6 7 8
    // 9 10 11 12
    // 13 14 15 16

    int aux;
    for (int i2 = 1; i2 < matriz3.length; i2++) {
      for (int j2 = 0; j2 < i2; j2++) {
        aux = matriz3[i2][j2];
        matriz3[i2][j2] = matriz3[j2][i2];
        matriz3[j2][i2] = aux;
      }
    }

    System.out.println("Matriz transpuesta");

    for (int i2 = 0; i2 < matriz3.length; i2++) {
      for (int j2 = 0; j2 < matriz3[i2].length; j2++) {
        System.out.print(matriz3[i2][j2] + "\t");
      }
      System.out.println();
    }

    // Matriz transpuesta
    // 1 5 9 13
    // 2 6 10 14
    // 3 7 11 15
    // 4 8 12 16

    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ---------------------- SUMAR FILAS COLUMNAS ------------------------//

    int sumaFila, sumaColumna;
    int[][] a = {
        { 1, 2, 3 },
        { 4, 5, 6 },
        { 7, 8, 9 }
    };

    for (int i2 = 0; i2 < a.length; i2++) {
      sumaColumna = 0;
      sumaFila = 0;
      for (int j2 = 0; j2 < a[i2].length; j2++) {
        sumaFila += a[i2][j2];
        sumaColumna += a[j2][i2];
      }
      System.out.println("Total fila " + i2 + ": " + sumaFila); // 6 15 24
      System.out.println("Total columna " + i2 + ": " + sumaColumna); // 12 15 18
    }
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ------------------------ MATRIZ IDENTIDAD --------------------------//

    int[][] matriz4 = new int[5][5];

    for (int i2 = 0; i2 < matriz4.length; i2++) {
      for (int j2 = 0; j2 < matriz4[i2].length; j2++) {
        if (i2 == j2) {
          matriz4[i2][j2] = 1;
        }
      }
    }

    for (int i2 = 0; i2 < matriz4.length; i2++) {
      for (int j2 = 0; j2 < matriz4[i2].length; j2++) {
        System.out.print(matriz4[i2][j2] + "\t");
      }
      System.out.println();
    }

    // Matriz identidad
    // 1 0 0 0 0
    // 0 1 0 0 0
    // 0 0 1 0 0
    // 0 0 0 1 0
    // 0 0 0 0 1

  }
}