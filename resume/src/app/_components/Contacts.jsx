import React from "react";
import Link from "next/link";
import { IoMailOpen } from "react-icons/io5";

function Contacts() {
  return (
    <>
      <div className="flex flex-col  text-white px-4 py-10">
        <div className="flex flex-col justify-center items-center  md:justify-between max-w-screen-xl p-6 mx-auto md">
          <div className="relative w-full lg:max-w-lg flex items-center justify-center">
            <img
              src="https://i.imgur.com/va6RopC.png"
              alt="Hero"
              className="w-40 h-40 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent"></div>
          </div>

          <div className="flex flex-col gap-6 md:gap-6 max-w-lg px-4 pt-4 text-center ">
            <div className="text-2xl lg:text-4xl font-md tracking-tight">
              How can I support your
              <div className="font-semibold">digital projects?</div>
            </div>

            <div className="text-zinc-400 text-sm lg:text-base text-justify font-light">
              I&apos;m eager to help you build custom, multi-page websites with
              all the features you need. Whether it&apos;s a modern design or
              advanced functionality, I&apos;m ready to turn your vision into
              reality!
            </div>

            <div className="w-full flex">
              <Link
                href={"mailto:astnab@gmail.com?subject=Hi, Astari!"}
                target="blank"
                className="no-underline text-white w-full"
              >
                <button className="flex gap-2 text-sm justify-center items-center border-1 border-[#3D3D45] py-2 px-4 font-light rounded-xl transition-all duration-300 ease-in-out hover:border-zinc-white hover:shadow-[0_0_0_2px_#3D3D45] w-full">
                  <div>Say hi via e-mail</div>
                  <div>
                    <IoMailOpen />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
