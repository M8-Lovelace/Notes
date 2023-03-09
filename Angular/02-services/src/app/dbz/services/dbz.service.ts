import { Injectable } from '@angular/core';
import { PersonajeDBZ } from '../interfaces/dbz.interface';

// Decorador para indicar que es un servicio
@Injectable()
export class DbzService {
  // Propiedades
  private personajes: PersonajeDBZ[] = [
    { name: 'Gokú', power: 9000 },
    { name: 'Veggeta', power: 1000 },
  ];

  // Getters
  get personajesDBZ(): PersonajeDBZ[] {
    return [...this.personajes];
  }

  // Métodos
  addPersonajesDBZ(personaje: PersonajeDBZ) {
    this.personajes.push(personaje);
  }
}