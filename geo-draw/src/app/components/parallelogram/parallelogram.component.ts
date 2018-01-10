import { Component, OnInit } from '@angular/core';
import { NgvasModule, tweens, hitAreas } from "ngvas";

@Component({
  selector: 'app-parallelogram',
  templateUrl: './parallelogram.component.html',
  styleUrls: ['./parallelogram.component.scss']
})
export class ParallelogramComponent implements OnInit {

  private i = 0;
  private _size = [20, 80, 20, 80];
  private _xy = [[0, -300], [300, 0], [0, 300], [-300, 0]];
  private _fill = [0xff0000, 0xffff00, 0x00ff00, 0x0000ff];

  public size: any = [this._size[0], this._size[0]];
  public rotate: any = 0;
  public xy: any = [100, 100];
  public fill: any = this._fill[0];
  public stroke: any = { width: this._size[0] / 4, style: this._fill[this.i] };

  public squareFill = 0x666666;
  public squareTranslate = [250, 250];

  public pixelHitArea = hitAreas.PixelHitArea;
  public onClick(e: MouseEvent): void {
    console.log(e);
    this.squareTranslate =
      [
        [0, -100], 500, tweens.easings.easeOutCircular,
        () => this.squareTranslate = [[0, 100], 800, tweens.easings.easeOutBounce]
      ];
  }

  public onMouseEnter(e: MouseEvent): void {
    this.squareFill = 0x009900;
  }

  public onMouseLeave(e: MouseEvent): void {
    this.squareFill = 0x666666;
  }

  constructor() { }

  ngOnInit() {
  }

}
