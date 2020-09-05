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

interface MoveInterface {
  _x?: number;
  _y?: number;
}

interface PlayerConstructorInterface {
  _x: number;
  _y: number;
  maxX: number;
}

interface PlayerInterface {
  draw();
}

interface BallInterface {
  draw();
}
