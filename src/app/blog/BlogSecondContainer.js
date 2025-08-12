import Image from "next/image";

export default function BlogSecondContainer(){
    return(
        <div className="w-full max-w-96 p-6 ">
              <div className="flex text-black justify-between gap-5">
                        <Image
                          src={"/placeholderperson.png"}
                          alt="contents Thumbnail"
                          width={110}
                          height={110}
                          className=" object-cover"
                        />
                        <div>

                        <h3 className="font-bold">The Night My Doorbell Camera Captured a Shooting</h3>
                        <p>Alentica</p>
                        </div>
                      </div>
        </div>
    )
}