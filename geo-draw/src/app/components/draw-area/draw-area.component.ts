import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Parallelogram } from '../../classes/parallelogram'
import { Point } from '../../classes/point'

@Component({
  selector: 'app-draw-area',
  templateUrl: './draw-area.component.html',
  styleUrls: ['./draw-area.component.scss']
})
export class DrawAreaComponent implements OnInit {
  //variable to store the coordinates points on the plain
  public coordinates: Parallelogram = new Parallelogram();
  // this will be a variable to controll that the user can not put more than
  // just 3 points
  public showMaxItems: boolean = false;
  // just to be safe that we don't overide our primary array on the calculation
  // of the last point in the child component.
  // otherwise, space/time continous could be compromissed.
  public newCoordinates: Parallelogram = new Parallelogram();

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
  }

  /**
   * Here we set the position of each point in the plain
   * the meaning of the universe as we know it
   * it just print the styles on the HTML
   * @param  {[object]} item [a point object with x and y values]
   * @return {[object]}      [return styles for the points position]
   */
  public pointPosition(item) {
    let style = {
      'top': item.y + 'px',
      'left': item.x + 'px'
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

  ngOnInit() { }

  ngAfterViewChecked() {
    this.cdr.detectChanges(); // we need to update content after methods executions
  }

}
