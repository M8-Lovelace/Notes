// Importamos la libreria de JOptionPane
import javax.swing.*;

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
        if(numero % 2 == 0){
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
    }
}

