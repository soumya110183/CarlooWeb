"use client";

import Image from "next/image";
import { useTheme } from "../_subcomponents/ThemeContext";
import animationBot from "../../../public/animations/animation-bot.json";
import LottieShield from "../LottieAnimations/LottieForm";

export default function WhyCarlo(params) {
  const whycarlo = [
    {
      heading: "Real-time compliance monitoring",
      details:
        "Instantly detect privacy violations, bias, and policy breaches across AI pipelines.",
    },

    {
      heading: "Automated Policy Enforcement",
      details:
        "Block, sanitize, and alert in milliseconds—without manual intervention.",
    },
    {
      heading: "Enterprise Scalability",
      details:
        " Deploy across multiple projects and teams with centralized policy governance.",
    },
    {
      heading: "Audit-Ready Reporting",
      details:
        " Generate detailed compliance logs and certifications for regulators and stakeholders.",
    },
    {
      heading: "Isolated Compliance Sandbox",
      details:
        "Test and validate your AI models in a secure, virtual environment.",
    },
  ];

  const { theme } = useTheme();
  return (
    <section className="relative sm:px-10 px-5  ">
      <Image
        width={1500}
        height={700}
        src="/parallax_zqaizh (1) 1.png"
        alt="background-image"
        className="absolute inset-0 w-full h-full left-[-700px] lg:block hidden -z-10"
      />
      <div
        className={`flex max-w-[1200px] max-lg:flex-col  justify-between items-center gap-20 mt-35 mx-auto text-foreground  `}
      >
        <div className="h-[616px] w-full relative px-10 ">
          <div
            style={{
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
            }}
            className={`w-[220px] h-[220px] ${
              theme === "light" ? "bg-white/40" : "bg-black/40"
            }  bg-black/40 backdrop-blur-xl rounded-[14px] absolute top-10  z-10 ml-4 mt-10 px-2`}
          >
            <div className="relative">
              <Image
                src="/3d-rendering-social-media-icon.png"
                alt="blue-element-photo"
                width={150}
                height={153}
                className="absolute top-[-60px] right-[-30]"
              />

              <div className="pt-15 pl-4">
                <h4 className="font-bold text-3xl">+200</h4>
                <p className="font-semibold text-[15px]">
                  Compliance Frameworks
                </p>
                <p className="font-normal text-[14px] mt-2">
                  Align with global standards like GDPR, EU AI Act, HIPAA, and
                  ISO
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
            }}
            className={`w-[220px] h-[220px] px-2  ${
              theme === "light" ? "bg-white/40" : "bg-black/40"
            }  backdrop-blur-xl rounded-[14px] absolute right-0 z-10 ml-4 `}
          >
            <div className="relative">
              <Image
                src="/10943594-removebg-preview.png"
                alt="round-element"
                width={150}
                height={153}
                className="absolute top-[-60px] right-[-30]"
              />
              <div className="pt-15 pl-4">
                <h4 className="font-bold text-3xl">+200</h4>
                <p className="font-semibold text-[15px]">
                  Real-Time Enforcement
                </p>
                <p className="font-normal text-[14px] mt-2">
                  Instant detection and automated enforcement of compliance
                  policies
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
            }}
            className={`w-[220px] h-[220px] px-2 ${
              theme === "light" ? "bg-white/40" : "bg-black/40"
            } backdrop-blur-xl rounded-[14px] absolute bottom-0 left-10 z-10 ml-4 mt-10`}
          >
            <div className="relative">
              <Image
                src="/image-removebg-preview.png"
                alt="clock"
                width={150}
                height={153}
                className="absolute top-[-60px] right-[-30]"
              />
              <div className="pt-15 pl-4">
                <h4 className="font-bold text-3xl">+200</h4>
                <p className="font-semibold text-[15px]">Enterprise Scale</p>
                <p className="font-normal text-[14px] mt-2">
                  Designed for multi-project, high-volume enterprise
                  deployments.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
            }}
            className={`w-[220px] h-[220px] ${
              theme === "light" ? "bg-white/40" : "bg-black/40"
            } px-2 bg-black/40 backdrop-blur-xl rounded-[14px] absolute right-0 bottom-20 z-10 ml-4 mt-10`}
          >
            <div className="relative">
              <Image
                src="/image-removebg-preview (1).png"
                alt="pattern"
                width={150}
                height={153}
                className="absolute top-[-60px] right-[-50]"
              />
              <div className="pt-15 pl-4">
                <h4 className="font-bold text-3xl">+200</h4>
                <p className="font-semibold text-[15px]">Virtual Machine</p>
                <p className="font-normal text-[14px] mt-2">
                  Isolated, secure sandbox for testing and validating
                  compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative ">
          <div className="absolute top-[-40] right-0 z-0 max-lg:hidden">
            <LottieShield animationData={animationBot} />
          </div>
          <h2 className="lg:text-[46px] text-[32px] font-bold z-10">
            Why Carlo is our <br />
            Complicance Partner
          </h2>
          <div className="flex gap-2">
            <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
            <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
          </div>
          <div className="flex flex-col gap-3 mt-5">
            {whycarlo.map((text, index) => (
              <div key={index}>
                <div key={index} className="flex items-center  shrink-0 gap-2">
                  <div
                    className="rounded-full shrink-0 sm:w-[18px] sm:h-[18px] w-[14px] h-[14px]"
                    style={{
                      background:
                        "linear-gradient(183deg, rgba(182, 154, 239, 1) 0%, rgba(133, 81, 248, 1) 100%)",
                    }}
                  ></div>
                  <p className="md:text-[20px] text-base sm:text-[18px]  font-semibold">
                    {text.heading}
                  </p>
                </div>
                <p className="md:text-[20px] text-base sm:text-[18px]  font-medium">
                  {text.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
