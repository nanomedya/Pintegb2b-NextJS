"use client"
import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import { images } from "@/components/Elements/data";
import CurrentRate from "@/components/Items/CurrentRate";

export default function DebtStatus() {
  return (
    <GuestLayout>
      <NavbarWrapper />

      <div className="mx-auto container">
        <div className="w-full relative mt-10">
          <Stories images={images} />
        </div>



        <CurrentRate />
      </div>
    </GuestLayout>
  );
}
