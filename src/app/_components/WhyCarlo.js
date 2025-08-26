"use client";
import Image from "next/image";
import { useTheme } from "../_subcomponents/ThemeContext";
import animationBot from "../../../public/animations/animation-bot.json";
import LottieShield from "../LottieAnimations/LottieForm";

export default function WhyCarlo() {
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
    <section className="relative sm:px-10 px-5">
      <Image
        width={1500}
        height={700}
        src="/parallax_zqaizh (1) 1.png"
        alt="background-image"
        className="absolute inset-0 w-full h-full left-[-700px] lg:block hidden -z-10"
      />

      <div className="flex max-w-[1200px] max-lg:flex-col justify-between items-center gap-20 mt-20 lg:mt-35 mx-auto text-foreground">
        <div className="relative w-full min-h-[616px] px-5 sm:px-10 max-lg:order-2 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-6 max-lg:h-auto">
          <div
            style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }}
            className={`w-[220px] h-[220px] sm:w-[220px] sm:h-[220px] ${
              theme === "light" ? "bg-white/40" : "bg-black/40"
            } backdrop-blur-xl rounded-[14px] absolute lg:top-10 lg:left-4 z-10 px-2
              max-lg:static max-lg:w-full`}
          >
            <div className="relative">
              <Image
                src="/3d-rendering-social-media-icon.png"
                alt="blue-element-photo"
                width={150}
                height={153}
                className="absolute top-[-60px] right-[-30px]"
              />
              <div className="pt-14 pl-4">
                <h4 className="font-bold text-2xl sm:text-3xl">+55</h4>
                <p className="font-semibold text-[15px]">
                  Compliance Frameworks
                </p>
                <p className="font-normal text-sm mt-2">
                  Align with global standards like GDPR, EU AI Act, HIPAA, and
                  ISO
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }}
            className={`w-[220px] h-[220px] sm:w-[220px] sm:h-[220px] px-2 ${
              theme === "light" ? "bg-white/40" : "bg-black/40"
            } backdrop-blur-xl rounded-[14px] absolute lg:top-10 lg:right-0 z-10
              max-lg:static max-lg:w-full`}
          >
            <div className="relative">
              <Image
                src="/10943594-removebg-preview.png"
                alt="round-element"
                width={150}
                height={153}
                className="absolute top-[-60px] right-[-30px]"
              />
              <div className="pt-14 pl-4">
                <h4 className="font-bold text-2xl sm:text-3xl">+200</h4>
                <p className="font-semibold text-[15px]">
                  Real-Time Enforcement
                </p>
                <p className="font-normal text-sm mt-2">
                  Instant detection and automated enforcement of compliance
                  policies
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }}
            className={`w-[220px] h-[220px] sm:w-[220px] sm:h-[220px] px-2 ${
              theme === "light" ? "bg-white/40" : "bg-black/40"
            } backdrop-blur-xl rounded-[14px] absolute lg:bottom-0 lg:left-10 z-10
              max-lg:static max-lg:w-full`}
          >
            <div className="relative">
              <Image
                src="/image-removebg-preview.png"
                alt="clock"
                width={150}
                height={153}
                className="absolute top-[-60px] right-[-30px]"
              />
              <div className="pt-14 pl-4">
                <h4 className="font-bold text-2xl sm:text-3xl">+150</h4>
                <p className="font-semibold text-[15px]">Enterprise Scale</p>
                <p className="font-normal text-sm mt-2">
                  Designed for multi-project, high-volume enterprise
                  deployments.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }}
            className={`w-[220px] h-[220px] sm:w-[220px] sm:h-[220px] px-2 ${
              theme === "light" ? "bg-white/40" : "bg-black/40"
            } backdrop-blur-xl rounded-[14px] absolute lg:bottom-20 lg:right-0 z-10
              max-lg:static max-lg:w-full`}
          >
            <div className="relative">
              <Image
                src="/image-removebg-preview (1).png"
                alt="pattern"
                width={150}
                height={153}
                className="absolute top-[-60px] right-[-50px]"
              />
              <div className="pt-14 pl-4">
                <h4 className="font-bold text-2xl sm:text-3xl">+85</h4>
                <p className="font-semibold text-[15px]">Virtual Machine</p>
                <p className="font-normal text-sm mt-2">
                  Isolated, secure sandbox for testing and validating
                  compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative max-lg:order-1">
          <div className="absolute top-[-40px] right-0 z-0 max-lg:hidden">
            <LottieShield animationData={animationBot} />
          </div>
          <h2 className="lg:text-[46px] text-[28px] sm:text-[32px] font-bold z-10">
            Why Carlo is our <br /> Compliance Partner
          </h2>
          <div className="flex gap-2 my-3">
            <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
            <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
          </div>

          <div className="flex flex-col gap-3 mt-5">
            {whycarlo.map((text, index) => (
              <div key={index}>
                <div className="flex items-center gap-2">
                  <div
                    className="rounded-full shrink-0 sm:w-[18px] sm:h-[18px] w-[14px] h-[14px]"
                    style={{
                      background:
                        "linear-gradient(183deg, rgba(182, 154, 239, 1) 0%, rgba(133, 81, 248, 1) 100%)",
                    }}
                  ></div>
                  <p className="md:text-[20px] text-base sm:text-[18px] font-semibold">
                    {text.heading}
                  </p>
                </div>

                <p className="md:text-[20px] text-base sm:text-[18px] font-medium pl-6 sm:pl-6">
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
