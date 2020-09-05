class Ball implements BallInterface {
  private _canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private _x = 0;
  private _y = 0;
  private speedX = 1;
  private speedY = 1;
  private player1: PositionInterface = {};
  private player2: PositionInterface = {};

  constructor(_canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this._canvas = _canvas;
    this.ctx = ctx;

    this._x = this._canvas.width / 2;
    this._y = this._canvas.height / 2;
  }

  public getPlayersPosition(
    Player1: PositionInterface,
    Player2: PositionInterface
  ) {
    // throw new Error("Method not implemented.");
    this.player1 = Player1;
    this.player2 = Player2;
  }

  public draw() {
    this.move();

    this.ctx.fillStyle = "#4f4";
    this.ctx.fillRect(this._x, this._y, 10, 10);
  }

  move() {
    this._x -= this.speedX;
    this._y -= this.speedY;

    if (this._x <= 0) {
      this.speedX = -1;
    }

    if (this._x + 10 >= this._canvas.width) {
      this.speedX = 1;
    }

    if (this._y <= 0) {
      this.speedY = -1;
    }

    if (this._y + 10 >= this._canvas.height) {
      this.speedY = 1;
    }
  }
}

export default Ball;
