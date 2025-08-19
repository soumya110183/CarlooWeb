import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import PointsContainer from "@/app/About-us/_components/PointsContainer";
import Image from "next/image";
import {
  FaHeartbeat,
  FaUniversity,
  FaUsers,
  FaChalkboardTeacher,
  FaRobot,
} from "react-icons/fa";
import ContainerSolution from "../../_components/ContainerSolution";

export default function WhoCanBenefit() {
  const industries = [
    {
      icon: <FaHeartbeat className="text-red-500 text-4xl" />,
      title: "Healthcare AI Developers",
      description:
        "Ensure clinical AI tools are unbiased, accurate, and transparent in critical decisions.",
    },
    {
      icon: <FaUniversity className="text-blue-500 text-4xl" />,
      title: "Financial Services",
      description:
        "Prevent bias in lending, insurance scoring, and ensure compliance with regulations.",
    },
    {
      icon: <FaUsers className="text-green-500 text-4xl" />,
      title: "Human Resource Tech",
      description:
        "Ensure AI hiring tools comply with equal opportunity laws and avoid candidate bias.",
    },
    {
      icon: <FaChalkboardTeacher className="text-yellow-500 text-4xl" />,
      title: "Education, Marketing, & Retail Platforms",
      description:
        "Maintain fairness in assessments, transparency in targeting, and integrity in recommendations.",
    },
    {
      icon: <FaRobot className="text-purple-500 text-4xl" />,
      title: "LLM & GenAI Startups",
      description:
        "Validate models pre-launch with bias checks, prompt audits, and hallucination detection.",
    },
  ];
  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col max-lg:gap-20 items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      <div className="w-full ">
        <h2 className=" lg:text-[48px] text-[28px] sm:text-[32px] font-bold text-center">
          Who Can Benefit from Carlo’s AI Compliance Tools?
        </h2>

        <ContainerSolution array={industries} />
      </div>
    </section>
  );
}
