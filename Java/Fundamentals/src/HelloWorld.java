// Clase principal
public class HelloWorld {
  // Fuertemente tipado, primitivo "representa un valor" | referencia "objetos"
  // Los primitivos contienen un solo valor e incluyen los tipos como los enteros, flotante, caracteres, booleanos etc.
  // Los datos referenciados son como arreglos, clases y interfaces.
  // Estructura de una variable inferida: var TipoDato nombreVariable;
  // camelCase | unicode | no palabras reservadas | diferente scope | puede comenzar por "subrayado, dolar siguiendo
  // letras o dígitos"

  // Método principal, donde arranca el proyecto
  public static void main(String[] args) {
    // Se asigna un valor a la clase String, también es posible con Integer
    String saludar = "Hola Mundo desde Java!";
    // System: clase estática | out: atributo estático, instancia de PrintStream | println: método de out
    System.out.println(saludar);
    // Usando los métodos de la clase String
    System.out.println("saludar.toUpperCase() = " + saludar.toUpperCase());
    // Usando primitivos
    int myNumber = 99;
    // Mostrar en consola como un string usando la clase Integer con su método toString
    System.out.println("myNumber = " + myNumber);
  }
}