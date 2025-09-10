import Experience from "../_components/Experience";
import OfficeMap from "../_subcomponents/LocationMap";
import ParagraphReUse from "../_subcomponents/ParagraphReUse";
import Underline from "../_subcomponents/UnderLine";
import SubScribe from "../About-us/_components/SubScribe";

import ContactForm from "./Contactcomp/ContactForm";
import ContactUs from "./Contactcomp/ContactUs";
import ContactWebMap from "./Contactcomp/ContactWebMap";

export const metadata = {
  title: "Contact Carlo for AI Compliance",
  description: "Get in touch with Carlo PEaaS for demos, support, and partnerships. Offices in USA, India, UAE, Georgia.",
  keywords: "contact Carlo, AI compliance demo, support, partnership",
};



export default function page() {
  return (
    <div>
      <section className="w-full mx-auto mt-35 text-foreground overflow-y-hidden  overflow-x-hidden">
        <div className="lg:px-10 px-5">

        <h2 className=" lg:text-[48px] text-[28px] sm:text-[32px] font-bold text-center ">
          Get in touch with us
        </h2>
        <Underline />
        <ParagraphReUse paragraph={"Complete the form, and our team will reach out within 24 hours."} center={true} />
        <ContactForm />
        <h2 className="lg:text-[48px] text-[28px] sm:text-[32px] font-bold text-foreground text-center mt-32 max-sm:mt-16">
          Need more help
        </h2>
       <ParagraphReUse paragraph={"Queries, complaints and feedback. We will be happy to serve you"} center={true} />
        <ContactWebMap />
        <ContactUs />
        </div>
      
      
        <Experience />
        <div className="lg:pt-32 pt-15 px-5">
          <SubScribe />
        </div>
        
      </section>
    </div>
  );
}
