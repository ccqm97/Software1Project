import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { CrearProveedorComponent } from './components/proveedores/crear-proveedor/crear-proveedor.component';
import { MostarProveedorComponent } from './components/proveedores/mostar-proveedor/mostar-proveedor.component';
import { EditarProveedorComponent } from './components/proveedores/editar-proveedor/editar-proveedor.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './components/producto/editar-producto/editar-producto.component';
import { MostrarProductosComponent } from './components/producto/mostrar-productos/mostrar-productos.component';
import { MostrarFacturaComponent } from './components/factura/mostrar-factura/mostrar-factura.component';
import { EditarFacturaComponent } from './components/factura/editar-factura/editar-factura.component';
import { CrearFacturaComponent } from './components/factura/crear-factura/crear-factura.component';
import { RestablecimientoComponent } from './components/restablecimiento/restablecimiento.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { ModificarUsuarioComponent } from './components/admin/modificar-usuario/modificar-usuario.component';
import { EliminarUsuarioComponent } from './components/admin/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: MostrarProductosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'agregarProveedor', component: CrearProveedorComponent},
  { path: 'mostrarProveedores', component: MostarProveedorComponent},
  { path: 'editarProveedor', component: EditarProveedorComponent},
  { path: 'agregarProducto', component: CrearProductoComponent},
  { path: 'mostrarProductos', component: MostrarProductosComponent},
  { path: 'editarProducto', component: EditarProductoComponent},
  { path: 'mostrarFacturas', component: MostrarFacturaComponent},
  { path: 'editarFactura', component: EditarFacturaComponent},
  { path: 'agregarFactura', component: CrearFacturaComponent},
  { path: 'restablecimiento', component: RestablecimientoComponent},
  { path: 'admin', component: HomeAdminComponent},
  { path: 'editarUsuario', component: ModificarUsuarioComponent},
  { path: 'eliminarUsuario', component: EliminarUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
