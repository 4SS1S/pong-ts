import Player from "./player";

class AI extends Player {
  constructor(_canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    super(_canvas, ctx);

    this._x = window.innerWidth / 3.1;
  }
}

export default AI;
