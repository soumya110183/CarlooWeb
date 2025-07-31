import GlobalReach from "./_whyCarloComp/GlobalReach";
import Introduction from "./_whyCarloComp/IntroductionSection";
import TrustandTransparency from "./_whyCarloComp/Interactive explainer";
import Trust from "./_whyCarloComp/Trust";

function page() {
  return (
    <div className="mt-25">
      <Introduction />
      <GlobalReach />
      <TrustandTransparency />
      <Trust />
    </div>
  );
}

export default page;
