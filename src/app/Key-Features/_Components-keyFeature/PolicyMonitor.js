

import HeadingReuse from "../../_subcomponents/HeadingReuse";
import Image from "next/image";

export default function PolicyMonitor() {
  return (
    <section className="w-full max-w-[1200px] flex items-center mx-auto justify-between text-white pb-32">
      <div>
        <Image
          src="/machine-ai 1.png"
          alt="robot-validator"
          className="w-[500px]"
          width={500}
          height={500}
        />
      </div>
      <div className="w-full max-w-[570px]">
        <HeadingReuse heading={"Policy Monitoring & Enforcement"} />
        <div className="flex gap-2 items-start">
          <p className="font-medium text-[22px] mt-6">
           By continuously monitoring data flows and AI outputs, Carlo ensures that every step of the AI lifecycle is compliant, reducing the risk of data breaches, fines, and non-compliance.
          </p>
        </div>
       
      </div>
    </section>
  );
}
