import HowitsWork from "../_subcomponents/HowitsWork";
import ScrollHeading from "../_subcomponents/ScrollHeading";

export default function FourthSection(){
    return(
        <section>

        <ScrollHeading heading="HOW IT'S  WORK" paragraph="From data generation to actionable insights, Carlo PEaaS empowers AI developers and enterprises to maintain global compliance effortlessly, ensuring trust and transparency throughout the AI lifecycle"/>
        <div className="mt-10 flex flex-col gap-10">

        
        <div className="w-full max-w-[900px] mx-auto flex">
          <HowitsWork image="/data-flow-diagram 1.png" heading="Data Generated" paragraph="AI and ML technologies generate vast amounts of data. Carlo monitors and tracks data in real-time, ensuring compliance from the outset." />
          <HowitsWork image="/marketing-research 1.png" heading="Data Stored" paragraph="Carlo ensures data is stored in a compliant manner, aligning with local and international data protection laws, such as GDPR and CCPA." />
          </div>
        <div className="w-full max-w-[900px] mx-auto flex">
          <HowitsWork image="/coins-chart 1.png" heading="Actionable Insights" paragraph="Carlo provides actionable insights by offering feedback & compliance reports. It helps organizations adjust their AI models to meet legal and ethical standards" />
          <HowitsWork image="/data-flow-diagram 1.png" heading="Data Processing" paragraph="Carlo processes data by detecting and correcting violations. The platform automatically enforces policies to ensure ethical and legal compliance." />
          </div>



</div>
        </section>
    
    )
}