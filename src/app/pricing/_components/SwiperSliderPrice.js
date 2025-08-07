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
    price: '$6.99/mo',
    title: 'Seed Compliance',
    description: 'Perfect for small teams starting their compliance journey.',
    features: [
      { name: 'Basic GDPR & CCPA support', available: true },
      { name: 'Real-time monitoring (2 projects)', available: true },
      { name: 'Email Support', available: true },
      { name: 'Feedback loops', available: false },
      { name: 'Compliance dashboard', available: false },
    ],
  },
  {
    price: '$29/mo',
    title: 'Growth Compliance',
    description: 'For growing teams needing expanded regional coverage and insights.',
    features: [
      { name: 'Everything in Seed', available: true },
      { name: 'Multi-region support (GDPR, LGPD, PIPL)', available: true },
      { name: 'Feedback loops & basic developer alerts', available: true },
      { name: 'Compliance dashboard', available: true },
      { name: 'Priority Email Support', available: false },
    ],
  },
  {
    price: '$49/mo',
    title: 'Pro Compliance',
    description: 'Designed for maturing companies in regulated sectors like health, fintech, and retail.',
    features: [
      { name: 'All Growth features', available: true },
      { name: 'Unlimited projects', available: true },
      { name: 'Audit logs', available: true },
      { name: 'Role-based access (up to 5 users)', available: true },
      { name: 'Priority Phone & Email Support', available: true },
    ],
  },
  {
    price: '$199/mo',
    title: 'Infinite Compliance',
    description: 'Complete AI ethics compliance suite with advanced customization.',
    features: [
      { name: 'All Global features', available: true },
      { name: 'On-premises deployment', available: true },
      { name: 'Custom rule engine', available: true },
      { name: 'AI-powered continuous validation', available: true },
      { name: '24/7 Dedicated Support & Onboarding', available: true },
      { name: 'Internal team training', available: true },
    ],
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
