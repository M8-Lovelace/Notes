
public class FunctionalInterfaces {
  // --------------------------------------------------------------------//
  // -------------------- COMPOSITIONS WITH FUNCTION --------------------//
  // andThen: añadir funcionalidad posterior
  // Reasignar la función a la misma variable para añadir funcionalidad posterior
  // Function<Persona, String> nombre = per -> per.getNombre();
  // nombre = nombre.andThen( nombre -> nombre.toUpperCase() );

  // compose: añadir funcionalidad anterior
  // Añadir funcionalidad anterior a la función original
  // Function<Coche, Persona> propietario = coche -> coche.getPropietario();

  // Obtenemos el nombre del propietario del coche
  // Function<Persona, String> nombre = per -> per.getNombre();

  // Obtenemos el nombre del propietario del coche
  // Function<Coche, String> nombrePropietario = propietario.compose(nombre);

  // --------------------------------------------------------------------//
  // -------------------- INTERFACE FUNCTION <T, R> ---------------------//
  // T: Tipo de dato de entrada
  // R: Tipo de dato de salida
  // Primitivo = int, double, float, char, boolean

  // f (primitivo) -> R == IntFunction<R>
  // f (T) -> primitivo == ToLongFunction<T>
  // f (primiitivo) -> primitivo == DoubleToIntFunction

  // Una operación que acepta un parametro pero no devuelve nada
  // Consumer <T> -> void
  // Consumer<String> impresor = (it) -> System.out.println(it);

  // Una operación que sin ningún parametro pero devuelve un valor
  // Supplier <T> -> T
  // Random random = new Random();
  // Supplier<Integer> generador = () -> random.nextInt();

  // Una operación que acepta un parámetro y devuelve un verdadero o falso
  // IntPredicate, DoublePredicate, LongPredicate
  // Predicate <T> -> boolean
  // f(x) -> boolean
  // Predicate<String> cadenaCorta = it -> it.length() < 10;

  // El prefijo Bi o Binary cuando se duplica el número de parametros
  // BinaryOperator <T> == f(T, T) -> T
  // BiFunction <T, U, R> == f(T, U) -> R
  // BiPredicate <T, U> == f(T, U) -> boolean
  // DoubleBinaryOperator == f(double, double) -> double

  // --------------------------------------------------------------------//
  // --------------------- REFERENCIAS A MÉTODOS ------------------------//

  // Utilidades::compare
  // Utilidades = clase
  // compare = método estático

  // -------- Referencia a un método de una instancia particular --------//
  // Utilidades util = new Utilidades();
  // lista.sort(util::compare);

  // class Utilidades {
  // public int compare(String s1, String s2) {
  // return S1.Length() - s2.Length();
  // }
  // }

  // -------- Referencia a un método de una instancia particular -------//
  // Utilidades util = new Utilidades();
  // lista.sort(util::compare);

  // class Utilidades {
  // public int compare(String s1, String s2) {
  // return S1.Length() - s2.Length();
  // }
  // }

  // -------- Referencia a un método de una instancia particular -------//
  // lista.sort(String::compareToIgnoreCase);
  // int compare(String o1, String o2);

  // public final class String ... {
  // ...
  // public int compareToIgnoreCase(String str)

  // ------------------- Referencia a un constructor -------------------//
  // Function<String, Integer> conversor = Integer::new;
  // conversor.apply("3");
  // new Integer("3");

  // ---------------------------- OPTIONAL ----------------------------//
  // Si el optional va a tener valor
  // Optional<Persona> persona = Optional.of("Pepe");

  // Si el optional puede no tener valor
  // Optional<Persona> persona = Optional.ofNullable("Pepe");

  // Si el optional no va a tener valor
  // Optional<Persona> persona = Optional.empty();

  // String saluda (Optional<Persona> persona) {
  // El método isPresent() devuelve true si el optional tiene valor
  // if (persona.isPresent()) {
  // return "Hola " + persona.get().getNombre();
  // } else {
  // return "Hola desconocido";
  // }
  // }

  // map: ejecuta una función si el optional tiene valor y devuelve un optional
  // con el resultado de la función, si no tiene valor devuelve un optional vacío
  // Optional<String> saluda (Optional<Persona> persona) {
  // return persona.map(it -> "Hola " + it.getNombre());
  // }

  // orElse: devuelve el valor del optional si tiene valor, si no tiene valor
  // devuelve el valor por defecto que le pasamos como parámetro
  // String saluda (Optional<Persona> persona) {
  // return persona.map(it -> "Hola " + it.getNombre()).orElse("Hola
  // desconocido");
  // }

  // Desglosar el map en dos map para que sea más legible el código
  // El método devuelve un optional con el resultado de la función
  // String saluda (Optional<Persona> persona) {
  // return persona.map(Persona::getNombre)
  // .map("Hola "::concat)
  // .orElse("Hola desconocido");
  // }

  // flatMap: ejecuta una función si el optional tiene valor y devuelve un
  // optional
  // con el resultado de la función, si no tiene valor devuelve un optional vacío
  // static class Persona {
  // private Optional<String> nombre;

  // Optional<String> getNombre() {
  // return nombre;
  // }
  // }

  // String saluda (Optional<Persona> persona) {
  // return persona.flatMap(Persona::getNombre)
  // .map("Hola "::concat)
  // .orElse("Hola desconocido");
  // }

}
