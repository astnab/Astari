"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function HeroDrawing() {
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const images = [
      "https://i.imgur.com/VfhUTFQ.png",
      "https://i.imgur.com/wdTOMLM.png",
      "https://i.imgur.com/E8a5Kvl.png",
      "https://i.imgur.com/0PTHF3L.png",
      "https://i.imgur.com/WxXmiC3.png",
      "https://i.imgur.com/oNLLTK8.png",
    ];

    setVisibleImages([images[0], images[5]]);

    images.slice(1, 5).forEach((image, index) => {
      setTimeout(() => {
        setVisibleImages((prev) => [...prev, image]);
      }, (index + 1) * 500);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-8">
            <div className="flex-none">
              {visibleImages.includes("https://i.imgur.com/VfhUTFQ.png") && (
                <img
                  src="https://i.imgur.com/VfhUTFQ.png"
                  alt="Title"
                  className="w-72"
                />
              )}
            </div>

            <div className="flex gap-6 lg:gap-14">
              <div className="h-14 w-14 flex-none">
                {visibleImages.includes("https://i.imgur.com/wdTOMLM.png") && (
                  <Link href="/about">
                    <img
                      src="https://i.imgur.com/wdTOMLM.png"
                      alt="About"
                      className="w-14 hover:rotate-12"
                      loading="lazy"
                    />
                  </Link>
                )}
              </div>
              <div className="h-14 w-14 flex-none">
                {visibleImages.includes("https://i.imgur.com/E8a5Kvl.png") && (
                  <Link href="/projects">
                    <img
                      src="https://i.imgur.com/E8a5Kvl.png"
                      alt="Projects"
                      className="w-14 hover:-rotate-12"
                      loading="lazy"
                    />
                  </Link>
                )}
              </div>
              <div className="h-14 w-14 flex-none">
                {visibleImages.includes("https://i.imgur.com/0PTHF3L.png") && (
                  <Link
                    href="https://www.linkedin.com/in/astarinabila/"
                    target="_blank"
                  >
                    <img
                      src="https://i.imgur.com/0PTHF3L.png"
                      alt="LinkedIn"
                      className="w-14 hover:rotate-12"
                      loading="lazy"
                    />
                  </Link>
                )}
              </div>

              <div className="h-14 w-14 flex-none">
                {visibleImages.includes("https://i.imgur.com/WxXmiC3.png") && (
                  <Link href="mailto:astnab@gmail.com?subject=Hello%2C%20Astari!">
                    <img
                      src="https://i.imgur.com/WxXmiC3.png"
                      alt="Email"
                      className="w-14 hover:-rotate-12"
                      loading="lazy"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex justify-center py-4 w-full">
        {visibleImages.includes("https://i.imgur.com/oNLLTK8.png") && (
          <img
            src="https://i.imgur.com/oNLLTK8.png"
            alt="Footer"
            className="w-64"
          />
        )}
      </footer>
    </div>
  );
}

export default HeroDrawing;
