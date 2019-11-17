import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [CharactersComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    FormsModule
  ]
})
export class CharactersModule { }
