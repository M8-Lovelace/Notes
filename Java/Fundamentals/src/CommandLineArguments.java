public class CommandLineArguments {
  public static void main(String[] args) {
    // - Estar en la ruta del archivo
    // cd Fundamentals/src
    // - Compilar a bytecode, javac = java compiler
    // javac CommandLineArguments.java // => devuelve un CommandLineArguments.class
    // - Compilar a bytecode usando UTF-8
    // javac -encoding utf8 CommandLineArguments.java
    // - Ir a la ruta y pasar los parámetros "src"
    // java CommandLineArguments Edwin Laura

    int index = 0;
    for (String key : args) {
      System.out.println("Argumento n*: " + (index++) + " = " + key);
    }
  }
}
