import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { LazyLoadGuard } from './guards/lazy-load.guard';
import { CreditsComponent } from './components/credits/credits.component';


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
    component : ServicesComponent,

  },
  {
    path: 'vision',
    loadChildren : () => import('./components/vision.module').then(m => m.VisionModule) // lazy loading ( assciate module containing the component only be loaded when route is visited )
  },
  {
    path : 'login',
    canLoad : [LazyLoadGuard],
    loadChildren: () => import('./components/login.module').then(m => m.LoginModule)
  },
  {
    path : 'credits',
    component : CreditsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
