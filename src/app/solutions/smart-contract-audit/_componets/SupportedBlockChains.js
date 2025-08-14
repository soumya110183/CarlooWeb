"use client";

import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import { motion } from "framer-motion";

export default function SupportedBlockChains() {
  const chains = [
    {
      name: "Ethereum",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 417" width="40" height="40">
          <path fill="#343434" d="M127.9 0L125.2 9.4v276.6l2.7 2.7 127.9-76.1z" />
          <path fill="#8C8C8C" d="M127.9 0L0 212.6l127.9 76.1V0z" />
          <path fill="#3C3C3B" d="M127.9 312.7l-1.5 1.8v99.1l1.5 4.4 128-180.1z" />
          <path fill="#8C8C8C" d="M127.9 417.9V312.7L0 237.9z" />
        </svg>
      ),
    },
    {
      name: "Binance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" width="40" height="40">
          <path fill="#F3BA2F" d="M125 0l29.2 29.2-80.3 80.3L125 0zM45.1 45.1l29.2 29.2L45.1 103.6 15.9 74.4l29.2-29.3zM125 250l-29.2-29.2 80.3-80.3L125 250zM204.9 204.9l-29.2-29.2 29.2-29.3 29.2 29.2-29.2 29.3zM125 90.9l34.1 34.1L125 159.1l-34.1-34.1L125 90.9z" />
        </svg>
      ),
    },
    {
      name: "Polygon",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 33" width="40" height="40">
          <path fill="#8247E5" d="M19 0l9.8 5.6v11.3l-9.8 5.6-9.8-5.6V5.6z" />
        </svg>
      ),
    },
    {
      name: "Avalanche",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 2500" width="40" height="40">
          <path fill="#E84142" d="M0 1250C0 560.3 560.3 0 1250 0s1250 560.3 1250 1250-560.3 1250-1250 1250S0 1939.7 0 1250z" />
          <path fill="#FFF" d="M1594.6 1388.3l-204.5-354.3c-35.7-62.4-125.6-62.4-161.3 0L1024.3 1388c-35.7 62.4 8.9 140.1 80.7 140.1h409c71.8 0 116.4-77.7 80.6-140z" />
        </svg>
      ),
    },
    {
      name: "Solana",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397 311" width="40" height="40">
          <linearGradient id="sol" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FFA3" />
            <stop offset="100%" stopColor="#DC1FFF" />
          </linearGradient>
          <path fill="url(#sol)" d="M64 0h270l-64 64H0zM64 124h270l-64 64H0zM64 248h270l-64 64H0z" />
        </svg>
      ),
    },
    {
      name: "Aptos",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="40" height="40">
          <circle cx="200" cy="200" r="200" fill="#000" />
          <path fill="#FFF" d="M70 130h260l-20 20H90zM70 180h260l-20 20H90zM70 230h260l-20 20H90z" />
        </svg>
      ),
    },
    {
      name: "Arbitrum",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="40" height="40">
          <circle cx="200" cy="200" r="200" fill="#2D374B" />
          <path fill="#FFF" d="M100 300l50-200h50l-50 200zM200 300l50-200h50l-50 200z" />
        </svg>
      ),
    },
    {
      name: "Near",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="40" height="40">
          <rect width="400" height="400" fill="#000" />
          <path fill="#FFF" d="M100 300V100l200 200V100z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto lg:pb-32 pb-15">
       <h2 className="text-4xl font-bold text-center ">
        Supported Blockchains
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
        {chains.map((chain, index) => (
          <motion.div
            key={chain.name}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              delay: index * 0.1,
            }}
          >
            {chain.icon}
            <p className="mt-3 text-lg">{chain.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
