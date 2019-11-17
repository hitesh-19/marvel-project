import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FanclubComponent } from './fanclub.component';
import { PostStoryComponent } from './post-story/post-story.component';


const routes: Routes = [
  { path: '', component: FanclubComponent},
  { path: 'post', component: PostStoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FanclubRoutingModule { }
