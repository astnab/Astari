import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ScrollingLogos from "./ScrollLogo";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

function Contacts() {
  return (
    <>
      <div className="flex flex-col  items- justify-center tracking-tighter text-white border-1 border-white px-6">
        <div className="inihero flex flex-col md:flex-row gap-8 lg:gap-12 items-center lg:items-start lg:justify-between max-w-screen-xl mx-auto">
          <div className="relative w-48 lg:w-80 lg:max-w-lg mt-4">
            <img
              src="https://i.imgur.com/5wW1IsP.png"
              alt="Hero"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
          </div>

          <div className="flex flex-col gap-4 lg:gap-6 max-w-xs lg:max-w-lg">
            <div className="text-3xl lg:text-6xl font-md">
              Hello! I&apos;m <span className="font-bold">Astari</span>,
            </div>
            <div className="font-light text-zinc-400 leading-relaxed text-sm lg:text-lg text-justify">
              I&apos;m a web developer with a background in urban studies and
              Geographic Information System. I merge creativity, as I have a
              passion in arts and designs, with tech to build dynamic web apps
              and enjoy crafting innovative solutions through design and
              functionality.
            </div>
            <div className="flex gap-4">
              <Link
                href={"http://read.cv/astnab"}
                target="blank"
                className="no-underline text-white"
              >
                <button className="flex gap-2 text-sm items-center border border-white py-2 px-4 font-light rounded-xl transition-all duration-300 ease-in-out hover:border-zinc-white hover:shadow-[0_0_0_2px_#ffffff]">
                  <div>Resume</div>
                  <div>
                    <FiExternalLink />
                  </div>
                </button>
              </Link>

              <a href="#projects" className="no-underline text-white">
                <button className="flex gap-2 text-sm items-center border border-white py-2 px-4 font-light rounded-xl transition-all duration-300 ease-in-out hover:border-zinc-white hover:shadow-[0_0_0_2px_#ffffff]">
                  <div>View my works</div>
                  <div>
                    <FaArrowRight />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
