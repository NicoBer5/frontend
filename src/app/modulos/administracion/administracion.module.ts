import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { BuscarClienteComponent } from './cliente/buscar-cliente/buscar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { CrearVehiculoComponent } from './vehivculo/crear-vehiculo/crear-vehiculo.component';
import { BuscarVehiculoComponent } from './vehivculo/buscar-vehiculo/buscar-vehiculo.component';
import { EditarVehiculoComponent } from './vehivculo/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehivculo/eliminar-vehiculo/eliminar-vehiculo.component';


@NgModule({
  declarations: [
    CrearClienteComponent,
    BuscarClienteComponent,
    EliminarClienteComponent,
    EditarClienteComponent,
    CrearVehiculoComponent,
    BuscarVehiculoComponent,
    EditarVehiculoComponent,
    EliminarVehiculoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
