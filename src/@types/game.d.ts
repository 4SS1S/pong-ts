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
  draw();

  private move();

  public getPlayersPosition(
    Player1: PositionInterface,
    Player2: PositionInterface
  );
}
