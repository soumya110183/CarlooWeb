import CookiePolicy from "./CookiePolicy";

export const metadata = {
  title: "Cookie Policy: Carlo PEaaS Data Collection and Usage",
  description: "Learn how Carlo PEaaS uses cookies to enhance your experience, collect analytics, and ensure personalized interactions while complying with global privacy standards like GDPR and CCPA.",
  keywords: "Carlo PEaaS, cookie policy, data collection, GDPR, CCPA, user analytics, personalized experience, web tracking, privacy compliance",
};


export default function page(){
    return(
       <section className={`w-full max-w-[1280px]  mx-auto flex flex-col lg:flex-row justify-between  gap-10 lg:pb-32 pb-15 text-foreground items-center mt-30`}>
         <CookiePolicy />
        </section>
    )
}
