import KeyFeatures from "../_subcomponents/KeyFeatures";
import ScrollHeading from "../_subcomponents/ScrollHeading";
import { KeyfeaturesData } from "../_data/data";

export default function KeyFeaturesSection() {
  return (
    <section className="sm:px-10 px-5">
      <ScrollHeading
        heading="KEY FEATURES"
        paragraph="Discover the powerful features of Carlo PEaaS—real-time compliance monitoring, automated policy enforcement, scalable solutions, and seamless integration with your tech stack. Empower your AI projects with the tools needed to ensure global compliance and ethical AI development"
      />
      <div className={`flex flex-col md:gap-16 gap-10 text-white mt-10  `}>
        {KeyfeaturesData.map((feature, index) => (
          <KeyFeatures key={index} features={feature} />
        ))}
      </div>
    </section>
  );
}
