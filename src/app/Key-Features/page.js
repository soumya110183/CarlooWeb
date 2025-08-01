import AllInOne from "./_Components-keyFeature/1AllinOne";
import Featureskey from "./_Components-keyFeature/FeedbackLoops";
import { featuresData } from "../_data/data";
import ProjectCount from "./_Components-keyFeature/ProjectCount";
import SubScribeSection from "./_Components-keyFeature/SubsScribeSection";

export default function page() {
  return (
    <div className="mt-40">
      <AllInOne />
      {featuresData.map((feature, index) => (
        <Featureskey
          key={index}
          flex={feature.flex}
          heading={feature.heading}
          paragraph={feature.paragraph}
          image={feature.img}
        />
      ))}
      <ProjectCount />
      <SubScribeSection />
    </div>
  );
}
