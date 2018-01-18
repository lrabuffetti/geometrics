import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { TweenMax } from 'gsap'
import * as _ from "lodash";
import { NgvasModule, tweens, hitAreas } from "ngvas";

@Component({
  selector: 'app-parallelogram',
  templateUrl: './parallelogram.component.html',
  styleUrls: ['./parallelogram.component.scss']
})
export class ParallelogramComponent implements OnInit {

  @Input() points;

  constructor() { }

  ngOnInit() {
    if (this.points.length === 4) {
      console.log(this.points)
    }
  }

}
