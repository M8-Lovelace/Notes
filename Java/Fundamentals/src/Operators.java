
// Importamos la libreria de JOptionPane
import java.util.Scanner;

import javax.swing.JOptionPane;

// Un operador lleva a cabo operaciones sobre uno (operador unario), dos
// (operador binario) o tres (operador ternario) datos u operandos de tipo
// primitvo devolviendo un valor determinado también de un tipo primitivo.

public class Operators {
    // --------------------------------------------------------------------//
    // --------------------- OPERADORES ARITMÉTICOS -----------------------//
    // Son los operadores con los cuales realizamos operaciones (+, -, *, /, %)
    // En el caso del operador de suma, también concatena cadenas de texto.
    public static void main(String[] args) {
        // Operadores aritméticos
        // + suma
        int i = 5, j = 4, suma = j + i;
        System.out.println("suma = " + suma); // 9
        System.out.println("i + j  = " + (i + j)); // 9

        // - resta
        int resta = i - j;
        System.out.println("resta = " + resta); // 1
        System.out.println("i - j = " + (i - j)); // 1

        // * multiplicación
        int multi = i * j;
        System.out.println("multi = " + multi); // 20

        // / división
        int divInt = i / j;
        System.out.println("divi = " + divInt); // 1

        // Forzamos el tipo int a un float
        float divfloat = (float) i / j;
        System.out.println("divfloat = " + divfloat); // 1.25

        // % módulo
        int resto = i % j;
        System.out.println("resto = " + resto); // 1

        resto = 8 % 5;
        System.out.println("resto = " + resto); // 3

        // Ingresa un número por ventana emergente
        int numero = Integer.parseInt(JOptionPane.showInputDialog("Ingrese un numero"));

        // Evalua si el número es par o impar
        if (numero % 2 == 0) {
            System.out.println("numero par = " + numero);
        } else {
            System.out.println("numero impar = " + numero);
        }
        System.out.println(" ");

        // --------------------------------------------------------------------//
        // --------------------- OPERADORES ASIGNACIÓN ------------------------//
        // Son los operadores con los cuales asignamos un valor a una variable
        int k = 5;
        int l = k + 4;
        System.out.println("k = " + k); // 5
        System.out.println("l = " + l); // 9

        k += 2; // k = k + 2;
        System.out.println("k = " + k); // 7

        k += 5; // k = k + 5;
        System.out.println("k = " + k); // 12

        l -= 4; // l = l - 4;
        System.out.println("l = " + l); // 5

        l *= 3; // l = l * 3;
        System.out.println("l = " + l); // 15

        String sqlString = "select * from clientes as c";
        sqlString += " where c.nombre = 'Andres' ";
        sqlString += "and c.activo=1";
        System.out.println("sqlString = " + sqlString); // select * from clientes
        // as c where c.nombre = 'Andres' and c.activo=1
        System.out.println(" ");

        // --------------------------------------------------------------------//
        // ---------------------- OPERADORES UNIARIOS -------------------------//
        // Son los operadores que se aplican a una sola variable. Los operadores
        // unarios son: ++, --, +, -, !, ~
        int a = -5;

        int e = +a; // e = (1) * a => -5
        System.out.println("e = " + e); // -5

        int o = -a; // o = (1) * a = 5;
        System.out.println("o = " + o); // 5

        a = 6;
        e = +a;
        System.out.println("e = " + e); // 6

        o = -a;
        System.out.println("o = " + o); // -6
        System.out.println(" ");

        // --------------------------------------------------------------------//
        // -------------------- OPERADORES INCREMENTALES ----------------------//
        // Son los operadores que incrementan o decrementan en 1 el valor de una
        // variable. Los operadores incrementales son: ++, --
        // Pre incremento.
        // Incrementa el valor de la variable y luego lo asigna a la variable.
        int b = 1;
        int c = ++b;

        System.out.println("b = " + b); // 2
        System.out.println("c = " + c); // 2

        // Post incremento.
        // Asigna el valor de la variable y luego incrementa el valor de la variable.
        b = 2;
        c = b++;
        System.out.println("b = " + b); // 3
        System.out.println("c = " + c); // 2

        // Pre decremento.
        // Decrementa el valor de la variable y luego lo asigna a la variable.
        b = 3;
        c = --b;

        System.out.println("b = " + b); // 2
        System.out.println("c = " + c); // 2

        // Post incremento.
        // Asigna el valor de la variable y luego decrementa el valor de la variable.
        b = 4;
        c = b--;
        System.out.println("b = " + b); // 3
        System.out.println("c = " + c); // 4

        System.out.println("++c = " + (++c)); // 5
        System.out.println("c++ = " + (c++)); // 5
        System.out.println("c = " + c); // 6
        System.out.println(" ");

        // --------------------------------------------------------------------//
        // --------------------- OPERADORES RELACIONALES ----------------------//
        // Son los operadores que se utilizan para comparar dos valores. Los
        // operadores relacionales son: >, <, >=, <=, ==, !=

        int i1 = 3;
        byte j1 = 7;
        float k1 = 127e-7f;
        double l1 = 2.1413e3;
        boolean m1 = false;

        boolean b1 = i1 == j1;
        System.out.println("b1 = " + b1); // false

        boolean b2 = !b1;
        System.out.println("b2 = " + b2); // true

        boolean b3 = i1 != j; // <>
        System.out.println("b3 = " + b3); // true

        boolean b4 = m1 == true;
        System.out.println("b4 = " + b4); // false

        boolean b5 = m1 != true;
        System.out.println("b5 = " + b5); // true

        boolean b6 = i1 > j1;
        System.out.println("b6 = " + b6); // false

        boolean b7 = i1 < j1;
        System.out.println("b7 = " + b7); // true

        boolean b8 = l1 >= k1;
        System.out.println("b8 = " + b8); // true
        System.out.println(" ");

        // --------------------------------------------------------------------//
        // --------------------- OPERADORES LÓGICOS ---------------------------//
        // AND (y), OR (o), NOT (no)

        boolean b9 = true && true;
        System.out.println("b9 = " + b9); // true

        boolean b10 = i1 >= j1 && m1 == true;
        System.out.println("b10 = " + b10); // false

        boolean b11 = i1 >= j1 || m1 == true;
        System.out.println("b11 = " + b11); // false

        boolean b12 = i1 >= j1 && m1 != true || l1 >= k1;
        System.out.println("b12 = " + b12); // true

        boolean b13 = !(i1 >= j1 && m1 != true || l1 >= k1);
        System.out.println("b13 = " + b13); // false

        // EJEMPLO LOGIN
        String[] usernames = { "edwin", "laura" };
        String[] passwords = { "12345", "54321" };

        // Definir un Scanner para poder leer valores del teclado
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese el username: ");

        // Leemos el valor que el usuario ingresa por consola
        String u = scanner.next();

        System.out.print("Ingrese el password: ");

        // Leemos el valor que el usuario ingresa por consola
        String p = scanner.next();

        // Si la condición es verdadera, esAutenticado es verdadero, sino es falso
        boolean esAutenticado = false;

        // Iteramos el arreglo para verificar si existe el username y password
        for (int ii = 0; ii < usernames.length; ii++) {
            esAutenticado = usernames[ii].equals(u) && passwords[ii].equals(p) ? true : esAutenticado;

            // if (usernames[ii].equals(u) && passwords[ii].equals(p)) {
            // esAutenticado = true;
            // break;
            // }
        }

        // Verificamos si esAutenticado es verdadero o falso
        String mensaje = esAutenticado ? "Bienvenido usuario ".concat(u).concat("!")
                : "Username o password incorrecto!";

        System.out.println("mensaje = " + mensaje);

        // Cerramos el Scanner
        scanner.close();
        System.out.println(" ");

        // --------------------------------------------------------------------//
        // --------------------- OPERADORES TERNARIOS -------------------------//

        // variable = condicion ? true: false;
        String variable = 7 == 5 ? "true" : "false";
        System.out.println("variable = " + variable); // false

        String estado = "";
        double promedio = 0.0;

        double matematicas = 0.0;
        double ciencias = 0.0;
        double historia = 0.0;

        matematicas = 5.5;
        ciencias = 6.0;
        historia = 4.5;

        promedio = (matematicas + ciencias + historia) / 3;

        estado = promedio >= 5.49 ? "Aprobado" : "Desaprobado";
        System.out.println("El promedio fue " + promedio + ", el estado es = " + estado); // Desaprobado

        // Operador ternario número mayor

        int max = 0;

        int num1 = 5;
        int num2 = 10;
        int num3 = 15;

        max = num1 > num2 ? num1 : num2;
        max = max > num3 ? max : num3;

        System.out.println("El número mayor es = " + max);
        System.out.println(" ");

        // --------------------------------------------------------------------//
        // --------------------- OPERADORES DE INSTANCIA ----------------------//
        // Son los operadores que se utilizan para saber si un objeto es de un
        // tipo determinado. Los operadores de instancia son: instanceof

        String texto = "Creando un objeto de la clase String...";
        Integer num = 7;

        boolean c1 = texto instanceof String;
        System.out.println("texto es del tipo String = " + c1); // true

        c1 = texto instanceof Object;
        System.out.println("num es del tipo Object = " + c1); // true

        c1 = num instanceof Integer;
        System.out.println("num es del tipo Integer = " + c1); // true
        System.out.println(" ");

        // Tipos abstractos
        Object fecha = new java.util.Date();
        Boolean boolea = false;
        // c1 = fecha instanceof Date; // Clase padre no implementada en Java SE
        System.out.println("fecha es del tipo Date = " + c1); // true
        c1 = fecha instanceof Object;
        System.out.println("fecha es del tipo Object = " + c1); // true
        c1 = boolea instanceof Boolean;
        System.out.println("boolea es del tipo Boolean = " + c1); // true
        c1 = boolea instanceof Object;
        System.out.println("boolea es del tipo Object = " + c1); // true
        System.out.println(" ");

        // --------------------------------------------------------------------//
        // ------------------- PRECEDENCIA DE OPERADORES ----------------------//
        // La precedencia de operadores es la siguiente:
        // 1. ()
        // 2. ++, -- (antes de la variable)
        // 3. ^
        // 4. *, /, %
        // 5. +, -
        // 6. <, <=, >, >=
        // 7. ==, !=
        // 8. &&
        // 9. ||
        // 10. =, +=, -=, *=, /=, %=
        // 11. ++, -- (después de la variable)

    }
}
