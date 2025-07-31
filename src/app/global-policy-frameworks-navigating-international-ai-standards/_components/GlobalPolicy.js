import TrustSteps from "@/app/Why-carlo/_subcomp/TrustSteps";

export default function GlobalPolicy(){
    return(
        <section className="w-full max-w-[1200px] flex items-center mx-auto justify-between text-white pb-32">
          <div className="w-full max-w-[570px]">
        <h2 className="text-[40px] font-bold">Global Policy Frameworks: Navigating International AI Standards</h2>
        <div className="flex gap-2">
          <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>

          <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
        </div>
      <div className="mt-4">
        <TrustSteps title={"G7 International Guiding Principles for Advanced AI:"} steps={["Establishes international norms for responsible AI development.","How Carlo Helps: Aligns AI systems with global ethical norms and legal standards."]}/>
        <TrustSteps title={"UN Algorithmic Impact Assessment Guidelines:"} steps={["Framework for assessing the societal impact of AI systems.","How Carlo Helps: Tracks and analyzes AI impacts, ensuring societal benefits."]}/>
        <TrustSteps title={"World Economic Forum AI Ethics Guidelines:"} steps={["Promotes ethical AI deployment across industries. How Carlo Helps: Provides industry-specific compliance solutions for diverse AI applications."]}/>
        <TrustSteps title={"G7 International Guiding Principles for Advanced AI:"} steps={["Encourages international collaboration on ethical AI practices.","How Carlo Helps: Facilitates cross-border compliance for multinational enterprises."]}/>
      </div>
        </div>
        <div>
        <img
          src="/machine-ai 1.png"
          alt="robot-validator"
          className="w-[500px]"
        ></img>
      </div>
        </section>
    )
}