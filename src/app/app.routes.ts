import { Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { CatalogoComponent } from './views/catalogo/catalogo.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  }
];
