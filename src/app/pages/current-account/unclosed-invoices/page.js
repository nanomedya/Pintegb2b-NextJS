"use client"
import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import { images } from "@/components/Elements/data";
import CurrentRate from "@/components/Items/CurrentRate";
import UnClosedInvoicesTable from "@/components/Items/UnClosedInvoicesTable";
import UnClosedInvoicesModal from "@/components/Items/UnClosedInvoicesModal";

export default function UnclosedInvoices() {
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
          <span className="text-2xl text-gray-900 font-bold inline-block">Kapanmamış Faturalar</span>
        </div>

        <UnClosedInvoicesTable toggleOfferModal={toggleOfferModal} />

        <UnClosedInvoicesModal
          offerModal={offerModal}
          toggleOfferModal={toggleOfferModal}
        />

        <CurrentRate />
      </div>
    </GuestLayout>
  );
}
