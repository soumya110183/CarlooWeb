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
      title: "Card One",
      description: "Description for card one.",
      image: "/images/img1.jpg",
    },
    {
      title: "Card Two",
      description: "Description for card two.",
      image: "/images/img2.jpg",
    },
    {
      title: "Card Three",
      description: "Description for card three.",
      image: "/images/img3.jpg",
    },
    {
      title: "Card Four",
      description: "Description for card four.",
      image: "/images/img4.jpg",
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
          {trust ? <CardTrust /> : <MyCard {...card} />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
