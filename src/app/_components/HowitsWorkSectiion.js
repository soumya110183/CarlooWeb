import HowitsWork from "../_subcomponents/HowitsWork";
import ScrollHeading from "../_subcomponents/ScrollHeading";

export default function HowitsWorkSection() {
  return (
    <section className="sm:px-10 px-5">
      <ScrollHeading
        heading="HOW IT'S  WORK"
        paragraph="From data generation to actionable insights, Carlo PEaaS empowers AI developers and enterprises to maintain global compliance effortlessly, ensuring trust and transparency throughout the AI lifecycle"
      />
      <div className="mt-10 grid md:grid-cols-2 grid-cols-1 max-w-[900px] mx-auto gap-10 text-white">
        <HowitsWork
          image="/vecteezy_stunning-artistic-holographic-data-interface-with-complex_59437502.png"
          heading="Data Generated"
          paragraph="Carlo monitors every data flow, classifying and securing sensitive information."
        />
        <HowitsWork
          image="/vecteezy_serene-abstract-holographic-data-storage-device-with_60152598.png"
          heading="Data Stored"
          paragraph="Automated encryption compliance checks for frameworks like GDPR, HIPAA, and CCPA."
        />

        <HowitsWork
          image="/vecteezy_nostalgic-spectacular-big-data-analytics-graph-no-background_60062308.png"
          heading="Actionable Insights"
          paragraph="Carlo’s feedback loop refines compliance policies and delivers instant recommendations to developers."
        />
        <HowitsWork
          image="/vecteezy_impressive-futuristic-holographic-display-floating_60066530.png"
          heading="Data Processing"
          paragraph="Real-time enforcement of privacy laws, bias audits, and ethical safeguards."
        />
      </div>
    </section>
  );
}
