import Experience from "../_components/Experience";
import OfficeMap from "../_subcomponents/LocationMap";
import Underline from "../_subcomponents/UnderLine";
import SubScribe from "../About-us/_components/SubScribe";
import ContactDetails from "./Contactcomp/ContactDetails";
import ContactForm from "./Contactcomp/ContactForm";
import ContactWebMap from "./Contactcomp/ContactWebMap";


export default function page() {
  return (
    <div>
      <section className="w-full mx-auto mt-35 text-foreground overflow-y-hidden lg:px-10 px-5 overflow-x-hidden">
        <h2 className="text-[48px] font-bold text-center">
          Get in touch with us
        </h2>
        <Underline />
        <p className="text-[22px] text-center">
          Complete the form, and our team will reach out within 24 hours.
        </p>
        <ContactForm />
        <h2 className="text-[48px] font-bold text-foreground text-center mt-32">
          Need more help
        </h2>
        <p className="text-[22px] text-center text-foreground">
          Queries, complaints and feedback. We will be happy to serve you
        </p>
        <ContactWebMap />
        <ContactDetails />
      
        <Experience />
        <div className="pt-32">
          <SubScribe />
        </div>
        
      </section>
    </div>
  );
}
