import Ball from "./ball";
import Player from "./player";

/**
 *
 * @class Game
 */
export class Game implements GameInterface {
  private _canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private sprite: CanvasImageSource;

  private ball: BallInterface;
  private player: PlayerInterface;

  constructor(_canvas: HTMLCanvasElement) {
    this._canvas = _canvas;
    this.ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
    this.sprite = new Image();
    this.sprite.src = require("../../assets/images/sprite.png");

    this.ball = new Ball(this._canvas, this.ctx);
    this.player = new Player(this._canvas, this.ctx);
  }

  public start() {
    this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);

    this.ball.draw();
    this.player.draw();

    this.redraw();
  }

  public getCanvas() {
    return this._canvas;
  }

  public setCanvas(_canvas: HTMLCanvasElement) {
    this._canvas = _canvas;
  }

  public redraw() {
    setTimeout(() => {
      this.start();
    }, 60);
  }
}
