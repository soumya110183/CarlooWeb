import PrivacyPolicy from "./PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy: Carlo PEaaS Data Protection and User Privacy",
  description: "Read Carlo PEaaS Privacy Policy to understand how we collect, use, and protect your personal data. Learn about our compliance with global data protection laws like GDPR, CCPA, and how we ensure your information is secure.",
  keywords: "Carlo PEaaS, privacy policy, data protection, GDPR compliance, CCPA compliance, user privacy, personal data security, information protection, data governance, ethical AI",
};


export default function page(){
    return(
       <section className={`w-full max-w-[1280px]  mx-auto flex flex-col lg:flex-row justify-between  gap-10 lg:pb-32 pb-15 text-foreground items-center mt-30`}>
         <PrivacyPolicy />
        </section>
    )
}
