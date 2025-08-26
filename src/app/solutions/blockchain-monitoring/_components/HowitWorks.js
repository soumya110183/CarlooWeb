import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col  items-center gap-16 lg:gap-24 mx-auto text-foreground lg:pb-32 pb-16 ">
      {/* Text Content */}
      <div className="w-full">
        <HeadingReuse heading={"How It Works"} />

        <ul className="mt-4 space-y-4 list-decimal list-inside text-lg max-sm:text-base leading-relaxed">
          <li>
            <strong>Onboarding:</strong> Connect your project wallet, DAO
            framework, and token contract to Carlo’s system.
          </li>
          <li>
            <strong>Configuration:</strong> Select your chain(s), define your
            monitoring thresholds, and set governance metrics.
          </li>
          <li>
            <strong>Real-Time Monitoring:</strong> Carlo begins 24/7 tracking
            with automated alerts and weekly reports.
          </li>
          <li>
            <strong>Audit & Showcase:</strong> Export reports, embed dashboards,
            and apply for the Carlo Blockchain Ethics Badge.
          </li>
        </ul>
      </div>

      {/* Image */}
      <div className="w-full">
        <Image
          src="/howitworks.png"
          alt="how-it-works"
          width={500}
          height={580}
          className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
}
