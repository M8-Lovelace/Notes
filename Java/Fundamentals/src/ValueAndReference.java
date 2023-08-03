class Persona {
  private String nombre;

  public void modificarNombre(String nuevoNombre) {
    nombre = nuevoNombre;
  }

  public String leerNombre() {
    return this.nombre;
  }
}

public class ValueAndReference {

  public static void main(String[] args) {
    // --------------------------------------------------------------------//
    // ------------------------ PASAR POR VALOR ---------------------------//
    // Aunque parezca que estamos pasando el valor de la variable, en realidad
    // estamos pasando una copia de ese valor, por lo que si modificamos el valor
    // de la variable dentro del método, el valor de la variable original no se
    // verá afectado.

    int i = 10;

    System.out.println("iniciamos el método main con i = " + i); // 10
    // Llamamos al método test y le pasamos el valor de i
    test(i);
    System.out.println("Finaliza el método main con el valor de i (se mantiene igual) = " + i); // 10
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ------------------------ PASAR POR REFERENCIA ----------------------//
    // Cuando pasamos un objeto como parámetro, en realidad estamos pasando la
    // referencia a ese objeto, por lo que si modificamos el valor de la variable
    // dentro del método, el valor de la variable original se verá afectado.

    int[] edad = { 10, 11, 12 };

    System.out.println("iniciamos el método main");
    for (int o = 0; o < edad.length; o++) {
      System.out.println("edad[o] = " + edad[o]); // 10, 11, 12
    }
    System.out.println("Antes de llamar al método test");
    test2(edad);
    System.out.println("Después de llamar al método test");
    for (int u = 0; u < edad.length; u++) {
      System.out.println("edad[u] = " + edad[u]); // 30, 31, 32
    }
    System.out.println("Finaliza el método main con los datos del arreglo modificados!");
    System.out.println(" ");

    // EJEMPLO PASAR POR REFERENCIA

    Persona persona = new Persona();
    persona.modificarNombre("Andrés");

    System.out.println("iniciamos el método main");

    System.out.println("persona.nombre = " + persona.leerNombre()); // Andrés
    System.out.println("Antes de llamar al método test");
    test3(persona);
    System.out.println("Después de llamar al método test");

    System.out.println("persona.nombre = " + persona.leerNombre()); // Pepe

    System.out.println("Finaliza el método main con los datos de la persona modificados!");
  }

  // Implementación del método test que recibe un parámetro de tipo int
  public static void test(int i) {
    System.out.println("Iniciamos el método test con i = " + i); // 10
    i = 35; // Modificamos el valor de i dentro del método
    System.out.println("Finaliza el método test con i = " + i); // 35
  }

  // Implementación del método test que recibe un parámetro de tipo int[]
  public static void test2(int[] edadArr) {
    System.out.println("Iniciamos el método test");
    for (int i = 0; i < edadArr.length; i++) {
      edadArr[i] = edadArr[i] + 20; // Modificamos el valor de cada elemento del arreglo
    }
    System.out.println("Finaliza el método test");
  }

  public static void test3(Persona persona) {
    System.out.println("Iniciamos el método test");
    persona.modificarNombre("Pepe"); // Modificamos el nombre de la persona
    System.out.println("Finaliza el método test");
  }

}