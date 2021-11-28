import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './plantilla-maestra/nav-bar/nav-bar.component';
import { PiePaginaComponent } from './plantilla-maestra/pie-pagina/pie-pagina.component';
import { InicioComponent } from './plantilla-maestra/inicio/inicio.component';
import { ErrorComponent } from './plantilla-maestra/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
