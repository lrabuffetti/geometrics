import { Component, OnInit, Input } from '@angular/core';
import { Parallelogram } from '../../classes/parallelogram'
import { Point } from '../../classes/point'
import * as _ from 'lodash';

@Component({
  selector: 'app-parallelogram',
  templateUrl: './parallelogram.component.html',
  styleUrls: ['./parallelogram.component.scss']
})
export class ParallelogramComponent implements OnInit {

  @Input() parallelogram: Parallelogram;
  public cWidth: number = 100;
  public cHeight: number = 100;
  public initPosition: Point;
  public pSides: any;

  constructor() { }

  ngOnInit() {
    console.log(this.parallelogram, this.parallelogram.getWidth(), this.parallelogram.getHeight())
    this.cWidth = this.parallelogram.getWidth();
    this.cHeight = this.parallelogram.getHeight();
    console.log(this.cWidth, this.cHeight)
    this.initPosition = this.parallelogram.getInitialPosition();
    this.pSides = this.parallelogram.getPoints();
  }

}
