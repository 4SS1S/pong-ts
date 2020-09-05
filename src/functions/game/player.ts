/**
 * @class Player
 */
class Player implements PlayerInterface {
  private _canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private _x = 10;
  private _y = 0;

  constructor(_canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this._canvas = _canvas;
    this.ctx = ctx;

    this._y = this._canvas.height / 2 - 25;

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

  public draw() {
    this.ctx.fillStyle = "#4f4";
    this.ctx.fillRect(this._x, this._y, 10, 50);
  }

  public getPosition() {
    return {
      _x: this._x,
      _y: this._y,
    };
  }
}

export default Player;
