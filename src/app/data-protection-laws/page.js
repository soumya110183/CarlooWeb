import Image from "next/image";
import TrustSteps from "../Why-carlo/_subcomp/TrustSteps";
import HeadingReuse from "../_subcomponents/HeadingReuse";
import {dataProtectionLawsData} from "../_data/data"





export default function page() {
  return (
    <div className="mt-50">
      <section className="w-full max-w-[1200px] flex items-center mx-auto justify-between text-white pb-32">
        <div className="w-full max-w-[570px]">
          <HeadingReuse
            heading={"Data Protection Laws: Ensuring Data Privacy Across Borders"}
          />
          <p className="font-medium text-[22px] mt-6">
            Carlo PEaaS ensures compliance with the most stringent global data
            protection regulations. Each compliance is represented with a
            Unicode icon for better visualization and organization.
          </p>
          <div className="mt-7">
            {dataProtectionLawsData.map((item, index) => (
              <TrustSteps key={index} title={item.title} steps={item.steps} />
            ))}
          </div>
        </div>
        <div>
          <Image
            src="/machine-ai 1.png"
            alt="robot-validator"
            className="w-[500px]"
            width={500}
            height={500}
          />
        </div>
      </section>
    </div>
  );
}
