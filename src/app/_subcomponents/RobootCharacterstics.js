function RobootCharacterstics({ img, title, paragraph, imp, flex }) {
  return (
    <div
      className={`w-full max-w-[1000px] mx-auto flex  ${
        flex ? "flex-row-reverse" : "flex"
      } justify-between text-white items-center`}
    >
      <div>
        <img src={img} alt="robot-validator" className="w-[314px]"></img>
      </div>
      <div className="max-w-[601px]">
        <h3 className="text-[40px] font-bold w-full ">{title}</h3>
        <p className="text-[22px] font-medium mt-3.5">{paragraph}</p>
        <div className="flex gap-3 items-center">
          <img
            src="/material-icon-theme_robots.png"
            alt="icon-robo"
            className="w-[37px]"
          ></img>
          <p className="text-[18px] font-semibold mt-8 ">{imp}</p>
        </div>
      </div>
    </div>
  );
}

export default RobootCharacterstics;
