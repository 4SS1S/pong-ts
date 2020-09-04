import React, { useEffect, useRef } from "react";

import "./styles/index.css";

import Game from "./functions/game";

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const game = new Game(canvasRef.current as HTMLCanvasElement);

    game.start();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default App;
