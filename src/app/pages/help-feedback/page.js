"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import DailyRate from "@/components/Items/DailyRate";
import BanksInfo from "@/components/Items/BanksInfo";
import CurrentRate from "@/components/Items/CurrentRate";

export default function HelpFeedback() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <GuestLayout>
      <NavbarWrapper />


      <div className="mx-auto container">
        <div className="w-full relative mt-10">
          <Stories images={images} />
        </div>


        <div className="mb-4 mt-12 flex flex-wrap justify-center items-center w-full">
          <span className="text-2xl text-gray-800 font-bold inline-block">Yardım & Geri Bildirim</span>
        </div>
        <div className="w-full p-5 mb-12 bg-white rounded-xl shadow">
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" subtitle="Press to expand" title="Accordion 1">
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              subtitle={
                <span>
                  Press to expand <strong>key 2</strong>
                </span>
              }
              title="Accordion 2"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" subtitle="Press to expand" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 4"
              subtitle={
                <span>
                  Press to expand <strong>key 4</strong>
                </span>
              }
              title="Accordion 4"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="5" aria-label="Accordion 5" subtitle="Press to expand" title="Accordion 5">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>


        <CurrentRate />

        <BanksInfo />
      </div>
    </GuestLayout>
  );
}
