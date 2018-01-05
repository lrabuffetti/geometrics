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

    this.lines.push(line);
  }

  public lastPoint(point, line) {
    console.log('point:', point, 'line:', line);
    this.coordinates.push(
      {
        x: point.x + parseInt(line.styles.left.substring(0, line.styles.left.length - 2), 0),
        y: point.y + parseInt(line.styles.top.substring(0, line.styles.top.length - 2), 0)
      }
    )
    // let point2 = {
    //   x: parseInt(line.styles.left.substring(0, line.styles.left.length - 2), 0) - point.x,
    //   y: parseInt(line.styles.top.substring(0, line.styles.top.length - 2), 0) - point.y
    // }
    // this.drawLine(point, point2);
    this.newCoordinate.emit(this.coordinates)
  }

  constructor() { }

  ngOnInit() {
    this.lines = _.uniqBy(this.lines, function(e: any) { return e.id; });
    if (this.coordinates.length >= 1) {
      for (let i = 0; i < this.coordinates.length; i++) {
        if (i >= 1) {
          this.drawLine(this.coordinates[i - 1], this.coordinates[i]);
        }
      }
    }

    if (this.coordinates.length === 3) {
      this.lastPoint(_.head(this.coordinates), _.last(this.lines));
    }
  }

}
