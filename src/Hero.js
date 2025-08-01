import React from "react";
import Typed from "react-typed";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-cyan-400">
        Hi, I'm Rithik Verma
      </h1>
      <Typed
        className="text-xl md:text-2xl text-gray-300"
        strings={[
          "IoT Enthusiast",
          "Web Developer",
          "Game Developer",
          "Graphic Designer"
        ]}
        typeSpeed={60}
        backSpeed={40}
        loop
      />
      <p className="mt-6 text-gray-400 max-w-xl">
        I build smart systems, engaging web interfaces, games, and creative visuals with a tech-driven approach.
      </p>
    </div>
  );
}
