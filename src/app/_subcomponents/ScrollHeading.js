export default function ScrollHeading({heading,paragraph}){
    return(
                 <div className="w-full mx-auto mt-10">
                        <h2
  className="text-[127px] font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#8fa5ff] via-[#38bdf8] to-[#a78bfa]"
>
         {heading}
        </h2> 
        <p className="font-medium text-[18px]  max-w-[1219px] text-center mx-auto">{paragraph}</p>
                    </div>
    )
}