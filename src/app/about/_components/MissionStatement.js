import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import MissionFeatures from "@/app/about/_components/MissionFeatures";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import QoutesContainer from "./QoutesContainer";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";

export default function MissionStatement() {
  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col max-lg:gap-20 gap-10  items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse heading={"Mission Statement"} />
        <div className="flex gap-2 items-start">
          <ParagraphReUse
            paragraph={
              "Our mission is to enable developers, companies, and enterprises to innovate fearlessly while adhering to global data protection laws and ethical AI guidelines. We believe that responsible AI development is not just a regulatory requirement—it is a moral imperative."
            }
          />
        </div>
        <div className="grid grid-cols-2 w-full gap-5 mt-6">
          <MissionFeatures
            title={"Data Monitoring"}
            para={"Ensuring that AI systems are understandable and explainable"}
          >
            <FaMagnifyingGlass size={25} color="black" />
          </MissionFeatures>
          <MissionFeatures
            title={"Champion fairness"}
            para={"Detecting and mitigating biases in data and algorithms"}
          >
            <FaBalanceScale size={25} color="black" />
          </MissionFeatures>
          <MissionFeatures
            title={"Build trust"}
            para={
              "Helping organizations gain stakeholder confidence and user loyalty."
            }
          >
            <FaHandshake size={25} color="black" />
          </MissionFeatures>
          <MissionFeatures
            title={"Safeguard privacy"}
            para={
              "Protecting sensitive data in compliance with international standards."
            }
          >
            <FaShieldAlt size={25} color="black" />
          </MissionFeatures>
        </div>
      </div>
      <div className="w-full">
        <QoutesContainer />
      </div>
    </section>
  );
}
