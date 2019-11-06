import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { LandingModule } from './landing/landing.module';
import { MoviesModule } from './movies/movies.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FanclubModule } from './fanclub/fanclub.module';
import { ComicsModule } from './comics/comics.module';
import { CharactersModule } from './characters/characters.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MoviesModule,
    LandingModule,
    FanclubModule,
    ComicsModule,
    CharactersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
