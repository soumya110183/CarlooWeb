import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import PhoneNumber from "./PhoneNumber";

export default function ContactDetails() {
  return (
    <div className="flex mx-auto items-center w-full max-w-[1350px] mt-10 justify-between">
      <div className="w-full max-w-[432px] h-[339px] bg-[#0F092A] rounded-[14px] p-10">
        <div className="mx-auto w-full">
          <div className="flex items-center gap-2">
            <IoIosCall size={30} color="#651FFF" />
            <h2 className="text-[24px] text-center font-bold">Call Now</h2>
          </div>
          <div className="flex flex-col gap-4 mt-7">
            <PhoneNumber
              image={"1f1fa-1f1f8 1.svg"}
              number={"+1 929-400-3096"}
              loc={"Algorethics USA"}
            />
            <PhoneNumber
              image={"1f1ee-1f1f3 1.svg"}
              number={"+91 91 4897-4612"}
              loc={"Algorethics India"}
            />
            <PhoneNumber
              image={"1f1e6-1f1ea 1.svg"}
              number={"+971 50 268 2270"}
              loc={" Algorethics UAE"}
            />
            <PhoneNumber
              image={"1f1ec-1f1ea 1.svg"}
              number={"+995 598 50 25 55"}
              loc={" Algorethics Georgia"}
            />
          </div>
        </div>
      </div>
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
