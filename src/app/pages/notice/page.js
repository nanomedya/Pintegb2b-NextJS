"use client"
import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Cardd from "@/components/Items/Card";
import Stories from "@/components/Items/Stories";
import DailyRate from "@/components/Items/DailyRate";

export default function Notice() {
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

  const cardList = [
    { title: 'Siz daha fazlasını istediniz, biz yaptık!', description: 'Bize hem buradan hem de yeni B2B platformumuzdan ulaşabilirsiniz. Lorem ipsum dolor sit amet, consectetur adipiscing elit..', image: '/images/image1.jpg' },
    { title: 'PintegB2B Debriyaj Setlerinde 2000 TL İşçilik Garantisi!', description: 'İşçilik garantisi, 10000 km garantili PintegB2B debriyaj setleri. Pellentesque eget est auctor lacus imperdiet egestas accumsan..', image: '/images/image2.jpg' },
    { title: 'Kış Hazırlığını Şimdiden Yapın. Aracınız için En iyisi!', description: 'Good Year - Pro Defense ile hemen tıkla ve al. Ut ultricies consectetur diam, sed egestas libero feugiat et..', image: '/images/image3.jpg' },
    { title: 'Bu Fiyatlara Bakmadan Kızdırma Bujisi Almayın!', description: 'PintegB2B ile kızdırma bujilerinde yerli üretim. Curabitur et nibh varius, efficitur nibh sit amet, posuere metus..', image: '/images/image4.jpg' },
  ];

  return (
    <GuestLayout>

      <NavbarWrapper />

      <div className="mx-auto container">
        <div className="w-full relative mt-10">
          <Stories images={images} />
        </div>

        <div className="w-full flex flex-wrap relative mt-10">
          <div className="flex flex-wrap w-full relative p-3">
            <div className="mb-4 flex flex-wrap justify-between items-center w-full">
              <span className="text-4xl text-gray-800 font-bold inline-block">Duyurular</span>
            </div>
            <div className="w-full relative bg-white rounded-xl shadow">
              <div className="flex flex-wrap">
                {
                  cardList.map((item, index) => {
                    return (
                      <div className="w-full" key={index}>
                        <Cardd item={item} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap relative mt-10">
          <div className="mb-4 flex flex-wrap justify-center items-center w-full">
            <span className="text-2xl text-gray-800 font-bold inline-block">Günlük Kur</span>
          </div>

          <div className="flex flex-wrap w-full lg:w-1/3 relative p-3">
            <div className="w-full relative bg-white rounded-xl shadow">
              <DailyRate data={34.15} type="$" key="dr1" />
            </div>
          </div>

          <div className="flex flex-wrap w-full lg:w-1/3 relative p-3">
            <div className="w-full relative bg-white rounded-xl shadow">
              <DailyRate data={38.21} type="€" key="dr2" />
            </div>
          </div>

          <div className="flex flex-wrap w-full lg:w-1/3 relative p-3">
            <div className="w-full relative bg-white rounded-xl shadow">
              <DailyRate data={45.77} type="£" key="dr3" />
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>

  );
}
