import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { OfertatrabajoComponent } from './pages/ofertatrabajo/ofertatrabajo.component';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'oferta-trabajo', component: OfertatrabajoComponent },
  { path: 'layout', component: LayoutComponent }

];
