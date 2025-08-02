import TeamContainer from "./TeamContainer";

export default function MeetTeam(){
    return(
        <div>
            <h2 className="text-[48px] font-bold text-center">Meet The Team</h2>
            <p className="text-[22px] font-medium text-center">Get to know the minds powering our work</p>
            <div className="grid grid-cols-2 gap-8 mt-10">
                <TeamContainer />

            </div>
        </div>
    )
}