"use client"
import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import { images } from "@/components/Elements/data";
import CurrentRate from "@/components/Items/CurrentRate";
import InvoicesTable from "@/components/Items/InvoicesTable";
import InvoicesModal from "@/components/Items/InvoicesModal";

export default function Invoices() {
  const [offerModal, setOfferModal] = React.useState(false)
  const toggleOfferModal = () => setOfferModal(!offerModal)

  return (
    <GuestLayout>
      <NavbarWrapper />

      <div className="mx-auto container">
        <div className="w-full relative mt-10">
          <Stories images={images} />
        </div>
        <div className="mt-12 flex flex-wrap justify-between items-center w-full">
          <span className="text-2xl text-gray-900 font-bold inline-block">Faturalar</span>
        </div>

        <InvoicesTable toggleOfferModal={toggleOfferModal} />

        <InvoicesModal
          offerModal={offerModal}
          toggleOfferModal={toggleOfferModal}
        />

        <CurrentRate />
      </div>
    </GuestLayout>
  );
}
