export default function SubHeading({heading}){
    return(
         <h3
          className="font-semibold text-[24px] bg-clip-text text-transparent mt-10"
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