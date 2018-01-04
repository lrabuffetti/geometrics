import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DrawAreaComponent } from './components/draw-area/draw-area.component';
import { PointComponent } from './components/point/point.component';
import { LineComponent } from './components/line/line.component';


@NgModule({
  declarations: [
    AppComponent,
    DrawAreaComponent,
    PointComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
