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
import { AboutMeComponent } from './components/about-me/about-me.component';

import { AngularDraggableModule } from 'angular2-draggable';

import { DraggableDirective } from './directives/draggable.directive';
import { DropTargetDirective } from './directives/drop-target.directive';
import { DragService } from './directives/drag.service';

@NgModule({
  declarations: [
    AppComponent,
    DrawAreaComponent,
    PointComponent,
    LineComponent,
    ParallelogramComponent,
    CircleComponent,
    AboutMeComponent,
    DraggableDirective,
    DropTargetDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularDraggableModule,
  ],
  providers: [DragService],
  bootstrap: [AppComponent]
})
export class AppModule { }
