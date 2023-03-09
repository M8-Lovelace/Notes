// Para poder usar las directivas
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { ContadorModule } from '../contador/contador.module';

@NgModule({
  // Componentes, Pipes, Directivas
  declarations: [HeroeComponent, ListadoComponent],
  // Cosas visibles
  exports: [HeroeComponent, ListadoComponent],
  // Módulos
  imports: [CommonModule, ContadorModule],
})
export class HeroesModule {}