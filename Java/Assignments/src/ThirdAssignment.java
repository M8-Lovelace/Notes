
// Importanciones
import java.util.Scanner;

// Se requiere desarrollar un programa que reciba los nombres de 3 integrantes de tu familia o amigos como argumentos de línea de comandos.
// Se pide por cada nombre de la persona una nueva variable del tipo String al tomar el segundo carácter pero convertido en mayúscula y se le concatena un punto y los dos últimos caracteres de la persona. Por ejemplo para Andres debe quedar como N.es
// Debe imprimir como resultado los tres nuevos nombres separado con guion bajo (como una única variable).
// Ejemplo, un resultado final esperado para los nombres Andres, Maria y Pepe podría ser:
// N.es_A.ia_E.pe

public class ThirdAssignment {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Ingresa el primer nombre:");
    String name1 = scanner.nextLine();

    System.out.println("Ingresa el segundo nombre:");
    String name2 = scanner.nextLine();

    System.out.println("Ingresa el tercer nombre:");
    String name3 = scanner.nextLine();

    scanner.close();

    String newName1 = getNewNames(name1);
    String newName2 = getNewNames(name2);
    String newName3 = getNewNames(name3);

    String resultado = newName1 + "_" + newName2 + "_" + newName3;
    System.out.println("Resultado: " + resultado);
  }

  public static String getNewNames(String name) {
    if (name.length() < 2) {
      return "";
    }

    char secondCharacter = name.charAt(1);
    String newName = Character.toUpperCase(secondCharacter) + "." + name.substring(name.length() - 2);
    return newName;
  }
}
