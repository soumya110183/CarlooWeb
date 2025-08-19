import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";
import {
  FaFileAlt,
  FaSearch,
  FaChartLine,
  FaCertificate,
  FaGlobe,
} from "react-icons/fa";

export default function CertificationProcess() {
  const steps = [
    {
      icon: <FaFileAlt size={22} />,
      title: "Submit Your Project",
      text: "Provide access to your APIs, documentation, and operational workflows.",
    },
    {
      icon: <FaSearch size={22} />,
      title: "Carlo Review",
      text: "Platform conducts automated and manual audits.",
    },
    {
      icon: <FaChartLine size={22} />,
      title: "Scorecard Issued",
      text: "Projects receive detailed breakdowns and corrective insights.",
    },
    {
      icon: <FaCertificate size={22} />,
      title: "Badge Issued",
      text: "After validation, a unique Carlo Badge and verification page is created.",
    },
    {
      icon: <FaGlobe size={22} />,
      title: "Display Publicly",
      text: "Use the badge on your site, DApp, documentation, or app listings.",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto lg:pb-32 pb-15 text-foreground ">
      {/* Heading */}
      <div className="lg:max-w-[570px]">
        <HeadingReuse heading={"The Certification Process"} />
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
                  <p className="font-semibold text-lg max-sm:text-base">
                    {step.title}
                  </p>
                  <p className="text-foreground/80 max-sm:text-sm">
                    {step.text}
                  </p>
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
            alt="certification-process"
            className="w-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
