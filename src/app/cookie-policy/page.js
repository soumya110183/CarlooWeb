import CookiePolicy from "./CookiePolicy";

export default function page(){
    return(
       <section className={`w-full max-w-[1280px]  mx-auto flex flex-col lg:flex-row justify-between  gap-10 lg:pb-32 pb-15 text-foreground items-center mt-30`}>
         <CookiePolicy />
        </section>
    )
}