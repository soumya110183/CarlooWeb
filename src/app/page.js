import Image from "next/image";
import Hero from "./_components/Hero";
import SecondSection from "./_components/SeconSection";
import ThirdSection from "./_components/ThirdSection";
import FourthSection from "./_components/FourthSection";
import FifthSection from "./_components/FifthSection";
import SixthSection from "./_components/SixthSection";
import SeventhFunction from "./_components/SeventhSection";
import Footer from "./_components/Footer";
import Regulation from "./_components/Regulations";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <Regulation />
        <SeventhFunction />
        <Footer />
      </main>
    </div>
  );
}
