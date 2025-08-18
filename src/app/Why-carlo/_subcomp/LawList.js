export default function LawList(){
     const laws = [
  "North America: CCPA, HIPAA, Algorithmic Accountability Act",
  "Europe: GDPR, EU AI Act, Ethics Guidelines for Trustworthy AI",
  "Asia-Pacific: PIPL (China), Singapore PDPA, Japan’s AI Governance Guidelines",
  "Africa: POPIA (South Africa), African Union AI Strategy",
  "Latin America: LGPD (Brazil), Mexico’s Data Protection Laws",
  "Middle East: GCC Data Protection Principles"
];


    return(
           <div className="flex flex-col gap-2 mt-4">
      {laws.map((item, index) => {
        const [region, regulations] = item.split(": ");
        return (
          <h3 key={index} className="lg:text-[18px] text-base">
            <strong>{region}:</strong> {regulations}
          </h3>
        );
      })}
    </div>
    )
}