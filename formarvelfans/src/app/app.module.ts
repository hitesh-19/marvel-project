import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CharactersModule } from './characters/characters.module';
import { ComicsModule } from './comics/comics.module';
import { FanclubModule } from './fanclub/fanclub.module';
import { LandingModule } from './landing/landing.module';
import { MoviesModule } from './movies/movies.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharactersModule,
    ComicsModule,
    FanclubModule,
    LandingModule,
    MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
