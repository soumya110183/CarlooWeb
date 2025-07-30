import Link from "next/link";

export default function DropDownMenuResources({ dropdownOpen }) {
  return (
    <div
      className={`w-full max-w-[200px] h-[140px] absolute left-1/2 transform -translate-x-1/2 top-14 bg-black/50 text-white backdrop-blur-lg  rounded-2xl
      transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
      ${
        dropdownOpen
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
      }`}
    >
      <ul className="font-medium text-[14px] space-y-1.5 pt-6 pl-2 ">
        <li>
          <Link href={"#"}>Pricing</Link>
        </li>
        <li>
          <Link href={"#"}>Blog</Link>
        </li>
        <li>
          <Link href={"#"}>Case Studies</Link>
        </li>
      </ul>
    </div>
  );
}
