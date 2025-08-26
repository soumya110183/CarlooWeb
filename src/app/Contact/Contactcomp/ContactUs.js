import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import Image from "next/image";

export default function ContactUs(){
    return(
         <section className="w-full max-w-[1200px] flex max-lg:flex-col gap-5 items-center mx-auto justify-between text-white pb-32">
              <div>
                <Image
                  src="/vision.png"
                  alt="robot-validator"
                  className="w-[500px]"
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-full max-w-[570px]">
                <HeadingReuse heading={"Contact us"} />
                <ParagraphReUse paragraph={"Have questions or need more information about our solutions? Reach out to us anytime — we’re here to help you explore how Algorethics can support your organization."} />
                <div className="flex flex-col gap-2 text-foreground mt-10">
  <p>
    Email:{" "}
    <a
      href="mailto:Info@algorethics.ai"
      className="text-blue-600 hover:underline"
    >
      Info@algorethics.ai
    </a>
  </p>

  <p>
    Dashboard:{" "}
    <a
      href="https://policyenforcement.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      https://policyenforcement.com
    </a>
  </p>

  <p>
    Learn More:{" "}
    <a
      href="https://www.algorethics.info"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      www.algorethics.info
    </a>
  </p>
</div>

              </div>
            </section>
    )
}