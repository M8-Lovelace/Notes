public class Streams {
     public static void main(String[] args) {
          // Agrupación de elementos sobre los que podemos especificar operaciones

          // private List<String> convertCollectionVersion(List<Persona> personas) {
          // List<String> nombres = new ArrayList<>();
          // for (Persona persona: personas) {
          // nombres.add(persona.getNombre());
          // }
          // return nombres;
          // }

          // private List<String> convertStreamVersion(List<Persona> personas) {
          // return personas.stream()
          // .map(it -> it.getNombre())
          // .collect(Collectors.toList());
          // }

          // private List<String> convertStreamVersion(List<Persona> personas) {
          // return personas.stream()
          // .map(it -> it.getNombre())
          // .collect(Collectors.toList());
          // }

          // --------------------------------------------------------------------//
          // ------------------------- STREAM PIPELINE --------------------------//
          // - Collection stream()
          // Se puede crear un Stream a partir de una colección de objetos con el
          // método stream() de la interfaz Collection
          // List<Persona> personas = new Array.asList(juan,antonia);
          // Stream<Persona> s1 = personas.stream();

          // - Arrays.asStream()
          // Se puede crear un Stream a partir de un array de objetos con el método
          // asStream() de la clase Arrays
          // Persona[] personas = {juan,antonia};
          // Stream<Persona> s2 = Arrays.asStream(personas);

          // - Utilidades de Stream
          // Se pueden crear Streams a partir de valores individuales con el método
          // of() de la clase Stream
          // Stream<Persona> s3 = Stream.of(juan,antonia);

          // - Otras APIs
          // Se pueden crear Streams a partir de otros orígenes de datos como
          // ficheros, sockets, etc.
          // Stream<String> s4 = Files.lines("fichero.txt");

          // Opciones intermedias principales:
          // - Convertir
          // El método map() permite convertir un Stream de un tipo a otro aplicando
          // una función a cada elemento del Stream
          // Stream<String> nombres = personas.map(it -> it.getNombre());

          // - Filtrar
          // El método filter() permite filtrar los elementos de un Stream aplicando
          // un predicado a cada elemento del Stream
          // Stream<String> nombresA = nombres.filter(it -> it.startsWith("A"));

          // - Ordenar
          // El método sorted() permite ordenar los elementos de un Stream aplicando
          // un comparador a cada elemento del Stream
          // nombres.sorted((s1,s2) -> s1.length() - s2.length());

          // - Operación terminal
          // Se ejecuta cuando se necesita el resultado del Stream
          // String todos = listaPersonas.stream() // Creación
          // .map(it -> it.getNombre()) // Operación intermedia
          // .sorted((s1,s2) -> s1.length() - s2.length()) // Operación intermedia
          // .map( it -> "'" + it + "'") // Operación intermedia
          // .reduce("",(a,b) -> a + "\n" + b); // Operación terminal

          // --------------------------------------------------------------------//
          // --------------------------- LAZYNESS -------------------------------//
          // - Los Streams son lazy
          // - Las operaciones intermedias no se ejecutan hasta que se necesita el
          // resultado de la operación terminal
          // - Las operaciones intermedias se ejecutan en el orden en el que se
          // declaran
          // - Las operaciones intermedias se ejecutan una sola vez
          // - Las operaciones intermedias pueden ser infinitas

          // --------------------------------------------------------------------//
          // --------------------------- REDUCTION ------------------------------//
          // - Operaciones terminales que devuelven un único valor
          // - Operaciones terminales que devuelven un Optional

          // 1. Operaciones terminales que devuelven un único valor
          // - count()
          // Devuelve el número de elementos del Stream
          // long numeroPersonas = listaPersonas.stream().count();

          // - min()
          // Devuelve el elemento mínimo del Stream aplicando un comparador
          // Optional<Persona> persona = listaPersonas.stream().min((p1,p2) ->
          // p1.getEdad() - p2.getEdad());

          // - max()
          // Devuelve el elemento máximo del Stream aplicando un comparador
          // Optional<Persona> persona = listaPersonas.stream().max((p1,p2) ->
          // p1.getEdad() - p2.getEdad());

          // - findFirst()
          // Devuelve el primer elemento del Stream
          // Optional<Persona> persona = listaPersonas.stream().findFirst();

          // - findAny()
          // Devuelve cualquier elemento del Stream
          // Optional<Persona> persona = listaPersonas.stream().findAny();

          // 2. Operaciones terminales que devuelven un Optional
          // - anyMatch()
          // Devuelve true si algún elemento del Stream cumple el predicado
          // boolean hayAlgunMenor = listaPersonas.stream().anyMatch(it -> it.getEdad() <
          // 18);

          // - allMatch()
          // Devuelve true si todos los elementos del Stream cumplen el predicado
          // boolean todosMayores = listaPersonas.stream().allMatch(it -> it.getEdad() >=
          // 18);

          // - noneMatch()
          // Devuelve true si ningún elemento del Stream cumple el predicado
          // boolean ningunMenor = listaPersonas.stream().noneMatch(it -> it.getEdad() <
          // 18);

          // --------------------------------------------------------------------//
          // --------------------------- COLLECTORS -----------------------------//
          // - Operaciones terminales que devuelven una colección
          // - Operaciones terminales que devuelven un valor único

          // 1. Operaciones terminales que devuelven una colección
          // - toList()
          // Devuelve una lista con los elementos del Stream
          // List<Persona> listaPersonas = listaPersonas.stream().toList();

          // - toSet()
          // Devuelve un conjunto con los elementos del Stream
          // Set<Persona> conjuntoPersonas = listaPersonas.stream().toSet();

          // - toMap()
          // Devuelve un mapa con los elementos del Stream
          // Map<String,Persona> mapaPersonas = listaPersonas.stream().toMap(it ->
          // it.getNombre(), it -> it);

          // - groupingBy()
          // Devuelve un mapa agrupando los elementos del Stream por una función
          // Map<Integer,List<Persona>> mapaPersonas =
          // listaPersonas.stream().groupingBy(it -> it.getEdad());

          // - partitioningBy()
          // Devuelve un mapa agrupando los elementos del Stream por un predicado
          // Map<Boolean,List<Persona>> mapaPersonas =
          // listaPersonas.stream().partitioningBy(it -> it.getEdad() < 18);

          // 2. Operaciones terminales que devuelven un valor único
          // - summingInt()
          // Devuelve la suma de los valores de un Stream de enteros
          // int sumaEdades = listaPersonas.stream().collect(Collectors.summingInt(it ->
          // it.getEdad()));

          // - averagingInt()
          // Devuelve la media de los valores de un Stream de enteros
          // double mediaEdades =
          // listaPersonas.stream().collect(Collectors.averagingInt(it -> it.getEdad()));

          // - summarizingInt()
          // Devuelve un objeto con estadísticas de un Stream de enteros
          // IntSummaryStatistics estadisticasEdades =
          // listaPersonas.stream().collect(Collectors.summarizingInt(it ->
          // it.getEdad()));

          // - joining()
          // Devuelve una cadena con los elementos de un Stream separados por un separador
          // String nombres = listaPersonas.stream().map(it ->
          // it.getNombre()).collect(Collectors.joining(", "));

          // - reducing()
          // Devuelve un valor reduciendo los elementos de un Stream aplicando una función
          // Optional<Persona> persona =
          // listaPersonas.stream().collect(Collectors.reducing((p1,p2) -> p1.getEdad() <
          // p2.getEdad() ? p1 : p2));

          // --------------------------------------------------------------------//
          // --------------------------- PARALLEL -------------------------------//
          // - Los Streams pueden ser paralelos
          // - Los Streams paralelos se crean con el método parallelStream()
          // - Los Streams paralelos se ejecutan en varios hilos
          // - Los Streams paralelos se ejecutan en el orden en el que se declaran
          // - Los Streams paralelos se ejecutan una sola vez
          // - Las operaciones intermedias pueden ser infinitas

          // List<Integer> lista = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

          // lista.stream()
          // .peek(System.out::println).forEach(i -> {
          // }); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

          // El paralelismo no garantiza el orden de ejecución
          // lista.parallelStream()
          // .peek(System.out::println).forEach(i -> {
          // });
     }
}