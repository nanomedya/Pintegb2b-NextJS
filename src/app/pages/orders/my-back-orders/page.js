"use client"
import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import { images } from "@/components/Elements/data";
import CurrentRate from "@/components/Items/CurrentRate";
import MyBackOrdersTable from "@/components/Items/MyBackOrdersTable";

export default function MyBackOrders() {
  return (
    <GuestLayout>
      <NavbarWrapper />

      <div className="mx-auto container">
        <div className="w-full relative mt-10">
          <Stories images={images} />
        </div>
        <div className="mt-12 flex flex-wrap justify-between items-center w-full">
          <span className="text-2xl text-gray-900 font-bold inline-block">Bakiye Siparişlerim</span>
        </div>

        <MyBackOrdersTable />

        <CurrentRate />
      </div>
    </GuestLayout>
  );
}
