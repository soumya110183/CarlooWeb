import { FaCheck } from "react-icons/fa";

export default function PointsContainer({ title, para }) {
  return (
    <div className="w-full bg-[#0F092A] flex items-center rounded-full px-5 py-5 gap-5 text-white">
      <div className="bg-[#651FFF] rounded-full p-2 w-10 h-10 flex items-center justify-center shrink-0 ">
        <FaCheck className="text-white text-sm" />
      </div>
      <div>
        <h3 className="text-[20px] font-bold">{title}</h3>
        <p className="font-normal text-[18px]">{para}</p>
      </div>
    </div>
  );
}
