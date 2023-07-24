// Obtener el nombre mas largo de tres personas, según los siguientes requerimientos:
// - Mediante el teclado pedir el nombre completo (nombre + apellido) de tres miembros de la familia 
// o amigos usando la clase JOptionPane y método showInputDialog().
// - Calcular e Imprimir el nombre de la persona que tenga el nombre más largo (en cantidad de caracteres)
// (Imprimir sólo uno de los tres, el de más caracteres en el nombre.)
// - Podría usar .split(" "); del objeto String para separar nombre y apellido en un arreglo, y con el 
// indice cero accedemos al nombre de la persona.
// - Restricción no usar loops en el desarrollo de la tarea.
// Ejemplo del resultado: "Guillermo Doe tiene el nombre más largo."

import javax.swing.JOptionPane;

public class SixthAssignment {
  public static void main(String[] args) {
    String fullName1 = JOptionPane.showInputDialog("Enter the full name of the first person:");
    String fullName2 = JOptionPane.showInputDialog("Enter the full name of the second person:");
    String fullName3 = JOptionPane.showInputDialog("Enter the full name of the third person:");

    String[] nameSurname1 = fullName1.split(" ");
    String[] nameSurname2 = fullName2.split(" ");
    String[] nameSurname3 = fullName3.split(" ");

    int nameLength1 = nameSurname1[0].length();
    int nameLength2 = nameSurname2[0].length();
    int nameLength3 = nameSurname3[0].length();

    int maxLength = Math.max(nameLength1, Math.max(nameLength2, nameLength3));

    if (maxLength == nameLength1) {
      JOptionPane.showMessageDialog(null, fullName1 + " has the longest name.");
    } else if (maxLength == nameLength2) {
      JOptionPane.showMessageDialog(null, fullName2 + " has the longest name.");
    } else {
      JOptionPane.showMessageDialog(null, fullName3 + " has the longest name.");
    }
  }
}
