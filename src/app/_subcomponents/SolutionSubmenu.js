import Link from "next/link";

function SolutionSubmenu({ ref, dropdownOpen }) {
  return (
    <div
      ref={ref}
      className={`w-full px-5 py-5 absolute left-1/2 transform -translate-x-1/2 top-14 bg-black/50 text-white backdrop-blur-lg  rounded-2xl
      transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
      ${
        dropdownOpen
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
      }`}
    >
      <ul className="font-medium text-[14px] space-y-1.5 ">
        <li>
          <Link href="/pricing">AI Compliance</Link>
        </li>
        <li>
          <Link href="/blog">Blockchain & DeFi Monitoring</Link>
        </li>
        <li>
          <Link href="/case-studies">Smart Contract Audits</Link>
        </li>
        <li>
          <Link href="/case-studies">Ethical Certification (Carlo Badge)</Link>
        </li>
        <li>
          <Link href="/case-studies">RAK DAO Setup & Ethical Compliance</Link>
        </li>
      </ul>
    </div>
  );
}

export default SolutionSubmenu;
