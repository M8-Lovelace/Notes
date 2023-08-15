package Poo.ClassesAndObjects;

public class Automobile {
  String fabricante;
  String modelo;
  String color;
  double cilindrada;

  public void detalle() {
    // String modelo = "otro";
    System.out.println("auto.fabricante: " + this.fabricante);
    System.out.println("auto.modelo: " + this.modelo);
    System.out.println("auto.color: " + this.color);
    System.out.println("auto.cilindrada: " + this.cilindrada);
  }

}