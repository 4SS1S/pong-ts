/**
 *
 * @class Game
 */
export class Game implements GameInterface {
  private _canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(_canvas: HTMLCanvasElement) {
    this._canvas = _canvas;
    this.ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  public start() {
    this.ctx.fillRect(this._canvas.width / 2, this._canvas.height / 2, 10, 10);
  }

  public getCanvas() {
    return this._canvas;
  }

  public setCanvas(_canvas: HTMLCanvasElement) {
    this._canvas = _canvas;
  }
}
