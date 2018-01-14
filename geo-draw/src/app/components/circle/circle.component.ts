import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {

  @Input() points;

  constructor() { }

  ngOnInit() {
    let canvas = document.getElementById('circle');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle='#FECC00';
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }

}
