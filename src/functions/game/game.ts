import Ball from "./ball";
import Player from "./player";
import AI from "./ai";

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
  private ai: PlayerInterface;

  private WINDOW_HEIGHT = 600;
  private WINDOW_WIDHT = 800;

  constructor(_canvas: HTMLCanvasElement) {
    this._canvas = _canvas;
    this.ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
    this.sprite = new Image();
    this.sprite.src = require("../../assets/images/sprite.png");
    this._canvas.width = this.WINDOW_WIDHT;
    this._canvas.height = this.WINDOW_HEIGHT;

    this.ball = new Ball(this._canvas, this.ctx);
    this.player = new Player(this._canvas, this.ctx);
    this.ai = new Player(this._canvas, this.ctx, false);
    this.ai.setX(this.WINDOW_WIDHT - 40);
  }

  private reset() {
    this.ball = new Ball(this._canvas, this.ctx);
    this.player = new Player(this._canvas, this.ctx);
    this.ai = new Player(this._canvas, this.ctx, false);
    this.ai.setX(this.WINDOW_WIDHT - 40);

    this.ball.draw();
    this.player.draw();
    this.ai.draw();

    setTimeout(() => {
      this.start();
    }, 900);
  }

  public start() {
    this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);

    this.ball.getPlayersPosition(
      this.player.getPosition(),
      this.ai.getPosition()
    );

    if (this.ball.getX() <= 0) {
      this.reset();
      return;
    }

    if (this.ball.getX() >= this.WINDOW_WIDHT - 10) {
      this.reset();
      return;
    }

    this.ball.draw();
    this.player.draw();
    this.ai.draw();

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
    }, 20);
  }
}
