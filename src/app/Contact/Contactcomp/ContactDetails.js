import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import PhoneNumber from "./PhoneNumber";
import ContactMap from "./MapContainer";

export default function ContactDetails() {
  return (
  
    <div className="flex mx-auto items-center w-full max-w-[900px] mt-10 justify-between">
  
   
      <div className="w-full max-w-[432px] h-[339px] bg-[#0F092A] rounded-[14px] p-10">
        <div className="mx-auto w-full">
          <div className="flex items-center gap-2">
            <MdEmail size={30} color="#651FFF" />
            <h2 className="text-[24px] text-center font-bold">Email Address</h2>
          </div>
          <div className=" mt-7">
            <h3 className="text-[16px] font-medium">steve@algorethics.ai</h3>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[432px] h-[339px] bg-[#0F092A] rounded-[14px] p-10">
        <div className="mx-auto w-full">
          <div className="flex items-center gap-2">
            <MdEmail size={30} color="#651FFF" />
            <h2 className="text-[24px] text-center font-bold">Location</h2>
          </div>
        </div>
        <div className=" mt-7">
          <h3 className="text-[16px] font-medium">
            333 Sunset Dr, Apt 204 Fort Lauderdale, FL 33301, USA
          </h3>
        </div>
        <div className=" mt-4">
          <h3 className="text-[16px] font-medium">
            Mary Major, Mundakkal West Kollam, Kerala 691001, India
          </h3>
        </div>
      </div>
    </div>
   
  );
}
