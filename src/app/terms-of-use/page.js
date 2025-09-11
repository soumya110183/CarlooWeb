
import TermsOfUse from "./TermsofUSe";

export const metadata = {
  title: "Terms of Use: Carlo PEaaS Platform Rules and Guidelines",
  description: "Review Carlo PEaaS Terms of Use to understand the rules, guidelines, and legal obligations when using our AI compliance and governance platform. Ensure proper and responsible use of our services.",
  keywords: "Carlo PEaaS, terms of use, platform rules, user guidelines, legal obligations, responsible use, AI compliance platform, ethical AI usage",
};


export default function page(){
    return(
       <section className={`w-full max-w-[1280px]  mx-auto flex flex-col lg:flex-row justify-between  gap-10 lg:pb-32 pb-15 text-foreground items-center mt-30`}>
         <TermsOfUse />
        </section>
    )
}
