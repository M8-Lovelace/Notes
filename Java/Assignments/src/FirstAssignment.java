//Crear una clase java e imprimir tu nombre en la salida o consola.
public class FirstAssignment {
  public static void main( String[] args ) {
    long startTime = System.currentTimeMillis();
    StringBuilder name = new StringBuilder("Laura Susano");
    long endTime = System.currentTimeMillis();
    System.out.println( name.append( " tomó " ).append( endTime - startTime ) );
  }
}
