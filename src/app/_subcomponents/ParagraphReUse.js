export default function ParagraphReUse({paragraph,center}){
    return(
        <div>
            <p className={`font-normal text-foreground md:text-[22px] text-base sm:text-[18px] lg:mt-6 mt-4 ${center && "text-center"}`}>
        {paragraph}
        </p>
        </div>
    )
}