import React from "react";
import { Navbar } from "./components/Navbar";
import { Section1 } from "./pages/sections/Section1";
import { Section2 } from "./pages/sections/Section2";
import { Section3 } from "./pages/sections/Section3";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="top_space">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </>
  );
};
