import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: '', redirectTo: '/landing', pathMatch: 'full'},
  { path: '', loadChildren: './landing/landing.module#LandingModule' },
  { path: 'fanclub', loadChildren: './fanclub/fanclub.module#FanclubModule' },
  { path: 'movies', loadChildren: './movies/movies.module#MoviesModule' },
  { path: 'comics', loadChildren: './comics/comics.module#ComicsModule' },
  { path: 'characters', loadChildren: './characters/characters.module#CharactersModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
