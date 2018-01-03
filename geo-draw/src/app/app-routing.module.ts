import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrawAreaComponent } from './components/draw-area/draw-area.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DrawAreaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
