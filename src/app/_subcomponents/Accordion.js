"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function FeatureAccordions({ features }) {
  return (
    <Accordion.Root type="single" collapsible className="w-full space-y-3">
      {features.map((feature, index) => (
        <Accordion.Item
          key={index}
          value={index.toString()}
          className="bg-[#0F0929] data-[state=open]:bg-[#651FFF] px-5 py-2.5 rounded-2xl"
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full justify-between items-center font-medium  sm:text-[18px] text-base">
              <div className="flex  gap-3 items-center">
                <div className="w-8 h-8 bg-[#C3C3C3] flex items-center justify-center shrink-0 rounded-full">
                  {feature.icon}
                </div>
                <div className="font-bold text-white text-left">
                  {feature.featureName}
                </div>
              </div>
              <ChevronDownIcon className="transition-transform duration-200 AccordionChevron" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className={`mt-2 text-white`}>
            <ul className="list-disc list-inside space-y-2 pt-3">
              {feature.featureDetails.map((detail, i) => (
                <li key={i} className="font-normal lg:text-[17px] text-base leading-relaxed">
                  {detail}
                </li>
              ))}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
