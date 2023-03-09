// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  // Importación de los componentes
  declarations: [SidebarComponent],
  // Exportación de los componentes
  exports: [SidebarComponent],
  // Importación de módulos
  imports: [CommonModule],
  // Importación de servicios
  providers: [],
})
export class SharedModule {}
