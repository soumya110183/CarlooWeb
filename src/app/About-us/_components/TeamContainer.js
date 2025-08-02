import Image from "next/image";

export default function TeamContainer(){
 return(
    <div className="bg-[#651FFF] px-5 flex items-center justify-center rounded-3xl py-5">
        <div className="relative rounded-full w-56 h-56">
            <Image
                      width={224}
                      height={224}
                      src="/StevePhoto.png"
                      alt="robot-validator"
                      className="object-contain"
                      
                    />
        </div>

    </div>
 )
}