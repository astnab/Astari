// components/ScrollingLogos.js
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiPrisma,
} from "react-icons/si";

const logos = [
  { component: FaHtml5, name: "HTML5" },
  { component: FaCss3Alt, name: "CSS3" },
  { component: SiJavascript, name: "JavaScript" },
  { component: SiTypescript, name: "TypeScript" },
  { component: FaReact, name: "React" },
  { component: SiNextdotjs, name: "Next.js" },
  { component: SiTailwindcss, name: "Tailwind CSS" },
  { component: FaBootstrap, name: "Bootstrap" },
  { component: FaGithub, name: "GitHub" },
  { component: FaNodeJs, name: "Node.js" },
  { component: SiExpress, name: "Express" },
  { component: SiMysql, name: "MySQL" },
  { component: SiPrisma, name: "Prisma" },
];

const ScrollingLogos = () => {
  return (
    <div className="relative overflow-hidden py-10">
      <div className="relative w-full max-w-md mx-auto text-zinc-500 tracking-tight text-sm font-light text-center mb-4">
        Continously learning these tech stacks
      </div>
      <div className="relative w-full max-w-xs lg:max-w-4xl mx-auto overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap text-white">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-4 flex items-center justify-center text-4xl"
            >
              <logo.component title={logo.name} />
            </div>
          ))}
          {/* Repeat logos for continuous scroll */}
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-4 flex items-center justify-center text-4xl"
            >
              <logo.component title={logo.name} />
            </div>
          ))}
        </div>
        {/* Fade effect on top of the scrolling logos */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingLogos;
