import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ScrollingLogos from "./ScrollLogo";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import ShootingStar from "./ShootingStars";
import StarBackground from "./StarBackground";

function Hero2() {
  return (
    <div className="flex flex-col items-center justify-center  text-white min-h-screen px-6 relative">
      <div className="inihero flex flex-col md:flex-row gap-8 lg:gap-12 items-center lg:items-end lg:justify-between max-w-screen-xl mx-auto relative">
        <div className="relative w-full pt-10 md:pt-0 lg:w-80 lg:max-w-lg rounded-xl overflow-visible">
          <div className="flex items-center justify-center relative w-full h-full">
            <div className="relative w-full flex justify-center">
              <div className="absolute top-0 left-0 w-full h-full">
                <ShootingStar />
                <StarBackground />
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-radial from-zinc-900/80 via-transparent to-zinc-800/70 z-20"></div>

              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-zinc-900/60 to-transparent z-30"></div>

              <img
                src="https://i.imgur.com/5wW1IsP.png"
                alt="Hero"
                className="w-48 lg:w-96 object-cover relative z-40 lg:pt-10 lg:px-6"
              />

              <div className="absolute bottom-0 left-0 right-0 h-32 z-50 bg-gradient-to-t from-black to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 max-w-xs lg:max-w-lg z-60 relative ">
          <div className="text-3xl lg:text-6xl font-md">
            Hello! I&apos;m <span className="font-semibold">Astari</span>,
          </div>
          <div className="font-light text-zinc-400 leading-relaxed text-sm lg:text-lg text-justify">
            I&apos;m a web developer with a background in urban studies and
            Geographic Information System. I merge creativity, as I have a
            passion in arts and designs, with tech to build dynamic web apps and
            enjoy crafting innovative solutions through design and
            functionality.
          </div>
          <div className="flex gap-4">
            <Link
              href={"http://read.cv/astnab"}
              target="_blank"
              className="no-underline text-white"
            >
              <button className="flex gap-2 text-sm items-center border-1 border-[#3D3D45] py-2 px-4 font-light rounded-xl transition-all duration-300 ease-in-out hover:border-zinc-white hover:shadow-[0_0_0_2px_#3D3D45] relative z-70">
                <div>Resume</div>
                <div>
                  <FiExternalLink />
                </div>
              </button>
            </Link>

            <a href="#projects" className="no-underline text-white">
              <button className="flex gap-2 text-sm items-center border-1 border-[#3D3D45] py-2 px-4 font-light rounded-xl transition-all duration-300 ease-in-out hover:border-zinc-white hover:shadow-[0_0_0_2px_#3D3D45] relative z-70">
                <div>View my works</div>
                <div>
                  <FaArrowRight />
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="inilogotransisi lg:mt-24">
        <ScrollingLogos />
      </div>
    </div>
  );
}

export default Hero2;
