import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {

  @Input() lines: any;
  @Input() coordinates: any;
  @Output('update') newCoordinate = new EventEmitter<any>();
  private lastPointDistance: any;

  /**
   * Print the lines between each point the browser
   * @param  {any}    pointA [pair of points]
   * @param  {any}    pointB [pair of points]
   * @return {[lines]}        [updated array with the lines to be written]
   */
  private drawLine(pointA: any, pointB: any) {
    let x1 = pointA.x;
    let y1 = pointA.y;
    let x2 = pointB.x;
    let y2 = pointB.y;
    let m = (y1 - y2) / (x1 - x2); //slope of the segment;
    let angle = (Math.atan(m)) * 180 / (Math.PI); //angle of the line
    let d = Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2))); //length of the segment
    let transform;
    // the (css) transform angle depends on the direction of movement of the line
    if (x1 >= x2) {
      transform = (360 + angle) % 360;
    } else {
      transform = 180 + angle;
    }
    // id for the line
    let id = 'line-' + new Date().getTime();
    // css styles to draw the line with HTML
    let styles = {
      'left': x2 + 'px',
      'top': y2 + 'px',
      'width': d + 'px',
      'transform': 'rotate(' + transform + 'deg)',
      'transform-origin': '0px 0px',
      '-ms-transform': 'rotate(' + transform + 'deg)',
      '-ms-transform-origin': '0px 0px',
      '-moz-transform': 'rotate(' + transform + 'deg)',
      '-moz-transform-origin': '0px 0px',
      '-webkit-transform': 'rotate(' + transform + 'deg)',
      '-webkit-transform-origin': '0px 0px',
      '-o-transform': 'rotate(' + transform + 'deg)',
      '-o-transform-origin': '0px 0px',
      'height': '1px',
      'background-color': '#000',
    }
    // set the line object
    let line = {
      'id': id,
      'styles': styles
    }
    //add the line to the array
    this.lines.push(line);
  }

  public lastPoint() {
    console.log(this.coordinates);
    // Formula of parallelogram to understand the logic
    // Since PS→=QR→, you'll have
    // (Sx−Px,Sy−Py)=(Rx−Qx,Ry−Qy) ⇒
    // (x−(−2),y−4)=(3−1,3−(−2)) ⇒
    // x−(−2)=3−1 and y−4=3−(−2)⇒S(0,9).
    let P = this.coordinates[0];
    let Q = this.coordinates[1];
    let R = this.coordinates[2];
    let S = {}
    // this.newCoordinate.emit(this.coordinates)
  }

  constructor() { }

  ngOnInit() {
    //delete repeated lines
    this.lines = _.uniqBy(this.lines, function(e: any) { return e.id; });
    if (this.coordinates.length >= 1) {
      for (let i = 0; i < this.coordinates.length; i++) {
        if (i >= 1) {
          //create the lines based on the points selected by the user
          this.drawLine(this.coordinates[i - 1], this.coordinates[i]);
        }
      }
    }
    // as the user only select 3 point, to graph a parallelogram we need to
    // calculate the last point in order to complete the graph
    if (this.coordinates.length === 3) {
      this.lastPoint();
    }
  }

}
