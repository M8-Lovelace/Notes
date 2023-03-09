public class Primitives {
  public static void main(String[] args) {
    // --------------------------------------------------------------------//
    // ------------------------------ENTEROS-------------------------------//
    // Byte | -128 a 127 | 8 bits | Byte | 0
    byte enteroByte = 127;
    // Short | -32,768 a 32,767 | 16 bits | Short | 0
    short enteroShort = 32767;
    // Int | -2,147,483,648 a 2,147,483,647 | 32 bits | Integer | 0
    int enteroInt = 2147483647;
    // Long | -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807 | 64 bits | Long | 0L
    long enteroLong = 9223372036854775807L;

    byte numeroByte = 7;
    System.out.println("numeroByte = " + numeroByte); // 7
    System.out.println("tipo byte corresponde en byte a :" + Byte.BYTES); // 1
    System.out.println("tipo byte corresponde en bites a : " + Byte.SIZE); // 8
    System.out.println("valor máximo de un byte : " + Byte.MAX_VALUE); // 127
    System.out.println("valor mínimo de un byte : " + Byte.MIN_VALUE); // -128
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // --------------------------NÚMEROS REALES----------------------------//
    // Guarda números reales en coma flotante con precisión simple y doble
    // Float | 1.4E-45 a 3.4028235E38 | 32 bits | Float | 0.0f
    float realFloat = 3.1416f;
    System.out.println("realFloat = " + realFloat); // 3.1416
    float realFloat2 = 1.5e4f;
    System.out.println("realFloat2 = " + realFloat2); // 15000.0
    float realFloat3 = 0.00000000015f;
    System.out.println("realFloat3 = " + realFloat3); // 1.5e-10f;

    // Double | 4.9E-324 a 1.7976931348623157E308 | 64 bits | Double | 0.0d
    double realDouble = 4.7029235E3;
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // -------------------------------CHAR---------------------------------//
    // Usa el código UNICODE y ocupa cada carácter 16 bits
    char aa = 'a';
    char bb = '1';
    char cc = '\u0021';
    System.out.println("cc = " + cc); // !
    char unicode = '\u0040';
    System.out.println("unicode = " + unicode); // @
    char decimal = 64;
    System.out.println("decimal = " + decimal); // @
    char simbolo = '@';
    System.out.println("símbolo = " + simbolo); // @
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // --------------------- FRECUENCIAS DE ESCAPE ------------------------//
    // \b Retroceso
    // \n Nueva línea
    // \r Retorno del carro
    // \t Tabulador
    // \\ Diagonal invertida
    // \" Comillas dobles

    // --------------------------------------------------------------------//
    // ------------------------------BOOLEAN-------------------------------//
    // Boolean: true, false, 1 bit | Boolean | false
    boolean a = false;
    boolean b = true;

    System.out.println("decimal = unicode = " + (decimal == unicode)); // true

    // --------------------------------------------------------------------//
    // ---------------------- PALABRAS RESERVADAS -------------------------//
    /* abstract | switch | synchronized | this | threadsafe | throw | transient
     * true | try | void | continue | boolean | break | byte | byvalue | case
     * catch | char | class | const | for | default | do | double | else | extends
     * false | final | finally | float | new | goto | if | implements | import
     * instaceof | int | interface | long | native | null | package | private
     * protected | public | return | short | static | super | while */
  }
};