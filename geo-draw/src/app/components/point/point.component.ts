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

    let id = 'line-' + new Date().getTime();

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

    let line = {
      'id': id,
      'styles': styles
    }

    console.log(this.lines, 'lines');
    this.lines.push(line);
  }

  public lastPoint() {
    console.log(this.coordinates, 'lastPoint');
    /**
     * We need to find the 4th point to close the parallellogram
     * so, we need to find that 4th coordinate and here is a simple
     * formula of how to do it, let's translate it to JS
     *
     * A(−2;4) , B(1;−2) and C(3;3) and D(x;y)
     * Since AD → = BD → AD → = BD →, you'll have
     * (Dx − Ax , Dy − Ay) = (Cx − Bx, Cy − By)
     * (Dx − Ax , Dy − Ay) = (Cx − Bx, Cy − By)
     * ⇒ (x − ( −2 ), y − 4) = (3 − 1, 3 − ( −2 ))
     * ⇒ (x − ( −2 ) , y − 4) = (3 − 1, 3 − ( −2 ))
     * ⇒ x − ( −2 ) = 3 − 1 and y − 4 = 3 − (−2) ⇒ S(0,9).
     */
    let A = this.coordinates[0];
    let B = this.coordinates[1];
    let C = this.coordinates[2];
    let D = {
      x: (C.x + A.x) - B.x,
      y: (C.y + A.y) - B.y
     };
    this.coordinates.push(D);
    //this.newCoordinate.emit(this.coordinates)
  }

  constructor() { }

  ngOnInit() {
    this.lines = _.uniqBy(this.lines, function(e: any) { return e.id; });
    if (this.coordinates.length >= 1 || this.coordinates.length < 3) {
      for (let i = 0; i < this.coordinates.length; i++) {
        if (i >= 1) {
          this.drawLine(this.coordinates[i - 1], this.coordinates[i]);
        }
      }
    }
    if (this.coordinates.length === 3) {
      this.lastPoint();
      this.drawLine(this.coordinates[2], this.coordinates[3]);
    }
  }

}
