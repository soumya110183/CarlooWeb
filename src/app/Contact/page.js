import Experience from "../_components/Experience";
import SubScribe from "../About-us/_components/SubScribe";
import ContactDetails from "./Contactcomp/ContactDetails";
import ContactForm from "./Contactcomp/ContactForm";

export default function page() {
  return (
    <div>
      <section className="w-full mx-auto mt-35 text-white">
        <h2 className="text-[48px] font-bold text-center">
          Get in touch with us
        </h2>
        <p className="text-[22px] text-center">
          Complete the form, and our team will reach out within 24 hours.
        </p>
        <ContactForm />
        <h2 className="text-[48px] font-bold text-center mt-32">
          Need more help
        </h2>
        <p className="text-[22px] text-center">
          Queries, complaints and feedback. We will be happy to serve you
        </p>
        <ContactDetails />
        <Experience />
        <div className="pt-32">
          <SubScribe />
        </div>
        
      </section>
    </div>
  );
}
