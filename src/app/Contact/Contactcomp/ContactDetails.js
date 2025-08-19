import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import PhoneNumber from "./PhoneNumber";
import ContactMap from "./MapContainer";

export default function ContactDetails({currentLoc}) {
  return (
  
    <div className="flex mx-auto items-center w-full max-w-[900px] mt-10 justify-between text-white">
  
   
   
      <div className="w-full max-w-[432px] h-[339px] bg-[#0F092A] rounded-[14px] p-10">
        <div className="mx-auto w-full">
          <div className="flex items-center gap-2">
            <MdEmail size={30} color="#651FFF" />
            <h2 className="md:text-[24px]  text-[18px] text-center font-bold">Location</h2>
          </div>
        </div>
        <div className=" mt-7">
          <h3 className="text-[16px] font-bold">
           {currentLoc.name}
          </h3>
        </div>
        <div className=" mt-4">
          <p className="text-[16px] font-medium">
            {currentLoc.address}
          </p>
          <h3 className="text-[16px] font-medium mt-4">
             📞 {currentLoc.phone}
          </h3>
          <h3 className="text-[16px] font-medium mt-4">
             📧 Info@algorethics.ai
          </h3>
        </div>
      </div>
    </div>
   
  );
}
