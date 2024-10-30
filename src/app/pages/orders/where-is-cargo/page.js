"use client"
import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import CurrentRate from "@/components/Items/CurrentRate";
import { images } from "@/components/Elements/data";

export default function WhereIsCargo() {
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
