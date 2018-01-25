import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as _ from 'lodash';
import { Parallelogram } from '../../classes/parallelogram'
import { Point } from '../../classes/point'

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {

  @Input() lines: any;
  @Input() coordinates: Parallelogram;
  @Output('update') newCoordinate = new EventEmitter<any>();
  @Input() indexPoint: any;

  constructor() { }

  ngOnInit() {
    //delete repeated lines
    this.lines = _.uniqBy(this.lines, function(e: any) { return e.id; });
    if (this.coordinates.length() >= 1 || this.coordinates.length() < 3) {
      let points = this.coordinates.getPoints();
      for (let i = 0; i < points.length; i++) {
        if (i >= 1) {
          //create the lines based on the points selected by the user
          this.lines.push(this.coordinates.drawLine(points[i - 1], points[i]));
        }
      }
    }
    if (this.coordinates.length() === 3) {
      let points = this.coordinates.getPoints();
      this.coordinates.lastPoint();
      this.coordinates.setWidth(this.coordinates.getLine(0).distance);
      this.coordinates.setHeight(this.coordinates.getLine(2).distance);
      this.newCoordinate.emit(this.coordinates);
      this.lines.push(this.coordinates.drawLine(points[2], points[3]));
    }
  }

}
