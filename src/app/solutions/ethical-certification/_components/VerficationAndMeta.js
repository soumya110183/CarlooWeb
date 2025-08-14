"use client";

import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import { FaHashtag, FaFileAlt, FaGlobe, FaClock, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function VerificationAndMeta() {
  const metaData = [
    {
      icon: <FaHashtag className="text-purple-500 text-3xl" />,
      title: "Blockchain-verifiable Badge Hash",
    },
    {
      icon: <FaFileAlt className="text-blue-500 text-3xl" />,
      title: "Dedicated Carlo Verification Page",
    },
    {
      icon: <FaCheckCircle className="text-green-500 text-3xl" />,
      title: "Audit Report History & Recommendations",
    },
    {
      icon: <FaGlobe className="text-yellow-500 text-3xl" />,
      title: "Compliance Jurisdiction Summary",
    },
    {
      icon: <FaClock className="text-red-500 text-3xl" />,
      title: "Last Updated Timestamp & Expiry",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto lg:pb-32 pb-15">
      <div className="lg:max-w-[570px] mb-12">
        <HeadingReuse heading={"Verification and Badge Metadata"} />
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {metaData.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-4 p-6 bg-gradient-to-r from-[#f5f5f5] to-[#ffffff] rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
            whileHover={{ scale: 1.03, boxShadow: "0px 12px 25px rgba(0,0,0,0.15)", transition: { duration: 0.2 } }}
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <p className="text-lg font-semibold text-black ">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
