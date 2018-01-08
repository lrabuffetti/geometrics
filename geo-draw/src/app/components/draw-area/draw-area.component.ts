import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-draw-area',
  templateUrl: './draw-area.component.html',
  styleUrls: ['./draw-area.component.scss']
})
export class DrawAreaComponent implements OnInit {
  public coordinates = [];
  public lines = [];
  public showMaxItems: boolean = false;
  public newCoordinates = [];

  public getPosition(e: any) {
    let cursorX: number;
    let cursorY: number;
    let that = this;

    if (this.coordinates.length < 3) {
      document.onclick = function(e) {
        that.coordinates.push({ x: e.pageX, y: e.pageY })
      }
    } else {
      e.stopPropagation();
      this.showMaxItems = true;
    }

  }

  public resetPoints(e: any) {
    this.coordinates = [];
    this.lines = [];
    e.stopPropagation();
    this.showMaxItems = false;
  }

  public pointPosition(item) {
    let style = {
      'top': item.y + 'px',
      'left': item.x + 'px'
    }

    return style;
  }

  public newCoordinate(event) {
    this.newCoordinates = event;
    this.coordinates = this.newCoordinates;
  }

  public trackByFn(index, item) {
    return index;
  }

  constructor() { }

  ngOnInit() {
  }

}
