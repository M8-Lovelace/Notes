import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Scanner;

public class DateAndCalendar {
  public static void main(String[] args) {
    // --------------------------------------------------------------------//
    // ------------------------- JAVA UTIL DATE ---------------------------//
    // La clase Date de Java se encuentra en el paquete java.util y nos permite
    // trabajar con fechas y horas. Esta clase tiene varios constructores, pero
    // el más utilizado es el que no recibe parámetros, ya que nos permite
    // obtener la fecha y hora actual del sistema.

    Date fecha = new Date();

    System.out.println("fecha = " + fecha); // Tue Aug 01 18:09:56 COT 2023

    // Para darle un formato a la fecha, podemos utilizar la clase SimpleDateFormat
    // EEEE: día de la semana
    // dd: día del mes
    // MMMM: mes
    // yyyy: año
    SimpleDateFormat df = new SimpleDateFormat("EEEE dd 'de' MMMM, yyyy");

    // Pasamos la fecha como parámetro al método format de la clase SimpleDateFormat
    String fechaStr = df.format(fecha);

    long j = 0;
    for (int i = 0; i < 100000000; i++) {
      j += i;
    }
    System.out.println("j = " + j); // 4999999950000000

    // GET TIME

    Date fecha2 = new Date();
    // Restamos la fecha2 menos la fecha para saber cuánto tiempo tardó en
    // ejecutarse
    long tiempoFinal = fecha2.getTime() - fecha.getTime();
    // Tiempo transcurrido en el for = 0
    System.out.println("Tiempo transcurrido en el for = " + tiempoFinal);
    System.out.println("fechaStr = " + fechaStr); // martes 01 de agosto, 2023
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ----------------------- JAVA UTIL CALENDAR -------------------------//
    // La clase Calendar de Java se encuentra en el paquete java.util y nos
    // permite trabajar con fechas y horas. Esta clase tiene varios métodos
    // estáticos que nos permiten obtener una instancia de la clase Calendar.

    Calendar calendario = Calendar.getInstance();

    // Se puede utilizar el método set para asignar valores a los campos de la
    // fecha y hora en una sola línea de código
    // calendario.set(2019, Calendar.SEPTEMBER, 25, 18, 20, 10);

    // Otra forma es asignar los valores uno por uno
    calendario.set(Calendar.YEAR, 2020);
    calendario.set(Calendar.MONTH, Calendar.MARCH);
    calendario.set(Calendar.DAY_OF_MONTH, 25);

    calendario.set(Calendar.HOUR, 7);
    calendario.set(Calendar.AM_PM, Calendar.PM);
    calendario.set(Calendar.MINUTE, 20);
    calendario.set(Calendar.SECOND, 10);
    calendario.set(Calendar.MILLISECOND, 125);

    Date fechas = calendario.getTime();
    System.out.println("fecha sin formato = " + fechas); // Wed Mar 25 19:20:10 COT 2020

    // Para darle un formato a la fecha, podemos utilizar la clase SimpleDateFormat
    // EEEE: día de la semana
    // dd: día del mes
    // MMMM: mes
    // yyyy: año
    SimpleDateFormat formato = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss:SSS a");
    String fechaConFormato = formato.format(fechas);
    System.out.println("fecha Con Formato = " + fechaConFormato); // 2020-03-25 07:20:10:125 PM

    // Capturar fecha actual del sistema
    Calendar calActual = Calendar.getInstance();
    Date fechas2 = calActual.getTime();

    // Comparar fechas con after, before y equals
    if (fechas.after(fechas2)) {
      System.out.println("fecha1 (del usuario) es después que fecha2 (actual)");
    } else if (fechas.before(fechas2)) {
      System.out.println("fecha es anterior que fecha2");
    } else if (fechas.equals(fechas2)) {
      System.out.println("fecha es igual a fecha2");
    }

    // Comparar fechas con compareTo
    if (fechas.compareTo(fechas2) > 0) {
      System.out.println("fecha1 (del usuario) es después que fecha2 (actual)");
    } else if (fechas.compareTo(fechas2) < 0) {
      System.out.println("fecha es anterior que fecha2");
    } else if (fechas.compareTo(fechas2) == 0) {
      System.out.println("fecha es igual a fecha2");
    }

    // --------------------------------------------------------------------//
    // --------------------- JAVA UTIL DATE PARSE -------------------------//
    // Recibe como parámetro un String con el formato de la fecha y hora que
    // queremos obtener y devuelve un objeto de tipo Date con la fecha y hora

    Scanner s = new Scanner(System.in);
    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

    System.out.println("Ingrese una fecha con formato 'yyyy-MM-dd'");
    try {
      Date fecha11 = format.parse(s.next());
      System.out.println("fecha11 = " + fecha11);
      System.out.println("format = " + format.format(fecha11));

      Date fecha22 = new Date();
      System.out.println("fecha22 = " + fecha22);

      s.close();

      if (fecha11.after(fecha22)) {
        System.out.println("fecha11 (del usuario) es después que fecha22 (actual)");
      } else if (fecha11.before(fecha22)) {
        System.out.println("fecha11 es anterior que fecha22");
      } else if (fecha11.equals(fecha22)) {
        System.out.println("fecha11 es igual a fecha22");
      }

      if (fecha11.compareTo(fecha22) > 0) {
        System.out.println("fecha11 (del usuario) es después que fecha22 (actual)");
      } else if (fecha11.compareTo(fecha22) < 0) {
        System.out.println("fecha11 es anterior que fecha22");
      } else if (fecha11.compareTo(fecha22) == 0) {
        System.out.println("fecha11 es igual a fecha22");
      }

    } catch (ParseException e) {
      // e.printStackTrace();
      System.err.println("La fecha11 tiene un formato incorrecto: " + e.getMessage());
      System.err.println("El formato debe ser 'yyyy-MM-dd'");
      System.exit(1);
      // main(args);
    }
  }
}
