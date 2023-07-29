import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'services',
    // loadChildren:'src/app/modules/service-module#ServiceModule' // lazy loading
    component : ServicesComponent,

  },
  // {
  //   path: 'home',
  //   loadChildren : () => import('./components/home.module').then(m => m.HomeModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
