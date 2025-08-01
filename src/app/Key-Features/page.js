import AllInOne from "./_Components-keyFeature/1AllinOne";
import Feedback from "./_Components-keyFeature/Feedback-loops";

import PolicyMonitor from "./_Components-keyFeature/PolicyMonitor";

export default function page(){
    return(
        <div className="mt-40">
            <AllInOne />
            <PolicyMonitor />
            <Feedback />
        </div>
    )
}