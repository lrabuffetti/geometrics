export class Point {
  constructor(
    private x: number,
    private y: number
  ) {}

  public setX(point: number) {
    this.x = point;
  }

  public setY(point: number) {
    this.y = point;
  }

  public getX() {
    return this.x;
  }

  public getY() {
    return this.y;
  }
}
