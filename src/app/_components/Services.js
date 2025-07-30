import Percentage from "../_subcomponents/Percentage";

export default function Services() {
  return (
    <section>
      <div className="w-full max-w-[1200px] flex mx-auto mt-36 justify-between text-white">
        <div className="w-full max-w-[434px]">
          <h2 className="text-[32px] font-bold">
            Professional Services that Deliver Results
          </h2>
          <div className="flex gap-2 mt-4">
            <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>

            <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
          </div>
          <p className="w-full text-[18px] font-medium mt-4">
            AI (Artifical Intelligence) and ML (MachineLearning) are closely
            related fields that arefocused on the development of computersystems
            that can perform tasks that would normally require human
            intelligence, suchlanguage
          </p>
        </div>
        <div className="w-full max-w-[570px]">
          <Percentage />
          <div className="flex items-center w-full justify-between mt-3.5">
            <div>
              <h3 className="font-bold text-[24px]">
                Have any question about us?
              </h3>
              <p className="text-[16px] font-medium">
                Don't hesitate to contact us. Contact Us
              </p>
            </div>

            <button className="text-white border-none  m-0  outline-none bg-[#651FFF]   p-2.5 text-[15px] rounded-[36px] font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
