import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <>
      <div className="w-screen">
        <div className="tracking-tighter text-zinc-700 flex justify-center">
          <div className="flex flex-col items-center  text-center gap-2">
            <div className="text-4xl">
              hello, i am <span className="text-[#158163]">astari</span>
            </div>
            <div className="text-2xl">
              i build websites and i enjoy crafting designs!{" "}
            </div>
            <div className="text-2xl">
              see my <span className="no-underline text-[#158163]">works</span>{" "}
              below or say hi via{" "}
              <span>
                <Link
                  href={"mailto:astnab@gmail.com?subject=Hello, Astari!"}
                  className="no-underline text-[#158163]"
                >
                  email
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
