import Link from "next/link";
import PriceHolder from "./PriceHolder";

export default function CheckoutPage({isOpen}){
    return (
        <div className={`fixed bottom-25 right-0 z-500  ${isOpen ? "translate-x-0" : "translate-x-[100%]"}`}>

        <div className="bg-white pt-10  w-[610px] h-[677px]  text-black rounded-l-[10px] relative">
            <h2 className="pl-10 font-bold text-[32px]">Cart</h2>
            <div className="flex items-center justify-center">

            <div className="bg-white p-5 shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-[5px] w-full max-w-[536px] h-[383px] mt-5">
              <h3 className="font-semibold text-[20px]">Seed Compliance</h3>
              <PriceHolder />
            </div>
            </div>
        <div className="w-full p-5 bg-white  shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)] rounded-b-[10px] absolute bottom-0">
            <div className="w-full flex justify-between">

            <h3 className="font-semibold">Subtotal</h3>
            <h3 className="font-bold text-[20px] text-[#651FFF]">$6.99/mo</h3>
            </div>
            <button className="w-full bg-[#651FFF] rounded-[8px] py-3.5 font-semibold text-white mt-7">
                <Link href={"/"}>Buy Now
                </Link>
            </button>

        </div>
        </div>
        </div>
    )
}