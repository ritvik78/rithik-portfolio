import React from "react";

const techStack = [
  "C", "C++", "Python", "JavaScript",
  "Arduino", "ESP32", "Raspberry Pi",
  "HTML", "CSS", "React",
  "Unity", "C#",
  "Figma", "Canva", "Photoshop",
  "VS Code", "Proteus", "Fritzing"
];

import Hero from "./Hero";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen px-8 py-12 font-sans">
      <Hero />

{/* Old header removed */
        <h1 className="text-4xl font-bold text-cyan-400">Hi, I'm Rithik Verma</h1>
        <p className="text-xl mt-2 text-gray-300">IoT Enthusiast • Web Dev • Game Dev • Graphic Designer</p>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl border-b border-gray-600 pb-2 mb-4 text-cyan-300">About Me</h2>
        <p className="text-gray-200">
          I'm currently pursuing B.E. in Electrical and Computer Engineering from TIET, Patiala.
          I love building smart systems and creative user experiences through code, hardware, and design.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl border-b border-gray-600 pb-2 mb-4 text-cyan-300">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((tech) => (
            <div key={tech} className="bg-gray-800 rounded-lg px-4 py-2 text-center shadow-md hover:bg-cyan-700 transition">{tech}</div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl border-b border-gray-600 pb-2 mb-4 text-cyan-300">GitHub Stats</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <img
            src="https://github-readme-stats.vercel.app/api?username=rithikverma&show_icons=true&theme=tokyonight"
            alt="GitHub Stats"
            className="rounded-md"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=rithikverma&layout=compact&theme=tokyonight"
            alt="Top Languages"
            className="rounded-md"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl border-b border-gray-600 pb-2 mb-4 text-cyan-300">Contact</h2>
        <p className="text-gray-200">
          📧 Email: <a href="mailto:rock4rithik@gmail.com" className="text-cyan-400 hover:underline">rock4rithik@gmail.com</a><br />
          🔗 LinkedIn: <a href="https://www.linkedin.com/in/rithik-verma-74592226a/" className="text-cyan-400 hover:underline">rithik-verma</a>
        </p>
      </section>
    </div>
  );
}
