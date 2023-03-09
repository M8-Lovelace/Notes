// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';

@NgModule({
  // Importación de los componentes
  declarations: [GifsPageComponent, BusquedaComponent, ResultadosComponent],
  // Exportación de los componentes
  exports: [GifsPageComponent],
  // Importación de módulos
  imports: [CommonModule],
  // Importación de servicios
  providers: [],
})
export class GifsModule {}
