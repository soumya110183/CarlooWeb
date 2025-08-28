import ButtonPimary from "@/app/_subcomponents/ButtonPrimary";
import { SiTicktick } from "react-icons/si";

export default function page(){
    return(

    <main className="w-full max-w-[1200px] mx-auto mt-35 text-foreground   lg:px-10 px-5 my-30">
        <div className="w-full max-w-[500px] h-[400px] p-10 mx-auto bg-white rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.3)] ">
<div className="flex items-center justify-center">
    <SiTicktick color="green" size={50} />
</div>
<h2 className="text-black text-2xl font-bold text-center mt-5">
    Payment Sucessfull
</h2>
<p className="font-normal text-base mt-3">Thank you for your payment. Your order is being processed. Login to see your subscriptions</p>
<div className="flex items-center justify-center mt-10">

<ButtonPimary buttonText={"Login"} href={"https://test.policyenforcement.com/login"} wfull={true} />
</div>

        </div>

    </main>
    )
}