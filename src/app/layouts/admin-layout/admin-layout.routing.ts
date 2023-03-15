import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ComprasDetalleComponent } from '../../compras/compras-detalle/compras-detalle.component';
import { DepartamentoComponent } from '../../departamento/departamento.component';
import { FormularioProductoComponent } from '../../formularios/formulario-producto/formulario-producto.component';
import { VentasDetalleComponent } from '../../ventas/ventas-detalle/ventas-detalle.component';
import { VentasEncabezadoComponent } from '../../ventas/ventas-encabezado/ventas-encabezado.component';
import { FormularioUsuarioComponent } from '../../formularios/formulario-usuario/formulario-usuario.component';
import { ComprasEncabezadoComponent } from '../../compras/compras-encabezado/compras-encabezado.component';

export const AdminLayoutRoutes: Routes = [ 
    { path: 'dashboard',           component: DashboardComponent },
    { path: 'compras-detalle',     component: ComprasDetalleComponent},
    { path: 'compras-encabezado',  component: ComprasEncabezadoComponent},
    { path: 'departamento',        component: DepartamentoComponent},
    { path: 'formulario-producto', component: FormularioProductoComponent},
    { path: 'formulario-usario',   component: FormularioUsuarioComponent},
    { path: 'ventas-detalle',      component: VentasDetalleComponent},
    { path: 'ventas-encabezado',   component: VentasEncabezadoComponent},
    { path: 'upgrade',             component: UpgradeComponent },
    { path: 'notifications',       component: NotificationsComponent },
    { path: 'maps',                component: MapsComponent },
    { path: 'icons',               component: IconsComponent },
    { path: 'typography',          component: TypographyComponent },
    { path: 'table-list',          component: TableListComponent },
    { path: 'user-profile',        component: UserProfileComponent }
];
