"use client"
import React from "react";
import { Input, Tabs, Tab, Card, CardBody, Select, SelectItem, Checkbox, Button, Link } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Slider from "@/components/Items/Slider";
import { Search } from "react-feather";
import ProductTable from "@/components/Items/Table";
import Cardd from "@/components/Items/Card";
import { list, carsGroup } from "@/app/data/search_data";
import Stories from "@/components/Items/Stories";
import DailyRate from "@/components/Items/DailyRate";
import BankAccounts from "@/components/Items/BankAccounts";

export default function Notification() {
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

  const images2 = [
    {
      title: "slayt 1",
      src: "https://placehold.co/1536x480/orange/white",
    },
    {
      title: "slayt 1",
      src: "https://placehold.co/1536x480/orange/white",
    },
    {
      title: "slayt 1",
      src: "https://placehold.co/1536x480/orange/white",
    },
  ]

  const banks = [
    {
      title: "Garanti",
    },
    {
      title: "Akbank",
    },
    {
      title: "Yapı Kredi",
    },
    {
      title: "Kuveyttürk",
    },
    {
      title: "Ziraat Bankası",
    },
    {
      title: "İş Bankası",
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


        <div className="mb-4 mt-12 flex flex-wrap justify-center items-center w-full">
          <span className="text-2xl text-gray-800 font-bold inline-block">Bildirimler</span>
        </div>
        <div className="w-full max-w-md mx-auto lg:max-w-2xl lg:w-1/2 bg-white rounded-xl shadow p-3">
          <div className="mb-3 flex justify-start items-center">
            <div><img src="/items/c1.png" alt="" style={{ height: 50 }} /></div>
            <div className="ml-3">
              <div><strong>Lorem Ipsum</strong></div>
              <div className="mt-0"><span className="font-normal text-small">Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
            </div>
          </div>

          <div className="mb-3 flex justify-start items-center">
            <div><img src="/items/c1.png" alt="" style={{ height: 50 }} /></div>
            <div className="ml-3">
              <div><strong>Lorem Ipsum</strong></div>
              <div className="mt-0"><span className="font-normal text-small">Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
            </div>
          </div>

          <div className="mb-3 flex justify-start items-center">
            <div><img src="/items/c1.png" alt="" style={{ height: 50 }} /></div>
            <div className="ml-3">
              <div><strong>Lorem Ipsum</strong></div>
              <div className="mt-0"><span className="font-normal text-small">Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
            </div>
          </div>

          <div className="mb-3 flex justify-start items-center">
            <div><img src="/items/c1.png" alt="" style={{ height: 50 }} /></div>
            <div className="ml-3">
              <div><strong>Lorem Ipsum</strong></div>
              <div className="mt-0"><span className="font-normal text-small">Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
            </div>
          </div>

          <div className="mb-3 flex justify-start items-center">
            <div><img src="/items/c1.png" alt="" style={{ height: 50 }} /></div>
            <div className="ml-3">
              <div><strong>Lorem Ipsum</strong></div>
              <div className="mt-0"><span className="font-normal text-small">Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
            </div>
          </div>

          <div className="mb-3 flex justify-start items-center">
            <div><img src="/items/c1.png" alt="" style={{ height: 50 }} /></div>
            <div className="ml-3">
              <div><strong>Lorem Ipsum</strong></div>
              <div className="mt-0"><span className="font-normal text-small">Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
            </div>
          </div>

          <div className="mb-3 flex justify-start items-center">
            <div><img src="/items/c1.png" alt="" style={{ height: 50 }} /></div>
            <div className="ml-3">
              <div><strong>Lorem Ipsum</strong></div>
              <div className="mt-0"><span className="font-normal text-small">Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
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


        <div className="w-full flex flex-wrap relative mt-10 p-3">
          <div className="mb-4 flex flex-wrap justify-start items-center w-full">
            <span className="text-2xl text-gray-800 font-bold inline-block">Banka Hesaplarımız</span>
          </div>
          <div className="flex flex-wrap w-full mt-3 relative">
            <div className="w-full relative bg-white rounded-xl shadow p-3 overflow-x-auto whitespace-nowrap">
              <Table aria-label="bank accounts list table" shadow="none" className="w-full">
                <TableHeader>
                  <TableColumn>Banka</TableColumn>
                  <TableColumn>Şube</TableColumn>
                  <TableColumn>Şube Kodu</TableColumn>
                  <TableColumn>Hesap No</TableColumn>
                  <TableColumn>IBAN Numarası</TableColumn>
                </TableHeader>
                <TableBody>
                  {banks.map((item, key) => (
                    <TableRow key={key}>
                      <TableCell>	{item.title} </TableCell>
                      <TableCell>	BEYKENT TİCARİ </TableCell>
                      <TableCell>	1604 </TableCell>
                      <TableCell>	6299877 </TableCell>
                      <TableCell>		TR30 0006 2001 6040 0006 2998 77 </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>

  );
}
