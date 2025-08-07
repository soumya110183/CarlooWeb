import Image from "next/image";
import { FaCross } from "react-icons/fa";

export default function Ethics() {
  return (
    <section className="w-full max-w-[1200px] flex items-center mx-auto justify-between text-foreground pb-32">
      <div>
        <Image
          src="/machine-ai 1.png"
          alt="robot-validator"
          className="w-[500px]"
          width={500}
          height={500}
        />
      </div>
      <div className="w-full max-w-[570px]">
        <h2 className="text-[40px] font-bold">2. Interactive Explainer</h2>
        <div className="flex gap-2">
          <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>

          <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
        </div>

        <h3 className="font-bold text-[24px] mt-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-[#C3C3C3] flex items-center justify-center shrink-0 rounded-full">
            <FaCross color="black" />
          </span>
          Rome Call for AI Ethics
        </h3>
        <p className="font-medium text-[22px] mt-2">
          Promotes transparency, fairness, and human-centered AI. How Carlo
          Helps: Aligns AI systems with the principles of transparency,
          fairness, and human dignity, ensuring compliance with this globally
          endorsed framework.
        </p>
      </div>
    </section>
  );
}
