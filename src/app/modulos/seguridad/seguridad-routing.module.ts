import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { IdentificacionUComponent } from './identificacion-u/identificacion-u.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

const routes: Routes = [
  {
    path:"identificacion",
    component:IdentificacionUComponent
  },
  {
    path:"cambio-clave",
    component:CambioClaveComponent
  },
  {
    path:"recuperar",
    component:RecuperarClaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
