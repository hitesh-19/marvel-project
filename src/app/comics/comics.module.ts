import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics.component';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [ComicsComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    FormsModule
  ]
})
export class ComicsModule { }
