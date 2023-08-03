// Para esta tarea se pide ingresar una fecha de nacimiento en formato string, convertirla a una fecha del tipo java.util.Date y calcular la edad de la persona de acuerdo a la fecha actual.

// Intentar usar solo lo visto hasta el momento, no el api de java 8 que lo veremos mas adelante, también se pueden apoyar de google que hay varios ejemplos.

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

public class EleventhAssignment {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Ingrese su fecha de nacimiento (dd/MM/yyyy): ");
    String dateBirthStr = scanner.nextLine();

    // Convertir fecha de nacimiento string a objeto Date
    DateFormat formatDate = new SimpleDateFormat("dd/MM/yyyy");
    Date dateBirth = null;
    try {
      dateBirth = formatDate.parse(dateBirthStr);
    } catch (ParseException e) {
      System.out.println("Error al convertir la fecha. Asegúrese de ingresar el formato correcto (dd/MM/yyyy).");
      e.printStackTrace();
      System.exit(1);
    }

    scanner.close();

    // Obtener fecha actual
    Date dateCurrent = new Date();

    // Calcular edad
    int age = calculateAge(dateBirth, dateCurrent);

    System.out.println("Su edad es: " + age + " años.");
  }

  public static int calculateAge(Date dateBirth, Date dateCurrent) {
    // Convertir las fechas a milisegundos
    long millisecondsBirth = dateBirth.getTime();
    long millisecondsCurrent = dateCurrent.getTime();

    // Calcular diferencia en milisegundos entre la fecha actual y la fecha de
    // nacimiento
    long difference = millisecondsCurrent - millisecondsBirth;

    // Convertir diferencia a años
    int age = (int) (difference / (1000 * 60 * 60 * 24 * 365.25));

    return age;
  }
}