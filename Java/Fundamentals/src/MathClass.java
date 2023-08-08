import java.util.Random;

public class MathClass {
  public static void main(String[] args) {

    int absoluto = Math.abs(-3); // 3
    absoluto = Math.abs(3); // 3

    double max = Math.max(3.5, 1.2); // 3.5
    double min = Math.min(3.5, 1.2); // 1.2
    double techo = Math.ceil(3.5); // 4.0
    double piso = Math.floor(3.5); // 3.0
    long entero = Math.round(Math.PI); // 3
    double exp = Math.exp(1); // 2.718281828459045
    double log = Math.log(10); // 2.302585092994046
    double potencia = Math.pow(10, 3); // 1000.0
    double raiz = Math.sqrt(5); // 2.23606797749979

    double grados = Math.toDegrees(1.57); // 89.95437383553924
    grados = Math.round(grados); // 90.0

    double radianes = Math.toRadians(90.00); // 1.5707963267948966

    System.out.println("sin(90): " + Math.sin(radianes)); // 1.0
    System.out.println("cos(90): " + Math.cos(radianes)); // 6.123233995736766E-17

    radianes = Math.toRadians(180.00); // 3.141592653589793
    System.out.println("cos(180): " + Math.cos(radianes)); // -1.0

    radianes = Math.toRadians(0.00); // 0.0
    System.out.println("cos(0): " + Math.cos(radianes)); // 1.0
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ---------------------------- RANDOM --------------------------------//

    String[] colores = { "azul", "amarillo", "rojo", "verde", "blanco", "negro" };

    double random = Math.random();
    System.out.println("random = " + random); // 0.6561376421413037
    random *= colores.length; // 3.936825852847822

    random = Math.floor(random); // 3.0

    System.out.println("colores = " + colores[(int) random]); // verde

    Random randomObj = new Random();
    int randomInt = 15 + randomObj.nextInt(25 - 15 + 1); // 18

    randomInt = randomObj.nextInt(colores.length); // 0
    System.out.println("colores = " + colores[randomInt]); // azul
  }
}
