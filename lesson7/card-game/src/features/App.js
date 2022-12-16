import "./App.css";
import React from "react";
import Header from "../ui/organisms/header/header.jsx";
import Game from "../ui/organisms/game/game.jsx";

function App() {
  return (
    <div className="h-screen w-screen">
      <Header />
      <Game />
    </div>
  );
}

export default App;
