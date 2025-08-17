import Image from "next/image";

export default function CardTrust({ card }) {
  return (
    <div className="rounded-[42px] p-10 h-[500px] bg-[#0F092A]  transition-transform  mx-auto  text-white">
      <div className="w-20 h-20 bg-[#C3C3C3] flex items-center justify-center shrink-0 rounded-full mx-auto">
        <Image
          src={`/${card.image}`}
          alt=""
          className="mx-auto object-cover rounded-full shrink-0"
          width={80}
          height={80}
        />
      </div>

      <h2 className="font-bold text-[16px] mt-4 ">{card.title}</h2>
      <div className="flex flex-col gap-2 mt-3">
        {card.description.map((desc, index) => (
          <p key={index} className="font-normal text-[13px] text-justify  ">
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
}
