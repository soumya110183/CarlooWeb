export default function SecondSection(params) {
    return(
        <section className="relative">
           <img
    src="/parallax_zqaizh (1) 1.png"
    alt="background-image"
    className="absolute inset-0 w-full h-full left-[-700px]  -z-10"
  />
            <div className="flex  max-w-[1200px] justify-between items-center gap-20 mt-35 mx-auto  text-white">
    <div className="h-[616px] w-full relative ">
 
  <div className="w-[174px] h-[189px] bg-black/40 backdrop-blur-xl rounded-[14px] absolute top-20 left-36 z-10 ml-4 mt-10">
 <div className="relative">
        <img src="/blue-element.png" alt="blue-element-photo" className="absolute top-[-60] right-0 w-[150px]"></img>
      
    <div className="pt-25 pl-4">
     
      <h4 className="font-bold text-3xl">+200</h4>
      <p className="font-semibold text-[15px]">Virtual Machine</p>
    </div>
    </div>
  </div>
  <div className="w-[174px] h-[189px] bg-black/40 backdrop-blur-xl rounded-[14px] absolute right-0 z-10 ml-4 mt-10">
     <div className="relative">
        <img src="/round-element.png" alt="round-element" className="absolute top-[-60] right-0 w-[150px]"></img>
      
    <div className="pt-25 pl-4">
     
      <h4 className="font-bold text-3xl">+200</h4>
      <p className="font-semibold text-[15px]">Virtual Machine</p>
    </div>
    </div>
  </div>
  <div className="w-[174px] h-[189px] bg-black/40 backdrop-blur-xl rounded-[14px] absolute bottom-15 left-30 z-10 ml-4 mt-10">
    <div className="relative">
        <img src="/clock.png" alt="clock.png" className="absolute top-[-60] right-0 w-[150px]"></img>
      
    <div className="pt-25 pl-4">
     
      <h4 className="font-bold text-3xl">+200</h4>
      <p className="font-semibold text-[15px]">Virtual Machine</p>
    </div>
    </div>
  </div>
  <div className="w-[174px] h-[189px] bg-black/40 backdrop-blur-xl rounded-[14px] absolute right-0 bottom-15 z-10 ml-4 mt-10">
     <div className="relative">
        <img src="/pattern.png" alt="pattern.png" className="absolute top-[-60] right-0 w-[150px]"></img>
      
    <div className="pt-25 pl-4">
     
      <h4 className="font-bold text-3xl">+200</h4>
      <p className="font-semibold text-[15px]">Virtual Machine</p>
    </div>
    </div>
  </div>
</div>

          <div className="w-full">
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