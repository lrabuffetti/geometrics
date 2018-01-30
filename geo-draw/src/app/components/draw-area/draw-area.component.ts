import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  private ctx: object = {};

  private circle: object = {};

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
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.circle.clearRect(0, 0, canvas.width, canvas.height);
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

  public polygonPosition() {
    let lines = this.coordinates.getLines();
    let position = this.coordinates.getInitialPosition()
    let points = this.coordinates.getPoints()
    return {
      'position': 'absolute',
      'background-color': '#ccc',
      'top': position.y + 'px',
      'left': position.x + 'px',
      'width': this.coordinates.getWidth() + 'px',
      'height': this.coordinates.getHeight() + 'px',
      'transform': 'rotate(' + lines[0].transform + 'deg) ' + 'skew(5deg)'
    }
  }

  public setCanvasPoint(e: any) {
    this.ctx.beginPath();
    this.ctx.arc((1000 - e.pageX), e.pageY, 5, 0, 2 * Math.PI);
    this.circle.fillStyle = '#FF0000';
    this.circle.fill();
    this.ctx.stroke();
  }

  public setLastCanvasPoint() {
    let points = this.coordinates.getPoints()
    this.ctx.beginPath();
    this.ctx.arc((1000 - points[3].x), points[3].y, 5, 0, 2 * Math.PI);
    this.circle.fillStyle = '#FF0000';
    this.circle.fill();
    this.ctx.stroke();
  }

  public drawCanvasLines() {

    let points = this.coordinates.getPoints();

    this.ctx.beginPath();

    this.ctx.moveTo((1000 - points[0].x), points[0].y);
    this.ctx.lineTo((1000 - points[1].x), points[1].y);
    this.ctx.lineTo((1000 - points[2].x), points[2].y);
    this.ctx.lineTo((1000 - points[3].x), points[3].y);
    this.ctx.lineTo((1000 - points[0].x), points[0].y);

    this.ctx.closePath();
    this.ctx.fillStyle = '#006AA7';
    this.ctx.fill();
    this.ctx.stroke();
  }

  public drawCircleCanvas() {
    let center = this.coordinates.getCenterOfMass();
    let width = this.coordinates.getShortestLine();
    this.circle.beginPath();
    this.circle.arc((1000 - center.x), center.y, (width / 2), 0, 2 * Math.PI);
    this.circle.closePath();
    this.circle.fillStyle = '#FECC00';
    this.circle.fill();
    this.circle.stroke();
  }

  ngOnInit() {
    let c = document.getElementById('canvas');
    this.ctx = c.getContext('2d');

    let circle = document.getElementById('canvas2');
    this.circle = c.getContext('2d');
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges(); // we need to update content after methods executions
    if (this.coordinates.length() === 4) {
      this.polygonPosition();
      this.setLastCanvasPoint();
      this.drawCanvasLines();
      this.drawCircleCanvas();
    }
  }

}
