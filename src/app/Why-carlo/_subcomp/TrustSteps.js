export default function TrustSteps({title,steps}){
    return(
         <div>
          <div className="pb-4">
               <h3
          className="font-semibold text-[20px]  "
         
        >
          {title}
        </h3>
        {steps.map((step,index)=>(
               <div className="mt-3 flex-col flex gap-3" key={index}>
        <div className="flex gap-2 shrink-0">
    
          <div
              className="mt-1 rounded-full flex-shrink-0"
              style={{
                width: "12px",
                height: "12px",
                background:
                  "linear-gradient(183deg, rgba(182, 154, 239, 1) 0%, rgba(133, 81, 248, 1) 100%)",
              }}
            ></div>
        <p className="text-[18px] font-medium">{step}</p>
        </div>
       
        </div>
        ))}
      

          </div>
        </div>
    )
}