import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarClienteComponent } from './cliente/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { BuscarVehiculoComponent } from './vehivculo/buscar-vehiculo/buscar-vehiculo.component';
import { CrearVehiculoComponent } from './vehivculo/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehivculo/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehivculo/eliminar-vehiculo/eliminar-vehiculo.component';

const routes: Routes = [
  {
    path:"crear-cliente",
    component:CrearClienteComponent
  },
  {
    path:"buscar-cliente",
    component:BuscarClienteComponent
  },
  {
    path:"editar-cliente",
    component:EditarClienteComponent
  },
  {
    path:"eliminar-cliente",
    component:EliminarClienteComponent
  },
  {
    path:"crear",
    component:CrearVehiculoComponent
  },
  {
    path:"buscar",
    component:BuscarVehiculoComponent
  },
  {
    path:"editar",
    component:EditarVehiculoComponent
  },
  {
    path:"eliminar",
    component:EliminarVehiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
