"use client"
import React from "react";
import { Input, Button } from "@nextui-org/react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";

export default function MyProfile() {
  const images = [
    {
      title: "Haberler",
      src: "/items/c1.png",
      link: "/pages/news",
    },
    {
      title: "Duyurular",
      src: "/items/c2.png",
      link: "/pages/notice",
    },
    {
      title: "Yeni Ürünler",
      src: "/items/c3.png",
      link: "/pages/new-product",
    },
    {
      title: "Bugünün Ürünleri",
      src: "/items/c4.png",
      link: "/pages/today-product",
    },
    {
      title: "Favori Ürünlerim",
      src: "/items/c5.png",
      link: "/pages/favorite-product",
    },
  ]

  return (
    <GuestLayout>
      <NavbarWrapper />

      <div className="mx-auto container">
        <div className="w-full relative mt-10">
          <Stories images={images} />
        </div>


        <div className="mb-4 mt-12 flex flex-wrap justify-center items-center w-full">
          <span className="text-2xl text-gray-800 font-bold inline-block">Profilim</span>
        </div>
        <form className="w-full bg-white p-5 rounded-xl shadow mt-4 mb-12 w-full max-w-md mx-auto lg:max-w-2xl lg:w-1/2">
          <div className="flex space-x-4 mt-3">
            <Input
              isClearable
              type="text"
              label="İsim"
              variant="bordered"
            />

            <Input
              isClearable
              type="text"
              label="Soyisim"
              variant="bordered"
            />
          </div>
          <div className="flex space-x-4 mt-3">
            <Input
              isClearable
              type="text"
              label="E-Mail"
              variant="bordered"
            />

            <Input
              isClearable
              type="number"
              label="Telefon"
              variant="bordered"
            />
          </div>
          <div className="flex space-x-4 mt-3">
            <Input
              isClearable
              type="text"
              label="Vergi Numarası"
              variant="bordered"
            />

            <Input
              isClearable
              type="text"
              label="Vergi Dairesi"
              variant="bordered"
            />
          </div>

          <div className="flex items-center justify-center mt-6">
            <Button color="warning" className="w-full text-white">Güncelle</Button>
          </div>
        </form>
      </div>
    </GuestLayout>
  );
}
