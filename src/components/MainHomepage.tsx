import { Home } from "./Home";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useState } from "react";
import { Project } from "./Projects/Projects";
import { Writeup } from "./Writeup/Writeup";
import Gear5LuffyWalker from "./luffy/WalkingLuffy";
import HeroSection from "./HeroSection";

function MainHomePage() {
  const [selection, setSelection] = useState("home");

  return (
    <div className="min-h-screen bg-[#EFDFD8] ">
      <div className="px-8 flex flex-col justify-center items-center font-mono">
        <div className="w-full py-4 px-2 lg:px-4">
          <Header />
        </div>
        <div className="w-full px-2 lg:px-4 ">
          <Navbar onSelect={setSelection} />
        </div>
        <div className="w-full px-2 lg:px-4">
          {selection === "home" && <Home />}
        </div>
        <div className="w-full px-2 lg:px-4">
          {selection === "project" && <Project />}
        </div>
        <div className="w-full px-2 lg:px-4">
          {selection === "Writeups" && <Writeup />}
        </div>
        <br />
        <div className="mx-4">
          <HeroSection />
        </div>
        <div className="w-full px-2 lg:px-4 ">
          {selection === "home" && <Footer />}
        </div>
        <Gear5LuffyWalker />
      </div>
    </div>
  );
}

export default MainHomePage;
