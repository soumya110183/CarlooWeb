import { IoIosQuote } from "react-icons/io";

export default function QoutesContainer({qoute=" Empowering trust in every algorithm by embedding ethics and complianceat the heart of AI development"}) {
  return (
    <div className="px-10 py-20 bg-[#651FFF] rounded-[9px] flex items-center justify-center relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[-30px]  ">
        <IoIosQuote size={60} />
      </div>
      <p className="font-medium italic text-[24px]  max-w-[400px]">
       {qoute}
      </p>
    </div>
  );
}
