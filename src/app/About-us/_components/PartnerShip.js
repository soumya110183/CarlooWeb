import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ContainerProvier from "./ContainerProvider";

export default function PartnerShip() {
  return (
    <section className="w-full max-w-[1200px]  mx-auto  text-foreground pb-32">
      <div className="w-full max-w-[570px]">
        <HeadingReuse heading={"Partnership Opportunities"} />

        <div className="flex gap-2 items-start">
          <p className="font-normal text-[22px] mt-6">
            We believe in the power of collaboration to drive meaningful change.
            Carlo PEaaS offers partnership opportunities for:
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-10">
        <ContainerProvier
          title={"Technology Providers:"}
          paragraph={[
            " - Collaborate to integrate Carlo&apos;s compliance tools into your AI frameworks, development platforms, or cloud solutions.",
            "- Example: Partnerships with major platforms like AWS, Microsoft Azure, or Google Cloud to embed Carlo into their ecosystems.",
          ]}
        />
        <ContainerProvier
          title={"Industry Leaders:"}
          paragraph={[
            "- Co-create tailored compliance solutions for specific industries such as healthcare, finance, and retail., development platforms, or cloud solutions.",
            "- Example: Developing sector-specific compliance packages for partners like MedTech companies or FinTech innovators.",
          ]}
        />
        <ContainerProvier
          title={"Regulatory Bodies:"}
          paragraph={[
            "- Work together to set benchmarks for AI compliance and influence global standards.",
            "- Example: Joint initiatives with GDPR task forces or AI ethics councils to create practical compliance guidelines.",
          ]}
        />
        <ContainerProvier
          title={"Startups & Incubators:"}
          paragraph={[
            "Help startups scale responsibly by integrating compliance from day one.",
            "Example: Offering discounted plans and mentorship for startups in AI accelerators.",
          ]}
        />
        <ContainerProvier
          title={"Academic Institutions & Research Centers:"}
          paragraph={[
            "- Promote ethical AI research and development by incorporating Carlo into academic curriculums and AI research projects.",
            "Example: Collaborating with universities to explore AI fairness and bias mitigation strategies.",
          ]}
        />
      </div>
    </section>
  );
}
