import React from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Animatedblock from "./components/animatedblock";
import BgMotion from "./components/bg";




function App() {
  return (
    <div >
      <NavBar key={1}/>
      <Hero key={2}/>
      <Animatedblock key={3}/>
      <BgMotion/>
    </div>
  );
}

export default App;
