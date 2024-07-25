import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'aboutMe',
    component: AboutComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
];
