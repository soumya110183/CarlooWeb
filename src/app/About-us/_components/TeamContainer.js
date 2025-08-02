import Image from "next/image";

export default function TeamContainer({img,name,role,details}) {
  return (
    <div className="bg-[#0F092A] px-10 items-center  justify-items-center rounded-3xl py-10 ">
      <div>
        <div className="relative w-56 h-56 rounded-full border border-white overflow-hidden mx-auto">
          <Image
            width={224}
            height={224}
            src={`/${img}`}
            alt={img}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="font-bold text-center text-[24px] mt-3">
          {name}
        </h3>

        <p className="font-semibold text-[18px] text-center">
         {role}
        </p>
        <p className="font-medium text-[16px] mt-2.5 text-center ">
          {details}
        </p>
      </div>
    </div>
  );
}
