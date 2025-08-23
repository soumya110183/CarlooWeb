import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import StepsList from "@/app/solutions/ai-compliance/_components/StepsList";
import Image from "next/image";
import {
  FaRegCalendarCheck,
  FaFileAlt,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";

export default function GetStartedTimeline() {
  const steps = [
    {
      icon: <FaRegCalendarCheck size={22} />,
      title: "Book a Free Consultation",
      text: "We’ll guide your incorporation and ethical compliance needs.",
    },
    {
      icon: <FaFileAlt size={22} />,
      title: "Company Setup + Activation",
      text: "Legal documents processed and your Carlo dashboard activated.",
    },
    {
      icon: <FaChartLine size={22} />,
      title: "Monitor & Report",
      text: "Use your dashboard, badges, and reports for trust and transparency.",
    },
    {
      icon: <FaRocket size={22} />,
      title: "Scale with Confidence",
      text: "Leverage ethical data to support fundraising, audits, and growth.",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto lg:pb-32 pb-15 text-foreground ">
      {/* Heading */}
      <div className="lg:max-w-[570px]">
        <HeadingReuse heading={"Get Started Today"} />
      </div>

      <div className="flex max-lg:flex-col-reverse flex-row-reverse gap-10 lg:gap-16 mt-12">
        <StepsList steps={steps} />

        {/* Right: Image */}
        <div>
          <Image
            width={500}
            height={580}
            src="/robot-rak.png"
            alt="get-started-timeline"
            className="w-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
