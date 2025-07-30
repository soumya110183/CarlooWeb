export default function KeyFeatures({ features }) {
  console.log(features.heading);
  return (
    <div
      className={`w-full max-w-[1000px] flex ${
        features.flex ? "flex-row-reverse" : ""
      } items-center mx-auto justify-between gap-4`}
    >
      <div className="mt-5">
        <img src={features.img} className="w-[400px] rounded-2xl mt-5" alt="" />
      </div>
      <div>
        <div className="flex  gap-2 items-start  ">
          <div
            className="rounded-full mt-4"
            style={{
              width: "18px",
              height: "18px",
              background:
                "linear-gradient(183deg, rgba(182, 154, 239, 1) 0%, rgba(133, 81, 248, 1) 100%) ",
            }}
          ></div>
          <h3
            className="text-[32px] w-full max-w-[400px] font-semibold bg-clip-text text-transparent"
            style={{
              background:
                "linear-gradient(183deg, rgba(182, 154, 239, 1) 0%, rgba(133, 81, 248, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {features.heading}
          </h3>
        </div>
        <p className="text-[22px] w-full max-w-[488px] font-medium mt-5">
          {features.paragraph}
        </p>
      </div>
    </div>
  );
}
