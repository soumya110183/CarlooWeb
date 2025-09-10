import MeetTeam from "./_components/MeetTeam";
import MissionStatement from "./_components/MissionStatement";
import OurTeam from "./_components/OurTeam";
import OurVision from "./_components/OurVision";
import PartnerShip from "./_components/PartnerShip";
import SubScribe from "./_components/SubScribe";
import WhyChoose from "./_components/WhyChoose";


export const metadata = {
  title: "About Carlo PEaaS & Algorethics",
  description: "Learn about Carlo’s mission to ensure ethical AI. Meet the team behind Algorethics and our vision for trustworthy technology.",
  keywords: "about Carlo, Algorethics team, ethical AI mission, compliance vision",
};


export default function page() {
  return (
    <div className="mt-35 overflow-hidden lg:px-10 px-5">
      <MissionStatement />
      <OurVision />
      <OurTeam />
      <WhyChoose />
      <PartnerShip />
      <MeetTeam />
      <SubScribe />
    </div>
  );
}
