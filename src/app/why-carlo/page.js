

import GlobalReach from "./_whyCarloComp/GlobalReach";
import Introduction from "./_whyCarloComp/IntroductionSection";
import TrustandTransparency from "./_whyCarloComp/Interactive explainer";
import Trust from "./_whyCarloComp/Trust";

export const metadata = {
  title: "Why Carlo? Ethical AI Oversight",
  description: "Learn why Carlo is the trusted partner for AI compliance—real-time detection, automation, scalability, and audit-ready reporting.",
  keywords: "why Carlo, AI oversight, ethical compliance, audit-ready, policy governance",
};


function page() {
  

  return (
    <div className="mt-25 overflow-y-hidden sm:px-10 px-5">
      <Introduction />
      <GlobalReach />
      <TrustandTransparency />
      <Trust />
    </div>
  );
}

export default page;
