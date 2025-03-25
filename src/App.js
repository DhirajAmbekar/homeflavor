import React from "react";
import { Navbar } from "./components/Navbar";
import { Section1 } from "./pages/sections/Section1";
import { Section2 } from "./pages/sections/Section2";
import { Section3 } from "./pages/sections/Section3";
import { Section4 } from "./pages/sections/Section4";
import { Section5 } from "./pages/sections/Section5";
import { Section6 } from "./pages/sections/Section6";
import { Section7 } from "./pages/sections/Section7";
import { Section8 } from "./pages/sections/Section8";
import { Section9 } from "./pages/sections/Section9";
import { Section10 } from "./pages/sections/Section10";

export const App = () => {
  return (
    <>
      {window.innerWidth <= 900 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f5f5f5",
            color: "black",
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Open in desktop to see the Landing page
        </div>
      ) : (
        <>
          <Navbar />
          <div className="top_space">
            <Section1 />
            <Section4 />
            <Section2 />
            <Section3 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section10 />
            <Section9 />
          </div>
        </>
      )}
    </>
  );
};
