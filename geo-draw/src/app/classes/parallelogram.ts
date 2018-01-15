import { Point } from './point';
import * as _ from 'lodash';

export class Parallelogram {
  constructor(
    private points = [],
    private lines = [],
    private massCenter?: Point
  ) { }

  public setPoint(point: Point) {
    this.points.push(point);
  };

  public deletePoints() {
    this.points = [];
  };

  public length() {
    return this.points.length;
  }

  public lastPoint() {
    /**
     * We need to find the 4th point to close the parallellogram
     * so, we need to find that 4th coordinate and here is a simple
     * formula of how to do it, let's translate it to JS
     *
     * A(−2;4) , B(1;−2) and C(3;3) and D(x;y)
     * Since AD → = BD → AD → = BD →, you'll have
     * (Dx − Ax , Dy − Ay) = (Cx − Bx, Cy − By)
     * (Dx − Ax , Dy − Ay) = (Cx − Bx, Cy − By)
     * ⇒ (x − ( −2 ), y − 4) = (3 − 1, 3 − ( −2 ))
     * ⇒ (x − ( −2 ) , y − 4) = (3 − 1, 3 − ( −2 ))
     * ⇒ x − ( −2 ) = 3 − 1 and y − 4 = 3 − (−2) ⇒ S(0,9).
     */

    let A = this.points[0];
    let B = this.points[1];
    let C = this.points[2];

    let x = (C.x + A.x) - B.x;
    let y = (C.y + A.y) - B.y;

    let D = new Point(x, y);
    this.points.push(D);
  };

  /**
   * Print the lines between each point the browser
   * @param  {any}    pointA [pair of points]
   * @param  {any}    pointB [pair of points]
   * @return {[lines]}       [updated array with the lines to be written]
   */
  public drawLine(pointA: Point, pointB: Point) {

    let x1 = pointA.getX();
    let y1 = pointA.getY();
    let x2 = pointB.getX();
    let y2 = pointB.getY();

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
    // id for the line
    let id = 'line-' + new Date().getTime();
    // css styles to draw the line with HTML
    let styles = {
      'left': x2 + 'px',
      'top': y2 + 'px',
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
    // set the line object
    let line = {
      'id': id,
      'styles': styles,
      'slope': m,
      'angle': angle,
      'distance': d,
      'transform': transform,
    }

    this.lines.push(line);
    return line;
  }

  private setCenterOfMass() {
    if (this.points.length < 4) {
      return 'you need 4 points of the parallelogram';
    } else {
      /**
        this is the formula to calculate the mass center of a parallelogram
        of course, we first need the 4 points, so, if you don't have all of them
        an error message will appear, just for control
        (A+C, B+D)
        ----, ----
          2    2
        (Ax,Ay + Cx,Cy)/2 , (Bx,By + Dx,Dy)/2
        (Ax+Cx + Ay+Cy)/2 , (Bx+Dx + By+Dy)/2
      */
      let A = this.points[0];
      let B = this.points[1];
      let C = this.points[2];
      let D = this.points[3];
      let firstPoint = (A.getX() + B.getX() + C.getX() + D.getX()) / 4;
      let secondPoint = (A.getY() + B.getY() + C.getY() + D.getY()) / 4;
      let massCenter = new Point(firstPoint, secondPoint);
      this.massCenter = massCenter;
    }
  };

  public getShortestLine() {
    let shortestLine = 0;
    for (let i = 0; i < this.lines.length; i++) {
      if (i === 0) {
        shortestLine = this.lines[i].distance;
      } else if(shortestLine > this.lines[i].distance) {
        shortestLine = this.lines[i].distance;
      }
    }

    return shortestLine;
  }

  public getCenterOfMass() {
    this.setCenterOfMass()
    return this.massCenter;
  }

  public getPoints() {
    return this.points;
  }

  public getLines() {
    return this.lines;
  }

}
