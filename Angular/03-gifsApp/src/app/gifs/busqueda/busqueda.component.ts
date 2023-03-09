import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent {
  constructor(private giftService: GiftService) {}

  // Seleccionar una etiqueta del HTML y tratarla como un elemento de Angular / Input
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  @ViewChild('iptBusqueda') iptBusqueda!: ElementRef<HTMLInputElement>;

  // Retornamos el arreglo del historial
  get historial(): string[] {
    return [...this.historial];
  }

  // Método para actualizar el historial y hacer la búsqueda
  buscar(): void {
    const valor = this.txtBuscar.nativeElement.value;
    const limite = parseInt(this.iptBusqueda.nativeElement.value);

    if (valor.trim().length === 0) {
      return;
    }
    this.txtBuscar.nativeElement.value = '';
    this.iptBusqueda.nativeElement.value = '';
    this.giftService.buscarGifs(valor, limite);
  }
}
