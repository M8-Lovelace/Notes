import java.lang.reflect.Method;

public class Wrapper {
  public static void main(String[] args) {
    // --------------------------------------------------------------------//
    // ------------------------ WRAPPER INTEGER ---------------------------//
    // Es un objeto que contiene un valor primitivo de tipo int
    // No puedo convertir a un tipo menor que el valor que contiene el objeto

    int intPrimitivo = 32768;
    Integer intObjeto = Integer.valueOf(intPrimitivo);
    System.out.println("intObjeto = " + intObjeto); // 32768

    int num = intObjeto;
    System.out.println("num = " + num); // 32768
    int num2 = intObjeto.intValue();
    System.out.println("num2 = " + num2); // 32768

    String valorTvLcd = "67000";
    Integer valor = Integer.valueOf(valorTvLcd);
    System.out.println("valor = " + valor); // 67000

    Short shortObjeto = intObjeto.shortValue();
    System.out.println("shortObjeto = " + shortObjeto); // -32768

    Byte byteObjeto = intObjeto.byteValue();
    System.out.println("byteObjeto = " + byteObjeto); // 0

    Long longObjeto = intObjeto.longValue();
    System.out.println("longObjeto = " + longObjeto); // 32768
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ----------------------- AUTOBOXING INTEGER -------------------------//
    // Es la conversión automática que hace Java de un tipo primitivo a un objeto
    // Integer

    // Para convertir un tipo primitivo a un objeto Integer se usa el método
    // valueOf() de la clase Integer o el constructor de la clase Integer que recibe
    // un tipo primitivo
    Integer[] enteros = { Integer.valueOf(1), 2, 3, 4, 5, 6, 7,
        8, 9, 10, 11, 12, 13, 14, 15 };

    int suma = 0;

    // Para convertir un objeto Integer a un tipo primitivo se usa el método
    // intValue() de la clase Integer o se puede hacer un cast a int del objeto
    for (Integer i : enteros) {
      if (i.intValue() % 2 == 0) {
        // suma += i; // No se puede hacer un cast de un objeto Integer a un tipo
        // primitivo int
        suma += i.intValue();
      }
    }
    System.out.println("suma = " + suma); // 56

    // Se puede hacer un cast de un objeto Integer a un tipo primitivo int de la
    // siguiente manera
    suma = 0;
    for (Integer i : enteros) {
      if (i % 2 == 0) {
        suma += i;
      }
    }
    System.out.println("suma = " + suma); // 56
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ----------------- WRAPPER OPERADORES RELACIONALES ------------------//
    // Los operadores relacionales se pueden usar con objetos Integer y con tipos
    // primitivos int

    Integer num11 = Integer.valueOf(1000);
    Integer num22 = num11;

    System.out.println("num11 = " + num11); // 1000
    System.out.println("num22 = " + num22); // 1000

    System.out.println("Son el mismo objeto? " + (num11 == num22)); // true

    num22 = 1000;

    System.out.println("num11 = " + num11); // num11 = 1000
    System.out.println("num22 = " + num22); // num22 = 1000

    System.out.println("Son el mismo objeto? " + (num11 == num22)); // false

    System.out.println("tienen el mismo valor? " + (num11.equals(num22))); // true
    System.out.println("tienen el mismo valor? " + (num11.intValue() == num22.intValue())); // true

    num22 = 500;
    boolean condicion = num11 > num22;
    System.out.println("condicion = " + condicion); // true

    boolean condicion2 = num11.intValue() < num22.intValue();
    System.out.println("condicion2 = " + condicion2); // false
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ------------------------ WRAPPER BOOLEAN ---------------------------//
    // Es un objeto que contiene un valor primitivo de tipo boolean

    Integer nums1, nums2;
    nums1 = 1;
    nums2 = 2;

    boolean primBoolean = nums1 > nums2;
    Boolean objBoolean = Boolean.valueOf(primBoolean);
    Boolean objBoolean2 = Boolean.valueOf("false");
    Boolean objBoolean3 = true;

    System.out.println("primBoolean = " + primBoolean); // false
    System.out.println("objBoolean = " + objBoolean); // false
    System.out.println("objBoolean2 = " + objBoolean2); // false

    System.out.println("comparando dos objetos boolean: " + (objBoolean == objBoolean2)); // false
    System.out.println("comparando dos objetos boolean: " + (objBoolean.equals(objBoolean2))); // true
    System.out.println("comparando dos objetos boolean: " + (objBoolean2 == objBoolean3)); // false
    System.out.println("comparando dos objetos boolean: " + (objBoolean == objBoolean3)); // true

    boolean primBoolean2 = objBoolean2.booleanValue();
    System.out.println("primBoolean2 = " + primBoolean2); // false
    System.out.println(" ");

    // --------------------------------------------------------------------//
    // ------------------------- METODO GET CLASS -------------------------//
    // Devuelve el tipo de dato de un objeto

    String texto = "Hola que tal!";

    // Devuelve el tipo de dato de un objeto
    Class strClass = texto.getClass();

    // Devuelve el nombre de la clase del objeto
    System.out.println("strClass.getName() = " + strClass.getName()); // java.lang.String
    // Devuelve el nombre de la clase del objeto sin el paquete
    System.out.println("strClass.getName() = " + strClass.getSimpleName()); // String
    // Devuelve el nombre del paquete de la clase del objeto
    System.out.println("strClass.getName() = " + strClass.getPackageName()); // java.lang
    // Devuelve el nombre de la clase padre del objeto
    System.out.println("strClass.getName() = " + strClass); // class java.lang.String

    // Devuelve los métodos de la clase del objeto incluyendo los métodos de la
    // clase padre
    for (Method metodo : strClass.getMethods()) {
      System.out.println("metodo.getName() = " + metodo.getName());
    }

    Integer numOne = 34;
    // Devuelve el tipo de dato de un objeto
    Class intClass = numOne.getClass();
    // Devuelve el nombre de la clase del objeto
    Class objClass = intClass.getSuperclass().getSuperclass();
    System.out.println("intClass.getSuperclass().getSuperclass() = " + intClass.getSuperclass()); // class
                                                                                                  // java.lang.Number
    System.out.println("intClass.getSuperclass().getSuperclass() = " + objClass); // class java.lang.Object

    // Devuelve los métodos de la clase del objeto incluyendo los métodos de la
    // clase padre
    for (Method metodo : objClass.getMethods()) {
      System.out.println("metodo.getName() = " + metodo.getName());
    }

  }
}
