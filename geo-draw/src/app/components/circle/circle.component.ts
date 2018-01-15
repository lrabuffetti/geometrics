import { Component, OnInit, Input } from '@angular/core';
import { Parallelogram } from '../../classes/parallelogram'

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {

  @Input() points: Parallelogram;
  public pointStyles: object = {};

  constructor() { }

  ngOnInit() {
    this.pointStyles = {
      'width': this.points.getShortestLine() + 'px',
      'height': this.points.getShortestLine() + 'px',
      'background-color': '#FECC00',
    }
  }

}
