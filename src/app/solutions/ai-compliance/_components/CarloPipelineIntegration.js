import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";

export default function CarloPipelineIntegration() {
  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col flex-row-reverse max-lg:gap-16 items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      
      {/* Left: Text Content */}
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse heading={"How Carlo Fits Into Your AI Development Pipeline"} />
        
        <ul className="mt-6 space-y-5 list-disc list-inside text-lg leading-relaxed">
          <li>
            <strong>Integration Support:</strong> Works with Python, TensorFlow, and PyTorch-compatible APIs.
          </li>
          <li>
            <strong>Developer Plug-ins:</strong> Available for Jupyter, VS Code, and GitHub Actions.
          </li>
          <li>
            <strong>Dashboard Integration:</strong> Connects with Streamlit, Dash, and web portals.
          </li>
          <li>
            <strong>Pre-launch Checks:</strong> Run before deploying models to catch potential issues early.
          </li>
          <li>
            <strong>Continuous Monitoring:</strong> Operates in production environments for ongoing compliance.
          </li>
          <li>
            <strong>Scheduled Audits:</strong> Weekly or monthly reviews for board and compliance reporting.
          </li>
        </ul>
      </div>

      {/* Right: Image */}
      <div>
        <Image
          width={500}
          height={580}
          src="/vision.png"
          alt="carlo-pipeline-integration"
          className="w-[500px] object-contain"
        />
      </div>
    </section>
  );
}
