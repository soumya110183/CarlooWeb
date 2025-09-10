import { BsCheck } from "react-icons/bs";

export default function MyCard({ title, description, image }) {

  const complianceItems = [
  "GDPR",
  "CCPA",
  "HIPAA",
  "Algorithmic Accountability Act",
];
  return (
    <div className="rounded-[42px] w-90 h-99 bg-[#0F092A] hover:scale-105 transition-transform p-10">
      <h2 className="text-[24px] font-bold">Asia-Pacific</h2>
  <div className="flex flex-col gap-6 mt-3">
      {complianceItems.map((item, index) => (
        <div key={index} className="flex items-center gap-3 ">
          <div className="w-8 h-8 rounded-full bg-[#651FFF] flex items-center justify-center">
            <BsCheck className="text-white text-xl" size={25} />
          </div>
          <p className="font-bold text-[16px]">{item}</p>
        </div>
      ))}
    </div>
        
    
      
    </div>
  );
}
