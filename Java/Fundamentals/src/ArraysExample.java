import java.util.Arrays;
import java.util.Scanner;

public class ArraysExample {
  public static void main(String[] args) {
    // Instanciar un arreglo de 2 posiciones "0,1"
    String[] usernames = new String[2];
    usernames[0] = "laura";
    usernames[1] = "edwin";

    // Cuando ya conocemos la cantidad de elementos y sus valores
    // String[] usernames2 = { "edwin", "laura" };

    // Si apuntamos a un índice que no existe obtenemos un
    // ArrayIndexOutOfBoundsException

    // --------------------------------------------------------------------//
    // -------------------------- ARREGLOS FOR ----------------------------//

    String[] productos = new String[7];
    int total = productos.length;

    productos[0] = "Kingston Pendrive 64GB";
    productos[1] = "Samsung Galaxy";
    productos[2] = "Disco Duro SSD Samsung Externo";
    productos[3] = "Asus Notebook";
    productos[4] = "Macbook Air";
    productos[5] = "Chromecast 4ta generación";
    productos[6] = "Bicicleta Oxford";

    Arrays.sort(productos);

    // Usando for
    for (int i = 0; i < total; i++) {
      System.out.println("para indice " + i + " : " + productos[i]);
    }

    // Usando for each
    for (String prod : productos) {
      System.out.println("prod = " + prod);
    }

    // Usando while
    int i = 0;
    while (i < total) {
      System.out.println("para indice " + i + " : " + productos[i]);
      i++;
    }

    // Usando do while
    int j = 0;
    do {
      System.out.println("para indice " + j + " : " + productos[j]);
      j++;
    } while (j < total);

    int[] numeros = new int[10];

    int totalNumeros = numeros.length;
    for (int k = 0; k < totalNumeros; k++) {
      numeros[k] = k * 3;
    }

    for (int k = 0; k < totalNumeros; k++) {
      System.out.println("numeros = " + numeros[k]);
    }
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ---------------------- ARREGLOS FOR INVERSO ------------------------//

    String[] productos2 = {
        "Kingston Pendrive 64GB",
        "Samsung Galaxy",
        "Disco Duro SSD Samsung Externo",
        "Asus Notebook", "Macbook Air",
        "Chromecast 4ta generación", "Bicicleta Oxford"
    };

    int total2 = productos2.length;

    Arrays.sort(productos2);

    // Usando for
    for (int i2 = 0; i2 < total2; i2++) {
      System.out.println("para indice " + i2 + " : " + productos2[i2]);
    }

    // Usando for each
    for (int i2 = 0; i2 < total2; i2++) {
      System.out.println("para i = " + (total2 - 1 - i2) + " valor: " +
          productos2[total2 - 1 - i2]);
    }

    // Usando for inverso 2
    for (int i2 = total2 - 1; i2 >= 0; i2--) {
      System.out.println("para i = " + i2 + " valor " + productos2[i2]);
    }
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ------------------ ARREGLOS FOR INVERSO MUTABLE --------------------//

    String[] productos3 = { "Kingston Pendrive 64GB", "Samsung Galaxy",
        "Disco Duro SSD Samsung Externo",
        "Asus Notebook", "Macbook Air",
        "Chromecast 4ta generación", "Bicicleta Oxford" };

    int total3 = productos3.length;

    Arrays.sort(productos3);
    arregloInverso(productos3);

    // Convierte un arreglo en una lista y la invierte
    // Collections.reverse(Arrays.asList(productos));

    // Usando for
    for (int i3 = 0; i3 < total3; i3++) {
      System.out.println("para indice " + i3 + " : " + productos3[i3]);
    }
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ---------------- ARREGLOS FOR ORDENAMIENTO BURBUJA -----------------//

    String[] productos4 = { "Kingston Pendrive 64GB", "Samsung Galaxy",
        "Disco Duro SSD Samsung Externo",
        "Asus Notebook", "Macbook Air",
        "Chromecast 4ta generación", "Bicicleta Oxford" };

    int total4 = productos4.length;

    sortBurbuja(productos4);

    // Usando for
    for (int i4 = 0; i4 < total4; i4++) {
      System.out.println("para indice " + i4 + " : " + productos4[i4]);
    }

    Integer[] numeros4 = { 10, Integer.valueOf("7"), 35, -1 };

    sortBurbuja(numeros4);

    for (int i4 = 0; i4 < numeros4.length; i4++) {
      System.out.println("i = " + i4 + " : " + numeros4[i4]);
    }
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ----------------------- ORDEN PRINCIPIO - FINAL --------------------//

    int[] numeros5 = new int[10];
    int[] a = new int[10];

    for (int i5 = 0; i5 < numeros5.length; i5++) {
      numeros5[i5] = i5 + 1;
    }

    int aux = 0;
    for (int i5 = 0; i5 < numeros5.length - i5; i5++) {
      a[aux++] = numeros5[i5];
      a[aux++] = numeros5[numeros5.length - 1 - i5];
    }

    for (int i5 = 0; i5 < a.length; i5++) {
      System.out.println("i = " + i5 + " valor: " + a[i5]);
    }
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // -------------------------- BUSCAR ELEMENTO -------------------------//

    int[] a11 = new int[10];

    Scanner scanner = new Scanner(System.in);

    for (int i6 = 0; i6 < a11.length; i6++) {
      System.out.print("Ingrese un número: ");
      a11[i6] = scanner.nextInt();
    }

    System.out.println("\r\nIngrese un número a buscar:");
    int num = scanner.nextInt();
    int i6 = 0;

    scanner.close();

    for (; i6 < a11.length && a11[i6] != num; i6++) {
    }

    if (i6 == a11.length) {
      System.out.println("Número no encontrado");
    } else if (a11[i6] == num) {
      System.out.println("Encontrado en la posición: " + i6);
    }
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ------------ MOVER ELEMENTOS DESDE INICIO HASTA EL FINAL -----------//

    int[] a7 = new int[10];
    int ultimo;
    Scanner scanner7 = new Scanner(System.in);

    for (int i7 = 0; i7 < a7.length; i7++) {
      System.out.print("Ingrese el número:");
      a7[i7] = scanner.nextInt();
    }

    scanner7.close();

    ultimo = a7[a7.length - 1];
    for (int i7 = a7.length - 2; i7 >= 0; i7--) {
      a7[i7 + 1] = a7[i7];
    }
    a7[0] = ultimo;

    System.out.println("El arreglo:");
    for (int i7 = 0; i7 < a7.length; i7++) {
      System.out.println(a7[i7]);
    }
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ------ AGREGAR ELEMENTO EN UNA POSICIÓN Y MOVER LOS SIGUIENTES -----//

    int[] a8 = new int[10];
    int elemento, posicion;
    Scanner s = new Scanner(System.in);

    for (int i8 = 0; i8 < a8.length - 1; i8++) {
      System.out.print("Ingrese el número:");
      a8[i8] = s.nextInt();
    }
    System.out.println();

    System.out.println("Nuevo elemento:");
    elemento = s.nextInt();

    System.out.println("Posición donde agregar (de 0 a 9)");
    posicion = s.nextInt();

    for (int i8 = a8.length - 2; i8 >= posicion; i8--) {
      a8[i8 + 1] = a8[i8];
    }
    a8[posicion] = elemento;

    System.out.println("El arreglo:");
    for (int i8 = 0; i8 < a8.length; i8++) {
      System.out.println(a8[i8]);
    }
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ----------------- ELIMINAR UN ELEMENTO DE UNA POSICIÓN -------------//

    int[] a9 = new int[10];

    Scanner scanner9 = new Scanner(System.in);

    for (int i9 = 0; i9 < a9.length; i9++) {
      System.out.print("Ingrese un número: ");
      a9[i9] = scanner9.nextInt();
    }
    System.out.println();
    System.out.println("Ingrese una posición a eliminar entre 0 - 9:");
    int posicion9 = scanner9.nextInt();

    for (int i9 = posicion9; i9 < a9.length - 1; i9++) {
      a9[i9] = a9[i9 + 1];
    }

    int[] b = new int[a9.length - 1];
    System.arraycopy(a9, 0, b, 0, b.length);

    a9 = b;
    for (int i9 = 0; i9 < a9.length; i9++) {
      System.out.println(i9 + " => " + a9[i9]);
    }
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ---- AGREGAR UN ELEMENTO DE UNA POSICIÓN Y MOVER LOS SIGUIENTES ----//

    int[] a10 = new int[7];
    int numero, posicion10, ultimo10;

    Scanner scanner10 = new Scanner(System.in);

    for (int i10 = 0; i10 < a10.length; i10++) {
      System.out.print("Ingrese un número: ");
      a10[i10] = scanner10.nextInt();
    }
    System.out.println();

    System.out.println("Ingrese un número a insertar:");
    numero = scanner10.nextInt();

    ultimo10 = a10[a10.length - 1];
    posicion10 = 0;
    while (posicion10 < 6 && numero > a10[posicion10]) {
      posicion10++;
    }

    for (int i10 = a10.length - 2; i10 >= posicion10; i10--) {
      a10[i10 + 1] = a10[i10];
    }

    int[] b10 = new int[a10.length + 1];
    System.arraycopy(a10, 0, b10, 0, a10.length);

    if (numero > ultimo10) {
      b10[b10.length - 1] = numero;
    } else {
      b10[b10.length - 1] = ultimo10;
      b10[posicion10] = numero;
    }
    System.out.println("El nuevo arreglo ordenado:");
    for (int i10 = 0; i10 < b10.length; i10++) {
      System.out.println(i10 + " => " + b10[i10]);
    }
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ----------------------------- EJEMPLOS -----------------------------//

    // -------------------- EJEMPLO ARREGLO NUMERO MAYOR ------------------//

    int[] a111 = new int[5];
    Scanner scanner11 = new Scanner(System.in);

    System.out.println("Ingrese 5 enteros:");
    for (int i11 = 0; i11 < a111.length; i11++) {
      a111[i11] = scanner11.nextInt();
    }

    scanner11.close();

    int max = 0;
    for (int i11 = 1; i11 < a111.length; i11++) {
      max = (a111[max] > a111[i11]) ? max : i11;
    }

    System.out.println("max = " + a111[max]);
    System.out.println(" ");

    // ------------------- EJEMPLO ARREGLO DETECTAR ORDEN -----------------//

    int[] a12 = new int[7];

    Scanner scanner12 = new Scanner(System.in);
    System.out.println("Ingrese 7 números:");
    for (int i12 = 0; i12 < a12.length; i12++) {
      a12[i12] = scanner12.nextInt();
    }

    scanner12.close();
    boolean ascendente = false;
    boolean descendente = false;
    for (int i12 = 0; i12 < a12.length - 1; i12++) {
      if (a12[i12] > a12[i12 + 1]) {
        descendente = true;
      }
      if (a12[i12] < a12[i12 + 1]) {
        ascendente = true;
      }
    }

    if (ascendente == true && descendente == true) {
      System.out.println("Arreglo = desordenado");
    }

    if (ascendente == false && descendente == false) {
      System.out.println("Arreglo = todos son iguales");
    }

    if (ascendente == true && descendente == false) {
      System.out.println("Arreglo = ordenado de forma ascendente");
    }

    if (ascendente == false && descendente == true) {
      System.out.println("Arreglo = ordenado de forma descendente");
    }
    System.out.println(" ");

    // ----------------- EJEMPLO ARREGLO PARE E INPARES -------------------//

    int[] a13, pares, impares;
    int totalPares = 0, totalImpares = 0;
    a13 = new int[10];
    Scanner scanner3 = new Scanner(System.in);

    System.out.println("Ingrese 10 números:");
    for (int i13 = 0; i13 < a13.length; i13++) {
      a13[i13] = scanner3.nextInt();
    }

    scanner3.close();

    for (int i13 = 0; i13 < a13.length; i13++) {

      if (a13[i13] % 2 == 0) {
        totalPares++;
      } else {
        totalImpares++;
      }
    }
    pares = new int[totalPares];
    impares = new int[totalImpares];

    int j13 = 0;
    int k = 0;
    for (int i13 = 0; i13 < a13.length; i13++) {
      if (a13[i13] % 2 == 0) {
        pares[j13++] = a13[i13];
      } else {
        impares[k++] = a13[i13];
      }
    }

    System.out.println("Pares");
    for (int i13 = 0; i13 < pares.length; i13++) {
      System.out.print(pares[i13] + " ");
    }

    System.out.println("\r\nImpares");
    for (int i13 = 0; i13 < impares.length; i13++) {
      System.out.print(impares[i13] + " ");
    }
    System.out.println(" ");

    // ----------------- EJEMPLO ARREGLO NOTAS ALUMNOS -------------------//

    double[] claseMatematicas, claseHistoria, claseLenguaje;
    double sumNotasMatematicas = 0, sumNotasHistoria = 0, sumNotasLenguaje = 0;
    claseMatematicas = new double[7];
    claseHistoria = new double[7];
    claseLenguaje = new double[7];

    Scanner scanner4 = new Scanner(System.in);
    System.out.println("Ingrese 7 notas de estudiantes para matemáticas:");
    for (int i14 = 0; i14 < claseMatematicas.length; i14++) {
      claseMatematicas[i14] = scanner4.nextDouble();
    }

    System.out.println("Ingrese 7 notas de estudiantes para historia:");
    for (int i14 = 0; i14 < claseHistoria.length; i14++) {
      claseHistoria[i14] = scanner4.nextDouble();
    }

    System.out.println("Ingrese 7 notas de estudiantes para lenguaje:");
    for (int i14 = 0; i14 < claseLenguaje.length; i14++) {
      claseLenguaje[i14] = scanner4.nextDouble();
    }

    scanner4.close();

    for (int i14 = 0; i14 < 7; i14++) {
      sumNotasMatematicas += claseMatematicas[i14];
      sumNotasHistoria += claseHistoria[i14];
      sumNotasLenguaje += claseLenguaje[i14];
    }

    double promedioMatematica = (sumNotasMatematicas / claseMatematicas.length);
    double promedioHistoria = (sumNotasHistoria / claseHistoria.length);
    double promedioLenguaje = (sumNotasLenguaje / claseLenguaje.length);
    System.out.println("Promedio clase matemáticas: " + promedioMatematica);
    System.out.println("Promedio clase historia: " + promedioHistoria);
    System.out.println("Promedio clase lenguaje: " + promedioLenguaje);
    System.out.println("Promedio total del curso: "
        + (promedioMatematica + promedioHistoria + promedioLenguaje) / 3);

    System.out.println("Ingrese el identificador del alumno (de 0 - 6):");
    int id = scanner4.nextInt();
    double promedioAlumno = (claseHistoria[id] + claseLenguaje[id] + claseMatematicas[id]) / 3;
    System.out.println("Promedio alumno Nro " + id + " : " + promedioAlumno);
    System.out.println(" ");

  }

  // ---------------------------- METODOS -------------------------------//
  public static void arregloInverso(String[] arreglo) {
    int total2 = arreglo.length;
    int total = arreglo.length;
    for (int i = 0; i < total2; i++) {
      String actual = arreglo[i];
      String inverso = arreglo[total - 1 - i];
      arreglo[i] = inverso;
      arreglo[total - 1 - i] = actual;
      total2--;
    }
  }

  public static void sortBurbuja(Object[] arreglo) {

    int total = arreglo.length;
    int contador = 0;

    for (int i = 0; i < total - 1; i++) {
      for (int j = 0; j < total - 1 - i; j++) {
        if (((Comparable) arreglo[j + 1]).compareTo(arreglo[j]) > 0) {
          Object auxiliar = arreglo[j];
          arreglo[j] = arreglo[j + 1];
          arreglo[j + 1] = auxiliar;
        }
        contador++;
      }
    }

    System.out.println("contador = " + contador);
  }
}
