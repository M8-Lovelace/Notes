import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public deletedHeroe: string = '';

  borrarHeroe(): void {
    this.deletedHeroe = this.heroes.shift() || '';
  }
}
