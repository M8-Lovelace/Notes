import { Component } from '@angular/core';
import { PersonajeDBZ } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  get personajes(): PersonajeDBZ[] {
    return this.dbzService.personajesDBZ;
  }

  constructor(private dbzService: DbzService) {}
}