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

        <div className="mt-10 mb-5 flex justify-center w-full">
          <h2 className="text-2xl font-bold">İade Koşulları</h2>
        </div>
        <div className="bg-white w-full rounded-xl px-10 py-5">
          <p>Ankara Dijital Reklam, günümüzün rekabetçi iş dünyasında işletmelerin başarıya ulaşmaları için vazgeçilmez bir araç haline gelmiştir. Hızla büyüyen iş dünyasıyla Ankara, dijital reklamcılık hizmetlerine olan talebin arttığı <strong className="text-warning cursor-pointer">bir şehir olarak öne çıkmaktadır</strong>. Markaların hedef kitlelerine etkili bir şekilde ulaşabilmesi için dijital reklamcılık, pazarlama stratejilerinin merkezinde yer almaktadır. Bu noktada, Ankara’nın önde gelen dijital reklam ajanslarından biri olan Nano Medya karşımıza çıkmaktadır. Nano Medya, işletmelere özel çözümler sunarak marka bilinirliği ve satışları artırma konusunda önemli katkılarda bulunmaktadır. Nano Medya’nın sunduğu stratejik dijital çözümler, işletmelerin dijital dünyada rekabet avantajı elde etmelerine olanak tanımaktadır.</p>
          <br />
          <p>Ankara Dijital Reklam, günümüzün rekabetçi <strong className="text-warning cursor-pointer">iş dünyasında</strong> işletmelerin başarıya ulaşmaları için vazgeçilmez bir araç haline gelmiştir. Hızla büyüyen iş dünyasıyla Ankara, dijital reklamcılık hizmetlerine olan talebin arttığı bir şehir olarak öne çıkmaktadır. Markaların hedef kitlelerine etkili bir şekilde ulaşabilmesi için dijital reklamcılık, pazarlama stratejilerinin merkezinde yer almaktadır. Bu noktada, Ankara’nın önde gelen dijital reklam ajanslarından biri olan Nano Medya karşımıza çıkmaktadır. Nano Medya, işletmelere özel çözümler sunarak marka bilinirliği ve satışları artırma konusunda önemli katkılarda bulunmaktadır. Nano Medya’nın sunduğu stratejik dijital çözümler, işletmelerin dijital dünyada rekabet avantajı elde etmelerine olanak tanımaktadır.</p>
          <br />
          <p><strong className="text-warning cursor-pointer">Ankara Dijital Reklam</strong>, günümüzün rekabetçi iş dünyasında işletmelerin başarıya ulaşmaları için vazgeçilmez bir araç haline gelmiştir. <strong className="text-warning cursor-pointer">Hızla büyüyen iş dünyasıyla</strong> Ankara, dijital reklamcılık hizmetlerine olan talebin arttığı bir şehir olarak öne çıkmaktadır. Markaların hedef kitlelerine etkili bir şekilde ulaşabilmesi için dijital reklamcılık, pazarlama stratejilerinin merkezinde yer almaktadır. Bu noktada, Ankara’nın önde gelen dijital reklam ajanslarından biri olan Nano Medya karşımıza çıkmaktadır. Nano Medya, işletmelere özel çözümler sunarak marka bilinirliği ve satışları artırma konusunda önemli katkılarda bulunmaktadır. Nano Medya’nın sunduğu stratejik dijital çözümler, işletmelerin dijital dünyada rekabet avantajı elde etmelerine olanak tanımaktadır.</p>
        </div>

        <CurrentRate />

        <BanksInfo />
      </div>
    </GuestLayout>
  );
}
