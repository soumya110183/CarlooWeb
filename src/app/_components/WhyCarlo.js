import Image from "next/image";

export default function WhyCarlo(params) {
  return (
    <section className="relative">
      <Image
        width={1500}
        height={700}
        src="/parallax_zqaizh (1) 1.png"
        alt="background-image"
        className="absolute inset-0 w-full h-full left-[-700px]  -z-10"
      />
      <div className="flex max-w-[1200px] justify-between items-center gap-20 mt-35 mx-auto text-white ">
        <div className="h-[616px] w-full relative ">
          <div className="w-[220px] h-[220px] bg-black/40 backdrop-blur-xl rounded-[14px] absolute top-10  z-10 ml-4 mt-10 px-2">
            <div className="relative">
              <Image
                src="/blue-element.png"
                alt="blue-element-photo"
                width={150}
                height={153}
                className="absolute top-[-80px] right-0"
              />
              <div className="pt-15 pl-4">
                <h4 className="font-bold text-3xl">+200</h4>
                <p className="font-semibold text-[15px]">
                  Compliance Frameworks
                </p>
                <p className="font-normal text-[14px] mt-2">Align with global standards like GDPR, EU AI Act, HIPAA, and ISO</p>
              </div>
            </div>
          </div>

          <div className="w-[220px] h-[220px] px-2 bg-black/40 backdrop-blur-xl rounded-[14px] absolute right-0 z-10 ml-4 ">
            <div className="relative">
              <Image
                src="/round-element.png"
                alt="round-element"
                width={150}
                height={153}
                className="absolute top-[-80px] right-0"
              />
              <div className="pt-15 pl-4">
                <h4 className="font-bold text-3xl">+200</h4>
                <p className="font-semibold text-[15px]">
                  Real-Time Enforcement
                </p>
                <p className="font-normal text-[14px] mt-2">Instant detection and automated enforcement of compliance policies</p>
              </div>
            </div>
          </div>

          <div className="w-[220px] h-[220px] px-2 bg-black/40 backdrop-blur-xl rounded-[14px] absolute bottom-0 left-10 z-10 ml-4 mt-10">
            <div className="relative">
              <Image
                src="/clock.png"
                alt="clock"
                width={150}
                height={153}
                className="absolute top-[-80px] right-0"
              />
              <div className="pt-15 pl-4">
                <h4 className="font-bold text-3xl">+200</h4>
                <p className="font-semibold text-[15px]">Enterprise Scale</p>
                 <p className="font-normal text-[14px] mt-2">Designed for multi-project, high-volume enterprise deployments.</p>
              </div>
            </div>
          </div>

          <div className="w-[220px] h-[220px] px-2 bg-black/40 backdrop-blur-xl rounded-[14px] absolute right-0 bottom-20 z-10 ml-4 mt-10">
            <div className="relative">
              <Image
                src="/pattern.png"
                alt="pattern"
                width={150}
                height={153}
                className="absolute top-[-80px] right-0"
              />
              <div className="pt-15 pl-4">
                <h4 className="font-bold text-3xl">+200</h4>
                <p className="font-semibold text-[15px]">Virtual Machine</p>
                <p className="font-normal text-[14px] mt-2">Isolated, secure sandbox for testing and validating compliance.</p>
                

              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-[46px] font-bold">
            Why Carlo is our <br />
            Complicance Partner
          </h2>
          <div className="flex gap-2">
            <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
            <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
          </div>
          <div className="flex flex-col gap-3 mt-10">
            {[
              "Real-time compliance monitoring",
              "Automated policy enforcement",
              "Scalable for multi-project and enterprise use",
              "Audit-ready reporting and certification",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <div
                  className="rounded-full"
                  style={{
                    width: "18px",
                    height: "18px",
                    background:
                      "linear-gradient(183deg, rgba(182, 154, 239, 1) 0%, rgba(133, 81, 248, 1) 100%)",
                  }}
                ></div>
                <p className="text-[20px] font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
