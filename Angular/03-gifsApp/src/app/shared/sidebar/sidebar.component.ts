// Angular
import { Component } from '@angular/core';
// Servicios
import { GiftService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private giftService: GiftService) {}

  // Obtener el historial del servicio
  get historial(): string[] {
    return this.giftService.historial;
  }

  // Método que recarga el historial y el resultado usando el método del service
  buscar(string: string) {
    this.giftService.buscarGifs(string);
  }
}
