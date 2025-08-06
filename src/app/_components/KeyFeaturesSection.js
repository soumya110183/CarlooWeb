"use client"

import KeyFeatures from "../_subcomponents/KeyFeatures";
import ScrollHeading from "../_subcomponents/ScrollHeading";
import { KeyfeaturesData } from "../_data/data";
import { useTheme } from "../_subcomponents/ThemeContext";

export default function KeyFeaturesSection() {

    const {theme}=useTheme()
  return (
    <section>
      <ScrollHeading
        heading="KEY FEATURES"
        paragraph="Discover the powerful features of Carlo PEaaS—real-time compliance monitoring, automated policy enforcement, scalable solutions, and seamless integration with your tech stack. Empower your AI projects with the tools needed to ensure global compliance and ethical AI development"
      />
      <div className={`flex flex-col gap-16 text-white mt-10 `}>
        {KeyfeaturesData.map((feature, index) => (
          <KeyFeatures key={index} features={feature} theme={theme} />
        ))}
      </div>
    </section>
  );
}
