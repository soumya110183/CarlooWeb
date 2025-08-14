import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";
import { FaRegCalendarCheck, FaFileAlt, FaChartLine, FaRocket } from "react-icons/fa";

export default function GetStartedTimeline() {
  const steps = [
    {
      icon: <FaRegCalendarCheck size={22} />,
      title: "Book a Free Consultation",
      text: "We’ll guide your incorporation and ethical compliance needs."
    },
    {
      icon: <FaFileAlt size={22} />,
      title: "Company Setup + Activation",
      text: "Legal documents processed and your Carlo dashboard activated."
    },
    {
      icon: <FaChartLine size={22} />,
      title: "Monitor & Report",
      text: "Use your dashboard, badges, and reports for trust and transparency."
    },
    {
      icon: <FaRocket size={22} />,
      title: "Scale with Confidence",
      text: "Leverage ethical data to support fundraising, audits, and growth."
    }
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto lg:pb-32 pb-15 text-foreground px-6">
      {/* Heading */}
      <div className="lg:max-w-[570px]">
        <HeadingReuse heading={"Get Started Today"} />
      </div>

      <div className="flex max-lg:flex-col-reverse flex-row-reverse gap-10 lg:gap-16 mt-12">
        {/* Left: Timeline */}
        <div className="relative flex-1">
          {/* Vertical Line */}
          <div className="absolute left-[14px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#5d3fd3] via-purple-400 to-[#5d3fd3]"></div>

          {/* Steps */}
          <ul className="space-y-8 relative z-10">
            {steps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-4">
                {/* Icon Circle */}
                <div className="w-8 h-8 flex items-center justify-center bg-[#5d3fd3] text-white rounded-full flex-shrink-0 shadow-lg">
                  {step.icon}
                </div>
                <div>
                  <p className="font-semibold text-lg">{step.title}</p>
                  <p className="text-foreground/80">{step.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div>
          <Image
            width={500}
            height={580}
            src="/vision.png"
            alt="get-started-timeline"
            className="w-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
