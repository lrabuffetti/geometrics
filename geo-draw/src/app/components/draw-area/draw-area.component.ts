import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draw-area',
  templateUrl: './draw-area.component.html',
  styleUrls: ['./draw-area.component.scss']
})
export class DrawAreaComponent implements OnInit {

  public coordinates = []
  public showMaxItems: boolean = false

  public getPosition(e) {
    let cursorX: number;
    let cursorY: number;
    let that = this;
    if(this.coordinates.length < 3) {
      document.onclick = function(e) {
        that.coordinates.push({x: e.pageX, y: e.pageY})
      }
    } else {
      this.showMaxItems = true;
    }
  }

  resetPoints() {
    this.coordinates = [];
    this.showMaxItems = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
