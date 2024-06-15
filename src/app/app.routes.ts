import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';

export const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch:'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'restaurantes', component: RestaurantesComponent}
];
