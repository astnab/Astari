import Image from "next/image";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import ProjectsList from "./_components/ProjectsList";
import HeroDrawing from "./_components/HeroDrawing";
import Footer2 from "./_components/Footer2";
import Hero2 from "./_components/Hero2";
import ScrollingLogos from "./_components/ScrollLogo";
import Contacts from "./_components/Contacts";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-black">
        <Hero2 />

        <ProjectsList />

        <Contacts />

        <div className="mt-auto">
          <Footer2 />
        </div>

        {/* <HeroDrawing /> */}
      </div>
    </>
  );
}
