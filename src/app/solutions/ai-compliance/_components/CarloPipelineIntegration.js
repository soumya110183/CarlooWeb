

import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";
import {
  FaPlug,
  FaCode,
  FaChartLine,
  FaRocket,
  FaShieldAlt,
  FaCalendarCheck,
} from "react-icons/fa";

import StepsList from "./StepsList";

export default function CarloPipelineIntegration() {
  const steps = [
    {
      icon: <FaPlug size={22} />,
      title: "Integration Support",
      text: "Works with Python, TensorFlow, and PyTorch-compatible APIs.",
    },
    {
      icon: <FaCode size={22} />,
      title: "Developer Plug-ins",
      text: "Available for Jupyter, VS Code, and GitHub Actions.",
    },
    {
      icon: <FaChartLine size={22} />,
      title: "Dashboard Integration",
      text: "Connects with Streamlit, Dash, and web portals.",
    },
    {
      icon: <FaRocket size={22} />,
      title: "Pre-launch Checks",
      text: "Run before deploying models to catch potential issues early.",
    },
    {
      icon: <FaShieldAlt size={22} />,
      title: "Continuous Monitoring",
      text: "Operates in production environments for ongoing compliance.",
    },
    {
      icon: <FaCalendarCheck size={22} />,
      title: "Scheduled Audits",
      text: "Weekly or monthly reviews for board and compliance reporting.",
    },
  ];

  const stepDuration = 0.35; // faster and smooth
  const totalDuration = steps.length * stepDuration;

  return (
    <section className="w-full max-w-[1200px] mx-auto lg:pb-32 pb-15 text-foreground">
      {/* Heading */}
      <div className="lg:max-w-[570px]">
        <HeadingReuse
          heading={"How Carlo Fits Into Your AI Development Pipeline"}
        />
      </div>

      <div className="flex max-lg:flex-col-reverse flex-row-reverse gap-10 lg:gap-16 mt-12">
        {/* Steps List */}
      <StepsList steps={steps} />

        {/* Right-side Image */}
        <div>
          <Image
            width={500}
            height={580}
            src="/aidevelopment.png"
            alt="carlo-pipeline-integration"
            className="w-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
