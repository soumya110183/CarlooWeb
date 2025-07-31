import Image from "next/image";
import TrustSteps from "../_subcomp/TrustSteps";

export default function TrustandTransparency() {
  return (
    <div className="w-full max-w-[1200px] flex items-center mx-auto justify-between text-white pb-32">
     <div>
             <Image
             width={500}
             height={580}
               src="/whyCarlo.png"
               alt="robot-validator"
               className="w-[500px]"
             />
           </div>
      <div className="w-full max-w-[570px]">
        <h2 className="text-[40px] font-bold">2. Interactive Explainer</h2>
        <div className="flex gap-2">
          <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>

          <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
        </div>
        <p className="font-medium text-[22px] mt-6">
          An interactive workflow diagram explains how Carlo integrates
          seamlessly into your AI projects. Each step includes a clickable icon
          that reveals detailed functionality:
        </p>
        <div className="mt-4">
          <TrustSteps
            title={"Step 1 : Data Monitoring"}
            steps={[
              "Real-time tracking of data flow through AI models and applications.",
              "Ensures no personally identifiable information (PII) or sensitive data is mishandled",
            ]}
          />
          <TrustSteps
            title={"Step 2: Policy Enforcement"}
            steps={[
              "Detects policy violations and takes automated actions like blocking or alerting.",
              "Example: Prevents models from using biased datasets or unauthorized data access.",
            ]}
          />
          <TrustSteps
            title={"Step 3: Feedback & Corrections"}
            steps={[
              "Sends detailed reports and JSON-based feedback for developers to retrain models or correct workflows.",
            ]}
          />
          <TrustSteps
            title={"Step 4: Compliance Assurance"}
            steps={[
              "Generates audit-ready logs and reports for stakeholders, showcasing adherence to global laws and ethical AI principles.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
