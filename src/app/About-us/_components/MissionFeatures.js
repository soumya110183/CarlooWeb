import Image from "next/image";

export default function MissionFeatures({children,title,para}){
    return(
           <div>
            <div className="w-9 h-9  bg-[#C3C3C3] flex items-center justify-center rounded-full">
 {children}
            </div>
                 
                    <h3 className="font-semibold text-[22px] mt-1.5 ">{title}</h3>
                    <p className="font-medium text-[18px] mt-1.5">
                      {para}
                    </p>
                  </div>
    )
}