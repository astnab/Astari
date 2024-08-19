import Image from "next/image";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import ProjectsList from "./_components/ProjectsList";
import HeroDrawing from "./_components/HeroDrawing";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-stone-200">
        {/* <div className="flex lg:hidden">
          <Header />
        </div> */}
        {/* <Hero /> */}
        {/* <ProjectsList /> */}
        {/* <Footer /> */}

        <HeroDrawing />
      </div>
    </>
  );
}
