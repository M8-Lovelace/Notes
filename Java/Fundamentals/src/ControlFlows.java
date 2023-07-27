public class ControlFlows {
  public static void main(String[] args) {
    // --------------------------------------------------------------------//
    // ------------------------ SENTENCE IF ELSE --------------------------//
    float promedio = 5.5f;

    if (promedio >= 6.5) {
      System.out.println("Felicitaciones, excelente promedio!");
    } else if (promedio >= 6.0) {
      System.out.println("Muy buen promedio!");
    } else if (promedio >= 5.5) {
      System.out.println("Buen promedio!");
    } else if (promedio >= 5.0) {
      System.out.println("Regular, necesitas esforzarte un poco más!");
    } else if (promedio >= 4.0) {
      System.out.println("Insuficiente, necesitas estudiar más!");
    } else {
      System.out.println("Reprobado!");
    }
    System.out.println("tu promedio es " + promedio);
    System.out.println(" ");

    // CALCULAR DIA DEL MES

    int mes = 2;

    int numeroDias = 0;

    int anio = 1800;

    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
      numeroDias = 31;
    } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
      numeroDias = 30;
    } else if (mes == 2) {
      if (anio % 400 == 0 || ((anio % 4 == 0) && !(anio % 100 == 0))) {
        numeroDias = 29;
      } else {
        numeroDias = 28;
      }
    }
    System.out.println("numeroDias = " + numeroDias);
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // -------------------------- SWITCH CASE -----------------------------//

    String nombre = "edwin";

    switch (nombre) {
      case "admin":
        System.out.println("Hola admin, bienvenido!");
        break;
      case "edwin":
        System.out.println("Hola edwin!");
        break;
      case "pepe":
        System.out.println("Hola pepe");
        break;
      default:
        System.out.println("Usuario desconocido!");
    }

    // --------------------------------------------------------------------//
    // ------------------------------- FOR --------------------------------//

    for (int i = 0; i < 5; i++) {
      System.out.println("i = " + i);
    }

    for (int i = 1, j = 10; i < j; i++, j--) {
      System.out.println("i = " + i);
    }

    String[] nombres = { "Edwin", "Pepe", "Maria", "Paco", "Lalo", "Bea", "Pato", "Pepa" };
    int count = nombres.length;
    for (int i = 0; i < count; i++) {
      if (nombres[i].toLowerCase().contains("EDWIN".toLowerCase()) ||
          nombres[i].toLowerCase().contains("pePa".toLowerCase())) {
        continue;
      }
      System.out.println(i + ".- " + nombres[i]);
    }

    // --------------------------------------------------------------------//
    // -------------------------- WHILE / DO ------------------------------//
    int i = 0;
    while (i <= 5) {
      System.out.println("i = " + i);
      i++;
    }

    i = 0;
    boolean prueba = true;

    while (prueba) {

      if (i == 7) {
        prueba = false;
      }
      System.out.println("i = " + i);
      i++;
    }

    prueba = false;
    do {
      System.out.println("se ejecuta al menos una vez");
    } while (prueba);

    prueba = true;
    i = 0;

    do {
      if (i == 10) {
        prueba = false;
      }
      System.out.println("i = " + i);
      i++;
    } while (prueba);

    // --------------------------------------------------------------------//
    // --------------------------- FOR EACH -------------------------------//

    int[] numeros = { 1, 3, 5, 7, 9, 11, 13, 15 };
    for (int num : numeros) {
      System.out.println("num = " + num);
    }

    String[] nombress = { "Andres", "Pepe", "Maria", "Paco", "Lalo", "Bea", "Pato", "Pepa" };

    for (String nombree : nombress) {
      System.out.println("nombre = " + nombree);
    }

    // --------------------------------------------------------------------//
    // ------------------------ BUCLE ETIQUETAS ---------------------------//

    bucle: for (int i1 = 1; i1 <= 7; i1++) {
      int j1 = 1;
      while (j1 <= 8) {
        if (i1 == 6 || i1 == 7) {
          System.out.println("Dia " + i1 + ": descanso de fin de semana!");
          continue bucle;
        }
        System.out.println("Día " + i1 + ", trabajando a las " + j1 + "hrs. ");
        j1++;
      }
    }
    System.out.println("\n=================================================");

    bucle1: for (int i2 = 0; i2 < 5; i2++) {

      System.out.println();
      int j2 = 0;
      while (j2 < 5) {
        if (i2 == 2) {
          continue bucle1;
        }
        System.out.print("[i2 = " + i2 + ", j2 = " + j2 + "], ");
        j2++;
      }
    }

    System.out.println("\n=================================================");

    etiqueta: for (int i3 = 0; i3 < 5; i3++) {

      System.out.println();
      for (int j3 = 0; j3 < 5; j3++) {
        if (i3 == 2) {
          break etiqueta;
        }
        System.out.print("[i3 = " + i3 + ", j3 = " + j3 + "], ");
      }
    }

    System.out.println("\n=================================================");

    // BUSCAR

    String frase = "tres tristes tigres tragan trigo en un trigal";
    String palabra = "trigo";

    int maxPalabra = palabra.length();
    int maxFrase = frase.length() - maxPalabra;

    int cantidad = 0;
    // char letra = 'g';
    buscar: for (int i4 = 0; i4 <= maxFrase;) {
      int k4 = i4;
      for (int j4 = 0; j4 < maxPalabra; j4++) {
        if (frase.charAt(k4++) != palabra.charAt(j4)) {
          i4++;
          continue buscar;
        }
      }
      cantidad++;
      i4 = i4 + maxPalabra;
    }
    System.out.println("Encontrado = " + cantidad + " veces la palabra '" + palabra + "' en la frase");

  }
}