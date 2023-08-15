package Poo.ClassesAndObjects;

public class ExampleAutomobile {
  public static void main(String[] args) {
    Automobile subaru = new Automobile();
    subaru.fabricante = "Ford";
    subaru.modelo = "Mustang";
    subaru.color = "Rojo";
    subaru.cilindrada = 5.0;

    Automobile mazda = new Automobile();
    mazda.fabricante = "Mazda";
    mazda.modelo = "CX-5";
    mazda.color = "Blanco";
    mazda.cilindrada = 2.5;

    subaru.detalle();
    mazda.detalle();
  }
}
