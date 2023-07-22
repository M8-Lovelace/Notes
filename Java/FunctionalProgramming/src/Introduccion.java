import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Introduccion {
  public static void main(String[] args) {
    // Ejemplo 1
    List<String> nombres = Arrays.asList("Juan", "Pedro", "Luis", "Maria", "Ana", "Jose");
    // Aqui se esta usando una expresion lambda para definir el comportamiento del metodo sort de la clase Collections
    // El metodo sort recibe un objeto de tipo Comparator, el cual tiene un metodo abstracto llamado comparadorLongitud
    Comparator<String> comparadorLongitud = (o1, o2) -> o2.length() - o1.length();

    // Se puede usar el metodo sort de la clase Collections para ordenar la lista de nombres
    Collections.sort(nombres, comparadorLongitud);
    System.out.println(nombres);
  }
}