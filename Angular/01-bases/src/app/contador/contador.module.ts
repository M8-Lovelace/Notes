// Para usar directivas
import { CommonModule } from '@angular/common';
// Para usar el decorador
import { NgModule } from '@angular/core';

// Componente del módulo
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  // Componentes
  declarations: [ContadorComponent],
  // Componentes visibles
  exports: [ContadorComponent],
  // Módulos que se importan
  imports: [CommonModule],
})
export class ContadorModule {}