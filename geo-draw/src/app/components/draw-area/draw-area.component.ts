import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { Parallelogram } from '../../classes/parallelogram';
import { Point } from '../../classes/point';

@Component({
  selector: 'app-draw-area',
  templateUrl: './draw-area.component.html',
  styleUrls: ['./draw-area.component.scss']
})
export class DrawAreaComponent implements OnInit {
  //variable to store the coordinates points on the plain
  public coordinates: Parallelogram = new Parallelogram([], []);
  // this will be a variable to controll that the user can not put more than
  // just 3 points
  public showMaxItems: boolean = false;
  // just to be safe that we don't overide our primary array on the calculation
  // of the last point in the child component.
  // otherwise, space/time continous could be compromissed.
  public newCoordinates: Parallelogram = new Parallelogram([], []);

  private ctx: CanvasRenderingContext2D;
  private circle: CanvasRenderingContext2D;

  public cWidht: number = 0;
  public cHeight: number = 0;

  public preventDefaultEvent = false;
  public draggable = true;

  @ViewChild('parallelogram') public canvas: ElementRef;
  @ViewChild('circle') public canvas2: ElementRef;

  constructor(private cdr: ChangeDetectorRef) { }

  /**
   * This is the genesis of the main function, it capture the clicks and set
   * the positions of them in an array to be printed on the draw area
   * (I like to do funny comments)
   * @param  {event}    e [it's the event captured]
   * @return {[array]}   [we don't return anything, we just fill an array]
   */
  public getPosition(e: any) {
    let cursorX: number; // x point
    let cursorY: number; // y point
    let that = this; // we don't won't to change or interfeer with our scope

    // stop at 3th click
    if (this.coordinates.length() < 3) {
      document.onclick = function(e) {
        let point = new Point(e.pageX, e.pageY);
        that.coordinates.setPoint(point);
        that.setCanvasPoint(e);
      }
    } else { //no more clicks I said
      e.stopPropagation();
      this.showMaxItems = true;
    }
  }

  /**
   * ALL TO 0, it's like an atomic bomb, except that you don't have to clean
   * the mess
   * @param  {event}    e [event of the action]
   * @return {[type]}   [description]
   */
  public resetPoints(e: any) {
    this.coordinates.deletePoints();
    e.stopPropagation(); // it's a button action, without this, point of caos will be executed
    this.showMaxItems = false;
    this.ctx.clearRect(0, 0, 1000, 1000);
    this.circle.clearRect(0, 0, 1000, 1000);
  }

  public preventClick(e) {
    e.stopPropagation(); // it's a button action, without this, point of caos will be executed
  }

  /**
   * Here we set the position of each point in the plain
   * the meaning of the universe as we know it
   * it just print the styles on the HTML
   * @param  {[object]} item [a point object with x and y values]
   * @return {[object]}      [return styles for the points position]
   */
  public pointPosition(item) {
    return {
      'top': item.y + 'px',
      'left': item.x + 'px',
    }
  }

  /**
   * This is the function we use to position the circle in the middle of the parallelogram
   * some may ask why is not in the circle class/component, I think that the elements and their
   * positions belogs to the draw-area.
   * @param  {[object]} item [description]
   * @return {[object]}      [description]
   */
  public circlePosition(item) {
    let style = {
      'top': item.y + 'px',
      'left': item.x + 'px',
      'margin-top': -(this.coordinates.getShortestLine() / 2) + 'px',
      'margin-left': -(this.coordinates.getShortestLine() / 2) + 'px',
    }
    return style;
  }

  /**
   * this is the most interesting function, why?
   * because it takes a value calculated on the children to perform
   * data binding and also, the math on the child method is reaaaaaally awesome!
   * you will see it!
   * @param  {[array]} event [angular call event to the object returned]
   * @return {[array]}       [add last point to the array to finish the parallellogram]
   */
  public newCoordinate(event) {
    this.newCoordinates = event;
    this.coordinates = this.newCoordinates;
  }

