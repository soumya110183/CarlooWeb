"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
;
import ComplianceCard from "./ComplianceCard";

export default function CardSlider() {
  const globalCompliancePlan = [
    {
  price: '$89',
  title: 'Global Compliance',
  description:
    'Enterprise-ready plan for teams managing compliance across regions and platforms.',
  features: [
    'All Pro features',
    'Multi-language support',
    'Integration with AWS, Azure',
    'SLA-backed support',
    'Unlimited Users',
  ],
  
},
    {
  price: '$15',
  title: 'Seed',
  description:
    'Perfect for small teams starting their compliance journey.',
  features: [
    'Basic GDPR & CCPA support',
    'Real-time monitoring (2 projects)',
    ' Email Support',
    'Feedback loops',
    'Compliance dashboard',
  ],
  
}
]


  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      grabCursor={true}
      className="px-4"
    >
      {globalCompliancePlan.map((card, index) => (
      <SwiperSlide key={index}>
  <div className=" flex items-center justify-center">
    <ComplianceCard plan={card} />
  </div>
</SwiperSlide>
      ))}
    </Swiper>
  );
}
