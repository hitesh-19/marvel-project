import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ComicsComponent],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    FormsModule
  ]
})
export class ComicsModule { }
