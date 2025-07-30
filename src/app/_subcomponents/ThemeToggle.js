// ThemeToggle.jsx
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 mt-5">
      <span className="text-[16px] font-medium">Light</span>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`relative w-12 h-6 rounded-full transition bg-[#472494] dark:bg-purple-700`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-[#651FFF] transition-transform ${
            theme === "dark" ? "translate-x-6" : ""
          }`}
        ></span>
      </button>
      <span className="text-[16px] font-medium">Dark</span>
    </div>
  );
}
