import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import SocialMediaIcon from "@/app/_subcomponents/SocialmediaIcon";
import SubScriptionForm from "@/app/_subcomponents/SubScriptionForm";
import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGlobe,
  FaLeaf,
  FaCommentDots,
} from "react-icons/fa";

export default function SubScribeSection() {
  return (
    <section
      className={`w-full max-w-[1200px] max-lg:flex-col   flex items-center mx-auto justify-between text-foreground lg:pb-32 pb-15`}
    >
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse
          heading={"Subscribe to the newsletter and receive notifications."}
        />
        <div className="flex gap-2 items-start">
          <ParagraphReUse paragraph={"Sign up for updates and stay informed about the latest developments and be a part of our community and get the latest news and insights"} />
        </div>
        <SubScriptionForm />
     <SocialMediaIcon />
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
