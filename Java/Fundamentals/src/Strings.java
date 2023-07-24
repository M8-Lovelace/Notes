public class Strings {
  public static void main(String[] args) {
    // Los String son objetos de java, del tipo de referencia.
    String nombre = new String("Laura");
    String nombre2 = "Laura";

    // El tipo String tiene una característica especial, permite crear objetos
    // también
    // en la literal entre comillas dobles.
    // Para incluir el carácter comillas dobles, se debe escapar "\"".
    String tema = new String("Manejo de \"String\"");
    String tema2 = "Manejo de \"String\"";

    // --------------------------------------------------------------------//
    // ----------------------------CONCATENAR------------------------------//
    String curso = "Programación Java";
    String profesor = "Edwin Páez";

    String detalle = curso + " con el instructor " + profesor;
    System.out.println(detalle); // Programación Java con el instructor Edwin Páez

    int numeroA = 10;
    int numeroB = 5;

    // Al poner al inicio un string y luego unas variables numéricas estos se van a
    // concatenar.
    System.out.println(detalle + numeroA + numeroB); // Programación Java con el instructor Edwin Páez105
    // Si probamos poner primero los números estos se van a sumar y luego concatenar
    // al string.
    System.out.println(numeroA + numeroB + detalle); // 15Programación Java con el instructor Edwin Páez
    // La solución para hacer una suma y luego concatenar es encerrando los números
    // en paréntesis.
    System.out.println(detalle + (numeroA + numeroB)); // Programación Java con el instructor Edwin Páez15

    // Aquí probaremos utilizando el método concat, el cual es más eficiente
    String detalle2 = curso.concat(" con ").concat(profesor);
    System.out.println("detalle2 = " + detalle2); // Programación Java con Edwin Páez

    // StringBuilder es una clase que permite crear un objeto mutable de tipo
    // String.
    StringBuilder sb = new StringBuilder(curso);
    // Tomar el tiempo de inicio
    long inicio = System.currentTimeMillis();
    // Invocar el método append() de la clase StringBuilder para concatenar
    sb.append(" con ").append(profesor);
    // Método que ejecuta el garbage collector del sistema. Realiza un reciclado de
    // los objetos de la memoria
    // de la JVM para optimizar el espacio de la misma.
    System.gc();
    // Tomar el tiempo de fin
    long fin = System.currentTimeMillis();
    System.out.println("sb = " + sb.toString()); // Programación Java con Edwin Páez
    System.out.println(fin - inicio); // 11ms
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ---------------------------- INMUTABLE -----------------------------//
    // Los String son inmutables, no se pueden modificar.
    // Si se intenta modificar un String, se crea un nuevo objeto en memoria.
    String curso2 = "Programación Java";
    String profesor2 = "Laura Susano";

    String resultado = curso2.concat(profesor2);
    System.out.println("curso2 = " + curso2); // Programación Java
    System.out.println("resultado = " + resultado); // Programación JavaLaura Susano
    System.out.println((curso2 == resultado)); // false

    // El método transform() permite modificar el String y devolver el resultado.
    String resultado2 = curso2.transform(c -> {
      return c + " con " + profesor2;
    });
    System.out.println("curso2 = " + curso2); // Programación Java
    System.out.println("resultado2 = " + resultado2); // Programación Java con Laura Susano

    // El método replace() permite modificar el String y devolver el resultado.
    // El primer argumento es el caracter a buscar y el segundo el caracter a
    // reemplazar.
    // Si no encuentra el caracter a buscar, no hace nada.
    String resultado3 = curso2.replace("a", "A"); // Programción JAvA
    // Este método no modifica el String original.
    System.out.println("curso2 = " + curso2); // Programación Java
    // Guarda el resultado en una nueva variable.
    System.out.println("resultado3 = " + resultado3); // Programción JAvA
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // -----------------------------COMPARAR-------------------------------//
    // Con operador relacional de igualdad == compara por referencia
    // Con el método equals() compara por valor
    // A pesar que tenemos dos variables con el mismo valor, en realidad son
    // dos objetos diferentes.
    String str1 = "Hola Edwin";
    String str2 = new String("Hola Edwin");
    // Chequea si son el mismo objeto
    System.out.println("Son el mismo objeto? " + (str1 == str2)); // false
    // Chequea si tienen el mismo valor
    System.out.println("Tienen el mismo valor? " + str1.equals(str2)); // true
    // Chequea si tienen el mismo valor, sin importar mayúsculas o minúsculas
    System.out.println("Tienen el mismo valor? " + str1.equalsIgnoreCase(str2)); // true
    // Compara orden numérico de las cadenas basado en el valor Unicode de cada
    // carácter, si es menor a 0 es menor, si es mayor a 0 es mayor, si es igual a 0
    // es igual
    System.out.println("str1.compareTo(\"Laura\") = " + str1.compareTo("Laura")); // -4
    System.out.println("str1.compareTo(\"Aaron\") = " + str1.compareTo("Aaron")); // 7

    String str3 = "Hola Edwin";
    boolean esIgual = str1 == str3;
    // Chequea si son el mismo objeto, no crea un nuevo objeto en memoria y
    // compara por referencia.
    System.out.println("esIgual = " + esIgual); // true
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ------------------------- VALIDACIONES -----------------------------//
    String curso3 = null;

    boolean isNull = curso3 == null;
    System.out.println("isNull = " + isNull); // true

    if (isNull) {
      curso3 = "Programación Java";
    }

    // Verifica si la cadena está vacía contando los caracteres
    boolean esVacio = curso3.length() == 0;
    System.out.println("esVacio = " + esVacio); // false

    // Verifica si la cadena está vacía con isEmpty()
    boolean esVacio2 = curso3.isEmpty();
    System.out.println("esVacio2 = " + esVacio2); // false

    // Verifica si la cadena está vacía, valida la longitud y si tiene espacios en
    // blanco
    boolean isWhite = curso3.isBlank();
    System.out.println("isWhite = " + isWhite); // false

    // Verifica si la cadena no está vacía
    if (!isWhite) {
      // Convierte la cadena a mayúsculas
      System.out.println(curso3.toUpperCase()); // PROGRAMACIÓN JAVA
      // Concatena la cadena
      System.out.println("Bienvenidos al curso3 ".concat(curso3)); // Bienvenidos al curso3 Programación Java
    }
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // -----------------------------MÉTODOS--------------------------------//
    // Los métodos de la clase String son inmutables, no modifican el String
    // original.
    // Devuelven un nuevo String con el resultado.
    // Los métodos de la clase String son estáticos, se pueden invocar sin crear un
    // objeto.
    // Los métodos de la clase String son públicos, se pueden invocar desde
    // cualquier clase.
    String nombre3 = "Laura";

    // Cuenta la cantidad de caracteres de la cadena
    System.out.println("nombre3.length() = " + nombre3.length()); // 5
    // Convierte la cadena a mayúsculas
    System.out.println("nombre3.toUpperCase() = " + nombre3.toUpperCase()); // LAURA
    // Convierte la cadena a minúsculas
    System.out.println("nombre3.toLowerCase() = " + nombre3.toLowerCase()); // laura
    // Obtiene el carácter en la posición indicada
    System.out.println("nombre3.charAt(0) = " + nombre3.charAt(0)); // L
    System.out.println("nombre3.charAt(1) = " + nombre3.charAt(1)); // u
    // Obtiene el carácter en la posición indicada, pero de forma inversa
    System.out.println("nombre3.charAt(nombre3.length()-1) = " + nombre3.charAt(nombre3.length() - 1)); // a

    // Obtiene una subcadena de la cadena, desde la posición indicada hasta el final
    System.out.println("nombre3.substring(1) = " + nombre3.substring(1)); // aura
    // Obtiene una subcadena de la cadena, desde la posición indicada hasta la
    // posición indicada
    System.out.println("nombre3.substring(1, 4) = " + nombre3.substring(1, 4)); // aur
    // Obtiene una subcadena de la cadena, desde la posición indicada hasta la
    // posición indicada, pero de forma inversa
    System.out.println("nombre3.substring(4, 6) = " + nombre3.substring(nombre.length() - 2)); // ra

    String trabalenguas = "trabalenguas";

    // Reemplaza todas las ocurrencias de la cadena que se pasa como primer
    // argumento, por la cadena que se pasa como segundo argumento
    System.out.println("trabalenguas.replace(\"a\",\".\") = " + trabalenguas.replace("a", ".")); // tr.b.lengu.s
    System.out.println("trabalenguas = " + trabalenguas); // trabalenguas
    // Nos da la posición de la primera ocurrencia de la cadena que se pasa como
    // argumento
    System.out.println("trabalenguas.indexOf(\"a\") = " + trabalenguas.indexOf("a")); // 1
    // Nos da la posición de la última ocurrencia de la cadena que se pasa como
    // argumento
    System.out.println("trabalenguas.lastIndexOf(\"a\") = " + trabalenguas.lastIndexOf("a")); // 9
    // Nos dice si la cadena que se pasa como argumento está contenida en la cadena,
    // si da un valor mayor a -1 es que está contenida
    System.out.println("trabalenguas.indexOf(\"t\") = " + trabalenguas.indexOf("t")); // 0
    // Nos dice si está contenida la cadena que se pasa como argumento en la cadena,
    // si da un valor true es que está contenida
    System.out.println("trabalenguas.contains(\"t\") = " + trabalenguas.contains("t")); // true
    // Nos dice si la cadena que se pasa como argumento empieza con la cadena, si da
    // un valor true es que empieza con la cadena
    System.out.println("trabalenguas.startsWith(\"tra\") = " + trabalenguas.startsWith("tra")); // true
    // Nos dice si la cadena que se pasa como argumento termina con la cadena, si da
    // un valor true es que termina con la cadena
    System.out.println("trabalenguas.endsWith(\"lenguas\") = " + trabalenguas.endsWith("lenguas")); // true
    System.out.println("   " + "trabalenguas "); // " trabalenguas "
    // Elimina los espacios en blanco al inicio y al final de la cadena
    System.out.println(trabalenguas.trim()); // trabalenguas
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ----------------------- EXTENSION ARCHIVO --------------------------//
    // Obtiene la extensión de un archivo
    String archivo = "alguna_imagen.jpeg";
    // Obtiene la posición del último punto
    int i = archivo.lastIndexOf(".");
    System.out.println("archivo.length() = " + archivo.length()); // 18
    System.out.println("archivo.substring(++i) = " + archivo.substring(++i)); // jpeg
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ----------------------- STRING A ARREGLOS -------------------------//
    String trabalenguas2 = "trabalenguas";
    System.out.println("trabalenguas2.toCharArray() = " + trabalenguas2.toCharArray()); // [C@1b6d3586

    // Convierte la cadena a un arreglo de caracteres
    char[] arreglo = trabalenguas2.toCharArray();

    // Obtiene el largo del arreglo
    int largo = arreglo.length;
    System.out.println("largo = " + largo); // 12

    // Recorre el arreglo
    for (int o = 0; i < largo; o++) {
      // Imprime el arreglo
      System.out.print(arreglo[o]); // trabalenguas
    }

    // Convierte la cadena a un arreglo de caracteres, separando la cadena por el
    // caracter que se pasa como argumento
    System.out.println("\ntrabalenguas2 = " + trabalenguas2.split("a")); // [Ljava.lang.String;@4554617c
    // Divide la cadena en un arreglo de cadenas, separando la cadena por el
    // caracter que se pasa como argumento
    String[] arreglo2 = trabalenguas2.split("a");
    int l = arreglo2.length;
    // Recorre el arreglo
    for (int j = 0; j < l; j++) {
      // Imprime el arreglo
      System.out.println(arreglo2[j]); // tr, b , lengu, s
    }

    String archivo2 = "alguna.imagen.pdf";
    // Convierte la cadena a un arreglo de caracteres, separando la cadena por el
    // caracter que se pasa como argumento
    String[] archivoArr = archivo2.split("\\."); // [.]
    // Obtiene el largo del arreglo
    int largoArchivoArr = archivoArr.length;

    // Recorre el arreglo
    for (int o = 0; o < largoArchivoArr; o++) {
      // Imprime el arreglo
      System.out.println(archivoArr[o]); // alguna, imagen, pdf

    }
    // Imprime la extensión del archivo
    System.out.println("extensión = " + archivoArr[largoArchivoArr - 1]); // pdf

  }
}
