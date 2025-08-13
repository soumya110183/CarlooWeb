"use client";

import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";


export default function AboutSections() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-0">
      
      {/* AI Compliance */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:pb-32 pb-15">
        <div className="lg:w-1/2">
          <HeadingReuse heading="AI Compliance" />
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Our AI compliance solution ensures that your business operates in
            line with the latest regulations and ethical AI guidelines.
          </p>
          <ul className="mt-6 space-y-3 list-disc list-inside text-gray-600">
            <li>Regular AI audits and reports</li>
            <li>Bias detection and prevention tools</li>
            <li>Data privacy and GDPR alignment</li>
          </ul>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/ai-compliance.png"
            alt="AI Compliance Illustration"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Pricing */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:pb-32 pb-15">
        <div className="lg:w-1/2 order-2 lg:order-1 flex justify-center">
          <Image
            src="/pricing.png"
            alt="Pricing Plans"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2">
          <HeadingReuse heading="Pricing" />
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Flexible plans to suit startups, enterprises, and everything in
            between.
          </p>
          <ul className="mt-6 space-y-3 list-disc list-inside text-gray-600">
            <li>Starter — $19/month</li>
            <li>Business — $49/month</li>
            <li>Enterprise — Custom pricing</li>
          </ul>
        </div>
      </div>

      {/* Start for Free */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <HeadingReuse heading="Start for Free" />
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Try our full platform for free — no credit card required.
          </p>
          <ul className="mt-6 space-y-3 list-disc list-inside text-gray-600">
            <li>14-day free trial</li>
            <li>Access all premium features</li>
            <li>Cancel anytime</li>
          </ul>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/start-free.png"
            alt="Start for Free Illustration"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

    </section>
  );
}
