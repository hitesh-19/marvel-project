import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  // { path: '', redirectTo: '/landing', pathMatch: 'full'},
  { path: '', loadChildren: './landing/landing.module#LandingModule' },
  { path: 'fanclub', loadChildren: './fanclub/fanclub.module#FanclubModule', canActivate: [AuthGuard] },
  { path: 'movies', loadChildren: './movies/movies.module#MoviesModule', canActivate: [AuthGuard] },
  { path: 'comics', loadChildren: './comics/comics.module#ComicsModule', canActivate: [AuthGuard] },
  { path: 'characters', loadChildren: './characters/characters.module#CharactersModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
