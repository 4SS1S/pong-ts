/**
 * @class Player
 */
class Player implements PlayerInterface {
  private _canvas: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;

  constructor(_canvas: HTMLCanvasElement, _ctx: CanvasRenderingContext2D) {
    this._canvas = _canvas;
    this._ctx = _ctx;

    window.addEventListener("keydown", (e) => {
      console.log({ e });
    });
  }

  move({ _x, _y }: MoveInterface) {}

  get() {
    //
  }

  set() {
    //
  }
}

export default Player;
