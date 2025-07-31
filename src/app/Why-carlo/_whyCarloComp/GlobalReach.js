import CardSlider from "../_subcomp/SwiperSlider";

export default function GlobalReach() {
  return (
    <div className="w-full max-w-[1200px] flex items-center mx-auto justify-between text-white pb-32">
      <div className="w-full max-w-[570px]">
        <h2 className="text-[40px] font-bold">1. Global Reach</h2>
        <div className="flex gap-2">
          <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>

          <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
        </div>
        <p className="font-medium text-[22px] mt-6">
          A visually engaging interactive world map highlights the regions where
          Carlo supports compliance. Each region is clickable, displaying the
          specific laws and frameworks Carlo adheres to
        </p>
        <h3
          className="font-semibold text-[24px] bg-clip-text text-transparent mt-10"
          style={{
            background:
              "linear-gradient(183deg, rgba(182, 154, 239, 1) 0%, rgba(133, 81, 248, 1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Key Feature
        </h3>
        <p className="font-medium text-[22px] mt-2">
          Users can zoom into regions or countries to explore Carlo's compliance
          solutions tailored to local laws.
        </p>
      </div>
      <div className="w-full max-w-[400px]">
        <CardSlider />
      </div>
    </div>
  );
}
