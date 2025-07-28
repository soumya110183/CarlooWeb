export default function SeventhFunction() {
  return (
    <section>
      <div
        className="w-full max-w-[1000px] h-[502px] mx-auto rounded-[50px] mt-[222px] text-white"
        style={{
          background:
            "linear-gradient(173deg, rgba(138, 252, 253, 1) 0%, rgba(227, 199, 217, 1) 100%)",
          boxShadow: "0 -80px 100px -20px rgba(138, 252, 253, 0.7)",
        }}
      >
        <div className="pt-20 ">
          <h3 className="font-bold text-[48px] text-center text-black">
            Experience Compliance,
            <br />
            Effortlessly
          </h3>
          <p className="font-medium text-[22px]  text-center text-black w-full max-w-[900px] mx-auto">
            Explore how Carlo PEaaS simplifies AI compliance with real-time
            monitoring, automated enforcement, and actionable insights. See for
            yourself how easy it is to ensure trust and transparency in your AI
            systems
          </p>
          <div className="flex text-[15px] font-semibold justify-center gap-7 mt-7">
            <button className="p-2.5 bg-black rounded-[37px] ">
              START FREE TRIAL
            </button>
            <button className="p-2.5 bg-transparent border-2 borderblack text-black rounded-[37px]">
              TALK TO A COMPLIANCE SUPPORT{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
