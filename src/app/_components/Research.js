import Card from "../_subcomponents/Card";
import { useTheme } from "../_subcomponents/ThemeContext";

export default function Research() {
const {theme}=useTheme()

  return (
    <section>
      <div className={`mt-[124px] w-full max-w-[1200px] mx-auto flex items-center justify-between ${theme === "light" ? "text-black" : "text-white"}`}>
        <div>
          <h3 className="text-[46px] font-bold">
            Our Research
            <br />
            And Projects
          </h3>
          <div className="flex gap-2">
            <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>

            <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
          </div>
        </div>
        <div className="w-full max-w-[800px]">
          <p className="font-medium text-[22px]">
            AI is the broader concept of machines being able to perform tasks
            that would normally require human intelligence, such as visual
            perception, speech recognition, and language translation.
          </p>
        </div>
      </div>
      <div>
        <Card />
      </div>
    </section>
  );
}
