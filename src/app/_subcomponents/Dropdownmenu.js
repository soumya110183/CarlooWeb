export default function DropDownMenu({ dropdownOpen }) {
  const dropdownItems = [
    "Global Policy Frameworks: Navigating International AI Standards",
    "Ethical AI Guidelines: Building Responsible AI Systems",
    "Data Protection Laws: Ensuring Data Privacy Across Borders",
    "Carlo PEaaS: Enforcing Rome Call for AI Ethics in Every AI Project",
    "Carlo PEaaS: Enforcing Sharia-Compliant AI Ethics in the Modern World"
  ];

  return (
    <div
      className={`w-full max-w-[700px] h-[343px] absolute left-1/2 transform -translate-x-1/2 bg-black/50 text-white backdrop-blur-lg py-6 px-8 rounded-b-2xl
      transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
      ${dropdownOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-3 scale-95 pointer-events-none"}`}
    >
      <div className="w-full flex justify-center items-center flex-wrap gap-3">
        {dropdownItems.map((text, index) => (
          <div key={index} className="flex flex-col items-center gap-1 max-w-[204px]">
            <img src="/l60_arrczr 1.png" alt="image" className="w-[114px]" />
            <p className="font-medium text-[12px] text-center leading-tight">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
