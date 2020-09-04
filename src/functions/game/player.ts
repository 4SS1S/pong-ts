/**
 * @class Player
 */
class Player implements PlayerInterface {
  private _x: number;
  private _y: number;
  private maxX: number;

  constructor({ _x, _y, maxX }: PlayerConstructorInterface) {
    this._x = _x;
    this._y = _y;
    this.maxX = maxX;

    window.addEventListener("keypress", (e) => {
      console.log({ e });
    });
  }

  move({ _x, _y }: MoveInterface) {
    if (_x) {
      if (
        (_x >= 0 && this._x <= 0) ||
        (_x <= this.maxX && this._x >= this.maxX)
      )
        this._x += _x;
    }

    if (_y) {
      this._y -= _y;
    }
  }

  get() {
    //
  }

  set() {
    //
  }
}

export default Player;
