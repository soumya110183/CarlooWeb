export default function SecondSection(params) {
    return(
        <section>
            <div className="flex  max-w-[1100px] justify-between items-center gap-2 mt-35 mx-auto  text-white">
               <div>
            <img src="/robot.png" className="w-[500px]" alt="" />
          </div>
          <div>
            <h2 className="text-[46px] font-bold">
                Why Carlo is our <br/>Complicance Partner
            </h2>
            <div className="flex gap-2">

            <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>

        <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
            </div>
      <div className="flex flex-col gap-3 mt-10">
  {[
    "Real-time compliance monitoring",
    "Automated policy enforcement",
    "Scalable for multi-project and enterprise use",
  ].map((text) => (
    <div key={text} className="flex items-center gap-2">
      <div
        className="rounded-full"
        style={{
          width: "18px",
          height: "18px",
          background:
            "linear-gradient(183deg, rgba(182, 154, 239, 1) 0%, rgba(133, 81, 248, 1) 100%)",
        }}
      ></div>
      <p className="text-[20px] font-medium">{text}</p>
    </div>
  ))}
</div>
  <img src="/image 9.png" className="w-[500px] rounded-2xl mt-5"   alt="" />
          </div>
            </div>

        </section>
    )
}