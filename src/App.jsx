import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Pages/HeroSection";
import IconStats from "./Components/Pages/IconStats";
import RootSection from "./Components/Pages/RootSection";
import SmileTransformations from "./Components/Pages/SmileTransformations";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <IconStats />
      <RootSection />
      <SmileTransformations />
    </div>
  );
}

export default App;
