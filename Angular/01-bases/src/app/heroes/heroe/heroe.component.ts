import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  public nombre: string = 'Lovelace';
  public edad: number = 20;

  // Getter para obtener los datos del heroe
  get nombreEdad(): string {
    return `${this.nombre.charAt(0).toUpperCase()}${this.nombre.slice(1)} - ${
      this.edad
    }`;
  }

  // Setter para el nombre
  set nombreEdad(nombre: string) {
    this.nombre = nombre;
  }
}