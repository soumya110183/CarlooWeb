import Image from "next/image";

export default function Percentage () {
  return (
    <div className="flex w-full justify-between">
      {/* Card 1 */}
      <div className="relative">
        <div className="relative inline-block">
          <Image
            src="/Frame 56.png"
            alt="Preprocessing"
            width={157}
            height={156}
            className="object-contain"
          />
          <h3
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-14 text-[24px] font-semibold"
            style={{
              background:
                "linear-gradient(183deg, rgba(182, 154, 239, 1) 0%, rgba(133, 81, 248, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            80%
          </h3>
        </div>
        <p className="font-bold absolute bottom-2 text-center">Compliance Automation Achieved</p>
      </div>

      {/* Card 2 */}
      <div className="relative">
        <div className="relative inline-block">
          <Image
            src="/Frame 57.png"
            alt="Preprocessing"
            width={157}
            height={156}
            className="object-contain"
          />
          <h3
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-14 text-[24px] font-semibold"
            style={{
              background:
                "linear-gradient(183deg, rgba(182, 154, 239, 1) 0%, rgba(133, 81, 248, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            70%
          </h3>
        </div>
        <p className="font-bold absolute bottom-2 text-center">Customer Satisfaction Increase</p>
      </div>

      {/* Card 3 */}
      <div className="relative">
        <div className="relative inline-block">
          <Image
            src="/Frame 58.png"
            alt="Preprocessing"
            width={157}
            height={156}
            className="object-contain"
          />
          <h3
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-14 text-[24px] font-semibold"
            style={{
              background:
                "linear-gradient(183deg, rgba(182, 154, 239, 1) 0%, rgba(133, 81, 248, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            70%
          </h3>
        </div>
        <p className="font-bold absolute bottom-2 text-center">Coverage of Global Regulatory Experts</p>
      </div>
    </div>
  );
}
