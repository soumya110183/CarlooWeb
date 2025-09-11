import EthicalAIPolicy from "./EthicalAiPolicy";

export const metadata = {
  title: "Ethical AI Policy: Carlo PEaaS Guidelines for Responsible AI",
  description: "Carlo PEaaS Ethical AI Policy outlines our commitment to responsible, fair, and transparent AI. Understand the principles and practices we follow to ensure AI systems are ethical, unbiased, and compliant with global standards.",
  keywords: "Carlo PEaaS, ethical AI, AI governance, responsible AI, transparency, fairness, AI compliance, bias prevention, AI standards, ethical guidelines",
};


export default function page(){
    return(
       <section className={`w-full max-w-[1280px]  mx-auto flex flex-col lg:flex-row justify-between  gap-10 lg:pb-32 pb-15 text-foreground items-center mt-30`}>
        <EthicalAIPolicy />
        </section>
    )
}
