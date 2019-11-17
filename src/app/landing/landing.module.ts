import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [LandingComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule
  ]
})
export class LandingModule { }
