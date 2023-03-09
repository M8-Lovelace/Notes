public class TypeConversion {
  public static void main(String[] args) {
    // Convertimos de String a tipo primitivo.
    String numeroStr = "50";

    // Convertimos el String a int.
    int numeroInt = Integer.parseInt(numeroStr);
    System.out.println("numeroInt = " + numeroInt); // 50

    String realStr = "98755.43e-3";
    // Convertimos el String a double.
    double realDouble = Double.parseDouble(realStr);
    System.out.println("numeroDouble = " + realDouble); // 98.75543

    String logicoStr = "true";
    // Convertimos el String a boolean.
    boolean logicoBoolean = Boolean.parseBoolean(logicoStr);
    System.out.println("logicoBoolean = " + logicoBoolean); // true

    // --------------------------------------------------------------------//
    // Convertimos de tipo primitivo a String.
    int otroNumeroInt = 100;
    System.out.println("otroNumeroInt = " + otroNumeroInt); // 100
    // 1. Convertimos el int a String.
    String otroNumeroStr = Integer.toString(otroNumeroInt);
    System.out.println("otroNumeroStr = " + otroNumeroStr); // 100

    // Nombre sobrecarga de método.
    // 2. Convertimos el int a String.
    otroNumeroStr = String.valueOf(otroNumeroInt + 10);
    System.out.println("otroNumeroStr = " + otroNumeroStr); // 110


    double otroRealDouble = 98755.43e-3;
    // 1. Convertimos el double a String.
    String otroRealStr = Double.toString(otroRealDouble);
    System.out.println("otroRealStr = " + otroRealStr); // 98.75543

    // 2. Convertimos el double a String.
    otroRealStr = String.valueOf(otroRealDouble);
    System.out.println("otroRealStr = " + otroRealStr); // 98.75543

    // --------------------------------------------------------------------//
    // Convertir de un primitivo a otro.
    int i = 22768;
    // Convertimos de int a short.
    // Casting: Forzamos la conversión del tipo de dato. En primitivos solo
    // se pueden usar a tipos numéricos, incluyendo a los números reales
    // (float, double) y el char.
    short s = (short) i;
    System.out.println("s = " + s); // 10000

    // Convertimos de int a long.
    long l = i;
    System.out.println("l = " + l); // 10000
    System.out.println("Short.MAX_VALUE = " + Short.MAX_VALUE); // 32767

    // Un caracter se puede representar con un número entero, ya que está
    // mapeado en la tabla UNICODE con valor númerico.
    char c = (char) i;
    System.out.println("c = " + c); // 声

    // Convertimos de int a float.
    float f = (float) i;
    System.out.println("f = " + f); // 10000.0

  }
}
