public class CalculatorCommandLineArguments {
  public static void main(String[] args) {
    // - Estar en la ruta del archivo
    // cd Fundamentals/src
    // - Compilar a bytecode, javac = java compiler
    // javac CalculatorCommandLineArguments.java // => devuelve un
    // CalculatorCommandLineArguments.class
    // - Compilar a bytecode usando UTF-8
    // javac -encoding utf8 CalculatorCommandLineArguments.java
    // - Ir a la ruta y pasar los parámetros "src"
    // java CalculatorCommandLineArguments suma 3 5

    if (args.length != 3) {
      System.err.println("Por favor ingresar una operación " +
          "(suma, resta, div o multi) y dos enteros");
      System.exit(-1);
    }

    String operacion = args[0];
    int a = 0;
    int b = 0;
    double resultado = 0.00;

    try {
      a = Integer.parseInt(args[1]);
      b = Integer.parseInt(args[2]);
    } catch (NumberFormatException e) {
      System.err.println("Cuidado a y b deben ser enteros, vuelva a intentar!");
      System.exit(-1);
    }
    switch (operacion) {
      case "suma":
        resultado = a + b;
        break;
      case "resta":
        resultado = a - b;
        break;
      case "multi":
        resultado = a * b;
        break;
      case "div":
        if (b == 0) {
          System.err.println("No se puede dividir por zero!");
          System.exit(-1);
        }
        resultado = (double) a / b;
        break;
      default:
        resultado = a + b;
    }

    System.out.println("Resultado de la operación '" + operacion + "' es: " + resultado);
  }
}
