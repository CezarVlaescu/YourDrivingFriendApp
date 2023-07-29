import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoverLeftComponent } from './cover-left/cover-left.component';
import { CoverRightComponent } from './cover-right/cover-right.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    HomeComponent,
    CoverLeftComponent,
    CoverRightComponent,
    AboutComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
