import { FaCheck } from "react-icons/fa";

export default function ContainerProvier({ title, paragraph }) {
  return (
    <div className="bg-white text-black px-5 flex items-center justify-center rounded-3xl py-5">
      <div>
        <div className="flex">
          {/* <div className="bg-[#651FFF] rounded-full p-2 w-10 h-10 flex items-center justify-center shrink-0 ">
                      <FaCheck className="text-white text-sm" />
                    </div> */}
          <h3 className="font-bold text-[20px]">{title}</h3>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          {paragraph.map((para, index) => (
            <p className="max-w-[450px] font-normal" key={index}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
