export default function CardComp({heading,paragraph,img}){
    return(
        <div className="relative w-[320px] h-[400px] rounded-[20px] overflow-hidden shadow-lg">
  
  <img
    src={img}
    alt="AI Robot"
    className="w-full h-full object-cover"
  />

 
  <div className="absolute inset-0 bg-gradient-to-t from-black via-[#00000080] to-transparent"></div>


  <div className="absolute bottom-0 p-6 text-white z-10">
    <h3 className="text-[22px] font-bold leading-tight">
      {heading}
    </h3>
    <p className="mt-3 text-[16px] leading-[1.6]">
     {paragraph}
    </p>
  </div>
</div>
    )
}