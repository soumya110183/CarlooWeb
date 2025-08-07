"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import MyCard from "./Mycard";
import CardTrust from "./CardTrust";

export default function CardSlider({ trust,compliance }) {
  const data = [
    {
      title: "Certified by the Rome Call for AI Ethics:",
      description: ["Pioneering fairness, accountability, and human-centered AI development.","Trusted by organizations that value ethical AI as a cornerstone of their innovation."],
      image: "gdpr.png",
    },
    {
      title: "Aligned with GDPR, CCPA, and Global Standards:",
      description: ["Ensures your AI applications comply with major regulatory frameworks.","Carlo’s proactive risk management minimizes fines, protects data privacy, and fosters user trust."],
      image: "carlo-peass.png",
    },
   
  ];

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      grabCursor={true}
      className="px-4"
    >
      {data.map((card, index) => (
        <SwiperSlide key={index}>
          {trust ? <CardTrust card={card} /> : <MyCard {...card} />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
