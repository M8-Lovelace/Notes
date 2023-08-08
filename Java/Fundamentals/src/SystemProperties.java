import java.io.FileInputStream;
import java.util.Map;
import java.util.Properties;

public class SystemProperties {
  public static void main(String[] args) {
    // ------------------------- SISTEMA OPERATIVO ------------------------//

    // --------------------------------------------------------------------//
    // ------------------ OBTENER PROPIEDADES DEL SISTEMA -----------------//

    String username = System.getProperty("user.name");
    System.out.println("username = " + username);

    String home = System.getProperty("user.home");
    System.out.println("home = " + home);

    String workspace = System.getProperty("user.dir");
    System.out.println("workspace = " + workspace);

    String java = System.getProperty("java.version");
    System.out.println("java = " + java);

    String lineSeparator = System.getProperty("line.separator");
    String lineSeparator2 = System.lineSeparator();
    System.out.println("lineSeparator:" + lineSeparator2 + "Una línea nueva...");

    Properties pe = System.getProperties();
    pe.list(System.out);
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ------------------ ASIGNAR PROPIEDADES DEL SISTEMA -----------------//

    try {
      // Configurar archivo de propiedades
      FileInputStream archivo = new FileInputStream("src/config.properties");

      // Cargar archivo de propiedades
      Properties p = new Properties(System.getProperties());
      // Agregar propiedades al objeto properties
      p.load(archivo);
      // Asignar propiedades al sistema (sobreescribe las propiedades existentes)
      p.setProperty("mi.propiedad.personalizada", "Mi valor guardado en el objeto properties");
      // Setear propiedades al sistema
      System.setProperties(p);

      // Obtener propiedades del sistema
      Properties ps = System.getProperties();
      System.out.println("ps.getProperty(...) = " +
          ps.getProperty("mi.propiedad.personalizada"));
      // Obtener configuración especifica seteada en el archivo de propiedades
      System.out.println(System.getProperty("config.puerto.servidor"));
      System.out.println(System.getProperty("config.autor.nombre"));
      System.out.println(System.getProperty("config.autor.email"));

      ps.list(System.out);
    } catch (Exception e) {
      System.err.println("no existe el archivo = " + e);
      System.exit(1);
      // main(args); // Vuelve a ejecutar el main
    }
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ------------------ OBTENER VARIABLES DE AMBIENTE -------------------//

    // Obtener variables de ambiente del sistema
    Map<String, String> varEnv = System.getenv();
    System.out.println("Variables de ambiente del sistema = " + varEnv);

    System.out.println("------ Listando variables de entorno del sistema ------");

    // Setear variables por medio de la consola
    // setx SALUDAR_HOLA "Hola mundo desde la consola"

    // Listar variables de ambiente del sistema (solo funciona en windows)
    // El keyset es un conjunto de llaves que se pueden recorrer
    for (String key : varEnv.keySet()) {
      System.out.println(key + " => " + varEnv.get(key));
    }

    String username2 = System.getenv("USERNAME");
    System.out.println("username = " + username2);

    String javaHome = System.getenv("JAVA_HOME");
    System.out.println("javaHome = " + javaHome);

    String temDir = System.getenv("TEMP");
    System.out.println("temDir = " + temDir);

    String path = System.getenv("Path");
    System.out.println("path = " + path);

    String path2 = varEnv.get("Path");
    System.out.println("path2 = " + path2);

    // Creadas para una prueba
    String appEnv = varEnv.get("APPLICATION_ENV");
    System.out.println("appEnv = " + appEnv);

    String hola = varEnv.get("SALUDAR_HOLA");
    System.out.println("hola = " + hola);
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // --------------------------- CLASE RUNTIME --------------------------//

    // Obtener la instancia de la clase Runtime
    Runtime rt = Runtime.getRuntime();
    Process proceso;

    try {
      // Ejecutar un comando en el sistema operativo
      if (System.getProperty("os.name").toLowerCase().startsWith("windows")) {
        proceso = rt.exec("notepad");
      } else if (System.getProperty("os.name").toLowerCase().startsWith("mac")) {
        proceso = rt.exec("textedit");
      } else if (System.getProperty("os.name").toLowerCase().contains("nux") ||
          System.getProperty("os.name").toLowerCase().contains("nix")) {
        proceso = rt.exec("gedit");
      } else {
        proceso = rt.exec("gedit");
      }
      // Esperar a que el proceso termine
      proceso.waitFor();
    } catch (Exception e) {
      System.err.println("El comando es desconocido: " + e.getMessage());
      System.exit(1);
    }
    // Detectar si el proceso termino correctamente
    System.out.println("Se ha cerrado el editor");
    System.exit(0);
  }
}
