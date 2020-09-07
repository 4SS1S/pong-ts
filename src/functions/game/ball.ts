/**
 *
 * @class Ball
 *
 */
class Ball implements BallInterface {
  private _canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private _x = 0;
  private _y = 0;
  private speedX = 1;
  private speedY = 1;
  private player1: PositionInterface = { _x: 0, _y: 0 };
  private player2: PositionInterface = { _x: 0, _y: 0 };

  /**
   *
   * @param _canvas Canvas Element
   * @param ctx Canvas Render
   */
  constructor(_canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this._canvas = _canvas;
    this.ctx = ctx;

    this._x = this._canvas.width / 2;
    this._y = this._canvas.height / 2;
  }

  /**
   *
   * @param Player1 Main player
   * @param Player2 Secondary player
   *
   * @desc get the players position to make the move and goals
   *
   */
  public getPlayersPosition(
    Player1: PositionInterface,
    Player2: PositionInterface
  ) {
    // throw new Error("Method not implemented.");
    this.player1 = Player1;
    this.player2 = Player2;
  }

  /**
   *
   * @desc paint the ball on canvas
   *
   */
  public draw() {
    this.move();

    this.ctx.fillStyle = "#4f4";
    this.ctx.fillRect(this._x, this._y, 10, 10);
  }

  /**
   *
   * @desc move the ball on canvas, if the
   * ball touch each the players, it will invert
   * the position, also to the same with the
   * top and botton "walls"
   *
   */
  move() {
    this._x -= this.speedX;
    this._y -= this.speedY;

    /**
     *
     * @desc if the ball touchs the "walls"
     *
     */
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

    /**
     *
     * @desc if the ball touch the players, it will
     * invert the values
     *
     */
    if (
      this._x <= this.player1._x + 10 &&
      this._y <= this.player1._y + 50 &&
      this._y >= this.player1._y
    ) {
      this.speedX = -1;
    }

    if (
      this._x >= this.player2._x - 10 &&
      this._y <= this.player2._y + 50 &&
      this._y >= this.player2._y
    ) {
      this.speedX = 1;
    }
  }
}

export default Ball;
