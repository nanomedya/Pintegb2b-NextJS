"use client"
import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import DailyRate from "@/components/Items/DailyRate";
import BanksInfo from "@/components/Items/BanksInfo";
import { images } from "@/components/Elements/data";
import CurrentRate from "@/components/Items/CurrentRate";

export default function ReturnConditions() {
  return (
    <GuestLayout>
      <NavbarWrapper />

      <div className="mx-auto container">
        <div className="w-full relative mt-10">
          <Stories images={images} />
        </div>



        <CurrentRate />

        <BanksInfo />
      </div>
    </GuestLayout>
  );
}
