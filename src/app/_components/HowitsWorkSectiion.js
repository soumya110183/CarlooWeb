import HowitsWork from "../_subcomponents/HowitsWork";
import ScrollHeading from "../_subcomponents/ScrollHeading";

export default function HowitsWorkSection() {
  return (
    <section>
      <ScrollHeading
        heading="HOW IT'S  WORK"
        paragraph="From data generation to actionable insights, Carlo PEaaS empowers AI developers and enterprises to maintain global compliance effortlessly, ensuring trust and transparency throughout the AI lifecycle"
      />
      <div className="mt-10 flex flex-col gap-10 text-white">
        <div className="w-full max-w-[900px] mx-auto flex">
          <HowitsWork
            image="/data-flow-diagram 1.png"
            heading="Data Generated"
            paragraph="Carlo monitors every data flow, classifying and securing sensitive information."
          />
          <HowitsWork
            image="/marketing-research 1.png"
            heading="Data Stored"
            paragraph="Automated encryption compliance checks for frameworks like GDPR, HIPAA, and CCPA."
          />
        </div>
        <div className="w-full max-w-[900px] mx-auto flex">
          <HowitsWork
            image="/coins-chart 1.png"
            heading="Actionable Insights"
            paragraph="Carlo’s feedback loop refines compliance policies and delivers instant recommendations to developers."
          />
          <HowitsWork
            image="/data-flow-diagram 1.png"
            heading="Data Processing"
            paragraph="Real-time enforcement of privacy laws, bias audits, and ethical safeguards."
          />
        </div>
      </div>
    </section>
  );
}
