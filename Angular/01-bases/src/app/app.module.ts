import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importancion de componentes
import { AppComponent } from './app.component';

// Importación de un módulo de Angular
import { HeroesModule } from './heroes/heroes.module';

// Importación del módulo de contador
import { ContadorModule } from './contador/contador.module';

// Decorador
@NgModule({
  // Componentes
  declarations: [AppComponent],
  // Módulos
  imports: [BrowserModule, HeroesModule, ContadorModule],
  // Servicios
  providers: [],
  // Componente principal
  bootstrap: [AppComponent],
})
export class AppModule {}