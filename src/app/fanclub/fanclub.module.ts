import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FanclubRoutingModule } from './fanclub-routing.module';
import { FanclubComponent } from './fanclub.component';
import { AllPostComponent } from './all-post/all-post.component';
import { PostStoryComponent } from './post-story/post-story.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [FanclubComponent, AllPostComponent, PostStoryComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    FanclubRoutingModule
  ]
})
export class FanclubModule { }
