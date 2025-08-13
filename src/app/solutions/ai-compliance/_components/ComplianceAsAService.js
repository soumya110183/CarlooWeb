import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";

export default function ComplianceAsAService() {
  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col max-lg:gap-16 items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      
      {/* Left Content */}
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse heading={"Compliance-as-a-Service: Your Always-On AI Ethics Guardian"} />
        
        <p className="font-normal text-[22px] text-justify mt-6 leading-relaxed">
          Algorethics offers Carlo as PEaaS (Platform for Ethics as a Service). 
          This means no infrastructure overhead on your end. We handle:
        </p>

        <ul className="mt-6 space-y-5 list-disc list-inside text-lg leading-relaxed">
          <li>
            <strong>Secure Cloud Hosting:</strong> Fully managed, safe, and scalable hosting environment.
          </li>
          <li>
            <strong>Data Protection:</strong> Encryption and anonymization for privacy compliance.
          </li>
          <li>
            <strong>Region-Specific Compliance:</strong> Configurations tailored to local regulations.
          </li>
          <li>
            <strong>Regulatory Updates:</strong> Always synced with the latest frameworks and laws.
          </li>
          <li>
            <strong>Simple Integration:</strong> Plug in your models and receive actionable insights.
          </li>
        </ul>
      </div>

      {/* Right Image */}
      <div>
        <Image
          width={500}
          height={580}
          src="/vision.png"
          alt="compliance-as-a-service"
          className="w-[500px] object-contain"
        />
      </div>
    </section>
  );
}
