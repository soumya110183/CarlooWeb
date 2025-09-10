


import HeadingReuse from "../_subcomponents/HeadingReuse";
import { featuresGlobalAI } from "../_data/data";
import FeatureAccordions from "../_subcomponents/Accordion";
import MotionImage from "./Motionimage";

export const metadata = {
  title: "Ethical Guardians: Validator, Watcher, Guardian, Messenger",
  description: "Meet Carlo’s Ethical Guardians—real-time modules that validate, monitor, enforce, and deliver feedback for AI compliance.",
  keywords: "ethical guardians, validator, watcher, guardian, messenger, AI modules",
};


export default function page() {
  return (
    <div className="mt-50 px-5 sm:px-10">
      <section className="w-full max-w-[1200px] flex max-lg:flex-col items-center mx-auto justify-between text-white lg:pb-32 pb-15">
        <div className="w-full max-w-[570px]">
          <HeadingReuse
            heading={"Ethical AI Guidelines: Building Responsible AI Systems"}
          />
          <div className="mt-7">
            <FeatureAccordions features={featuresGlobalAI} />
          </div>
        </div>
       <MotionImage />
      </section>
    </div>
  );
}
