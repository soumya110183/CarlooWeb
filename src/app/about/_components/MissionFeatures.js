export default function MissionFeatures({ children, title, para }) {
  return (
    <div>
      <div className="w-9 h-9  bg-[#C3C3C3] flex items-center justify-center rounded-full">
        {children}
      </div>

      <h3 className="font-semibold md:text-[22px] text-base sm:text-[18px] mt-1.5 ">{title}</h3>
      <p className="font-normal text-sm sm:text-[18px]  mt-1.5">{para}</p>
    </div>
  );
}
