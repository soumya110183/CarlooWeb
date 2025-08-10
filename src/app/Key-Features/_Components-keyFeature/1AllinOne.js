import ButtonPimary from "@/app/_subcomponents/ButtonPrimary";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";

export default function AllInOne() {
  return (
    <section className="w-full max-w-[1200px] max-lg:flex-col flex items-center mx-auto justify-between text-foreground lg:pb-32 pb-15 ">
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse heading={"All-in-One Compliance Platform for AI"} />
        <div className="flex gap-2 items-start">
          <p className="font-regular text-[22px] mt-6">
            Carlo PEaaS is not just a compliance tool—it&apos;s your automated
            compliance engineer. From real-time monitoring to intelligent policy
            enforcement, Carlo ensures every AI model in your stack meets global
            regulatory and ethical standards, without slowing down your
            development workflow.
          </p>
        </div>
        <div className="mt-12">
          <ButtonPimary buttonText={"Read More"} href={"/About-us"} />
        </div>
      </div>
      <div>
        <Image
          src="/allinOne.png"
          alt="robot-validator"
          className="w-[500px]"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
