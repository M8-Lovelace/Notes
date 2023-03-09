import { Component } from '@angular/core';
import { GiftService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent {
  constructor(private giftService: GiftService) {}

  get resultados() {
    return this.giftService.resultados;
  }
}
