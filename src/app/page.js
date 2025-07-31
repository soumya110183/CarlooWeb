import Image from "next/image";
import Hero from "./_components/Hero";

import Regulation from "./_components/Regulations";
import WhyCarlo from "./_components/WhyCarlo";

import KeyFeaturesSection from "./_components/KeyFeaturesSection";

import Services from "./_components/Services";
import Research from "./_components/Research";
import Experience from "./_components/Experience";
import Robot from "./_components/Robot";
import HowitsWorkSection from "./_components/HowitsWorkSectiion";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <WhyCarlo />
        <KeyFeaturesSection />
        <HowitsWorkSection />
        <Robot />
        <Services />
        <Research />
        <Experience />
      </main>
    </div>
  );
}
