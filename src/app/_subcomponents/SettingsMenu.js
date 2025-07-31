import { forwardRef } from "react";
import ThemeToggle from "./ThemeToggle";

const SettingsMenu = forwardRef(({ dropdownOpen }, ref) => {
  return (
    <div
      ref={ref}
      className={`w-full max-w-[211px] h-[388px] bg-[#282828] rounded-[11px] absolute right-0 top-20 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
      ${
        dropdownOpen
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
      }`}
    >
      <div>
        <div className="w-full max-w-[176px] mx-auto mt-5">
          <h4 className="font-bold text-[14px]">Theme Mode</h4>
          <ThemeToggle />
        </div>
        <div className="w-full h-[1px] bg-[#424242] mt-5"></div>
        <div className="w-full max-w-[176px] mx-auto mt-5">
          <h4 className="font-bold text-[14px]">Language</h4>
        </div>
      </div>
    </div>
  );
});

SettingsMenu.displayName = "SettingsMenu";
export default SettingsMenu;
