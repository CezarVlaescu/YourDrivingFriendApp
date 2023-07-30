import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisionComponent } from './vision/vision.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component :VisionComponent
    }])
  ]
})
export class VisionModule { }
