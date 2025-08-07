import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";

export default function Featureskey({ heading, paragraph, image, flex }) {
  return (
    <section
      className={`w-full max-w-[1200px] ${
        flex ? "flex-row-reverse" : "flex"
      }  flex items-center mx-auto justify-between text-foreground pb-32`}
    >
      <div className="w-full max-w-[570px]">
        <HeadingReuse heading={heading} />
        <div className="flex gap-2 items-start">
          <p className="font-normal text-[22px] mt-6">{paragraph}</p>
        </div>
      </div>
      <div>
        <Image
          src={`/${image}`}
          alt={image ? image : "image "}
          className="w-[500px]"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
