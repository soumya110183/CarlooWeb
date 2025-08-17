import Image from "next/image";

function RobootCharacterstics({ img, title, paragraph, imp, flex }) {
  return (
    <div
      className={`w-full max-w-[1000px] mx-auto  flex max-lg:flex-col ${
        flex ? "flex-row-reverse" : "flex"
      } justify-between text-white items-center my-12`}
    >
      <div>
        <Image
          src={img}
          alt="robot-validator"
          width={314}
          height={479}
          className="w-[314px] h-auto"
        />
      </div>
      <div className={`max-w-[601px] text-foreground`}>
        <h3 className={`md:text-[40px] font-bold w-full text-2xl sm:text-3xl`}>
          {title}
        </h3>
        <p className="md:text-[22px] font-medium mt-3.5 text-base sm:text-[18px]">
          {paragraph}
        </p>
        <div className="flex max-md:flex-col   gap-3 md:items-center mt-8">
          <Image
            src="/material-icon-theme_robots.png"
            alt="icon-robo"
            width={37}
            height={37}
          />
          <p className="md:text-[18px] text-base font-medium italic">{imp}</p>
        </div>
      </div>
    </div>
  );
}

export default RobootCharacterstics;
