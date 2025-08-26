import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";
import {
  FaFileAlt,
  FaSearch,
  FaChartLine,
  FaCertificate,
  FaGlobe,
} from "react-icons/fa";
import StepsList from "../../ai-compliance/_components/StepsList";

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

      <div className="flex max-lg:flex-col-reverse flex-row-reverse gap-10 lg:gap-16 mt-12 items-center ">
   <StepsList steps={steps} />

        {/* Right: Image */}
        <div>
          <Image
            width={500}
            height={580}
            src="/certification.png"
            alt="certification-process"
            className="w-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
