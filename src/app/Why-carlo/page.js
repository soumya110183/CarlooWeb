

import GlobalReach from "./_whyCarloComp/GlobalReach";
import Introduction from "./_whyCarloComp/IntroductionSection";
import TrustandTransparency from "./_whyCarloComp/Interactive explainer";
import Trust from "./_whyCarloComp/Trust";

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
