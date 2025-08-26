export default function HeadingReuse({ heading }) {
  return (
    <>
      <h2 className=" font-bold text-foreground lg:text-[40px] text-[28px] sm:text-[32px] ">
        {heading}
      </h2>
      <div className="flex gap-2">
        <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>

        <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
      </div>
    </>
  );
}
