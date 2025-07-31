import Image from "next/image";

function RobootCharacterstics({ img, title, paragraph, imp, flex }) {
  return (
    <div
      className={`w-full max-w-[1000px] mx-auto flex ${
        flex ? "flex-row-reverse" : "flex"
      } justify-between text-white items-center`}
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
      <div className="max-w-[601px]">
        <h3 className="text-[40px] font-bold w-full">{title}</h3>
        <p className="text-[22px] font-medium mt-3.5">{paragraph}</p>
        <div className="flex gap-3 items-center">
          <Image
            src="/material-icon-theme_robots.png"
            alt="icon-robo"
            width={37}
            height={37}
            className="mt-8"
          />
          <p className="text-[18px] font-semibold mt-8">{imp}</p>
        </div>
      </div>
    </div>
  );
}

export default RobootCharacterstics;
