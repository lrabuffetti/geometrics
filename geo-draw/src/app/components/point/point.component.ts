import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {

  @Input() lines: any
  @Input() coordinates: any

  private drawLine(pointA: any, pointB: any, /*e: any*/) {
    //e.stopPropagation();
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
      'left': x2,
      'top': y2,
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

  constructor() { }

  ngOnInit() {
    console.log(this.lines, this.coordinates)
    if (this.coordinates.length >= 1) {
      for (let i = 0; i < this.coordinates.length; i++) {
        if (i >= 1) {
          this.drawLine(this.coordinates[i - 1], this.coordinates[i]);
        }
      }
    }
  }

}
