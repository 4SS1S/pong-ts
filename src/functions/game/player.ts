/**
 * @class Player
 */
class Player implements PlayerInterface {
  private _canvas: HTMLCanvasElement;
  protected ctx: CanvasRenderingContext2D;
  private isSelfMover: boolean;

  protected _x = 10;
  protected _y = 0;

  constructor(
    _canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    isSelfMover?: boolean
  ) {
    this._canvas = _canvas;
    this.ctx = ctx;
    this.isSelfMover = typeof isSelfMover === "boolean" ? isSelfMover : true;

    this._y = this._canvas.height / 2 - 25;

    if (this.isSelfMover) {
      window.addEventListener("keydown", (event) => {
        switch (event.key) {
          case "ArrowDown":
            if (this._y < this._canvas.height - 50) {
              this._y += 1;
            }
            break;

          case "ArrowUp":
            if (this._y > 0) {
              this._y -= 1;
            }
            break;
        }
      });
    }
  }

  public draw() {
    this.ctx.fillStyle = "#4f4";
    this.ctx.fillRect(this._x, this._y, 10, 50);
  }

  protected getIsSelfMover() {
    return this.isSelfMover;
  }

  protected setIsSelfMover(isSelfMover: boolean) {
    this.isSelfMover = isSelfMover;
  }

  public setX(_x: number) {
    this._x = _x;
  }

  public getPosition() {
    return {
      _x: this._x,
      _y: this._y,
    };
  }
}

export default Player;
