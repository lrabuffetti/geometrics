import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrawAreaComponent } from './components/draw-area/draw-area.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DrawAreaComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: '**', component: DrawAreaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
