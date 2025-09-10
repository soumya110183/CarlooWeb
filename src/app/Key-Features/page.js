import AllInOne from "./_Components-keyFeature/1AllinOne";
import Featureskey from "./_Components-keyFeature/FeedbackLoops";
import { featuresData } from "../_data/data";
import ProjectCount from "./_Components-keyFeature/ProjectCount";
import SubScribeSection from "./_Components-keyFeature/SubsScribeSection";

export const metadata = {
  title: "Features: Monitor, Enforce, Audit",
  description: "Explore Carlo’s powerful features: policy monitoring, cross-platform integration, feedback loops, and enterprise scalability.",
  keywords: "AI compliance features, monitoring, policy enforcement, scalability, audit logs",
};

export default function page() {
  return (
    <div className="mt-40 overflow-hidden lg:px-10 px-5">
      <AllInOne />
      {featuresData.map((feature, index) => (
        <Featureskey
          key={index}
          flex={feature.flex}
          heading={feature.heading}
          paragraph={feature.paragraph}
          image={feature.img}
          size={feature?.size}
        />
      ))}
      <ProjectCount />
      <SubScribeSection />
    </div>
  );
}
