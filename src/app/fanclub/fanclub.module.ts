import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FanclubRoutingModule } from './fanclub-routing.module';
import { FanclubComponent } from './fanclub.component';


@NgModule({
  declarations: [FanclubComponent],
  imports: [
    CommonModule,
    FanclubRoutingModule
  ]
})
export class FanclubModule { }
