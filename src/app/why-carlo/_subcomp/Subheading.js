export default function SubHeading({heading}){
    return(
         <h3
          className="font-semibold md:text-[24px] text-[18px]  bg-clip-text text-transparent lg:mt-10 mt-4"
          style={{
            background:
              "linear-gradient(183deg, rgba(182, 154, 239, 1) 0%, rgba(133, 81, 248, 1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {heading}
        </h3>
    )
}