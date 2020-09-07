import React, { useEffect, useState, useRef } from "react";

import "./styles/index.css";

import Game from "./functions/game";

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const visualRef = useRef<HTMLInputElement>(null);

  let game: GameInterface | null = null;

  useEffect(() => {
    game = new Game(canvasRef.current as HTMLCanvasElement);

    game.start();
  }, []);

  return (
    <>
      <input
        type="checkbox"
        id="visual-padrao"
        onChange={(e) => {
          game?.changeToOldStyle(e.target.checked);
        }}
      />
      <label htmlFor="visual-padrao">Visual Padrão</label>
      <canvas ref={canvasRef} />
    </>
  );
};

export default App;
