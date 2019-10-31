import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FanclubComponent } from './fanclub.component';


const routes: Routes = [
  { path: '', component: FanclubComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FanclubRoutingModule { }