  /**
   * simple function to demostrate that every ngFor needs to be track in order
   * of performance and organization and ... nothing else, just that.
   */
  public trackByFn(index, item) {
    return index;
  }

  /**
   * This function makes the translation of the point
   * @param  event [dom element to transform]
   * @param  index [number of point to be transform]
   * @return       [We return a DOM transform based on the drag and drop]
   */
  public onStop(event, index) {
    let movedPoint = document.getElementById('point-' + index),
      dragPosition = movedPoint.getBoundingClientRect(),
      newPoint = new Point(dragPosition.left, dragPosition.top);
    this.ctx.clearRect(0, 0, 1000, 1000);
    this.circle.clearRect(0, 0, 1000, 1000);
    document.getElementById('point-' + index).removeAttribute('style');
    this.coordinates.updatePointPosition(newPoint, index);
  }

  /**
   * Print the canvas point
   * @param  e [dom properties of the element]
   * @return   [points on the canvas]
   */
  public setCanvasPoint(e: any) {
    this.ctx.beginPath();
    this.ctx.arc((e.pageX - this.canvas.nativeElement.offsetLeft), e.pageY, 5, 0, 2 * Math.PI);
    this.circle.fillStyle = '#FF0000';
    this.circle.fill();
    this.ctx.stroke();
  }

  /**
   * Based on the 3 points, we calculate the last canvas point
   * @return [description]
   */
  private setLastCanvasPoint() {
    let points = this.coordinates.getDraggedPoints()
    this.ctx.beginPath();
    this.ctx.arc((points[3].x - this.canvas.nativeElement.offsetLeft), points[3].y, 5, 0, 2 * Math.PI);
    this.circle.fillStyle = '#FF0000';
    this.circle.fill();
    this.ctx.stroke();
  }

  /**
   * This function prints the lines to create the parallelogram
   * @return [A canvas parallelogram on the main board]
   */
  public drawCanvasLines() {

    let points = this.coordinates.getPoints();

    // initialice the canvas draw
    this.ctx.beginPath();
    // we move through the canvas making the lines
    this.ctx.moveTo((points[0].x - this.canvas.nativeElement.offsetLeft), points[0].y);
    this.ctx.lineTo((points[1].x - this.canvas.nativeElement.offsetLeft), points[1].y);
    this.ctx.lineTo((points[2].x - this.canvas.nativeElement.offsetLeft), points[2].y);
    this.ctx.lineTo((points[3].x - this.canvas.nativeElement.offsetLeft), points[3].y);
    this.ctx.lineTo((points[0].x - this.canvas.nativeElement.offsetLeft), points[0].y);
    // we close the lines and we colour the figure
    this.ctx.closePath();
    this.ctx.fillStyle = '#006AA7';
    this.ctx.fill();
    this.ctx.stroke();
  }

  /**
   * This function prints the circle inside the canvas parallelogram
   * @return [a circle inside the parallelogram]
   */
  public drawCircleCanvas() {
    let center = this.coordinates.getCenterOfMass();
    let width = this.coordinates.getShortestLine();
    this.circle.beginPath();
    this.circle.arc((center.getX() - this.canvas.nativeElement.offsetLeft), center.getY(), (width / 2), 0, 2 * Math.PI);
    this.circle.closePath();
    this.circle.fillStyle = '#FECC00';
    this.circle.fill();
    this.circle.stroke();
  }

  /**
   * Here we initialice the variables we need before the DOM is rendered
   */
  ngOnInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.ctx = canvasEl.getContext('2d');
    this.circle = canvasEl.getContext('2d');
    this.cWidht = document.getElementById('draw-board').offsetWidth;
    this.cHeight = document.getElementById('draw-board').offsetHeight;
  }

  /**
   * This a simple observable of DOM changes in order to perform actions after move elements.
   * @return [description]
   */
  ngAfterViewChecked() {
    this.cdr.detectChanges(); // we need to update content after methods executions
    if (this.coordinates.length() === 4) {
      this.setLastCanvasPoint();
      this.drawCanvasLines();
      this.drawCircleCanvas();
    }
  }

}
