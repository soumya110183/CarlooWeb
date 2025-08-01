import ButtonPimary from "@/app/_subcomponents/ButtonPrimary";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";

export default function ProjectCount(){
    return(
        <div className="relative">
            <Image
                    width={1500}
                    height={700}
                    src="/parallax_zqaizh (1) 1.png"
                    alt="background-image"
                    className="absolute inset-0 w-full h-full left-[-700px]  -z-10"
                  />
       
        <section className={`w-full max-w-[1200px] flex  items-center mx-auto justify-between text-white pb-32`}>
            <div className="h-[616px] w-full max-w-[550px] relative">
                      <div className="w-[174px] h-[189px] bg-black/40 backdrop-blur-xl rounded-[14px] absolute top-20 left-36 z-10 ml-4 mt-10">
                        <div className="relative">
                          <Image
                            src="/blue-element.png"
                            alt="blue-element-photo"
                            width={150}
                            height={153}
                            className="absolute top-[-60px] right-0"
                          />
                          <div className="pt-25 pl-4">
                            <h4 className="font-bold text-3xl">23K</h4>
                            <p className="font-semibold text-[15px]">
                              Completed Projects
                            </p>
                          </div>
                        </div>
                      </div>
            
                      <div className="w-[174px] h-[189px] bg-black/40 backdrop-blur-xl rounded-[14px] absolute right-0 z-10 ml-4 mt-10">
                        <div className="relative">
                          <Image
                            src="/round-element.png"
                            alt="round-element"
                            width={150}
                            height={153}
                            className="absolute top-[-60px] right-0"
                          />
                          <div className="pt-25 pl-4">
                            <h4 className="font-bold text-3xl">67</h4>
                            <p className="font-semibold text-[15px]">
                              Completed Projects
                            </p>
                          </div>
                        </div>
                      </div>
            
                      <div className="w-[174px] h-[189px] bg-black/40 backdrop-blur-xl rounded-[14px] absolute bottom-15 left-30 z-10 ml-4 mt-10">
                        <div className="relative">
                          <Image
                            src="/clock.png"
                            alt="clock"
                            width={150}
                            height={153}
                            className="absolute top-[-60px] right-0"
                          />
                          <div className="pt-25 pl-4">
                            <h4 className="font-bold text-3xl">450</h4>
                            <p className="font-semibold text-[15px]">Completed Projects</p>
                          </div>
                        </div>
                      </div>
            
                      <div className="w-[174px] h-[189px] bg-black/40 backdrop-blur-xl rounded-[14px] absolute right-0 bottom-15 z-10 ml-4 mt-10">
                        <div className="relative">
                          <Image
                            src="/pattern.png"
                            alt="pattern"
                            width={150}
                            height={153}
                            className="absolute top-[-60px] right-0"
                            />
                          <div className="pt-25 pl-4">
                            <h4 className="font-bold text-3xl">19K+</h4>
                            <p className="font-semibold text-[15px] text-center">Completed Projects</p>
                          </div>
                        </div>
                      </div>
                    </div>
           <div className="w-full max-w-[570px]">
                  <HeadingReuse  heading={"Carlo - Making AI Compliance Effortless, Ethical, and Built Right Into Your Workflow."}/>
                 <div className="flex gap-2 items-start">
           
                  
                   <p className="font-medium text-[22px] mt-6">
                  AI is the broader concept of machines being able to carry out tasks in a way that would normally require human intelligence. This can include things like image recognition, speech recognition, and decision making. ML is a specific type of AI that involves the use of algorithms that can learn from data.
                 </p>
                 </div>
                <div className="mt-8">
                          <ButtonPimary buttonText={"About us"} />
                        </div>
                 </div>
        </section>
                            </div>
    )
}