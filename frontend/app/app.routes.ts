import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const app_routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Cambiar plan'
    }
  },
  { path: '**', pathMatch: 'full', redirectTo: '', component: NotFoundComponent, }
];


export const APP_ROUTING = RouterModule.forRoot(app_routes);

