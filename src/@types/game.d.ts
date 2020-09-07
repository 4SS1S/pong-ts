/**
 *
 */
interface GameInterface {
  /**
   *
   * @param _canvas HTMLCanvasElement
   */
  //   "constructor"(_canvas: HTMLCanvasElement);

  public start();

  public getCanvas(): HTMLCanvasElement;

  public setCanvas(_canvas: HTMLCanvasElement);
}

interface PositionInterface {
  _x: number;
  _y: number;
}

interface PlayerConstructorInterface {
  _x: number;
  _y: number;
  maxX: number;
}

interface PlayerInterface {
  draw();

  public getPosition(): PositionInterface;

  public setX(_x: number);
}

interface BallInterface {
  /**
   *
   * @desc paint the ball on canvas
   *
   */
  public draw();

  /**
   *
   * @desc move the ball on canvas, if the
   * ball touch each the players, it will invert
   * the position, also to the same with the
   * top and botton "walls"
   *
   */
  public move();

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
  );
}
