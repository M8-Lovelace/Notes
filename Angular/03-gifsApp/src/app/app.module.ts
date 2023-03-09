// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';

// Módulos
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';

@NgModule({
  // Importación de los componentes
  declarations: [AppComponent],
  // Exportación de los componentes
  exports: [],
  // Importación de módulos
  imports: [BrowserModule, HttpClientModule, SharedModule, GifsModule],
  // Importación de servicios
  providers: [],
  // Carga del componente principal
  bootstrap: [AppComponent],
})
export class AppModule {}
