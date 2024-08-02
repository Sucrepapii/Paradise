import React from "react";
import TopBar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
    </div>
  );
}

export default App;
