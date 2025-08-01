import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";

export default function SubScribeSection() {
  return (
    <section
      className={`w-full max-w-[1200px]   flex items-center mx-auto justify-between text-white pb-32`}
    >
      <div className="w-full max-w-[570px]">
        <HeadingReuse
          heading={"Subscribe to the newsletter and receive notifications."}
        />
        <div className="flex gap-2 items-start">
          <p className="font-medium text-[22px] mt-6">
            Sign up for updates and stay informed about the latest developments
            and be a part of our community and get the latest news and insights
          </p>
        </div>
        
      </div>
      <div>
        <Image
          src="/machine-ai 1.png"
          alt="robot-validator"
          className="w-[500px]"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
