
/**
 * El ejercicio consiste en implementar los metodos de tal forma que
 * devuelvan una lambda expression que implementen la interface declarada
 * como tipo de devolución.
 *
 * Por ejemplo
 *
 * El primer metodo devuelve un objeto del tipo Constante
 * En la parte inferior de este fichero encontrareis la definicion de Constante
 * que tiene un metodo abstract:
 * int valor();
 *
 * Por tanto, vuestra implementacion del metodo devuelve5 debe tener la forma:
 * return lambda_expression;
 *
 * Donde lambda_expression es una implementación del método int valor() que
 * siempre
 * devuelve 5
 *
 */
public class LambdasFactory {

  /** Devuelve una implemtacion de constante que siempre devuelve 5 */
  public Constante devuelve5() {
    return () -> 5; // implementa int valor()
  }

  /**
   * Devuelve una implementacion de Operador con el metodo de suma de dos enteros
   */
  public Operador obtenSumador() {
    return (a, b) -> a + b; // implementa int opera ( int a, int b)
  }

  /**
   * Devuelve un inicializador de un array de strings
   * El metodo inicializa recibe el array ya creado. Su tarea es que
   * todas las posiciones queden inicializadas con el valor indicado en el
   * seguno parametro del metodo incializa
   */
  public InicializadorArrays obtenInicializador() {
    // implementa void inicializa ( String[] array, String valor)
    return (array, valor) -> {
      // usamos un bloque en lugar de una expresion
      for (int i = 0; i < array.length; i++) {
        array[i] = valor;
      }
    };
  }

}

interface Constante {
  int valor();
}

interface Operador {
  int opera(int a, int b);
}

interface InicializadorArrays {
  void inicializa(String[] array, String valor);
}