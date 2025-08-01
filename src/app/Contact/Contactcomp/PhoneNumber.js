import Image from "next/image";

export default function PhoneNumber({ image, number, loc }) {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image
          src={`/${image}`}
          alt={image ? image : "image "}
          width={23}
          height={23}
        />
        <h3 className="text-[16px] font-medium">{number}</h3>
      </div>

      <h3 className="text-[16px] font-medium">{loc}</h3>
    </div>
  );
}
