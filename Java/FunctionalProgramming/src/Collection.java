import java.util.Arrays;
import java.util.List;

public class Collection {
  public static void main(String[] args) {

    // --------------------------------------------------------------------//
    // --------------------------- COLLECTION -----------------------------//

    // JAVA.UTIL.COLLECTION
    // - default Stream<E> stream()
    // Devuelve un objeto Stream que itera sobre los elementos de la coleccion

    // - default Stream<E> parallelStream()
    // Devuelve un objeto Stream que itera sobre los elementos de la coleccion en
    // paralelo

    // - default Spliterator<E> spliterator()
    // Devuelve un objeto Spliterator que itera sobre los elementos de
    // la coleccion

    List<String> lista = Arrays.asList("Juan", "Pedro", "Luis", "Maria", "Ana", "Jose");

    lista.spliterator().forEachRemaining(System.out::println); // Juan Pedro Luis Maria Ana Jose

    // - default Spliterator<T> trySplit()
    // Devuelve un nuevo Spliterator que itera sobre los elementos restantes,
    // si es posible

    lista.spliterator().trySplit().forEachRemaining(System.out::println); // Imprime la mitad de la lista

    // - default boolean removeIf(Predicate<? super E> filter)
    // Elimina todos los elementos de la coleccion que cumplan con el predicado
    // especificado

    lista.removeIf(s -> s.length() > 4); // Elimina los elementos de la lista que tengan mas de 4 caracteres
    System.out.println(lista); // [Juan, Luis, Ana, Jose]

    // - default void replaceAll(UnaryOperator<E> operator)
    // Reemplaza cada elemento de la coleccion con el resultado de aplicar el
    // operador especificado

    lista.replaceAll(String::toUpperCase); // Convierte a mayusculas cada elemento de la lista
    System.out.println(lista); // [PEDRO, LUIS, ANA, JOSE]

    // - default void sort(Comparator<? super E> c)
    // Ordena los elementos de la coleccion usando el comparador especificado

    lista.sort((o1, o2) -> o2.length() - o1.length()); // Ordena la lista de mayor a menor longitud
    System.out.println(lista); // [PEDRO, JOSE, LUIS, ANA]

    // JAVA.UTIL.MAP
    // - default V getOrDefault(Object key, V defaultValue)
    // Devuelve el valor al que esta mapeada la clave especificada, o el valor
    // por defecto si la clave no esta mapeada

    // - default void forEach(BiConsumer<? super K, ? super V> action)
    // Ejecuta la accion especificada por cada par clave-valor de la coleccion

    // - default V replace(K key, V value)
    // Reemplaza el valor al que esta mapeada la clave especificada con el valor
    // especificado

    // - default void replace( K key, V oldValue, V newValue)
    // Reemplaza el valor al que esta mapeada la clave especificada con el nuevo
    // valor especificado, si el valor actual es igual al valor especificado

    // - default V putIfAbsent(K key, V value)
    // Asocia el valor especificado con la clave especificada si la clave no esta
    // mapeada

    // - default boolean remove(Object key, Object value)
    // Elimina la entrada especificada si esta mapeada con el valor especificado

    // - default void replaceAll(BiFunction<? super K, ? super V, ? extends V>
    // function)
    // Reemplaza cada valor con el resultado de aplicar la funcion especificada

    // - default V compite(
    // K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)
    // Si la clave esta mapeada, reemplaza el valor con el resultado de aplicar la
    // funcion especificada, si no esta mapeada, asocia el valor especificado con la
    // clave especificada

    // - default V computeIfPresent( K key, BiFunction<? super K, ? super V, ?
    // extends
    // V> remappingFunction)
    // Si la clave esta mapeada, reemplaza el valor con el resultado de aplicar la
    // funcion especificada, si no esta mapeada, no hace nada

    // - default V computeIfAbsent( K key, Function<? super K, ? extends V
    // mappingFunction)
    // Si la clave esta mapeada, reemplaza el valor con el resultado de aplicar la
    // funcion especificada, si no esta mapeada, asocia el valor especificado con la
    // clave especificada

    // - default V merge( K key, V value, BiFunction<? super V, ? super V, ?
    // extends V> remappingFunction)
    // Si la clave esta mapeada, reemplaza el valor con el resultado de aplicar la
    // funcion especificada, si no esta mapeada, asocia el valor especificado con la
    // clave especificada

    // Map<String, String> contadores = ...
    // contadores.merge("clave", 1, (a,b) -> a+b);

    // --------------------------------------------------------------------//
    // --------------------------- COMPARATOR -----------------------------//

    // JAVA.UTIL.COMPARATOR

    // class Persona {
    // ...
    // static Comparator<Persona> porEdad() {
    // return Comparator.comparingInt(Persona::getNacimiento);
    // }
    // }

    // lista.sort(Persona.porEdad());

    // lista.sort(Persona.portEdad().reversed());

    // COMPARING
    // static Comparator<Persona> porApellido() {
    // return Comparator.comparing(Persona::getApellido);
    // }

    // THENCOMPARING
    // default Comparator<T> thenComparing(Comparator<? super T> other)
    // Devuelve un comparador que compara primero con este comparador y luego con el
    // comparador especificado

    // static Comparator<Persona> porApellidoYNombre() {
    // return Comparator.comparing(Persona::getApellido)
    // .thenComparing(Persona::getNombre);
    // }

    // NULLS
    // public static <T> Comparator<T> nullsLast(Comparator<? super T> comparator)
    // Devuelve un comparador que compara primero con el comparador especificado y
    // luego con null

    // lista.sort(Comparator.nullsLast(Persona.porApellido()));

    // public static <T> Comparator<T> nullsFirst(Comparator<? super T> comparator)
    // Devuelve un comparador que compara primero con null y luego con el comparador
    // especificado

    // lista.sort(Comparator.nullsLast(Persona.porApellido()));

  }
}
