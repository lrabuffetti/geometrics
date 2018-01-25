import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DrawAreaComponent } from './components/draw-area/draw-area.component';
import { PointComponent } from './components/point/point.component';
import { LineComponent } from './components/line/line.component';
import { ParallelogramComponent } from './components/parallelogram/parallelogram.component';
import { CircleComponent } from './components/circle/circle.component';

import { NgvasModule } from "ngvas";


@NgModule({
  declarations: [
    AppComponent,
    DrawAreaComponent,
    PointComponent,
    LineComponent,
    ParallelogramComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgvasModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
